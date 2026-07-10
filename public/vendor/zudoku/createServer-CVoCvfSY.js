import { a as e, t } from "./chunk-HEgqtunE.js";
import { n } from "./slugify-DPAwprLU.js";
import { n as r, t as i } from "./constants-BjZ2MprH.js";
//#region ../../node_modules/.pnpm/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js
var a = Symbol.for("@whatwg-node/promise-helpers/FakePromise");
function o(e) {
	return e?.then != null;
}
function s(e) {
	let t = e;
	return t && t.then && t.catch && t.finally;
}
function c(e, t, n, r) {
	let i = l().then(e).then(t, n);
	return r && (i = i.finally(r)), v(i);
}
function l(e) {
	return e && s(e) ? e : o(e) ? {
		then: (t, n) => l(e.then(t, n)),
		catch: (t) => l(e.then((e) => e, t)),
		finally: (t) => l(t ? _(e, t) : e),
		[Symbol.toStringTag]: "Promise"
	} : {
		then(t) {
			if (t) try {
				return l(t(e));
			} catch (e) {
				return f(e);
			}
			return this;
		},
		catch() {
			return this;
		},
		finally(t) {
			if (t) try {
				return l(t()).then(() => e, () => e);
			} catch (e) {
				return f(e);
			}
			return this;
		},
		[Symbol.toStringTag]: "Promise",
		__fakePromiseValue: e,
		[a]: "resolved"
	};
}
function u() {
	if (Promise.withResolvers) return Promise.withResolvers();
	let e, t;
	return {
		promise: new Promise(function(n, r) {
			e = n, t = r;
		}),
		get resolve() {
			return e;
		},
		get reject() {
			return t;
		}
	};
}
function d(e, t, n) {
	if (e?.length === 0) return;
	let r = e[Symbol.iterator](), i = 0;
	function a() {
		let { done: e, value: o } = r.next();
		if (e) return;
		let s = !1;
		function l() {
			s = !0;
		}
		return c(function() {
			return t(o, l, i++);
		}, function(e) {
			if (e && n?.push(e), !s) return a();
		});
	}
	return a();
}
function f(e) {
	return {
		then(t, n) {
			if (n) try {
				return l(n(e));
			} catch (e) {
				return f(e);
			}
			return this;
		},
		catch(t) {
			if (t) try {
				return l(t(e));
			} catch (e) {
				return f(e);
			}
			return this;
		},
		finally(e) {
			if (e) try {
				e();
			} catch (e) {
				return f(e);
			}
			return this;
		},
		__fakeRejectError: e,
		[Symbol.toStringTag]: "Promise",
		[a]: "rejected"
	};
}
function p(e, t, n, r) {
	Symbol.asyncIterator in e && (e = e[Symbol.asyncIterator]());
	let i, a, o;
	if (r) {
		let e;
		o = (t) => (e ||= c(r, () => t, () => t), e);
	}
	typeof e.return == "function" && (i = e.return, a = (t) => {
		let n = () => {
			throw t;
		};
		return i.call(e).then(n, n);
	});
	function s(e) {
		return e.done ? o ? o(e) : e : c(() => e.value, (e) => c(() => t(e), m, a));
	}
	let u;
	if (n) {
		let e, t = n;
		u = (n) => (e ||= c(() => n, (e) => c(() => t(e), m, a)), e);
	}
	return {
		next() {
			return e.next().then(s, u);
		},
		return() {
			let t = i ? i.call(e).then(s, u) : l({
				value: void 0,
				done: !0
			});
			return o ? t.then(o) : t;
		},
		throw(t) {
			return typeof e.throw == "function" ? e.throw(t).then(s, u) : a ? a(t) : f(t);
		},
		[Symbol.asyncIterator]() {
			return this;
		}
	};
}
function m(e) {
	return {
		value: e,
		done: !1
	};
}
function h(e) {
	return e?.[a] === "resolved";
}
function g(e) {
	return e?.[a] === "rejected";
}
function _(e, t) {
	return "finally" in e ? e.finally(t) : e.then((e) => {
		let n = t();
		return o(n) ? n.then(() => e) : e;
	}, (e) => {
		let n = t();
		if (o(n)) return n.then(() => {
			throw e;
		});
		throw e;
	});
}
function v(e) {
	if (h(e)) return e.__fakePromiseValue;
	if (g(e)) throw e.__fakeRejectError;
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@envelop+instrumentation@1.0.0/node_modules/@envelop/instrumentation/esm/instrumentation.js
function y(e, t) {
	let n = {
		...t,
		...e
	};
	for (let r of Object.keys(n)) r in e && r in t && (n[r] = (n, i) => e[r](n, () => t[r](n, i)));
	return n;
}
var b = (e) => ({
	fn(t, n) {
		return t ? (...r) => {
			let i;
			return t(e, () => {
				i = n(...r);
			}), i;
		} : n;
	},
	asyncFn(t, n) {
		return t ? (...r) => {
			let i;
			return c(() => t(e, () => (i = n(...r), o(i) ? i.then(() => void 0) : void 0)), () => i);
		} : n;
	}
}), x = /* @__PURE__ */ new WeakMap(), S = Symbol("ENVELOP_IS_INTROSPECTION");
function C(e) {
	return (typeof e == "string" ? e : e.body).indexOf("__schema") !== -1;
}
function w(e) {
	return e.length === 1 ? e[0] : {
		schema: e[0],
		document: e[1],
		rootValue: e[2],
		contextValue: e[3],
		variableValues: e[4],
		operationName: e[5],
		fieldResolver: e[6],
		subscribeFieldResolver: e[7]
	};
}
var T = (e) => ((...t) => e(w(t)));
function E(e) {
	return e.length === 1 ? e[0] : {
		schema: e[0],
		document: e[1],
		rootValue: e[2],
		contextValue: e[3],
		variableValues: e[4],
		operationName: e[5],
		fieldResolver: e[6],
		typeResolver: e[7]
	};
}
var D = (e) => ((...t) => e(E(t)));
function O(e) {
	return typeof e == "object" && !!e && typeof e[Symbol.asyncIterator] == "function";
}
function k(e, t) {
	if (O(e.result)) return { onNext: t };
	t({
		args: e.args,
		result: e.result,
		setResult: e.setResult
	});
}
function ee(e, t) {
	let n;
	function r() {
		return n ||= e[Symbol.asyncIterator](), n;
	}
	let i = !1;
	return {
		[Symbol.asyncIterator]() {
			return this;
		},
		next() {
			return r().next().then((e) => (e.done && i === !1 && (i = !0, t()), e));
		},
		return() {
			let e = r().return?.();
			return i === !1 && (i = !0, t()), e || l({
				done: !0,
				value: void 0
			});
		},
		throw(e) {
			let t = r().throw?.();
			if (t) return t;
			throw e;
		},
		[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")]() {
			return l();
		}
	};
}
function te(e, t) {
	let n;
	function r() {
		return n ||= e[Symbol.asyncIterator](), n;
	}
	return {
		[Symbol.asyncIterator]() {
			return this;
		},
		next() {
			return r().next().catch((e) => (t(e), {
				done: !0,
				value: void 0
			}));
		},
		return() {
			return r().return?.() || l({
				done: !0,
				value: void 0
			});
		},
		throw(e) {
			let t = r().throw?.();
			if (t) return t;
			throw e;
		},
		[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")]() {
			return l();
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@envelop+core@5.5.1/node_modules/@envelop/core/esm/orchestrator.js
function A(e) {
	throw Error(`No \`${e}\` function found! Register it using "useEngine" plugin.`);
}
function ne({ plugins: e }) {
	let t = null, n = !1, r = () => A("parse"), i = () => A("validate"), a = () => A("execute"), o = () => A("subscribe"), s, l = (r, i = -1) => {
		if (t !== r && (t = r, n)) for (let [n, r] of e.entries()) n !== i && r.onSchemaChange && r.onSchemaChange({
			schema: t,
			replaceSchema: (e) => {
				l(e, n);
			}
		});
	}, u = [];
	for (let t = 0; t < e.length; t++) {
		let n = e[t], r = [];
		n.onPluginInit?.({
			plugins: e,
			addPlugin: (e) => {
				r.push(e);
			},
			setSchema: (e) => l(e, t),
			registerContextErrorHandler: (e) => u.push(e)
		}), r.length && e.splice(t + 1, 0, ...r);
	}
	let f = {
		init: [],
		parse: [],
		validate: [],
		subscribe: [],
		execute: [],
		context: []
	};
	for (let { onContextBuilding: t, onExecute: n, onParse: r, onSubscribe: i, onValidate: a, onEnveloped: o, instrumentation: c } of e) o && f.init.push(o), t && f.context.push(t), n && f.execute.push(n), r && f.parse.push(r), i && f.subscribe.push(i), a && f.validate.push(a), c && (s = s ? y(s, c) : c);
	let m = (e) => {
		for (let [t, n] of f.init.entries()) n({
			context: e,
			extendContext: (t) => {
				e && Object.assign(e, t);
			},
			setSchema: (e) => l(e, t)
		});
	}, h = f.parse.length ? (e) => (t, n) => {
		let i = null, a = r, o = e, s = [];
		for (let e of f.parse) {
			let r = e({
				context: o,
				extendContext: (e) => {
					Object.assign(o, e);
				},
				params: {
					source: t,
					options: n
				},
				parseFn: a,
				setParseFn: (e) => {
					a = e;
				},
				setParsedDocument: (e) => {
					i = e;
				}
			});
			r && s.push(r);
		}
		if (i === null) try {
			i = a(t, n);
		} catch (e) {
			i = e;
		}
		for (let e of s) e({
			context: o,
			extendContext: (e) => {
				Object.assign(o, e);
			},
			replaceParseResult: (e) => {
				i = e;
			},
			result: i
		});
		if (i === null) throw Error("Failed to parse document.");
		if (i instanceof Error) throw i;
		return x.set(i, t.toString()), i;
	} : () => r, g = f.validate.length ? (e) => (t, n, r, a, o) => {
		let s = r ? [...r] : void 0, c = i, l = null, u = e, d = [];
		for (let e of f.validate) {
			let r = e({
				context: u,
				extendContext: (e) => {
					Object.assign(u, e);
				},
				params: {
					schema: t,
					documentAST: n,
					rules: s,
					typeInfo: a,
					options: o
				},
				validateFn: c,
				addValidationRule: (e) => {
					s ||= [], s.push(e);
				},
				setValidationFn: (e) => {
					c = e;
				},
				setResult: (e) => {
					l = e;
				}
			});
			r && d.push(r);
		}
		if (l ||= c(t, n, s, a, o), !l) return;
		let p = l.length === 0;
		for (let e of d) e({
			valid: p,
			result: l,
			context: u,
			extendContext: (e) => {
				Object.assign(u, e);
			},
			setResult: (e) => {
				l = e;
			}
		});
		return l;
	} : () => i, _ = f.context.length ? (e) => (t) => {
		let n = [], r = e;
		t && Object.assign(r, t);
		let i = !1;
		return c(() => d(f.context, (e, t) => e({
			context: r,
			extendContext: (e) => {
				Object.assign(r, e);
			},
			breakContextBuilding: () => {
				i = !0, t();
			}
		}), n), () => i ? r : c(() => d(n, (e) => e({
			context: r,
			extendContext(e) {
				Object.assign(r, e);
			}
		})), () => r), (e) => {
			let t = e;
			for (let e of u) e({
				context: r,
				error: t,
				setError: (e) => {
					t = e;
				}
			});
			throw t;
		});
	} : (e) => (t) => (t && Object.assign(e, t), e), v = f.subscribe.length ? T((e) => {
		let t = o, n = [], r = e.contextValue || {}, i;
		return c(() => d(f.subscribe, (n, a) => n({
			subscribeFn: t,
			setSubscribeFn: (e) => {
				t = e;
			},
			context: r,
			extendContext: (e) => {
				Object.assign(r, e);
			},
			args: e,
			setResultAndStopExecution: (e) => {
				i = e, a();
			}
		}), n), () => {
			let r = [], a = [];
			for (let { onSubscribeResult: e, onSubscribeError: t } of n) e && r.push(e), t && a.push(t);
			return c(() => i || t(e), (t) => {
				let n = [], i = [];
				for (let a of r) {
					let r = a({
						args: e,
						result: t,
						setResult: (e) => {
							t = e;
						}
					});
					r && (r.onNext && n.push(r.onNext), r.onEnd && i.push(r.onEnd));
				}
				return n.length && O(t) && (t = p(t, (t) => c(() => d(n, (n) => n({
					args: e,
					result: t,
					setResult: (e) => t = e
				})), () => t))), i.length && O(t) && (t = ee(t, () => {
					for (let e of i) e();
				})), a.length && O(t) && (t = te(t, (e) => {
					let t = e;
					for (let e of a) e({
						error: t,
						setError: (e) => {
							t = e;
						}
					});
					throw t;
				})), t;
			});
		});
	}) : T(o), b = f.execute.length ? D((e) => {
		let t = a, n, r = [], i = [], o = e.contextValue || {};
		return c(() => d(f.execute, (r, i) => r({
			executeFn: t,
			setExecuteFn: (e) => {
				t = e;
			},
			setResultAndStopExecution: (e) => {
				n = e, i();
			},
			context: o,
			extendContext: (e) => {
				if (typeof e == "object") Object.assign(o, e);
				else throw Error(`Invalid context extension provided! Expected "object", got: "${JSON.stringify(e)}" (${typeof e})`);
			},
			args: e
		}), r), () => c(() => n || t({
			...e,
			contextValue: o
		}), (t) => c(() => d(r, (n) => n.onExecuteDone?.({
			args: e,
			result: t,
			setResult: (e) => {
				t = e;
			}
		}), i), () => {
			let n = [], r = [];
			for (let { onNext: e, onEnd: t } of i) e && n.push(e), t && r.push(t);
			return n.length && O(t) && (t = p(t, (t) => c(() => d(n, (n) => n({
				args: e,
				result: t,
				setResult: (e) => {
					t = e;
				}
			})), () => t))), r.length && O(t) && (t = ee(t, () => {
				for (let e of r) e();
			})), t;
		})));
	}) : D(a);
	if (n = !0, t) for (let [n, r] of e.entries()) r.onSchemaChange?.({
		schema: t,
		replaceSchema: (e) => l(e, n)
	});
	return {
		getCurrentSchema() {
			return t;
		},
		init: m,
		parse: h,
		validate: g,
		execute: b,
		subscribe: v,
		contextFactory: _,
		instrumentation: s
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@envelop+core@5.5.1/node_modules/@envelop/core/esm/create.js
function re(e) {
	return e != null;
}
function ie(e) {
	let t = e.plugins.filter(re), n = ne({ plugins: t }), r = n.instrumentation, i = (e = {}) => {
		let t = b({ context: e }), i = n;
		return t.fn(r?.init, n.init)(e), {
			parse: t.fn(r?.parse, i.parse(e)),
			validate: t.fn(r?.validate, i.validate(e)),
			contextFactory: t.fn(r?.context, i.contextFactory(e)),
			execute: t.asyncFn(r?.execute, i.execute),
			subscribe: t.asyncFn(r?.subscribe, i.subscribe),
			schema: i.getCurrentSchema()
		};
	};
	return i._plugins = t, i;
}
//#endregion
//#region ../../node_modules/.pnpm/@envelop+core@5.5.1/node_modules/@envelop/core/esm/plugins/use-logger.js
var ae = { logFn: console.log }, oe = (e = ae) => {
	let t = {
		DEFAULT_OPTIONS: ae,
		...e
	};
	return {
		onParse({ extendContext: e, params: n }) {
			t.skipIntrospection && C(n.source) && e({ [S]: !0 });
		},
		onExecute({ args: e }) {
			if (!e.contextValue[S]) return t.logFn("execute-start", { args: e }), { onExecuteDone: ({ result: n }) => {
				t.logFn("execute-end", {
					args: e,
					result: n
				});
			} };
		},
		onSubscribe({ args: e }) {
			if (!e.contextValue[S]) return t.logFn("subscribe-start", { args: e }), { onSubscribeResult: ({ result: n }) => {
				t.logFn("subscribe-end", {
					args: e,
					result: n
				});
			} };
		}
	};
};
function se(e) {
	return e instanceof Error && e.name === "GraphQLError";
}
function ce(e) {
	return se(e) ? e.originalError == null ? !0 : ce(e.originalError) : !1;
}
function le(e, t, n) {
	let r = Error(e);
	if (r.name = "GraphQLError", n) {
		let e = t instanceof Error ? {
			message: t.message,
			stack: t.stack
		} : { message: String(t) };
		Object.defineProperty(r, "extensions", { get() {
			return e;
		} });
	}
	return Object.defineProperty(r, "toJSON", { value() {
		return {
			message: r.message,
			extensions: r.extensions
		};
	} }), r;
}
var ue = ((e) => (t, n) => ce(t) ? t : le(n, t, e))(globalThis.process?.env?.NODE_ENV === "development"), de = (e, t) => ({ result: n, setResult: r }) => {
	n.errors != null && r({
		...n,
		errors: n.errors.map((n) => e(n, t))
	});
};
function fe(e) {
	let t = e?.maskError ?? ue, n = e?.errorMessage || "Unexpected error.", r = de(t, n);
	return {
		onPluginInit(e) {
			e.registerContextErrorHandler(({ error: e, setError: r }) => {
				r(t(e, n));
			});
		},
		onExecute() {
			return { onExecuteDone(e) {
				return k(e, r);
			} };
		},
		onSubscribe() {
			return {
				onSubscribeResult(e) {
					return k(e, r);
				},
				onSubscribeError({ error: e, setError: r }) {
					r(t(e, n));
				}
			};
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@envelop+core@5.5.1/node_modules/@envelop/core/esm/plugins/use-extend-context.js
var pe = (e) => ({ onContextBuilding({ context: t, extendContext: n }) {
	return c(() => e(t), (e) => n(e));
} }), me = (e) => ({
	onExecute: ({ setExecuteFn: t }) => {
		e.execute && t(e.execute);
	},
	onParse: ({ setParseFn: t }) => {
		e.parse && t(e.parse);
	},
	onValidate: ({ setValidationFn: t, addValidationRule: n }) => {
		e.validate && t(e.validate), e.specifiedRules?.map(n);
	},
	onSubscribe: ({ setSubscribeFn: t }) => {
		e.subscribe && t(e.subscribe);
	}
}), he = Object.freeze({
	major: 16,
	minor: 14,
	patch: 0,
	preReleaseTag: null
});
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/devAssert.mjs
function j(e, t) {
	if (!e) throw Error(t);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/isPromise.mjs
function ge(e) {
	return typeof e?.then == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/isObjectLike.mjs
function _e(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/invariant.mjs
function ve(e, t) {
	if (!e) throw Error(t ?? "Unexpected invariant triggered.");
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/location.mjs
var ye = /\r\n|[\n\r]/g;
function be(e, t) {
	let n = 0, r = 1;
	for (let i of e.body.matchAll(ye)) {
		if (typeof i.index == "number" || ve(!1), i.index >= t) break;
		n = i.index + i[0].length, r += 1;
	}
	return {
		line: r,
		column: t + 1 - n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/printLocation.mjs
function xe(e) {
	return Se(e.source, be(e.source, e.start));
}
function Se(e, t) {
	let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? n : 0, c = t.column + s, l = `${e.name}:${o}:${c}\n`, u = r.split(/\r\n|[\n\r]/g), d = u[i];
	if (d.length > 120) {
		let e = Math.floor(c / 80), t = c % 80, n = [];
		for (let e = 0; e < d.length; e += 80) n.push(d.slice(e, e + 80));
		return l + Ce([
			[`${o} |`, n[0]],
			...n.slice(1, e + 1).map((e) => ["|", e]),
			["|", "^".padStart(t)],
			["|", n[e + 1]]
		]);
	}
	return l + Ce([
		[`${o - 1} |`, u[i - 1]],
		[`${o} |`, d],
		["|", "^".padStart(c)],
		[`${o + 1} |`, u[i + 1]]
	]);
}
function Ce(e) {
	let t = e.filter(([e, t]) => t !== void 0), n = Math.max(...t.map(([e]) => e.length));
	return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n");
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/error/GraphQLError.mjs
function we(e) {
	let t = e[0];
	return t == null || "kind" in t || "length" in t ? {
		nodes: t,
		source: e[1],
		positions: e[2],
		path: e[3],
		originalError: e[4],
		extensions: e[5]
	} : t;
}
var M = class e extends Error {
	constructor(t, ...n) {
		let { nodes: r, source: i, positions: a, path: o, originalError: s, extensions: c } = we(n);
		super(t), this.name = "GraphQLError", this.path = o ?? void 0, this.originalError = s ?? void 0, this.nodes = Te(Array.isArray(r) ? r : r ? [r] : void 0);
		let l = Te(this.nodes?.map((e) => e.loc).filter((e) => e != null));
		this.source = i ?? l?.[0]?.source, this.positions = a ?? l?.map((e) => e.start), this.locations = a && i ? a.map((e) => be(i, e)) : l?.map((e) => be(e.source, e.start));
		let u = _e(s?.extensions) ? s?.extensions : void 0;
		/* c8 ignore start */
		this.extensions = c ?? u ?? Object.create(null), Object.defineProperties(this, {
			message: {
				writable: !0,
				enumerable: !0
			},
			name: { enumerable: !1 },
			nodes: { enumerable: !1 },
			source: { enumerable: !1 },
			positions: { enumerable: !1 },
			originalError: { enumerable: !1 }
		}), s != null && s.stack ? Object.defineProperty(this, "stack", {
			value: s.stack,
			writable: !0,
			configurable: !0
		}) : Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
			value: Error().stack,
			writable: !0,
			configurable: !0
		});
		/* c8 ignore stop */
	}
	get [Symbol.toStringTag]() {
		return "GraphQLError";
	}
	toString() {
		let e = this.message;
		if (this.nodes) for (let t of this.nodes) t.loc && (e += "\n\n" + xe(t.loc));
		else if (this.source && this.locations) for (let t of this.locations) e += "\n\n" + Se(this.source, t);
		return e;
	}
	toJSON() {
		let e = { message: this.message };
		return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
	}
};
function Te(e) {
	return e === void 0 || e.length === 0 ? void 0 : e;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/error/syntaxError.mjs
function N(e, t, n) {
	return new M(`Syntax Error: ${n}`, {
		source: e,
		positions: [t]
	});
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/ast.mjs
var Ee = class {
	constructor(e, t, n) {
		this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n;
	}
	get [Symbol.toStringTag]() {
		return "Location";
	}
	toJSON() {
		return {
			start: this.start,
			end: this.end
		};
	}
}, De = class {
	constructor(e, t, n, r, i, a) {
		this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = a, this.prev = null, this.next = null;
	}
	get [Symbol.toStringTag]() {
		return "Token";
	}
	toJSON() {
		return {
			kind: this.kind,
			value: this.value,
			line: this.line,
			column: this.column
		};
	}
}, Oe = {
	Name: [],
	Document: ["definitions"],
	OperationDefinition: [
		"description",
		"name",
		"variableDefinitions",
		"directives",
		"selectionSet"
	],
	VariableDefinition: [
		"description",
		"variable",
		"type",
		"defaultValue",
		"directives"
	],
	Variable: ["name"],
	SelectionSet: ["selections"],
	Field: [
		"alias",
		"name",
		"arguments",
		"directives",
		"selectionSet"
	],
	Argument: ["name", "value"],
	FragmentSpread: ["name", "directives"],
	InlineFragment: [
		"typeCondition",
		"directives",
		"selectionSet"
	],
	FragmentDefinition: [
		"description",
		"name",
		"variableDefinitions",
		"typeCondition",
		"directives",
		"selectionSet"
	],
	IntValue: [],
	FloatValue: [],
	StringValue: [],
	BooleanValue: [],
	NullValue: [],
	EnumValue: [],
	ListValue: ["values"],
	ObjectValue: ["fields"],
	ObjectField: ["name", "value"],
	Directive: ["name", "arguments"],
	NamedType: ["name"],
	ListType: ["type"],
	NonNullType: ["type"],
	SchemaDefinition: [
		"description",
		"directives",
		"operationTypes"
	],
	OperationTypeDefinition: ["type"],
	ScalarTypeDefinition: [
		"description",
		"name",
		"directives"
	],
	ObjectTypeDefinition: [
		"description",
		"name",
		"interfaces",
		"directives",
		"fields"
	],
	FieldDefinition: [
		"description",
		"name",
		"arguments",
		"type",
		"directives"
	],
	InputValueDefinition: [
		"description",
		"name",
		"type",
		"defaultValue",
		"directives"
	],
	InterfaceTypeDefinition: [
		"description",
		"name",
		"interfaces",
		"directives",
		"fields"
	],
	UnionTypeDefinition: [
		"description",
		"name",
		"directives",
		"types"
	],
	EnumTypeDefinition: [
		"description",
		"name",
		"directives",
		"values"
	],
	EnumValueDefinition: [
		"description",
		"name",
		"directives"
	],
	InputObjectTypeDefinition: [
		"description",
		"name",
		"directives",
		"fields"
	],
	DirectiveDefinition: [
		"description",
		"name",
		"arguments",
		"directives",
		"locations"
	],
	SchemaExtension: ["directives", "operationTypes"],
	DirectiveExtension: ["name", "directives"],
	ScalarTypeExtension: ["name", "directives"],
	ObjectTypeExtension: [
		"name",
		"interfaces",
		"directives",
		"fields"
	],
	InterfaceTypeExtension: [
		"name",
		"interfaces",
		"directives",
		"fields"
	],
	UnionTypeExtension: [
		"name",
		"directives",
		"types"
	],
	EnumTypeExtension: [
		"name",
		"directives",
		"values"
	],
	InputObjectTypeExtension: [
		"name",
		"directives",
		"fields"
	],
	TypeCoordinate: ["name"],
	MemberCoordinate: ["name", "memberName"],
	ArgumentCoordinate: [
		"name",
		"fieldName",
		"argumentName"
	],
	DirectiveCoordinate: ["name"],
	DirectiveArgumentCoordinate: ["name", "argumentName"]
}, ke = new Set(Object.keys(Oe));
function Ae(e) {
	let t = e?.kind;
	return typeof t == "string" && ke.has(t);
}
var je;
(function(e) {
	e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(je ||= {});
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/directiveLocation.mjs
var P;
(function(e) {
	e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", e.DIRECTIVE_DEFINITION = "DIRECTIVE_DEFINITION";
})(P ||= {});
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/kinds.mjs
var F;
(function(e) {
	e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.DIRECTIVE_EXTENSION = "DirectiveExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e.TYPE_COORDINATE = "TypeCoordinate", e.MEMBER_COORDINATE = "MemberCoordinate", e.ARGUMENT_COORDINATE = "ArgumentCoordinate", e.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
})(F ||= {});
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/characterClasses.mjs
function Me(e) {
	return e === 9 || e === 32;
}
function Ne(e) {
	return e >= 48 && e <= 57;
}
function Pe(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Fe(e) {
	return Pe(e) || e === 95;
}
function Ie(e) {
	return Pe(e) || Ne(e) || e === 95;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/blockString.mjs
function Le(e) {
	let t = 2 ** 53 - 1, n = null, r = -1;
	for (let i = 0; i < e.length; ++i) {
		let a = e[i], o = Re(a);
		o !== a.length && (n ??= i, r = i, i !== 0 && o < t && (t = o));
	}
	return e.map((e, n) => n === 0 ? e : e.slice(t)).slice(n ?? 0, r + 1);
}
function Re(e) {
	let t = 0;
	for (; t < e.length && Me(e.charCodeAt(t));) ++t;
	return t;
}
function ze(e, t) {
	let n = e.replace(/"""/g, "\\\"\"\""), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((e) => e.length === 0 || Me(e.charCodeAt(0))), o = n.endsWith("\\\"\"\""), s = e.endsWith("\"") && !o, c = e.endsWith("\\"), l = s || c, u = !(t != null && t.minimize) && (!i || e.length > 70 || l || a || o), d = "", f = i && Me(e.charCodeAt(0));
	return (u && !f || a) && (d += "\n"), d += n, (u || l) && (d += "\n"), "\"\"\"" + d + "\"\"\"";
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/tokenKind.mjs
var I;
(function(e) {
	e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.DOT = ".", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(I ||= {});
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/lexer.mjs
var Be = class {
	constructor(e) {
		let t = new De(I.SOF, 0, 0, 0, 0);
		this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0;
	}
	get [Symbol.toStringTag]() {
		return "Lexer";
	}
	advance() {
		return this.lastToken = this.token, this.token = this.lookahead();
	}
	lookahead() {
		let e = this.token;
		if (e.kind !== I.EOF) do
			if (e.next) e = e.next;
			else {
				let t = Je(this, e.end);
				e.next = t, t.prev = e, e = t;
			}
		while (e.kind === I.COMMENT);
		return e;
	}
};
function Ve(e) {
	return e === I.BANG || e === I.DOLLAR || e === I.AMP || e === I.PAREN_L || e === I.PAREN_R || e === I.DOT || e === I.SPREAD || e === I.COLON || e === I.EQUALS || e === I.AT || e === I.BRACKET_L || e === I.BRACKET_R || e === I.BRACE_L || e === I.PIPE || e === I.BRACE_R;
}
function He(e) {
	return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function Ue(e, t) {
	return We(e.charCodeAt(t)) && Ge(e.charCodeAt(t + 1));
}
function We(e) {
	return e >= 55296 && e <= 56319;
}
function Ge(e) {
	return e >= 56320 && e <= 57343;
}
function Ke(e, t) {
	let n = e.source.body.codePointAt(t);
	if (n === void 0) return I.EOF;
	if (n >= 32 && n <= 126) {
		let e = String.fromCodePoint(n);
		return e === "\"" ? "'\"'" : `"${e}"`;
	}
	return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function qe(e, t, n, r, i) {
	let a = e.line;
	return new De(t, n, r, a, 1 + n - e.lineStart, i);
}
function Je(e, t) {
	let n = e.source.body, r = n.length, i = t;
	for (; i < r;) {
		let t = n.charCodeAt(i);
		switch (t) {
			case 65279:
			case 9:
			case 32:
			case 44:
				++i;
				continue;
			case 10:
				++i, ++e.line, e.lineStart = i;
				continue;
			case 13:
				n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
				continue;
			case 35: return Ye(e, i);
			case 33: return qe(e, I.BANG, i, i + 1);
			case 36: return qe(e, I.DOLLAR, i, i + 1);
			case 38: return qe(e, I.AMP, i, i + 1);
			case 40: return qe(e, I.PAREN_L, i, i + 1);
			case 41: return qe(e, I.PAREN_R, i, i + 1);
			case 46:
				if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return qe(e, I.SPREAD, i, i + 3);
				break;
			case 58: return qe(e, I.COLON, i, i + 1);
			case 61: return qe(e, I.EQUALS, i, i + 1);
			case 64: return qe(e, I.AT, i, i + 1);
			case 91: return qe(e, I.BRACKET_L, i, i + 1);
			case 93: return qe(e, I.BRACKET_R, i, i + 1);
			case 123: return qe(e, I.BRACE_L, i, i + 1);
			case 124: return qe(e, I.PIPE, i, i + 1);
			case 125: return qe(e, I.BRACE_R, i, i + 1);
			case 34: return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? it(e, i) : Qe(e, i);
		}
		if (Ne(t) || t === 45) return Xe(e, i, t);
		if (Fe(t)) return at(e, i);
		throw N(e.source, i, t === 39 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : He(t) || Ue(n, i) ? `Unexpected character: ${Ke(e, i)}.` : `Invalid character: ${Ke(e, i)}.`);
	}
	return qe(e, I.EOF, r, r);
}
function Ye(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r;) {
		let e = n.charCodeAt(i);
		if (e === 10 || e === 13) break;
		if (He(e)) ++i;
		else if (Ue(n, i)) i += 2;
		else break;
	}
	return qe(e, I.COMMENT, t, i, n.slice(t + 1, i));
}
function Xe(e, t, n) {
	let r = e.source.body, i = t, a = n, o = !1;
	if (a === 45 && (a = r.charCodeAt(++i)), a === 48) {
		if (a = r.charCodeAt(++i), Ne(a)) throw N(e.source, i, `Invalid number, unexpected digit after 0: ${Ke(e, i)}.`);
	} else i = Ze(e, i, a), a = r.charCodeAt(i);
	if (a === 46 && (o = !0, a = r.charCodeAt(++i), i = Ze(e, i, a), a = r.charCodeAt(i)), (a === 69 || a === 101) && (o = !0, a = r.charCodeAt(++i), (a === 43 || a === 45) && (a = r.charCodeAt(++i)), i = Ze(e, i, a), a = r.charCodeAt(i)), a === 46 || Fe(a)) throw N(e.source, i, `Invalid number, expected digit but got: ${Ke(e, i)}.`);
	return qe(e, o ? I.FLOAT : I.INT, t, i, r.slice(t, i));
}
function Ze(e, t, n) {
	if (!Ne(n)) throw N(e.source, t, `Invalid number, expected digit but got: ${Ke(e, t)}.`);
	let r = e.source.body, i = t + 1;
	for (; Ne(r.charCodeAt(i));) ++i;
	return i;
}
function Qe(e, t) {
	let n = e.source.body, r = n.length, i = t + 1, a = i, o = "";
	for (; i < r;) {
		let r = n.charCodeAt(i);
		if (r === 34) return o += n.slice(a, i), qe(e, I.STRING, t, i + 1, o);
		if (r === 92) {
			o += n.slice(a, i);
			let t = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? $e(e, i) : et(e, i) : rt(e, i);
			o += t.value, i += t.size, a = i;
			continue;
		}
		if (r === 10 || r === 13) break;
		if (He(r)) ++i;
		else if (Ue(n, i)) i += 2;
		else throw N(e.source, i, `Invalid character within String: ${Ke(e, i)}.`);
	}
	throw N(e.source, i, "Unterminated string.");
}
function $e(e, t) {
	let n = e.source.body, r = 0, i = 3;
	for (; i < 12;) {
		let e = n.charCodeAt(t + i++);
		if (e === 125) {
			if (i < 5 || !He(r)) break;
			return {
				value: String.fromCodePoint(r),
				size: i
			};
		}
		if (r = r << 4 | nt(e), r < 0) break;
	}
	throw N(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
}
function et(e, t) {
	let n = e.source.body, r = tt(n, t + 2);
	if (He(r)) return {
		value: String.fromCodePoint(r),
		size: 6
	};
	if (We(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
		let e = tt(n, t + 8);
		if (Ge(e)) return {
			value: String.fromCodePoint(r, e),
			size: 12
		};
	}
	throw N(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function tt(e, t) {
	return nt(e.charCodeAt(t)) << 12 | nt(e.charCodeAt(t + 1)) << 8 | nt(e.charCodeAt(t + 2)) << 4 | nt(e.charCodeAt(t + 3));
}
function nt(e) {
	return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function rt(e, t) {
	let n = e.source.body;
	switch (n.charCodeAt(t + 1)) {
		case 34: return {
			value: "\"",
			size: 2
		};
		case 92: return {
			value: "\\",
			size: 2
		};
		case 47: return {
			value: "/",
			size: 2
		};
		case 98: return {
			value: "\b",
			size: 2
		};
		case 102: return {
			value: "\f",
			size: 2
		};
		case 110: return {
			value: "\n",
			size: 2
		};
		case 114: return {
			value: "\r",
			size: 2
		};
		case 116: return {
			value: "	",
			size: 2
		};
	}
	throw N(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function it(e, t) {
	let n = e.source.body, r = n.length, i = e.lineStart, a = t + 3, o = a, s = "", c = [];
	for (; a < r;) {
		let r = n.charCodeAt(a);
		if (r === 34 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34) {
			s += n.slice(o, a), c.push(s);
			let r = qe(e, I.BLOCK_STRING, t, a + 3, Le(c).join("\n"));
			return e.line += c.length - 1, e.lineStart = i, r;
		}
		if (r === 92 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34 && n.charCodeAt(a + 3) === 34) {
			s += n.slice(o, a), o = a + 1, a += 4;
			continue;
		}
		if (r === 10 || r === 13) {
			s += n.slice(o, a), c.push(s), r === 13 && n.charCodeAt(a + 1) === 10 ? a += 2 : ++a, s = "", o = a, i = a;
			continue;
		}
		if (He(r)) ++a;
		else if (Ue(n, a)) a += 2;
		else throw N(e.source, a, `Invalid character within String: ${Ke(e, a)}.`);
	}
	throw N(e.source, a, "Unterminated string.");
}
function at(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r && Ie(n.charCodeAt(i));) ++i;
	return qe(e, I.NAME, t, i, n.slice(t, i));
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/inspect.mjs
var ot = 10, st = 2;
function L(e) {
	return ct(e, []);
}
function ct(e, t) {
	switch (typeof e) {
		case "string": return JSON.stringify(e);
		case "function": return e.name ? `[function ${e.name}]` : "[function]";
		case "object": return lt(e, t);
		default: return String(e);
	}
}
function lt(e, t) {
	if (e === null) return "null";
	if (t.includes(e)) return "[Circular]";
	let n = [...t, e];
	if (ut(e)) {
		let t = e.toJSON();
		if (t !== e) return typeof t == "string" ? t : ct(t, n);
	} else if (Array.isArray(e)) return ft(e, n);
	return dt(e, n);
}
function ut(e) {
	return typeof e.toJSON == "function";
}
function dt(e, t) {
	let n = Object.entries(e);
	return n.length === 0 ? "{}" : t.length > st ? "[" + pt(e) + "]" : "{ " + n.map(([e, n]) => e + ": " + ct(n, t)).join(", ") + " }";
}
function ft(e, t) {
	if (e.length === 0) return "[]";
	if (t.length > st) return "[Array]";
	let n = Math.min(ot, e.length), r = e.length - n, i = [];
	for (let r = 0; r < n; ++r) i.push(ct(e[r], t));
	return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function pt(e) {
	let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
	if (t === "Object" && typeof e.constructor == "function") {
		let t = e.constructor.name;
		if (typeof t == "string" && t !== "") return t;
	}
	return t;
}
var mt = globalThis.process ? function(e, t) {
	return e instanceof t;
} : function(e, t) {
	if (e instanceof t) return !0;
	if (typeof e == "object" && e) {
		let n = t.prototype[Symbol.toStringTag];
		if (n === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : e.constructor?.name)) {
			let t = L(e);
			throw Error(`Cannot use ${n} "${t}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
		}
	}
	return !1;
}, ht = class {
	constructor(e, t = "GraphQL request", n = {
		line: 1,
		column: 1
	}) {
		typeof e == "string" || j(!1, `Body must be a string. Received: ${L(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || j(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || j(!1, "column in locationOffset is 1-indexed and must be positive.");
	}
	get [Symbol.toStringTag]() {
		return "Source";
	}
};
function gt(e) {
	return mt(e, ht);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/parser.mjs
function _t(e, t) {
	let n = new vt(e, t), r = n.parseDocument();
	return Object.defineProperty(r, "tokenCount", {
		enumerable: !1,
		value: n.tokenCount
	}), r;
}
var vt = class {
	constructor(e, t = {}) {
		let { lexer: n, ...r } = t;
		if (n) this._lexer = n;
		else {
			let t = gt(e) ? e : new ht(e);
			this._lexer = new Be(t);
		}
		this._options = r, this._tokenCounter = 0;
	}
	get tokenCount() {
		return this._tokenCounter;
	}
	parseName() {
		let e = this.expectToken(I.NAME);
		return this.node(e, {
			kind: F.NAME,
			value: e.value
		});
	}
	parseDocument() {
		return this.node(this._lexer.token, {
			kind: F.DOCUMENT,
			definitions: this.many(I.SOF, this.parseDefinition, I.EOF)
		});
	}
	parseDefinition() {
		if (this.peek(I.BRACE_L)) return this.parseOperationDefinition();
		let e = this.peekDescription(), t = e ? this._lexer.lookahead() : this._lexer.token;
		if (e && t.kind === I.BRACE_L) throw N(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are not supported on shorthand queries.");
		if (t.kind === I.NAME) {
			switch (t.value) {
				case "schema": return this.parseSchemaDefinition();
				case "scalar": return this.parseScalarTypeDefinition();
				case "type": return this.parseObjectTypeDefinition();
				case "interface": return this.parseInterfaceTypeDefinition();
				case "union": return this.parseUnionTypeDefinition();
				case "enum": return this.parseEnumTypeDefinition();
				case "input": return this.parseInputObjectTypeDefinition();
				case "directive": return this.parseDirectiveDefinition();
			}
			switch (t.value) {
				case "query":
				case "mutation":
				case "subscription": return this.parseOperationDefinition();
				case "fragment": return this.parseFragmentDefinition();
			}
			if (e) throw N(this._lexer.source, this._lexer.token.start, "Unexpected description, only GraphQL definitions support descriptions.");
			switch (t.value) {
				case "extend": return this.parseTypeSystemExtension();
			}
		}
		throw this.unexpected(t);
	}
	parseOperationDefinition() {
		let e = this._lexer.token;
		if (this.peek(I.BRACE_L)) return this.node(e, {
			kind: F.OPERATION_DEFINITION,
			operation: je.QUERY,
			description: void 0,
			name: void 0,
			variableDefinitions: [],
			directives: [],
			selectionSet: this.parseSelectionSet()
		});
		let t = this.parseDescription(), n = this.parseOperationType(), r;
		return this.peek(I.NAME) && (r = this.parseName()), this.node(e, {
			kind: F.OPERATION_DEFINITION,
			operation: n,
			description: t,
			name: r,
			variableDefinitions: this.parseVariableDefinitions(),
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		});
	}
	parseOperationType() {
		let e = this.expectToken(I.NAME);
		switch (e.value) {
			case "query": return je.QUERY;
			case "mutation": return je.MUTATION;
			case "subscription": return je.SUBSCRIPTION;
		}
		throw this.unexpected(e);
	}
	parseVariableDefinitions() {
		return this.optionalMany(I.PAREN_L, this.parseVariableDefinition, I.PAREN_R);
	}
	parseVariableDefinition() {
		return this.node(this._lexer.token, {
			kind: F.VARIABLE_DEFINITION,
			description: this.parseDescription(),
			variable: this.parseVariable(),
			type: (this.expectToken(I.COLON), this.parseTypeReference()),
			defaultValue: this.expectOptionalToken(I.EQUALS) ? this.parseConstValueLiteral() : void 0,
			directives: this.parseConstDirectives()
		});
	}
	parseVariable() {
		let e = this._lexer.token;
		return this.expectToken(I.DOLLAR), this.node(e, {
			kind: F.VARIABLE,
			name: this.parseName()
		});
	}
	parseSelectionSet() {
		return this.node(this._lexer.token, {
			kind: F.SELECTION_SET,
			selections: this.many(I.BRACE_L, this.parseSelection, I.BRACE_R)
		});
	}
	parseSelection() {
		return this.peek(I.SPREAD) ? this.parseFragment() : this.parseField();
	}
	parseField() {
		let e = this._lexer.token, t = this.parseName(), n, r;
		return this.expectOptionalToken(I.COLON) ? (n = t, r = this.parseName()) : r = t, this.node(e, {
			kind: F.FIELD,
			alias: n,
			name: r,
			arguments: this.parseArguments(!1),
			directives: this.parseDirectives(!1),
			selectionSet: this.peek(I.BRACE_L) ? this.parseSelectionSet() : void 0
		});
	}
	parseArguments(e) {
		let t = e ? this.parseConstArgument : this.parseArgument;
		return this.optionalMany(I.PAREN_L, t, I.PAREN_R);
	}
	parseArgument(e = !1) {
		let t = this._lexer.token, n = this.parseName();
		return this.expectToken(I.COLON), this.node(t, {
			kind: F.ARGUMENT,
			name: n,
			value: this.parseValueLiteral(e)
		});
	}
	parseConstArgument() {
		return this.parseArgument(!0);
	}
	parseFragment() {
		let e = this._lexer.token;
		this.expectToken(I.SPREAD);
		let t = this.expectOptionalKeyword("on");
		return !t && this.peek(I.NAME) ? this.node(e, {
			kind: F.FRAGMENT_SPREAD,
			name: this.parseFragmentName(),
			directives: this.parseDirectives(!1)
		}) : this.node(e, {
			kind: F.INLINE_FRAGMENT,
			typeCondition: t ? this.parseNamedType() : void 0,
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		});
	}
	parseFragmentDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
			kind: F.FRAGMENT_DEFINITION,
			description: t,
			name: this.parseFragmentName(),
			variableDefinitions: this.parseVariableDefinitions(),
			typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		}) : this.node(e, {
			kind: F.FRAGMENT_DEFINITION,
			description: t,
			name: this.parseFragmentName(),
			typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		});
	}
	parseFragmentName() {
		if (this._lexer.token.value === "on") throw this.unexpected();
		return this.parseName();
	}
	parseValueLiteral(e) {
		let t = this._lexer.token;
		switch (t.kind) {
			case I.BRACKET_L: return this.parseList(e);
			case I.BRACE_L: return this.parseObject(e);
			case I.INT: return this.advanceLexer(), this.node(t, {
				kind: F.INT,
				value: t.value
			});
			case I.FLOAT: return this.advanceLexer(), this.node(t, {
				kind: F.FLOAT,
				value: t.value
			});
			case I.STRING:
			case I.BLOCK_STRING: return this.parseStringLiteral();
			case I.NAME: switch (this.advanceLexer(), t.value) {
				case "true": return this.node(t, {
					kind: F.BOOLEAN,
					value: !0
				});
				case "false": return this.node(t, {
					kind: F.BOOLEAN,
					value: !1
				});
				case "null": return this.node(t, { kind: F.NULL });
				default: return this.node(t, {
					kind: F.ENUM,
					value: t.value
				});
			}
			case I.DOLLAR:
				if (e) if (this.expectToken(I.DOLLAR), this._lexer.token.kind === I.NAME) {
					let e = this._lexer.token.value;
					throw N(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`);
				} else throw this.unexpected(t);
				return this.parseVariable();
			default: throw this.unexpected();
		}
	}
	parseConstValueLiteral() {
		return this.parseValueLiteral(!0);
	}
	parseStringLiteral() {
		let e = this._lexer.token;
		return this.advanceLexer(), this.node(e, {
			kind: F.STRING,
			value: e.value,
			block: e.kind === I.BLOCK_STRING
		});
	}
	parseList(e) {
		return this.node(this._lexer.token, {
			kind: F.LIST,
			values: this.any(I.BRACKET_L, () => this.parseValueLiteral(e), I.BRACKET_R)
		});
	}
	parseObject(e) {
		return this.node(this._lexer.token, {
			kind: F.OBJECT,
			fields: this.any(I.BRACE_L, () => this.parseObjectField(e), I.BRACE_R)
		});
	}
	parseObjectField(e) {
		let t = this._lexer.token, n = this.parseName();
		return this.expectToken(I.COLON), this.node(t, {
			kind: F.OBJECT_FIELD,
			name: n,
			value: this.parseValueLiteral(e)
		});
	}
	parseDirectives(e) {
		let t = [];
		for (; this.peek(I.AT);) t.push(this.parseDirective(e));
		return t;
	}
	parseConstDirectives() {
		return this.parseDirectives(!0);
	}
	parseDirective(e) {
		let t = this._lexer.token;
		return this.expectToken(I.AT), this.node(t, {
			kind: F.DIRECTIVE,
			name: this.parseName(),
			arguments: this.parseArguments(e)
		});
	}
	parseTypeReference() {
		let e = this._lexer.token, t;
		if (this.expectOptionalToken(I.BRACKET_L)) {
			let n = this.parseTypeReference();
			this.expectToken(I.BRACKET_R), t = this.node(e, {
				kind: F.LIST_TYPE,
				type: n
			});
		} else t = this.parseNamedType();
		return this.expectOptionalToken(I.BANG) ? this.node(e, {
			kind: F.NON_NULL_TYPE,
			type: t
		}) : t;
	}
	parseNamedType() {
		return this.node(this._lexer.token, {
			kind: F.NAMED_TYPE,
			name: this.parseName()
		});
	}
	peekDescription() {
		return this.peek(I.STRING) || this.peek(I.BLOCK_STRING);
	}
	parseDescription() {
		if (this.peekDescription()) return this.parseStringLiteral();
	}
	parseSchemaDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("schema");
		let n = this.parseConstDirectives(), r = this.many(I.BRACE_L, this.parseOperationTypeDefinition, I.BRACE_R);
		return this.node(e, {
			kind: F.SCHEMA_DEFINITION,
			description: t,
			directives: n,
			operationTypes: r
		});
	}
	parseOperationTypeDefinition() {
		let e = this._lexer.token, t = this.parseOperationType();
		this.expectToken(I.COLON);
		let n = this.parseNamedType();
		return this.node(e, {
			kind: F.OPERATION_TYPE_DEFINITION,
			operation: t,
			type: n
		});
	}
	parseScalarTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("scalar");
		let n = this.parseName(), r = this.parseConstDirectives();
		return this.node(e, {
			kind: F.SCALAR_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r
		});
	}
	parseObjectTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("type");
		let n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
		return this.node(e, {
			kind: F.OBJECT_TYPE_DEFINITION,
			description: t,
			name: n,
			interfaces: r,
			directives: i,
			fields: a
		});
	}
	parseImplementsInterfaces() {
		return this.expectOptionalKeyword("implements") ? this.delimitedMany(I.AMP, this.parseNamedType) : [];
	}
	parseFieldsDefinition() {
		return this.optionalMany(I.BRACE_L, this.parseFieldDefinition, I.BRACE_R);
	}
	parseFieldDefinition() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), r = this.parseArgumentDefs();
		this.expectToken(I.COLON);
		let i = this.parseTypeReference(), a = this.parseConstDirectives();
		return this.node(e, {
			kind: F.FIELD_DEFINITION,
			description: t,
			name: n,
			arguments: r,
			type: i,
			directives: a
		});
	}
	parseArgumentDefs() {
		return this.optionalMany(I.PAREN_L, this.parseInputValueDef, I.PAREN_R);
	}
	parseInputValueDef() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseName();
		this.expectToken(I.COLON);
		let r = this.parseTypeReference(), i;
		this.expectOptionalToken(I.EQUALS) && (i = this.parseConstValueLiteral());
		let a = this.parseConstDirectives();
		return this.node(e, {
			kind: F.INPUT_VALUE_DEFINITION,
			description: t,
			name: n,
			type: r,
			defaultValue: i,
			directives: a
		});
	}
	parseInterfaceTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("interface");
		let n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
		return this.node(e, {
			kind: F.INTERFACE_TYPE_DEFINITION,
			description: t,
			name: n,
			interfaces: r,
			directives: i,
			fields: a
		});
	}
	parseUnionTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("union");
		let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
		return this.node(e, {
			kind: F.UNION_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			types: i
		});
	}
	parseUnionMemberTypes() {
		return this.expectOptionalToken(I.EQUALS) ? this.delimitedMany(I.PIPE, this.parseNamedType) : [];
	}
	parseEnumTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("enum");
		let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
		return this.node(e, {
			kind: F.ENUM_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			values: i
		});
	}
	parseEnumValuesDefinition() {
		return this.optionalMany(I.BRACE_L, this.parseEnumValueDefinition, I.BRACE_R);
	}
	parseEnumValueDefinition() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseEnumValueName(), r = this.parseConstDirectives();
		return this.node(e, {
			kind: F.ENUM_VALUE_DEFINITION,
			description: t,
			name: n,
			directives: r
		});
	}
	parseEnumValueName() {
		if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw N(this._lexer.source, this._lexer.token.start, `${yt(this._lexer.token)} is reserved and cannot be used for an enum value.`);
		return this.parseName();
	}
	parseInputObjectTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("input");
		let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
		return this.node(e, {
			kind: F.INPUT_OBJECT_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			fields: i
		});
	}
	parseInputFieldsDefinition() {
		return this.optionalMany(I.BRACE_L, this.parseInputValueDef, I.BRACE_R);
	}
	parseTypeSystemExtension() {
		let e = this._lexer.lookahead();
		if (e.kind === I.NAME) switch (e.value) {
			case "schema": return this.parseSchemaExtension();
			case "scalar": return this.parseScalarTypeExtension();
			case "type": return this.parseObjectTypeExtension();
			case "interface": return this.parseInterfaceTypeExtension();
			case "union": return this.parseUnionTypeExtension();
			case "enum": return this.parseEnumTypeExtension();
			case "input": return this.parseInputObjectTypeExtension();
			case "directive":
				if (this._options.experimentalDirectivesOnDirectiveDefinitions) return this.parseDirectiveDefinitionExtension();
				break;
		}
		throw this.unexpected(e);
	}
	parseSchemaExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("schema");
		let t = this.parseConstDirectives(), n = this.optionalMany(I.BRACE_L, this.parseOperationTypeDefinition, I.BRACE_R);
		if (t.length === 0 && n.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: F.SCHEMA_EXTENSION,
			directives: t,
			operationTypes: n
		});
	}
	parseScalarTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("scalar");
		let t = this.parseName(), n = this.parseConstDirectives();
		if (n.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: F.SCALAR_TYPE_EXTENSION,
			name: t,
			directives: n
		});
	}
	parseObjectTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("type");
		let t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), i = this.parseFieldsDefinition();
		if (n.length === 0 && r.length === 0 && i.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: F.OBJECT_TYPE_EXTENSION,
			name: t,
			interfaces: n,
			directives: r,
			fields: i
		});
	}
	parseInterfaceTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("interface");
		let t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), i = this.parseFieldsDefinition();
		if (n.length === 0 && r.length === 0 && i.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: F.INTERFACE_TYPE_EXTENSION,
			name: t,
			interfaces: n,
			directives: r,
			fields: i
		});
	}
	parseUnionTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("union");
		let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
		if (n.length === 0 && r.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: F.UNION_TYPE_EXTENSION,
			name: t,
			directives: n,
			types: r
		});
	}
	parseEnumTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("enum");
		let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
		if (n.length === 0 && r.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: F.ENUM_TYPE_EXTENSION,
			name: t,
			directives: n,
			values: r
		});
	}
	parseInputObjectTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("input");
		let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
		if (n.length === 0 && r.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: F.INPUT_OBJECT_TYPE_EXTENSION,
			name: t,
			directives: n,
			fields: r
		});
	}
	parseDirectiveDefinitionExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("directive"), this.expectToken(I.AT);
		let t = this.parseName(), n = this.parseConstDirectives();
		if (n.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: F.DIRECTIVE_EXTENSION,
			name: t,
			directives: n
		});
	}
	parseDirectiveDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("directive"), this.expectToken(I.AT);
		let n = this.parseName(), r = this.parseArgumentDefs(), i = this._options.experimentalDirectivesOnDirectiveDefinitions ? this.parseConstDirectives() : [], a = this.expectOptionalKeyword("repeatable");
		this.expectKeyword("on");
		let o = this.parseDirectiveLocations();
		return this.node(e, {
			kind: F.DIRECTIVE_DEFINITION,
			description: t,
			name: n,
			arguments: r,
			directives: i,
			repeatable: a,
			locations: o
		});
	}
	parseDirectiveLocations() {
		return this.delimitedMany(I.PIPE, this.parseDirectiveLocation);
	}
	parseDirectiveLocation() {
		let e = this._lexer.token, t = this.parseName();
		if (Object.prototype.hasOwnProperty.call(P, t.value)) return t;
		throw this.unexpected(e);
	}
	parseSchemaCoordinate() {
		let e = this._lexer.token, t = this.expectOptionalToken(I.AT), n = this.parseName(), r;
		!t && this.expectOptionalToken(I.DOT) && (r = this.parseName());
		let i;
		return (t || r) && this.expectOptionalToken(I.PAREN_L) && (i = this.parseName(), this.expectToken(I.COLON), this.expectToken(I.PAREN_R)), t ? i ? this.node(e, {
			kind: F.DIRECTIVE_ARGUMENT_COORDINATE,
			name: n,
			argumentName: i
		}) : this.node(e, {
			kind: F.DIRECTIVE_COORDINATE,
			name: n
		}) : r ? i ? this.node(e, {
			kind: F.ARGUMENT_COORDINATE,
			name: n,
			fieldName: r,
			argumentName: i
		}) : this.node(e, {
			kind: F.MEMBER_COORDINATE,
			name: n,
			memberName: r
		}) : this.node(e, {
			kind: F.TYPE_COORDINATE,
			name: n
		});
	}
	node(e, t) {
		return this._options.noLocation !== !0 && (t.loc = new Ee(e, this._lexer.lastToken, this._lexer.source)), t;
	}
	peek(e) {
		return this._lexer.token.kind === e;
	}
	expectToken(e) {
		let t = this._lexer.token;
		if (t.kind === e) return this.advanceLexer(), t;
		throw N(this._lexer.source, t.start, `Expected ${bt(e)}, found ${yt(t)}.`);
	}
	expectOptionalToken(e) {
		return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
	}
	expectKeyword(e) {
		let t = this._lexer.token;
		if (t.kind === I.NAME && t.value === e) this.advanceLexer();
		else throw N(this._lexer.source, t.start, `Expected "${e}", found ${yt(t)}.`);
	}
	expectOptionalKeyword(e) {
		let t = this._lexer.token;
		return t.kind === I.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
	}
	unexpected(e) {
		let t = e ?? this._lexer.token;
		return N(this._lexer.source, t.start, `Unexpected ${yt(t)}.`);
	}
	any(e, t, n) {
		this.expectToken(e);
		let r = [];
		for (; !this.expectOptionalToken(n);) r.push(t.call(this));
		return r;
	}
	optionalMany(e, t, n) {
		if (this.expectOptionalToken(e)) {
			let e = [];
			do
				e.push(t.call(this));
			while (!this.expectOptionalToken(n));
			return e;
		}
		return [];
	}
	many(e, t, n) {
		this.expectToken(e);
		let r = [];
		do
			r.push(t.call(this));
		while (!this.expectOptionalToken(n));
		return r;
	}
	delimitedMany(e, t) {
		this.expectOptionalToken(e);
		let n = [];
		do
			n.push(t.call(this));
		while (this.expectOptionalToken(e));
		return n;
	}
	advanceLexer() {
		let { maxTokens: e } = this._options, t = this._lexer.advance();
		if (t.kind !== I.EOF && (++this._tokenCounter, e !== void 0 && this._tokenCounter > e)) throw N(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`);
	}
};
function yt(e) {
	let t = e.value;
	return bt(e.kind) + (t == null ? "" : ` "${t}"`);
}
function bt(e) {
	return Ve(e) ? `"${e}"` : e;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/didYouMean.mjs
var xt = 5;
function St(e, t) {
	let [n, r] = t ? [e, t] : [void 0, e], i = " Did you mean ";
	n && (i += n + " ");
	let a = r.map((e) => `"${e}"`);
	switch (a.length) {
		case 0: return "";
		case 1: return i + a[0] + "?";
		case 2: return i + a[0] + " or " + a[1] + "?";
	}
	let o = a.slice(0, xt), s = o.pop();
	return i + o.join(", ") + ", or " + s + "?";
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/identityFunc.mjs
function Ct(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/keyMap.mjs
function wt(e, t) {
	let n = Object.create(null);
	for (let r of e) n[t(r)] = r;
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/keyValMap.mjs
function Tt(e, t, n) {
	let r = Object.create(null);
	for (let i of e) r[t(i)] = n(i);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/mapValue.mjs
function Et(e, t) {
	let n = Object.create(null);
	for (let r of Object.keys(e)) n[r] = t(e[r], r);
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/naturalCompare.mjs
function Dt(e, t) {
	let n = 0, r = 0;
	for (; n < e.length && r < t.length;) {
		let i = e.charCodeAt(n), a = t.charCodeAt(r);
		if (At(i) && At(a)) {
			let o = 0;
			do
				++n, o = o * 10 + i - Ot, i = e.charCodeAt(n);
			while (At(i) && o > 0);
			let s = 0;
			do
				++r, s = s * 10 + a - Ot, a = t.charCodeAt(r);
			while (At(a) && s > 0);
			if (o < s) return -1;
			if (o > s) return 1;
		} else {
			if (i < a) return -1;
			if (i > a) return 1;
			++n, ++r;
		}
	}
	return e.length - t.length;
}
var Ot = 48, kt = 57;
function At(e) {
	return !isNaN(e) && Ot <= e && e <= kt;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/suggestionList.mjs
function jt(e, t) {
	let n = Object.create(null), r = new Mt(e), i = Math.floor(e.length * .4) + 1;
	for (let e of t) {
		let t = r.measure(e, i);
		t !== void 0 && (n[e] = t);
	}
	return Object.keys(n).sort((e, t) => {
		let r = n[e] - n[t];
		return r === 0 ? Dt(e, t) : r;
	});
}
var Mt = class {
	constructor(e) {
		this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = Nt(this._inputLowerCase), this._rows = [
			Array(e.length + 1).fill(0),
			Array(e.length + 1).fill(0),
			Array(e.length + 1).fill(0)
		];
	}
	measure(e, t) {
		if (this._input === e) return 0;
		let n = e.toLowerCase();
		if (this._inputLowerCase === n) return 1;
		let r = Nt(n), i = this._inputArray;
		if (r.length < i.length) {
			let e = r;
			r = i, i = e;
		}
		let a = r.length, o = i.length;
		if (a - o > t) return;
		let s = this._rows;
		for (let e = 0; e <= o; e++) s[0][e] = e;
		for (let e = 1; e <= a; e++) {
			let n = s[(e - 1) % 3], a = s[e % 3], c = a[0] = e;
			for (let t = 1; t <= o; t++) {
				let o = r[e - 1] === i[t - 1] ? 0 : 1, l = Math.min(n[t] + 1, a[t - 1] + 1, n[t - 1] + o);
				if (e > 1 && t > 1 && r[e - 1] === i[t - 2] && r[e - 2] === i[t - 1]) {
					let n = s[(e - 2) % 3][t - 2];
					l = Math.min(l, n + 1);
				}
				l < c && (c = l), a[t] = l;
			}
			if (c > t) return;
		}
		let c = s[a % 3][o];
		return c <= t ? c : void 0;
	}
};
function Nt(e) {
	let t = e.length, n = Array(t);
	for (let r = 0; r < t; ++r) n[r] = e.charCodeAt(r);
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/toObjMap.mjs
function Pt(e) {
	if (e == null) return Object.create(null);
	if (Object.getPrototypeOf(e) === null) return e;
	let t = Object.create(null);
	for (let [n, r] of Object.entries(e)) t[n] = r;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/printString.mjs
function Ft(e) {
	return `"${e.replace(It, Lt)}"`;
}
var It = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Lt(e) {
	return Rt[e.charCodeAt(0)];
}
var Rt = /* @__PURE__ */ "\\u0000.\\u0001.\\u0002.\\u0003.\\u0004.\\u0005.\\u0006.\\u0007.\\b.\\t.\\n.\\u000B.\\f.\\r.\\u000E.\\u000F.\\u0010.\\u0011.\\u0012.\\u0013.\\u0014.\\u0015.\\u0016.\\u0017.\\u0018.\\u0019.\\u001A.\\u001B.\\u001C.\\u001D.\\u001E.\\u001F...\\\"..........................................................\\\\...................................\\u007F.\\u0080.\\u0081.\\u0082.\\u0083.\\u0084.\\u0085.\\u0086.\\u0087.\\u0088.\\u0089.\\u008A.\\u008B.\\u008C.\\u008D.\\u008E.\\u008F.\\u0090.\\u0091.\\u0092.\\u0093.\\u0094.\\u0095.\\u0096.\\u0097.\\u0098.\\u0099.\\u009A.\\u009B.\\u009C.\\u009D.\\u009E.\\u009F".split("."), zt = Object.freeze({});
function Bt(e, t, n = Oe) {
	let r = /* @__PURE__ */ new Map();
	for (let e of Object.values(F)) r.set(e, Ht(t, e));
	let i, a = Array.isArray(e), o = [e], s = -1, c = [], l = e, u, d, f = [], p = [];
	do {
		s++;
		let e = s === o.length, m = e && c.length !== 0;
		if (e) {
			if (u = p.length === 0 ? void 0 : f[f.length - 1], l = d, d = p.pop(), m) if (a) {
				l = l.slice();
				let e = 0;
				for (let [t, n] of c) {
					let r = t - e;
					n === null ? (l.splice(r, 1), e++) : l[r] = n;
				}
			} else {
				l = { ...l };
				for (let [e, t] of c) l[e] = t;
			}
			s = i.index, o = i.keys, c = i.edits, a = i.inArray, i = i.prev;
		} else if (d) {
			if (u = a ? s : o[s], l = d[u], l == null) continue;
			f.push(u);
		}
		let h;
		if (!Array.isArray(l)) {
			if (Ae(l) || j(!1, `Invalid AST Node: ${L(l)}.`), h = (e ? r.get(l.kind)?.leave : r.get(l.kind)?.enter)?.call(t, l, u, d, f, p), h === zt) break;
			if (h === !1) {
				if (!e) {
					f.pop();
					continue;
				}
			} else if (h !== void 0 && (c.push([u, h]), !e)) if (Ae(h)) l = h;
			else {
				f.pop();
				continue;
			}
		}
		h === void 0 && m && c.push([u, l]), e ? f.pop() : (i = {
			inArray: a,
			index: s,
			keys: o,
			edits: c,
			prev: i
		}, a = Array.isArray(l), o = a ? l : n[l.kind] ?? [], s = -1, c = [], d && p.push(d), d = l);
	} while (i !== void 0);
	return c.length === 0 ? e : c[c.length - 1][1];
}
function Vt(e) {
	let t = Array(e.length).fill(null), n = Object.create(null);
	for (let r of Object.values(F)) {
		let i = !1, a = Array(e.length).fill(void 0), o = Array(e.length).fill(void 0);
		for (let t = 0; t < e.length; ++t) {
			let { enter: n, leave: s } = Ht(e[t], r);
			i ||= n != null || s != null, a[t] = n, o[t] = s;
		}
		i && (n[r] = {
			enter(...n) {
				let r = n[0];
				for (let i = 0; i < e.length; i++) if (t[i] === null) {
					let o = a[i]?.apply(e[i], n);
					if (o === !1) t[i] = r;
					else if (o === zt) t[i] = zt;
					else if (o !== void 0) return o;
				}
			},
			leave(...n) {
				let r = n[0];
				for (let i = 0; i < e.length; i++) if (t[i] === null) {
					let r = o[i]?.apply(e[i], n);
					if (r === zt) t[i] = zt;
					else if (r !== void 0 && r !== !1) return r;
				} else t[i] === r && (t[i] = null);
			}
		});
	}
	return n;
}
function Ht(e, t) {
	let n = e[t];
	return typeof n == "object" ? n : typeof n == "function" ? {
		enter: n,
		leave: void 0
	} : {
		enter: e.enter,
		leave: e.leave
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/printer.mjs
function R(e) {
	return Bt(e, Wt);
}
var Ut = 80, Wt = {
	Name: { leave: (e) => e.value },
	Variable: { leave: (e) => "$" + e.name },
	Document: { leave: (e) => z(e.definitions, "\n\n") },
	OperationDefinition: { leave(e) {
		let t = qt(e.variableDefinitions) ? B("(\n", z(e.variableDefinitions, "\n"), "\n)") : B("(", z(e.variableDefinitions, ", "), ")"), n = B("", e.description, "\n") + z([
			e.operation,
			z([e.name, t]),
			z(e.directives, " ")
		], " ");
		return (n === "query" ? "" : n + " ") + e.selectionSet;
	} },
	VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r, description: i }) => B("", i, "\n") + e + ": " + t + B(" = ", n) + B(" ", z(r, " ")) },
	SelectionSet: { leave: ({ selections: e }) => Gt(e) },
	Field: { leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
		let a = B("", e, ": ") + t, o = a + B("(", z(n, ", "), ")");
		return o.length > Ut && (o = a + B("(\n", Kt(z(n, "\n")), "\n)")), z([
			o,
			z(r, " "),
			i
		], " ");
	} },
	Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
	FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + B(" ", z(t, " ")) },
	InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => z([
		"...",
		B("on ", e),
		z(t, " "),
		n
	], " ") },
	FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i, description: a }) => B("", a, "\n") + `fragment ${e}${B("(", z(n, ", "), ")")} on ${t} ${B("", z(r, " "), " ")}` + i },
	IntValue: { leave: ({ value: e }) => e },
	FloatValue: { leave: ({ value: e }) => e },
	StringValue: { leave: ({ value: e, block: t }) => t ? ze(e) : Ft(e) },
	BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" },
	NullValue: { leave: () => "null" },
	EnumValue: { leave: ({ value: e }) => e },
	ListValue: { leave: ({ values: e }) => "[" + z(e, ", ") + "]" },
	ObjectValue: { leave: ({ fields: e }) => "{" + z(e, ", ") + "}" },
	ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
	Directive: { leave: ({ name: e, arguments: t }) => "@" + e + B("(", z(t, ", "), ")") },
	NamedType: { leave: ({ name: e }) => e },
	ListType: { leave: ({ type: e }) => "[" + e + "]" },
	NonNullType: { leave: ({ type: e }) => e + "!" },
	SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => B("", e, "\n") + z([
		"schema",
		z(t, " "),
		Gt(n)
	], " ") },
	OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t },
	ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => B("", e, "\n") + z([
		"scalar",
		t,
		z(n, " ")
	], " ") },
	ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => B("", e, "\n") + z([
		"type",
		t,
		B("implements ", z(n, " & ")),
		z(r, " "),
		Gt(i)
	], " ") },
	FieldDefinition: { leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => B("", e, "\n") + t + (qt(n) ? B("(\n", Kt(z(n, "\n")), "\n)") : B("(", z(n, ", "), ")")) + ": " + r + B(" ", z(i, " ")) },
	InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => B("", e, "\n") + z([
		t + ": " + n,
		B("= ", r),
		z(i, " ")
	], " ") },
	InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => B("", e, "\n") + z([
		"interface",
		t,
		B("implements ", z(n, " & ")),
		z(r, " "),
		Gt(i)
	], " ") },
	UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => B("", e, "\n") + z([
		"union",
		t,
		z(n, " "),
		B("= ", z(r, " | "))
	], " ") },
	EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => B("", e, "\n") + z([
		"enum",
		t,
		z(n, " "),
		Gt(r)
	], " ") },
	EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => B("", e, "\n") + z([t, z(n, " ")], " ") },
	InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => B("", e, "\n") + z([
		"input",
		t,
		z(n, " "),
		Gt(r)
	], " ") },
	DirectiveDefinition: { leave: ({ description: e, name: t, arguments: n, directives: r, repeatable: i, locations: a }) => B("", e, "\n") + "directive @" + t + (qt(n) ? B("(\n", Kt(z(n, "\n")), "\n)") : B("(", z(n, ", "), ")")) + B(" ", z(r, " ")) + (i ? " repeatable" : "") + " on " + z(a, " | ") },
	SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => z([
		"extend schema",
		z(e, " "),
		Gt(t)
	], " ") },
	ScalarTypeExtension: { leave: ({ name: e, directives: t }) => z([
		"extend scalar",
		e,
		z(t, " ")
	], " ") },
	ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => z([
		"extend type",
		e,
		B("implements ", z(t, " & ")),
		z(n, " "),
		Gt(r)
	], " ") },
	InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => z([
		"extend interface",
		e,
		B("implements ", z(t, " & ")),
		z(n, " "),
		Gt(r)
	], " ") },
	UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => z([
		"extend union",
		e,
		z(t, " "),
		B("= ", z(n, " | "))
	], " ") },
	EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => z([
		"extend enum",
		e,
		z(t, " "),
		Gt(n)
	], " ") },
	InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => z([
		"extend input",
		e,
		z(t, " "),
		Gt(n)
	], " ") },
	DirectiveExtension: { leave: ({ name: e, directives: t }) => z(["extend directive @" + e, z(t, " ")], " ") },
	TypeCoordinate: { leave: ({ name: e }) => e },
	MemberCoordinate: { leave: ({ name: e, memberName: t }) => z([e, B(".", t)]) },
	ArgumentCoordinate: { leave: ({ name: e, fieldName: t, argumentName: n }) => z([
		e,
		B(".", t),
		B("(", n, ":)")
	]) },
	DirectiveCoordinate: { leave: ({ name: e }) => z(["@", e]) },
	DirectiveArgumentCoordinate: { leave: ({ name: e, argumentName: t }) => z([
		"@",
		e,
		B("(", t, ":)")
	]) }
};
function z(e, t = "") {
	return e?.filter((e) => e).join(t) ?? "";
}
function Gt(e) {
	return B("{\n", Kt(z(e, "\n")), "\n}");
}
function B(e, t, n = "") {
	return t != null && t !== "" ? e + t + n : "";
}
function Kt(e) {
	return B("  ", e.replace(/\n/g, "\n  "));
}
function qt(e) {
	/* c8 ignore next */
	return e?.some((e) => e.includes("\n")) ?? !1;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/utilities/valueFromASTUntyped.mjs
function Jt(e, t) {
	switch (e.kind) {
		case F.NULL: return null;
		case F.INT: return parseInt(e.value, 10);
		case F.FLOAT: return parseFloat(e.value);
		case F.STRING:
		case F.ENUM:
		case F.BOOLEAN: return e.value;
		case F.LIST: return e.values.map((e) => Jt(e, t));
		case F.OBJECT: return Tt(e.fields, (e) => e.name.value, (e) => Jt(e.value, t));
		case F.VARIABLE: return t?.[e.name.value];
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/type/assertName.mjs
function Yt(e) {
	if (e ?? j(!1, "Must provide name."), typeof e == "string" || j(!1, "Expected name to be a string."), e.length === 0) throw new M("Expected name to be a non-empty string.");
	for (let t = 1; t < e.length; ++t) if (!Ie(e.charCodeAt(t))) throw new M(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
	if (!Fe(e.charCodeAt(0))) throw new M(`Names must start with [_a-zA-Z] but "${e}" does not.`);
	return e;
}
function Xt(e) {
	if (e === "true" || e === "false" || e === "null") throw new M(`Enum values cannot be named: ${e}`);
	return Yt(e);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/type/definition.mjs
function Zt(e) {
	return Qt(e) || V(e) || H(e) || $t(e) || en(e) || tn(e) || nn(e) || U(e);
}
function Qt(e) {
	return mt(e, _n);
}
function V(e) {
	return mt(e, vn);
}
function H(e) {
	return mt(e, En);
}
function $t(e) {
	return mt(e, Dn);
}
function en(e) {
	return mt(e, kn);
}
function tn(e) {
	return mt(e, Mn);
}
function nn(e) {
	return mt(e, ln);
}
function U(e) {
	return mt(e, W);
}
function rn(e) {
	return Qt(e) || en(e) || tn(e) || un(e) && rn(e.ofType);
}
function an(e) {
	return Qt(e) || V(e) || H(e) || $t(e) || en(e) || un(e) && an(e.ofType);
}
function on(e) {
	return Qt(e) || en(e);
}
function sn(e) {
	return V(e) || H(e) || $t(e);
}
function cn(e) {
	return H(e) || $t(e);
}
var ln = class {
	constructor(e) {
		Zt(e) || j(!1, `Expected ${L(e)} to be a GraphQL type.`), this.ofType = e;
	}
	get [Symbol.toStringTag]() {
		return "GraphQLList";
	}
	toString() {
		return "[" + String(this.ofType) + "]";
	}
	toJSON() {
		return this.toString();
	}
}, W = class {
	constructor(e) {
		dn(e) || j(!1, `Expected ${L(e)} to be a GraphQL nullable type.`), this.ofType = e;
	}
	get [Symbol.toStringTag]() {
		return "GraphQLNonNull";
	}
	toString() {
		return String(this.ofType) + "!";
	}
	toJSON() {
		return this.toString();
	}
};
function un(e) {
	return nn(e) || U(e);
}
function dn(e) {
	return Zt(e) && !U(e);
}
function fn(e) {
	if (e) return U(e) ? e.ofType : e;
}
function pn(e) {
	return Qt(e) || V(e) || H(e) || $t(e) || en(e) || tn(e);
}
function mn(e) {
	if (e) {
		let t = e;
		for (; un(t);) t = t.ofType;
		return t;
	}
}
function hn(e) {
	return typeof e == "function" ? e() : e;
}
function gn(e) {
	return typeof e == "function" ? e() : e;
}
var _n = class {
	constructor(e) {
		let t = e.parseValue ?? Ct;
		this.name = Yt(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = e.serialize ?? Ct, this.parseValue = t, this.parseLiteral = e.parseLiteral ?? ((e, n) => t(Jt(e, n))), this.extensions = Pt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], e.specifiedByURL == null || typeof e.specifiedByURL == "string" || j(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${L(e.specifiedByURL)}.`), e.serialize == null || typeof e.serialize == "function" || j(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), e.parseLiteral && (typeof e.parseValue == "function" && typeof e.parseLiteral == "function" || j(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`));
	}
	get [Symbol.toStringTag]() {
		return "GraphQLScalarType";
	}
	toConfig() {
		return {
			name: this.name,
			description: this.description,
			specifiedByURL: this.specifiedByURL,
			serialize: this.serialize,
			parseValue: this.parseValue,
			parseLiteral: this.parseLiteral,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		};
	}
	toString() {
		return this.name;
	}
	toJSON() {
		return this.toString();
	}
}, vn = class {
	constructor(e) {
		this.name = Yt(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = Pt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this._fields = () => bn(e), this._interfaces = () => yn(e), e.isTypeOf == null || typeof e.isTypeOf == "function" || j(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${L(e.isTypeOf)}.`);
	}
	get [Symbol.toStringTag]() {
		return "GraphQLObjectType";
	}
	getFields() {
		return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
	}
	getInterfaces() {
		return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
	}
	toConfig() {
		return {
			name: this.name,
			description: this.description,
			interfaces: this.getInterfaces(),
			fields: Cn(this.getFields()),
			isTypeOf: this.isTypeOf,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		};
	}
	toString() {
		return this.name;
	}
	toJSON() {
		return this.toString();
	}
};
function yn(e) {
	let t = hn(e.interfaces ?? []);
	return Array.isArray(t) || j(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), t;
}
function bn(e) {
	let t = gn(e.fields);
	return Sn(t) || j(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), Et(t, (t, n) => {
		Sn(t) || j(!1, `${e.name}.${n} field config must be an object.`), t.resolve == null || typeof t.resolve == "function" || j(!1, `${e.name}.${n} field resolver must be a function if provided, but got: ${L(t.resolve)}.`);
		let r = t.args ?? {};
		return Sn(r) || j(!1, `${e.name}.${n} args must be an object with argument names as keys.`), {
			name: Yt(n),
			description: t.description,
			type: t.type,
			args: xn(r),
			resolve: t.resolve,
			subscribe: t.subscribe,
			deprecationReason: t.deprecationReason,
			extensions: Pt(t.extensions),
			astNode: t.astNode
		};
	});
}
function xn(e) {
	return Object.entries(e).map(([e, t]) => ({
		name: Yt(e),
		description: t.description,
		type: t.type,
		defaultValue: t.defaultValue,
		deprecationReason: t.deprecationReason,
		extensions: Pt(t.extensions),
		astNode: t.astNode
	}));
}
function Sn(e) {
	return _e(e) && !Array.isArray(e);
}
function Cn(e) {
	return Et(e, (e) => ({
		description: e.description,
		type: e.type,
		args: wn(e.args),
		resolve: e.resolve,
		subscribe: e.subscribe,
		deprecationReason: e.deprecationReason,
		extensions: e.extensions,
		astNode: e.astNode
	}));
}
function wn(e) {
	return Tt(e, (e) => e.name, (e) => ({
		description: e.description,
		type: e.type,
		defaultValue: e.defaultValue,
		deprecationReason: e.deprecationReason,
		extensions: e.extensions,
		astNode: e.astNode
	}));
}
function Tn(e) {
	return U(e.type) && e.defaultValue === void 0;
}
var En = class {
	constructor(e) {
		this.name = Yt(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = Pt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this._fields = bn.bind(void 0, e), this._interfaces = yn.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || j(!1, `${this.name} must provide "resolveType" as a function, but got: ${L(e.resolveType)}.`);
	}
	get [Symbol.toStringTag]() {
		return "GraphQLInterfaceType";
	}
	getFields() {
		return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
	}
	getInterfaces() {
		return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
	}
	toConfig() {
		return {
			name: this.name,
			description: this.description,
			interfaces: this.getInterfaces(),
			fields: Cn(this.getFields()),
			resolveType: this.resolveType,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		};
	}
	toString() {
		return this.name;
	}
	toJSON() {
		return this.toString();
	}
}, Dn = class {
	constructor(e) {
		this.name = Yt(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = Pt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this._types = On.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || j(!1, `${this.name} must provide "resolveType" as a function, but got: ${L(e.resolveType)}.`);
	}
	get [Symbol.toStringTag]() {
		return "GraphQLUnionType";
	}
	getTypes() {
		return typeof this._types == "function" && (this._types = this._types()), this._types;
	}
	toConfig() {
		return {
			name: this.name,
			description: this.description,
			types: this.getTypes(),
			resolveType: this.resolveType,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		};
	}
	toString() {
		return this.name;
	}
	toJSON() {
		return this.toString();
	}
};
function On(e) {
	let t = hn(e.types);
	return Array.isArray(t) || j(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), t;
}
var kn = class {
	constructor(e) {
		this.name = Yt(e.name), this.description = e.description, this.extensions = Pt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this._values = typeof e.values == "function" ? e.values : jn(this.name, e.values), this._valueLookup = null, this._nameLookup = null;
	}
	get [Symbol.toStringTag]() {
		return "GraphQLEnumType";
	}
	getValues() {
		return typeof this._values == "function" && (this._values = jn(this.name, this._values())), this._values;
	}
	getValue(e) {
		return this._nameLookup === null && (this._nameLookup = wt(this.getValues(), (e) => e.name)), this._nameLookup[e];
	}
	serialize(e) {
		this._valueLookup === null && (this._valueLookup = new Map(this.getValues().map((e) => [e.value, e])));
		let t = this._valueLookup.get(e);
		if (t === void 0) throw new M(`Enum "${this.name}" cannot represent value: ${L(e)}`);
		return t.name;
	}
	parseValue(e) {
		if (typeof e != "string") {
			let t = L(e);
			throw new M(`Enum "${this.name}" cannot represent non-string value: ${t}.` + An(this, t));
		}
		let t = this.getValue(e);
		if (t == null) throw new M(`Value "${e}" does not exist in "${this.name}" enum.` + An(this, e));
		return t.value;
	}
	parseLiteral(e, t) {
		if (e.kind !== F.ENUM) {
			let t = R(e);
			throw new M(`Enum "${this.name}" cannot represent non-enum value: ${t}.` + An(this, t), { nodes: e });
		}
		let n = this.getValue(e.value);
		if (n == null) {
			let t = R(e);
			throw new M(`Value "${t}" does not exist in "${this.name}" enum.` + An(this, t), { nodes: e });
		}
		return n.value;
	}
	toConfig() {
		let e = Tt(this.getValues(), (e) => e.name, (e) => ({
			description: e.description,
			value: e.value,
			deprecationReason: e.deprecationReason,
			extensions: e.extensions,
			astNode: e.astNode
		}));
		return {
			name: this.name,
			description: this.description,
			values: e,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		};
	}
	toString() {
		return this.name;
	}
	toJSON() {
		return this.toString();
	}
};
function An(e, t) {
	return St("the enum value", jt(t, e.getValues().map((e) => e.name)));
}
function jn(e, t) {
	return Sn(t) || j(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map(([t, n]) => (Sn(n) || j(!1, `${e}.${t} must refer to an object with a "value" key representing an internal value but got: ${L(n)}.`), {
		name: Xt(t),
		description: n.description,
		value: n.value === void 0 ? t : n.value,
		deprecationReason: n.deprecationReason,
		extensions: Pt(n.extensions),
		astNode: n.astNode
	}));
}
var Mn = class {
	constructor(e) {
		this.name = Yt(e.name), this.description = e.description, this.extensions = Pt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this.isOneOf = e.isOneOf ?? !1, this._fields = Nn.bind(void 0, e);
	}
	get [Symbol.toStringTag]() {
		return "GraphQLInputObjectType";
	}
	getFields() {
		return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
	}
	toConfig() {
		let e = Et(this.getFields(), (e) => ({
			description: e.description,
			type: e.type,
			defaultValue: e.defaultValue,
			deprecationReason: e.deprecationReason,
			extensions: e.extensions,
			astNode: e.astNode
		}));
		return {
			name: this.name,
			description: this.description,
			fields: e,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes,
			isOneOf: this.isOneOf
		};
	}
	toString() {
		return this.name;
	}
	toJSON() {
		return this.toString();
	}
};
function Nn(e) {
	let t = gn(e.fields);
	return Sn(t) || j(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), Et(t, (t, n) => (!("resolve" in t) || j(!1, `${e.name}.${n} field has a resolve property, but Input Types cannot define resolvers.`), {
		name: Yt(n),
		description: t.description,
		type: t.type,
		defaultValue: t.defaultValue,
		deprecationReason: t.deprecationReason,
		extensions: Pt(t.extensions),
		astNode: t.astNode
	}));
}
function Pn(e) {
	return U(e.type) && e.defaultValue === void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/utilities/typeComparators.mjs
function Fn(e, t) {
	return e === t ? !0 : U(e) && U(t) || nn(e) && nn(t) ? Fn(e.ofType, t.ofType) : !1;
}
function In(e, t, n) {
	return t === n ? !0 : U(n) ? U(t) ? In(e, t.ofType, n.ofType) : !1 : U(t) ? In(e, t.ofType, n) : nn(n) ? nn(t) ? In(e, t.ofType, n.ofType) : !1 : nn(t) ? !1 : cn(n) && (H(t) || V(t)) && e.isSubType(n, t);
}
function Ln(e, t, n) {
	return t === n ? !0 : cn(t) ? cn(n) ? e.getPossibleTypes(t).some((t) => e.isSubType(n, t)) : e.isSubType(t, n) : cn(n) ? e.isSubType(n, t) : !1;
}
var Rn = new _n({
	name: "Int",
	description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
	serialize(e) {
		let t = Un(e);
		if (typeof t == "boolean") return +!!t;
		let n = t;
		if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n)) throw new M(`Int cannot represent non-integer value: ${L(t)}`);
		if (n > 2147483647 || n < -2147483648) throw new M("Int cannot represent non 32-bit signed integer value: " + L(t));
		return n;
	},
	parseValue(e) {
		if (typeof e != "number" || !Number.isInteger(e)) throw new M(`Int cannot represent non-integer value: ${L(e)}`);
		if (e > 2147483647 || e < -2147483648) throw new M(`Int cannot represent non 32-bit signed integer value: ${e}`);
		return e;
	},
	parseLiteral(e) {
		if (e.kind !== F.INT) throw new M(`Int cannot represent non-integer value: ${R(e)}`, { nodes: e });
		let t = parseInt(e.value, 10);
		if (t > 2147483647 || t < -2147483648) throw new M(`Int cannot represent non 32-bit signed integer value: ${e.value}`, { nodes: e });
		return t;
	}
}), zn = new _n({
	name: "Float",
	description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
	serialize(e) {
		let t = Un(e);
		if (typeof t == "boolean") return +!!t;
		let n = t;
		if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n)) throw new M(`Float cannot represent non numeric value: ${L(t)}`);
		return n;
	},
	parseValue(e) {
		if (typeof e != "number" || !Number.isFinite(e)) throw new M(`Float cannot represent non numeric value: ${L(e)}`);
		return e;
	},
	parseLiteral(e) {
		if (e.kind !== F.FLOAT && e.kind !== F.INT) throw new M(`Float cannot represent non numeric value: ${R(e)}`, e);
		return parseFloat(e.value);
	}
}), G = new _n({
	name: "String",
	description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
	serialize(e) {
		let t = Un(e);
		if (typeof t == "string") return t;
		if (typeof t == "boolean") return t ? "true" : "false";
		if (typeof t == "number" && Number.isFinite(t)) return t.toString();
		throw new M(`String cannot represent value: ${L(e)}`);
	},
	parseValue(e) {
		if (typeof e != "string") throw new M(`String cannot represent a non string value: ${L(e)}`);
		return e;
	},
	parseLiteral(e) {
		if (e.kind !== F.STRING) throw new M(`String cannot represent a non string value: ${R(e)}`, { nodes: e });
		return e.value;
	}
}), Bn = new _n({
	name: "Boolean",
	description: "The `Boolean` scalar type represents `true` or `false`.",
	serialize(e) {
		let t = Un(e);
		if (typeof t == "boolean") return t;
		if (Number.isFinite(t)) return t !== 0;
		throw new M(`Boolean cannot represent a non boolean value: ${L(t)}`);
	},
	parseValue(e) {
		if (typeof e != "boolean") throw new M(`Boolean cannot represent a non boolean value: ${L(e)}`);
		return e;
	},
	parseLiteral(e) {
		if (e.kind !== F.BOOLEAN) throw new M(`Boolean cannot represent a non boolean value: ${R(e)}`, { nodes: e });
		return e.value;
	}
}), Vn = new _n({
	name: "ID",
	description: "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
	serialize(e) {
		let t = Un(e);
		if (typeof t == "string") return t;
		if (Number.isInteger(t)) return String(t);
		throw new M(`ID cannot represent value: ${L(e)}`);
	},
	parseValue(e) {
		if (typeof e == "string") return e;
		if (typeof e == "number" && Number.isInteger(e)) return e.toString();
		throw new M(`ID cannot represent value: ${L(e)}`);
	},
	parseLiteral(e) {
		if (e.kind !== F.STRING && e.kind !== F.INT) throw new M("ID cannot represent a non-string and non-integer value: " + R(e), { nodes: e });
		return e.value;
	}
}), Hn = Object.freeze([
	G,
	Rn,
	zn,
	Bn,
	Vn
]);
function Un(e) {
	if (_e(e)) {
		if (typeof e.valueOf == "function") {
			let t = e.valueOf();
			if (!_e(t)) return t;
		}
		if (typeof e.toJSON == "function") return e.toJSON();
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/type/directives.mjs
function Wn(e) {
	return mt(e, Gn);
}
var Gn = class {
	constructor(e) {
		this.name = Yt(e.name), this.description = e.description, this.locations = e.locations, this.isRepeatable = e.isRepeatable ?? !1, this.deprecationReason = e.deprecationReason, this.extensions = Pt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], Array.isArray(e.locations) || j(!1, `@${e.name} locations must be an Array.`);
		let t = e.args ?? {};
		_e(t) && !Array.isArray(t) || j(!1, `@${e.name} args must be an object with argument names as keys.`), this.args = xn(t);
	}
	get [Symbol.toStringTag]() {
		return "GraphQLDirective";
	}
	toConfig() {
		return {
			name: this.name,
			description: this.description,
			locations: this.locations,
			args: wn(this.args),
			isRepeatable: this.isRepeatable,
			deprecationReason: this.deprecationReason,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		};
	}
	toString() {
		return "@" + this.name;
	}
	toJSON() {
		return this.toString();
	}
}, Kn = new Gn({
	name: "include",
	description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
	locations: [
		P.FIELD,
		P.FRAGMENT_SPREAD,
		P.INLINE_FRAGMENT
	],
	args: { if: {
		type: new W(Bn),
		description: "Included when true."
	} }
}), qn = new Gn({
	name: "skip",
	description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
	locations: [
		P.FIELD,
		P.FRAGMENT_SPREAD,
		P.INLINE_FRAGMENT
	],
	args: { if: {
		type: new W(Bn),
		description: "Skipped when true."
	} }
}), Jn = new Gn({
	name: "deprecated",
	description: "Marks an element of a GraphQL schema as no longer supported.",
	locations: [
		P.FIELD_DEFINITION,
		P.ARGUMENT_DEFINITION,
		P.INPUT_FIELD_DEFINITION,
		P.ENUM_VALUE,
		P.DIRECTIVE_DEFINITION
	],
	args: { reason: {
		type: G,
		description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
		defaultValue: "No longer supported"
	} }
}), Yn = new Gn({
	name: "specifiedBy",
	description: "Exposes a URL that specifies the behavior of this scalar.",
	locations: [P.SCALAR],
	args: { url: {
		type: new W(G),
		description: "The URL that specifies the behavior of this scalar."
	} }
}), Xn = new Gn({
	name: "oneOf",
	description: "Indicates exactly one field must be supplied and this field must not be `null`.",
	locations: [P.INPUT_OBJECT],
	args: {}
}), Zn = Object.freeze([
	Kn,
	qn,
	Jn,
	Yn,
	Xn
]);
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/isIterableObject.mjs
function Qn(e) {
	return typeof e == "object" && typeof e?.[Symbol.iterator] == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/utilities/astFromValue.mjs
function $n(e, t) {
	if (U(t)) {
		let n = $n(e, t.ofType);
		return n?.kind === F.NULL ? null : n;
	}
	if (e === null) return { kind: F.NULL };
	if (e === void 0) return null;
	if (nn(t)) {
		let n = t.ofType;
		if (Qn(e)) {
			let t = [];
			for (let r of e) {
				let e = $n(r, n);
				e != null && t.push(e);
			}
			return {
				kind: F.LIST,
				values: t
			};
		}
		return $n(e, n);
	}
	if (tn(t)) {
		if (!_e(e)) return null;
		let n = [];
		for (let r of Object.values(t.getFields())) {
			let t = $n(e[r.name], r.type);
			t && n.push({
				kind: F.OBJECT_FIELD,
				name: {
					kind: F.NAME,
					value: r.name
				},
				value: t
			});
		}
		return {
			kind: F.OBJECT,
			fields: n
		};
	}
	if (on(t)) {
		let n = t.serialize(e);
		if (n == null) return null;
		if (typeof n == "boolean") return {
			kind: F.BOOLEAN,
			value: n
		};
		if (typeof n == "number" && Number.isFinite(n)) {
			let e = String(n);
			return er.test(e) ? {
				kind: F.INT,
				value: e
			} : {
				kind: F.FLOAT,
				value: e
			};
		}
		if (typeof n == "string") return en(t) ? {
			kind: F.ENUM,
			value: n
		} : t === Vn && er.test(n) ? {
			kind: F.INT,
			value: n
		} : {
			kind: F.STRING,
			value: n
		};
		throw TypeError(`Cannot convert value to AST: ${L(n)}.`);
	}
	/* c8 ignore next 3 */
	ve(!1, "Unexpected input type: " + L(t));
}
var er = /^-?(?:0|[1-9][0-9]*)$/, tr = new vn({
	name: "__Schema",
	description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
	fields: () => ({
		description: {
			type: G,
			resolve: (e) => e.description
		},
		types: {
			description: "A list of all types supported by this server.",
			type: new W(new ln(new W(ir))),
			resolve(e) {
				return Object.values(e.getTypeMap());
			}
		},
		queryType: {
			description: "The type that query operations will be rooted at.",
			type: new W(ir),
			resolve: (e) => e.getQueryType()
		},
		mutationType: {
			description: "If this server supports mutation, the type that mutation operations will be rooted at.",
			type: ir,
			resolve: (e) => e.getMutationType()
		},
		subscriptionType: {
			description: "If this server support subscription, the type that subscription operations will be rooted at.",
			type: ir,
			resolve: (e) => e.getSubscriptionType()
		},
		directives: {
			description: "A list of all directives supported by this server.",
			type: new W(new ln(new W(nr))),
			args: { includeDeprecated: {
				type: new W(Bn),
				defaultValue: !1
			} },
			resolve: (e, { includeDeprecated: t }) => t ? e.getDirectives() : e.getDirectives().filter((e) => e.deprecationReason == null)
		}
	})
}), nr = new vn({
	name: "__Directive",
	description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
	fields: () => ({
		name: {
			type: new W(G),
			resolve: (e) => e.name
		},
		description: {
			type: G,
			resolve: (e) => e.description
		},
		isRepeatable: {
			type: new W(Bn),
			resolve: (e) => e.isRepeatable
		},
		locations: {
			type: new W(new ln(new W(rr))),
			resolve: (e) => e.locations
		},
		args: {
			type: new W(new ln(new W(or))),
			args: { includeDeprecated: {
				type: Bn,
				defaultValue: !1
			} },
			resolve(e, { includeDeprecated: t }) {
				return t ? e.args : e.args.filter((e) => e.deprecationReason == null);
			}
		},
		isDeprecated: {
			type: new W(Bn),
			resolve: (e) => e.deprecationReason != null
		},
		deprecationReason: {
			type: G,
			resolve: (e) => e.deprecationReason
		}
	})
}), rr = new kn({
	name: "__DirectiveLocation",
	description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
	values: {
		QUERY: {
			value: P.QUERY,
			description: "Location adjacent to a query operation."
		},
		MUTATION: {
			value: P.MUTATION,
			description: "Location adjacent to a mutation operation."
		},
		SUBSCRIPTION: {
			value: P.SUBSCRIPTION,
			description: "Location adjacent to a subscription operation."
		},
		FIELD: {
			value: P.FIELD,
			description: "Location adjacent to a field."
		},
		FRAGMENT_DEFINITION: {
			value: P.FRAGMENT_DEFINITION,
			description: "Location adjacent to a fragment definition."
		},
		FRAGMENT_SPREAD: {
			value: P.FRAGMENT_SPREAD,
			description: "Location adjacent to a fragment spread."
		},
		INLINE_FRAGMENT: {
			value: P.INLINE_FRAGMENT,
			description: "Location adjacent to an inline fragment."
		},
		VARIABLE_DEFINITION: {
			value: P.VARIABLE_DEFINITION,
			description: "Location adjacent to a variable definition."
		},
		SCHEMA: {
			value: P.SCHEMA,
			description: "Location adjacent to a schema definition."
		},
		SCALAR: {
			value: P.SCALAR,
			description: "Location adjacent to a scalar definition."
		},
		OBJECT: {
			value: P.OBJECT,
			description: "Location adjacent to an object type definition."
		},
		FIELD_DEFINITION: {
			value: P.FIELD_DEFINITION,
			description: "Location adjacent to a field definition."
		},
		ARGUMENT_DEFINITION: {
			value: P.ARGUMENT_DEFINITION,
			description: "Location adjacent to an argument definition."
		},
		INTERFACE: {
			value: P.INTERFACE,
			description: "Location adjacent to an interface definition."
		},
		UNION: {
			value: P.UNION,
			description: "Location adjacent to a union definition."
		},
		ENUM: {
			value: P.ENUM,
			description: "Location adjacent to an enum definition."
		},
		ENUM_VALUE: {
			value: P.ENUM_VALUE,
			description: "Location adjacent to an enum value definition."
		},
		INPUT_OBJECT: {
			value: P.INPUT_OBJECT,
			description: "Location adjacent to an input object type definition."
		},
		INPUT_FIELD_DEFINITION: {
			value: P.INPUT_FIELD_DEFINITION,
			description: "Location adjacent to an input object field definition."
		},
		DIRECTIVE_DEFINITION: {
			value: P.DIRECTIVE_DEFINITION,
			description: "Location adjacent to a directive definition."
		}
	}
}), ir = new vn({
	name: "__Type",
	description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
	fields: () => ({
		kind: {
			type: new W(lr),
			resolve(e) {
				if (Qt(e)) return cr.SCALAR;
				if (V(e)) return cr.OBJECT;
				if (H(e)) return cr.INTERFACE;
				if ($t(e)) return cr.UNION;
				if (en(e)) return cr.ENUM;
				if (tn(e)) return cr.INPUT_OBJECT;
				if (nn(e)) return cr.LIST;
				if (U(e)) return cr.NON_NULL;
				/* c8 ignore next 3 */
				ve(!1, `Unexpected type: "${L(e)}".`);
			}
		},
		name: {
			type: G,
			resolve: (e) => "name" in e ? e.name : void 0
		},
		description: {
			type: G,
			resolve: (e) => "description" in e ? e.description : void 0
		},
		specifiedByURL: {
			type: G,
			resolve: (e) => "specifiedByURL" in e ? e.specifiedByURL : void 0
		},
		fields: {
			type: new ln(new W(ar)),
			args: { includeDeprecated: {
				type: Bn,
				defaultValue: !1
			} },
			resolve(e, { includeDeprecated: t }) {
				if (V(e) || H(e)) {
					let n = Object.values(e.getFields());
					return t ? n : n.filter((e) => e.deprecationReason == null);
				}
			}
		},
		interfaces: {
			type: new ln(new W(ir)),
			resolve(e) {
				if (V(e) || H(e)) return e.getInterfaces();
			}
		},
		possibleTypes: {
			type: new ln(new W(ir)),
			resolve(e, t, n, { schema: r }) {
				if (cn(e)) return r.getPossibleTypes(e);
			}
		},
		enumValues: {
			type: new ln(new W(sr)),
			args: { includeDeprecated: {
				type: Bn,
				defaultValue: !1
			} },
			resolve(e, { includeDeprecated: t }) {
				if (en(e)) {
					let n = e.getValues();
					return t ? n : n.filter((e) => e.deprecationReason == null);
				}
			}
		},
		inputFields: {
			type: new ln(new W(or)),
			args: { includeDeprecated: {
				type: Bn,
				defaultValue: !1
			} },
			resolve(e, { includeDeprecated: t }) {
				if (tn(e)) {
					let n = Object.values(e.getFields());
					return t ? n : n.filter((e) => e.deprecationReason == null);
				}
			}
		},
		ofType: {
			type: ir,
			resolve: (e) => "ofType" in e ? e.ofType : void 0
		},
		isOneOf: {
			type: Bn,
			resolve: (e) => {
				if (tn(e)) return e.isOneOf;
			}
		}
	})
}), ar = new vn({
	name: "__Field",
	description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
	fields: () => ({
		name: {
			type: new W(G),
			resolve: (e) => e.name
		},
		description: {
			type: G,
			resolve: (e) => e.description
		},
		args: {
			type: new W(new ln(new W(or))),
			args: { includeDeprecated: {
				type: Bn,
				defaultValue: !1
			} },
			resolve(e, { includeDeprecated: t }) {
				return t ? e.args : e.args.filter((e) => e.deprecationReason == null);
			}
		},
		type: {
			type: new W(ir),
			resolve: (e) => e.type
		},
		isDeprecated: {
			type: new W(Bn),
			resolve: (e) => e.deprecationReason != null
		},
		deprecationReason: {
			type: G,
			resolve: (e) => e.deprecationReason
		}
	})
}), or = new vn({
	name: "__InputValue",
	description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
	fields: () => ({
		name: {
			type: new W(G),
			resolve: (e) => e.name
		},
		description: {
			type: G,
			resolve: (e) => e.description
		},
		type: {
			type: new W(ir),
			resolve: (e) => e.type
		},
		defaultValue: {
			type: G,
			description: "A GraphQL-formatted string representing the default value for this input value.",
			resolve(e) {
				let { type: t, defaultValue: n } = e, r = $n(n, t);
				return r ? R(r) : null;
			}
		},
		isDeprecated: {
			type: new W(Bn),
			resolve: (e) => e.deprecationReason != null
		},
		deprecationReason: {
			type: G,
			resolve: (e) => e.deprecationReason
		}
	})
}), sr = new vn({
	name: "__EnumValue",
	description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
	fields: () => ({
		name: {
			type: new W(G),
			resolve: (e) => e.name
		},
		description: {
			type: G,
			resolve: (e) => e.description
		},
		isDeprecated: {
			type: new W(Bn),
			resolve: (e) => e.deprecationReason != null
		},
		deprecationReason: {
			type: G,
			resolve: (e) => e.deprecationReason
		}
	})
}), cr;
(function(e) {
	e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL";
})(cr ||= {});
var lr = new kn({
	name: "__TypeKind",
	description: "An enum describing what kind of type a given `__Type` is.",
	values: {
		SCALAR: {
			value: cr.SCALAR,
			description: "Indicates this type is a scalar."
		},
		OBJECT: {
			value: cr.OBJECT,
			description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
		},
		INTERFACE: {
			value: cr.INTERFACE,
			description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
		},
		UNION: {
			value: cr.UNION,
			description: "Indicates this type is a union. `possibleTypes` is a valid field."
		},
		ENUM: {
			value: cr.ENUM,
			description: "Indicates this type is an enum. `enumValues` is a valid field."
		},
		INPUT_OBJECT: {
			value: cr.INPUT_OBJECT,
			description: "Indicates this type is an input object. `inputFields` is a valid field."
		},
		LIST: {
			value: cr.LIST,
			description: "Indicates this type is a list. `ofType` is a valid field."
		},
		NON_NULL: {
			value: cr.NON_NULL,
			description: "Indicates this type is a non-null. `ofType` is a valid field."
		}
	}
}), ur = {
	name: "__schema",
	type: new W(tr),
	description: "Access the current type schema of this server.",
	args: [],
	resolve: (e, t, n, { schema: r }) => r,
	deprecationReason: void 0,
	extensions: Object.create(null),
	astNode: void 0
}, dr = {
	name: "__type",
	type: ir,
	description: "Request the type information of a single type.",
	args: [{
		name: "name",
		description: void 0,
		type: new W(G),
		defaultValue: void 0,
		deprecationReason: void 0,
		extensions: Object.create(null),
		astNode: void 0
	}],
	resolve: (e, { name: t }, n, { schema: r }) => r.getType(t),
	deprecationReason: void 0,
	extensions: Object.create(null),
	astNode: void 0
}, fr = {
	name: "__typename",
	type: new W(G),
	description: "The name of the current Object type at runtime.",
	args: [],
	resolve: (e, t, n, { parentType: r }) => r.name,
	deprecationReason: void 0,
	extensions: Object.create(null),
	astNode: void 0
}, pr = Object.freeze([
	tr,
	nr,
	rr,
	ir,
	ar,
	or,
	sr,
	lr
]);
function mr(e) {
	return pr.some(({ name: t }) => e.name === t);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/type/schema.mjs
function hr(e) {
	return mt(e, _r);
}
function gr(e) {
	if (!hr(e)) throw Error(`Expected ${L(e)} to be a GraphQL schema.`);
	return e;
}
var _r = class {
	constructor(e) {
		this.__validationErrors = e.assumeValid === !0 ? [] : void 0, _e(e) || j(!1, "Must provide configuration object."), !e.types || Array.isArray(e.types) || j(!1, `"types" must be Array if provided but got: ${L(e.types)}.`), !e.directives || Array.isArray(e.directives) || j(!1, `"directives" must be Array if provided but got: ${L(e.directives)}.`), this.description = e.description, this.extensions = Pt(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this._queryType = e.query, this._mutationType = e.mutation, this._subscriptionType = e.subscription, this._directives = e.directives ?? Zn;
		let t = new Set(e.types);
		if (e.types != null) for (let n of e.types) t.delete(n), vr(n, t);
		this._queryType != null && vr(this._queryType, t), this._mutationType != null && vr(this._mutationType, t), this._subscriptionType != null && vr(this._subscriptionType, t);
		for (let e of this._directives) if (Wn(e)) for (let n of e.args) vr(n.type, t);
		vr(tr, t), this._typeMap = Object.create(null), this._subTypeMap = Object.create(null), this._implementationsMap = Object.create(null);
		for (let e of t) {
			if (e == null) continue;
			let t = e.name;
			if (t || j(!1, "One of the provided types for building the Schema is missing a name."), this._typeMap[t] !== void 0) throw Error(`Schema must contain uniquely named types but contains multiple types named "${t}".`);
			if (this._typeMap[t] = e, H(e)) {
				for (let t of e.getInterfaces()) if (H(t)) {
					let n = this._implementationsMap[t.name];
					n === void 0 && (n = this._implementationsMap[t.name] = {
						objects: [],
						interfaces: []
					}), n.interfaces.push(e);
				}
			} else if (V(e)) {
				for (let t of e.getInterfaces()) if (H(t)) {
					let n = this._implementationsMap[t.name];
					n === void 0 && (n = this._implementationsMap[t.name] = {
						objects: [],
						interfaces: []
					}), n.objects.push(e);
				}
			}
		}
	}
	get [Symbol.toStringTag]() {
		return "GraphQLSchema";
	}
	getQueryType() {
		return this._queryType;
	}
	getMutationType() {
		return this._mutationType;
	}
	getSubscriptionType() {
		return this._subscriptionType;
	}
	getRootType(e) {
		switch (e) {
			case je.QUERY: return this.getQueryType();
			case je.MUTATION: return this.getMutationType();
			case je.SUBSCRIPTION: return this.getSubscriptionType();
		}
	}
	getTypeMap() {
		return this._typeMap;
	}
	getType(e) {
		return this.getTypeMap()[e];
	}
	getPossibleTypes(e) {
		return $t(e) ? e.getTypes() : this.getImplementations(e).objects;
	}
	getImplementations(e) {
		return this._implementationsMap[e.name] ?? {
			objects: [],
			interfaces: []
		};
	}
	isSubType(e, t) {
		let n = this._subTypeMap[e.name];
		if (n === void 0) {
			if (n = Object.create(null), $t(e)) for (let t of e.getTypes()) n[t.name] = !0;
			else {
				let t = this.getImplementations(e);
				for (let e of t.objects) n[e.name] = !0;
				for (let e of t.interfaces) n[e.name] = !0;
			}
			this._subTypeMap[e.name] = n;
		}
		return n[t.name] !== void 0;
	}
	getDirectives() {
		return this._directives;
	}
	getDirective(e) {
		return this.getDirectives().find((t) => t.name === e);
	}
	toConfig() {
		return {
			description: this.description,
			query: this.getQueryType(),
			mutation: this.getMutationType(),
			subscription: this.getSubscriptionType(),
			types: Object.values(this.getTypeMap()),
			directives: this.getDirectives(),
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes,
			assumeValid: this.__validationErrors !== void 0
		};
	}
};
function vr(e, t) {
	let n = mn(e);
	if (!t.has(n)) {
		if (t.add(n), $t(n)) for (let e of n.getTypes()) vr(e, t);
		else if (V(n) || H(n)) {
			for (let e of n.getInterfaces()) vr(e, t);
			for (let e of Object.values(n.getFields())) {
				vr(e.type, t);
				for (let n of e.args) vr(n.type, t);
			}
		} else if (tn(n)) for (let e of Object.values(n.getFields())) vr(e.type, t);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/type/validate.mjs
function yr(e) {
	if (gr(e), e.__validationErrors) return e.__validationErrors;
	let t = new xr(e);
	Sr(t), wr(t), Er(t);
	let n = t.getErrors();
	return e.__validationErrors = n, n;
}
function br(e) {
	let t = yr(e);
	if (t.length !== 0) throw Error(t.map((e) => e.message).join("\n\n"));
}
var xr = class {
	constructor(e) {
		this._errors = [], this.schema = e;
	}
	reportError(e, t) {
		let n = Array.isArray(t) ? t.filter(Boolean) : t;
		this._errors.push(new M(e, { nodes: n }));
	}
	getErrors() {
		return this._errors;
	}
};
function Sr(e) {
	let t = e.schema, n = t.getQueryType();
	n ? V(n) || e.reportError(`Query root type must be Object type, it cannot be ${L(n)}.`, Cr(t, je.QUERY) ?? n.astNode) : e.reportError("Query root type must be provided.", t.astNode);
	let r = t.getMutationType();
	r && !V(r) && e.reportError(`Mutation root type must be Object type if provided, it cannot be ${L(r)}.`, Cr(t, je.MUTATION) ?? r.astNode);
	let i = t.getSubscriptionType();
	i && !V(i) && e.reportError(`Subscription root type must be Object type if provided, it cannot be ${L(i)}.`, Cr(t, je.SUBSCRIPTION) ?? i.astNode);
}
function Cr(e, t) {
	return [e.astNode, ...e.extensionASTNodes].flatMap((e) => e?.operationTypes ?? []).find((e) => e.operation === t)?.type;
}
function wr(e) {
	for (let t of e.schema.getDirectives()) {
		if (!Wn(t)) {
			e.reportError(`Expected directive but got: ${L(t)}.`, t?.astNode);
			continue;
		}
		Tr(e, t), t.locations.length === 0 && e.reportError(`Directive @${t.name} must include 1 or more locations.`, t.astNode);
		for (let n of t.args) Tr(e, n), rn(n.type) || e.reportError(`The type of @${t.name}(${n.name}:) must be Input Type but got: ${L(n.type)}.`, n.astNode), Tn(n) && n.deprecationReason != null && e.reportError(`Required argument @${t.name}(${n.name}:) cannot be deprecated.`, [Rr(n.astNode), n.astNode?.type]);
	}
}
function Tr(e, t) {
	t.name.startsWith("__") && e.reportError(`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`, t.astNode);
}
function Er(e) {
	let t = Fr(e), n = e.schema.getTypeMap();
	for (let r of Object.values(n)) {
		if (!pn(r)) {
			e.reportError(`Expected GraphQL named type but got: ${L(r)}.`, r.astNode);
			continue;
		}
		mr(r) || Tr(e, r), V(r) || H(r) ? (Dr(e, r), Or(e, r)) : $t(r) ? jr(e, r) : en(r) ? Mr(e, r) : tn(r) && (Nr(e, r), t(r));
	}
}
function Dr(e, t) {
	let n = Object.values(t.getFields());
	n.length === 0 && e.reportError(`Type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
	for (let r of n) {
		Tr(e, r), !an(r.type) && e.reportError(`The type of ${t.name}.${r.name} must be Output Type but got: ${L(r.type)}.`, r.astNode?.type);
		for (let n of r.args) {
			let i = n.name;
			Tr(e, n), !rn(n.type) && e.reportError(`The type of ${t.name}.${r.name}(${i}:) must be Input Type but got: ${L(n.type)}.`, n.astNode?.type), Tn(n) && n.deprecationReason != null && e.reportError(`Required argument ${t.name}.${r.name}(${i}:) cannot be deprecated.`, [Rr(n.astNode), n.astNode?.type]);
		}
	}
}
function Or(e, t) {
	let n = Object.create(null);
	for (let r of t.getInterfaces()) {
		if (!H(r)) {
			e.reportError(`Type ${L(t)} must only implement Interface types, it cannot implement ${L(r)}.`, Ir(t, r));
			continue;
		}
		if (t === r) {
			e.reportError(`Type ${t.name} cannot implement itself because it would create a circular reference.`, Ir(t, r));
			continue;
		}
		if (n[r.name]) {
			e.reportError(`Type ${t.name} can only implement ${r.name} once.`, Ir(t, r));
			continue;
		}
		n[r.name] = !0, Ar(e, t, r), kr(e, t, r);
	}
}
function kr(e, t, n) {
	let r = t.getFields();
	for (let i of Object.values(n.getFields())) {
		let a = i.name, o = r[a];
		if (!o) {
			e.reportError(`Interface field ${n.name}.${a} expected but ${t.name} does not provide it.`, [
				i.astNode,
				t.astNode,
				...t.extensionASTNodes
			]);
			continue;
		}
		In(e.schema, o.type, i.type) || e.reportError(`Interface field ${n.name}.${a} expects type ${L(i.type)} but ${t.name}.${a} is type ${L(o.type)}.`, [i.astNode?.type, o.astNode?.type]);
		for (let r of i.args) {
			let i = r.name, s = o.args.find((e) => e.name === i);
			if (!s) {
				e.reportError(`Interface field argument ${n.name}.${a}(${i}:) expected but ${t.name}.${a} does not provide it.`, [r.astNode, o.astNode]);
				continue;
			}
			Fn(r.type, s.type) || e.reportError(`Interface field argument ${n.name}.${a}(${i}:) expects type ${L(r.type)} but ${t.name}.${a}(${i}:) is type ${L(s.type)}.`, [r.astNode?.type, s.astNode?.type]);
		}
		for (let r of o.args) {
			let o = r.name;
			!i.args.find((e) => e.name === o) && Tn(r) && e.reportError(`Object field ${t.name}.${a} includes required argument ${o} that is missing from the Interface field ${n.name}.${a}.`, [r.astNode, i.astNode]);
		}
	}
}
function Ar(e, t, n) {
	let r = t.getInterfaces();
	for (let i of n.getInterfaces()) r.includes(i) || e.reportError(i === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`, [...Ir(n, i), ...Ir(t, n)]);
}
function jr(e, t) {
	let n = t.getTypes();
	n.length === 0 && e.reportError(`Union type ${t.name} must define one or more member types.`, [t.astNode, ...t.extensionASTNodes]);
	let r = Object.create(null);
	for (let i of n) {
		if (r[i.name]) {
			e.reportError(`Union type ${t.name} can only include type ${i.name} once.`, Lr(t, i.name));
			continue;
		}
		r[i.name] = !0, V(i) || e.reportError(`Union type ${t.name} can only include Object types, it cannot include ${L(i)}.`, Lr(t, String(i)));
	}
}
function Mr(e, t) {
	let n = t.getValues();
	n.length === 0 && e.reportError(`Enum type ${t.name} must define one or more values.`, [t.astNode, ...t.extensionASTNodes]);
	for (let t of n) Tr(e, t);
}
function Nr(e, t) {
	let n = Object.values(t.getFields());
	n.length === 0 && e.reportError(`Input Object type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
	for (let r of n) Tr(e, r), !rn(r.type) && e.reportError(`The type of ${t.name}.${r.name} must be Input Type but got: ${L(r.type)}.`, r.astNode?.type), Pn(r) && r.deprecationReason != null && e.reportError(`Required input field ${t.name}.${r.name} cannot be deprecated.`, [Rr(r.astNode), r.astNode?.type]), t.isOneOf && Pr(t, r, e);
}
function Pr(e, t, n) {
	U(t.type) && n.reportError(`OneOf input field ${e.name}.${t.name} must be nullable.`, t.astNode?.type), t.defaultValue !== void 0 && n.reportError(`OneOf input field ${e.name}.${t.name} cannot have a default value.`, t.astNode);
}
function Fr(e) {
	let t = Object.create(null), n = [], r = Object.create(null);
	return i;
	function i(a) {
		if (t[a.name]) return;
		t[a.name] = !0, r[a.name] = n.length;
		let o = Object.values(a.getFields());
		for (let t of o) if (U(t.type) && tn(t.type.ofType)) {
			let a = t.type.ofType, o = r[a.name];
			if (n.push(t), o === void 0) i(a);
			else {
				let t = n.slice(o), r = t.map((e) => e.name).join(".");
				e.reportError(`Cannot reference Input Object "${a.name}" within itself through a series of non-null fields: "${r}".`, t.map((e) => e.astNode));
			}
			n.pop();
		}
		r[a.name] = void 0;
	}
}
function Ir(e, t) {
	let { astNode: n, extensionASTNodes: r } = e;
	return (n == null ? r : [n, ...r]).flatMap((e) => e.interfaces ?? []).filter((e) => e.name.value === t.name);
}
function Lr(e, t) {
	let { astNode: n, extensionASTNodes: r } = e;
	return (n == null ? r : [n, ...r]).flatMap((e) => e.types ?? []).filter((e) => e.name.value === t);
}
function Rr(e) {
	return e?.directives?.find((e) => e.name.value === Jn.name);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/utilities/typeFromAST.mjs
function zr(e, t) {
	switch (t.kind) {
		case F.LIST_TYPE: {
			let n = zr(e, t.type);
			return n && new ln(n);
		}
		case F.NON_NULL_TYPE: {
			let n = zr(e, t.type);
			return n && new W(n);
		}
		case F.NAMED_TYPE: return e.getType(t.name.value);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/utilities/TypeInfo.mjs
var Br = class {
	constructor(e, t, n) {
		this._schema = e, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = n ?? Vr, t && (rn(t) && this._inputTypeStack.push(t), sn(t) && this._parentTypeStack.push(t), an(t) && this._typeStack.push(t));
	}
	get [Symbol.toStringTag]() {
		return "TypeInfo";
	}
	getType() {
		if (this._typeStack.length > 0) return this._typeStack[this._typeStack.length - 1];
	}
	getParentType() {
		if (this._parentTypeStack.length > 0) return this._parentTypeStack[this._parentTypeStack.length - 1];
	}
	getInputType() {
		if (this._inputTypeStack.length > 0) return this._inputTypeStack[this._inputTypeStack.length - 1];
	}
	getParentInputType() {
		if (this._inputTypeStack.length > 1) return this._inputTypeStack[this._inputTypeStack.length - 2];
	}
	getFieldDef() {
		if (this._fieldDefStack.length > 0) return this._fieldDefStack[this._fieldDefStack.length - 1];
	}
	getDefaultValue() {
		if (this._defaultValueStack.length > 0) return this._defaultValueStack[this._defaultValueStack.length - 1];
	}
	getDirective() {
		return this._directive;
	}
	getArgument() {
		return this._argument;
	}
	getEnumValue() {
		return this._enumValue;
	}
	enter(e) {
		let t = this._schema;
		switch (e.kind) {
			case F.SELECTION_SET: {
				let e = mn(this.getType());
				this._parentTypeStack.push(sn(e) ? e : void 0);
				break;
			}
			case F.FIELD: {
				let n = this.getParentType(), r, i;
				n && (r = this._getFieldDef(t, n, e), r && (i = r.type)), this._fieldDefStack.push(r), this._typeStack.push(an(i) ? i : void 0);
				break;
			}
			case F.DIRECTIVE:
				this._directive = t.getDirective(e.name.value);
				break;
			case F.OPERATION_DEFINITION: {
				let n = t.getRootType(e.operation);
				this._typeStack.push(V(n) ? n : void 0);
				break;
			}
			case F.INLINE_FRAGMENT:
			case F.FRAGMENT_DEFINITION: {
				let n = e.typeCondition, r = n ? zr(t, n) : mn(this.getType());
				this._typeStack.push(an(r) ? r : void 0);
				break;
			}
			case F.VARIABLE_DEFINITION: {
				let n = zr(t, e.type);
				this._inputTypeStack.push(rn(n) ? n : void 0);
				break;
			}
			case F.ARGUMENT: {
				let t, n, r = this.getDirective() ?? this.getFieldDef();
				r && (t = r.args.find((t) => t.name === e.name.value), t && (n = t.type)), this._argument = t, this._defaultValueStack.push(t ? t.defaultValue : void 0), this._inputTypeStack.push(rn(n) ? n : void 0);
				break;
			}
			case F.LIST: {
				let e = fn(this.getInputType()), t = nn(e) ? e.ofType : e;
				this._defaultValueStack.push(void 0), this._inputTypeStack.push(rn(t) ? t : void 0);
				break;
			}
			case F.OBJECT_FIELD: {
				let t = mn(this.getInputType()), n, r;
				tn(t) && (r = t.getFields()[e.name.value], r && (n = r.type)), this._defaultValueStack.push(r ? r.defaultValue : void 0), this._inputTypeStack.push(rn(n) ? n : void 0);
				break;
			}
			case F.ENUM: {
				let t = mn(this.getInputType()), n;
				en(t) && (n = t.getValue(e.value)), this._enumValue = n;
				break;
			}
			default:
		}
	}
	leave(e) {
		switch (e.kind) {
			case F.SELECTION_SET:
				this._parentTypeStack.pop();
				break;
			case F.FIELD:
				this._fieldDefStack.pop(), this._typeStack.pop();
				break;
			case F.DIRECTIVE:
				this._directive = null;
				break;
			case F.OPERATION_DEFINITION:
			case F.INLINE_FRAGMENT:
			case F.FRAGMENT_DEFINITION:
				this._typeStack.pop();
				break;
			case F.VARIABLE_DEFINITION:
				this._inputTypeStack.pop();
				break;
			case F.ARGUMENT:
				this._argument = null, this._defaultValueStack.pop(), this._inputTypeStack.pop();
				break;
			case F.LIST:
			case F.OBJECT_FIELD:
				this._defaultValueStack.pop(), this._inputTypeStack.pop();
				break;
			case F.ENUM:
				this._enumValue = null;
				break;
			default:
		}
	}
};
function Vr(e, t, n) {
	let r = n.name.value;
	if (r === ur.name && e.getQueryType() === t) return ur;
	if (r === dr.name && e.getQueryType() === t) return dr;
	if (r === fr.name && sn(t)) return fr;
	if (V(t) || H(t)) return t.getFields()[r];
}
function Hr(e, t) {
	return {
		enter(...n) {
			let r = n[0];
			e.enter(r);
			let i = Ht(t, r.kind).enter;
			if (i) {
				let a = i.apply(t, n);
				return a !== void 0 && (e.leave(r), Ae(a) && e.enter(a)), a;
			}
		},
		leave(...n) {
			let r = n[0], i = Ht(t, r.kind).leave, a;
			return i && (a = i.apply(t, n)), e.leave(r), a;
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/language/predicates.mjs
function Ur(e) {
	return e.kind === F.OPERATION_DEFINITION || e.kind === F.FRAGMENT_DEFINITION;
}
function Wr(e) {
	return e.kind === F.SCHEMA_DEFINITION || Gr(e) || e.kind === F.DIRECTIVE_DEFINITION;
}
function Gr(e) {
	return e.kind === F.SCALAR_TYPE_DEFINITION || e.kind === F.OBJECT_TYPE_DEFINITION || e.kind === F.INTERFACE_TYPE_DEFINITION || e.kind === F.UNION_TYPE_DEFINITION || e.kind === F.ENUM_TYPE_DEFINITION || e.kind === F.INPUT_OBJECT_TYPE_DEFINITION;
}
function Kr(e) {
	return e.kind === F.SCHEMA_EXTENSION || e.kind === F.DIRECTIVE_EXTENSION || qr(e);
}
function qr(e) {
	return e.kind === F.SCALAR_TYPE_EXTENSION || e.kind === F.OBJECT_TYPE_EXTENSION || e.kind === F.INTERFACE_TYPE_EXTENSION || e.kind === F.UNION_TYPE_EXTENSION || e.kind === F.ENUM_TYPE_EXTENSION || e.kind === F.INPUT_OBJECT_TYPE_EXTENSION;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs
function Jr(e) {
	return { Document(t) {
		for (let n of t.definitions) if (!Ur(n)) {
			let t = n.kind === F.SCHEMA_DEFINITION || n.kind === F.SCHEMA_EXTENSION ? "schema" : "\"" + n.name.value + "\"";
			e.reportError(new M(`The ${t} definition is not executable.`, { nodes: n }));
		}
		return !1;
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs
function Yr(e) {
	return { Field(t) {
		let n = e.getParentType();
		if (n && !e.getFieldDef()) {
			let r = e.getSchema(), i = t.name.value, a = St("to use an inline fragment on", Xr(r, n, i));
			a === "" && (a = St(Zr(n, i))), e.reportError(new M(`Cannot query field "${i}" on type "${n.name}".` + a, { nodes: t }));
		}
	} };
}
function Xr(e, t, n) {
	if (!cn(t)) return [];
	let r = /* @__PURE__ */ new Set(), i = Object.create(null);
	for (let a of e.getPossibleTypes(t)) if (a.getFields()[n]) {
		r.add(a), i[a.name] = 1;
		for (let e of a.getInterfaces()) e.getFields()[n] && (r.add(e), i[e.name] = (i[e.name] ?? 0) + 1);
	}
	return [...r].sort((t, n) => {
		let r = i[n.name] - i[t.name];
		return r === 0 ? H(t) && e.isSubType(t, n) ? -1 : H(n) && e.isSubType(n, t) ? 1 : Dt(t.name, n.name) : r;
	}).map((e) => e.name);
}
function Zr(e, t) {
	return V(e) || H(e) ? jt(t, Object.keys(e.getFields())) : [];
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs
function Qr(e) {
	return {
		InlineFragment(t) {
			let n = t.typeCondition;
			if (n) {
				let t = zr(e.getSchema(), n);
				if (t && !sn(t)) {
					let t = R(n);
					e.reportError(new M(`Fragment cannot condition on non composite type "${t}".`, { nodes: n }));
				}
			}
		},
		FragmentDefinition(t) {
			let n = zr(e.getSchema(), t.typeCondition);
			if (n && !sn(n)) {
				let n = R(t.typeCondition);
				e.reportError(new M(`Fragment "${t.name.value}" cannot condition on non composite type "${n}".`, { nodes: t.typeCondition }));
			}
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs
function $r(e) {
	return {
		...ei(e),
		Argument(t) {
			let n = e.getArgument(), r = e.getFieldDef(), i = e.getParentType();
			if (!n && r && i) {
				let n = t.name.value, a = jt(n, r.args.map((e) => e.name));
				e.reportError(new M(`Unknown argument "${n}" on field "${i.name}.${r.name}".` + St(a), { nodes: t }));
			}
		}
	};
}
function ei(e) {
	let t = Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : Zn;
	for (let e of r) t[e.name] = e.args.map((e) => e.name);
	let i = e.getDocument().definitions;
	for (let e of i) if (e.kind === F.DIRECTIVE_DEFINITION) {
		/* c8 ignore next */
		let n = e.arguments ?? [];
		t[e.name.value] = n.map((e) => e.name.value);
	}
	return { Directive(n) {
		let r = n.name.value, i = t[r];
		if (n.arguments && i) for (let t of n.arguments) {
			let n = t.name.value;
			if (!i.includes(n)) {
				let a = jt(n, i);
				e.reportError(new M(`Unknown argument "${n}" on directive "@${r}".` + St(a), { nodes: t }));
			}
		}
		return !1;
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/KnownDirectivesRule.mjs
function ti(e) {
	let t = Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : Zn;
	for (let e of r) t[e.name] = e.locations;
	let i = e.getDocument().definitions;
	for (let e of i) e.kind === F.DIRECTIVE_DEFINITION && (t[e.name.value] = e.locations.map((e) => e.value));
	return { Directive(n, r, i, a, o) {
		let s = n.name.value, c = t[s];
		if (!c) {
			e.reportError(new M(`Unknown directive "@${s}".`, { nodes: n }));
			return;
		}
		let l = ni(o);
		l && !c.includes(l) && e.reportError(new M(`Directive "@${s}" may not be used on ${l}.`, { nodes: n }));
	} };
}
function ni(e) {
	let t = e[e.length - 1];
	switch ("kind" in t || ve(!1), t.kind) {
		case F.OPERATION_DEFINITION: return ri(t.operation);
		case F.FIELD: return P.FIELD;
		case F.FRAGMENT_SPREAD: return P.FRAGMENT_SPREAD;
		case F.INLINE_FRAGMENT: return P.INLINE_FRAGMENT;
		case F.FRAGMENT_DEFINITION: return P.FRAGMENT_DEFINITION;
		case F.VARIABLE_DEFINITION: return P.VARIABLE_DEFINITION;
		case F.SCHEMA_DEFINITION:
		case F.SCHEMA_EXTENSION: return P.SCHEMA;
		case F.SCALAR_TYPE_DEFINITION:
		case F.SCALAR_TYPE_EXTENSION: return P.SCALAR;
		case F.OBJECT_TYPE_DEFINITION:
		case F.OBJECT_TYPE_EXTENSION: return P.OBJECT;
		case F.FIELD_DEFINITION: return P.FIELD_DEFINITION;
		case F.INTERFACE_TYPE_DEFINITION:
		case F.INTERFACE_TYPE_EXTENSION: return P.INTERFACE;
		case F.UNION_TYPE_DEFINITION:
		case F.UNION_TYPE_EXTENSION: return P.UNION;
		case F.ENUM_TYPE_DEFINITION:
		case F.ENUM_TYPE_EXTENSION: return P.ENUM;
		case F.ENUM_VALUE_DEFINITION: return P.ENUM_VALUE;
		case F.INPUT_OBJECT_TYPE_DEFINITION:
		case F.INPUT_OBJECT_TYPE_EXTENSION: return P.INPUT_OBJECT;
		case F.INPUT_VALUE_DEFINITION: {
			let t = e[e.length - 3];
			return "kind" in t || ve(!1), t.kind === F.INPUT_OBJECT_TYPE_DEFINITION ? P.INPUT_FIELD_DEFINITION : P.ARGUMENT_DEFINITION;
		}
		case F.DIRECTIVE_DEFINITION:
		case F.DIRECTIVE_EXTENSION: return P.DIRECTIVE_DEFINITION;
		/* c8 ignore next */
		default: ve(!1, "Unexpected kind: " + L(t.kind));
	}
}
function ri(e) {
	switch (e) {
		case je.QUERY: return P.QUERY;
		case je.MUTATION: return P.MUTATION;
		case je.SUBSCRIPTION: return P.SUBSCRIPTION;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs
function ii(e) {
	return { FragmentSpread(t) {
		let n = t.name.value;
		e.getFragment(n) || e.reportError(new M(`Unknown fragment "${n}".`, { nodes: t.name }));
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs
function ai(e) {
	let t = e.getSchema(), n = t ? t.getTypeMap() : Object.create(null), r = Object.create(null);
	for (let t of e.getDocument().definitions) Gr(t) && (r[t.name.value] = !0);
	let i = [...Object.keys(n), ...Object.keys(r)];
	return { NamedType(t, a, o, s, c) {
		let l = t.name.value;
		if (!n[l] && !r[l]) {
			let n = c[2] ?? o, r = n != null && si(n);
			if (r && oi.includes(l)) return;
			let a = jt(l, r ? oi.concat(i) : i);
			e.reportError(new M(`Unknown type "${l}".` + St(a), { nodes: t }));
		}
	} };
}
var oi = [...Hn, ...pr].map((e) => e.name);
function si(e) {
	return "kind" in e && (Wr(e) || Kr(e));
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs
function ci(e) {
	let t = 0;
	return {
		Document(e) {
			t = e.definitions.filter((e) => e.kind === F.OPERATION_DEFINITION).length;
		},
		OperationDefinition(n) {
			!n.name && t > 1 && e.reportError(new M("This anonymous operation must be the only defined operation.", { nodes: n }));
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs
function li(e) {
	let t = e.getSchema(), n = t?.astNode ?? t?.getQueryType() ?? t?.getMutationType() ?? t?.getSubscriptionType(), r = 0;
	return { SchemaDefinition(t) {
		if (n) {
			e.reportError(new M("Cannot define a new schema within a schema extension.", { nodes: t }));
			return;
		}
		r > 0 && e.reportError(new M("Must provide only one schema definition.", { nodes: t })), ++r;
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/MaxIntrospectionDepthRule.mjs
var ui = 3;
function di(e) {
	function t(n, r = Object.create(null), i = 0) {
		if (n.kind === F.FRAGMENT_SPREAD) {
			let a = n.name.value;
			if (r[a] === !0) return !1;
			let o = e.getFragment(a);
			if (!o) return !1;
			try {
				return r[a] = !0, t(o, r, i);
			} finally {
				r[a] = void 0;
			}
		}
		if (n.kind === F.FIELD && (n.name.value === "fields" || n.name.value === "interfaces" || n.name.value === "possibleTypes" || n.name.value === "inputFields") && (i++, i >= ui)) return !0;
		if ("selectionSet" in n && n.selectionSet) {
			for (let e of n.selectionSet.selections) if (t(e, r, i)) return !0;
		}
		return !1;
	}
	return { Field(n) {
		if ((n.name.value === "__schema" || n.name.value === "__type") && t(n)) return e.reportError(new M("Maximum introspection depth exceeded", { nodes: [n] })), !1;
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs
function fi(e) {
	let t = Object.create(null), n = [], r = Object.create(null);
	return {
		OperationDefinition: () => !1,
		FragmentDefinition(e) {
			return i(e), !1;
		}
	};
	function i(a) {
		if (t[a.name.value]) return;
		let o = a.name.value;
		t[o] = !0;
		let s = e.getFragmentSpreads(a.selectionSet);
		if (s.length !== 0) {
			r[o] = n.length;
			for (let t of s) {
				let a = t.name.value, o = r[a];
				if (n.push(t), o === void 0) {
					let t = e.getFragment(a);
					t && i(t);
				} else {
					let t = n.slice(o), r = t.slice(0, -1).map((e) => "\"" + e.name.value + "\"").join(", ");
					e.reportError(new M(`Cannot spread fragment "${a}" within itself` + (r === "" ? "." : ` via ${r}.`), { nodes: t }));
				}
				n.pop();
			}
			r[o] = void 0;
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs
function pi(e) {
	let t = Object.create(null);
	return {
		OperationDefinition: {
			enter() {
				t = Object.create(null);
			},
			leave(n) {
				let r = e.getRecursiveVariableUsages(n);
				for (let { node: i } of r) {
					let r = i.name.value;
					t[r] !== !0 && e.reportError(new M(n.name ? `Variable "$${r}" is not defined by operation "${n.name.value}".` : `Variable "$${r}" is not defined.`, { nodes: [i, n] }));
				}
			}
		},
		VariableDefinition(e) {
			t[e.variable.name.value] = !0;
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs
function mi(e) {
	let t = [], n = [];
	return {
		OperationDefinition(e) {
			return t.push(e), !1;
		},
		FragmentDefinition(e) {
			return n.push(e), !1;
		},
		Document: { leave() {
			let r = Object.create(null);
			for (let n of t) for (let t of e.getRecursivelyReferencedFragments(n)) r[t.name.value] = !0;
			for (let t of n) {
				let n = t.name.value;
				r[n] !== !0 && e.reportError(new M(`Fragment "${n}" is never used.`, { nodes: t }));
			}
		} }
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs
function hi(e) {
	let t = [];
	return {
		OperationDefinition: {
			enter() {
				t = [];
			},
			leave(n) {
				let r = Object.create(null), i = e.getRecursiveVariableUsages(n);
				for (let { node: e } of i) r[e.name.value] = !0;
				for (let i of t) {
					let t = i.variable.name.value;
					r[t] !== !0 && e.reportError(new M(n.name ? `Variable "$${t}" is never used in operation "${n.name.value}".` : `Variable "$${t}" is never used.`, { nodes: i }));
				}
			}
		},
		VariableDefinition(e) {
			t.push(e);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/utilities/sortValueNode.mjs
function gi(e) {
	switch (e.kind) {
		case F.OBJECT: return {
			...e,
			fields: _i(e.fields)
		};
		case F.LIST: return {
			...e,
			values: e.values.map(gi)
		};
		case F.INT:
		case F.FLOAT:
		case F.STRING:
		case F.BOOLEAN:
		case F.NULL:
		case F.ENUM:
		case F.VARIABLE: return e;
	}
}
function _i(e) {
	return e.map((e) => ({
		...e,
		value: gi(e.value)
	})).sort((e, t) => Dt(e.name.value, t.name.value));
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs
function vi(e) {
	return Array.isArray(e) ? e.map(([e, t]) => `subfields "${e}" conflict because ` + vi(t)).join(" and ") : e;
}
function yi(e) {
	let t = new Pi(), n = new Fi(), r = /* @__PURE__ */ new Map();
	return { SelectionSet(i) {
		let a = bi(e, r, t, n, e.getParentType(), i);
		for (let [[t, n], r, i] of a) {
			let a = vi(n);
			e.reportError(new M(`Fields "${t}" conflict because ${a}. Use different aliases on the fields to fetch both if this was intentional.`, { nodes: r.concat(i) }));
		}
	} };
}
function bi(e, t, n, r, i, a) {
	let o = [], [s, c] = Ai(e, t, i, a);
	if (wi(e, o, t, n, r, s), c.length !== 0) for (let i = 0; i < c.length; i++) {
		xi(e, o, t, n, r, !1, s, c[i]);
		for (let a = i + 1; a < c.length; a++) Si(e, o, t, n, r, !1, c[i], c[a]);
	}
	return o;
}
function xi(e, t, n, r, i, a, o, s) {
	if (r.has(o, s, a)) return;
	r.add(o, s, a);
	let c = e.getFragment(s);
	if (!c) return;
	let [l, u] = ji(e, n, c);
	if (o !== l) {
		Ti(e, t, n, r, i, a, o, l);
		for (let s of u) xi(e, t, n, r, i, a, o, s);
	}
}
function Si(e, t, n, r, i, a, o, s) {
	if (o === s || i.has(o, s, a)) return;
	i.add(o, s, a);
	let c = e.getFragment(o), l = e.getFragment(s);
	if (!c || !l) return;
	let [u, d] = ji(e, n, c), [f, p] = ji(e, n, l);
	Ti(e, t, n, r, i, a, u, f);
	for (let s of p) Si(e, t, n, r, i, a, o, s);
	for (let o of d) Si(e, t, n, r, i, a, o, s);
}
function Ci(e, t, n, r, i, a, o, s, c) {
	let l = [], [u, d] = Ai(e, t, a, o), [f, p] = Ai(e, t, s, c);
	Ti(e, l, t, n, r, i, u, f);
	for (let a of p) xi(e, l, t, n, r, i, u, a);
	for (let a of d) xi(e, l, t, n, r, i, f, a);
	for (let a of d) for (let o of p) Si(e, l, t, n, r, i, a, o);
	return l;
}
function wi(e, t, n, r, i, a) {
	for (let [o, s] of Object.entries(a)) if (s.length > 1) for (let a = 0; a < s.length; a++) for (let c = a + 1; c < s.length; c++) {
		let l = Ei(e, n, r, i, !1, o, s[a], s[c]);
		l && t.push(l);
	}
}
function Ti(e, t, n, r, i, a, o, s) {
	for (let [c, l] of Object.entries(o)) {
		let o = s[c];
		if (o) for (let s of l) for (let l of o) {
			let o = Ei(e, n, r, i, a, c, s, l);
			o && t.push(o);
		}
	}
}
function Ei(e, t, n, r, i, a, o, s) {
	let [c, l, u] = o, [d, f, p] = s, m = i || c !== d && V(c) && V(d);
	if (!m) {
		let e = l.name.value, t = f.name.value;
		if (e !== t) return [
			[a, `"${e}" and "${t}" are different fields`],
			[l],
			[f]
		];
		if (!Di(l, f)) return [
			[a, "they have differing arguments"],
			[l],
			[f]
		];
	}
	let h = u?.type, g = p?.type;
	if (h && g && ki(h, g)) return [
		[a, `they return conflicting types "${L(h)}" and "${L(g)}"`],
		[l],
		[f]
	];
	let _ = l.selectionSet, v = f.selectionSet;
	if (_ && v) return Ni(Ci(e, t, n, r, m, mn(h), _, mn(g), v), a, l, f);
}
function Di(e, t) {
	let n = e.arguments, r = t.arguments;
	if (n === void 0 || n.length === 0) return r === void 0 || r.length === 0;
	/* c8 ignore next */
	if (r === void 0 || r.length === 0 || n.length !== r.length)
 /* c8 ignore next */
	return !1;
	let i = new Map(r.map(({ name: e, value: t }) => [e.value, t]));
	return n.every((e) => {
		let t = e.value, n = i.get(e.name.value);
		return n === void 0 ? !1 : Oi(t) === Oi(n);
	});
}
function Oi(e) {
	return R(gi(e));
}
function ki(e, t) {
	return nn(e) ? nn(t) ? ki(e.ofType, t.ofType) : !0 : nn(t) ? !0 : U(e) ? U(t) ? ki(e.ofType, t.ofType) : !0 : U(t) ? !0 : on(e) || on(t) ? e !== t : !1;
}
function Ai(e, t, n, r) {
	let i = t.get(r);
	if (i) return i;
	let a = Object.create(null), o = Object.create(null);
	Mi(e, n, r, a, o);
	let s = [a, Object.keys(o)];
	return t.set(r, s), s;
}
function ji(e, t, n) {
	return t.get(n.selectionSet) || Ai(e, t, zr(e.getSchema(), n.typeCondition), n.selectionSet);
}
function Mi(e, t, n, r, i) {
	for (let a of n.selections) switch (a.kind) {
		case F.FIELD: {
			let e = a.name.value, n;
			(V(t) || H(t)) && (n = t.getFields()[e]);
			let i = a.alias ? a.alias.value : e;
			r[i] || (r[i] = []), r[i].push([
				t,
				a,
				n
			]);
			break;
		}
		case F.FRAGMENT_SPREAD:
			i[a.name.value] = !0;
			break;
		case F.INLINE_FRAGMENT: {
			let n = a.typeCondition;
			Mi(e, n ? zr(e.getSchema(), n) : t, a.selectionSet, r, i);
			break;
		}
	}
}
function Ni(e, t, n, r) {
	if (e.length > 0) return [
		[t, e.map(([e]) => e)],
		[n, ...e.map(([, e]) => e).flat()],
		[r, ...e.map(([, , e]) => e).flat()]
	];
}
var Pi = class {
	constructor() {
		this._data = /* @__PURE__ */ new Map();
	}
	has(e, t, n) {
		let r = this._data.get(e)?.get(t);
		return r === void 0 ? !1 : n ? !0 : n === r;
	}
	add(e, t, n) {
		let r = this._data.get(e);
		r === void 0 ? this._data.set(e, new Map([[t, n]])) : r.set(t, n);
	}
}, Fi = class {
	constructor() {
		this._orderedPairSet = new Pi();
	}
	has(e, t, n) {
		return e < t ? this._orderedPairSet.has(e, t, n) : this._orderedPairSet.has(t, e, n);
	}
	add(e, t, n) {
		e < t ? this._orderedPairSet.add(e, t, n) : this._orderedPairSet.add(t, e, n);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs
function Ii(e) {
	return {
		InlineFragment(t) {
			let n = e.getType(), r = e.getParentType();
			if (sn(n) && sn(r) && !Ln(e.getSchema(), n, r)) {
				let i = L(r), a = L(n);
				e.reportError(new M(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${a}".`, { nodes: t }));
			}
		},
		FragmentSpread(t) {
			let n = t.name.value, r = Li(e, n), i = e.getParentType();
			if (r && i && !Ln(e.getSchema(), r, i)) {
				let a = L(i), o = L(r);
				e.reportError(new M(`Fragment "${n}" cannot be spread here as objects of type "${a}" can never be of type "${o}".`, { nodes: t }));
			}
		}
	};
}
function Li(e, t) {
	let n = e.getFragment(t);
	if (n) {
		let t = zr(e.getSchema(), n.typeCondition);
		if (sn(t)) return t;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs
function Ri(e) {
	let t = e.getSchema(), n = Object.create(null);
	for (let t of e.getDocument().definitions) Gr(t) && (n[t.name.value] = t);
	return {
		ScalarTypeExtension: r,
		ObjectTypeExtension: r,
		InterfaceTypeExtension: r,
		UnionTypeExtension: r,
		EnumTypeExtension: r,
		InputObjectTypeExtension: r
	};
	function r(r) {
		let i = r.name.value, a = n[i], o = t?.getType(i), s;
		if (a ? s = zi[a.kind] : o && (s = Bi(o)), s) {
			if (s !== r.kind) {
				let t = Vi(r.kind);
				e.reportError(new M(`Cannot extend non-${t} type "${i}".`, { nodes: a ? [a, r] : r }));
			}
		} else {
			let a = jt(i, Object.keys({
				...n,
				...t?.getTypeMap()
			}));
			e.reportError(new M(`Cannot extend type "${i}" because it is not defined.` + St(a), { nodes: r.name }));
		}
	}
}
var zi = {
	[F.SCALAR_TYPE_DEFINITION]: F.SCALAR_TYPE_EXTENSION,
	[F.OBJECT_TYPE_DEFINITION]: F.OBJECT_TYPE_EXTENSION,
	[F.INTERFACE_TYPE_DEFINITION]: F.INTERFACE_TYPE_EXTENSION,
	[F.UNION_TYPE_DEFINITION]: F.UNION_TYPE_EXTENSION,
	[F.ENUM_TYPE_DEFINITION]: F.ENUM_TYPE_EXTENSION,
	[F.INPUT_OBJECT_TYPE_DEFINITION]: F.INPUT_OBJECT_TYPE_EXTENSION
};
function Bi(e) {
	if (Qt(e)) return F.SCALAR_TYPE_EXTENSION;
	if (V(e)) return F.OBJECT_TYPE_EXTENSION;
	if (H(e)) return F.INTERFACE_TYPE_EXTENSION;
	if ($t(e)) return F.UNION_TYPE_EXTENSION;
	if (en(e)) return F.ENUM_TYPE_EXTENSION;
	if (tn(e)) return F.INPUT_OBJECT_TYPE_EXTENSION;
	/* c8 ignore next 3 */
	ve(!1, "Unexpected type: " + L(e));
}
function Vi(e) {
	switch (e) {
		case F.SCALAR_TYPE_EXTENSION: return "scalar";
		case F.OBJECT_TYPE_EXTENSION: return "object";
		case F.INTERFACE_TYPE_EXTENSION: return "interface";
		case F.UNION_TYPE_EXTENSION: return "union";
		case F.ENUM_TYPE_EXTENSION: return "enum";
		case F.INPUT_OBJECT_TYPE_EXTENSION: return "input object";
		/* c8 ignore next */
		default: ve(!1, "Unexpected kind: " + L(e));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs
function Hi(e) {
	return {
		...Ui(e),
		Field: { leave(t) {
			let n = e.getFieldDef();
			if (!n) return !1;
			let r = new Set(t.arguments?.map((e) => e.name.value));
			for (let i of n.args) if (!r.has(i.name) && Tn(i)) {
				let r = L(i.type);
				e.reportError(new M(`Field "${n.name}" argument "${i.name}" of type "${r}" is required, but it was not provided.`, { nodes: t }));
			}
		} }
	};
}
function Ui(e) {
	let t = Object.create(null), n = e.getSchema()?.getDirectives() ?? Zn;
	for (let e of n) t[e.name] = wt(e.args.filter(Tn), (e) => e.name);
	let r = e.getDocument().definitions;
	for (let e of r) if (e.kind === F.DIRECTIVE_DEFINITION) {
		/* c8 ignore next */
		let n = e.arguments ?? [];
		t[e.name.value] = wt(n.filter(Wi), (e) => e.name.value);
	}
	return { Directive: { leave(n) {
		let r = n.name.value, i = t[r];
		if (i) {
			/* c8 ignore next */
			let t = n.arguments ?? [], a = new Set(t.map((e) => e.name.value));
			for (let [t, o] of Object.entries(i)) if (!a.has(t)) {
				let i = Zt(o.type) ? L(o.type) : R(o.type);
				e.reportError(new M(`Directive "@${r}" argument "${t}" of type "${i}" is required, but it was not provided.`, { nodes: n }));
			}
		}
	} } };
}
function Wi(e) {
	return e.type.kind === F.NON_NULL_TYPE && e.defaultValue == null;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/ScalarLeafsRule.mjs
function Gi(e) {
	return { Field(t) {
		let n = e.getType(), r = t.selectionSet;
		if (n) {
			if (on(mn(n))) {
				if (r) {
					let i = t.name.value, a = L(n);
					e.reportError(new M(`Field "${i}" must not have a selection since type "${a}" has no subfields.`, { nodes: r }));
				}
			} else if (!r) {
				let r = t.name.value, i = L(n);
				e.reportError(new M(`Field "${r}" of type "${i}" must have a selection of subfields. Did you mean "${r} { ... }"?`, { nodes: t }));
			} else if (r.selections.length === 0) {
				let r = t.name.value, i = L(n);
				e.reportError(new M(`Field "${r}" of type "${i}" must have at least one field selected.`, { nodes: t }));
			}
		}
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/printPathArray.mjs
function Ki(e) {
	return e.map((e) => typeof e == "number" ? "[" + e.toString() + "]" : "." + e).join("");
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/Path.mjs
function qi(e, t, n) {
	return {
		prev: e,
		key: t,
		typename: n
	};
}
function Ji(e) {
	let t = [], n = e;
	for (; n;) t.push(n.key), n = n.prev;
	return t.reverse();
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/utilities/coerceInputValue.mjs
function Yi(e, t, n = Xi) {
	return Zi(e, t, n, void 0);
}
function Xi(e, t, n) {
	let r = "Invalid value " + L(t);
	throw e.length > 0 && (r += ` at "value${Ki(e)}"`), n.message = r + ": " + n.message, n;
}
function Zi(e, t, n, r) {
	if (U(t)) {
		if (e != null) return Zi(e, t.ofType, n, r);
		n(Ji(r), e, new M(`Expected non-nullable type "${L(t)}" not to be null.`));
		return;
	}
	if (e == null) return null;
	if (nn(t)) {
		let i = t.ofType;
		return Qn(e) ? Array.from(e, (e, t) => Zi(e, i, n, qi(r, t, void 0))) : [Zi(e, i, n, r)];
	}
	if (tn(t)) {
		if (!_e(e) || Array.isArray(e)) {
			n(Ji(r), e, new M(`Expected type "${t.name}" to be an object.`));
			return;
		}
		let i = Object.create(null), a = t.getFields();
		for (let o of Object.values(a)) {
			let a = e[o.name];
			if (a === void 0) {
				if (o.defaultValue !== void 0) i[o.name] = o.defaultValue;
				else if (U(o.type)) {
					let t = L(o.type);
					n(Ji(r), e, new M(`Field "${o.name}" of required type "${t}" was not provided.`));
				}
				continue;
			}
			i[o.name] = Zi(a, o.type, n, qi(r, o.name, t.name));
		}
		for (let i of Object.keys(e)) if (!a[i]) {
			let a = jt(i, Object.keys(t.getFields()));
			n(Ji(r), e, new M(`Field "${i}" is not defined by type "${t.name}".` + St(a)));
		}
		if (t.isOneOf) {
			let a = Object.keys(i);
			a.length !== 1 && n(Ji(r), e, new M(`Exactly one key must be specified for OneOf type "${t.name}".`));
			let o = a[0], s = i[o];
			s === null && n(Ji(r).concat(o), s, new M(`Field "${o}" must be non-null.`));
		}
		return { ...i };
	}
	if (on(t)) {
		let i;
		try {
			i = t.parseValue(e);
		} catch (i) {
			i instanceof M ? n(Ji(r), e, i) : n(Ji(r), e, new M(`Expected type "${t.name}". ` + i.message, { originalError: i }));
			return;
		}
		return i === void 0 && n(Ji(r), e, new M(`Expected type "${t.name}".`)), i;
	}
	/* c8 ignore next 3 */
	ve(!1, "Unexpected input type: " + L(t));
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/utilities/valueFromAST.mjs
function Qi(e, t, n) {
	if (e) {
		if (e.kind === F.VARIABLE) {
			let r = e.name.value;
			if (n == null || n[r] === void 0 || !ea(n, r)) return;
			let i = n[r];
			return i === null && U(t) ? void 0 : i;
		}
		if (U(t)) return e.kind === F.NULL ? void 0 : Qi(e, t.ofType, n);
		if (e.kind === F.NULL) return null;
		if (nn(t)) {
			let r = t.ofType;
			if (e.kind === F.LIST) {
				let t = [];
				for (let i of e.values) if ($i(i, n)) {
					if (U(r)) return;
					t.push(null);
				} else {
					let e = Qi(i, r, n);
					if (e === void 0) return;
					t.push(e);
				}
				return t;
			}
			let i = Qi(e, r, n);
			return i === void 0 ? void 0 : [i];
		}
		if (tn(t)) {
			if (e.kind !== F.OBJECT) return;
			let r = Object.create(null), i = wt(e.fields, (e) => e.name.value);
			for (let e of Object.values(t.getFields())) {
				let t = i[e.name];
				if (!t || $i(t.value, n)) {
					if (e.defaultValue !== void 0) r[e.name] = e.defaultValue;
					else if (U(e.type)) return;
					continue;
				}
				let a = Qi(t.value, e.type, n);
				if (a === void 0) return;
				r[e.name] = a;
			}
			if (t.isOneOf) {
				let e = Object.keys(r);
				if (e.length !== 1 || r[e[0]] === null) return;
			}
			return r;
		}
		if (on(t)) {
			let r;
			try {
				r = t.parseLiteral(e, n);
			} catch {
				return;
			}
			return r === void 0 ? void 0 : r;
		}
		/* c8 ignore next 3 */
		ve(!1, "Unexpected input type: " + L(t));
	}
}
function $i(e, t) {
	return e.kind === F.VARIABLE && (t == null || t[e.name.value] === void 0 || !ea(t, e.name.value));
}
function ea(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/execution/values.mjs
function ta(e, t, n) {
	let r = Object.create(null), i = wt(t.arguments ?? [], (e) => e.name.value);
	for (let a of e.args) {
		let e = a.name, o = a.type, s = i[e];
		if (!s) {
			if (a.defaultValue !== void 0) r[e] = a.defaultValue;
			else if (U(o)) throw new M(`Argument "${e}" of required type "${L(o)}" was not provided.`, { nodes: t });
			continue;
		}
		let c = s.value, l = c.kind === F.NULL;
		if (c.kind === F.VARIABLE) {
			let t = c.name.value;
			if (n == null || !ra(n, t)) {
				if (a.defaultValue !== void 0) r[e] = a.defaultValue;
				else if (U(o)) throw new M(`Argument "${e}" of required type "${L(o)}" was provided the variable "$${t}" which was not provided a runtime value.`, { nodes: c });
				continue;
			}
			l = n[t] == null;
		}
		if (l && U(o)) throw new M(`Argument "${e}" of non-null type "${L(o)}" must not be null.`, { nodes: c });
		let u = Qi(c, o, n);
		if (u === void 0) throw new M(`Argument "${e}" has invalid value ${R(c)}.`, { nodes: c });
		r[e] = u;
	}
	return { ...r };
}
function na(e, t, n) {
	let r = t.directives?.find((t) => t.name.value === e.name);
	if (r) return ta(e, r, n);
}
function ra(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/execution/collectFields.mjs
function ia(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Map();
	return aa(e, t, n, r, i, a, /* @__PURE__ */ new Set()), a;
}
function aa(e, t, n, r, i, a, o) {
	for (let s of i.selections) switch (s.kind) {
		case F.FIELD: {
			if (!oa(n, s)) continue;
			let e = ca(s), t = a.get(e);
			t === void 0 ? a.set(e, [s]) : t.push(s);
			break;
		}
		case F.INLINE_FRAGMENT:
			if (!oa(n, s) || !sa(e, s, r)) continue;
			aa(e, t, n, r, s.selectionSet, a, o);
			break;
		case F.FRAGMENT_SPREAD: {
			let i = s.name.value;
			if (o.has(i) || !oa(n, s)) continue;
			o.add(i);
			let c = t[i];
			if (!c || !sa(e, c, r)) continue;
			aa(e, t, n, r, c.selectionSet, a, o);
			break;
		}
	}
}
function oa(e, t) {
	return na(qn, t, e)?.if === !0 ? !1 : na(Kn, t, e)?.if !== !1;
}
function sa(e, t, n) {
	let r = t.typeCondition;
	if (!r) return !0;
	let i = zr(e, r);
	return i === n ? !0 : cn(i) ? e.isSubType(i, n) : !1;
}
function ca(e) {
	return e.alias ? e.alias.value : e.name.value;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs
function la(e) {
	return { OperationDefinition(t) {
		if (t.operation === "subscription") {
			let n = e.getSchema(), r = n.getSubscriptionType();
			if (r) {
				let i = t.name ? t.name.value : null, a = Object.create(null), o = e.getDocument(), s = Object.create(null);
				for (let e of o.definitions) e.kind === F.FRAGMENT_DEFINITION && (s[e.name.value] = e);
				let c = ia(n, s, a, r, t.selectionSet);
				if (c.size > 1) {
					let t = [...c.values()].slice(1).flat();
					e.reportError(new M(i == null ? "Anonymous Subscription must select only one top level field." : `Subscription "${i}" must select only one top level field.`, { nodes: t }));
				}
				for (let t of c.values()) t[0].name.value.startsWith("__") && e.reportError(new M(i == null ? "Anonymous Subscription must not select an introspection top level field." : `Subscription "${i}" must not select an introspection top level field.`, { nodes: t }));
			}
		}
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/groupBy.mjs
function ua(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = t(r), i = n.get(e);
		i === void 0 ? n.set(e, [r]) : i.push(r);
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueArgumentDefinitionNamesRule.mjs
function da(e) {
	return {
		DirectiveDefinition(e) {
			/* c8 ignore next */
			let t = e.arguments ?? [];
			return n(`@${e.name.value}`, t);
		},
		InterfaceTypeDefinition: t,
		InterfaceTypeExtension: t,
		ObjectTypeDefinition: t,
		ObjectTypeExtension: t
	};
	function t(e) {
		let t = e.name.value, r = e.fields ?? [];
		for (let e of r) {
			let r = e.name.value, i = e.arguments ?? [];
			n(`${t}.${r}`, i);
		}
		return !1;
	}
	function n(t, n) {
		let r = ua(n, (e) => e.name.value);
		for (let [n, i] of r) i.length > 1 && e.reportError(new M(`Argument "${t}(${n}:)" can only be defined once.`, { nodes: i.map((e) => e.name) }));
		return !1;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs
function fa(e) {
	return {
		Field: t,
		Directive: t
	};
	function t(t) {
		let n = ua(t.arguments ?? [], (e) => e.name.value);
		for (let [t, r] of n) r.length > 1 && e.reportError(new M(`There can be only one argument named "${t}".`, { nodes: r.map((e) => e.name) }));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs
function pa(e) {
	let t = Object.create(null), n = e.getSchema();
	return { DirectiveDefinition(r) {
		let i = r.name.value;
		if (n != null && n.getDirective(i)) {
			e.reportError(new M(`Directive "@${i}" already exists in the schema. It cannot be redefined.`, { nodes: r.name }));
			return;
		}
		return t[i] ? e.reportError(new M(`There can be only one directive named "@${i}".`, { nodes: [t[i], r.name] })) : t[i] = r.name, !1;
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs
function ma(e) {
	let t = Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : Zn;
	for (let e of r) t[e.name] = !e.isRepeatable;
	let i = e.getDocument().definitions;
	for (let e of i) e.kind === F.DIRECTIVE_DEFINITION && (t[e.name.value] = !e.repeatable);
	let a = Object.create(null), o = Object.create(null), s = Object.create(null);
	return { enter(n) {
		if (!("directives" in n) || !n.directives) return;
		let r;
		if (n.kind === F.SCHEMA_DEFINITION || n.kind === F.SCHEMA_EXTENSION) r = a;
		else if (Gr(n) || qr(n)) {
			let e = n.name.value;
			r = o[e], r === void 0 && (o[e] = r = Object.create(null));
		} else if (n.kind === F.DIRECTIVE_DEFINITION || n.kind === F.DIRECTIVE_EXTENSION) {
			let e = n.name.value;
			r = s[e], r === void 0 && (s[e] = r = Object.create(null));
		} else r = Object.create(null);
		for (let i of n.directives) {
			let n = i.name.value;
			t[n] && (r[n] ? e.reportError(new M(`The directive "@${n}" can only be used once at this location.`, { nodes: [r[n], i] })) : r[n] = i);
		}
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs
function ha(e) {
	let t = e.getSchema(), n = t ? t.getTypeMap() : Object.create(null), r = Object.create(null);
	return {
		EnumTypeDefinition: i,
		EnumTypeExtension: i
	};
	function i(t) {
		let i = t.name.value;
		r[i] || (r[i] = Object.create(null));
		/* c8 ignore next */
		let a = t.values ?? [], o = r[i];
		for (let t of a) {
			let r = t.name.value, a = n[i];
			en(a) && a.getValue(r) ? e.reportError(new M(`Enum value "${i}.${r}" already exists in the schema. It cannot also be defined in this type extension.`, { nodes: t.name })) : o[r] ? e.reportError(new M(`Enum value "${i}.${r}" can only be defined once.`, { nodes: [o[r], t.name] })) : o[r] = t.name;
		}
		return !1;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs
function ga(e) {
	let t = e.getSchema(), n = t ? t.getTypeMap() : Object.create(null), r = Object.create(null);
	return {
		InputObjectTypeDefinition: i,
		InputObjectTypeExtension: i,
		InterfaceTypeDefinition: i,
		InterfaceTypeExtension: i,
		ObjectTypeDefinition: i,
		ObjectTypeExtension: i
	};
	function i(t) {
		let i = t.name.value;
		r[i] || (r[i] = Object.create(null));
		/* c8 ignore next */
		let a = t.fields ?? [], o = r[i];
		for (let t of a) {
			let r = t.name.value;
			_a(n[i], r) ? e.reportError(new M(`Field "${i}.${r}" already exists in the schema. It cannot also be defined in this type extension.`, { nodes: t.name })) : o[r] ? e.reportError(new M(`Field "${i}.${r}" can only be defined once.`, { nodes: [o[r], t.name] })) : o[r] = t.name;
		}
		return !1;
	}
}
function _a(e, t) {
	return V(e) || H(e) || tn(e) ? e.getFields()[t] != null : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs
function va(e) {
	let t = Object.create(null);
	return {
		OperationDefinition: () => !1,
		FragmentDefinition(n) {
			let r = n.name.value;
			return t[r] ? e.reportError(new M(`There can be only one fragment named "${r}".`, { nodes: [t[r], n.name] })) : t[r] = n.name, !1;
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs
function ya(e) {
	let t = [], n = Object.create(null);
	return {
		ObjectValue: {
			enter() {
				t.push(n), n = Object.create(null);
			},
			leave() {
				let e = t.pop();
				e || ve(!1), n = e;
			}
		},
		ObjectField(t) {
			let r = t.name.value;
			n[r] ? e.reportError(new M(`There can be only one input field named "${r}".`, { nodes: [n[r], t.name] })) : n[r] = t.name;
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs
function ba(e) {
	let t = Object.create(null);
	return {
		OperationDefinition(n) {
			let r = n.name;
			return r && (t[r.value] ? e.reportError(new M(`There can be only one operation named "${r.value}".`, { nodes: [t[r.value], r] })) : t[r.value] = r), !1;
		},
		FragmentDefinition: () => !1
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs
function xa(e) {
	let t = e.getSchema(), n = Object.create(null), r = t ? {
		query: t.getQueryType(),
		mutation: t.getMutationType(),
		subscription: t.getSubscriptionType()
	} : {};
	return {
		SchemaDefinition: i,
		SchemaExtension: i
	};
	function i(t) {
		/* c8 ignore next */
		let i = t.operationTypes ?? [];
		for (let t of i) {
			let i = t.operation, a = n[i];
			r[i] ? e.reportError(new M(`Type for ${i} already defined in the schema. It cannot be redefined.`, { nodes: t })) : a ? e.reportError(new M(`There can be only one ${i} type in schema.`, { nodes: [a, t] })) : n[i] = t;
		}
		return !1;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs
function Sa(e) {
	let t = Object.create(null), n = e.getSchema();
	return {
		ScalarTypeDefinition: r,
		ObjectTypeDefinition: r,
		InterfaceTypeDefinition: r,
		UnionTypeDefinition: r,
		EnumTypeDefinition: r,
		InputObjectTypeDefinition: r
	};
	function r(r) {
		let i = r.name.value;
		if (n != null && n.getType(i)) {
			e.reportError(new M(`Type "${i}" already exists in the schema. It cannot also be defined in this type definition.`, { nodes: r.name }));
			return;
		}
		return t[i] ? e.reportError(new M(`There can be only one type named "${i}".`, { nodes: [t[i], r.name] })) : t[i] = r.name, !1;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs
function Ca(e) {
	return { OperationDefinition(t) {
		let n = ua(t.variableDefinitions ?? [], (e) => e.variable.name.value);
		for (let [t, r] of n) r.length > 1 && e.reportError(new M(`There can be only one variable named "$${t}".`, { nodes: r.map((e) => e.variable.name) }));
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs
function wa(e) {
	return {
		ListValue(t) {
			if (!nn(fn(e.getParentInputType()))) return Ta(e, t), !1;
		},
		ObjectValue(t) {
			let n = mn(e.getInputType());
			if (!tn(n)) return Ta(e, t), !1;
			let r = wt(t.fields, (e) => e.name.value);
			for (let i of Object.values(n.getFields())) if (!r[i.name] && Pn(i)) {
				let r = L(i.type);
				e.reportError(new M(`Field "${n.name}.${i.name}" of required type "${r}" was not provided.`, { nodes: t }));
			}
			n.isOneOf && Ea(e, t, n, r);
		},
		ObjectField(t) {
			let n = mn(e.getParentInputType());
			if (!e.getInputType() && tn(n)) {
				let r = jt(t.name.value, Object.keys(n.getFields()));
				e.reportError(new M(`Field "${t.name.value}" is not defined by type "${n.name}".` + St(r), { nodes: t }));
			}
		},
		NullValue(t) {
			let n = e.getInputType();
			U(n) && e.reportError(new M(`Expected value of type "${L(n)}", found ${R(t)}.`, { nodes: t }));
		},
		EnumValue: (t) => Ta(e, t),
		IntValue: (t) => Ta(e, t),
		FloatValue: (t) => Ta(e, t),
		StringValue: (t) => Ta(e, t),
		BooleanValue: (t) => Ta(e, t)
	};
}
function Ta(e, t) {
	let n = e.getInputType();
	if (!n) return;
	let r = mn(n);
	if (!on(r)) {
		let r = L(n);
		e.reportError(new M(`Expected value of type "${r}", found ${R(t)}.`, { nodes: t }));
		return;
	}
	try {
		if (r.parseLiteral(t, void 0) === void 0) {
			let r = L(n);
			e.reportError(new M(`Expected value of type "${r}", found ${R(t)}.`, { nodes: t }));
		}
	} catch (r) {
		let i = L(n);
		r instanceof M ? e.reportError(r) : e.reportError(new M(`Expected value of type "${i}", found ${R(t)}; ` + r.message, {
			nodes: t,
			originalError: r
		}));
	}
}
function Ea(e, t, n, r) {
	let i = Object.keys(r);
	if (i.length !== 1) {
		e.reportError(new M(`OneOf Input Object "${n.name}" must specify exactly one key.`, { nodes: [t] }));
		return;
	}
	let a = r[i[0]]?.value;
	(!a || a.kind === F.NULL) && e.reportError(new M(`Field "${n.name}.${i[0]}" must be non-null.`, { nodes: [t] }));
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs
function Da(e) {
	return { VariableDefinition(t) {
		let n = zr(e.getSchema(), t.type);
		if (n !== void 0 && !rn(n)) {
			let n = t.variable.name.value, r = R(t.type);
			e.reportError(new M(`Variable "$${n}" cannot be non-input type "${r}".`, { nodes: t.type }));
		}
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs
function Oa(e) {
	let t = Object.create(null);
	return {
		OperationDefinition: {
			enter() {
				t = Object.create(null);
			},
			leave(n) {
				let r = e.getRecursiveVariableUsages(n);
				for (let { node: n, type: i, defaultValue: a, parentType: o } of r) {
					let r = n.name.value, s = t[r];
					if (s && i) {
						let t = e.getSchema(), c = zr(t, s.type);
						if (c && !ka(t, c, s.defaultValue, i, a)) {
							let t = L(c), a = L(i);
							e.reportError(new M(`Variable "$${r}" of type "${t}" used in position expecting type "${a}".`, { nodes: [s, n] }));
						}
						tn(o) && o.isOneOf && dn(c) && e.reportError(new M(`Variable "$${r}" is of type "${c}" but must be non-nullable to be used for OneOf Input Object "${o}".`, { nodes: [s, n] }));
					}
				}
			}
		},
		VariableDefinition(e) {
			t[e.variable.name.value] = e;
		}
	};
}
function ka(e, t, n, r, i) {
	if (U(r) && !U(t)) {
		if (!(n != null && n.kind !== F.NULL) && i === void 0) return !1;
		let a = r.ofType;
		return In(e, t, a);
	}
	return In(e, t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/specifiedRules.mjs
var Aa = Object.freeze([di]), ja = Object.freeze([
	Jr,
	ba,
	ci,
	la,
	ai,
	Qr,
	Da,
	Gi,
	Yr,
	va,
	ii,
	mi,
	Ii,
	fi,
	Ca,
	pi,
	hi,
	ti,
	ma,
	$r,
	fa,
	wa,
	Hi,
	Oa,
	yi,
	ya,
	...Aa
]);
Object.freeze([
	li,
	xa,
	Sa,
	ha,
	ga,
	da,
	pa,
	ai,
	ti,
	ma,
	Ri,
	ei,
	fa,
	ya,
	Ui
]);
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/validation/ValidationContext.mjs
var Ma = class {
	constructor(e, t) {
		this._ast = e, this._fragments = void 0, this._fragmentSpreads = /* @__PURE__ */ new Map(), this._recursivelyReferencedFragments = /* @__PURE__ */ new Map(), this._onError = t;
	}
	get [Symbol.toStringTag]() {
		return "ASTValidationContext";
	}
	reportError(e) {
		this._onError(e);
	}
	getDocument() {
		return this._ast;
	}
	getFragment(e) {
		let t;
		if (this._fragments) t = this._fragments;
		else {
			t = Object.create(null);
			for (let e of this.getDocument().definitions) e.kind === F.FRAGMENT_DEFINITION && (t[e.name.value] = e);
			this._fragments = t;
		}
		return t[e];
	}
	getFragmentSpreads(e) {
		let t = this._fragmentSpreads.get(e);
		if (!t) {
			t = [];
			let n = [e], r;
			for (; r = n.pop();) for (let e of r.selections) e.kind === F.FRAGMENT_SPREAD ? t.push(e) : e.selectionSet && n.push(e.selectionSet);
			this._fragmentSpreads.set(e, t);
		}
		return t;
	}
	getRecursivelyReferencedFragments(e) {
		let t = this._recursivelyReferencedFragments.get(e);
		if (!t) {
			t = [];
			let n = Object.create(null), r = [e.selectionSet], i;
			for (; i = r.pop();) for (let e of this.getFragmentSpreads(i)) {
				let i = e.name.value;
				if (n[i] !== !0) {
					n[i] = !0;
					let e = this.getFragment(i);
					e && (t.push(e), r.push(e.selectionSet));
				}
			}
			this._recursivelyReferencedFragments.set(e, t);
		}
		return t;
	}
}, Na = class extends Ma {
	constructor(e, t, n, r) {
		super(t, r), this._schema = e, this._typeInfo = n, this._variableUsages = /* @__PURE__ */ new Map(), this._recursiveVariableUsages = /* @__PURE__ */ new Map();
	}
	get [Symbol.toStringTag]() {
		return "ValidationContext";
	}
	getSchema() {
		return this._schema;
	}
	getVariableUsages(e) {
		let t = this._variableUsages.get(e);
		if (!t) {
			let n = [], r = new Br(this._schema);
			Bt(e, Hr(r, {
				VariableDefinition: () => !1,
				Variable(e) {
					n.push({
						node: e,
						type: r.getInputType(),
						defaultValue: r.getDefaultValue(),
						parentType: r.getParentInputType()
					});
				}
			})), t = n, this._variableUsages.set(e, t);
		}
		return t;
	}
	getRecursiveVariableUsages(e) {
		let t = this._recursiveVariableUsages.get(e);
		if (!t) {
			t = this.getVariableUsages(e);
			for (let n of this.getRecursivelyReferencedFragments(e)) t = t.concat(this.getVariableUsages(n));
			this._recursiveVariableUsages.set(e, t);
		}
		return t;
	}
	getType() {
		return this._typeInfo.getType();
	}
	getParentType() {
		return this._typeInfo.getParentType();
	}
	getInputType() {
		return this._typeInfo.getInputType();
	}
	getParentInputType() {
		return this._typeInfo.getParentInputType();
	}
	getFieldDef() {
		return this._typeInfo.getFieldDef();
	}
	getDirective() {
		return this._typeInfo.getDirective();
	}
	getArgument() {
		return this._typeInfo.getArgument();
	}
	getEnumValue() {
		return this._typeInfo.getEnumValue();
	}
}, Pa = Et(Oe, (e) => e.filter((e) => e !== "description"));
function Fa(e, t, n = ja, r, i = new Br(e)) {
	let a = r?.maxErrors ?? 100;
	t || j(!1, "Must provide document."), br(e);
	let o = Object.freeze({}), s = [], c = new Na(e, t, i, (e) => {
		if (s.length >= a) throw s.push(new M("Too many validation errors, error limit reached. Validation aborted.")), o;
		s.push(e);
	}), l = Vt(n.map((e) => e(c)));
	try {
		Bt(t, Hr(i, l), Pa);
	} catch (e) {
		if (e !== o) throw e;
	}
	return s;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/toError.mjs
function Ia(e) {
	return e instanceof Error ? e : new La(e);
}
var La = class extends Error {
	constructor(e) {
		super("Unexpected error value: " + L(e)), this.name = "NonErrorThrown", this.thrownValue = e;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/error/locatedError.mjs
function Ra(e, t, n) {
	let r = Ia(e);
	return za(r) ? r : new M(r.message, {
		nodes: r.nodes ?? t,
		source: r.source,
		positions: r.positions,
		path: n,
		originalError: r
	});
}
function za(e) {
	return Array.isArray(e.path);
}
var Ba = function(e, t, n, r) {
	if (_e(e) && typeof e.__typename == "string") return e.__typename;
	let i = n.schema.getPossibleTypes(r), a = [];
	for (let r = 0; r < i.length; r++) {
		let o = i[r];
		if (o.isTypeOf) {
			let i = o.isTypeOf(e, t, n);
			if (ge(i)) a[r] = i;
			else if (i) return a.length && Promise.allSettled(a).catch(() => {}), o.name;
		}
	}
	if (a.length) return Promise.all(a).then((e) => {
		for (let t = 0; t < e.length; t++) if (e[t]) return i[t].name;
	});
}, Va = function(e, t, n, r) {
	if (_e(e) || typeof e == "function") {
		let i = e[r.fieldName];
		return typeof i == "function" ? e[r.fieldName](t, n, r) : i;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/utilities/getOperationAST.mjs
function Ha(e, t) {
	let n = null;
	for (let r of e.definitions) if (r.kind === F.OPERATION_DEFINITION) {
		if (t == null) {
			if (n) return null;
			n = r;
		} else if (r.name?.value === t) return r;
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/utilities/lexicographicSortSchema.mjs
function Ua(e) {
	let t = e.toConfig(), n = Tt(Ga(t.types), (e) => e.name, d);
	return new _r({
		...t,
		types: Object.values(n),
		directives: Ga(t.directives).map(o),
		query: a(t.query),
		mutation: a(t.mutation),
		subscription: a(t.subscription)
	});
	function r(e) {
		return nn(e) ? new ln(r(e.ofType)) : U(e) ? new W(r(e.ofType)) : i(e);
	}
	function i(e) {
		return n[e.name];
	}
	function a(e) {
		return e && i(e);
	}
	function o(e) {
		let t = e.toConfig();
		return new Gn({
			...t,
			locations: Ka(t.locations, (e) => e),
			args: s(t.args)
		});
	}
	function s(e) {
		return Wa(e, (e) => ({
			...e,
			type: r(e.type)
		}));
	}
	function c(e) {
		return Wa(e, (e) => ({
			...e,
			type: r(e.type),
			args: e.args && s(e.args)
		}));
	}
	function l(e) {
		return Wa(e, (e) => ({
			...e,
			type: r(e.type)
		}));
	}
	function u(e) {
		return Ga(e).map(i);
	}
	function d(e) {
		if (Qt(e) || mr(e)) return e;
		if (V(e)) {
			let t = e.toConfig();
			return new vn({
				...t,
				interfaces: () => u(t.interfaces),
				fields: () => c(t.fields)
			});
		}
		if (H(e)) {
			let t = e.toConfig();
			return new En({
				...t,
				interfaces: () => u(t.interfaces),
				fields: () => c(t.fields)
			});
		}
		if ($t(e)) {
			let t = e.toConfig();
			return new Dn({
				...t,
				types: () => u(t.types)
			});
		}
		if (en(e)) {
			let t = e.toConfig();
			return new kn({
				...t,
				values: Wa(t.values, (e) => e)
			});
		}
		if (tn(e)) {
			let t = e.toConfig();
			return new Mn({
				...t,
				fields: () => l(t.fields)
			});
		}
		/* c8 ignore next 3 */
		ve(!1, "Unexpected type: " + L(e));
	}
}
function Wa(e, t) {
	let n = Object.create(null);
	for (let r of Object.keys(e).sort(Dt)) n[r] = t(e[r]);
	return n;
}
function Ga(e) {
	return Ka(e, (e) => e.name);
}
function Ka(e, t) {
	return e.slice().sort((e, n) => Dt(t(e), t(n)));
}
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/errors.js
var qa = class extends M {
	constructor(e, t) {
		super(e, t), this.name = "PothosError";
	}
}, K = class extends qa {
	constructor(e, t) {
		super(e, t), this.name = "PothosSchemaError";
	}
}, Ja = Symbol.for("Pothos.outputShapeKey"), Ya = Symbol.for("Pothos.parentShapeKey"), Xa = Symbol.for("Pothos.inputShapeKey"), Za = Symbol.for("Pothos.inputFieldShapeKey"), Qa = Symbol.for("Pothos.outputFieldShapeKey"), $a = Symbol.for("Pothos.typeBrandKey");
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/base.js
function eo(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var to = class {
	toString() {
		return `${this.kind}Ref<${this.name}>`;
	}
	associate(e) {
		if (this.association && typeof this.associate != "string") throw new K(`${this} is already associated with ${this.association}`);
		this.association = e;
	}
	onConfig(e) {
		this.configCallbacks.add(e), this.currentConfig && e(this.currentConfig);
	}
	updateConfig(e) {
		if (typeof e == "function") {
			this.onceOnConfig((t) => {
				this.updateConfig(e(t));
			});
			return;
		}
		this.currentConfig = e;
		for (let t of this.configCallbacks) {
			if (this.currentConfig !== e) break;
			t(e);
		}
	}
	prepareForBuild() {
		this.preparedForBuild = !0;
	}
	onceOnConfig(e) {
		let t = (n) => {
			this.configCallbacks.delete(t), e(n);
		};
		this.onConfig(t);
	}
	constructor(e, t, n) {
		eo(this, "kind", void 0), eo(this, "name", void 0), eo(this, "association", null), eo(this, "configCallbacks", /* @__PURE__ */ new Set()), eo(this, "preparedForBuild", !1), eo(this, "currentConfig", void 0), this.kind = e, this.name = t, this.currentConfig = n ?? null;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/input-list.js
function no(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var ro = Xa, io = class extends to {
	constructor(e, t) {
		super("InputList", `InputList<${String(e)}>`), no(this, "kind", "InputList"), no(this, ro, void 0), no(this, "$inferInput", void 0), no(this, "listType", void 0), no(this, "required", void 0), this.listType = e, this.required = t;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/list.js
function ao(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var oo = Ja, so = Ya, co = class extends to {
	constructor(e, t) {
		super("List", `List<${String(e)}>`), ao(this, "kind", "List"), ao(this, "$inferType", void 0), ao(this, oo, void 0), ao(this, so, void 0), ao(this, "listType", void 0), ao(this, "nullable", void 0), this.listType = e, this.nullable = t;
	}
}, lo = Symbol.for("Pothos.contextCache");
function uo(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = (n, ...r) => {
		let i = n[lo] || n;
		if (t.has(i)) return t.get(i);
		let a = e(n, ...r);
		return t.set(i, a), a;
	};
	return n.delete = (e) => {
		let n = e[lo] || e;
		t.delete(n);
	}, n;
}
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/utils/enums.js
function fo(e) {
	let t = {};
	if (Array.isArray(e)) for (let n of e) t[String(n)] = { pothosOptions: {} };
	else for (let [n, r] of Object.entries(e)) r && typeof r == "object" ? t[n] = {
		...r,
		pothosOptions: r
	} : typeof r == "string" && (t[r] = { pothosOptions: {} });
	return t;
}
function po(e, t) {
	let n = {};
	for (let r of Object.keys(e).filter((t) => typeof e[e[t]] != "number")) n[r] = {
		value: e[r],
		pothosOptions: {},
		...t?.[r]
	};
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/utils/params.js
function mo(e, t, n) {
	let r = typeof n == "object" ? n.items : !1, i = typeof n == "object" ? n.list : !!n;
	if (Array.isArray(e)) return {
		kind: "List",
		type: mo(e[0], t, r),
		nullable: i
	};
	if (e instanceof co) return {
		kind: "List",
		type: mo(e.listType, t, e.nullable),
		nullable: i
	};
	let a = t.getOutputTypeRef(e), o = a instanceof to ? a.kind : t.getTypeConfig(a).graphqlKind, s = a instanceof to ? a.name : t.getTypeConfig(a).name;
	if (o !== "InputObject" && o !== "List" && o !== "InputList") return {
		kind: o,
		ref: a,
		nullable: i
	};
	throw new K(`Expected input param ${s} to be an output type but got ${o}`);
}
function ho(e, t, n) {
	let r = typeof n == "object" ? n.items : !0, i = typeof n == "object" ? n.list : !!n;
	if (Array.isArray(e)) return {
		kind: "List",
		type: ho(e[0], t, r),
		required: i
	};
	if (e instanceof io) return {
		kind: "List",
		type: ho(e.listType, t, e.required),
		required: i
	};
	let a = t.getInputTypeRef(e), o = a instanceof to ? a.kind : t.getTypeConfig(a).graphqlKind, s = a instanceof to ? a.name : t.getTypeConfig(a).name;
	if (o === "InputObject" || o === "Enum" || o === "Scalar") return {
		kind: o,
		ref: a,
		required: i
	};
	throw new K(`Expected input param ${s} to be an InputObject, Enum, or Scalar but got ${o}`);
}
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/utils/index.js
function go(e) {
	throw TypeError(`Unexpected value: ${e}`);
}
function _o(e) {
	return !!(e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function");
}
function vo(e) {
	if (e === void 0) throw new K("Received undefined as a type ref.\n\nThis is often caused by a circular import\nIf this ref is imported from a file that re-exports it (like index.ts)\nyou may be able to resolve this by importing it directly from the file that defines it.\n");
}
function yo(e) {
	if (!(!e || typeof e == "function")) {
		if (!Array.isArray(e)) throw new K("interfaces must be an array or function");
		for (let t of e) if (t === void 0) throw new K("Received undefined in list of interfaces.\n\nThis is often caused by a circular import\nIf this ref is imported from a file that re-exports it (like index.ts)\nyou may be able to resolve this by importing it directly from the file that defines it.\n\nAlternatively you can define interfaces with a function that will be lazily evaluated,\nwhich may resolver issues with circular dependencies:\n\nExample:\nbuilder.objectType('MyObject', {\n  interface: () => [Interface1, Interface2],\n  ...\n});\n");
	}
}
function bo(e) {
	return typeof e == "object" && e && $a in e ? e[$a] : null;
}
function xo(e, t, n) {
	if (_o(e)) return Promise.resolve(e).then(t, n);
	let r = t(e);
	return _o(r) ? Promise.resolve(r) : r;
}
function So(e, t, n) {
	function r(t, i) {
		return i === e.length ? t : xo(n(t, e[i], i), (e) => e === null ? null : r(e, i + 1));
	}
	return r(t, 0);
}
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/plugins/plugin.js
function Co(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var wo = /* @__PURE__ */ new WeakMap(), To = class {
	onTypeConfig(e) {
		return e;
	}
	onOutputFieldConfig(e) {
		return e;
	}
	onInputFieldConfig(e) {
		return e;
	}
	onEnumValueConfig(e) {
		return e;
	}
	beforeBuild() {}
	afterBuild(e) {
		return e;
	}
	wrapResolve(e, t) {
		return e;
	}
	wrapSubscribe(e, t) {
		return e;
	}
	wrapArgMappers(e, t) {
		return e;
	}
	wrapResolveType(e, t) {
		return e;
	}
	wrapIsTypeOf(e, t) {
		return e;
	}
	runUnique(e, t) {
		if (wo.has(this.builder) || wo.set(this.builder, /* @__PURE__ */ new Map()), !wo.get(this.builder).has(e)) {
			let n = t();
			return wo.get(this.builder).set(e, n), n;
		}
		return wo.get(this.builder).get(e);
	}
	createRequestData(e) {
		throw new qa("createRequestData not implemented");
	}
	requestData(e) {
		return this.requestDataMap(e);
	}
	constructor(e, t) {
		Co(this, "name", void 0), Co(this, "builder", void 0), Co(this, "buildCache", void 0), Co(this, "options", void 0), Co(this, "requestDataMap", uo((e) => this.createRequestData(e))), this.name = t, this.builder = e.builder, this.buildCache = e, this.options = e.options;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/plugins/merge-plugins.js
function Eo(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Do = class extends To {
	onTypeConfig(e) {
		return this.plugins.reduceRight((e, t) => e === null ? e : t.onTypeConfig(e), e);
	}
	onInputFieldConfig(e) {
		return this.plugins.reduceRight((e, t) => e === null ? e : t.onInputFieldConfig(e), e);
	}
	onOutputFieldConfig(e) {
		return this.plugins.reduceRight((e, t) => e === null ? e : t.onOutputFieldConfig(e), e);
	}
	onEnumValueConfig(e) {
		return this.plugins.reduceRight((e, t) => e === null ? e : t.onEnumValueConfig(e), e);
	}
	beforeBuild() {
		for (let e of this.plugins) e.beforeBuild();
	}
	afterBuild(e) {
		return this.plugins.reduceRight((e, t) => t.afterBuild(e), e);
	}
	wrapResolve(e, t) {
		let n = this.plugins.reduceRight((e, n) => n.wrapResolve(e, t), e);
		if (!t.argMappers.length) return this.wrapArgMappers(n, t);
		let r = t.argMappers;
		return this.wrapArgMappers((e, t, i, a) => xo(So(r, t, (e, t) => t(e, i, a)), (t) => n(e, t, i, a)), t);
	}
	wrapSubscribe(e, t) {
		let n = this.plugins.reduceRight((e, n) => n.wrapSubscribe(e, t), e);
		if (!n || !t.argMappers.length) return this.wrapArgMappers(n, t);
		let r = t.argMappers;
		return this.wrapArgMappers((e, t, i, a) => xo(So(r, t, (e, t) => t(e, i, a)), (t) => n(e, t, i, a)), t);
	}
	wrapArgMappers(e, t) {
		return this.plugins.reduceRight((e, n) => n.wrapArgMappers(e, t), e);
	}
	wrapResolveType(e, t) {
		return this.plugins.reduceRight((e, n) => n.wrapResolveType(e, t), e);
	}
	wrapIsTypeOf(e, t) {
		return this.plugins.reduceRight((e, n) => n.wrapIsTypeOf(e, t), e);
	}
	constructor(e, t) {
		super(e, "PothosMergedPlugin"), Eo(this, "plugins", void 0), this.plugins = t;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/scalar.js
function Oo(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var ko = Ja, Ao = Ya, jo = Xa, Mo = class extends to {
	constructor(e, t) {
		super("Scalar", e, t), Oo(this, "kind", "Scalar"), Oo(this, "$inferType", void 0), Oo(this, "$inferInput", void 0), Oo(this, ko, void 0), Oo(this, Ao, void 0), Oo(this, jo, void 0);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/builtin-scalar.js
function No(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Po = class extends Mo {
	constructor(e) {
		super(e.name), No(this, "type", void 0), this.type = e;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/build-cache.js
function Fo(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Io = class {
	getTypeConfig(e, t) {
		let n = this.configStore.getTypeConfig(e, t);
		return this.typeConfigs.has(n.name) || this.typeConfigs.set(n.name, this.plugin.onTypeConfig(n)), this.typeConfigs.get(n.name);
	}
	getInputTypeFieldConfigs(e) {
		let t = this.getTypeConfig(e, "InputObject"), n = this.types.get(t.name);
		if (!n) throw new K(`Input type ${t.name} has not been built yet`);
		let r = n.getFields(), i = {};
		for (let e of Object.keys(r)) i[e] = r[e].extensions?.pothosConfig;
		return i;
	}
	getImplementers(e) {
		if (this.implementers.has(e.name)) return this.implementers.get(e.name);
		let t = [...this.configStore.typeConfigs.values()].filter((t) => t.kind === "Object" && t.interfaces.find((t) => this.configStore.getTypeConfig(t).name === e.name));
		return this.implementers.set(e.name, t), t;
	}
	buildAll() {
		this.configStore.prepareForBuild();
		for (let e of this.configStore.typeConfigs.values()) (e.kind === "Enum" || e.kind === "Scalar") && this.buildTypeFromConfig(e);
		for (let e of this.configStore.typeConfigs.values()) e.kind === "InputObject" && this.buildTypeFromConfig(e);
		for (let e of this.types.values()) e instanceof Mn && e.getFields();
		for (let e of this.configStore.typeConfigs.values()) e.kind === "Interface" && this.buildTypeFromConfig(e);
		for (let e of this.configStore.typeConfigs.values()) e.kind === "Object" && this.buildTypeFromConfig(e);
		for (let e of this.configStore.typeConfigs.values()) e.kind === "Union" && this.buildTypeFromConfig(e);
		for (let e of this.configStore.typeConfigs.values()) (e.kind === "Query" || e.kind === "Mutation" || e.kind === "Subscription") && this.buildTypeFromConfig(e);
		for (let e of this.types.values()) e instanceof vn || e instanceof En ? e.getFields() : e instanceof Dn && e.getTypes();
	}
	buildTypeFromConfig(e) {
		let t = this.getTypeConfig(e.name), { name: n } = t;
		switch (this.typeConfigs.set(n, t), t.kind) {
			case "Enum":
				this.addType(n, this.buildEnum(t));
				break;
			case "InputObject":
				this.addType(n, this.buildInputObject(t));
				break;
			case "Interface":
				this.addType(n, this.buildInterface(t));
				break;
			case "Scalar":
				this.addType(n, this.buildScalar(t));
				break;
			case "Union":
				this.addType(n, this.buildUnion(t));
				break;
			case "Object":
			case "Query":
			case "Mutation":
			case "Subscription":
				this.addType(n, this.buildObject(t));
				break;
			default: go(t);
		}
	}
	addType(e, t) {
		if (this.types.has(e)) throw new K(`reference or name has already been used to create another type (${t.name})`);
		this.types.set(e, t);
	}
	buildOutputTypeParam(e) {
		return e.kind === "List" ? e.nullable ? new ln(this.buildOutputTypeParam(e.type)) : new W(new ln(this.buildOutputTypeParam(e.type))) : e.nullable ? this.getOutputType(e.ref) : new W(this.getOutputType(e.ref));
	}
	buildInputTypeParam(e) {
		return e.kind === "List" ? e.required ? new W(new ln(this.buildInputTypeParam(e.type))) : new ln(this.buildInputTypeParam(e.type)) : e.required ? new W(this.getInputType(e.ref)) : this.getInputType(e.ref);
	}
	buildFields(e) {
		let t = {};
		for (let [n, r] of e) {
			this.outputFieldConfigs.has(r) || this.outputFieldConfigs.set(r, this.plugin.onOutputFieldConfig(r));
			let e = this.outputFieldConfigs.get(r);
			if (!e) continue;
			let i = { ...e }, a = /* @__PURE__ */ new Map();
			for (let e of Object.keys(i.args)) a.set(e, i.args[e]);
			let o = this.buildInputFields(a), s = {};
			for (let e of Object.keys(i.args)) s[e] = this.inputFieldConfigs.get(i.args[e]);
			i.args = s;
			let c = this.plugin.wrapResolve(i.resolve ?? Va, i), l = this.plugin.wrapSubscribe(i.subscribe, i);
			t[n] = {
				...i,
				type: this.buildOutputTypeParam(i.type),
				args: o,
				extensions: {
					...i.extensions,
					pothosResolveWrapped: c !== (i.resolve ?? Va),
					pothosSubscribeWrapped: l !== i.subscribe,
					pothosOptions: i.pothosOptions,
					pothosConfig: i,
					pothosArgMappers: i.argMappers
				},
				resolve: c === Va ? void 0 : c,
				subscribe: l
			};
		}
		return t;
	}
	buildInputFields(e) {
		let t = {};
		for (let [n, r] of e) {
			this.inputFieldConfigs.has(r) || this.inputFieldConfigs.set(r, this.plugin.onInputFieldConfig(r));
			let e = this.inputFieldConfigs.get(r);
			e && (t[n] = {
				...e,
				type: this.buildInputTypeParam(e.type),
				extensions: {
					...e.extensions,
					pothosOptions: e.pothosOptions,
					pothosConfig: e
				}
			});
		}
		return t;
	}
	getInterfaceFields(e) {
		let t = e.getInterfaces().reduce((e, t) => Object.assign(e, this.getFields(t)), {}), n = this.configStore.getFields(e.name, "Interface"), r = this.buildFields(n);
		return {
			...t,
			...r
		};
	}
	getObjectFields(e) {
		let t = e.getInterfaces().reduce((e, t) => Object.assign(e, this.getFields(t)), {}), n = this.buildFields(this.configStore.getFields(e.name, "Object"));
		return {
			...t,
			...n
		};
	}
	getRootFields(e) {
		return this.buildFields(this.configStore.getFields(e.name, "Object"));
	}
	getFields(e) {
		if (e instanceof vn) {
			let t = this.configStore.getTypeConfig(e.name);
			return t.kind === "Query" || t.kind === "Mutation" || t.kind === "Subscription" ? this.getRootFields(e) : this.getObjectFields(e);
		}
		if (e instanceof En) return this.getInterfaceFields(e);
		throw new K(`Type ${e.name} does not have fields to resolve`);
	}
	getInputFields(e) {
		return this.buildInputFields(this.configStore.getFields(e.name, "InputObject"));
	}
	getType(e) {
		if (e instanceof Po) return e.type;
		let t = this.configStore.getTypeConfig(e);
		return this.types.get(t.name) || (this.buildTypeFromConfig(t), this.types.get(t.name));
	}
	getOutputType(e) {
		let t = this.getType(e);
		if (t instanceof Mn) throw new K(`Expected ${String(e)} to be an output type but it was defined as an InputObject`);
		return t;
	}
	getInputType(e) {
		let t = this.getType(e);
		if (!t) throw new K(`Missing implementation of for type ${String(e)}`);
		if (t instanceof vn) throw new K(`Expected ${t.name} to be an input type but it was defined as a GraphQLObjectType`);
		if (t instanceof En) throw new K(`Expected ${t.name} to be an input type but it was defined as a GraphQLInterfaceType`);
		if (t instanceof Dn) throw new K(`Expected ${String(e)} to be an input type but it was defined as an GraphQLUnionType`);
		return t;
	}
	getTypeOfKind(e, t) {
		let n = this.getType(e);
		switch (t) {
			case "Object":
			case "Query":
			case "Mutation":
			case "Subscription":
				if (n instanceof vn) return n;
				break;
			case "Interface":
				if (n instanceof En) return n;
				break;
			case "Union":
				if (n instanceof Dn) return n;
				break;
			case "Enum":
				if (n instanceof kn) return n;
				break;
			case "Scalar":
				if (n instanceof _n) return n;
				break;
			case "InputObject":
				if (n instanceof _n) return n;
				break;
			default: break;
		}
		throw new K(`Expected ${String(e)} to be of type ${t}`);
	}
	buildObject(e) {
		let t = new vn({
			...e,
			extensions: {
				...e.extensions,
				pothosOptions: e.pothosOptions,
				pothosConfig: e
			},
			fields: () => this.getFields(t),
			isTypeOf: e.kind === "Object" ? this.plugin.wrapIsTypeOf(e.isTypeOf ?? void 0, e) : void 0,
			interfaces: e.kind === "Object" ? () => e.interfaces.map((e) => this.getTypeOfKind(e, "Interface")) : void 0
		});
		return t;
	}
	buildInterface(e) {
		let t = (t, r, i) => {
			let a = bo(t);
			return a ? typeof a == "string" ? a : this.getTypeConfig(a).name : (e.resolveType ?? Ba)(t, r, i, n);
		}, n = new En({
			...e,
			extensions: {
				...e.extensions,
				pothosOptions: e.pothosOptions,
				pothosConfig: e
			},
			interfaces: () => e.interfaces.map((e) => this.getTypeOfKind(e, "Interface")),
			fields: () => this.getFields(n),
			resolveType: this.plugin.wrapResolveType(t, e)
		});
		return n;
	}
	buildUnion(e) {
		let t = (t, n, r, i) => {
			if (typeof t == "object" && t && $a in t) {
				let e = t[$a];
				return typeof e == "string" ? e : this.getTypeConfig(e).name;
			}
			if (!e.resolveType) return Ba(t, n, r, i);
			let a = e.resolveType(t, n, r, i), o = (e) => {
				if (typeof e == "string" || !e) return e;
				if (e instanceof vn) return e.name;
				try {
					return this.configStore.getTypeConfig(e).name;
				} catch {}
				return e;
			};
			return _o(a) ? a.then(o) : o(a);
		};
		return new Dn({
			...e,
			extensions: {
				...e.extensions,
				pothosOptions: e.pothosOptions,
				pothosConfig: e
			},
			types: () => e.types.map((e) => this.getTypeOfKind(e, "Object")),
			resolveType: this.plugin.wrapResolveType(t, e)
		});
	}
	buildInputObject(e) {
		let t = new Mn({
			...e,
			extensions: {
				...e.extensions,
				pothosOptions: e.pothosOptions,
				pothosConfig: e
			},
			fields: () => this.getInputFields(t)
		});
		return t;
	}
	buildScalar(e) {
		return e.name === "ID" ? Vn : e.name === "Int" ? Rn : e.name === "Float" ? zn : e.name === "Boolean" ? Bn : e.name === "String" ? G : new _n({
			...e,
			extensions: {
				...e.extensions,
				pothosOptions: e.pothosOptions,
				pothosConfig: e
			}
		});
	}
	buildEnum(e) {
		let t = {}, n = typeof e.values == "function" ? e.values() : e.values;
		for (let r of Object.keys(e.values)) {
			let e = n[r];
			this.enumValueConfigs.has(e) || this.enumValueConfigs.set(e, this.plugin.onEnumValueConfig(e)), this.enumValueConfigs.get(e) && (t[r] = this.enumValueConfigs.get(e));
		}
		return new kn({
			...e,
			values: t,
			extensions: {
				...e.extensions,
				pothosOptions: e.pothosOptions,
				pothosConfig: e
			}
		});
	}
	constructor(e, t) {
		Fo(this, "types", /* @__PURE__ */ new Map()), Fo(this, "builder", void 0), Fo(this, "plugin", void 0), Fo(this, "options", void 0), Fo(this, "configStore", void 0), Fo(this, "pluginList", void 0), Fo(this, "implementers", /* @__PURE__ */ new Map()), Fo(this, "typeConfigs", /* @__PURE__ */ new Map()), Fo(this, "enumValueConfigs", /* @__PURE__ */ new Map()), Fo(this, "outputFieldConfigs", /* @__PURE__ */ new Map()), Fo(this, "inputFieldConfigs", /* @__PURE__ */ new Map()), this.builder = e, this.configStore = e.configStore, this.options = t;
		let n = {};
		this.pluginList = (e.options.plugins ?? []).map((e) => {
			let t = this.builder.constructor.plugins[e];
			if (!t) throw new qa(`No plugin named ${e} was registered`);
			return n[e] = new t(this, e), n[e];
		}), this.plugin = new Do(this, this.pluginList);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/input-object.js
function Lo(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Ro = Xa, zo = class extends to {
	addFields(e) {
		this.fields.add(e);
		for (let t of this.fieldCbs) for (let [n, r] of Object.entries(e())) r && t(n, r);
	}
	onField(e) {
		this.fieldCbs.add(e);
		for (let t of this.fields) for (let [n, r] of Object.entries(t())) r && e(n, r);
	}
	constructor(e) {
		super("InputObject", e), Lo(this, "kind", "InputObject"), Lo(this, "$inferInput", void 0), Lo(this, Ro, void 0), Lo(this, "fields", /* @__PURE__ */ new Set()), Lo(this, "fieldCbs", /* @__PURE__ */ new Set());
	}
}, Bo = class extends zo {
	implement(e) {
		return this.builder.inputType(this, e), this;
	}
	constructor(e, t) {
		super(t), Lo(this, "builder", void 0), this.builder = e;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/base-with-fields.js
function Vo(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Ho = class extends to {
	addFields(e) {
		for (let t of this.fieldCbs) for (let [n, r] of Object.entries(e())) r && t(n, r);
		this.fields.add(e);
	}
	addInterfaces(e) {
		Array.isArray(e) && e.length === 0 || (this.preparedForBuild ? this.updateConfig((t) => ({
			...t,
			interfaces: [...t.interfaces, ...typeof e == "function" ? e() : e]
		})) : this.interfaces.push(() => Array.isArray(e) ? e : e()));
	}
	onField(e) {
		this.fieldCbs.add(e);
		for (let t of this.fields) for (let [n, r] of Object.entries(t())) r && e(n, r);
	}
	prepareForBuild() {
		this.preparedForBuild || (super.prepareForBuild(), this.interfaces.length > 0 && this.updateConfig((e) => ({
			...e,
			interfaces: [...e.interfaces ?? [], ...this.interfaces.flatMap((e) => e())]
		})));
	}
	constructor(...e) {
		super(...e), Vo(this, "fields", /* @__PURE__ */ new Set()), Vo(this, "fieldCbs", /* @__PURE__ */ new Set()), Vo(this, "interfaces", []);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/interface.js
function Uo(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Wo = Ja, Go = Ya, Ko = class extends Ho {
	constructor(e, t) {
		super("Interface", e, t), Uo(this, "kind", "Interface"), Uo(this, "$inferType", void 0), Uo(this, Wo, void 0), Uo(this, Go, void 0);
	}
}, qo = class extends Ko {
	implement(e) {
		return this.builder.interfaceType(this, e);
	}
	constructor(e, t) {
		super(t), Uo(this, "builder", void 0), this.builder = e;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/object.js
function Jo(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Yo = Ja, Xo = Ya, Zo = class extends Ho {
	constructor(e, t) {
		super("Object", e, t), Jo(this, "kind", "Object"), Jo(this, "$inferType", void 0), Jo(this, Yo, void 0), Jo(this, Xo, void 0);
	}
}, Qo = class extends Zo {
	implement(e) {
		return this.builder.objectType(this, e);
	}
	constructor(e, t) {
		super(t), Jo(this, "builder", void 0), this.builder = e;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/mutation.js
function $o(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var es = class extends Zo {
	constructor(...e) {
		super(...e), $o(this, "kind", "Object");
	}
}, ts = class extends Zo {}, ns = class extends Zo {};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/config-store.js
function rs(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var is = class {
	addFields(e, t) {
		this.onTypeConfig(e, (e, n) => {
			if (!(n instanceof Ko || n instanceof Zo || n instanceof ts || n instanceof es || n instanceof ns)) throw new K(`Can not add fields to ${n} because it is not an object`);
			n.addFields(t);
		});
	}
	addInputFields(e, t) {
		this.onTypeConfig(e, (e, n) => {
			if (!(n instanceof zo)) throw new K(`Can not add fields to ${n} because it is not an input object`);
			n.addFields(t);
		});
	}
	associateParamWithRef(e, t) {
		let n = this.resolveParamAssociations(t);
		this.paramAssociations.set(e, n);
		let r = this.pendingTypeConfigResolutions.get(e) ?? [];
		if (r.length > 0) if (typeof n == "string" && this.typeConfigs.has(n)) for (let e of r) {
			let t = this.typeConfigs.get(n);
			e(t, this.implementors.get(t.name));
		}
		else for (let e of r) this.onTypeConfig(n, e);
		this.pendingTypeConfigResolutions.delete(e);
	}
	onTypeConfig(e, t) {
		let n = this.resolveParamAssociations(e);
		if (typeof n == "string" && this.typeConfigs.has(n)) {
			let e = this.typeConfigs.get(n);
			t(e, this.implementors.get(e.name));
		} else this.pendingTypeConfigResolutions.has(n) || this.pendingTypeConfigResolutions.set(n, []), this.pendingTypeConfigResolutions.get(n).push(t);
	}
	onTypeConfigOfKind(e, t, n) {
		this.onTypeConfig(e, (r) => {
			if (r.kind !== t) throw new K(`Expected ${this.describeRef(e)} to be of kind ${t} but it is of kind ${r.kind}`);
			n(r);
		});
	}
	addTypeRef(e) {
		this.refs.has(e) || (this.pending || e.prepareForBuild(), this.refs.add(e), e.onConfig((t) => {
			let n = this.implementors.get(t.name);
			if (n && n !== e) throw new K(`Duplicate typename: Another type with name ${t.name} already exists.`);
			if (n || (this.implementors.set(t.name, e), this.associateParamWithRef(e, t.name), (e instanceof Zo || e instanceof Ko || e instanceof zo) && (this.fields.has(t.name) || this.fields.set(t.name, /* @__PURE__ */ new Map()), this.onPrepare(() => {
				e.onField((e, n) => {
					let r = this.fields.get(t.name);
					if (r.has(e)) throw new K(`Duplicate field ${e} on ${t.name}`);
					r.set(e, n.getConfig(e, this.typeConfigs.get(t.name) ?? t));
				});
			}))), this.typeConfigs.set(t.name, t), this.pendingTypeConfigResolutions.has(t.name)) {
				let n = this.pendingTypeConfigResolutions.get(t.name);
				for (let r of n) r(t, e);
			}
			this.pendingTypeConfigResolutions.delete(t.name);
		}));
	}
	subscribeToFields(e) {}
	hasImplementation(e) {
		return this.typeConfigs.has(e);
	}
	hasConfig(e) {
		let t = this.resolveParamAssociations(e);
		return !(typeof t != "string" || !this.typeConfigs.has(t));
	}
	getTypeConfig(e, t) {
		let n = this.resolveParamAssociations(e);
		if (typeof n != "string" || !this.typeConfigs.has(n)) throw new K(`${this.describeRef(e)} has not been implemented`);
		let r = this.typeConfigs.get(n);
		if (t && r.graphqlKind !== t) throw new K(`Expected ref to resolve to a ${t} type, but got ${r.kind}`);
		return r;
	}
	getInputTypeRef(e) {
		let t = this.resolveParamAssociations(e);
		if (e instanceof to) {
			if (e.kind !== "InputObject" && e.kind !== "Enum" && e.kind !== "Scalar") throw new K(`Expected ${this.describeRef(e)} to be an input type but got ${e.kind}`);
			return e;
		}
		if (typeof t == "string" && this.typeConfigs.has(t)) {
			let e = this.implementors.get(t);
			if (e instanceof to) {
				if (e.kind !== "InputObject" && e.kind !== "Enum" && e.kind !== "Scalar") throw new K(`Expected ${this.describeRef(e)} to be an input type but got ${e.kind}`);
				return e;
			}
		}
		throw new K(`${this.describeRef(e)} has not been implemented`);
	}
	getOutputTypeRef(e) {
		let t = this.resolveParamAssociations(e);
		if (e instanceof to) {
			if (e.kind === "InputObject" || e.kind === "InputList") throw new K(`Expected ${e.name} to be an output type but got ${e.kind}`);
			return e;
		}
		if (typeof t == "string" && this.typeConfigs.has(t)) {
			let e = this.implementors.get(t);
			if (e instanceof to) {
				if (e.kind === "InputObject" || e.kind === "InputList") throw new K(`Expected ${e.name} to be an output type but got ${e.kind}`);
				return e;
			}
		}
		throw new K(`${this.describeRef(e)} has not been implemented`);
	}
	getFields(e, t) {
		let n = this.getTypeConfig(e);
		this.fields.has(e) || this.fields.set(e, /* @__PURE__ */ new Map());
		let r = this.fields.get(e);
		if (t && n.graphqlKind !== t) throw new K(`Expected ${e} to be a ${t} type, but found ${n.graphqlKind}`);
		return r;
	}
	prepareForBuild() {
		this.pending = !1;
		for (let e of this.refs) e.prepareForBuild();
		let { pendingActions: e } = this;
		this.pendingActions = [];
		for (let t of e) t();
		if (this.pendingTypeConfigResolutions.size > 0) throw new K(`Missing implementations for some references (${[...this.pendingTypeConfigResolutions.keys()].map((e) => this.describeRef(e)).join(", ")}).`);
	}
	onPrepare(e) {
		this.pending ? this.pendingActions.push(e) : e();
	}
	resolveParamAssociations(e) {
		let t = this.paramAssociations.get(e);
		for (; t && this.paramAssociations.has(t);) t = this.paramAssociations.get(t);
		return t ?? e;
	}
	describeRef(e) {
		return typeof e == "string" ? e : e && e.toString !== {}.toString ? String(e) : typeof e == "function" && e.name !== (() => {}).name ? `function ${e.name}` : "<unnamed ref or enum>";
	}
	constructor(e) {
		rs(this, "typeConfigs", /* @__PURE__ */ new Map()), rs(this, "fields", /* @__PURE__ */ new Map()), rs(this, "refs", /* @__PURE__ */ new Set()), rs(this, "implementors", /* @__PURE__ */ new Map()), rs(this, "pendingActions", []), rs(this, "paramAssociations", /* @__PURE__ */ new Map()), rs(this, "pendingTypeConfigResolutions", /* @__PURE__ */ new Map()), rs(this, "pending", !0), rs(this, "builder", void 0), this.builder = e;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/arg.js
function as(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var os = Za, ss = class {
	onConfig(e) {
		this.pendingActions.push(e);
	}
	updateConfig(e) {
		this.pendingActions.push(e);
	}
	getConfig(e, t, n) {
		let r = this.pendingActions.reduce((e, t) => t(e) ?? e, this.initConfig(e, t, n));
		for (let e of this.onUseCallbacks) this.onUseCallbacks.delete(e), e(r);
		return r;
	}
	onFirstUse(e) {
		this.onUseCallbacks.add(e);
	}
	constructor(e) {
		as(this, "kind", "Arg"), as(this, "fieldName", void 0), as(this, "$inferInput", void 0), as(this, os, void 0), as(this, "pendingActions", []), as(this, "initConfig", void 0), as(this, "onUseCallbacks", /* @__PURE__ */ new Set()), this.initConfig = e;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/input-field.js
function cs(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var ls = Za, us = class {
	updateConfig(e) {
		this.pendingActions.push(e);
	}
	getConfig(e, t) {
		let n = this.pendingActions.reduce((e, t) => t(e) ?? e, this.initConfig(e, t));
		for (let e of this.onUseCallbacks) this.onUseCallbacks.delete(e), e(n);
		return n;
	}
	onFirstUse(e) {
		this.onUseCallbacks.add(e);
	}
	constructor(e) {
		cs(this, "kind", "InputObject"), cs(this, "fieldName", void 0), cs(this, "$inferInput", void 0), cs(this, ls, void 0), cs(this, "pendingActions", []), cs(this, "initConfig", void 0), cs(this, "onUseCallbacks", /* @__PURE__ */ new Set()), this.initConfig = e;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/fieldUtils/input.js
function ds(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var fs = class {
	argBuilder() {
		let e = this.field.bind(this), t = Object.keys(Object.getPrototypeOf(this)).filter((e) => typeof this[e] == "function" && Function.prototype[e] === void 0);
		for (let n of [...Object.keys(this), ...t]) e[n] = typeof this[n] == "function" ? this[n].bind(this) : this[n];
		return e;
	}
	field(e) {
		return this.kind === "Arg" ? new ss((t, n, r) => {
			let i = e;
			return {
				name: t,
				parentField: n,
				kind: this.kind,
				graphqlKind: this.kind,
				parentType: r.name,
				type: ho(i.type, this.builder.configStore, i.required ?? this.builder.defaultInputFieldRequiredness),
				pothosOptions: i,
				description: i.description,
				deprecationReason: i.deprecationReason,
				defaultValue: i.defaultValue,
				extensions: i.extensions ?? {},
				astNode: i.astNode
			};
		}) : new us((t, n) => {
			let r = e;
			return {
				name: t,
				parentField: void 0,
				kind: this.kind,
				graphqlKind: this.kind,
				parentType: n.name,
				type: ho(r.type, this.builder.configStore, r.required ?? this.builder.defaultInputFieldRequiredness),
				pothosOptions: r,
				description: r.description,
				deprecationReason: r.deprecationReason,
				defaultValue: r.defaultValue,
				extensions: r.extensions ?? {},
				astNode: r.astNode
			};
		});
	}
	helper(e) {
		return (...t) => {
			let [n = {}] = t;
			return this.field({
				...n,
				type: e
			});
		};
	}
	constructor(e, t) {
		ds(this, "kind", void 0), ds(this, "builder", void 0), ds(this, "boolean", this.helper("Boolean")), ds(this, "float", this.helper("Float")), ds(this, "id", this.helper("ID")), ds(this, "int", this.helper("Int")), ds(this, "string", this.helper("String")), ds(this, "booleanList", this.helper(["Boolean"])), ds(this, "floatList", this.helper(["Float"])), ds(this, "idList", this.helper(["ID"])), ds(this, "intList", this.helper(["Int"])), ds(this, "stringList", this.helper(["String"])), ds(this, "listRef", (e, t) => new io(e, t?.required ?? !0)), this.builder = e, this.kind = t;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/field.js
function ps(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var ms = Qa, hs = class {
	updateConfig(e) {
		this.pendingActions.push(e);
	}
	getConfig(e, t) {
		let n = this.pendingActions.reduce((e, t) => t(e) ?? e, this.initConfig(e, t));
		for (let e of this.onUseCallbacks) this.onUseCallbacks.delete(e), e(n);
		return n;
	}
	onFirstUse(e) {
		this.onUseCallbacks.add(e);
	}
	constructor(e, t) {
		ps(this, "kind", void 0), ps(this, "fieldName", void 0), ps(this, "$inferType", void 0), ps(this, ms, void 0), ps(this, "pendingActions", []), ps(this, "initConfig", void 0), ps(this, "onUseCallbacks", /* @__PURE__ */ new Set()), this.kind = e, this.initConfig = t;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/fieldUtils/base.js
function gs(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var _s = class {
	createField(e) {
		return new hs(this.kind, (t, n) => {
			let r = {};
			if (e.args) for (let [i, a] of Object.entries(e.args)) r[i] = a.getConfig(i, t, n);
			let { resolve: i } = e;
			e.extensions?.pothosExposedField === t && (i = Va);
			let { subscribe: a } = e;
			return {
				kind: this.kind,
				graphqlKind: n.graphqlKind,
				parentType: n.name,
				name: t,
				args: r,
				argMappers: [],
				type: mo(e.type, this.builder.configStore, e.nullable ?? this.builder.defaultFieldNullability),
				pothosOptions: e,
				extensions: {
					pothosOriginalResolve: i,
					pothosOriginalSubscribe: a,
					...e.extensions
				},
				description: e.description,
				deprecationReason: e.deprecationReason,
				resolve: i,
				subscribe: a,
				astNode: e.astNode
			};
		});
	}
	exposeField(e, { extensions: t, ...n }) {
		return this.createField({
			...n,
			extensions: {
				pothosExposedField: e,
				...t
			},
			resolve: (t) => t[e]
		});
	}
	constructor(e, t, n) {
		gs(this, "kind", void 0), gs(this, "graphqlKind", void 0), gs(this, "builder", void 0), this.builder = e, this.kind = t, this.graphqlKind = n;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/fieldUtils/root.js
function vs(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var ys = class extends _s {
	boolean(...e) {
		let [t = {}] = e;
		return this.createField({
			...t,
			type: "Boolean"
		});
	}
	float(...e) {
		let [t = {}] = e;
		return this.createField({
			...t,
			type: "Float"
		});
	}
	id(...e) {
		let [t = {}] = e;
		return this.createField({
			...t,
			type: "ID"
		});
	}
	int(...e) {
		let [t = {}] = e;
		return this.createField({
			...t,
			type: "Int"
		});
	}
	string(...e) {
		let [t = {}] = e;
		return this.createField({
			...t,
			type: "String"
		});
	}
	booleanList(...e) {
		let [t = {}] = e;
		return this.createField({
			...t,
			type: ["Boolean"]
		});
	}
	floatList(...e) {
		let [t = {}] = e;
		return this.createField({
			...t,
			type: ["Float"]
		});
	}
	idList(...e) {
		let [t = {}] = e;
		return this.createField({
			...t,
			type: ["ID"]
		});
	}
	intList(...e) {
		let [t = {}] = e;
		return this.createField({
			...t,
			type: ["Int"]
		});
	}
	stringList(...e) {
		let [t = {}] = e;
		return this.createField({
			...t,
			type: ["String"]
		});
	}
	field(e) {
		return this.createField(e);
	}
	listRef(e, t) {
		return new co(e, t?.nullable ?? !1);
	}
	constructor(...e) {
		super(...e), vs(this, "arg", new fs(this.builder, "Arg").argBuilder());
	}
}, bs = class extends ys {
	exposeBoolean(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, {
			...n,
			type: "Boolean"
		});
	}
	exposeFloat(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, {
			...n,
			type: "Float"
		});
	}
	exposeID(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, {
			...n,
			type: "ID"
		});
	}
	exposeInt(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, {
			...n,
			type: "Int"
		});
	}
	exposeString(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, {
			...n,
			type: "String"
		});
	}
	exposeBooleanList(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, {
			...n,
			type: ["Boolean"]
		});
	}
	exposeFloatList(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, {
			...n,
			type: ["Float"]
		});
	}
	exposeIDList(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, {
			...n,
			type: ["ID"]
		});
	}
	exposeIntList(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, {
			...n,
			type: ["Int"]
		});
	}
	exposeStringList(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, {
			...n,
			type: ["String"]
		});
	}
	expose(e, ...t) {
		let [n = {}] = t;
		return this.exposeField(e, n);
	}
}, xs = class extends bs {
	constructor(e) {
		super(e, "Interface", "Interface");
	}
}, Ss = class extends ys {
	constructor(e) {
		super(e, "Mutation", "Object");
	}
}, Cs = class extends bs {
	constructor(e) {
		super(e, "Object", "Object");
	}
}, ws = class extends ys {
	constructor(e) {
		super(e, "Query", "Object");
	}
}, Ts = class extends ys {
	constructor(e) {
		super(e, "Subscription", "Object");
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/enum.js
function Es(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Ds = Ja, Os = Xa, ks = class extends to {
	constructor(e, t) {
		super("Enum", e, t), Es(this, "kind", "Enum"), Es(this, "$inferType", void 0), Es(this, "$inferInput", void 0), Es(this, Ds, void 0), Es(this, Os, void 0);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/refs/union.js
function As(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var js = Ja, Ms = Ya, Ns = class extends to {
	addTypes(e) {
		Array.isArray(e) && e.length === 0 || (this.preparedForBuild ? this.updateConfig((t) => ({
			...t,
			types: [...t.types, ...typeof e == "function" ? e() : e]
		})) : this.types.push(() => Array.isArray(e) ? e : e()));
	}
	prepareForBuild() {
		this.preparedForBuild || (super.prepareForBuild(), this.types.length > 0 && this.updateConfig((e) => ({
			...e,
			types: [...e.types, ...this.types.flatMap((e) => e())]
		})));
	}
	constructor(e, t) {
		super("Union", e, t), As(this, "kind", "Union"), As(this, "$inferType", void 0), As(this, js, void 0), As(this, Ms, void 0), As(this, "types", []);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/builder.js
function Ps(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Fs = class e {
	static registerPlugin(t, n, r) {
		if (!e.allowPluginReRegistration && e.plugins[t]) throw new qa(`Received multiple implementations for plugin ${t}`);
		e.plugins[t] = n, r && e.optionNormalizers.set(t, r);
	}
	objectType(e, t, n) {
		vo(e), yo(t.interfaces);
		let r = typeof e == "string" ? e : t.name ?? e.name, i = e instanceof to ? e : new Zo(r);
		return i.updateConfig({
			kind: "Object",
			graphqlKind: "Object",
			name: r,
			interfaces: [],
			description: t.description,
			extensions: t.extensions,
			astNode: t.astNode,
			isTypeOf: t.isTypeOf,
			pothosOptions: t
		}), t.interfaces && i.addInterfaces(t.interfaces), i !== e && typeof e != "string" && this.configStore.associateParamWithRef(e, i), n && i.addFields(() => n(new Cs(this))), t.fields && i.addFields(() => {
			let e = new Cs(this);
			return t.fields(e);
		}), this.configStore.addTypeRef(i), i;
	}
	objectFields(e, t) {
		vo(e), this.configStore.addFields(e, () => t(new Cs(this)));
	}
	objectField(e, t, n) {
		vo(e), this.configStore.addFields(e, () => ({ [t]: n(new Cs(this)) }));
	}
	queryType(...e) {
		let [t = {}, n] = e;
		return this.queryRef.updateConfig({
			kind: "Query",
			graphqlKind: "Object",
			name: t.name ?? "Query",
			description: t.description,
			pothosOptions: t,
			extensions: t.extensions,
			astNode: t.astNode
		}), t.name && (this.queryRef.name = t.name), this.configStore.addTypeRef(this.queryRef), n && this.queryRef.addFields(() => n(new ws(this))), t.fields && this.queryRef.addFields(() => t.fields(new ws(this))), this.queryRef;
	}
	queryFields(e) {
		this.configStore.addFields(this.queryRef, () => e(new ws(this)));
	}
	queryField(e, t) {
		this.configStore.addFields(this.queryRef, () => ({ [e]: t(new ws(this)) }));
	}
	mutationType(...e) {
		let [t = {}, n] = e;
		return this.mutationRef.updateConfig({
			kind: "Mutation",
			graphqlKind: "Object",
			name: t.name ?? "Mutation",
			description: t.description,
			pothosOptions: t,
			extensions: t.extensions,
			astNode: t.astNode
		}), this.configStore.addTypeRef(this.mutationRef), t.name && (this.mutationRef.name = t.name), n && this.configStore.addFields(this.mutationRef, () => n(new Ss(this))), t.fields && this.configStore.addFields(this.mutationRef, () => t.fields(new Ss(this))), this.mutationRef;
	}
	mutationFields(e) {
		this.configStore.addFields(this.mutationRef, () => e(new Ss(this)));
	}
	mutationField(e, t) {
		this.configStore.addFields(this.mutationRef, () => ({ [e]: t(new Ss(this)) }));
	}
	subscriptionType(...e) {
		let [t = {}, n] = e;
		return this.subscriptionRef.updateConfig({
			kind: "Subscription",
			graphqlKind: "Object",
			name: t.name ?? "Subscription",
			description: t.description,
			pothosOptions: t,
			extensions: t.extensions,
			astNode: t.astNode
		}), this.configStore.addTypeRef(this.subscriptionRef), t.name && (this.subscriptionRef.name = t.name), n && this.configStore.addFields(this.subscriptionRef, () => n(new Ts(this))), t.fields && this.configStore.addFields(this.subscriptionRef, () => t.fields(new Ts(this))), this.subscriptionRef;
	}
	subscriptionFields(e) {
		this.configStore.addFields(this.subscriptionRef, () => e(new Ts(this)));
	}
	subscriptionField(e, t) {
		this.configStore.addFields(this.subscriptionRef, () => ({ [e]: t(new Ts(this)) }));
	}
	args(e) {
		return e(new fs(this, "Arg"));
	}
	interfaceType(e, t, n) {
		vo(e), yo(t.interfaces);
		let r = typeof e == "string" ? e : t.name ?? e.name, i = e instanceof to ? e : new Ko(r), a = i.name;
		return i.updateConfig({
			kind: "Interface",
			graphqlKind: "Interface",
			name: a,
			interfaces: [],
			description: t.description,
			pothosOptions: t,
			extensions: t.extensions,
			resolveType: t.resolveType,
			astNode: t.astNode
		}), this.configStore.addTypeRef(i), t.interfaces && i.addInterfaces(t.interfaces), i !== e && typeof e != "string" && this.configStore.associateParamWithRef(e, i), n && this.configStore.addFields(i, () => n(new xs(this))), t.fields && this.configStore.addFields(i, () => t.fields(new xs(this))), i;
	}
	interfaceFields(e, t) {
		vo(e), this.configStore.addFields(e, () => t(new xs(this)));
	}
	interfaceField(e, t, n) {
		vo(e), this.configStore.addFields(e, () => ({ [t]: n(new xs(this)) }));
	}
	unionType(e, t) {
		let n = new Ns(e, {
			kind: "Union",
			graphqlKind: "Union",
			name: e,
			types: [],
			description: t.description,
			resolveType: t.resolveType,
			pothosOptions: t,
			extensions: t.extensions,
			astNode: t.astNode
		});
		if (Array.isArray(t.types)) for (let e of t.types) vo(e);
		return this.configStore.addTypeRef(n), n.addTypes(t.types), n;
	}
	enumType(e, t) {
		vo(e);
		let n = typeof e == "string" ? e : t.name, r = new ks(n, {
			kind: "Enum",
			graphqlKind: "Enum",
			name: n,
			values: typeof e == "object" ? po(e, t?.values) : fo(t.values),
			description: t.description,
			pothosOptions: t,
			extensions: t.extensions,
			astNode: t.astNode
		});
		return this.configStore.addTypeRef(r), typeof e != "string" && this.configStore.associateParamWithRef(e, r), r;
	}
	scalarType(e, t) {
		let n = new Mo(e, {
			kind: "Scalar",
			graphqlKind: "Scalar",
			name: e,
			description: t.description,
			parseLiteral: t.parseLiteral,
			parseValue: t.parseValue,
			serialize: t.serialize,
			pothosOptions: t,
			extensions: t.extensions,
			astNode: t.astNode
		});
		return this.configStore.addTypeRef(n), n;
	}
	addScalarType(e, t, ...n) {
		let [r = {}] = n, i = t.toConfig();
		return this.scalarType(e, {
			...i,
			...r,
			extensions: {
				...i.extensions,
				...r.extensions
			}
		});
	}
	inputType(e, t) {
		vo(e);
		let n = typeof e == "string" ? e : e.name, r = typeof e == "string" ? new zo(n) : e;
		return r.updateConfig({
			kind: "InputObject",
			graphqlKind: "InputObject",
			name: n,
			isOneOf: t.isOneOf,
			description: t.description,
			pothosOptions: t,
			extensions: t.extensions,
			astNode: t.astNode
		}), this.configStore.addTypeRef(r), e !== r && typeof e != "string" && this.configStore.associateParamWithRef(e, r), this.configStore.addInputFields(r, () => t.fields(new fs(this, "InputObject"))), r;
	}
	inputRef(e) {
		return new Bo(this, e);
	}
	objectRef(e) {
		return new Qo(this, e);
	}
	interfaceRef(e) {
		return new qo(this, e);
	}
	toSchema(...e) {
		let [t = {}] = e, { directives: n, extensions: r } = t, i = [
			Vn,
			Rn,
			zn,
			G,
			Bn
		];
		for (let e of i) this.configStore.hasImplementation(e.name) || this.addScalarType(e.name, e);
		let a = new Io(this, t);
		a.plugin.beforeBuild(), a.buildAll();
		let o = [...a.types.values()], s = this.configStore.hasConfig(this.queryRef) ? this.configStore.getTypeConfig(this.queryRef).name : "Query", c = this.configStore.hasConfig(this.mutationRef) ? this.configStore.getTypeConfig(this.mutationRef).name : "Mutation", l = this.configStore.hasConfig(this.subscriptionRef) ? this.configStore.getTypeConfig(this.subscriptionRef).name : "Subscription", u = new _r({
			query: a.types.get(s),
			mutation: a.types.get(c),
			subscription: a.types.get(l),
			extensions: r ?? {},
			directives: n,
			types: o,
			astNode: t.astNode
		}), d = a.plugin.afterBuild(u);
		return t.sortSchema === !1 ? d : Ua(d);
	}
	constructor(t) {
		Ps(this, "$inferSchemaTypes", void 0), Ps(this, "queryRef", new ts("Query")), Ps(this, "mutationRef", new es("Mutation")), Ps(this, "subscriptionRef", new ns("Subscription")), Ps(this, "configStore", void 0), Ps(this, "options", void 0), Ps(this, "defaultFieldNullability", void 0), Ps(this, "defaultInputFieldRequiredness", void 0), this.options = [...e.optionNormalizers.values()].reduce((e, n) => t.defaults && typeof n[t.defaults] == "function" ? Object.assign(e, n[t.defaults](e)) : e, t), this.configStore = new is(this), this.defaultFieldNullability = t.defaultFieldNullability ?? t.defaults !== "v3", this.defaultInputFieldRequiredness = t.defaultInputFieldRequiredness ?? !1;
	}
};
Ps(Fs, "plugins", {}), Ps(Fs, "optionNormalizers", /* @__PURE__ */ new Map()), Ps(Fs, "allowPluginReRegistration", !1);
//#endregion
//#region ../../node_modules/.pnpm/@pothos+core@4.12.0_graphql@16.14.0/node_modules/@pothos/core/esm/index.js
var Is = Fs;
//#endregion
//#region ../../node_modules/.pnpm/graphql-type-json@0.3.2_graphql@16.14.0/node_modules/graphql-type-json/es/index.js
function Ls(e) {
	return e;
}
function Rs(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) throw TypeError("JSONObject cannot represent non-object value: " + e);
	return e;
}
function zs(e, t, n) {
	var r = Object.create(null);
	return t.fields.forEach(function(t) {
		r[t.name.value] = Bs(e, t.value, n);
	}), r;
}
function Bs(e, t, n) {
	switch (t.kind) {
		case F.STRING:
		case F.BOOLEAN: return t.value;
		case F.INT:
		case F.FLOAT: return parseFloat(t.value);
		case F.OBJECT: return zs(e, t, n);
		case F.LIST: return t.values.map(function(t) {
			return Bs(e, t, n);
		});
		case F.NULL: return null;
		case F.VARIABLE: return n ? n[t.name.value] : void 0;
		default: throw TypeError(e + " cannot represent value: " + R(t));
	}
}
var Vs = new _n({
	name: "JSON",
	description: "The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
	specifiedByUrl: "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf",
	serialize: Ls,
	parseValue: Ls,
	parseLiteral: function(e, t) {
		return Bs("JSON", e, t);
	}
}), Hs = new _n({
	name: "JSONObject",
	description: "The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
	specifiedByUrl: "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf",
	serialize: Rs,
	parseValue: Rs,
	parseLiteral: function(e, t) {
		if (e.kind !== F.OBJECT) throw TypeError("JSONObject cannot represent non-object value: " + R(e));
		return zs("JSONObject", e, t);
	}
}), Us = {
	red: "\x1B[31m",
	yellow: "\x1B[33m",
	magenta: "\x1B[35m",
	cyan: "\x1B[36m",
	reset: "\x1B[0m"
}, Ws = Us.yellow + "WARN" + Us.reset, Gs = Us.cyan + "INFO" + Us.reset, Ks = Us.red + "ERR" + Us.reset, qs = Us.magenta + "DEBUG" + Us.reset, Js = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	silent: 4
}, Ys = () => {}, Xs = (e) => (...t) => console.log(e, ...t), Zs = console.debug ? (...e) => console.debug(qs, ...e) : Xs(qs), Qs = console.info ? (...e) => console.info(Gs, ...e) : Xs(Gs), $s = console.warn ? (...e) => console.warn(Ws, ...e) : Xs(Ws), ec = console.error ? (...e) => console.error(Ks, ...e) : Xs(Ks), tc = (e = globalThis.process?.env.DEBUG === "1" ? "debug" : "info") => {
	let t = Js[e];
	return {
		debug: t > Js.debug ? Ys : Zs,
		info: t > Js.info ? Ys : Qs,
		warn: t > Js.warn ? Ys : $s,
		error: t > Js.error ? Ys : ec
	};
}, nc = "<!doctype html><html lang=en><head><meta charset=utf-8><title>__TITLE__</title><link rel=icon href=https://raw.githubusercontent.com/graphql-hive/graphql-yoga/refs/heads/main/website/src/app/favicon.ico><link crossorigin rel=stylesheet href=https://unpkg.com/@graphql-yoga/graphiql@4.4.4/dist/graphiql.css></head><body id=body class=no-focus-outline><noscript>You need to enable JavaScript to run this app.</noscript><div id=root>Loading __TITLE__...</div><script>function prepareBlob(r){const o=new Blob([r],{type:\"application/javascript\"});return URL.createObjectURL(o)}const workers={},workerUrls={editorWorkerService:\"https://unpkg.com/@graphql-yoga/graphiql@4.4.4/dist/monacoeditorwork/editor.worker.bundle.js\",json:\"https://unpkg.com/@graphql-yoga/graphiql@4.4.4/dist/monacoeditorwork/json.worker.bundle.js\",graphql:\"https://unpkg.com/@graphql-yoga/graphiql@4.4.4/dist/monacoeditorwork/graphql.worker..bundle.js\"};function prepareWorkers(){return Promise.all(Object.entries(workerUrls).map(async([r,o])=>{const e=await fetch(o),t=await e.text();workers[r]=prepareBlob(t)}))}self.MonacoEnvironment={globalAPI:!1,getWorkerUrl:function(r,o){return workers[o]}}<\/script><script src=https://unpkg.com/@graphql-yoga/graphiql@4.4.4/dist/yoga-graphiql.umd.js><\/script><script>prepareWorkers().finally(()=>{YogaGraphiQL.renderYogaGraphiQL(root,__OPTS__)})<\/script></body></html>";
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/use-graphiql.js
function rc({ headers: e, method: t }) {
	return t === "GET" && !!e?.get("accept")?.includes("text/html");
}
var ic = (e) => nc.replace("__TITLE__", e?.title || "Yoga GraphiQL").replace("__OPTS__", JSON.stringify(e ?? {}));
function ac(e) {
	let t = e.logger ?? console, n;
	n = typeof e?.options == "function" ? e?.options : typeof e?.options == "object" ? () => e?.options : e?.options === !1 ? () => !1 : () => ({});
	let r = e?.render ?? ic;
	return { onRequest({ request: i, serverContext: a, fetchAPI: o, endResponse: s, url: l }) {
		let u = e.getGraphQLEndpoint();
		if (rc(i) && (i.url.endsWith(u) || i.url.endsWith(`${u}/`) || l.pathname === u || l.pathname === `${u}/` || e.getGraphQLEndpointURLPattern().test(l))) return t.debug("Rendering GraphiQL"), c(() => n(i, a), (e) => {
			if (e) return c(() => r({ ...e === !0 ? {} : e }), (e) => {
				s(new o.Response(e, {
					headers: { "Content-Type": "text/html" },
					status: 200
				}));
			});
		});
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/use-schema.js
function oc(e) {
	return e?.[Symbol.toStringTag] === "GraphQLSchema";
}
var sc = (e) => {
	if (e == null) return {};
	if (oc(e)) return { onPluginInit({ setSchema: t }) {
		t(e);
	} };
	if ("then" in e) {
		let t;
		return {
			onRequestParse() {
				return { onRequestParseDone() {
					if (!t) return c(() => e, (e) => {
						t = e;
					});
				} };
			},
			onEnveloped({ setSchema: e }) {
				if (t == null) throw Error("You provide a promise of a schema but it hasn't been resolved yet. Make sure you use this plugin with GraphQL Yoga.");
				if (!oc(t)) throw Error("The resolved schema is not a valid GraphQLSchema instance.");
				e(t);
			}
		};
	}
	if (typeof e == "function") {
		let t = /* @__PURE__ */ new WeakMap();
		return {
			onRequestParse({ request: n, serverContext: r }) {
				return { onRequestParseDone() {
					return c(() => e({
						...r,
						request: n
					}), (e) => {
						if (!oc(e)) throw Error("The factory function did not return a valid GraphQLSchema.");
						t.set(n, e);
					});
				} };
			},
			onEnveloped({ setSchema: e, context: n }) {
				if (n?.request == null) throw Error("Request object is not available in the context. Make sure you use this plugin with GraphQL Yoga.");
				let r = t.get(n.request);
				if (r == null) throw Error("No schema found for this request. Make sure you use this plugin with GraphQL Yoga.");
				e(r);
			}
		};
	}
	throw Error("Invalid schema definition provided, expected a schema, promise or function.");
}, cc = 3;
function lc(e) {
	return uc(e, []);
}
function uc(e, t) {
	switch (typeof e) {
		case "string": return JSON.stringify(e);
		case "function": return e.name ? `[function ${e.name}]` : "[function]";
		case "object": return fc(e, t);
		default: return String(e);
	}
}
function dc(e) {
	return (e.name = "GraphQLError") ? e.toString() : `${e.name}: ${e.message};\n ${e.stack}`;
}
function fc(e, t) {
	if (e === null) return "null";
	if (e instanceof Error) return e.name === "AggregateError" ? dc(e) + "\n" + hc(e.errors, t) : dc(e);
	if (t.includes(e)) return "[Circular]";
	let n = [...t, e];
	if (pc(e)) {
		let t = e.toJSON();
		if (t !== e) return typeof t == "string" ? t : uc(t, n);
	} else if (Array.isArray(e)) return hc(e, n);
	return mc(e, n);
}
function pc(e) {
	return typeof e.toJSON == "function";
}
function mc(e, t) {
	let n = Object.entries(e);
	return n.length === 0 ? "{}" : t.length > cc ? "[" + gc(e) + "]" : "{ " + n.map(([e, n]) => e + ": " + uc(n, t)).join(", ") + " }";
}
function hc(e, t) {
	if (e.length === 0) return "[]";
	if (t.length > cc) return "[Array]";
	let n = e.length, r = [];
	for (let i = 0; i < n; ++i) r.push(uc(e[i], t));
	return "[" + r.join(", ") + "]";
}
function gc(e) {
	let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
	if (t === "Object" && typeof e.constructor == "function") {
		let t = e.constructor.name;
		if (typeof t == "string" && t !== "") return t;
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+utils@11.1.0_graphql@16.14.0/node_modules/@graphql-tools/utils/esm/errors.js
var _c = [
	"message",
	"locations",
	"path",
	"nodes",
	"source",
	"positions",
	"originalError",
	"name",
	"stack",
	"extensions",
	"coordinate"
];
function vc(e) {
	return typeof e == "object" && !!e && Object.keys(e).every((e) => _c.includes(e));
}
function q(e, t) {
	t?.originalError && !(t.originalError instanceof Error) && vc(t.originalError) && (t.originalError = q(t.originalError.message, t.originalError));
	let n = M, r = he.major >= 16 ? new n(e, t) : new n(e, t?.nodes, t?.source, t?.positions, t?.path, t?.originalError, t?.extensions);
	return t?.coordinate && r.coordinate == null && Object.defineProperties(r, { coordinate: {
		value: t.coordinate,
		enumerable: !0,
		configurable: !0
	} }), r;
}
function yc(e, t, n, r) {
	let i = Ra(e, t, n);
	if (!i.coordinate && r && i.coordinate == null) {
		let e = `${r.parentType.name}.${r.fieldName}`;
		Object.defineProperties(i, { coordinate: {
			value: e,
			enumerable: !0,
			configurable: !0
		} });
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+utils@11.1.0_graphql@16.14.0/node_modules/@graphql-tools/utils/esm/jsutils.js
function bc(e) {
	return typeof e == "object" && !!e && Symbol.iterator in e;
}
function xc(e) {
	return typeof e == "object" && !!e;
}
function Sc(e, t, n) {
	let r = n;
	for (let n of e) r = c(() => r, (e) => t(e, n));
	return r;
}
function Cc(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+utils@11.1.0_graphql@16.14.0/node_modules/@graphql-tools/utils/esm/getArgumentValues.js
function wc(e, t, n = {}) {
	let r = {}, i = (t.arguments ?? []).reduce((e, t) => ({
		...e,
		[t.name.value]: t
	}), {});
	for (let { name: a, type: o, defaultValue: s } of e.args) {
		let e = i[a];
		if (!e) {
			if (s !== void 0) r[a] = s;
			else if (U(o)) throw q(`Argument "${a}" of required type "${lc(o)}" was not provided.`, { nodes: [t] });
			continue;
		}
		let c = e.value, l = c.kind === F.NULL;
		if (c.kind === F.VARIABLE) {
			let e = c.name.value;
			if (n == null || !Cc(n, e)) {
				if (s !== void 0) r[a] = s;
				else if (U(o)) throw q(`Argument "${a}" of required type "${lc(o)}" was provided the variable "$${e}" which was not provided a runtime value.`, { nodes: [c] });
				continue;
			}
			l = n[e] == null;
		}
		if (l && U(o)) throw q(`Argument "${a}" of non-null type "${lc(o)}" must not be null.`, { nodes: [c] });
		let u = Qi(c, o, n);
		if (u === void 0) throw q(`Argument "${a}" has invalid value ${R(c)}.`, { nodes: [c] });
		r[a] = u;
	}
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+utils@11.1.0_graphql@16.14.0/node_modules/@graphql-tools/utils/esm/memoize.js
function Tc(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return function(n) {
		let r = t.get(n);
		if (r === void 0) {
			let r = e(n);
			return t.set(n, r), r;
		}
		return r;
	};
}
function Ec(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return function(n, r, i) {
		let a = t.get(n);
		if (!a) {
			a = /* @__PURE__ */ new WeakMap(), t.set(n, a);
			let o = /* @__PURE__ */ new WeakMap();
			a.set(r, o);
			let s = e(n, r, i);
			return o.set(i, s), s;
		}
		let o = a.get(r);
		if (!o) {
			o = /* @__PURE__ */ new WeakMap(), a.set(r, o);
			let t = e(n, r, i);
			return o.set(i, t), t;
		}
		let s = o.get(i);
		if (s === void 0) {
			let t = e(n, r, i);
			return o.set(i, t), t;
		}
		return s;
	};
}
function Dc(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return function(n, r, i, a, o) {
		let s = t.get(n);
		if (!s) {
			s = /* @__PURE__ */ new WeakMap(), t.set(n, s);
			let c = /* @__PURE__ */ new WeakMap();
			s.set(r, c);
			let l = /* @__PURE__ */ new WeakMap();
			c.set(i, l);
			let u = /* @__PURE__ */ new WeakMap();
			l.set(a, u);
			let d = e(n, r, i, a, o);
			return u.set(o, d), d;
		}
		let c = s.get(r);
		if (!c) {
			c = /* @__PURE__ */ new WeakMap(), s.set(r, c);
			let t = /* @__PURE__ */ new WeakMap();
			c.set(i, t);
			let l = /* @__PURE__ */ new WeakMap();
			t.set(a, l);
			let u = e(n, r, i, a, o);
			return l.set(o, u), u;
		}
		let l = c.get(i);
		if (!l) {
			l = /* @__PURE__ */ new WeakMap(), c.set(i, l);
			let t = /* @__PURE__ */ new WeakMap();
			l.set(a, t);
			let s = e(n, r, i, a, o);
			return t.set(o, s), s;
		}
		let u = l.get(a);
		if (!u) {
			u = /* @__PURE__ */ new WeakMap(), l.set(a, u);
			let t = e(n, r, i, a, o);
			return u.set(o, t), t;
		}
		let d = u.get(o);
		if (d === void 0) {
			let t = e(n, r, i, a, o);
			return u.set(o, t), t;
		}
		return d;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+utils@11.1.0_graphql@16.14.0/node_modules/@graphql-tools/utils/esm/rootTypes.js
function Oc(e, t, n) {
	let r = kc(e).get(t);
	if (r == null) throw q(`Schema is not configured to execute ${t} operation.`, { nodes: n });
	return r;
}
var kc = Tc(function(e) {
	let t = /* @__PURE__ */ new Map(), n = e.getQueryType();
	n && t.set("query", n);
	let r = e.getMutationType();
	r && t.set("mutation", r);
	let i = e.getSubscriptionType();
	return i && t.set("subscription", i), t;
}), Ac = class extends Map {
	get [Symbol.toStringTag]() {
		return "AccumulatorMap";
	}
	add(e, t) {
		let n = this.get(e);
		n === void 0 ? this.set(e, [t]) : n.push(t);
	}
}, jc = new Gn({
	name: "defer",
	description: "Directs the executor to defer this fragment when the `if` argument is true or undefined.",
	locations: [P.FRAGMENT_SPREAD, P.INLINE_FRAGMENT],
	args: {
		if: {
			type: new W(Bn),
			description: "Deferred when true or undefined.",
			defaultValue: !0
		},
		label: {
			type: G,
			description: "Unique name"
		}
	}
}), Mc = new Gn({
	name: "stream",
	description: "Directs the executor to stream plural fields when the `if` argument is true or undefined.",
	locations: [P.FIELD],
	args: {
		if: {
			type: new W(Bn),
			description: "Stream when true or undefined.",
			defaultValue: !0
		},
		label: {
			type: G,
			description: "Unique name"
		},
		initialCount: {
			defaultValue: 0,
			type: Rn,
			description: "Number of items to return immediately"
		}
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+utils@11.1.0_graphql@16.14.0/node_modules/@graphql-tools/utils/esm/collectFields.js
function Nc(e, t, n, r, i, a, o, s) {
	for (let c of i.selections) switch (c.kind) {
		case F.FIELD:
			if (!Fc(n, c)) continue;
			a.add(Lc(c), c);
			break;
		case F.INLINE_FRAGMENT: {
			if (!Fc(n, c) || !Ic(e, c, r)) continue;
			let i = Rc(n, c);
			if (i) {
				let a = new Ac();
				Nc(e, t, n, r, c.selectionSet, a, o, s), o.push({
					label: i.label,
					fields: a
				});
			} else Nc(e, t, n, r, c.selectionSet, a, o, s);
			break;
		}
		case F.FRAGMENT_SPREAD: {
			let i = c.name.value;
			if (!Fc(n, c)) continue;
			let l = Rc(n, c);
			if (s.has(i) && !l) continue;
			let u = t[i];
			if (!u || !Ic(e, u, r)) continue;
			if (l || s.add(i), l) {
				let i = new Ac();
				Nc(e, t, n, r, u.selectionSet, i, o, s), o.push({
					label: l.label,
					fields: i
				});
			} else Nc(e, t, n, r, u.selectionSet, a, o, s);
			break;
		}
	}
}
function Pc(e, t, n, r, i) {
	let a = new Ac(), o = [];
	return Nc(e, t, n, r, i, a, o, /* @__PURE__ */ new Set()), {
		fields: a,
		patches: o
	};
}
function Fc(e, t) {
	return !(na(qn, t, e)?.if === !0 || na(Kn, t, e)?.if === !1);
}
function Ic(e, t, n) {
	let r = t.typeCondition;
	if (!r) return !0;
	let i = zr(e, r);
	return i === n ? !0 : cn(i) ? e.getPossibleTypes(i).includes(n) : !1;
}
function Lc(e) {
	return e.alias ? e.alias.value : e.name.value;
}
function Rc(e, t) {
	let n = na(jc, t, e);
	if (n && n.if !== !1) return { label: typeof n.label == "string" ? n.label : void 0 };
}
var zc = Dc(function(e, t, n, r, i) {
	let a = new Ac(), o = /* @__PURE__ */ new Set(), s = [], c = {
		fields: a,
		patches: s
	};
	for (let c of i) c.selectionSet && Nc(e, t, n, r, c.selectionSet, a, s, o);
	return c;
});
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+utils@11.1.0_graphql@16.14.0/node_modules/@graphql-tools/utils/esm/isAsyncIterable.js
function Bc(e) {
	return e?.[Symbol.asyncIterator] != null;
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+utils@11.1.0_graphql@16.14.0/node_modules/@graphql-tools/utils/esm/Path.js
function Vc(e, t, n) {
	return {
		prev: e,
		key: t,
		typename: n
	};
}
function Hc(e) {
	let t = [], n = e;
	for (; n;) t.push(n.key), n = n.prev;
	return t.reverse();
}
function Uc(e) {
	return e.map((e) => typeof e == "number" ? "[" + e.toString() + "]" : "." + e).join("");
}
//#endregion
//#region ../../node_modules/.pnpm/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/SupressedError.js
var Wc = class extends Error {
	error;
	suppressed;
	constructor(e, t, n) {
		super(n), this.error = e, this.suppressed = t, this.name = "SuppressedError", Error.captureStackTrace(this, this.constructor);
	}
}, Gc = {
	get dispose() {
		return Symbol.dispose || Symbol.for("dispose");
	},
	get asyncDispose() {
		return Symbol.asyncDispose || Symbol.for("asyncDispose");
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/utils.js
function Kc(e) {
	return e?.[Gc.dispose] != null;
}
function qc(e) {
	return e?.[Gc.asyncDispose] != null;
}
//#endregion
//#region ../../node_modules/.pnpm/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/AsyncDisposableStack.js
var Jc = globalThis.SuppressedError || Wc, Yc = class e {
	callbacks = [];
	get disposed() {
		return this.callbacks.length === 0;
	}
	use(e) {
		return qc(e) ? this.callbacks.push(() => e[Gc.asyncDispose]()) : Kc(e) && this.callbacks.push(() => e[Gc.dispose]()), e;
	}
	adopt(e, t) {
		return t && this.callbacks.push(() => t(e)), e;
	}
	defer(e) {
		e && this.callbacks.push(e);
	}
	move() {
		let t = new e();
		return t.callbacks = this.callbacks, this.callbacks = [], t;
	}
	disposeAsync() {
		return this[Gc.asyncDispose]();
	}
	_error;
	_iterateCallbacks() {
		let e = this.callbacks.pop();
		if (e) return c(e, () => this._iterateCallbacks(), (e) => (this._error = this._error ? new Jc(e, this._error) : e, this._iterateCallbacks()));
	}
	[Gc.asyncDispose]() {
		let e = this._iterateCallbacks();
		if (e?.then) return e.then(() => {
			if (this._error) {
				let e = this._error;
				throw this._error = void 0, e;
			}
		});
		if (this._error) {
			let e = this._error;
			throw this._error = void 0, e;
		}
	}
	[Symbol.toStringTag] = "AsyncDisposableStack";
};
globalThis.SuppressedError, Gc.dispose, globalThis.DisposableStack;
var Xc = globalThis.AsyncDisposableStack || Yc;
globalThis.SuppressedError;
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+executor@1.5.3_graphql@16.14.0/node_modules/@graphql-tools/executor/esm/execution/coerceError.js
function Zc(e) {
	if (e instanceof Error) return e;
	if (typeof e == "object" && e && "message" in e && typeof e.message == "string") {
		let t;
		"cause" in e && (t = { cause: e.cause });
		let n = Error(e.message, t);
		return "stack" in e && typeof e.stack == "string" && (n.stack = e.stack), "name" in e && typeof e.name == "string" && (n.name = e.name), n;
	}
	return Error(String(e));
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+executor@1.5.3_graphql@16.14.0/node_modules/@graphql-tools/executor/esm/execution/flattenAsyncIterable.js
function Qc(e) {
	let t = e[Symbol.asyncIterator](), n, r, i = !1;
	async function a() {
		if (i) return {
			value: void 0,
			done: !0
		};
		try {
			if (!n) {
				if (r) return await r, await a();
				let e;
				r = new Promise((t) => {
					e = t;
				});
				let o = await t.next();
				return o.done ? (i = !0, await a()) : (n = o.value[Symbol.asyncIterator](), r = void 0, e(), await a());
			}
			let e = n, o = await n.next();
			return o.done ? (n === e && (n = void 0), await a()) : o;
		} catch (e) {
			throw i = !0, e;
		}
	}
	return {
		next: a,
		async return() {
			return i = !0, await Promise.all([n?.return?.(), t.return?.()]), {
				value: void 0,
				done: !0
			};
		},
		async throw(e) {
			/* c8 ignore next */
			throw i = !0, await Promise.all([n?.throw?.(e), t.throw?.(e)]), e;
		},
		[Symbol.asyncIterator]() {
			return this;
		},
		async [Gc.asyncDispose]() {
			i = !0, await Promise.all([n?.[Gc.asyncDispose]?.(), t?.[Gc.asyncDispose]?.()]);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+executor@1.5.3_graphql@16.14.0/node_modules/@graphql-tools/executor/esm/execution/invariant.js
function $c(e, t) {
	if (!e) throw Error(t ?? "Unexpected invariant triggered.");
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+executor@1.5.3_graphql@16.14.0/node_modules/@graphql-tools/executor/esm/execution/promiseForObject.js
function el(e, t, n) {
	t?.throwIfAborted();
	let r = Object.create(null), i = [];
	for (let t in e) {
		let n = c(() => e[t], (e) => {
			r[t] = e;
		});
		o(n) && i.push(n);
	}
	if (!i.length) return r;
	let a = i.length === 1 ? i[0] : Promise.all(i);
	return n ? Promise.race([n, a]).then(() => r) : a.then(() => r);
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+executor@1.5.3_graphql@16.14.0/node_modules/@graphql-tools/executor/esm/execution/values.js
function tl(e, t, n, r) {
	let i = [], a = r?.maxErrors;
	try {
		let r = nl(e, t, n, (e) => {
			if (a != null && i.length >= a) throw q("Too many errors processing variables, error limit reached. Execution aborted.");
			i.push(e);
		});
		if (i.length === 0) return { coerced: r };
	} catch (e) {
		i.push(e);
	}
	return { errors: i };
}
function nl(e, t, n, r) {
	let i = {};
	for (let a of t) {
		let t = a.variable.name.value, o = zr(e, a.type);
		if (!rn(o)) {
			r(q(`Variable "$${t}" expected value of type "${R(a.type)}" which cannot be used as an input type.`, { nodes: a.type }));
			continue;
		}
		if (!Cc(n, t)) {
			a.defaultValue ? i[t] = Qi(a.defaultValue, o) : U(o) && r(q(`Variable "$${t}" of required type "${lc(o)}" was not provided.`, { nodes: a }));
			continue;
		}
		let s = n[t];
		if (s === null && U(o)) {
			r(q(`Variable "$${t}" of non-null type "${lc(o)}" must not be null.`, { nodes: a }));
			continue;
		}
		i[t] = Yi(s, o, (e, n, i) => {
			let o = `Variable "$${t}" got invalid value ` + lc(n);
			e.length > 0 && (o += ` at "${t}${Uc(e)}"`), r(q(o + "; " + i.message, {
				nodes: a,
				originalError: i
			}));
		});
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+executor@1.5.3_graphql@16.14.0/node_modules/@graphql-tools/executor/esm/execution/execute.js
var rl = Ec((e, t, n) => zc(e.schema, e.fragments, e.variableValues, t, n));
function il(e) {
	let t = cl(e);
	return "schema" in t ? al(t) : { errors: t.map((e) => (Object.defineProperty(e, "extensions", { value: {
		...e.extensions,
		http: {
			...e.extensions?.http || {},
			status: 400
		}
	} }), e)) };
}
function al(e) {
	return e.signal?.throwIfAborted(), c(() => ul(e), (t) => {
		let n = ol(t, e.errors);
		return e.subsequentPayloads.size > 0 ? {
			initialResult: {
				...n,
				hasNext: !0
			},
			subsequentResults: Wl(e)
		} : n;
	}, (t) => (e.signal?.throwIfAborted(), t.errors ? e.errors.push(...t.errors) : e.errors.push(t), ol(null, e.errors)));
}
function ol(e, t) {
	return t.length === 0 ? { data: e } : {
		errors: t,
		data: e
	};
}
var sl = Tc(function(e) {
	let t = Object.create(null);
	for (let n of e.definitions) n.kind === F.FRAGMENT_DEFINITION && (t[n.name.value] = n);
	return t;
});
function cl(e) {
	let { schema: t, document: n, rootValue: r, contextValue: i, variableValues: a, operationName: o, fieldResolver: s, typeResolver: c, subscribeFieldResolver: l, signal: d, schemaCoordinateInErrors: f } = e;
	d?.throwIfAborted(), br(t);
	let p = sl(n), m;
	for (let e of n.definitions) switch (e.kind) {
		case F.OPERATION_DEFINITION:
			if (o == null) {
				if (m !== void 0) return [q("Must provide operation name if query contains multiple operations.", { extensions: { code: "OPERATION_RESOLUTION_FAILURE" } })];
				m = e;
			} else e.name?.value === o && (m = e);
			break;
		default:
	}
	if (m == null) return o == null ? [q("Must provide an operation.", { extensions: { code: "OPERATION_RESOLUTION_FAILURE" } })] : [q(`Unknown operation named "${o}".`, { extensions: { code: "OPERATION_RESOLUTION_FAILURE" } })];
	let h = tl(t, m.variableDefinitions ?? [], a ?? {}, { maxErrors: 50 });
	if (h.errors) return h.errors;
	d?.throwIfAborted();
	let g, _;
	if (d) {
		let e = /* @__PURE__ */ new Set(), t = u();
		_ = t.promise;
		let n = () => {
			t.reject(d.reason), d.removeEventListener("abort", n);
		};
		d.addEventListener("abort", n, { once: !0 }), _.catch(() => {
			for (let t of e) t();
			e.clear();
		}), g = (t) => {
			e.add(t);
		};
	}
	return {
		schema: t,
		fragments: p,
		rootValue: r,
		contextValue: i,
		operation: m,
		variableValues: h.coerced,
		fieldResolver: s ?? Ol,
		typeResolver: c ?? Dl,
		subscribeFieldResolver: l ?? Ol,
		subsequentPayloads: /* @__PURE__ */ new Set(),
		errors: [],
		signal: d,
		onSignalAbort: g,
		signalPromise: _,
		schemaCoordinateInErrors: f
	};
}
function ll(e, t) {
	return {
		...e,
		rootValue: t,
		subsequentPayloads: /* @__PURE__ */ new Set(),
		errors: []
	};
}
function ul(e) {
	let { operation: t, schema: n, fragments: r, variableValues: i, rootValue: a } = e, o = Oc(n, t.operation, [t]);
	o ?? q(`Schema is not configured to execute ${t.operation} operation.`, { nodes: t });
	let { fields: s, patches: c } = Pc(n, r, i, o, t.selectionSet), l;
	l = t.operation === "mutation" ? dl(e, o, a, void 0, s) : fl(e, o, a, void 0, s);
	for (let t of c) {
		let { label: n, fields: r } = t;
		Rl(e, o, a, r, n, void 0);
	}
	return l;
}
function dl(e, t, n, r, i) {
	return Sc(i, (i, [a, o]) => {
		let s = Vc(r, a, t.name);
		return e.signal?.throwIfAborted(), c(() => pl(e, t, n, o, s), (e) => (e === void 0 || (i[a] = e), i));
	}, Object.create(null));
}
function fl(e, t, n, r, i, a) {
	let s = Object.create(null), l = !1;
	try {
		for (let [c, u] of i) {
			e.signal?.throwIfAborted();
			let i = pl(e, t, n, u, Vc(r, c, t.name), a);
			i !== void 0 && (s[c] = i, o(i) && (l = !0));
		}
	} catch (t) {
		if (t !== e.signal?.reason && l) return c(() => el(s, e.signal), () => {
			throw t;
		}, () => {
			throw t;
		});
		throw t;
	}
	return l ? el(s, e.signal, e.signalPromise) : s;
}
function pl(e, t, n, r, i, a) {
	let s = a?.errors ?? e.errors, c = Jl(e.schema, t, r[0]);
	if (!c) return;
	let l = c.type, u = c.resolve ?? e.fieldResolver, d = ml(e, c, r, t, i);
	try {
		e.signal?.throwIfAborted();
		let t = wc(c, r[0], e.variableValues), f = e.contextValue, p = u(n, t, f, d), m;
		return m = o(p) ? p.then((t) => gl(e, l, r, d, i, t, a)) : gl(e, l, r, d, i, p, a), o(m) ? m.then(void 0, (t) => {
			if (t instanceof AggregateError) {
				let n;
				for (let o of t.errors) o = Zc(o), n = hl(yc(o, r, Hc(i), e.schemaCoordinateInErrors && d), l, s), Hl(e, i, a);
				return n;
			}
			t = Zc(t);
			let n = hl(yc(t, r, Hc(i), e.schemaCoordinateInErrors && d), l, s);
			return Hl(e, i, a), n;
		}) : m;
	} catch (t) {
		if (t instanceof AggregateError) {
			let n;
			for (let o of t.errors) o = Zc(o), n = hl(yc(o, r, Hc(i), e.schemaCoordinateInErrors && d), l, s), Hl(e, i, a);
			return n;
		}
		let n = hl(yc(Zc(t), r, Hc(i), e.schemaCoordinateInErrors && d), l, s);
		return Hl(e, i, a), n;
	}
}
function ml(e, t, n, r, i) {
	return {
		fieldName: t.name,
		fieldNodes: n,
		returnType: t.type,
		parentType: r,
		path: i,
		schema: e.schema,
		fragments: e.fragments,
		rootValue: e.rootValue,
		operation: e.operation,
		variableValues: e.variableValues,
		signal: e.signal
	};
}
function hl(e, t, n) {
	if (U(t) || e.extensions?.CRITICAL_ERROR) throw e;
	return n.push(e), null;
}
function gl(e, t, n, r, i, a, o) {
	if (a instanceof Error) throw a;
	if (U(t)) {
		let s = gl(e, t.ofType, n, r, i, a, o);
		if (s === null) throw Error(`Cannot return null for non-nullable field ${r.parentType.name}.${r.fieldName}.`);
		return s;
	}
	if (a == null) return null;
	if (nn(t)) return yl(e, t, n, r, i, a, o);
	if (on(t)) return xl(t, a);
	if (cn(t)) return Sl(e, t, n, r, i, a, o);
	if (V(t)) return wl(e, t, n, r, i, a, o);
	/* c8 ignore next 6 */
	console.assert(!1, "Cannot complete value of unexpected output type: " + lc(t));
}
function _l(e, t, n) {
	if (typeof n.key == "number") return;
	let r = na(Mc, t[0], e.variableValues);
	if (r && r.if !== !1) return $c(typeof r.initialCount == "number", "initialCount must be a number"), $c(r.initialCount >= 0, "initialCount must be a positive integer"), {
		initialCount: r.initialCount,
		label: typeof r.label == "string" ? r.label : void 0
	};
}
async function vl(e, t, n, r, i, a, o) {
	e.signal?.throwIfAborted(), a.return && e.onSignalAbort?.(() => {
		a.return?.();
	});
	let s = o?.errors ?? e.errors, c = _l(e, n, i), l = !1, u = [], d = 0;
	for (;;) {
		if (c && typeof c.initialCount == "number" && d >= c.initialCount) {
			Vl(d, a, e, n, r, t, i, c.label, o);
			break;
		}
		let f = Vc(i, d, void 0), p;
		try {
			if (p = await a.next(), p.done) break;
		} catch (i) {
			let a = yc(Zc(i), n, Hc(f), e.schemaCoordinateInErrors && r);
			u.push(hl(a, t, s));
			break;
		}
		bl(p.value, u, s, e, t, n, r, f, o) && (l = !0), d += 1;
	}
	return l ? Promise.all(u) : u;
}
function yl(e, t, n, r, i, a, o) {
	let s = t.ofType, c = o?.errors ?? e.errors;
	if (Bc(a)) return vl(e, s, n, r, i, a[Symbol.asyncIterator](), o);
	if (!bc(a)) throw q(`Expected Iterable, but did not find one for field "${r.parentType.name}.${r.fieldName}".`);
	let l = _l(e, n, i), u = !1, d = o, f = [], p = 0;
	for (let t of a) {
		let a = Vc(i, p, void 0);
		if (l && typeof l.initialCount == "number" && p >= l.initialCount) {
			d = zl(i, a, t, e, n, r, s, l.label, d), p++;
			continue;
		}
		bl(t, f, c, e, s, n, r, a, o) && (u = !0), p++;
	}
	return u ? Promise.all(f) : f;
}
function bl(e, t, n, r, i, a, s, c, l) {
	try {
		let u;
		if (u = o(e) ? e.then((e) => gl(r, i, a, s, c, e, l)) : gl(r, i, a, s, c, e, l), o(u)) return t.push(u.then(void 0, (e) => {
			e = Zc(e);
			let t = hl(yc(e, a, Hc(c), r.schemaCoordinateInErrors && s), i, n);
			return Hl(r, c, l), t;
		})), !0;
		t.push(u);
	} catch (e) {
		let o = hl(yc(Zc(e), a, Hc(c), r.schemaCoordinateInErrors && s), i, n);
		Hl(r, c, l), t.push(o);
	}
	return !1;
}
function xl(e, t) {
	let n;
	try {
		n = e.serialize(t);
	} catch (e) {
		throw e instanceof M ? Error(e.message) : e;
	}
	if (n == null) throw Error(`Expected \`${lc(e)}.serialize(${lc(t)})\` to return non-nullable value, returned: ${lc(n)}`);
	return n;
}
function Sl(e, t, n, r, i, a, s) {
	let c = t.resolveType ?? e.typeResolver, l = e.contextValue, u = c(a, l, r, t);
	return o(u) ? u.then((o) => wl(e, Cl(o, e, t, n, r, a), n, r, i, a, s)) : wl(e, Cl(u, e, t, n, r, a), n, r, i, a, s);
}
function Cl(e, t, n, r, i, a) {
	if (e == null) throw q(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${i.parentType.name}.${i.fieldName}". Either the "${n.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, { nodes: r });
	if (V(e)) {
		if (he.major >= 16) throw q("Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.");
		e = e.name;
	}
	if (typeof e != "string") throw q(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${i.parentType.name}.${i.fieldName}" with value ${lc(a)}, received "${lc(e)}".`);
	let o = t.schema.getType(e);
	if (o == null) throw q(`Abstract type "${n.name}" was resolved to a type "${e}" that does not exist inside the schema.`, { nodes: r });
	if (!V(o)) throw q(`Abstract type "${n.name}" was resolved to a non-object type "${e}".`, { nodes: r });
	if (!t.schema.isSubType(n, o)) throw q(`Runtime Object type "${o.name}" is not a possible type for "${n.name}".`, { nodes: r });
	return o;
}
function wl(e, t, n, r, i, a, s) {
	if (t.isTypeOf) {
		let c = t.isTypeOf(a, e.contextValue, r);
		if (o(c)) return c.then((r) => {
			if (!r) throw Tl(t, a, n);
			return El(e, t, n, i, a, s);
		});
		if (!c) throw Tl(t, a, n);
	}
	return El(e, t, n, i, a, s);
}
function Tl(e, t, n) {
	return q(`Expected value of type "${e.name}" but got: ${lc(t)}.`, { nodes: n });
}
function El(e, t, n, r, i, a) {
	let { fields: o, patches: s } = rl(e, t, n), c = fl(e, t, i, r, o, a);
	for (let n of s) {
		let { label: o, fields: s } = n;
		Rl(e, t, i, s, o, r, a);
	}
	return c;
}
var Dl = function(e, t, n, r) {
	if (xc(e) && typeof e.__typename == "string") return e.__typename;
	let i = n.schema.getPossibleTypes(r), a = [];
	for (let r = 0; r < i.length; r++) {
		let s = i[r];
		if (s.isTypeOf) {
			let i = s.isTypeOf(e, t, n);
			if (o(i)) a[r] = i;
			else if (i) return s.name;
		}
	}
	if (a.length) return Promise.all(a).then((e) => {
		for (let t = 0; t < e.length; t++) if (e[t]) return i[t].name;
	});
}, Ol = function(e, t, n, r) {
	if (xc(e) || typeof e == "function") {
		let i = e[r.fieldName];
		return typeof i == "function" ? e[r.fieldName](t, n, r) : i;
	}
};
function kl(e) {
	let t = cl(e);
	if (!("schema" in t)) {
		for (let e of t) {
			let t = e.extensions ||= {}, n = t.http ||= {};
			n.status = 400, e.extensions.code = "BAD_USER_INPUT";
		}
		return { errors: t };
	}
	let n = Fl(t);
	return o(n) ? n.then((e) => Nl(t, e)) : Nl(t, n);
}
function Al(e) {
	return e?.initialResult;
}
function jl(e) {
	let t = e.subsequentResults, n = !1, r = !1;
	return {
		[Symbol.asyncIterator]() {
			return this;
		},
		next() {
			return r ? l({
				value: void 0,
				done: r
			}) : n ? t.next() : (n = !0, l({
				value: e.initialResult,
				done: r
			}));
		},
		return() {
			return r = !0, t.return();
		},
		throw(e) {
			return r = !0, t.throw(e);
		},
		[Gc.asyncDispose]() {
			return r = !0, t?.[Gc.asyncDispose]?.();
		}
	};
}
async function* Ml(e) {
	"initialResult" in e ? yield* jl(e) : yield e;
}
function Nl(e, t) {
	return Bc(t) ? Qc(p(t, (t) => c(() => al(ll(e, t)), Ml), (t) => {
		throw t instanceof AggregateError ? AggregateError(t.errors.map((t) => Pl(t, e.operation)), t.message) : Pl(t, e.operation);
	})) : t;
}
function Pl(e, t) {
	return q(e.message, {
		originalError: e,
		nodes: [t]
	});
}
function Fl(e) {
	try {
		let t = Il(e);
		return o(t) ? t.then(void 0, (e) => ({ errors: [e] })) : t;
	} catch (e) {
		return { errors: [e] };
	}
}
function Il(e) {
	let { schema: t, fragments: n, operation: r, variableValues: i, rootValue: a } = e, s = t.getSubscriptionType();
	if (s == null) throw q("Schema is not configured to execute subscription operation.", { nodes: r });
	let { fields: c } = Pc(t, n, i, s, r.selectionSet), [l, u] = [...c.entries()][0], d = u[0].name.value, f = Jl(t, s, u[0]);
	if (!f) throw q(`The subscription field "${d}" is not defined.`, { nodes: u });
	let p = Vc(void 0, l, s.name), m = ml(e, f, u, s, p);
	try {
		let t = wc(f, u[0], i), n = e.contextValue, r = (f.subscribe ?? e.subscribeFieldResolver)(a, t, n, m);
		return o(r) ? r.then((t) => Ll(t, e.signal, e.onSignalAbort)).then(void 0, (t) => {
			throw yc(t, u, Hc(p), e.schemaCoordinateInErrors && m);
		}) : Ll(r, e.signal, e.onSignalAbort);
	} catch (t) {
		throw yc(t, u, Hc(p), e.schemaCoordinateInErrors && m);
	}
}
function Ll(e, t, n) {
	if (t?.throwIfAborted(), e instanceof Error) throw e;
	if (!Bc(e)) throw q(`Subscription field must return Async Iterable. Received: ${lc(e)}.`);
	return n ? { [Symbol.asyncIterator]() {
		let t = e[Symbol.asyncIterator]();
		return t.return && n?.(() => {
			t.return?.();
		}), t;
	} } : e;
}
function Rl(e, t, n, r, i, a, s) {
	let c = new Gl({
		label: i,
		path: a,
		parentContext: s,
		exeContext: e
	}), l;
	try {
		l = fl(e, t, n, a, r, c), o(l) && (l = l.then(null, (e) => (c.errors.push(e), null)));
	} catch (e) {
		c.errors.push(e), l = null;
	}
	c.addData(l);
}
function zl(e, t, n, r, i, a, s, c, l) {
	let u = new Kl({
		label: c,
		path: t,
		parentContext: l,
		exeContext: r
	}), d;
	try {
		try {
			d = o(n) ? n.then((e) => gl(r, s, i, a, t, e, u)) : gl(r, s, i, a, t, n, u), o(d) && (d = d.then(void 0, (e) => {
				e = Zc(e);
				let n = hl(yc(e, i, Hc(t), r.schemaCoordinateInErrors && a), s, u.errors);
				return Hl(r, t, u), n;
			}));
		} catch (e) {
			d = hl(yc(Zc(e), i, Hc(t), r.schemaCoordinateInErrors && a), s, u.errors), Hl(r, t, u);
		}
	} catch (t) {
		return u.errors.push(t), Hl(r, e, u), u.addItems(null), u;
	}
	let f;
	return f = o(d) ? d.then((e) => [e], (t) => (u.errors.push(t), Hl(r, e, u), null)) : [d], u.addItems(f), u;
}
async function Bl(e, t, n, r, i, a, s) {
	let c;
	try {
		let { value: t, done: n } = await e.next();
		if (n) return a.setIsCompletedIterator(), {
			done: n,
			value: void 0
		};
		c = t;
	} catch (e) {
		return {
			done: !0,
			value: hl(yc(Zc(e), n, Hc(s), t.schemaCoordinateInErrors && r), i, a.errors)
		};
	}
	let l;
	try {
		return l = gl(t, i, n, r, s, c, a), o(l) && (l = l.then(void 0, (e) => {
			let o = hl(yc(e, n, Hc(s), t.schemaCoordinateInErrors && r), i, a.errors);
			return Hl(t, s, a), o;
		})), {
			done: !1,
			value: l
		};
	} catch (e) {
		let o = hl(yc(e, n, Hc(s), t.schemaCoordinateInErrors && r), i, a.errors);
		return Hl(t, s, a), {
			done: !1,
			value: o
		};
	}
}
async function Vl(e, t, n, r, i, a, s, c, l) {
	let u = e, d = l ?? void 0;
	for (;;) {
		let e = Vc(s, u, void 0), l = new Kl({
			label: c,
			path: e,
			parentContext: d,
			iterator: t,
			exeContext: n
		}), f;
		try {
			f = await Bl(t, n, r, i, a, l, e);
		} catch (e) {
			l.errors.push(e), Hl(n, s, l), l.addItems(null), t?.return && t.return().catch(() => {});
			return;
		}
		let { done: p, value: m } = f, h;
		if (h = o(m) ? m.then((e) => [e], (e) => (l.errors.push(e), Hl(n, s, l), null)) : [m], l.addItems(h), p) break;
		d = l, u++;
	}
}
function Hl(e, t, n) {
	let r = Hc(t);
	e.subsequentPayloads.forEach((t) => {
		if (t !== n) {
			for (let e = 0; e < r.length; e++) if (t.path[e] !== r[e]) return;
			ql(t) && t.iterator?.return && t.iterator.return().catch(() => {}), e.subsequentPayloads.delete(t);
		}
	});
}
function Ul(e) {
	let t = [];
	for (let n of e.subsequentPayloads) {
		let r = {};
		if (n.isCompleted) {
			if (e.subsequentPayloads.delete(n), ql(n)) {
				let e = n.items;
				if (n.isCompletedIterator) continue;
				r.items = e;
			} else r.data = n.data ?? null;
			r.path = n.path, n.label && (r.label = n.label), n.errors.length > 0 && (r.errors = n.errors), t.push(r);
		}
	}
	return t;
}
function Wl(e) {
	let t = !1;
	async function n() {
		if (t) return {
			value: void 0,
			done: !0
		};
		let r = Array.from(e.subsequentPayloads).map((e) => e.promise);
		if (e.signalPromise ? await Promise.race([e.signalPromise, ...r]) : await Promise.race(r), t) return {
			value: void 0,
			done: !0
		};
		let i = Ul(e), a = e.subsequentPayloads.size > 0;
		return !i.length && a ? n() : (a || (t = !0), {
			value: i.length ? {
				incremental: i,
				hasNext: a
			} : { hasNext: a },
			done: !1
		});
	}
	function r() {
		let t = [];
		return e.subsequentPayloads.forEach((e) => {
			ql(e) && e.iterator?.return && t.push(e.iterator.return());
		}), Promise.all(t);
	}
	return {
		[Symbol.asyncIterator]() {
			return this;
		},
		next: n,
		async return() {
			return await r(), t = !0, {
				value: void 0,
				done: !0
			};
		},
		async throw(e) {
			throw await r(), t = !0, e;
		},
		async [Gc.asyncDispose]() {
			await r(), t = !0;
		}
	};
}
var Gl = class {
	type;
	errors;
	label;
	path;
	promise;
	data;
	parentContext;
	isCompleted;
	_exeContext;
	_resolve;
	constructor(e) {
		this.type = "defer", this.label = e.label, this.path = Hc(e.path), this.parentContext = e.parentContext, this.errors = [], this._exeContext = e.exeContext, this._exeContext.subsequentPayloads.add(this), this.isCompleted = !1, this.data = null, this.promise = new Promise((e) => {
			this._resolve = (t) => {
				e(t);
			};
		}).then((e) => {
			this.data = e, this.isCompleted = !0;
		});
	}
	addData(e) {
		let t = this.parentContext?.promise;
		if (t) {
			this._resolve?.(t.then(() => e));
			return;
		}
		this._resolve?.(e);
	}
}, Kl = class {
	type;
	errors;
	label;
	path;
	items;
	promise;
	parentContext;
	iterator;
	isCompletedIterator;
	isCompleted;
	_exeContext;
	_resolve;
	constructor(e) {
		this.type = "stream", this.items = null, this.label = e.label, this.path = Hc(e.path), this.parentContext = e.parentContext, this.iterator = e.iterator, this.errors = [], this._exeContext = e.exeContext, this._exeContext.subsequentPayloads.add(this), this.isCompleted = !1, this.items = null, this.promise = new Promise((e) => {
			this._resolve = (t) => {
				e(t);
			};
		}).then((e) => {
			this.items = e, this.isCompleted = !0;
		});
	}
	addItems(e) {
		let t = this.parentContext?.promise;
		if (t) {
			this._resolve?.(t.then(() => e));
			return;
		}
		this._resolve?.(e);
	}
	setIsCompletedIterator() {
		this.isCompletedIterator = !0;
	}
};
function ql(e) {
	return e.type === "stream";
}
function Jl(e, t, n) {
	let r = n.name.value;
	return r === ur.name && e.getQueryType() === t ? ur : r === dr.name && e.getQueryType() === t ? dr : r === fr.name ? fr : t.getFields()[r];
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+executor@1.5.3_graphql@16.14.0/node_modules/@graphql-tools/executor/esm/execution/normalizedExecutor.js
function Yl(e) {
	let t = Ha(e.document, e.operationName);
	if (t == null) throw Error("Must provide an operation.");
	return t.operation === "subscription" ? kl(e) : c(() => il(e), (e) => Al(e) ? jl(e) : e);
}
//#endregion
//#region ../../node_modules/.pnpm/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/global-ponyfill.js
var Xl = /* @__PURE__ */ t(((e, t) => {
	t.exports.fetch = globalThis.fetch, t.exports.Headers = globalThis.Headers, t.exports.Request = globalThis.Request, t.exports.Response = globalThis.Response, t.exports.FormData = globalThis.FormData, t.exports.ReadableStream = globalThis.ReadableStream, t.exports.WritableStream = globalThis.WritableStream, t.exports.TransformStream = globalThis.TransformStream, t.exports.CompressionStream = globalThis.CompressionStream, t.exports.DecompressionStream = globalThis.DecompressionStream, t.exports.TextDecoderStream = globalThis.TextDecoderStream, t.exports.TextEncoderStream = globalThis.TextEncoderStream, t.exports.Blob = globalThis.Blob, t.exports.File = globalThis.File, t.exports.crypto = globalThis.crypto, t.exports.btoa = globalThis.btoa, t.exports.TextEncoder = globalThis.TextEncoder, t.exports.TextDecoder = globalThis.TextDecoder, t.exports.URLPattern = globalThis.URLPattern, t.exports.URL = globalThis.URL, t.exports.URLSearchParams = globalThis.URLSearchParams, t.exports.createFetch = () => globalThis;
}));
//#endregion
//#region ../../node_modules/.pnpm/@whatwg-node+server@0.11.0/node_modules/@whatwg-node/server/esm/utils.js
function Zl(e) {
	return typeof e == "object" && !!e && typeof e[Symbol.asyncIterator] == "function";
}
function Ql(e) {
	return e.socket?.localPort ? e.socket?.localPort : (e.headers?.[":authority"] || e.headers?.host)?.split(":")?.[1] || 80;
}
function $l(e) {
	if (e.headers?.[":authority"]) return e.headers?.[":authority"];
	if (e.headers?.host) return e.headers?.host;
	let t = Ql(e);
	if (e.hostname) return e.hostname + ":" + t;
	let n = e.socket?.localAddress;
	return n && !n?.includes("::") && !n?.includes("ffff") ? `${n}:${t}` : "localhost";
}
function eu(e) {
	let t = $l(e);
	return `${e.protocol || (e.socket?.encrypted ? "https" : "http")}://${t}${e.originalUrl || e.url || "/graphql"}`;
}
function tu(e) {
	let t = e[Symbol.toStringTag];
	return !!(typeof e == "string" || t === "Uint8Array" || t === "Blob" || t === "FormData" || t === "URLSearchParams" || Zl(e));
}
function nu(e, t, n, r) {
	let i = e.raw || e.req || e, a = eu(i);
	if (e.query) {
		let n = new t.URL(a);
		for (let t in e.query) n.searchParams.set(t, e.query[t]);
		a = n.toString();
	}
	let o = e.headers;
	if (e.headers?.[":method"]) {
		o = {};
		for (let t in e.headers) t.startsWith(":") || (o[t] = e.headers[t]);
	}
	let s = r ? Ou() : new AbortController();
	if (n?.once) {
		let e = () => {
			s.signal.aborted || (Object.defineProperty(i, "aborted", { value: !0 }), s.abort(n.errored ?? void 0));
		};
		n.once("error", e), n.once("close", e), n.once("finish", () => {
			n.removeListener("close", e);
		});
	}
	if (e.method === "GET" || e.method === "HEAD") return new t.Request(a, {
		method: e.method,
		headers: o,
		signal: s.signal
	});
	let c = e.body;
	if (c != null && Object.keys(c).length > 0) {
		if (tu(c)) return new t.Request(a, {
			method: e.method || "GET",
			headers: o,
			body: c,
			signal: s.signal
		});
		let n = new t.Request(a, {
			method: e.method || "GET",
			headers: o,
			signal: s.signal
		});
		return n.headers.get("content-type")?.includes("json") || n.headers.set("content-type", "application/json; charset=utf-8"), new Proxy(n, { get(e, t, r) {
			switch (t) {
				case "json": return () => l(c);
				case "text": return () => l(JSON.stringify(c));
				default: {
					let e = Reflect.get(n, t, n);
					return typeof e == "function" ? function(...t) {
						return e.apply(this === r ? n : this, t);
					} : e;
				}
			}
		} });
	}
	return new t.Request(a, {
		method: e.method,
		headers: o,
		signal: s.signal,
		body: i,
		duplex: "half"
	});
}
function ru(e) {
	return e.read != null;
}
function iu(e) {
	return ru(e);
}
function au(e) {
	return e != null && e.setHeader != null && e.end != null && e.once != null && e.write != null;
}
function ou(e) {
	return e != null && e.getReader != null;
}
function su(e) {
	return e != null && e.request != null && e.respondWith != null;
}
function cu(e) {
	e?.socket?.setTimeout?.(0), e?.socket?.setNoDelay?.(!0), e?.socket?.setKeepAlive?.(!0);
}
function lu(e) {
	e.end(null, null, null);
}
function uu(e, t) {
	let n = !1, r = () => {
		n = !0;
	};
	e.once("error", r), e.once("close", r), e.once("finish", () => {
		e.removeListener("close", r), e.removeListener("error", r);
	});
	let i = t[Symbol.asyncIterator]();
	return fu(() => i.next(), e, () => n);
}
function du(e) {
	e.end(null, null, null);
}
function fu(e, t, n) {
	let r = () => c(e, (e) => n?.() || e.done ? du(t) : c(() => pu(e.value, t), () => n?.() ? du(t) : r()));
	return r();
}
function pu(e, t) {
	if (!t.write(e)) return new Promise((e) => t.once("drain", e));
}
var mu = globalThis.process?.versions?.node?.startsWith("1");
function hu(e, t, n, r) {
	if (t.closed || t.destroyed || t.writableEnded) return;
	if (!e) {
		t.statusCode = 404, lu(t);
		return;
	}
	if (r && e.headers?.headersInit && !Array.isArray(e.headers.headersInit) && !e.headers.headersInit.get && !e.headers._map && !e.headers._setCookies?.length) t.writeHead(e.status, e.statusText, e.headers.headersInit);
	else {
		if (t.setHeaders && !mu) t.setHeaders(e.headers);
		else {
			let n = !1;
			e.headers.forEach((r, i) => {
				if (i === "set-cookie") {
					if (n) return;
					n = !0;
					let r = e.headers.getSetCookie?.();
					if (r) {
						t.setHeader("set-cookie", r);
						return;
					}
				}
				t.setHeader(i, r);
			});
		}
		t.writeHead(e.status, e.statusText);
	}
	if (e.bodyType === "String") {
		let n = e.bodyInit;
		return c(() => pu(n, t), () => lu(t));
	}
	let i = e._buffer;
	if (i) return c(() => pu(i, t), () => lu(t));
	let a = e.body;
	if (a == null) {
		lu(t);
		return;
	}
	if (a[Symbol.toStringTag] === "Uint8Array") return c(() => pu(a, t), () => lu(t));
	if (cu(n), ru(a)) {
		t.once("close", () => {
			a.destroy();
		}), a.pipe(t, { end: !0 });
		return;
	}
	if (ou(a)) return gu(n, t, a);
	if (Zl(a)) return uu(t, a);
}
function gu(e, t, n) {
	let r = n.getReader();
	return e?.once?.("error", (e) => {
		r.cancel(e);
	}), fu(() => r.read(), t);
}
function _u(e) {
	return typeof e == "object" && !!e && ("body" in e || "cache" in e || "credentials" in e || "headers" in e || "integrity" in e || "keepalive" in e || "method" in e || "mode" in e || "redirect" in e || "referrer" in e || "referrerPolicy" in e || "signal" in e || "window" in e);
}
function vu(...e) {
	let [t, ...n] = e.filter((e) => typeof e == "object" && !!e);
	return n.forEach((e) => {
		let n = Object.getOwnPropertyNames(e).reduce((t, n) => (Object.getOwnPropertyDescriptor(e, n) && (t[n] = Object.getOwnPropertyDescriptor(e, n)), t), {});
		Object.getOwnPropertySymbols(e).forEach((t) => {
			let r = Object.getOwnPropertyDescriptor(e, t);
			r?.enumerable && (n[t] = r);
		}), Object.defineProperties(t, n);
	}), t;
}
function yu(e, t) {
	return new t(e.stack || e.message || e.toString(), { status: e.status || 500 });
}
function bu(e, t) {
	return e == null ? t == null ? {} : { waitUntil: t } : vu(Object.create(e), { waitUntil: t }, e);
}
function xu(e, t) {
	if (t?.aborted) throw t.reason;
	if (o(e) && t) {
		let n = u();
		function r() {
			n.reject(t.reason);
		}
		return t.addEventListener("abort", r, { once: !0 }), e.then(function(e) {
			n.resolve(e);
		}).catch(function(e) {
			n.reject(e);
		}).finally(() => {
			t.removeEventListener("abort", r);
		}), n.promise;
	}
	return e;
}
var Su = [
	"SIGINT",
	"exit",
	"SIGTERM"
], Cu = /* @__PURE__ */ new Set(), wu = !1;
function Tu() {
	if (!wu) {
		wu = !0;
		for (let e of Su) globalThis.process.once(e, function() {
			return Promise.allSettled([...Cu].map((e) => !e.disposed && e.disposeAsync()));
		});
	}
}
function Eu(e) {
	globalThis.process && (Tu(), Cu.has(e) || (Cu.add(e), e.defer(() => {
		Cu.delete(e);
	})));
}
var Du = class extends EventTarget {
	aborted = !1;
	_onabort = null;
	_reason;
	constructor() {
		super();
		let e = globalThis.process?.getBuiltinModule?.("node:events");
		e?.kMaxEventTargetListeners && (this[e.kMaxEventTargetListeners] = 0);
	}
	throwIfAborted() {
		if (this._nativeCtrl?.signal?.throwIfAborted) return this._nativeCtrl.signal.throwIfAborted();
		if (this.aborted) throw this._reason;
	}
	_nativeCtrl;
	ensureNativeCtrl() {
		if (!this._nativeCtrl) {
			let e = this.aborted;
			this._nativeCtrl = new AbortController(), e && this._nativeCtrl.abort(this._reason);
		}
		return this._nativeCtrl;
	}
	abort(e) {
		if (this._nativeCtrl?.abort) return this._nativeCtrl?.abort(e);
		this._reason = e || new DOMException("This operation was aborted", "AbortError"), this.aborted = !0, this.dispatchEvent(new Event("abort"));
	}
	get signal() {
		return this._nativeCtrl?.signal ? this._nativeCtrl.signal : this;
	}
	get reason() {
		return this._nativeCtrl?.signal ? this._nativeCtrl.signal.reason : this._reason;
	}
	get onabort() {
		return this._onabort, this._onabort;
	}
	set onabort(e) {
		if (this._nativeCtrl?.signal) {
			this._nativeCtrl.signal.onabort = e;
			return;
		}
		this._onabort && this.removeEventListener("abort", this._onabort), this._onabort = e, e && this.addEventListener("abort", e);
	}
};
function Ou() {
	return globalThis.Bun || globalThis.Deno ? new AbortController() : new Proxy(new Du(), {
		get(e, t, n) {
			if (t.toString().includes("kDependantSignals")) {
				let n = e.ensureNativeCtrl();
				return Reflect.get(n.signal, t, n.signal);
			}
			return Reflect.get(e, t, n);
		},
		set(e, t, n, r) {
			if (t.toString().includes("kDependantSignals")) {
				let r = e.ensureNativeCtrl();
				return Reflect.set(r.signal, t, n, r.signal);
			}
			return Reflect.set(e, t, n, r);
		},
		getPrototypeOf() {
			return AbortSignal.prototype;
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@whatwg-node+server@0.11.0/node_modules/@whatwg-node/server/esm/uwebsockets.js
function ku(e) {
	return !!e.onData;
}
function Au({ req: e, res: t, fetchAPI: n, controller: r }) {
	let i = e.getMethod(), a, o = [], s = [(e) => {
		o.push(e);
	}], c = (e) => {
		for (let t of s) t(e);
	}, u = !1, d = [() => {
		u = !0;
	}], f = () => {
		for (let e of d) e();
	};
	t.onData(function(e, t) {
		c(Buffer.from(Buffer.from(e, 0, e.byteLength))), t && f();
	});
	let p;
	if (i !== "get" && i !== "head") {
		a = "half", r.signal.addEventListener("abort", () => {
			f();
		}, { once: !0 });
		let e;
		p = () => (e ||= new n.ReadableStream({ start(e) {
			for (let t of o) e.enqueue(t);
			if (u) {
				e.close();
				return;
			}
			s.push((t) => {
				e.enqueue(t);
			}), d.push(() => {
				if (r.signal.reason) {
					e.error(r.signal.reason);
					return;
				}
				e.desiredSize && e.close();
			});
		} }), e);
	}
	let m = new n.Headers();
	e.forEach((e, t) => {
		m.append(e, t);
	});
	let h = `http://localhost${e.getUrl()}`, g = e.getQuery();
	g && (h += `?${g}`);
	let _;
	function v() {
		return p ? u ? b() : p() : null;
	}
	let y = new n.Request(h, {
		method: i,
		headers: m,
		get body() {
			return v();
		},
		signal: r.signal,
		duplex: a
	});
	function b() {
		return _ ||= o.length === 1 ? o[0] : Buffer.concat(o), _;
	}
	function x() {
		return u ? l(b()) : new Promise((e, t) => {
			try {
				d.push(() => {
					e(b());
				});
			} catch (e) {
				t(e);
			}
		});
	}
	return Object.defineProperties(y, {
		body: {
			get() {
				return v();
			},
			configurable: !0,
			enumerable: !0
		},
		json: {
			value() {
				return x().then((e) => e.toString("utf8")).then((e) => JSON.parse(e));
			},
			configurable: !0,
			enumerable: !0
		},
		text: {
			value() {
				return x().then((e) => e.toString("utf8"));
			},
			configurable: !0,
			enumerable: !0
		},
		arrayBuffer: {
			value() {
				return x();
			},
			configurable: !0,
			enumerable: !0
		}
	}), y;
}
function ju(e, t) {
	return new t.WritableStream({
		write(t) {
			e.cork(() => {
				e.write(t);
			});
		},
		close() {
			e.cork(() => {
				e.end();
			});
		}
	});
}
function Mu(e, t, n, r) {
	if (!t) {
		e.writeStatus("404 Not Found"), e.end();
		return;
	}
	let i = t._buffer, a = t.bodyType === "String" ? t.bodyInit : void 0;
	if (!n.signal.aborted && (e.cork(() => {
		e.writeStatus(`${t.status} ${t.statusText}`);
		let n = !1;
		for (let [r, i] of t.headers) if (r !== "content-length" && r !== "transfer-encoding") {
			if (r === "set-cookie") {
				if (n) continue;
				n = !0;
				let i = t.headers.getSetCookie?.();
				if (i) {
					for (let t of i) e.writeHeader(r, t);
					continue;
				}
			}
			e.writeHeader(r, i);
		}
		a ? e.end(a) : i ? e.end(i) : t.body || e.end();
	}), !(a || i || !t.body))) return n.signal.addEventListener("abort", () => {
		t.body?.locked || t.body?.cancel(n.signal.reason);
	}, { once: !0 }), t.body.pipeTo(ju(e, r), { signal: n.signal }).catch((e) => {
		if (!n.signal.aborted) throw e;
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@whatwg-node+server@0.11.0/node_modules/@whatwg-node/server/esm/createServerAdapter.js
var Nu = /* @__PURE__ */ e(Xl(), 1);
function Pu(e) {
	try {
		return !!e?.request;
	} catch {
		return !1;
	}
}
var Fu = {};
function Iu(e, t) {
	let n = t?.__useSingleWriteHead == null ? !0 : t.__useSingleWriteHead, r = {
		...Nu,
		...t?.fetchAPI
	}, i = t?.__useCustomAbortCtrl == null ? r.Request !== globalThis.Request : t.__useCustomAbortCtrl, a = typeof e == "function" ? e : e.handle, s = [], u = [], f, p = /* @__PURE__ */ new Set(), m;
	function h() {
		return m || (m = new Xc(), t?.disposeOnProcessTerminate && Eu(m), m.defer(() => {
			if (p.size > 0) return Promise.allSettled(p).then(() => {
				p.clear();
			}, () => {
				p.clear();
			});
		})), m;
	}
	function g(e) {
		o(e) && (h(), p.add(e), e.then(() => {
			p.delete(e);
		}, (t) => {
			console.error(`Unexpected error while waiting: ${t.message || t}`), p.delete(e);
		}));
	}
	if (t?.plugins != null) for (let e of t.plugins) {
		e.instrumentation && (f = f ? y(f, e.instrumentation) : e.instrumentation), e.onRequest && s.push(e.onRequest), e.onResponse && u.push(e.onResponse);
		let t = e[Gc.dispose];
		t && h().defer(t);
		let n = e[Gc.asyncDispose];
		n && h().defer(n), e.onDispose && h().defer(e.onDispose);
	}
	let _ = s.length > 0 || u.length > 0 ? function(e, t) {
		let n = a, i;
		if (s.length === 0) return f();
		let o = e.parsedUrl || new Proxy(Fu, { get(t, n, i) {
			return o = new r.URL(e.url, "http://localhost"), Reflect.get(o, n, o);
		} });
		function l(n) {
			return u.length === 0 ? n : c(() => d(u, (i) => i({
				request: e,
				response: n,
				serverContext: t,
				setResponse(e) {
					n = e;
				},
				fetchAPI: r
			})), () => n);
		}
		function f() {
			return i ? l(i) : c(() => n(e, t), l);
		}
		return c(() => d(s, (a, s) => a({
			request: e,
			setRequest(t) {
				e = t;
			},
			serverContext: t,
			fetchAPI: r,
			url: o,
			requestHandler: n,
			setRequestHandler(e) {
				n = e;
			},
			endResponse(e) {
				i = e, e && s();
			}
		})), f);
	} : a;
	if (f?.request) {
		let e = _;
		_ = (t, n) => b({ request: t }).asyncFn(f.request, e)(t, n);
	}
	function x(e, ...t) {
		let n = t.length > 1 ? vu(...t) : t[0] || {};
		n.waitUntil ||= g;
		let a = nu(e, r, void 0, i);
		return _(a, n);
	}
	function S(e, t, ...n) {
		let a = t.raw || t, o = n.length > 1 ? vu(...n) : n[0] || {};
		o.waitUntil ||= g;
		let s = nu(e, r, a, i);
		return _(s, o);
	}
	function C(e, t, ...i) {
		let a = {
			req: e,
			res: t,
			waitUntil: g
		};
		return v(l().then(() => S(e, t, a, ...i)).catch((e) => yu(e, r.Response)).then((r) => hu(r, t, e, n)).catch((e) => console.error(`Unexpected error while handling request: ${e.message || e}`)));
	}
	function w(e, t, ...n) {
		let a = {
			res: e,
			req: t,
			waitUntil: g
		}, o = n.filter((e) => e != null).length > 0 ? vu(a, ...n) : a, s = i ? Ou() : new AbortController(), l = e.end.bind(e), u = !1;
		e.end = function(e) {
			return u = !0, l(e);
		}, e.onAborted.bind(e)(function() {
			s.abort();
		}), e.onAborted = function(e) {
			s.signal.addEventListener("abort", e, { once: !0 });
		};
		let d = Au({
			req: t,
			res: e,
			fetchAPI: r,
			controller: s
		});
		return c(() => c(() => _(d, o), (e) => e, (e) => yu(e, r.Response)), (t) => {
			if (!s.signal.aborted && !u) return c(() => Mu(e, t, s, r), (e) => e, (e) => {
				console.error(`Unexpected error while handling request: ${e.message || e}`);
			});
		});
	}
	function T(e, ...t) {
		if (!e.respondWith || !e.request) throw TypeError(`Expected FetchEvent, got ${e}`);
		let n = t.filter((e) => e != null), r = n.length > 0 ? vu({}, e, ...n) : bu(e), i = _(e.request, r);
		e.respondWith(i);
	}
	function E(e, ...t) {
		let n = t.filter((e) => e != null), r = n.length > 1 ? vu({}, ...n) : bu(n[0], n[0] == null || n[0].waitUntil == null ? g : void 0);
		return _(e, r);
	}
	let D = (e, ...t) => {
		if (typeof e == "string" || "href" in e) {
			let [n, ...i] = t;
			if (_u(n)) {
				let t = E(new r.Request(e, n), ...i), a = n.signal;
				return a ? xu(t, a) : t;
			}
			return E(new r.Request(e), ...t);
		}
		return xu(E(e, ...t), e.signal);
	}, O = (e, ...t) => {
		let [n, ...r] = t;
		if (iu(e)) {
			if (!au(n)) throw TypeError(`Expected ServerResponse, got ${n}`);
			return C(e, n, ...r);
		}
		if (ku(e)) return w(e, n, ...r);
		if (au(n)) throw TypeError("Got Node response without Node request");
		return Pu(e) ? su(e) ? T(e, ...t) : E(e.request, e, ...t) : D(e, ...t);
	}, k = {
		handleRequest: E,
		fetch: D,
		handleNodeRequest: x,
		handleNodeRequestAndResponse: S,
		requestListener: C,
		handleEvent: T,
		handleUWS: w,
		handle: O,
		get disposableStack() {
			return h();
		},
		[Gc.asyncDispose]() {
			return m && !m.disposed ? m.disposeAsync() : l();
		},
		dispose() {
			return m && !m.disposed ? m.disposeAsync() : l();
		},
		waitUntil: g
	}, ee = new Proxy(O, {
		has: (t, n) => n in k || n in O || e && n in e,
		get: (t, n) => {
			if (globalThis.Deno || n === Symbol.asyncDispose || n === Symbol.dispose) {
				let e = Reflect.get(k, n, k);
				if (e) return e;
			}
			let r = k[n];
			if (r) return r.bind ? r.bind(k) : r;
			let i = O[n];
			if (i) return i.bind ? i.bind(O) : i;
			if (e) {
				let t = e[n];
				if (t) return t.bind ? function(...t) {
					let r = e[n](...t);
					return r === e ? ee : r;
				} : t;
			}
		},
		apply(e, t, n) {
			return O(...n);
		}
	});
	return ee;
}
//#endregion
//#region ../../node_modules/.pnpm/@whatwg-node+server@0.11.0/node_modules/@whatwg-node/server/esm/plugins/useCors.js
function Lu(e, t) {
	let n = e.headers.get("origin");
	if (t === !1 || n == null) return null;
	let r = {};
	if (t.origin == null || t.origin.length === 0 || t.origin.includes("*") ? (r["Access-Control-Allow-Origin"] = n, r.Vary = "Origin") : typeof t.origin == "string" ? r["Access-Control-Allow-Origin"] = t.origin : Array.isArray(t.origin) && (t.origin.length === 1 ? r["Access-Control-Allow-Origin"] = t.origin[0] : t.origin.includes(n) ? (r["Access-Control-Allow-Origin"] = n, r.Vary = "Origin") : r["Access-Control-Allow-Origin"] = "null"), t.methods?.length) r["Access-Control-Allow-Methods"] = t.methods.join(", ");
	else {
		let t = e.headers.get("access-control-request-method");
		t && (r["Access-Control-Allow-Methods"] = t);
	}
	if (t.allowedHeaders?.length) r["Access-Control-Allow-Headers"] = t.allowedHeaders.join(", ");
	else {
		let t = e.headers.get("access-control-request-headers");
		t && (r["Access-Control-Allow-Headers"] = t, r.Vary ? r.Vary += ", Access-Control-Request-Headers" : r.Vary = "Access-Control-Request-Headers");
	}
	return t.credentials == null ? r["Access-Control-Allow-Origin"] !== "*" && (r["Access-Control-Allow-Credentials"] = "true") : t.credentials === !0 && (r["Access-Control-Allow-Credentials"] = "true"), t.exposedHeaders && (r["Access-Control-Expose-Headers"] = t.exposedHeaders.join(", ")), t.maxAge && (r["Access-Control-Max-Age"] = t.maxAge.toString()), r;
}
function Ru(e, t, n) {
	return c(() => t(e, n), (t) => Lu(e, t));
}
function zu(e) {
	let t = () => ({});
	if (e != null) if (typeof e == "function") t = e;
	else if (typeof e == "object") {
		let n = { ...e };
		t = () => n;
	} else e === !1 && (t = () => !1);
	return {
		onRequest({ request: e, fetchAPI: t, endResponse: n }) {
			e.method.toUpperCase() === "OPTIONS" && n(new t.Response(null, {
				status: 204,
				headers: { "Content-Length": "0" }
			}));
		},
		onResponse({ request: e, serverContext: n, response: r }) {
			return c(() => Ru(e, t, n), (e) => {
				if (e != null) for (let t in e) r.headers.set(t, e[t]);
			});
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+utils@10.11.0_graphql@16.14.0/node_modules/@graphql-tools/utils/esm/errors.js
var Bu = [
	"message",
	"locations",
	"path",
	"nodes",
	"source",
	"positions",
	"originalError",
	"name",
	"stack",
	"extensions",
	"coordinate"
];
function Vu(e) {
	return typeof e == "object" && !!e && Object.keys(e).every((e) => Bu.includes(e));
}
function J(e, t) {
	t?.originalError && !(t.originalError instanceof Error) && Vu(t.originalError) && (t.originalError = J(t.originalError.message, t.originalError));
	let n = M, r = he.major >= 16 ? new n(e, t) : new n(e, t?.nodes, t?.source, t?.positions, t?.path, t?.originalError, t?.extensions);
	return t?.coordinate && r.coordinate == null && Object.defineProperties(r, { coordinate: {
		value: t.coordinate,
		enumerable: !0,
		configurable: !0
	} }), r;
}
function Hu(e) {
	return e.coordinate;
}
//#endregion
//#region ../../node_modules/.pnpm/@graphql-tools+utils@10.11.0_graphql@16.14.0/node_modules/@graphql-tools/utils/esm/isAsyncIterable.js
function Uu(e) {
	return e?.[Symbol.asyncIterator] != null;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/error.js
function Wu(e) {
	return typeof e == "object" && !!e && "errors" in e;
}
function Gu(e) {
	return e != null && typeof e.toString == "function";
}
function Ku(e) {
	return e instanceof M;
}
function qu(e) {
	return e instanceof M ? e.originalError == null ? !0 : qu(e.originalError) : !1;
}
function Ju(e) {
	return typeof e == "object" && e?.constructor?.name === "DOMException" && (e.name === "AbortError" || e.name === "TimeoutError");
}
function Yu(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	if (Wu(e)) for (let i of e.errors) {
		let e = Yu(i, t, n);
		for (let t of e) r.add(t);
	}
	else if (Ju(e)) n.debug("Request aborted");
	else if (t) {
		let i = t.maskError(e, t.errorMessage, t.isDev);
		i !== e && n.error(e), r.add(Ku(i) ? i : J(i.message, { originalError: i }));
	} else Ku(e) ? r.add(e) : e instanceof Error ? r.add(J(e.message, { originalError: e })) : typeof e == "string" ? r.add(J(e, { extensions: {
		code: "INTERNAL_SERVER_ERROR",
		unexpected: !0
	} })) : Gu(e) ? r.add(J(e.toString(), { extensions: {
		code: "INTERNAL_SERVER_ERROR",
		unexpected: !0
	} })) : (n.error(e), r.add(J("Unexpected error.", { extensions: { unexpected: !0 } })));
	return Array.from(r);
}
function Xu(e, t = {}, n = !1) {
	let r, i = !1;
	if ("extensions" in e && e.extensions?.http && (e.extensions.http.headers && Object.assign(t, e.extensions.http.headers), e.extensions.http.status && (r = e.extensions.http.status)), "errors" in e && e.errors?.length) for (let a of e.errors) if (a.extensions?.http) {
		if (a.extensions.http.headers && Object.assign(t, a.extensions.http.headers), n && a.extensions.http.spec) continue;
		a.extensions.http.status && (!r || a.extensions.http.status > r) && (r = a.extensions.http.status);
	} else (!qu(a) || a.extensions?.unexpected) && (i = !0);
	else r ||= 200;
	return r ||= i && !("data" in e) ? 500 : 200, {
		status: r,
		headers: t
	};
}
function Zu(e) {
	return Array.isArray(e) && e.length > 0 && e.some(Ku);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/allowed-headers.js
function Qu(e) {
	return { onResponse({ response: t }) {
		ed(t.headers, e);
	} };
}
function $u(e) {
	return { onRequest({ request: t }) {
		ed(t.headers, e);
	} };
}
function ed(e, t) {
	for (let n of e.keys()) t.includes(n) || e.delete(n);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-parser/utils.js
function td(e) {
	let t = e.get("operationName") || void 0, n = e.get("query") || void 0, r = e.get("variables") || void 0, i = e.get("extensions") || void 0;
	return {
		operationName: t,
		query: n,
		variables: r ? JSON.parse(r) : void 0,
		extensions: i ? JSON.parse(i) : void 0
	};
}
function nd(e) {
	return td(new Nu.URLSearchParams(e));
}
function rd(e, t) {
	let n = e.headers.get("content-type");
	return n = n?.split(",")[0] || null, n === t || !!n?.startsWith(`${t};`);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-parser/get.js
function id(e) {
	return e.method === "GET";
}
function ad(e) {
	return td(new Nu.URLSearchParams(e.url.substring(e.url.indexOf("?") + 1)));
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-parser/post-form-url-encoded.js
function od(e) {
	return e.method === "POST" && rd(e, "application/x-www-form-urlencoded");
}
function sd(e) {
	return e.text().then(nd);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-parser/post-graphql-string.js
function cd(e) {
	return e.method === "POST" && rd(e, "application/graphql");
}
function ld(e) {
	return e.text().then((e) => ({ query: e }));
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-parser/post-json.js
function ud(e) {
	return e.method === "POST" && (rd(e, "application/json") || rd(e, "application/graphql+json"));
}
function dd(e) {
	return c(() => e.json(), (e) => {
		if (e == null) throw J(`POST body is expected to be object but received ${e}`, { extensions: {
			http: { status: 400 },
			code: "BAD_REQUEST"
		} });
		let t = typeof e;
		if (t !== "object") throw J(`POST body is expected to be object but received ${t}`, { extensions: {
			http: { status: 400 },
			code: "BAD_REQUEST"
		} });
		return e;
	}, (e) => {
		if (e instanceof M) throw e;
		let t = {
			http: {
				spec: !0,
				status: 400
			},
			code: "BAD_REQUEST"
		};
		throw e instanceof Error && (t.originalError = {
			name: e.name,
			message: e.message
		}), J("POST body sent invalid JSON.", { extensions: t });
	});
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-parser/post-multipart.js
function fd(e) {
	return e.method === "POST" && rd(e, "multipart/form-data");
}
function pd(e) {
	return c(() => e.formData(), (e) => {
		let t = e.get("operations");
		if (!t) throw J("Missing multipart form field \"operations\"");
		if (typeof t != "string") throw J("Multipart form field \"operations\" must be a string");
		let n;
		try {
			n = JSON.parse(t);
		} catch {
			throw J("Multipart form field \"operations\" must be a valid JSON string");
		}
		let r = e.get("map");
		if (r != null) {
			if (typeof r != "string") throw J("Multipart form field \"map\" must be a string");
			let t;
			try {
				t = JSON.parse(r);
			} catch {
				throw J("Multipart form field \"map\" must be a valid JSON string");
			}
			for (let r in t) {
				let i = e.get(r), a = t[r];
				for (let e of a) md(n, e, i);
			}
		}
		return n;
	}, (e) => {
		throw e instanceof Error && e.message.startsWith("File size limit exceeded: ") ? J(e.message, { extensions: { http: { status: 413 } } }) : e;
	});
}
function md(e, t, n) {
	let r = t.split("."), i = e;
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		if (t === "__proto__" || t === "constructor" || t === "prototype") return;
		e === r.length - 1 ? i[t] = n : (t in i || (i[t] = {}), i = i[t]);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-validation/use-check-graphql-query-params.js
var hd = new Set([
	"query",
	"variables",
	"operationName",
	"extensions"
]);
function gd(e, t) {
	if (typeof e != "object" || !e) throw J("Invalid \"params\" in the request body", { extensions: {
		http: {
			spec: !0,
			status: 400
		},
		code: "BAD_REQUEST"
	} });
	for (let n in e) if (e[n] != null && !hd.has(n)) {
		if (t?.includes(n)) continue;
		throw J(`Unexpected parameter "${n}" in the request body.`, { extensions: {
			http: { status: 400 },
			code: "BAD_REQUEST"
		} });
	}
}
function _d(e, t) {
	if (!bd(e)) throw J(`Expected params to be an object but given ${yd(e)}.`, { extensions: {
		http: {
			status: 400,
			headers: { Allow: "GET, POST" }
		},
		code: "BAD_REQUEST"
	} });
	if (gd(e, t), e.query == null) throw J("Must provide query string.", { extensions: {
		http: {
			spec: !0,
			status: 400,
			headers: { Allow: "GET, POST" }
		},
		code: "BAD_REQUEST"
	} });
	let n = yd(e.query);
	if (n !== "string") throw J(`Expected "query" param to be a string, but given ${n}.`, { extensions: {
		http: {
			status: 400,
			headers: { Allow: "GET, POST" }
		},
		code: "BAD_REQUEST"
	} });
	let r = yd(e.variables);
	if (![
		"object",
		"null",
		"undefined"
	].includes(r)) throw J(`Expected "variables" param to be empty or an object, but given ${r}.`, { extensions: {
		http: {
			status: 400,
			headers: { Allow: "GET, POST" }
		},
		code: "BAD_REQUEST"
	} });
	let i = yd(e.extensions);
	if (![
		"object",
		"null",
		"undefined"
	].includes(i)) throw J(`Expected "extensions" param to be empty or an object, but given ${i}.`, { extensions: {
		http: {
			status: 400,
			headers: { Allow: "GET, POST" }
		},
		code: "BAD_REQUEST"
	} });
	return e;
}
function vd(e) {
	return { onParams({ params: t }) {
		_d(t, e);
	} };
}
function yd(e) {
	return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function bd(e) {
	return yd(e) === "object";
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-validation/use-check-method-for-graphql.js
function xd(e) {
	return e === "GET" || e === "POST";
}
function Sd() {
	return { onRequestParse({ request: e }) {
		if (!xd(e.method)) throw J("GraphQL only supports GET and POST requests.", { extensions: {
			http: {
				status: 405,
				headers: { Allow: "GET, POST" }
			},
			code: "BAD_REQUEST"
		} });
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-validation/use-http-validation-error.js
function Cd() {
	return { onValidate() {
		return ({ valid: e, result: t }) => {
			if (!e) for (let e of t) e.extensions ||= {}, e.extensions.code ||= "GRAPHQL_VALIDATION_FAILED", e.extensions.http ||= {}, e.extensions.http.spec = e.extensions.http.spec == null ? !0 : e.extensions.http.spec, e.extensions.http.status ||= 400;
		};
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-validation/use-limit-batching.js
function wd(e) {
	return { onRequestParse() {
		return { onRequestParseDone({ requestParserResult: t }) {
			if (Array.isArray(t)) {
				if (!e) throw J("Batching is not supported.", { extensions: {
					http: { status: 400 },
					code: "BAD_REQUEST"
				} });
				if (t.length > e) throw J(`Batching is limited to ${e} operations per request.`, { extensions: {
					http: { status: 413 },
					code: "BAD_REQUEST"
				} });
			}
		} };
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/request-validation/use-prevent-mutation-via-get.js
function Td(e, t, n) {
	let r = t ? Ha(t, n) ?? void 0 : void 0;
	if (!r) throw J("Could not determine what operation to execute.", { extensions: {
		code: "OPERATION_RESOLUTION_FAILURE",
		http: { status: 400 }
	} });
	if (r.operation === "mutation" && e === "GET") throw J("Can only perform a mutation operation from a POST request.", { extensions: {
		http: {
			status: 405,
			headers: { Allow: "POST" }
		},
		code: "BAD_REQUEST"
	} });
}
function Ed() {
	return { onParse() {
		return ({ result: e, context: { request: t, params: { operationName: n } = {} } }) => {
			if (t) if (e instanceof Error) {
				if (e instanceof M) {
					let t = e.extensions ||= {};
					t.code ||= "GRAPHQL_PARSE_FAILED";
					let n = t.http ||= {};
					n.spec ||= !0, n.status ||= 400;
				}
			} else Td(t.method, e, n);
		};
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/use-health-check.js
function Dd({ id: e = Date.now().toString(), logger: t = console, endpoint: n = "/health" } = {}) {
	return { onRequest({ endResponse: r, fetchAPI: i, request: a }) {
		a.url.endsWith(n) && (t.debug("Responding Health Check"), r(new i.Response(null, {
			status: 200,
			headers: { "x-yoga-id": e }
		})));
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/lru-cache@10.4.3/node_modules/lru-cache/dist/esm/index.js
var Od = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, kd = /* @__PURE__ */ new Set(), Ad = typeof process == "object" && process ? process : {}, jd = (e, t, n, r) => {
	typeof Ad.emitWarning == "function" ? Ad.emitWarning(e, t, n, r) : console.error(`[${n}] ${t}: ${e}`);
}, Md = globalThis.AbortController, Nd = globalThis.AbortSignal;
/* c8 ignore start */
if (Md === void 0) {
	Nd = class {
		onabort;
		_onabort = [];
		reason;
		aborted = !1;
		addEventListener(e, t) {
			this._onabort.push(t);
		}
	}, Md = class {
		constructor() {
			t();
		}
		signal = new Nd();
		abort(e) {
			if (!this.signal.aborted) {
				this.signal.reason = e, this.signal.aborted = !0;
				for (let t of this.signal._onabort) t(e);
				this.signal.onabort?.(e);
			}
		}
	};
	let e = Ad.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1", t = () => {
		e && (e = !1, jd("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t));
	};
}
/* c8 ignore stop */
var Pd = (e) => !kd.has(e), Fd = (e) => e && e === Math.floor(e) && e > 0 && isFinite(e), Id = (e) => Fd(e) ? e <= 2 ** 8 ? Uint8Array : e <= 2 ** 16 ? Uint16Array : e <= 2 ** 32 ? Uint32Array : e <= 2 ** 53 - 1 ? Ld : null : null, Ld = class extends Array {
	constructor(e) {
		super(e), this.fill(0);
	}
}, Rd = class e {
	heap;
	length;
	static #e = !1;
	static create(t) {
		let n = Id(t);
		if (!n) return [];
		e.#e = !0;
		let r = new e(t, n);
		return e.#e = !1, r;
	}
	constructor(t, n) {
		/* c8 ignore start */
		if (!e.#e) throw TypeError("instantiate Stack using Stack.create(n)");
		this.heap = new n(t), this.length = 0;
	}
	push(e) {
		this.heap[this.length++] = e;
	}
	pop() {
		return this.heap[--this.length];
	}
}, zd = class e {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	ttl;
	ttlResolution;
	ttlAutopurge;
	updateAgeOnGet;
	updateAgeOnHas;
	allowStale;
	noDisposeOnSet;
	noUpdateTTL;
	maxEntrySize;
	sizeCalculation;
	noDeleteOnFetchRejection;
	noDeleteOnStaleGet;
	allowStaleOnFetchAbort;
	allowStaleOnFetchRejection;
	ignoreFetchAbort;
	#o;
	#s;
	#c;
	#l;
	#u;
	#d;
	#f;
	#p;
	#m;
	#h;
	#g;
	#_;
	#v;
	#y;
	#b;
	#x;
	#S;
	static unsafeExposeInternals(e) {
		return {
			starts: e.#v,
			ttls: e.#y,
			sizes: e.#_,
			keyMap: e.#c,
			keyList: e.#l,
			valList: e.#u,
			next: e.#d,
			prev: e.#f,
			get head() {
				return e.#p;
			},
			get tail() {
				return e.#m;
			},
			free: e.#h,
			isBackgroundFetch: (t) => e.#L(t),
			backgroundFetch: (t, n, r, i) => e.#I(t, n, r, i),
			moveToTail: (t) => e.#z(t),
			indexes: (t) => e.#M(t),
			rindexes: (t) => e.#N(t),
			isStale: (t) => e.#D(t)
		};
	}
	get max() {
		return this.#e;
	}
	get maxSize() {
		return this.#t;
	}
	get calculatedSize() {
		return this.#s;
	}
	get size() {
		return this.#o;
	}
	get fetchMethod() {
		return this.#i;
	}
	get memoMethod() {
		return this.#a;
	}
	get dispose() {
		return this.#n;
	}
	get disposeAfter() {
		return this.#r;
	}
	constructor(t) {
		let { max: n = 0, ttl: r, ttlResolution: i = 1, ttlAutopurge: a, updateAgeOnGet: o, updateAgeOnHas: s, allowStale: c, dispose: l, disposeAfter: u, noDisposeOnSet: d, noUpdateTTL: f, maxSize: p = 0, maxEntrySize: m = 0, sizeCalculation: h, fetchMethod: g, memoMethod: _, noDeleteOnFetchRejection: v, noDeleteOnStaleGet: y, allowStaleOnFetchRejection: b, allowStaleOnFetchAbort: x, ignoreFetchAbort: S } = t;
		if (n !== 0 && !Fd(n)) throw TypeError("max option must be a nonnegative integer");
		let C = n ? Id(n) : Array;
		if (!C) throw Error("invalid max value: " + n);
		if (this.#e = n, this.#t = p, this.maxEntrySize = m || this.#t, this.sizeCalculation = h, this.sizeCalculation) {
			if (!this.#t && !this.maxEntrySize) throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
			if (typeof this.sizeCalculation != "function") throw TypeError("sizeCalculation set to non-function");
		}
		if (_ !== void 0 && typeof _ != "function") throw TypeError("memoMethod must be a function if defined");
		if (this.#a = _, g !== void 0 && typeof g != "function") throw TypeError("fetchMethod must be a function if specified");
		if (this.#i = g, this.#x = !!g, this.#c = /* @__PURE__ */ new Map(), this.#l = Array(n).fill(void 0), this.#u = Array(n).fill(void 0), this.#d = new C(n), this.#f = new C(n), this.#p = 0, this.#m = 0, this.#h = Rd.create(n), this.#o = 0, this.#s = 0, typeof l == "function" && (this.#n = l), typeof u == "function" ? (this.#r = u, this.#g = []) : (this.#r = void 0, this.#g = void 0), this.#b = !!this.#n, this.#S = !!this.#r, this.noDisposeOnSet = !!d, this.noUpdateTTL = !!f, this.noDeleteOnFetchRejection = !!v, this.allowStaleOnFetchRejection = !!b, this.allowStaleOnFetchAbort = !!x, this.ignoreFetchAbort = !!S, this.maxEntrySize !== 0) {
			if (this.#t !== 0 && !Fd(this.#t)) throw TypeError("maxSize must be a positive integer if specified");
			if (!Fd(this.maxEntrySize)) throw TypeError("maxEntrySize must be a positive integer if specified");
			this.#O();
		}
		if (this.allowStale = !!c, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!s, this.ttlResolution = Fd(i) || i === 0 ? i : 1, this.ttlAutopurge = !!a, this.ttl = r || 0, this.ttl) {
			if (!Fd(this.ttl)) throw TypeError("ttl must be a positive integer if specified");
			this.#C();
		}
		if (this.#e === 0 && this.ttl === 0 && this.#t === 0) throw TypeError("At least one of max, maxSize, or ttl is required");
		if (!this.ttlAutopurge && !this.#e && !this.#t) {
			let t = "LRU_CACHE_UNBOUNDED";
			Pd(t) && (kd.add(t), jd("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", t, e));
		}
	}
	getRemainingTTL(e) {
		return this.#c.has(e) ? Infinity : 0;
	}
	#C() {
		let e = new Ld(this.#e), t = new Ld(this.#e);
		this.#y = e, this.#v = t, this.#E = (n, r, i = Od.now()) => {
			if (t[n] = r === 0 ? 0 : i, e[n] = r, r !== 0 && this.ttlAutopurge) {
				let e = setTimeout(() => {
					this.#D(n) && this.#B(this.#l[n], "expire");
				}, r + 1);
				/* c8 ignore start */
				e.unref && e.unref();
			}
		}, this.#w = (n) => {
			t[n] = e[n] === 0 ? 0 : Od.now();
		}, this.#T = (i, a) => {
			if (e[a]) {
				let o = e[a], s = t[a];
				/* c8 ignore next */
				if (!o || !s) return;
				i.ttl = o, i.start = s, i.now = n || r(), i.remainingTTL = o - (i.now - s);
			}
		};
		let n = 0, r = () => {
			let e = Od.now();
			if (this.ttlResolution > 0) {
				n = e;
				let t = setTimeout(() => n = 0, this.ttlResolution);
				/* c8 ignore start */
				t.unref && t.unref();
			}
			return e;
		};
		this.getRemainingTTL = (i) => {
			let a = this.#c.get(i);
			if (a === void 0) return 0;
			let o = e[a], s = t[a];
			return !o || !s ? Infinity : o - ((n || r()) - s);
		}, this.#D = (i) => {
			let a = t[i], o = e[i];
			return !!o && !!a && (n || r()) - a > o;
		};
	}
	#w = () => {};
	#T = () => {};
	#E = () => {};
	/* c8 ignore stop */
	#D = () => !1;
	#O() {
		let e = new Ld(this.#e);
		this.#s = 0, this.#_ = e, this.#k = (t) => {
			this.#s -= e[t], e[t] = 0;
		}, this.#j = (e, t, n, r) => {
			if (this.#L(t)) return 0;
			if (!Fd(n)) if (r) {
				if (typeof r != "function") throw TypeError("sizeCalculation must be a function");
				if (n = r(t, e), !Fd(n)) throw TypeError("sizeCalculation return invalid (expect positive integer)");
			} else throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
			return n;
		}, this.#A = (t, n, r) => {
			if (e[t] = n, this.#t) {
				let n = this.#t - e[t];
				for (; this.#s > n;) this.#F(!0);
			}
			this.#s += e[t], r && (r.entrySize = n, r.totalCalculatedSize = this.#s);
		};
	}
	#k = (e) => {};
	#A = (e, t, n) => {};
	#j = (e, t, n, r) => {
		if (n || r) throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
		return 0;
	};
	*#M({ allowStale: e = this.allowStale } = {}) {
		if (this.#o) for (let t = this.#m; !(!this.#P(t) || ((e || !this.#D(t)) && (yield t), t === this.#p));) t = this.#f[t];
	}
	*#N({ allowStale: e = this.allowStale } = {}) {
		if (this.#o) for (let t = this.#p; !(!this.#P(t) || ((e || !this.#D(t)) && (yield t), t === this.#m));) t = this.#d[t];
	}
	#P(e) {
		return e !== void 0 && this.#c.get(this.#l[e]) === e;
	}
	*entries() {
		for (let e of this.#M()) this.#u[e] !== void 0 && this.#l[e] !== void 0 && !this.#L(this.#u[e]) && (yield [this.#l[e], this.#u[e]]);
	}
	*rentries() {
		for (let e of this.#N()) this.#u[e] !== void 0 && this.#l[e] !== void 0 && !this.#L(this.#u[e]) && (yield [this.#l[e], this.#u[e]]);
	}
	*keys() {
		for (let e of this.#M()) {
			let t = this.#l[e];
			t !== void 0 && !this.#L(this.#u[e]) && (yield t);
		}
	}
	*rkeys() {
		for (let e of this.#N()) {
			let t = this.#l[e];
			t !== void 0 && !this.#L(this.#u[e]) && (yield t);
		}
	}
	*values() {
		for (let e of this.#M()) this.#u[e] !== void 0 && !this.#L(this.#u[e]) && (yield this.#u[e]);
	}
	*rvalues() {
		for (let e of this.#N()) this.#u[e] !== void 0 && !this.#L(this.#u[e]) && (yield this.#u[e]);
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	[Symbol.toStringTag] = "LRUCache";
	find(e, t = {}) {
		for (let n of this.#M()) {
			let r = this.#u[n], i = this.#L(r) ? r.__staleWhileFetching : r;
			if (i !== void 0 && e(i, this.#l[n], this)) return this.get(this.#l[n], t);
		}
	}
	forEach(e, t = this) {
		for (let n of this.#M()) {
			let r = this.#u[n], i = this.#L(r) ? r.__staleWhileFetching : r;
			i !== void 0 && e.call(t, i, this.#l[n], this);
		}
	}
	rforEach(e, t = this) {
		for (let n of this.#N()) {
			let r = this.#u[n], i = this.#L(r) ? r.__staleWhileFetching : r;
			i !== void 0 && e.call(t, i, this.#l[n], this);
		}
	}
	purgeStale() {
		let e = !1;
		for (let t of this.#N({ allowStale: !0 })) this.#D(t) && (this.#B(this.#l[t], "expire"), e = !0);
		return e;
	}
	info(e) {
		let t = this.#c.get(e);
		if (t === void 0) return;
		let n = this.#u[t], r = this.#L(n) ? n.__staleWhileFetching : n;
		if (r === void 0) return;
		let i = { value: r };
		if (this.#y && this.#v) {
			let e = this.#y[t], n = this.#v[t];
			e && n && (i.ttl = e - (Od.now() - n), i.start = Date.now());
		}
		return this.#_ && (i.size = this.#_[t]), i;
	}
	dump() {
		let e = [];
		for (let t of this.#M({ allowStale: !0 })) {
			let n = this.#l[t], r = this.#u[t], i = this.#L(r) ? r.__staleWhileFetching : r;
			if (i === void 0 || n === void 0) continue;
			let a = { value: i };
			if (this.#y && this.#v) {
				a.ttl = this.#y[t];
				let e = Od.now() - this.#v[t];
				a.start = Math.floor(Date.now() - e);
			}
			this.#_ && (a.size = this.#_[t]), e.unshift([n, a]);
		}
		return e;
	}
	load(e) {
		this.clear();
		for (let [t, n] of e) {
			if (n.start) {
				let e = Date.now() - n.start;
				n.start = Od.now() - e;
			}
			this.set(t, n.value, n);
		}
	}
	set(e, t, n = {}) {
		if (t === void 0) return this.delete(e), this;
		let { ttl: r = this.ttl, start: i, noDisposeOnSet: a = this.noDisposeOnSet, sizeCalculation: o = this.sizeCalculation, status: s } = n, { noUpdateTTL: c = this.noUpdateTTL } = n, l = this.#j(e, t, n.size || 0, o);
		if (this.maxEntrySize && l > this.maxEntrySize) return s && (s.set = "miss", s.maxEntrySizeExceeded = !0), this.#B(e, "set"), this;
		let u = this.#o === 0 ? void 0 : this.#c.get(e);
		if (u === void 0) u = this.#o === 0 ? this.#m : this.#h.length === 0 ? this.#o === this.#e ? this.#F(!1) : this.#o : this.#h.pop(), this.#l[u] = e, this.#u[u] = t, this.#c.set(e, u), this.#d[this.#m] = u, this.#f[u] = this.#m, this.#m = u, this.#o++, this.#A(u, l, s), s && (s.set = "add"), c = !1;
		else {
			this.#z(u);
			let n = this.#u[u];
			if (t !== n) {
				if (this.#x && this.#L(n)) {
					n.__abortController.abort(/* @__PURE__ */ Error("replaced"));
					let { __staleWhileFetching: t } = n;
					t !== void 0 && !a && (this.#b && this.#n?.(t, e, "set"), this.#S && this.#g?.push([
						t,
						e,
						"set"
					]));
				} else a || (this.#b && this.#n?.(n, e, "set"), this.#S && this.#g?.push([
					n,
					e,
					"set"
				]));
				if (this.#k(u), this.#A(u, l, s), this.#u[u] = t, s) {
					s.set = "replace";
					let e = n && this.#L(n) ? n.__staleWhileFetching : n;
					e !== void 0 && (s.oldValue = e);
				}
			} else s && (s.set = "update");
		}
		if (r !== 0 && !this.#y && this.#C(), this.#y && (c || this.#E(u, r, i), s && this.#T(s, u)), !a && this.#S && this.#g) {
			let e = this.#g, t;
			for (; t = e?.shift();) this.#r?.(...t);
		}
		return this;
	}
	pop() {
		try {
			for (; this.#o;) {
				let e = this.#u[this.#p];
				if (this.#F(!0), this.#L(e)) {
					if (e.__staleWhileFetching) return e.__staleWhileFetching;
				} else if (e !== void 0) return e;
			}
		} finally {
			if (this.#S && this.#g) {
				let e = this.#g, t;
				for (; t = e?.shift();) this.#r?.(...t);
			}
		}
	}
	#F(e) {
		let t = this.#p, n = this.#l[t], r = this.#u[t];
		return this.#x && this.#L(r) ? r.__abortController.abort(/* @__PURE__ */ Error("evicted")) : (this.#b || this.#S) && (this.#b && this.#n?.(r, n, "evict"), this.#S && this.#g?.push([
			r,
			n,
			"evict"
		])), this.#k(t), e && (this.#l[t] = void 0, this.#u[t] = void 0, this.#h.push(t)), this.#o === 1 ? (this.#p = this.#m = 0, this.#h.length = 0) : this.#p = this.#d[t], this.#c.delete(n), this.#o--, t;
	}
	has(e, t = {}) {
		let { updateAgeOnHas: n = this.updateAgeOnHas, status: r } = t, i = this.#c.get(e);
		if (i !== void 0) {
			let e = this.#u[i];
			if (this.#L(e) && e.__staleWhileFetching === void 0) return !1;
			if (this.#D(i)) r && (r.has = "stale", this.#T(r, i));
			else return n && this.#w(i), r && (r.has = "hit", this.#T(r, i)), !0;
		} else r && (r.has = "miss");
		return !1;
	}
	peek(e, t = {}) {
		let { allowStale: n = this.allowStale } = t, r = this.#c.get(e);
		if (r === void 0 || !n && this.#D(r)) return;
		let i = this.#u[r];
		return this.#L(i) ? i.__staleWhileFetching : i;
	}
	#I(e, t, n, r) {
		let i = t === void 0 ? void 0 : this.#u[t];
		if (this.#L(i)) return i;
		let a = new Md(), { signal: o } = n;
		o?.addEventListener("abort", () => a.abort(o.reason), { signal: a.signal });
		let s = {
			signal: a.signal,
			options: n,
			context: r
		}, c = (r, i = !1) => {
			let { aborted: o } = a.signal, c = n.ignoreFetchAbort && r !== void 0;
			if (n.status && (o && !i ? (n.status.fetchAborted = !0, n.status.fetchError = a.signal.reason, c && (n.status.fetchAbortIgnored = !0)) : n.status.fetchResolved = !0), o && !c && !i) return u(a.signal.reason);
			let l = f;
			return this.#u[t] === f && (r === void 0 ? l.__staleWhileFetching ? this.#u[t] = l.__staleWhileFetching : this.#B(e, "fetch") : (n.status && (n.status.fetchUpdated = !0), this.set(e, r, s.options))), r;
		}, l = (e) => (n.status && (n.status.fetchRejected = !0, n.status.fetchError = e), u(e)), u = (r) => {
			let { aborted: i } = a.signal, o = i && n.allowStaleOnFetchAbort, s = o || n.allowStaleOnFetchRejection, c = s || n.noDeleteOnFetchRejection, l = f;
			if (this.#u[t] === f && (!c || l.__staleWhileFetching === void 0 ? this.#B(e, "fetch") : o || (this.#u[t] = l.__staleWhileFetching)), s) return n.status && l.__staleWhileFetching !== void 0 && (n.status.returnedStale = !0), l.__staleWhileFetching;
			if (l.__returned === l) throw r;
		}, d = (t, r) => {
			let o = this.#i?.(e, i, s);
			o && o instanceof Promise && o.then((e) => t(e === void 0 ? void 0 : e), r), a.signal.addEventListener("abort", () => {
				(!n.ignoreFetchAbort || n.allowStaleOnFetchAbort) && (t(void 0), n.allowStaleOnFetchAbort && (t = (e) => c(e, !0)));
			});
		};
		n.status && (n.status.fetchDispatched = !0);
		let f = new Promise(d).then(c, l), p = Object.assign(f, {
			__abortController: a,
			__staleWhileFetching: i,
			__returned: void 0
		});
		return t === void 0 ? (this.set(e, p, {
			...s.options,
			status: void 0
		}), t = this.#c.get(e)) : this.#u[t] = p, p;
	}
	#L(e) {
		if (!this.#x) return !1;
		let t = e;
		return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Md;
	}
	async fetch(e, t = {}) {
		let { allowStale: n = this.allowStale, updateAgeOnGet: r = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, ttl: a = this.ttl, noDisposeOnSet: o = this.noDisposeOnSet, size: s = 0, sizeCalculation: c = this.sizeCalculation, noUpdateTTL: l = this.noUpdateTTL, noDeleteOnFetchRejection: u = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection, ignoreFetchAbort: f = this.ignoreFetchAbort, allowStaleOnFetchAbort: p = this.allowStaleOnFetchAbort, context: m, forceRefresh: h = !1, status: g, signal: _ } = t;
		if (!this.#x) return g && (g.fetch = "get"), this.get(e, {
			allowStale: n,
			updateAgeOnGet: r,
			noDeleteOnStaleGet: i,
			status: g
		});
		let v = {
			allowStale: n,
			updateAgeOnGet: r,
			noDeleteOnStaleGet: i,
			ttl: a,
			noDisposeOnSet: o,
			size: s,
			sizeCalculation: c,
			noUpdateTTL: l,
			noDeleteOnFetchRejection: u,
			allowStaleOnFetchRejection: d,
			allowStaleOnFetchAbort: p,
			ignoreFetchAbort: f,
			status: g,
			signal: _
		}, y = this.#c.get(e);
		if (y === void 0) {
			g && (g.fetch = "miss");
			let t = this.#I(e, y, v, m);
			return t.__returned = t;
		} else {
			let t = this.#u[y];
			if (this.#L(t)) {
				let e = n && t.__staleWhileFetching !== void 0;
				return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t;
			}
			let i = this.#D(y);
			if (!h && !i) return g && (g.fetch = "hit"), this.#z(y), r && this.#w(y), g && this.#T(g, y), t;
			let a = this.#I(e, y, v, m), o = a.__staleWhileFetching !== void 0 && n;
			return g && (g.fetch = i ? "stale" : "refresh", o && i && (g.returnedStale = !0)), o ? a.__staleWhileFetching : a.__returned = a;
		}
	}
	async forceFetch(e, t = {}) {
		let n = await this.fetch(e, t);
		if (n === void 0) throw Error("fetch() returned undefined");
		return n;
	}
	memo(e, t = {}) {
		let n = this.#a;
		if (!n) throw Error("no memoMethod provided to constructor");
		let { context: r, forceRefresh: i, ...a } = t, o = this.get(e, a);
		if (!i && o !== void 0) return o;
		let s = n(e, o, {
			options: a,
			context: r
		});
		return this.set(e, s, a), s;
	}
	get(e, t = {}) {
		let { allowStale: n = this.allowStale, updateAgeOnGet: r = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, status: a } = t, o = this.#c.get(e);
		if (o !== void 0) {
			let t = this.#u[o], s = this.#L(t);
			return a && this.#T(a, o), this.#D(o) ? (a && (a.get = "stale"), s ? (a && n && t.__staleWhileFetching !== void 0 && (a.returnedStale = !0), n ? t.__staleWhileFetching : void 0) : (i || this.#B(e, "expire"), a && n && (a.returnedStale = !0), n ? t : void 0)) : (a && (a.get = "hit"), s ? t.__staleWhileFetching : (this.#z(o), r && this.#w(o), t));
		} else a && (a.get = "miss");
	}
	#R(e, t) {
		this.#f[t] = e, this.#d[e] = t;
	}
	#z(e) {
		e !== this.#m && (e === this.#p ? this.#p = this.#d[e] : this.#R(this.#f[e], this.#d[e]), this.#R(this.#m, e), this.#m = e);
	}
	delete(e) {
		return this.#B(e, "delete");
	}
	#B(e, t) {
		let n = !1;
		if (this.#o !== 0) {
			let r = this.#c.get(e);
			if (r !== void 0) if (n = !0, this.#o === 1) this.#V(t);
			else {
				this.#k(r);
				let n = this.#u[r];
				if (this.#L(n) ? n.__abortController.abort(/* @__PURE__ */ Error("deleted")) : (this.#b || this.#S) && (this.#b && this.#n?.(n, e, t), this.#S && this.#g?.push([
					n,
					e,
					t
				])), this.#c.delete(e), this.#l[r] = void 0, this.#u[r] = void 0, r === this.#m) this.#m = this.#f[r];
				else if (r === this.#p) this.#p = this.#d[r];
				else {
					let e = this.#f[r];
					this.#d[e] = this.#d[r];
					let t = this.#d[r];
					this.#f[t] = this.#f[r];
				}
				this.#o--, this.#h.push(r);
			}
		}
		if (this.#S && this.#g?.length) {
			let e = this.#g, t;
			for (; t = e?.shift();) this.#r?.(...t);
		}
		return n;
	}
	clear() {
		return this.#V("delete");
	}
	#V(e) {
		for (let t of this.#N({ allowStale: !0 })) {
			let n = this.#u[t];
			if (this.#L(n)) n.__abortController.abort(/* @__PURE__ */ Error("deleted"));
			else {
				let r = this.#l[t];
				this.#b && this.#n?.(n, r, e), this.#S && this.#g?.push([
					n,
					r,
					e
				]);
			}
		}
		if (this.#c.clear(), this.#u.fill(void 0), this.#l.fill(void 0), this.#y && this.#v && (this.#y.fill(0), this.#v.fill(0)), this.#_ && this.#_.fill(0), this.#p = 0, this.#m = 0, this.#h.length = 0, this.#s = 0, this.#o = 0, this.#S && this.#g) {
			let e = this.#g, t;
			for (; t = e?.shift();) this.#r?.(...t);
		}
	}
}, Bd = 1024, Vd = 36e5;
function Hd({ max: e = Bd, ttl: t = Vd } = {}) {
	return new zd({
		max: e,
		ttl: t
	});
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/use-parser-and-validation-cache.js
function Ud({ documentCache: e = Hd(), errorCache: t = Hd(), validationCache: n = !0 }) {
	let r = Hd();
	return {
		onParse({ params: n, setParsedDocument: r }) {
			let i = n.source.toString(), a = e.get(i);
			if (a) {
				r(a);
				return;
			}
			let o = t.get(i);
			if (o) throw o;
			return ({ result: n }) => {
				n != null && (n instanceof Error ? t.set(i, n) : e.set(i, n));
			};
		},
		onValidate({ params: { schema: e, documentAST: t, rules: i }, setResult: a }) {
			if (e != null && n !== !1) {
				let n = i?.map((e) => e.name).join(",") || "", o = r.get(n);
				o || (o = /* @__PURE__ */ new WeakMap(), r.set(n, o));
				let s = o.get(e);
				s || (s = /* @__PURE__ */ new WeakMap(), o.set(e, s));
				let c = s.get(t);
				if (c) {
					a(c);
					return;
				}
				return ({ result: e }) => {
					e != null && s?.set(t, e);
				};
			}
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/use-request-parser.js
var Wd = () => !0;
function Gd(e) {
	let t = e.match || Wd;
	return { onRequestParse({ request: n, setRequestParser: r }) {
		t(n) && r(e.parse);
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/result-processor/accept.js
function Kd(e) {
	let t = (e.headers.get("accept") || "*/*").replace(/\s/g, "").toLowerCase().split(","), n = [];
	for (let e of t) {
		let [t, ...r] = e.split(";");
		t !== void 0 && (r?.find((e) => e.includes("charset=")) || "charset=utf-8") === "charset=utf-8" && n.push(t);
	}
	return n.reverse();
}
function qd(e, t) {
	let [n, r] = e.split("/"), [i, a] = t.split("/");
	return (i === "*" || i === n) && (a === "*" || a === r);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/result-processor/stringify.js
function Jd(e) {
	if (Array.isArray(e)) return `[${e.map((e) => {
		let t = Yd(e);
		return (e.stringify || JSON.stringify)(t);
	}).join(",")}]`;
	let t = Yd(e);
	return (e.stringify || JSON.stringify)(t);
}
function Yd(e) {
	if (e.errors?.length || e.extensions?.http) {
		let t = { ...e };
		if (t.errors &&= t.errors.map(Xd), t.extensions) {
			let { http: n, ...r } = e.extensions;
			t.extensions = Object.keys(r).length ? r : void 0;
		}
		return t;
	}
	return e;
}
function Xd(e) {
	if (Ku(e)) {
		let { http: t, unexpected: n, ...r } = ("toJSON" in e && typeof e.toJSON == "function" ? e.toJSON() : Object(e)).extensions || {};
		return J(e.message, {
			nodes: e.nodes,
			source: e.source,
			positions: e.positions,
			path: e.path,
			originalError: Xd(e.originalError || void 0),
			extensions: Object.keys(r).length ? r : void 0,
			coordinate: Hu(e)
		});
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/result-processor/multipart.js
function Zd(e, t) {
	let n = Xu(e, {
		Connection: "keep-alive",
		"Content-Type": "multipart/mixed; boundary=\"-\"",
		"Transfer-Encoding": "chunked"
	}), r, i = new t.TextEncoder(), a = new t.ReadableStream({
		start(t) {
			if (O(e)) r = e[Symbol.asyncIterator]();
			else {
				let t = !1;
				r = { next: () => t ? l({
					done: !0,
					value: null
				}) : (t = !0, l({
					done: !1,
					value: e
				})) };
			}
			t.enqueue(i.encode("\r\n")), t.enqueue(i.encode("---"));
		},
		pull(e) {
			return c(() => r.next(), ({ done: t, value: n }) => {
				if (n != null) {
					e.enqueue(i.encode("\r\n")), e.enqueue(i.encode("Content-Type: application/json; charset=utf-8")), e.enqueue(i.encode("\r\n"));
					let t = Jd(n), r = i.encode(t);
					e.enqueue(i.encode("Content-Length: " + r.byteLength)), e.enqueue(i.encode("\r\n")), e.enqueue(i.encode("\r\n")), e.enqueue(r), e.enqueue(i.encode("\r\n")), e.enqueue(i.encode("---"));
				}
				t && (e.enqueue(i.encode("--\r\n")), e.close());
			}, (t) => {
				e.error(t);
			});
		},
		cancel(e) {
			if (r.return) return c(() => r.return?.(e), () => {});
		}
	});
	return new t.Response(a, n);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/result-processor/regular.js
function Qd(e, t, n) {
	if (Uu(e)) return new t.Response(null, {
		status: 406,
		statusText: "Not Acceptable",
		headers: { accept: "application/json; charset=utf-8, application/graphql-response+json; charset=utf-8" }
	});
	let r = Xu(e, { "Content-Type": n + "; charset=utf-8" }, n === "application/json" && !Array.isArray(e) && Zu(e.errors) && e.errors.some((e) => !e.extensions?.originalError || Ku(e.extensions.originalError))), i = Jd(e);
	return new t.Response(i, r);
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/result-processor/sse.js
function $d() {
	return function(e, t) {
		let n = 12e3;
		globalThis.process?.env?.NODE_ENV === "test" && (n = 300);
		let r = Xu(e, {
			"Content-Type": "text/event-stream",
			Connection: "keep-alive",
			"Cache-Control": "no-cache",
			"Content-Encoding": "none"
		}, !0), i, a, o = new t.TextEncoder(), s = new t.ReadableStream({
			start(t) {
				if (t.enqueue(o.encode(":\n\n")), a = setInterval(() => {
					if (!t.desiredSize) {
						clearInterval(a);
						return;
					}
					t.enqueue(o.encode(":\n\n"));
				}, n), O(e)) i = e[Symbol.asyncIterator]();
				else {
					let t = !1;
					i = { next: () => t ? l({
						done: !0,
						value: null
					}) : (t = !0, l({
						done: !1,
						value: e
					})) };
				}
			},
			pull(e) {
				return c(() => i.next(), (t) => {
					if (t.value != null) {
						e.enqueue(o.encode("event: next\n"));
						let n = Jd(t.value);
						e.enqueue(o.encode(`data: ${n}\n\n`));
					}
					t.done && (e.enqueue(o.encode("event: complete\n")), e.enqueue(o.encode("data:\n\n")), clearInterval(a), e.close());
				}, (t) => {
					e.error(t);
				});
			},
			cancel(e) {
				if (clearInterval(a), i.return) return c(() => i.return?.(e), () => {});
			}
		});
		return new t.Response(s, r);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/plugins/use-result-processor.js
var ef = {
	mediaTypes: ["multipart/mixed"],
	asyncIterables: !0,
	processResult: Zd
};
function tf() {
	return {
		mediaTypes: ["text/event-stream"],
		asyncIterables: !0,
		processResult: $d()
	};
}
var nf = {
	mediaTypes: ["application/graphql-response+json", "application/json"],
	asyncIterables: !1,
	processResult: Qd
};
function rf() {
	let e = /* @__PURE__ */ new WeakMap(), t = tf(), n = [
		t,
		ef,
		nf
	], r = [t, nf];
	return {
		onSubscribe({ args: { contextValue: t } }) {
			t.request && e.set(t.request, !0);
		},
		onResultProcess({ request: t, result: i, acceptableMediaTypes: a, setResultProcessor: o }) {
			let s = e.get(t) ? r : n, c = Kd(t), l = O(i);
			for (let e of s) for (let t of c) if (!(l && !e.asyncIterables)) for (let n of e.mediaTypes) a.push(n), qd(n, t) && o(e.processResult, n);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/landing-page-html.js
var af = "<!doctype html><html lang=en><head><meta charset=utf-8><title>Welcome to GraphQL Yoga</title><link rel=icon href=https://raw.githubusercontent.com/graphql-hive/graphql-yoga/refs/heads/main/website/src/app/favicon.ico><style>body,html{padding:0;margin:0;height:100%;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;color:#fff;background-color:#000}main>section.hero{display:flex;height:90vh;justify-content:center;align-items:center;flex-direction:column}.logo{display:flex;align-items:center}.buttons{margin-top:24px}h1{font-size:80px}h2{color:#888;max-width:50%;margin-top:0;text-align:center}a{color:#fff;text-decoration:none;margin-left:10px;margin-right:10px;font-weight:700;transition:color .3s ease;padding:4px;overflow:visible}a.graphiql:hover{color:rgba(255,0,255,.7)}a.docs:hover{color:rgba(28,200,238,.7)}a.tutorial:hover{color:rgba(125,85,245,.7)}svg{margin-right:24px}.not-what-your-looking-for{margin-top:5vh}.not-what-your-looking-for>*{margin-left:auto;margin-right:auto}.not-what-your-looking-for>p{text-align:center}.not-what-your-looking-for>h2{color:#464646}.not-what-your-looking-for>p{max-width:600px;line-height:1.3em}.not-what-your-looking-for>pre{max-width:300px}</style></head><body id=body><main><section class=hero><div class=logo><div><svg xmlns=http://www.w3.org/2000/svg viewBox=\"-0.41 0.445 472.812 499.811\" height=150><defs><linearGradient id=paint0_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse gradientTransform=\"matrix(8.139854, 0, 0, 8.139854, -130.346407, -113.25101)\"><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><linearGradient id=paint1_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse gradientTransform=\"matrix(8.139854, 0, 0, 8.139854, -130.346407, -113.25101)\"><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><linearGradient id=paint2_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse gradientTransform=\"matrix(8.139854, 0, 0, 8.139854, -130.346407, -113.25101)\"><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><linearGradient id=paint3_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><linearGradient id=paint4_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><linearGradient id=paint5_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><filter id=filter0_f_1677_11483 x=23 y=-25 width=100 height=100 filterUnits=userSpaceOnUse color-interpolation-filters=sRGB><feFlood flood-opacity=0 result=BackgroundImageFix /><feBlend mode=normal in=SourceGraphic in2=BackgroundImageFix result=shape /><feGaussianBlur stdDeviation=12 result=effect1_foregroundBlur_1677_11483 /></filter><filter id=filter1_f_1677_11483 x=-24 y=19 width=100 height=100 filterUnits=userSpaceOnUse color-interpolation-filters=sRGB><feFlood flood-opacity=0 result=BackgroundImageFix /><feBlend mode=normal in=SourceGraphic in2=BackgroundImageFix result=shape /><feGaussianBlur stdDeviation=12 result=effect1_foregroundBlur_1677_11483 /></filter><linearGradient id=paint6_linear_1677_11483 x1=30 y1=28 x2=66.1645 y2=44.4363 gradientUnits=userSpaceOnUse gradientTransform=\"matrix(8.139854, 0, 0, 8.139854, -130.346407, -113.25101)\"><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><filter id=filter2_f_1677_11483 x=-12 y=-44 width=100 height=100 filterUnits=userSpaceOnUse color-interpolation-filters=sRGB><feFlood flood-opacity=0 result=BackgroundImageFix /><feBlend mode=normal in=SourceGraphic in2=BackgroundImageFix result=shape /><feGaussianBlur stdDeviation=12 result=effect1_foregroundBlur_1677_11483 /></filter><filter id=filter3_f_1677_11483 x=13 y=19 width=100 height=100 filterUnits=userSpaceOnUse color-interpolation-filters=sRGB><feFlood flood-opacity=0 result=BackgroundImageFix /><feBlend mode=normal in=SourceGraphic in2=BackgroundImageFix result=shape /><feGaussianBlur stdDeviation=12 result=effect1_foregroundBlur_1677_11483 /></filter></defs><mask id=mask0_1677_11483 style=mask-type:alpha maskUnits=userSpaceOnUse x=16 y=14 width=58 height=62><path d=\"M21 25.3501C21.7279 25.3501 22.4195 25.5056 23.0433 25.7853L42.1439 14.8C43.0439 14.3 44.1439 14 45.1439 14C46.2439 14 47.2439 14.3 48.1439 14.8L64.5439 24.3C63.3439 25.1 62.4439 26.3 61.8439 27.7L45.9438 18.5C45.6439 18.3 45.344 18.3 45.0441 18.3C44.7441 18.3 44.4439 18.4 44.1439 18.5L25.8225 29.0251C25.9382 29.4471 26 29.8914 26 30.3501C26 33.1115 23.7614 35.3501 21 35.3501C18.2386 35.3501 16 33.1115 16 30.3501C16 27.5887 18.2386 25.3501 21 25.3501Z\" fill=url(#paint3_linear_1677_11483) /><path d=\"M67.2438 35.0329C65.3487 34.3219 64 32.4934 64 30.35C64 27.5886 66.2386 25.35 69 25.35C71.7614 25.35 74 27.5886 74 30.35C74 32.1825 73.0142 33.7848 71.5439 34.6554V55.2C71.5439 57.4 70.3439 59.4 68.5439 60.5L52.1439 69.9C52.1439 68.4 51.6438 66.9 50.7438 65.8L66.3439 56.8C66.9439 56.5 67.2438 55.9 67.2438 55.2V35.0329Z\" fill=url(#paint4_linear_1677_11483) /><path d=\"M49.8439 69.1055C49.9458 69.5034 50 69.9204 50 70.3501C50 73.1115 47.7614 75.3501 45 75.3501C42.5102 75.3501 40.4454 73.5302 40.0633 71.1481L21.8439 60.6C19.9439 59.5 18.8439 57.5 18.8439 55.3V36.8C19.5439 37 20.3439 37.2 21.0439 37.2C21.7439 37.2 22.4439 37.1 23.0439 36.9V55.3C23.0439 56 23.4438 56.6 23.9438 56.9L41.3263 66.9583C42.2398 65.9694 43.5476 65.3501 45 65.3501C47.3291 65.3501 49.2862 66.9426 49.8419 69.0981L49.8436 69.0997L49.8439 69.1055Z\" fill=url(#paint5_linear_1677_11483) /></mask><mask id=mask1_1677_11483 style=mask-type:alpha maskUnits=userSpaceOnUse x=30 y=28 width=30 height=30><path fill-rule=evenodd clip-rule=evenodd d=\"M49.3945 32.3945C49.3945 34.7088 47.5796 38.5469 45 38.5469C42.4271 38.5469 40.6055 34.7112 40.6055 32.3945C40.6055 29.9714 42.5769 28 45 28C47.4231 28 49.3945 29.9714 49.3945 32.3945ZM35.332 49.0433V48.2148C35.332 42.8117 37.8535 41.0004 39.8796 39.545L39.8801 39.5447C40.3928 39.1767 40.8604 38.8404 41.2488 38.4742C42.3293 39.6642 43.626 40.3047 45 40.3047C46.3752 40.3047 47.6725 39.6642 48.7529 38.4754C49.1408 38.841 49.6078 39.1773 50.1199 39.5447L50.1204 39.545C52.1465 41.0004 54.668 42.8117 54.668 48.2148V49.0433L53.8406 49.092C49.9848 49.3185 46.8646 46.9002 45 43.5777C43.1159 46.935 39.9847 49.318 36.1594 49.092L35.332 49.0433ZM58.1463 51.0747L58.1463 51.0746C57.0179 50.891 50.0128 49.7507 45.0007 55.693C40.0116 49.7553 33.1965 50.8592 31.9095 51.0677L31.9095 51.0677C31.7906 51.087 31.7189 51.0986 31.7002 51.0963C31.7005 51.0969 31.7011 51.1045 31.7023 51.1187C31.726 51.4003 31.9682 54.2745 34.0566 56.2422L30 58H60L55.8956 56.2422C57.8537 54.4764 58.1396 52.2685 58.2508 51.4092V51.4091C58.2697 51.2628 58.2836 51.1556 58.2998 51.0963C58.2881 51.0977 58.2356 51.0892 58.1463 51.0747ZM40.4836 50.104C42.3956 49.3212 43.6746 48.1737 45 46.61C46.332 48.1841 47.6159 49.3259 49.5164 50.104C49.5356 50.1425 49.5557 50.1805 49.5756 50.2182C49.5793 50.2253 49.583 50.2323 49.5867 50.2393C48.0911 50.8127 46.4264 51.825 45.0047 53.1444C43.5906 51.8221 41.9673 50.8196 40.4256 50.2153C40.4455 50.1784 40.4648 50.1415 40.4836 50.104Z\" fill=black /></mask><path d=\"M 40.59 93.095 C 46.517 93.095 52.14 94.365 57.22 96.635 L 212.7 7.22 C 220.025 3.149 228.978 0.706 237.12 0.706 C 246.073 0.706 254.213 3.149 261.54 7.22 L 395.032 84.547 C 385.264 91.059 377.939 100.827 373.055 112.224 L 243.631 37.338 C 241.19 35.71 238.747 35.71 236.305 35.71 C 233.863 35.71 231.42 36.523 228.978 37.338 L 79.84 123.009 C 80.786 126.443 81.29 130.058 81.29 133.793 C 81.29 156.269 63.065 174.493 40.59 174.493 C 18.116 174.493 -0.109 156.269 -0.109 133.793 C -0.109 111.32 18.116 93.095 40.59 93.095 Z\" fill=url(#paint0_linear_1677_11483) /><path d=\"M 417.01 171.913 C 401.585 166.126 390.603 151.238 390.603 133.793 C 390.603 111.32 408.83 93.095 431.303 93.095 C 453.777 93.095 472.001 111.32 472.001 133.793 C 472.001 148.706 463.976 161.755 452.011 168.835 L 452.011 336.07 C 452.011 353.977 442.243 370.258 427.591 379.21 L 294.098 455.726 C 294.098 443.516 290.029 431.306 282.703 422.353 L 409.683 349.093 C 414.568 346.651 417.01 341.767 417.01 336.07 L 417.01 171.913 Z\" fill=url(#paint1_linear_1677_11483) /><path d=\"M 275.376 449.253 C 276.206 452.495 276.646 455.889 276.646 459.389 C 276.646 481.863 258.422 500.087 235.947 500.087 C 215.679 500.087 198.87 485.272 195.761 465.883 L 47.46 380.025 C 31.995 371.071 23.041 354.792 23.041 336.884 L 23.041 186.296 C 28.738 187.923 35.25 189.553 40.948 189.553 C 46.646 189.553 52.345 188.738 57.228 187.111 L 57.228 336.884 C 57.228 342.582 60.485 347.465 64.554 349.908 L 206.042 431.777 C 213.481 423.728 224.127 418.689 235.947 418.689 C 254.905 418.689 270.833 431.656 275.36 449.196 L 275.376 449.214 L 275.376 449.253 Z\" fill=url(#paint2_linear_1677_11483) /><g mask=url(#mask0_1677_11483) transform=\"matrix(8.139854, 0, 0, 8.139854, -130.346375, -113.251038)\"><g filter=url(#filter0_f_1677_11483)><circle cx=73 cy=25 r=26 fill=#ED2E7E /></g><g filter=url(#filter1_f_1677_11483)><circle cx=26 cy=69 r=26 fill=#1CC8EE /></g></g><path fill-rule=evenodd clip-rule=evenodd d=\"M 271.713 150.431 C 271.713 169.275 256.948 200.517 235.947 200.517 C 215.003 200.517 200.172 169.292 200.172 150.431 C 200.172 130.708 216.225 114.666 235.947 114.666 C 255.67 114.666 271.713 130.708 271.713 150.431 Z M 157.251 285.952 L 157.251 279.212 C 157.251 235.233 177.771 220.485 194.27 208.641 C 198.447 205.644 202.247 202.901 205.414 199.923 C 214.204 209.608 224.763 214.826 235.947 214.826 C 247.138 214.826 257.697 209.608 266.496 199.931 C 269.653 202.911 273.456 205.644 277.622 208.641 C 294.114 220.485 314.642 235.233 314.642 279.212 L 314.642 285.952 L 307.912 286.351 C 276.525 288.191 251.128 268.509 235.947 241.468 C 220.611 268.795 195.126 288.191 163.981 286.351 L 157.251 285.952 Z M 342.953 302.492 C 333.771 300.994 276.751 291.715 235.955 340.082 C 195.345 291.749 139.865 300.734 129.389 302.436 C 128.428 302.59 127.841 302.688 127.687 302.665 C 127.687 302.673 127.695 302.729 127.702 302.85 C 127.897 305.138 129.867 328.532 146.872 344.55 L 113.849 358.862 L 358.044 358.862 L 324.639 344.55 C 340.576 330.177 342.905 312.202 343.807 305.212 C 343.962 304.022 344.077 303.153 344.206 302.665 C 344.108 302.68 343.686 302.606 342.953 302.492 Z M 199.188 294.59 C 214.751 288.215 225.161 278.879 235.947 266.15 C 246.788 278.96 257.241 288.255 272.707 294.59 C 272.869 294.898 273.031 295.207 273.196 295.518 C 273.219 295.574 273.252 295.631 273.285 295.688 C 261.107 300.361 247.555 308.598 235.989 319.334 C 224.477 308.573 211.258 300.417 198.715 295.493 C 198.87 295.191 199.033 294.891 199.188 294.59 Z\" fill=url(#paint6_linear_1677_11483) /><g mask=url(#mask1_1677_11483) transform=\"matrix(8.139854, 0, 0, 8.139854, -130.346375, -113.251038)\"><g filter=url(#filter2_f_1677_11483)><circle cx=38 cy=6 r=26 fill=#ED2E7E /></g><g filter=url(#filter3_f_1677_11483)><circle cx=63 cy=69 r=26 fill=#1CC8EE /></g></g></svg></div><h1>GraphQL Yoga</h1><p>Version: 5.21.2</p></div><h2>The batteries-included cross-platform GraphQL Server.</h2><div class=buttons><a href=https://www.the-guild.dev/graphql/yoga-server/docs class=docs>Read the Docs</a> <a href=https://www.the-guild.dev/graphql/yoga-server/tutorial/basic class=tutorial>Start the Tutorial </a><a href=__GRAPHIQL_LINK__ class=graphiql>Visit GraphiQL</a></div></section><section class=not-what-your-looking-for><h2>Not the page you are looking for? 👀</h2><p>This page is shown be default whenever a 404 is hit.<br>You can disable this by behavior via the <code>landingPage</code> option.</p><pre>\n          <code>\nimport { createYoga } from 'graphql-yoga';\n\nconst yoga = createYoga({\n  landingPage: false\n})\n          </code>\n        </pre><p>If you expected this page to be the GraphQL route, you need to configure Yoga. Currently, the GraphQL route is configured to be on <code>__GRAPHIQL_LINK__</code>.</p><pre>\n          <code>\nimport { createYoga } from 'graphql-yoga';\n\nconst yoga = createYoga({\n  graphqlEndpoint: '__REQUEST_PATH__',\n})\n          </code>\n        </pre></section></main></body></html>", of = function(e) {
	return new e.fetchAPI.Response(af.replace(/__GRAPHIQL_LINK__/g, e.graphqlEndpoint).replace(/__REQUEST_PATH__/g, e.url.pathname), {
		status: 200,
		statusText: "OK",
		headers: { "Content-Type": "text/html" }
	});
};
function sf(e) {
	let t = e.landingPageRenderer || of;
	return { onRequest({ request: n, fetchAPI: r, endResponse: i, url: a }) {
		let s = e.getGraphQLEndpoint();
		if (!n.url.endsWith(s) && !n.url.endsWith(`${s}/`) && a.pathname !== s && a.pathname !== `${s}/` && !e.getGraphQLEndpointURLPattern().test(a)) {
			if (e.showLandingPage === !0 && n.method === "GET" && n.headers?.get("accept")?.includes("text/html")) {
				let c = t({
					request: n,
					fetchAPI: r,
					url: a,
					graphqlEndpoint: s,
					get urlPattern() {
						return e.getGraphQLEndpointURLPattern();
					}
				});
				if (o(c)) return c.then(i);
				i(c);
				return;
			}
			i(new r.Response("", {
				status: 404,
				statusText: "Not Found"
			}));
		}
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/process-request.js
function cf({ request: e, result: t, fetchAPI: n, onResultProcessHooks: r, serverContext: i }) {
	let a, o = [], s = "*/*";
	return c(() => d(r, (n) => n({
		request: e,
		acceptableMediaTypes: o,
		result: t,
		setResult(e) {
			t = e;
		},
		resultProcessor: a,
		setResultProcessor(e, t) {
			a = e, s = t;
		},
		serverContext: i
	})), () => a ? a(t, n, s) : new n.Response(null, {
		status: 406,
		statusText: "Not Acceptable",
		headers: { accept: o.join("; charset=utf-8, ") }
	}));
}
function lf({ params: e, enveloped: t }) {
	let n = t.parse(e.query), r = t.validate(t.schema, n);
	return r.length > 0 ? { errors: r } : c(() => t.contextFactory(), (r) => {
		let i = {
			schema: t.schema,
			document: n,
			contextValue: r,
			variableValues: e.variables,
			operationName: e.operationName
		};
		return (Ha(n, e.operationName)?.operation === "subscription" ? t.subscribe : t.execute)(i);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/utils/is-response.js
function uf(e) {
	return e?.status && e?.headers;
}
//#endregion
//#region ../../node_modules/.pnpm/graphql-yoga@5.21.2_graphql@16.14.0/node_modules/graphql-yoga/esm/utils/mask-error.js
function df(e) {
	return Ku(e) ? e.toJSON() : e instanceof Error ? {
		message: e.message,
		stack: e.stack,
		cause: e.cause
	} : e;
}
var ff = (e, t, n = globalThis.process?.env?.NODE_ENV === "development") => {
	if (qu(e)) return e;
	let r = {
		code: "INTERNAL_SERVER_ERROR",
		unexpected: !0
	}, i = { extensions: r };
	return Ku(e) ? (i.nodes = e.nodes, i.source = e.source, i.positions = e.positions, i.path = e.path, i.coordinate = Hu(e), n && e.originalError && (r.originalError = df(e.originalError)), e.extensions?.http && (r.http = e.extensions.http)) : n && (r.originalError = df(e)), J(t, i);
}, pf = class {
	getEnveloped;
	logger;
	fetchAPI;
	plugins;
	instrumentation;
	onRequestParseHooks;
	onParamsHooks;
	onExecutionResultHooks;
	onResultProcessHooks;
	maskedErrorsOpts;
	id;
	_graphqlEndpoint;
	_graphqlEndpointURLPattern;
	version = "5.21.2";
	constructor(e) {
		if (this.id = e?.id ?? "yoga", this.fetchAPI = { ...Nu }, e?.fetchAPI) for (let t in e.fetchAPI) e.fetchAPI[t] && (this.fetchAPI[t] = e.fetchAPI[t]);
		let t = e?.logging == null ? !0 : e.logging;
		this.logger = typeof t == "boolean" ? t === !0 ? tc() : tc("silent") : typeof t == "string" ? tc(t) : t;
		let n = typeof e?.maskedErrors == "object" && e.maskedErrors.maskError || ff, r = /* @__PURE__ */ new WeakSet();
		this.maskedErrorsOpts = e?.maskedErrors === !1 ? null : {
			errorMessage: "Unexpected error.",
			...typeof e?.maskedErrors == "object" ? e.maskedErrors : {},
			maskError: (e, t) => {
				if (r.has(e)) return e;
				let i = n(e, t, this.maskedErrorsOpts?.isDev);
				return i !== e && this.logger.error(e), r.add(i), i;
			}
		};
		let i = this.maskedErrorsOpts == null ? null : this.maskedErrorsOpts, a = 0;
		e?.batching && (a = typeof e.batching == "boolean" ? 10 : e.batching.limit ?? 10), this.graphqlEndpoint = e?.graphqlEndpoint || "/graphql", this.plugins = [
			me({
				parse: _t,
				validate: Fa,
				execute: Yl,
				subscribe: Yl,
				specifiedRules: ja
			}),
			!!e?.schema && sc(e.schema),
			e?.allowedHeaders?.request != null && $u(e.allowedHeaders.request),
			e?.context != null && pe((t) => e?.context ? typeof e.context == "function" ? e.context(t) : e.context : {}),
			Dd({
				id: this.id,
				logger: this.logger,
				endpoint: e?.healthCheckEndpoint
			}),
			e?.cors !== !1 && zu(e?.cors),
			e?.graphiql !== !1 && ac({
				getGraphQLEndpoint: () => this._graphqlEndpoint,
				getGraphQLEndpointURLPattern: () => this.getUrlPatternForGraphQLEndpoint(),
				options: e?.graphiql,
				render: e?.renderGraphiQL,
				logger: this.logger
			}),
			Gd({
				match: id,
				parse: ad
			}),
			Gd({
				match: ud,
				parse: dd
			}),
			e?.multipart !== !1 && Gd({
				match: fd,
				parse: pd
			}),
			Gd({
				match: cd,
				parse: ld
			}),
			Gd({
				match: od,
				parse: sd
			}),
			rf(),
			...e?.plugins ?? [],
			e?.parserAndValidationCache !== !1 && Ud(!e?.parserAndValidationCache || e?.parserAndValidationCache === !0 ? {} : e?.parserAndValidationCache),
			wd(a),
			vd(e?.extraParamNames),
			sf({
				getGraphQLEndpoint: () => this.graphqlEndpoint,
				getGraphQLEndpointURLPattern: () => this.getUrlPatternForGraphQLEndpoint(),
				showLandingPage: e?.landingPage !== !1,
				landingPageRenderer: typeof e?.landingPage == "function" ? e.landingPage : void 0
			}),
			Sd(),
			Ed(),
			i !== null && { onSubscribe() {
				return { onSubscribeError({ error: e }) {
					if (Ju(e)) throw e;
				} };
			} },
			i !== null && fe(i),
			e?.allowedHeaders?.response != null && Qu(e.allowedHeaders.response),
			Cd()
		], this.getEnveloped = ie({ plugins: this.plugins }), this.plugins = this.getEnveloped._plugins, this.onRequestParseHooks = [], this.onParamsHooks = [], this.onExecutionResultHooks = [], this.onResultProcessHooks = [];
		for (let e of this.plugins) e && (e.onYogaInit && e.onYogaInit({ yoga: this }), e.onRequestParse && this.onRequestParseHooks.push(e.onRequestParse), e.onParams && this.onParamsHooks.push(e.onParams), e.onExecutionResult && this.onExecutionResultHooks.push(e.onExecutionResult), e.onResultProcess && this.onResultProcessHooks.push(e.onResultProcess), e.instrumentation && (this.instrumentation = this.instrumentation ? y(this.instrumentation, e.instrumentation) : e.instrumentation));
	}
	get graphqlEndpoint() {
		return this._graphqlEndpoint;
	}
	set graphqlEndpoint(e) {
		this._graphqlEndpoint = e, this._graphqlEndpointURLPattern = void 0;
	}
	getUrlPatternForGraphQLEndpoint() {
		return this._graphqlEndpointURLPattern ??= new this.fetchAPI.URLPattern({ pathname: this._graphqlEndpoint }), this._graphqlEndpointURLPattern;
	}
	handleParams = ({ request: e, context: t, params: n }) => {
		let r = t.request === e ? { params: n } : {
			request: e,
			params: n
		};
		Object.assign(t, r);
		let i = this.getEnveloped(t);
		return this.logger.debug("Processing GraphQL Parameters"), c(() => c(() => lf({
			params: n,
			enveloped: i
		}), (e) => (this.logger.debug("Processing GraphQL Parameters done."), e), (e) => ({ errors: Yu(e, this.maskedErrorsOpts, this.logger) })), (e) => (O(e) && (e = p(e, (e) => e, (e) => {
			if (e.name === "AbortError") throw this.logger.debug("Request aborted"), e;
			return { errors: Yu(e, this.maskedErrorsOpts, this.logger) };
		})), e));
	};
	getResultForParams = ({ params: e, request: t }, n) => {
		let r, i = this.handleParams;
		return c(() => d(this.onParamsHooks, (a) => a({
			params: e,
			request: t,
			setParams(t) {
				e = t;
			},
			paramsHandler: i,
			setParamsHandler(e) {
				i = e;
			},
			setResult(e) {
				r = e;
			},
			fetchAPI: this.fetchAPI,
			context: n
		})), () => c(() => r || i({
			request: t,
			params: e,
			context: n
		}), (e) => c(() => d(this.onExecutionResultHooks, (r) => r({
			result: e,
			setResult(t) {
				e = t;
			},
			request: t,
			context: n
		})), () => e)));
	};
	parseRequest = (e, t) => {
		let n = new Proxy({}, { get: (t, r, i) => (n = new this.fetchAPI.URL(e.url, "http://localhost"), Reflect.get(n, r, n)) }), r, i, a = [];
		return c(() => d(this.onRequestParseHooks, (a, o) => c(() => a({
			request: e,
			url: n,
			requestParser: r,
			serverContext: t,
			setRequestParser(e) {
				r = e;
			},
			endResponse(e) {
				i = e, o();
			},
			fetchAPI: this.fetchAPI
		}), (e) => e?.onRequestParseDone), a), () => i ? { response: i } : (this.logger.debug("Parsing request to extract GraphQL parameters"), r ? c(() => r(e), (e) => {
			if (uf(e)) return { response: e };
			let t = e;
			return c(() => d(a, (e) => e({
				requestParserResult: t,
				setRequestParserResult(e) {
					t = e;
				}
			})), () => ({ requestParserResult: t }));
		}) : { response: new this.fetchAPI.Response(null, {
			status: 415,
			statusText: "Unsupported Media Type"
		}) }));
	};
	handle = (e, t) => {
		let n = this.instrumentation && b({ request: e }), r = this.instrumentation?.requestParse ? n.asyncFn(this.instrumentation?.requestParse, this.parseRequest) : this.parseRequest;
		return v(l().then(() => r(e, t)).then(({ response: r, requestParserResult: i }) => {
			if (r) return r;
			let a = this.instrumentation?.operation ? (e, t) => b({
				context: t,
				request: e.request
			}).asyncFn(this.instrumentation?.operation, this.getResultForParams)(e, t) : this.getResultForParams;
			return c(() => Array.isArray(i) ? Promise.all(i.map((n) => l().then(() => a({
				params: n,
				request: e
			}, Object.create(t))).catch((e) => ({ errors: Yu(e, this.maskedErrorsOpts, this.logger) })))) : a({
				params: i,
				request: e
			}, t), (r) => (this.instrumentation?.resultProcess ? n.asyncFn(this.instrumentation.resultProcess, cf) : cf)({
				request: e,
				result: r,
				fetchAPI: this.fetchAPI,
				onResultProcessHooks: this.onResultProcessHooks,
				serverContext: t
			}));
		}).catch((n) => cf({
			request: e,
			result: { errors: Yu(n, this.maskedErrorsOpts, this.logger) },
			fetchAPI: this.fetchAPI,
			onResultProcessHooks: this.onResultProcessHooks,
			serverContext: t
		})));
	};
};
function mf(e) {
	let t = new pf(e);
	return Iu(t, {
		fetchAPI: t.fetchAPI,
		plugins: t.plugins,
		disposeOnProcessTerminate: e.disposeOnProcessTerminate
	});
}
//#endregion
//#region ../../node_modules/.pnpm/graphql@16.14.0/node_modules/graphql/jsutils/isObjectLike.js
var hf = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isObjectLike = t;
	function t(e) {
		return typeof e == "object" && !!e;
	}
})), gf = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.invariant = t;
	function t(e, t) {
		if (!e) throw Error(t ?? "Unexpected invariant triggered.");
	}
})), _f = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getLocation = r;
	var t = gf(), n = /\r\n|[\n\r]/g;
	function r(e, r) {
		let i = 0, a = 1;
		for (let o of e.body.matchAll(n)) {
			if (typeof o.index == "number" || (0, t.invariant)(!1), o.index >= r) break;
			i = o.index + o[0].length, a += 1;
		}
		return {
			line: a,
			column: r + 1 - i
		};
	}
})), vf = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.printLocation = n, e.printSourceLocation = r;
	var t = _f();
	function n(e) {
		return r(e.source, (0, t.getLocation)(e.source, e.start));
	}
	function r(e, t) {
		let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, a = t.line - 1, o = e.locationOffset.line - 1, s = t.line + o, c = t.line === 1 ? n : 0, l = t.column + c, u = `${e.name}:${s}:${l}\n`, d = r.split(/\r\n|[\n\r]/g), f = d[a];
		if (f.length > 120) {
			let e = Math.floor(l / 80), t = l % 80, n = [];
			for (let e = 0; e < f.length; e += 80) n.push(f.slice(e, e + 80));
			return u + i([
				[`${s} |`, n[0]],
				...n.slice(1, e + 1).map((e) => ["|", e]),
				["|", "^".padStart(t)],
				["|", n[e + 1]]
			]);
		}
		return u + i([
			[`${s - 1} |`, d[a - 1]],
			[`${s} |`, f],
			["|", "^".padStart(l)],
			[`${s + 1} |`, d[a + 1]]
		]);
	}
	function i(e) {
		let t = e.filter(([e, t]) => t !== void 0), n = Math.max(...t.map(([e]) => e.length));
		return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n");
	}
})), Y = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.GraphQLError = void 0, e.formatError = s, e.printError = o;
	var t = hf(), n = _f(), r = vf();
	function i(e) {
		let t = e[0];
		return t == null || "kind" in t || "length" in t ? {
			nodes: t,
			source: e[1],
			positions: e[2],
			path: e[3],
			originalError: e[4],
			extensions: e[5]
		} : t;
	}
	e.GraphQLError = class e extends Error {
		constructor(r, ...o) {
			let { nodes: s, source: c, positions: l, path: u, originalError: d, extensions: f } = i(o);
			super(r), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = d ?? void 0, this.nodes = a(Array.isArray(s) ? s : s ? [s] : void 0);
			let p = a(this.nodes?.map((e) => e.loc).filter((e) => e != null));
			this.source = c ?? p?.[0]?.source, this.positions = l ?? p?.map((e) => e.start), this.locations = l && c ? l.map((e) => (0, n.getLocation)(c, e)) : p?.map((e) => (0, n.getLocation)(e.source, e.start));
			let m = (0, t.isObjectLike)(d?.extensions) ? d?.extensions : void 0;
			/* c8 ignore start */
			this.extensions = f ?? m ?? Object.create(null), Object.defineProperties(this, {
				message: {
					writable: !0,
					enumerable: !0
				},
				name: { enumerable: !1 },
				nodes: { enumerable: !1 },
				source: { enumerable: !1 },
				positions: { enumerable: !1 },
				originalError: { enumerable: !1 }
			}), d != null && d.stack ? Object.defineProperty(this, "stack", {
				value: d.stack,
				writable: !0,
				configurable: !0
			}) : Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
				value: Error().stack,
				writable: !0,
				configurable: !0
			});
			/* c8 ignore stop */
		}
		get [Symbol.toStringTag]() {
			return "GraphQLError";
		}
		toString() {
			let e = this.message;
			if (this.nodes) for (let t of this.nodes) t.loc && (e += "\n\n" + (0, r.printLocation)(t.loc));
			else if (this.source && this.locations) for (let t of this.locations) e += "\n\n" + (0, r.printSourceLocation)(this.source, t);
			return e;
		}
		toJSON() {
			let e = { message: this.message };
			return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
		}
	};
	function a(e) {
		return e === void 0 || e.length === 0 ? void 0 : e;
	}
	function o(e) {
		return e.toString();
	}
	function s(e) {
		return e.toJSON();
	}
})), yf = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.syntaxError = n;
	var t = Y();
	function n(e, n, r) {
		return new t.GraphQLError(`Syntax Error: ${r}`, {
			source: e,
			positions: [n]
		});
	}
})), X = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.inspect = r;
	var t = 10, n = 2;
	function r(e) {
		return i(e, []);
	}
	function i(e, t) {
		switch (typeof e) {
			case "string": return JSON.stringify(e);
			case "function": return e.name ? `[function ${e.name}]` : "[function]";
			case "object": return a(e, t);
			default: return String(e);
		}
	}
	function a(e, t) {
		if (e === null) return "null";
		if (t.includes(e)) return "[Circular]";
		let n = [...t, e];
		if (o(e)) {
			let t = e.toJSON();
			if (t !== e) return typeof t == "string" ? t : i(t, n);
		} else if (Array.isArray(e)) return c(e, n);
		return s(e, n);
	}
	function o(e) {
		return typeof e.toJSON == "function";
	}
	function s(e, t) {
		let r = Object.entries(e);
		return r.length === 0 ? "{}" : t.length > n ? "[" + l(e) + "]" : "{ " + r.map(([e, n]) => e + ": " + i(n, t)).join(", ") + " }";
	}
	function c(e, r) {
		if (e.length === 0) return "[]";
		if (r.length > n) return "[Array]";
		let a = Math.min(t, e.length), o = e.length - a, s = [];
		for (let t = 0; t < a; ++t) s.push(i(e[t], r));
		return o === 1 ? s.push("... 1 more item") : o > 1 && s.push(`... ${o} more items`), "[" + s.join(", ") + "]";
	}
	function l(e) {
		let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
		if (t === "Object" && typeof e.constructor == "function") {
			let t = e.constructor.name;
			if (typeof t == "string" && t !== "") return t;
		}
		return t;
	}
})), bf = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.toError = n;
	var t = X();
	function n(e) {
		return e instanceof Error ? e : new r(e);
	}
	var r = class extends Error {
		constructor(e) {
			super("Unexpected error value: " + (0, t.inspect)(e)), this.name = "NonErrorThrown", this.thrownValue = e;
		}
	};
})), xf = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.locatedError = r;
	var t = bf(), n = Y();
	function r(e, r, a) {
		let o = (0, t.toError)(e);
		return i(o) ? o : new n.GraphQLError(o.message, {
			nodes: o.nodes ?? r,
			source: o.source,
			positions: o.positions,
			path: a,
			originalError: o
		});
	}
	function i(e) {
		return Array.isArray(e.path);
	}
})), Sf = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "GraphQLError", {
		enumerable: !0,
		get: function() {
			return t.GraphQLError;
		}
	}), Object.defineProperty(e, "formatError", {
		enumerable: !0,
		get: function() {
			return t.formatError;
		}
	}), Object.defineProperty(e, "locatedError", {
		enumerable: !0,
		get: function() {
			return r.locatedError;
		}
	}), Object.defineProperty(e, "printError", {
		enumerable: !0,
		get: function() {
			return t.printError;
		}
	}), Object.defineProperty(e, "syntaxError", {
		enumerable: !0,
		get: function() {
			return n.syntaxError;
		}
	});
	var t = Y(), n = yf(), r = xf();
})), Cf = /* @__PURE__ */ t(((e) => {
	e.__esModule = !0, e.OpenAPIV2 = e.OpenAPIV3 = void 0, (function(e) {
		(function(e) {
			e.GET = "get", e.PUT = "put", e.POST = "post", e.DELETE = "delete", e.OPTIONS = "options", e.HEAD = "head", e.PATCH = "patch", e.TRACE = "trace";
		})(e.HttpMethods ||= {});
	})(e.OpenAPIV3 ||= {}), (function(e) {
		(function(e) {
			e.GET = "get", e.PUT = "put", e.POST = "post", e.DELETE = "delete", e.OPTIONS = "options", e.HEAD = "head", e.PATCH = "patch";
		})(e.HttpMethods ||= {});
	})(e.OpenAPIV2 ||= {});
})), wf = Sf(), Tf = Cf(), Ef = Object.prototype;
function Df(e) {
	for (let t in e) if (Ef.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
new Set([
	"array",
	"boolean",
	"integer",
	"null",
	"number",
	"object",
	"string"
]);
var Of = [
	"$defs",
	"definitions",
	"properties",
	"patternProperties",
	"dependencies"
];
new Set(Of);
var kf = [
	"items",
	"allOf",
	"oneOf",
	"anyOf"
];
new Set(kf);
var Af = [
	"items",
	"additionalItems",
	"additionalProperties",
	"propertyNames",
	"contains",
	"if",
	"then",
	"else",
	"not"
];
new Set(Af), [
	...Of,
	...kf,
	...Af
];
function jf(e) {
	return typeof e == "object";
}
function Mf(e) {
	return jf(e) ? Df(e) : e === !0;
}
//#endregion
//#region ../../node_modules/.pnpm/@x0k+json-schema-merge@1.0.3/node_modules/@x0k/json-schema-merge/dist/lib/ord.js
function Nf(e, t) {
	return e < t ? -1 : +(e > t);
}
//#endregion
//#region ../../node_modules/.pnpm/@x0k+json-schema-merge@1.0.3/node_modules/@x0k/json-schema-merge/dist/lib/array.js
function Pf(e, t) {
	let n = e.length;
	if (n === 0) return t;
	let r = t.length;
	if (r === 0) return e;
	if (n < r) {
		let i = e;
		e = t, t = i, r = n;
	}
	let i = new Set(e);
	for (let e = 0; e < r; e++) i.add(t[e]);
	return Array.from(i);
}
function Ff(e, t) {
	let n = [];
	if (e.length === 0 || t.length === 0) return n;
	if (e.length > t.length) {
		let n = e;
		e = t, t = n;
	}
	let r = new Set(t);
	for (let t = 0; t < e.length && r.size > 0; t++) {
		let i = e[t];
		r.delete(i) && n.push(i);
	}
	return n;
}
function If(e) {
	return e.length === 0;
}
function Lf(e) {
	return (t, n) => {
		let r = t.length - n.length;
		if (r !== 0) return r;
		for (let r = 0; r < t.length; r++) if (t[r] !== n[r]) {
			let i = e(t[r], n[r]);
			if (i !== 0) return i;
		}
		return 0;
	};
}
function Rf(e, { threshold: t = 12 } = {}) {
	return (n) => {
		let r = n.length;
		if (r === 0) return n;
		if (r <= t) {
			let t = [], i = 0;
			outer: for (let a = 0; a < r; a++) {
				let r = n[a];
				for (let n = 0; n < i; n++) if (e(r, t[n]) === 0) continue outer;
				i = t.push(r);
			}
			return t;
		}
		let i = n.slice().sort(e), a = 0;
		for (let t = 1; t < r; t++) e(i[a], i[t]) !== 0 && ++a !== t && (i[a] = i[t]);
		return i.length = a + 1, i;
	};
}
function zf(e) {
	return (t, n) => {
		let r = [], i = t.length, a = n.length;
		if (i === 0 || a === 0) return r;
		if (i > a) {
			let e = t;
			t = n, n = e;
			let r = i;
			i = a, a = r;
		}
		let o = [...t].sort(e), s = [...n].sort(e), c = 0, l = 0;
		for (; c < i && l < a;) {
			let t = e(o[c], s[l]);
			t === 0 ? ((r.length === 0 || e(r[r.length - 1], o[c]) !== 0) && r.push(o[c]), c++, l++) : t < 0 ? c++ : l++;
		}
		return r;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@x0k+json-schema-merge@1.0.3/node_modules/@x0k/json-schema-merge/dist/lib/memoize.js
function Bf(e, t) {
	return (n) => {
		if (e.has(n)) return e.get(n);
		let r = t(n);
		return e.set(n, r), r;
	};
}
var Vf = Bf, Hf = () => 0, Uf = (e) => e === void 0, Wf = (e) => typeof e != "object", Gf = {
	boolean: 0,
	number: 1,
	string: 2
};
function Kf(e, t) {
	let n = typeof e, r = typeof t;
	return n === r ? Nf(e, t) : Gf[n] - Gf[r];
}
function qf(e, t) {
	let n = e.length;
	if (n === 0) return t;
	let r = t.length;
	if (r === 0) return e;
	if (r > n) {
		let n = e;
		e = t, t = n;
	}
	let i = new Set(e), a = t.length;
	for (let n = 0; n < a; n++) {
		let r = t[n];
		i.has(r) || e.push(r);
	}
	return e;
}
function Jf(e, t, n = Hf) {
	return (r, i) => e(r) ? e(i) ? n(r, i) : -1 : e(i) ? 1 : t(r, i);
}
function Yf(e) {
	return Jf(Uf, e);
}
function Xf(e, t) {
	return Jf((t) => t === void 0 || e(t), t);
}
function Zf(e, t) {
	return Jf(Array.isArray, e, t);
}
var Qf = Yf(Nf), $f = Xf((e) => e === 0, (e, t) => e - t);
function ep({ deduplicationCache: e = /* @__PURE__ */ new WeakMap(), sortedKeysCache: t = /* @__PURE__ */ new WeakMap() } = {}) {
	let n = Vf(t, (e) => Object.keys(e).sort());
	function r(e) {
		return (t, r) => {
			let i = n(t), a = n(r), o = Math.min(i.length, a.length);
			for (let e = 0; e < o; e++) {
				let t = Nf(i[e], a[e]);
				if (t !== 0) return t;
			}
			if (i.length !== a.length) return i.length - a.length;
			for (let n = 0; n < o; n++) {
				let a = i[n], o = e(t[a], r[a]);
				if (o !== 0) return o;
			}
			return 0;
		};
	}
	function i(t) {
		let n = Lf(t), r = Vf(e, Rf(t, { threshold: 0 }));
		return (e, t) => n(r(e), r(t));
	}
	let a = i(Nf);
	function o(e, t) {
		if (jf(e)) {
			if (jf(t)) {
				let n = qf(Object.keys(e), Object.keys(t)), r = n.length;
				for (let i = 0; i < r; i++) {
					let r = n[i];
					if (e[r] === t[r]) continue;
					let a = (m[r] ?? s)(e[r], t[r]);
					if (a !== 0) return a;
				}
				return 0;
			}
			return t === !0 && Df(e) ? 0 : 1;
		}
		return jf(t) ? e === !0 && Df(t) ? 0 : -1 : Nf(e, t);
	}
	let s = Yf(l), c = Jf(Wf, Zf(r(s), Lf(l)), Kf);
	function l(e, t) {
		return e === null ? -1 : t === null ? 1 : c(e, t);
	}
	let u = Yf(o), d = Xf(Df, r(u)), f = Yf(i(o)), p = Xf(Mf, o), m = {
		$id: Qf,
		$comment: Qf,
		$defs: d,
		$ref: Qf,
		$schema: Qf,
		const: s,
		contains: u,
		contentEncoding: Qf,
		contentMediaType: Qf,
		default: s,
		definitions: d,
		description: Qf,
		else: u,
		examples: s,
		exclusiveMaximum: Qf,
		exclusiveMinimum: Qf,
		format: Qf,
		if: u,
		maximum: Qf,
		maxItems: Qf,
		maxLength: Qf,
		maxProperties: Qf,
		minimum: Qf,
		multipleOf: Qf,
		not: u,
		pattern: Qf,
		propertyNames: u,
		readOnly: Qf,
		then: u,
		title: Qf,
		writeOnly: Qf,
		uniqueItems: Xf((e) => e === !1, Hf),
		minLength: $f,
		minItems: $f,
		minProperties: $f,
		required: Xf(If, a),
		enum: Xf(If, i(l)),
		type: Yf((e, t) => {
			let n = Array.isArray(e), r = Array.isArray(t);
			return !n && !r ? Nf(e, t) : a(n ? e : [e], r ? t : [t]);
		}),
		items: Xf((e) => !Array.isArray(e) && Mf(e), Zf(o, Lf(o))),
		anyOf: f,
		allOf: f,
		oneOf: f,
		properties: d,
		patternProperties: d,
		additionalProperties: p,
		additionalItems: p,
		dependencies: Xf(Df, r(Yf(Zf(o, a))))
	};
	return {
		compareSchemaValues: l,
		compareSchemaDefinitions: o
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@x0k+json-schema-merge@1.0.3/node_modules/@x0k/json-schema-merge/dist/lib/function.js
function tp(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@x0k+json-schema-merge@1.0.3/node_modules/@x0k/json-schema-merge/dist/lib/math.js
var np = (e, t) => e ? np(t % e, e) : t, rp = (e, t) => Math.abs(e * t) / np(e, t);
//#endregion
//#region ../../node_modules/.pnpm/@x0k+json-schema-merge@1.0.3/node_modules/@x0k/json-schema-merge/dist/lib/json-schema/merge/patterns.js
function ip(e, t) {
	return e === t ? e : `^(?=.*(?:${e}))(?=.*(?:${t})).*$`;
}
//#endregion
//#region ../../node_modules/.pnpm/@x0k+json-schema-merge@1.0.3/node_modules/@x0k/json-schema-merge/dist/lib/json-schema/merge/merge.js
function ap(e, t, n) {
	let r = e.length, i = t.length;
	if (r > 0 && i > 0) for (let a = 0; a < r; a++) {
		let r = e[a];
		for (let e = 0; e < i; e++) n(r, t[e]);
	}
}
function op(e, t) {
	return e || t;
}
function sp(e) {
	return (t, n) => {
		let r = { ...t }, i = Object.keys(n), a = i.length;
		for (let o = 0; o < a; o++) {
			let a = i[o];
			r[a] = t[a] === void 0 ? n[a] : e(t[a], n[a]);
		}
		return r;
	};
}
function cp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) for (let e of n[0]) t.set(e, n[1]);
	return t;
}
function lp(e, t, n) {
	n === void 0 || Mf(n) ? delete e[t] : e[t] = n;
}
var up = [
	"properties",
	"patternProperties",
	"additionalProperties"
];
function dp(e) {
	let t = Object.keys(e), n = t.length, r = [];
	for (let i = 0; i < n; i++) {
		let n = t[i];
		r.push({
			regExp: new RegExp(n),
			schema: e[n]
		});
	}
	return [r, t];
}
var fp = [[], []];
function pp(e, t, n) {
	let r = n.length;
	for (let i = 0; i < r; i++) {
		let r = n[i];
		if (!r.regExp.test(t)) continue;
		let a = r.schema;
		if (a === !1) return !0;
		e.push(a);
	}
	return !1;
}
var mp = ["items", "additionalItems"], hp = [
	"if",
	"then",
	"else"
];
function gp(e, t) {
	return t.if !== void 0 && (e.if = t.if), t.then !== void 0 && (e.then = t.then), t.else !== void 0 && (e.else = t.else), e;
}
function _p(e, t) {
	if (e === t) return e;
	switch (e) {
		case "number": if (t === "integer") return "integer";
		case "integer": if (t === "number") return "integer";
		default: return;
	}
}
function vp(e, t, n) {
	return [
		e,
		t,
		n
	];
}
function yp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r, i] of e) {
		let e = (e) => {
			if (!i(e)) throw Error(`Schema keys '${n}' and '${r}' are conflicting (${n}: ${JSON.stringify(e[n])}, ${r}: ${JSON.stringify(e[r])})`);
		};
		for (let i of [[n, r], [r, n]]) {
			let n = t.get(i[0]);
			n === void 0 && (n = [], t.set(i[0], n)), n.push({
				oppositeKey: i[1],
				check: e
			});
		}
	}
	return t;
}
var bp = [
	vp("minimum", "maximum", (e) => e.maximum >= e.minimum),
	vp("exclusiveMinimum", "maximum", (e) => e.maximum > e.exclusiveMinimum),
	vp("minimum", "exclusiveMaximum", (e) => e.exclusiveMaximum > e.minimum),
	vp("exclusiveMinimum", "exclusiveMaximum", (e) => e.exclusiveMaximum > e.exclusiveMinimum),
	vp("minLength", "maxLength", (e) => e.maxLength >= e.minLength),
	vp("minItems", "maxItems", (e) => e.maxItems >= e.minItems),
	vp("minProperties", "maxProperties", (e) => e.maxProperties >= e.minProperties)
];
function xp({ mergePatterns: e = ip, isSubRegExp: t = Object.is, intersectJson: n = Ff, deduplicateJsonSchemaDef: r = tp, defaultMerger: i = tp, assigners: a = [], checks: o = bp, mergers: s } = {}) {
	function c(e) {
		let t = e.length, n = e[0];
		for (let r = 1; r < t; r++) {
			let t = _(n, e[r]);
			if (t === !1) return !1;
			Mf(t) || (n = t);
		}
		return n;
	}
	function l(e, t, n, r, i, a, o) {
		if (e.length = 0, n === !1) return !1;
		if (e.push(n), i !== void 0) {
			if (i === !1) return !1;
			e.push(i);
		}
		if (pp(e, t, a)) return !1;
		let s = e.length < 2;
		if (o === !1) {
			if (s) return;
			if (pp(e, t, r)) return !1;
		} else s && o !== void 0 && e.push(o);
		return e.length === 1 ? e[0] : c(e);
	}
	function u(e, t, n, r, i, a) {
		let o = n.length;
		if (o > 0 && i !== !1) if (a) Object.assign(e, t);
		else for (let a = 0; a < o; a++) {
			let o = n[a];
			r.has(o) || (e[o] = _(t[o], i));
		}
		return e;
	}
	let d = (n, { properties: r = {}, patternProperties: i, additionalProperties: a = !0 }, { properties: o = {}, patternProperties: s, additionalProperties: c = !0 }) => {
		let d = Mf(a), f = Mf(c);
		if (d && f) return lp(n, "properties", v(r, o)), lp(n, "patternProperties", i && s ? v(i, s) : i ?? s), delete n.additionalProperties, n;
		lp(n, "additionalProperties", _(a, c));
		let p = {}, m = Object.keys(r), h = m.length, [g, y] = i ? dp(i) : fp, [b, x] = s ? dp(s) : fp, S = [], C = /* @__PURE__ */ new Set(), w = f ? void 0 : c;
		for (let e = 0; e < h; e++) {
			let t = m[e];
			C.add(t);
			let n = l(S, t, r[t], g, o[t], b, w);
			n !== void 0 && (p[t] = n);
		}
		let T = Object.keys(o), E = T.length, D = d ? void 0 : a;
		for (let e = 0; e < E; e++) {
			let t = T[e];
			if (C.has(t)) continue;
			let n = l(S, t, o[t], b, void 0, g, D);
			n !== void 0 && (p[t] = n);
		}
		lp(n, "properties", p);
		let O = {}, k = /* @__PURE__ */ new Set();
		return y.length > 0 && x.length > 0 && ap(y, x, (n, r) => {
			t(n, r) && k.add(n), t(r, n) && k.add(r), O[e(n, r)] = _(i[n], s[r]);
		}), O = u(O, i, y, k, c, f), O = u(O, s, x, k, a, d), lp(n, "patternProperties", O), n;
	}, f = (e, { items: t = [], additionalItems: n }, { items: r = [], additionalItems: i }) => {
		let a = Array.isArray(t), o = Array.isArray(r), s = [];
		if (e.items = s, a && o) {
			let [a, o, c] = t.length < r.length ? [
				t.length,
				n,
				r
			] : [
				r.length,
				i,
				t
			], l = 0;
			for (; l < a; l++) s.push(_(t[l], r[l]));
			if (o === !1) e.additionalItems = !1;
			else {
				let t = o === void 0 || Mf(o);
				for (; l < c.length; l++) s.push(t ? c[l] : _(c[l], o));
				lp(e, "additionalItems", n !== void 0 && i !== void 0 ? _(n, i) : n ?? i);
			}
		} else if (a || o) {
			let [o, c, l] = a ? [
				t,
				r,
				n
			] : [
				r,
				t,
				i
			];
			lp(e, "additionalItems", l && _(l, c));
			for (let e = 0; e < o.length; e++) s.push(_(o[e], c));
		} else delete e.additionalItems, e.items = _(t, r);
		return e;
	}, p = (e, t, n) => {
		gp(e, t);
		let r = gp({}, n);
		return e.allOf === void 0 ? e.allOf = [r] : e.allOf = e.allOf.concat(r), e;
	};
	function m(e, t) {
		let n = [];
		if (ap(e, t, (e, t) => {
			try {
				n.push(_(e, t));
			} catch {}
		}), n.length === 0) throw Error(`No valid schema combinations could be produced for "${JSON.stringify(e)}" and "${JSON.stringify(t)}"; the merged result is empty`);
		return r(n);
	}
	let h = cp([
		[up, d],
		[mp, f],
		[hp, p],
		...a
	]), g = yp(o);
	function _(e, t) {
		if (e === !1 || t === !1) return !1;
		if (Mf(e)) return Mf(t) ? !0 : t;
		if (Mf(t)) return e;
		let n = { ...e }, r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o = Object.keys(t), s = o.length;
		for (let c = 0; c < s; c++) {
			let s = o[c], l = t[s];
			if (l === void 0) continue;
			let u = g.get(s);
			if (u !== void 0) {
				let t = u.length;
				for (let n = 0; n < t; n++) {
					let t = u[n];
					e[t.oppositeKey] !== void 0 && a.add(t.check);
				}
			}
			let d = e[s];
			if (d === void 0) {
				n[s] = l;
				continue;
			}
			let f = h.get(s);
			if (f) {
				r.add(f);
				continue;
			}
			let p = y[s] ?? i;
			n[s] = p(d, l);
		}
		for (let i of r) n = i(n, e, t);
		for (let e of a) e(n);
		return n;
	}
	let v = sp(_), y = {
		$id: i,
		$ref: i,
		$schema: i,
		$comment: i,
		$defs: v,
		definitions: v,
		type: (e, t) => {
			if (e === t) return e;
			let n = Array.isArray(e), r = Array.isArray(t);
			if (!n && !r) {
				let n = _p(e, t);
				if (n !== void 0) return n;
			} else if (n || r) {
				let i = /* @__PURE__ */ new Set();
				if (n && r) ap(e, t, (e, t) => {
					let n = _p(e, t);
					n !== void 0 && i.add(n);
				});
				else {
					let r = n ? e : t, a = n ? t : e, o = r.length;
					for (let e = 0; e < o; e++) {
						let t = _p(a, r[e]);
						t !== void 0 && i.add(t);
					}
				}
				let a = i.size;
				if (a === 1) return i.values().next().value;
				if (a > 1) return Array.from(i);
			}
			throw Error(`It is not possible to create an intersection of the following incompatible types: ${e.toString()}, ${t.toString()}`);
		},
		default: i,
		description: i,
		title: i,
		const: i,
		format: i,
		contentEncoding: i,
		contentMediaType: i,
		not: (e, t) => {
			let n = r([e, t]);
			return n.length === 1 ? n[0] : { anyOf: n };
		},
		pattern: e,
		readOnly: op,
		writeOnly: op,
		enum: (e, t) => {
			let r = n(e, t);
			if (r.length === 0) throw Error(`Intersection of the following enums is empty: "${JSON.stringify(e)}", "${JSON.stringify(t)}"`);
			return r;
		},
		anyOf: m,
		oneOf: m,
		allOf: (e, t) => r(e.concat(t)),
		propertyNames: _,
		contains: _,
		dependencies: sp((e, t) => Array.isArray(e) ? Array.isArray(t) ? Pf(e, t) : _(t, { required: e }) : Array.isArray(t) ? _(e, { required: t }) : _(e, t)),
		examples: (e, t) => {
			if (!Array.isArray(e) || !Array.isArray(t)) throw Error(`Value of the 'examples' field should be an array, but got "${JSON.stringify(e)}" and "${JSON.stringify(t)}"`);
			return Pf(e, t);
		},
		multipleOf: (e, t) => {
			let n = 1;
			for (; !Number.isInteger(e) || !Number.isInteger(t);) n *= 10, e *= 10, t *= 10;
			return rp(e, t) / n;
		},
		exclusiveMaximum: Math.min,
		maximum: Math.min,
		maxItems: Math.min,
		maxLength: Math.min,
		maxProperties: Math.min,
		exclusiveMinimum: Math.max,
		minimum: Math.max,
		minItems: Math.max,
		minLength: Math.max,
		minProperties: Math.max,
		uniqueItems: op,
		required: Pf,
		...s
	};
	return {
		mergeSchemaDefinitions: _,
		mergeArrayOfSchemaDefinitions: c
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@x0k+json-schema-merge@1.0.3/node_modules/@x0k/json-schema-merge/dist/lib/json-schema/merge/all-of-merge.js
function Sp(e) {
	let t = [], n = [e];
	for (; n.length > 0;) {
		let e = n.pop();
		if (typeof e == "boolean" || e.allOf === void 0) {
			t.push(e);
			continue;
		}
		let { allOf: r, ...i } = e;
		t.push(i);
		for (let e = r.length - 1; e >= 0; e--) n.push(r[e]);
	}
	return t;
}
function Cp(e) {
	return (t) => e(Sp(t));
}
//#endregion
//#region src/lib/util/flattenAllOf.ts
var { compareSchemaDefinitions: wp, compareSchemaValues: Tp } = ep(), { mergeArrayOfSchemaDefinitions: Ep } = xp({
	intersectJson: zf(Tp),
	deduplicateJsonSchemaDef: Rf(wp),
	mergers: {
		type: (e, t) => {
			if (e === t) return e;
			let n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t], i = new Set([...n, ...r]);
			return i.size === 1 ? [...i][0] : [...i];
		},
		enum: (e, t) => Array.from(new Set([...e, ...t]))
	}
}), Dp = Cp(Ep), Op = (e) => {
	let t = Dp(e);
	if (typeof t == "boolean") return t ? {} : { not: {} };
	if (typeof t != "object" || !t) return t;
	let { properties: n, items: r, additionalProperties: i } = t;
	if (typeof n == "object" && n) for (let [e, t] of Object.entries(n)) t && typeof t == "object" && (n[e] = Op(t));
	typeof r == "object" && r && (Array.isArray(r) ? t.items = r.map((e) => e && typeof e == "object" ? Op(e) : e) : t.items = Op(r)), i && typeof i == "object" && (t.additionalProperties = Op(i));
	for (let e of ["anyOf", "oneOf"]) {
		let n = t[e];
		Array.isArray(n) && (t[e] = n.map((e) => typeof e == "object" && e ? Op(e) : e));
	}
	return t;
}, kp = (e, t, n = []) => {
	let r = t(e, n);
	if (typeof r != "object" || !r) return r;
	let i = Array.isArray(r) ? [] : {};
	for (let [e, a] of Object.entries(r)) {
		let r = [...n, e];
		Array.isArray(a) ? i[e] = a.map((e, n) => typeof e == "object" && e ? kp(e, t, [...r, n.toString()]) : e) : typeof a == "object" && a ? i[e] = kp(a, t, r) : i[e] = a;
	}
	return i;
}, Ap = /* @__PURE__ */ new WeakMap(), jp = (e, t) => {
	Ap.has(e) || Ap.set(e, /* @__PURE__ */ new Map());
	let n = Ap.get(e);
	if (n?.has(t)) return n.get(t);
	let r = t.split("/").slice(1), i = e;
	for (let e of r) (!i || typeof i != "object") && (i = null), i = i[e] ?? null;
	return n?.set(t, i), i;
}, Mp = /* @__PURE__ */ new WeakMap(), Np = (e) => typeof e == "object" && !!e, Pp = async (e, t = []) => {
	if (Mp.has(e)) return Mp.get(e);
	let n = structuredClone(e), r = /* @__PURE__ */ new Set(), a = async (e, o) => {
		if (Np(e)) {
			if (r.has(e)) return i;
			if (r.add(e), Array.isArray(e)) for (let t = 0; t < e.length; t++) e[t] = await a(e[t], `${o}/${t}`);
			else {
				if ("$ref" in e && typeof e.$ref == "string") {
					let { $ref: r, ...i } = e;
					e.__$ref = r;
					let s = Object.keys(i).length > 0, c;
					for (let e of t) {
						let t = await e(r);
						if (t) {
							c = await a(t, o);
							break;
						}
					}
					if (c === void 0 && (c = await a(await jp(n, r), o)), s) {
						if (c === "$[Circular Reference]") return { ...i };
						if (Np(c)) return {
							...c,
							...i
						};
					}
					return c;
				}
				for (let t in e) e[t] = await a(e[t], `${o}/${t}`);
			}
			r.delete(e);
		}
		return e;
	}, o = await a(n, "#");
	return Mp.set(e, o), o;
}, Fp = (e) => (e.openapi?.startsWith("3.0") && (e.openapi = "3.1.1"), e = kp(e, (e) => (e.type !== void 0 && e.nullable === !0 && (e.type = ["null", e.type], delete e.nullable), e)), e = kp(e, (e) => (e.exclusiveMinimum === !0 ? (e.exclusiveMinimum = e.minimum, delete e.minimum) : e.exclusiveMinimum === !1 && delete e.exclusiveMinimum, e.exclusiveMaximum === !0 ? (e.exclusiveMaximum = e.maximum, delete e.maximum) : e.exclusiveMaximum === !1 && delete e.exclusiveMaximum, e)), e = kp(e, (e, t) => (e.example !== void 0 && (Ip(t ?? []) ? e.examples = [e.example] : e.examples = { default: { value: e.example } }, delete e.example), e)), e = kp(e, (e, t) => {
	if (e.type === "object" && e.properties !== void 0 && (t?.slice(0, -1))?.some((e, n) => e === "content" && t?.[n + 1] === "multipart/form-data")) {
		let t = Object.entries(e.properties);
		for (let [, e] of t) typeof e == "object" && e.type === "string" && e.format === "binary" && (e.contentMediaType = "application/octet-stream", delete e.format);
	}
	return e;
}), e = kp(e, (e, t) => t?.includes("content") && t.includes("application/octet-stream") ? {} : e.type === "string" && e.format === "binary" ? {
	type: "string",
	contentMediaType: "application/octet-stream"
} : e), e = kp(e, (e) => {
	if (!(e.type === "string" && e.format === "binary")) return e;
}), e = kp(e, (e) => e.type === "string" && e.format === "base64" ? {
	type: "string",
	contentEncoding: "base64"
} : e), e = kp(e, (e, t) => e.type === "string" && e.format === "byte" ? {
	type: "string",
	contentEncoding: "base64",
	contentMediaType: (t?.slice(0, -1))?.find((e, n) => t?.[n - 1] === "content")
} : e), e);
function Ip(e) {
	return [
		["components", "schemas"],
		"properties",
		"items",
		"allOf",
		"anyOf",
		"oneOf",
		"not",
		"additionalProperties"
	].some((t) => Array.isArray(t) ? t.every((t, n) => e[n] === t) : e.includes(t)) || e.includes("schema") || e.some((e) => e.endsWith("Schema"));
}
//#endregion
//#region src/lib/oas/parser/index.ts
var Lp = Object.values(Tf.OpenAPIV3.HttpMethods), Rp = async (e) => {
	if (typeof e == "string") {
		if (e.trim().startsWith("{")) try {
			return JSON.parse(e);
		} catch (e) {
			throw new wf.GraphQLError("Invalid JSON schema", { originalError: e });
		}
		if (e.includes("://")) {
			let t;
			try {
				t = await fetch(e, { cache: typeof window < "u" ? "force-cache" : void 0 });
			} catch (e) {
				throw new wf.GraphQLError("Failed to fetch schema", { originalError: e });
			}
			if (!t.ok) throw new wf.GraphQLError(`Failed to fetch schema: ${t.statusText}`);
			let n = await t.text();
			try {
				return n.trim().startsWith("{") ? JSON.parse(n) : (await import("./browser-DDpUl4pu.js")).parse(n);
			} catch (e) {
				throw new wf.GraphQLError("Fetched invalid schema", { originalError: e });
			}
		}
		let t = (await import("./browser-DDpUl4pu.js")).parse(e);
		if (typeof t == "object") return t;
	}
	if (typeof e == "object") return e;
	throw new wf.GraphQLError(`Unsupported schema input: ${e}`);
}, zp = async (e) => {
	let t = await Rp(e);
	if (!t.openapi) throw new wf.GraphQLError("OpenAPI version is not defined");
	return kp(Fp(await Pp(t)), (e) => !e || typeof e != "object" || Array.isArray(e) || !("type" in e || "properties" in e || "allOf" in e || "anyOf" in e || "oneOf" in e) ? e : Op(e));
}, Bp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.versionInfo = e.version = void 0, e.version = "16.14.0", e.versionInfo = Object.freeze({
		major: 16,
		minor: 14,
		patch: 0,
		preReleaseTag: null
	});
})), Vp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.devAssert = t;
	function t(e, t) {
		if (!e) throw Error(t);
	}
})), Hp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isPromise = t;
	function t(e) {
		return typeof e?.then == "function";
	}
})), Up = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Token = e.QueryDocumentKeys = e.OperationTypeNode = e.Location = void 0, e.isNode = r, e.Location = class {
		constructor(e, t, n) {
			this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n;
		}
		get [Symbol.toStringTag]() {
			return "Location";
		}
		toJSON() {
			return {
				start: this.start,
				end: this.end
			};
		}
	}, e.Token = class {
		constructor(e, t, n, r, i, a) {
			this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = a, this.prev = null, this.next = null;
		}
		get [Symbol.toStringTag]() {
			return "Token";
		}
		toJSON() {
			return {
				kind: this.kind,
				value: this.value,
				line: this.line,
				column: this.column
			};
		}
	};
	var t = {
		Name: [],
		Document: ["definitions"],
		OperationDefinition: [
			"description",
			"name",
			"variableDefinitions",
			"directives",
			"selectionSet"
		],
		VariableDefinition: [
			"description",
			"variable",
			"type",
			"defaultValue",
			"directives"
		],
		Variable: ["name"],
		SelectionSet: ["selections"],
		Field: [
			"alias",
			"name",
			"arguments",
			"directives",
			"selectionSet"
		],
		Argument: ["name", "value"],
		FragmentSpread: ["name", "directives"],
		InlineFragment: [
			"typeCondition",
			"directives",
			"selectionSet"
		],
		FragmentDefinition: [
			"description",
			"name",
			"variableDefinitions",
			"typeCondition",
			"directives",
			"selectionSet"
		],
		IntValue: [],
		FloatValue: [],
		StringValue: [],
		BooleanValue: [],
		NullValue: [],
		EnumValue: [],
		ListValue: ["values"],
		ObjectValue: ["fields"],
		ObjectField: ["name", "value"],
		Directive: ["name", "arguments"],
		NamedType: ["name"],
		ListType: ["type"],
		NonNullType: ["type"],
		SchemaDefinition: [
			"description",
			"directives",
			"operationTypes"
		],
		OperationTypeDefinition: ["type"],
		ScalarTypeDefinition: [
			"description",
			"name",
			"directives"
		],
		ObjectTypeDefinition: [
			"description",
			"name",
			"interfaces",
			"directives",
			"fields"
		],
		FieldDefinition: [
			"description",
			"name",
			"arguments",
			"type",
			"directives"
		],
		InputValueDefinition: [
			"description",
			"name",
			"type",
			"defaultValue",
			"directives"
		],
		InterfaceTypeDefinition: [
			"description",
			"name",
			"interfaces",
			"directives",
			"fields"
		],
		UnionTypeDefinition: [
			"description",
			"name",
			"directives",
			"types"
		],
		EnumTypeDefinition: [
			"description",
			"name",
			"directives",
			"values"
		],
		EnumValueDefinition: [
			"description",
			"name",
			"directives"
		],
		InputObjectTypeDefinition: [
			"description",
			"name",
			"directives",
			"fields"
		],
		DirectiveDefinition: [
			"description",
			"name",
			"arguments",
			"directives",
			"locations"
		],
		SchemaExtension: ["directives", "operationTypes"],
		DirectiveExtension: ["name", "directives"],
		ScalarTypeExtension: ["name", "directives"],
		ObjectTypeExtension: [
			"name",
			"interfaces",
			"directives",
			"fields"
		],
		InterfaceTypeExtension: [
			"name",
			"interfaces",
			"directives",
			"fields"
		],
		UnionTypeExtension: [
			"name",
			"directives",
			"types"
		],
		EnumTypeExtension: [
			"name",
			"directives",
			"values"
		],
		InputObjectTypeExtension: [
			"name",
			"directives",
			"fields"
		],
		TypeCoordinate: ["name"],
		MemberCoordinate: ["name", "memberName"],
		ArgumentCoordinate: [
			"name",
			"fieldName",
			"argumentName"
		],
		DirectiveCoordinate: ["name"],
		DirectiveArgumentCoordinate: ["name", "argumentName"]
	};
	e.QueryDocumentKeys = t;
	var n = new Set(Object.keys(t));
	function r(e) {
		let t = e?.kind;
		return typeof t == "string" && n.has(t);
	}
	var i;
	e.OperationTypeNode = i, (function(e) {
		e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
	})(i || (e.OperationTypeNode = i = {}));
})), Wp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DirectiveLocation = void 0;
	var t;
	e.DirectiveLocation = t, (function(e) {
		e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", e.DIRECTIVE_DEFINITION = "DIRECTIVE_DEFINITION";
	})(t || (e.DirectiveLocation = t = {}));
})), Z = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Kind = void 0;
	var t;
	e.Kind = t, (function(e) {
		e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.DIRECTIVE_EXTENSION = "DirectiveExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e.TYPE_COORDINATE = "TypeCoordinate", e.MEMBER_COORDINATE = "MemberCoordinate", e.ARGUMENT_COORDINATE = "ArgumentCoordinate", e.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
	})(t || (e.Kind = t = {}));
})), Gp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isDigit = n, e.isLetter = r, e.isNameContinue = a, e.isNameStart = i, e.isWhiteSpace = t;
	function t(e) {
		return e === 9 || e === 32;
	}
	function n(e) {
		return e >= 48 && e <= 57;
	}
	function r(e) {
		return e >= 97 && e <= 122 || e >= 65 && e <= 90;
	}
	function i(e) {
		return r(e) || e === 95;
	}
	function a(e) {
		return r(e) || n(e) || e === 95;
	}
})), Kp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.dedentBlockStringLines = n, e.isPrintableAsBlockString = i, e.printBlockString = a;
	var t = Gp();
	function n(e) {
		let t = 2 ** 53 - 1, n = null, i = -1;
		for (let a = 0; a < e.length; ++a) {
			let o = e[a], s = r(o);
			s !== o.length && (n ??= a, i = a, a !== 0 && s < t && (t = s));
		}
		return e.map((e, n) => n === 0 ? e : e.slice(t)).slice(n ?? 0, i + 1);
	}
	function r(e) {
		let n = 0;
		for (; n < e.length && (0, t.isWhiteSpace)(e.charCodeAt(n));) ++n;
		return n;
	}
	function i(e) {
		if (e === "") return !0;
		let t = !0, n = !1, r = !0, i = !1;
		for (let a = 0; a < e.length; ++a) switch (e.codePointAt(a)) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 11:
			case 12:
			case 14:
			case 15: return !1;
			case 13: return !1;
			case 10:
				if (t && !i) return !1;
				i = !0, t = !0, n = !1;
				break;
			case 9:
			case 32:
				n ||= t;
				break;
			default: r &&= n, t = !1;
		}
		return !(t || r && i);
	}
	function a(e, n) {
		let r = e.replace(/"""/g, "\\\"\"\""), i = r.split(/\r\n|[\n\r]/g), a = i.length === 1, o = i.length > 1 && i.slice(1).every((e) => e.length === 0 || (0, t.isWhiteSpace)(e.charCodeAt(0))), s = r.endsWith("\\\"\"\""), c = e.endsWith("\"") && !s, l = e.endsWith("\\"), u = c || l, d = !(n != null && n.minimize) && (!a || e.length > 70 || u || o || s), f = "", p = a && (0, t.isWhiteSpace)(e.charCodeAt(0));
		return (d && !p || o) && (f += "\n"), f += r, (d || u) && (f += "\n"), "\"\"\"" + f + "\"\"\"";
	}
})), qp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TokenKind = void 0;
	var t;
	e.TokenKind = t, (function(e) {
		e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.DOT = ".", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
	})(t || (e.TokenKind = t = {}));
})), Jp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Lexer = void 0, e.createToken = f, e.isPunctuatorTokenKind = o, e.printCodePointAt = d, e.readName = w;
	var t = yf(), n = Up(), r = Kp(), i = Gp(), a = qp();
	e.Lexer = class {
		constructor(e) {
			let t = new n.Token(a.TokenKind.SOF, 0, 0, 0, 0);
			this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0;
		}
		get [Symbol.toStringTag]() {
			return "Lexer";
		}
		advance() {
			return this.lastToken = this.token, this.token = this.lookahead();
		}
		lookahead() {
			let e = this.token;
			if (e.kind !== a.TokenKind.EOF) do
				if (e.next) e = e.next;
				else {
					let t = p(this, e.end);
					e.next = t, t.prev = e, e = t;
				}
			while (e.kind === a.TokenKind.COMMENT);
			return e;
		}
	};
	function o(e) {
		return e === a.TokenKind.BANG || e === a.TokenKind.DOLLAR || e === a.TokenKind.AMP || e === a.TokenKind.PAREN_L || e === a.TokenKind.PAREN_R || e === a.TokenKind.DOT || e === a.TokenKind.SPREAD || e === a.TokenKind.COLON || e === a.TokenKind.EQUALS || e === a.TokenKind.AT || e === a.TokenKind.BRACKET_L || e === a.TokenKind.BRACKET_R || e === a.TokenKind.BRACE_L || e === a.TokenKind.PIPE || e === a.TokenKind.BRACE_R;
	}
	function s(e) {
		return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
	}
	function c(e, t) {
		return l(e.charCodeAt(t)) && u(e.charCodeAt(t + 1));
	}
	function l(e) {
		return e >= 55296 && e <= 56319;
	}
	function u(e) {
		return e >= 56320 && e <= 57343;
	}
	function d(e, t) {
		let n = e.source.body.codePointAt(t);
		if (n === void 0) return a.TokenKind.EOF;
		if (n >= 32 && n <= 126) {
			let e = String.fromCodePoint(n);
			return e === "\"" ? "'\"'" : `"${e}"`;
		}
		return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
	}
	function f(e, t, r, i, a) {
		let o = e.line, s = 1 + r - e.lineStart;
		return new n.Token(t, r, i, o, s, a);
	}
	function p(e, n) {
		let r = e.source.body, o = r.length, l = n;
		for (; l < o;) {
			let n = r.charCodeAt(l);
			switch (n) {
				case 65279:
				case 9:
				case 32:
				case 44:
					++l;
					continue;
				case 10:
					++l, ++e.line, e.lineStart = l;
					continue;
				case 13:
					r.charCodeAt(l + 1) === 10 ? l += 2 : ++l, ++e.line, e.lineStart = l;
					continue;
				case 35: return m(e, l);
				case 33: return f(e, a.TokenKind.BANG, l, l + 1);
				case 36: return f(e, a.TokenKind.DOLLAR, l, l + 1);
				case 38: return f(e, a.TokenKind.AMP, l, l + 1);
				case 40: return f(e, a.TokenKind.PAREN_L, l, l + 1);
				case 41: return f(e, a.TokenKind.PAREN_R, l, l + 1);
				case 46:
					if (r.charCodeAt(l + 1) === 46 && r.charCodeAt(l + 2) === 46) return f(e, a.TokenKind.SPREAD, l, l + 3);
					break;
				case 58: return f(e, a.TokenKind.COLON, l, l + 1);
				case 61: return f(e, a.TokenKind.EQUALS, l, l + 1);
				case 64: return f(e, a.TokenKind.AT, l, l + 1);
				case 91: return f(e, a.TokenKind.BRACKET_L, l, l + 1);
				case 93: return f(e, a.TokenKind.BRACKET_R, l, l + 1);
				case 123: return f(e, a.TokenKind.BRACE_L, l, l + 1);
				case 124: return f(e, a.TokenKind.PIPE, l, l + 1);
				case 125: return f(e, a.TokenKind.BRACE_R, l, l + 1);
				case 34: return r.charCodeAt(l + 1) === 34 && r.charCodeAt(l + 2) === 34 ? C(e, l) : _(e, l);
			}
			if ((0, i.isDigit)(n) || n === 45) return h(e, l, n);
			if ((0, i.isNameStart)(n)) return w(e, l);
			throw (0, t.syntaxError)(e.source, l, n === 39 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : s(n) || c(r, l) ? `Unexpected character: ${d(e, l)}.` : `Invalid character: ${d(e, l)}.`);
		}
		return f(e, a.TokenKind.EOF, o, o);
	}
	function m(e, t) {
		let n = e.source.body, r = n.length, i = t + 1;
		for (; i < r;) {
			let e = n.charCodeAt(i);
			if (e === 10 || e === 13) break;
			if (s(e)) ++i;
			else if (c(n, i)) i += 2;
			else break;
		}
		return f(e, a.TokenKind.COMMENT, t, i, n.slice(t + 1, i));
	}
	function h(e, n, r) {
		let o = e.source.body, s = n, c = r, l = !1;
		if (c === 45 && (c = o.charCodeAt(++s)), c === 48) {
			if (c = o.charCodeAt(++s), (0, i.isDigit)(c)) throw (0, t.syntaxError)(e.source, s, `Invalid number, unexpected digit after 0: ${d(e, s)}.`);
		} else s = g(e, s, c), c = o.charCodeAt(s);
		if (c === 46 && (l = !0, c = o.charCodeAt(++s), s = g(e, s, c), c = o.charCodeAt(s)), (c === 69 || c === 101) && (l = !0, c = o.charCodeAt(++s), (c === 43 || c === 45) && (c = o.charCodeAt(++s)), s = g(e, s, c), c = o.charCodeAt(s)), c === 46 || (0, i.isNameStart)(c)) throw (0, t.syntaxError)(e.source, s, `Invalid number, expected digit but got: ${d(e, s)}.`);
		return f(e, l ? a.TokenKind.FLOAT : a.TokenKind.INT, n, s, o.slice(n, s));
	}
	function g(e, n, r) {
		if (!(0, i.isDigit)(r)) throw (0, t.syntaxError)(e.source, n, `Invalid number, expected digit but got: ${d(e, n)}.`);
		let a = e.source.body, o = n + 1;
		for (; (0, i.isDigit)(a.charCodeAt(o));) ++o;
		return o;
	}
	function _(e, n) {
		let r = e.source.body, i = r.length, o = n + 1, l = o, u = "";
		for (; o < i;) {
			let i = r.charCodeAt(o);
			if (i === 34) return u += r.slice(l, o), f(e, a.TokenKind.STRING, n, o + 1, u);
			if (i === 92) {
				u += r.slice(l, o);
				let t = r.charCodeAt(o + 1) === 117 ? r.charCodeAt(o + 2) === 123 ? v(e, o) : y(e, o) : S(e, o);
				u += t.value, o += t.size, l = o;
				continue;
			}
			if (i === 10 || i === 13) break;
			if (s(i)) ++o;
			else if (c(r, o)) o += 2;
			else throw (0, t.syntaxError)(e.source, o, `Invalid character within String: ${d(e, o)}.`);
		}
		throw (0, t.syntaxError)(e.source, o, "Unterminated string.");
	}
	function v(e, n) {
		let r = e.source.body, i = 0, a = 3;
		for (; a < 12;) {
			let e = r.charCodeAt(n + a++);
			if (e === 125) {
				if (a < 5 || !s(i)) break;
				return {
					value: String.fromCodePoint(i),
					size: a
				};
			}
			if (i = i << 4 | x(e), i < 0) break;
		}
		throw (0, t.syntaxError)(e.source, n, `Invalid Unicode escape sequence: "${r.slice(n, n + a)}".`);
	}
	function y(e, n) {
		let r = e.source.body, i = b(r, n + 2);
		if (s(i)) return {
			value: String.fromCodePoint(i),
			size: 6
		};
		if (l(i) && r.charCodeAt(n + 6) === 92 && r.charCodeAt(n + 7) === 117) {
			let e = b(r, n + 8);
			if (u(e)) return {
				value: String.fromCodePoint(i, e),
				size: 12
			};
		}
		throw (0, t.syntaxError)(e.source, n, `Invalid Unicode escape sequence: "${r.slice(n, n + 6)}".`);
	}
	function b(e, t) {
		return x(e.charCodeAt(t)) << 12 | x(e.charCodeAt(t + 1)) << 8 | x(e.charCodeAt(t + 2)) << 4 | x(e.charCodeAt(t + 3));
	}
	function x(e) {
		return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
	}
	function S(e, n) {
		let r = e.source.body;
		switch (r.charCodeAt(n + 1)) {
			case 34: return {
				value: "\"",
				size: 2
			};
			case 92: return {
				value: "\\",
				size: 2
			};
			case 47: return {
				value: "/",
				size: 2
			};
			case 98: return {
				value: "\b",
				size: 2
			};
			case 102: return {
				value: "\f",
				size: 2
			};
			case 110: return {
				value: "\n",
				size: 2
			};
			case 114: return {
				value: "\r",
				size: 2
			};
			case 116: return {
				value: "	",
				size: 2
			};
		}
		throw (0, t.syntaxError)(e.source, n, `Invalid character escape sequence: "${r.slice(n, n + 2)}".`);
	}
	function C(e, n) {
		let i = e.source.body, o = i.length, l = e.lineStart, u = n + 3, p = u, m = "", h = [];
		for (; u < o;) {
			let o = i.charCodeAt(u);
			if (o === 34 && i.charCodeAt(u + 1) === 34 && i.charCodeAt(u + 2) === 34) {
				m += i.slice(p, u), h.push(m);
				let t = f(e, a.TokenKind.BLOCK_STRING, n, u + 3, (0, r.dedentBlockStringLines)(h).join("\n"));
				return e.line += h.length - 1, e.lineStart = l, t;
			}
			if (o === 92 && i.charCodeAt(u + 1) === 34 && i.charCodeAt(u + 2) === 34 && i.charCodeAt(u + 3) === 34) {
				m += i.slice(p, u), p = u + 1, u += 4;
				continue;
			}
			if (o === 10 || o === 13) {
				m += i.slice(p, u), h.push(m), o === 13 && i.charCodeAt(u + 1) === 10 ? u += 2 : ++u, m = "", p = u, l = u;
				continue;
			}
			if (s(o)) ++u;
			else if (c(i, u)) u += 2;
			else throw (0, t.syntaxError)(e.source, u, `Invalid character within String: ${d(e, u)}.`);
		}
		throw (0, t.syntaxError)(e.source, u, "Unterminated string.");
	}
	function w(e, t) {
		let n = e.source.body, r = n.length, o = t + 1;
		for (; o < r;) {
			let e = n.charCodeAt(o);
			if ((0, i.isNameContinue)(e)) ++o;
			else break;
		}
		return f(e, a.TokenKind.NAME, t, o, n.slice(t, o));
	}
})), Yp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SchemaCoordinateLexer = void 0;
	var t = yf(), n = Up(), r = Gp(), i = Jp(), a = qp();
	e.SchemaCoordinateLexer = class {
		line = 1;
		lineStart = 0;
		constructor(e) {
			let t = new n.Token(a.TokenKind.SOF, 0, 0, 0, 0);
			this.source = e, this.lastToken = t, this.token = t;
		}
		get [Symbol.toStringTag]() {
			return "SchemaCoordinateLexer";
		}
		advance() {
			return this.lastToken = this.token, this.token = this.lookahead();
		}
		lookahead() {
			let e = this.token;
			if (e.kind !== a.TokenKind.EOF) {
				let t = o(this, e.end);
				e.next = t, t.prev = e, e = t;
			}
			return e;
		}
	};
	function o(e, n) {
		let o = e.source.body, s = o.length, c = n;
		if (c < s) {
			let n = o.charCodeAt(c);
			switch (n) {
				case 46: return (0, i.createToken)(e, a.TokenKind.DOT, c, c + 1);
				case 40: return (0, i.createToken)(e, a.TokenKind.PAREN_L, c, c + 1);
				case 41: return (0, i.createToken)(e, a.TokenKind.PAREN_R, c, c + 1);
				case 58: return (0, i.createToken)(e, a.TokenKind.COLON, c, c + 1);
				case 64: return (0, i.createToken)(e, a.TokenKind.AT, c, c + 1);
			}
			if ((0, r.isNameStart)(n)) return (0, i.readName)(e, c);
			throw (0, t.syntaxError)(e.source, c, `Invalid character: ${(0, i.printCodePointAt)(e, c)}.`);
		}
		return (0, i.createToken)(e, a.TokenKind.EOF, s, s);
	}
})), Xp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.instanceOf = void 0;
	var t = X();
	e.instanceOf = globalThis.process ? function(e, t) {
		return e instanceof t;
	} : function(e, n) {
		if (e instanceof n) return !0;
		if (typeof e == "object" && e) {
			let r = n.prototype[Symbol.toStringTag];
			if (r === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : e.constructor?.name)) {
				let n = (0, t.inspect)(e);
				throw Error(`Cannot use ${r} "${n}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
			}
		}
		return !1;
	};
})), Zp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Source = void 0, e.isSource = a;
	var t = Vp(), n = X(), r = Xp(), i = class {
		constructor(e, r = "GraphQL request", i = {
			line: 1,
			column: 1
		}) {
			typeof e == "string" || (0, t.devAssert)(!1, `Body must be a string. Received: ${(0, n.inspect)(e)}.`), this.body = e, this.name = r, this.locationOffset = i, this.locationOffset.line > 0 || (0, t.devAssert)(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || (0, t.devAssert)(!1, "column in locationOffset is 1-indexed and must be positive.");
		}
		get [Symbol.toStringTag]() {
			return "Source";
		}
	};
	e.Source = i;
	function a(e) {
		return (0, r.instanceOf)(e, i);
	}
})), Qp = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Parser = void 0, e.parse = l, e.parseConstValue = d, e.parseSchemaCoordinate = p, e.parseType = f, e.parseValue = u;
	var t = yf(), n = Up(), r = Wp(), i = Z(), a = Jp(), o = Yp(), s = Zp(), c = qp();
	function l(e, t) {
		let n = new m(e, t), r = n.parseDocument();
		return Object.defineProperty(r, "tokenCount", {
			enumerable: !1,
			value: n.tokenCount
		}), r;
	}
	function u(e, t) {
		let n = new m(e, t);
		n.expectToken(c.TokenKind.SOF);
		let r = n.parseValueLiteral(!1);
		return n.expectToken(c.TokenKind.EOF), r;
	}
	function d(e, t) {
		let n = new m(e, t);
		n.expectToken(c.TokenKind.SOF);
		let r = n.parseConstValueLiteral();
		return n.expectToken(c.TokenKind.EOF), r;
	}
	function f(e, t) {
		let n = new m(e, t);
		n.expectToken(c.TokenKind.SOF);
		let r = n.parseTypeReference();
		return n.expectToken(c.TokenKind.EOF), r;
	}
	function p(e) {
		let t = (0, s.isSource)(e) ? e : new s.Source(e), n = new m(e, { lexer: new o.SchemaCoordinateLexer(t) });
		n.expectToken(c.TokenKind.SOF);
		let r = n.parseSchemaCoordinate();
		return n.expectToken(c.TokenKind.EOF), r;
	}
	var m = class {
		constructor(e, t = {}) {
			let { lexer: n, ...r } = t;
			if (n) this._lexer = n;
			else {
				let t = (0, s.isSource)(e) ? e : new s.Source(e);
				this._lexer = new a.Lexer(t);
			}
			this._options = r, this._tokenCounter = 0;
		}
		get tokenCount() {
			return this._tokenCounter;
		}
		parseName() {
			let e = this.expectToken(c.TokenKind.NAME);
			return this.node(e, {
				kind: i.Kind.NAME,
				value: e.value
			});
		}
		parseDocument() {
			return this.node(this._lexer.token, {
				kind: i.Kind.DOCUMENT,
				definitions: this.many(c.TokenKind.SOF, this.parseDefinition, c.TokenKind.EOF)
			});
		}
		parseDefinition() {
			if (this.peek(c.TokenKind.BRACE_L)) return this.parseOperationDefinition();
			let e = this.peekDescription(), n = e ? this._lexer.lookahead() : this._lexer.token;
			if (e && n.kind === c.TokenKind.BRACE_L) throw (0, t.syntaxError)(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are not supported on shorthand queries.");
			if (n.kind === c.TokenKind.NAME) {
				switch (n.value) {
					case "schema": return this.parseSchemaDefinition();
					case "scalar": return this.parseScalarTypeDefinition();
					case "type": return this.parseObjectTypeDefinition();
					case "interface": return this.parseInterfaceTypeDefinition();
					case "union": return this.parseUnionTypeDefinition();
					case "enum": return this.parseEnumTypeDefinition();
					case "input": return this.parseInputObjectTypeDefinition();
					case "directive": return this.parseDirectiveDefinition();
				}
				switch (n.value) {
					case "query":
					case "mutation":
					case "subscription": return this.parseOperationDefinition();
					case "fragment": return this.parseFragmentDefinition();
				}
				if (e) throw (0, t.syntaxError)(this._lexer.source, this._lexer.token.start, "Unexpected description, only GraphQL definitions support descriptions.");
				switch (n.value) {
					case "extend": return this.parseTypeSystemExtension();
				}
			}
			throw this.unexpected(n);
		}
		parseOperationDefinition() {
			let e = this._lexer.token;
			if (this.peek(c.TokenKind.BRACE_L)) return this.node(e, {
				kind: i.Kind.OPERATION_DEFINITION,
				operation: n.OperationTypeNode.QUERY,
				description: void 0,
				name: void 0,
				variableDefinitions: [],
				directives: [],
				selectionSet: this.parseSelectionSet()
			});
			let t = this.parseDescription(), r = this.parseOperationType(), a;
			return this.peek(c.TokenKind.NAME) && (a = this.parseName()), this.node(e, {
				kind: i.Kind.OPERATION_DEFINITION,
				operation: r,
				description: t,
				name: a,
				variableDefinitions: this.parseVariableDefinitions(),
				directives: this.parseDirectives(!1),
				selectionSet: this.parseSelectionSet()
			});
		}
		parseOperationType() {
			let e = this.expectToken(c.TokenKind.NAME);
			switch (e.value) {
				case "query": return n.OperationTypeNode.QUERY;
				case "mutation": return n.OperationTypeNode.MUTATION;
				case "subscription": return n.OperationTypeNode.SUBSCRIPTION;
			}
			throw this.unexpected(e);
		}
		parseVariableDefinitions() {
			return this.optionalMany(c.TokenKind.PAREN_L, this.parseVariableDefinition, c.TokenKind.PAREN_R);
		}
		parseVariableDefinition() {
			return this.node(this._lexer.token, {
				kind: i.Kind.VARIABLE_DEFINITION,
				description: this.parseDescription(),
				variable: this.parseVariable(),
				type: (this.expectToken(c.TokenKind.COLON), this.parseTypeReference()),
				defaultValue: this.expectOptionalToken(c.TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
				directives: this.parseConstDirectives()
			});
		}
		parseVariable() {
			let e = this._lexer.token;
			return this.expectToken(c.TokenKind.DOLLAR), this.node(e, {
				kind: i.Kind.VARIABLE,
				name: this.parseName()
			});
		}
		parseSelectionSet() {
			return this.node(this._lexer.token, {
				kind: i.Kind.SELECTION_SET,
				selections: this.many(c.TokenKind.BRACE_L, this.parseSelection, c.TokenKind.BRACE_R)
			});
		}
		parseSelection() {
			return this.peek(c.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
		}
		parseField() {
			let e = this._lexer.token, t = this.parseName(), n, r;
			return this.expectOptionalToken(c.TokenKind.COLON) ? (n = t, r = this.parseName()) : r = t, this.node(e, {
				kind: i.Kind.FIELD,
				alias: n,
				name: r,
				arguments: this.parseArguments(!1),
				directives: this.parseDirectives(!1),
				selectionSet: this.peek(c.TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
			});
		}
		parseArguments(e) {
			let t = e ? this.parseConstArgument : this.parseArgument;
			return this.optionalMany(c.TokenKind.PAREN_L, t, c.TokenKind.PAREN_R);
		}
		parseArgument(e = !1) {
			let t = this._lexer.token, n = this.parseName();
			return this.expectToken(c.TokenKind.COLON), this.node(t, {
				kind: i.Kind.ARGUMENT,
				name: n,
				value: this.parseValueLiteral(e)
			});
		}
		parseConstArgument() {
			return this.parseArgument(!0);
		}
		parseFragment() {
			let e = this._lexer.token;
			this.expectToken(c.TokenKind.SPREAD);
			let t = this.expectOptionalKeyword("on");
			return !t && this.peek(c.TokenKind.NAME) ? this.node(e, {
				kind: i.Kind.FRAGMENT_SPREAD,
				name: this.parseFragmentName(),
				directives: this.parseDirectives(!1)
			}) : this.node(e, {
				kind: i.Kind.INLINE_FRAGMENT,
				typeCondition: t ? this.parseNamedType() : void 0,
				directives: this.parseDirectives(!1),
				selectionSet: this.parseSelectionSet()
			});
		}
		parseFragmentDefinition() {
			let e = this._lexer.token, t = this.parseDescription();
			return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
				kind: i.Kind.FRAGMENT_DEFINITION,
				description: t,
				name: this.parseFragmentName(),
				variableDefinitions: this.parseVariableDefinitions(),
				typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
				directives: this.parseDirectives(!1),
				selectionSet: this.parseSelectionSet()
			}) : this.node(e, {
				kind: i.Kind.FRAGMENT_DEFINITION,
				description: t,
				name: this.parseFragmentName(),
				typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
				directives: this.parseDirectives(!1),
				selectionSet: this.parseSelectionSet()
			});
		}
		parseFragmentName() {
			if (this._lexer.token.value === "on") throw this.unexpected();
			return this.parseName();
		}
		parseValueLiteral(e) {
			let n = this._lexer.token;
			switch (n.kind) {
				case c.TokenKind.BRACKET_L: return this.parseList(e);
				case c.TokenKind.BRACE_L: return this.parseObject(e);
				case c.TokenKind.INT: return this.advanceLexer(), this.node(n, {
					kind: i.Kind.INT,
					value: n.value
				});
				case c.TokenKind.FLOAT: return this.advanceLexer(), this.node(n, {
					kind: i.Kind.FLOAT,
					value: n.value
				});
				case c.TokenKind.STRING:
				case c.TokenKind.BLOCK_STRING: return this.parseStringLiteral();
				case c.TokenKind.NAME: switch (this.advanceLexer(), n.value) {
					case "true": return this.node(n, {
						kind: i.Kind.BOOLEAN,
						value: !0
					});
					case "false": return this.node(n, {
						kind: i.Kind.BOOLEAN,
						value: !1
					});
					case "null": return this.node(n, { kind: i.Kind.NULL });
					default: return this.node(n, {
						kind: i.Kind.ENUM,
						value: n.value
					});
				}
				case c.TokenKind.DOLLAR:
					if (e) if (this.expectToken(c.TokenKind.DOLLAR), this._lexer.token.kind === c.TokenKind.NAME) {
						let e = this._lexer.token.value;
						throw (0, t.syntaxError)(this._lexer.source, n.start, `Unexpected variable "$${e}" in constant value.`);
					} else throw this.unexpected(n);
					return this.parseVariable();
				default: throw this.unexpected();
			}
		}
		parseConstValueLiteral() {
			return this.parseValueLiteral(!0);
		}
		parseStringLiteral() {
			let e = this._lexer.token;
			return this.advanceLexer(), this.node(e, {
				kind: i.Kind.STRING,
				value: e.value,
				block: e.kind === c.TokenKind.BLOCK_STRING
			});
		}
		parseList(e) {
			return this.node(this._lexer.token, {
				kind: i.Kind.LIST,
				values: this.any(c.TokenKind.BRACKET_L, () => this.parseValueLiteral(e), c.TokenKind.BRACKET_R)
			});
		}
		parseObject(e) {
			return this.node(this._lexer.token, {
				kind: i.Kind.OBJECT,
				fields: this.any(c.TokenKind.BRACE_L, () => this.parseObjectField(e), c.TokenKind.BRACE_R)
			});
		}
		parseObjectField(e) {
			let t = this._lexer.token, n = this.parseName();
			return this.expectToken(c.TokenKind.COLON), this.node(t, {
				kind: i.Kind.OBJECT_FIELD,
				name: n,
				value: this.parseValueLiteral(e)
			});
		}
		parseDirectives(e) {
			let t = [];
			for (; this.peek(c.TokenKind.AT);) t.push(this.parseDirective(e));
			return t;
		}
		parseConstDirectives() {
			return this.parseDirectives(!0);
		}
		parseDirective(e) {
			let t = this._lexer.token;
			return this.expectToken(c.TokenKind.AT), this.node(t, {
				kind: i.Kind.DIRECTIVE,
				name: this.parseName(),
				arguments: this.parseArguments(e)
			});
		}
		parseTypeReference() {
			let e = this._lexer.token, t;
			if (this.expectOptionalToken(c.TokenKind.BRACKET_L)) {
				let n = this.parseTypeReference();
				this.expectToken(c.TokenKind.BRACKET_R), t = this.node(e, {
					kind: i.Kind.LIST_TYPE,
					type: n
				});
			} else t = this.parseNamedType();
			return this.expectOptionalToken(c.TokenKind.BANG) ? this.node(e, {
				kind: i.Kind.NON_NULL_TYPE,
				type: t
			}) : t;
		}
		parseNamedType() {
			return this.node(this._lexer.token, {
				kind: i.Kind.NAMED_TYPE,
				name: this.parseName()
			});
		}
		peekDescription() {
			return this.peek(c.TokenKind.STRING) || this.peek(c.TokenKind.BLOCK_STRING);
		}
		parseDescription() {
			if (this.peekDescription()) return this.parseStringLiteral();
		}
		parseSchemaDefinition() {
			let e = this._lexer.token, t = this.parseDescription();
			this.expectKeyword("schema");
			let n = this.parseConstDirectives(), r = this.many(c.TokenKind.BRACE_L, this.parseOperationTypeDefinition, c.TokenKind.BRACE_R);
			return this.node(e, {
				kind: i.Kind.SCHEMA_DEFINITION,
				description: t,
				directives: n,
				operationTypes: r
			});
		}
		parseOperationTypeDefinition() {
			let e = this._lexer.token, t = this.parseOperationType();
			this.expectToken(c.TokenKind.COLON);
			let n = this.parseNamedType();
			return this.node(e, {
				kind: i.Kind.OPERATION_TYPE_DEFINITION,
				operation: t,
				type: n
			});
		}
		parseScalarTypeDefinition() {
			let e = this._lexer.token, t = this.parseDescription();
			this.expectKeyword("scalar");
			let n = this.parseName(), r = this.parseConstDirectives();
			return this.node(e, {
				kind: i.Kind.SCALAR_TYPE_DEFINITION,
				description: t,
				name: n,
				directives: r
			});
		}
		parseObjectTypeDefinition() {
			let e = this._lexer.token, t = this.parseDescription();
			this.expectKeyword("type");
			let n = this.parseName(), r = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), o = this.parseFieldsDefinition();
			return this.node(e, {
				kind: i.Kind.OBJECT_TYPE_DEFINITION,
				description: t,
				name: n,
				interfaces: r,
				directives: a,
				fields: o
			});
		}
		parseImplementsInterfaces() {
			return this.expectOptionalKeyword("implements") ? this.delimitedMany(c.TokenKind.AMP, this.parseNamedType) : [];
		}
		parseFieldsDefinition() {
			return this.optionalMany(c.TokenKind.BRACE_L, this.parseFieldDefinition, c.TokenKind.BRACE_R);
		}
		parseFieldDefinition() {
			let e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), r = this.parseArgumentDefs();
			this.expectToken(c.TokenKind.COLON);
			let a = this.parseTypeReference(), o = this.parseConstDirectives();
			return this.node(e, {
				kind: i.Kind.FIELD_DEFINITION,
				description: t,
				name: n,
				arguments: r,
				type: a,
				directives: o
			});
		}
		parseArgumentDefs() {
			return this.optionalMany(c.TokenKind.PAREN_L, this.parseInputValueDef, c.TokenKind.PAREN_R);
		}
		parseInputValueDef() {
			let e = this._lexer.token, t = this.parseDescription(), n = this.parseName();
			this.expectToken(c.TokenKind.COLON);
			let r = this.parseTypeReference(), a;
			this.expectOptionalToken(c.TokenKind.EQUALS) && (a = this.parseConstValueLiteral());
			let o = this.parseConstDirectives();
			return this.node(e, {
				kind: i.Kind.INPUT_VALUE_DEFINITION,
				description: t,
				name: n,
				type: r,
				defaultValue: a,
				directives: o
			});
		}
		parseInterfaceTypeDefinition() {
			let e = this._lexer.token, t = this.parseDescription();
			this.expectKeyword("interface");
			let n = this.parseName(), r = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), o = this.parseFieldsDefinition();
			return this.node(e, {
				kind: i.Kind.INTERFACE_TYPE_DEFINITION,
				description: t,
				name: n,
				interfaces: r,
				directives: a,
				fields: o
			});
		}
		parseUnionTypeDefinition() {
			let e = this._lexer.token, t = this.parseDescription();
			this.expectKeyword("union");
			let n = this.parseName(), r = this.parseConstDirectives(), a = this.parseUnionMemberTypes();
			return this.node(e, {
				kind: i.Kind.UNION_TYPE_DEFINITION,
				description: t,
				name: n,
				directives: r,
				types: a
			});
		}
		parseUnionMemberTypes() {
			return this.expectOptionalToken(c.TokenKind.EQUALS) ? this.delimitedMany(c.TokenKind.PIPE, this.parseNamedType) : [];
		}
		parseEnumTypeDefinition() {
			let e = this._lexer.token, t = this.parseDescription();
			this.expectKeyword("enum");
			let n = this.parseName(), r = this.parseConstDirectives(), a = this.parseEnumValuesDefinition();
			return this.node(e, {
				kind: i.Kind.ENUM_TYPE_DEFINITION,
				description: t,
				name: n,
				directives: r,
				values: a
			});
		}
		parseEnumValuesDefinition() {
			return this.optionalMany(c.TokenKind.BRACE_L, this.parseEnumValueDefinition, c.TokenKind.BRACE_R);
		}
		parseEnumValueDefinition() {
			let e = this._lexer.token, t = this.parseDescription(), n = this.parseEnumValueName(), r = this.parseConstDirectives();
			return this.node(e, {
				kind: i.Kind.ENUM_VALUE_DEFINITION,
				description: t,
				name: n,
				directives: r
			});
		}
		parseEnumValueName() {
			if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw (0, t.syntaxError)(this._lexer.source, this._lexer.token.start, `${h(this._lexer.token)} is reserved and cannot be used for an enum value.`);
			return this.parseName();
		}
		parseInputObjectTypeDefinition() {
			let e = this._lexer.token, t = this.parseDescription();
			this.expectKeyword("input");
			let n = this.parseName(), r = this.parseConstDirectives(), a = this.parseInputFieldsDefinition();
			return this.node(e, {
				kind: i.Kind.INPUT_OBJECT_TYPE_DEFINITION,
				description: t,
				name: n,
				directives: r,
				fields: a
			});
		}
		parseInputFieldsDefinition() {
			return this.optionalMany(c.TokenKind.BRACE_L, this.parseInputValueDef, c.TokenKind.BRACE_R);
		}
		parseTypeSystemExtension() {
			let e = this._lexer.lookahead();
			if (e.kind === c.TokenKind.NAME) switch (e.value) {
				case "schema": return this.parseSchemaExtension();
				case "scalar": return this.parseScalarTypeExtension();
				case "type": return this.parseObjectTypeExtension();
				case "interface": return this.parseInterfaceTypeExtension();
				case "union": return this.parseUnionTypeExtension();
				case "enum": return this.parseEnumTypeExtension();
				case "input": return this.parseInputObjectTypeExtension();
				case "directive":
					if (this._options.experimentalDirectivesOnDirectiveDefinitions) return this.parseDirectiveDefinitionExtension();
					break;
			}
			throw this.unexpected(e);
		}
		parseSchemaExtension() {
			let e = this._lexer.token;
			this.expectKeyword("extend"), this.expectKeyword("schema");
			let t = this.parseConstDirectives(), n = this.optionalMany(c.TokenKind.BRACE_L, this.parseOperationTypeDefinition, c.TokenKind.BRACE_R);
			if (t.length === 0 && n.length === 0) throw this.unexpected();
			return this.node(e, {
				kind: i.Kind.SCHEMA_EXTENSION,
				directives: t,
				operationTypes: n
			});
		}
		parseScalarTypeExtension() {
			let e = this._lexer.token;
			this.expectKeyword("extend"), this.expectKeyword("scalar");
			let t = this.parseName(), n = this.parseConstDirectives();
			if (n.length === 0) throw this.unexpected();
			return this.node(e, {
				kind: i.Kind.SCALAR_TYPE_EXTENSION,
				name: t,
				directives: n
			});
		}
		parseObjectTypeExtension() {
			let e = this._lexer.token;
			this.expectKeyword("extend"), this.expectKeyword("type");
			let t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), a = this.parseFieldsDefinition();
			if (n.length === 0 && r.length === 0 && a.length === 0) throw this.unexpected();
			return this.node(e, {
				kind: i.Kind.OBJECT_TYPE_EXTENSION,
				name: t,
				interfaces: n,
				directives: r,
				fields: a
			});
		}
		parseInterfaceTypeExtension() {
			let e = this._lexer.token;
			this.expectKeyword("extend"), this.expectKeyword("interface");
			let t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), a = this.parseFieldsDefinition();
			if (n.length === 0 && r.length === 0 && a.length === 0) throw this.unexpected();
			return this.node(e, {
				kind: i.Kind.INTERFACE_TYPE_EXTENSION,
				name: t,
				interfaces: n,
				directives: r,
				fields: a
			});
		}
		parseUnionTypeExtension() {
			let e = this._lexer.token;
			this.expectKeyword("extend"), this.expectKeyword("union");
			let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
			if (n.length === 0 && r.length === 0) throw this.unexpected();
			return this.node(e, {
				kind: i.Kind.UNION_TYPE_EXTENSION,
				name: t,
				directives: n,
				types: r
			});
		}
		parseEnumTypeExtension() {
			let e = this._lexer.token;
			this.expectKeyword("extend"), this.expectKeyword("enum");
			let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
			if (n.length === 0 && r.length === 0) throw this.unexpected();
			return this.node(e, {
				kind: i.Kind.ENUM_TYPE_EXTENSION,
				name: t,
				directives: n,
				values: r
			});
		}
		parseInputObjectTypeExtension() {
			let e = this._lexer.token;
			this.expectKeyword("extend"), this.expectKeyword("input");
			let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
			if (n.length === 0 && r.length === 0) throw this.unexpected();
			return this.node(e, {
				kind: i.Kind.INPUT_OBJECT_TYPE_EXTENSION,
				name: t,
				directives: n,
				fields: r
			});
		}
		parseDirectiveDefinitionExtension() {
			let e = this._lexer.token;
			this.expectKeyword("extend"), this.expectKeyword("directive"), this.expectToken(c.TokenKind.AT);
			let t = this.parseName(), n = this.parseConstDirectives();
			if (n.length === 0) throw this.unexpected();
			return this.node(e, {
				kind: i.Kind.DIRECTIVE_EXTENSION,
				name: t,
				directives: n
			});
		}
		parseDirectiveDefinition() {
			let e = this._lexer.token, t = this.parseDescription();
			this.expectKeyword("directive"), this.expectToken(c.TokenKind.AT);
			let n = this.parseName(), r = this.parseArgumentDefs(), a = this._options.experimentalDirectivesOnDirectiveDefinitions ? this.parseConstDirectives() : [], o = this.expectOptionalKeyword("repeatable");
			this.expectKeyword("on");
			let s = this.parseDirectiveLocations();
			return this.node(e, {
				kind: i.Kind.DIRECTIVE_DEFINITION,
				description: t,
				name: n,
				arguments: r,
				directives: a,
				repeatable: o,
				locations: s
			});
		}
		parseDirectiveLocations() {
			return this.delimitedMany(c.TokenKind.PIPE, this.parseDirectiveLocation);
		}
		parseDirectiveLocation() {
			let e = this._lexer.token, t = this.parseName();
			if (Object.prototype.hasOwnProperty.call(r.DirectiveLocation, t.value)) return t;
			throw this.unexpected(e);
		}
		parseSchemaCoordinate() {
			let e = this._lexer.token, t = this.expectOptionalToken(c.TokenKind.AT), n = this.parseName(), r;
			!t && this.expectOptionalToken(c.TokenKind.DOT) && (r = this.parseName());
			let a;
			return (t || r) && this.expectOptionalToken(c.TokenKind.PAREN_L) && (a = this.parseName(), this.expectToken(c.TokenKind.COLON), this.expectToken(c.TokenKind.PAREN_R)), t ? a ? this.node(e, {
				kind: i.Kind.DIRECTIVE_ARGUMENT_COORDINATE,
				name: n,
				argumentName: a
			}) : this.node(e, {
				kind: i.Kind.DIRECTIVE_COORDINATE,
				name: n
			}) : r ? a ? this.node(e, {
				kind: i.Kind.ARGUMENT_COORDINATE,
				name: n,
				fieldName: r,
				argumentName: a
			}) : this.node(e, {
				kind: i.Kind.MEMBER_COORDINATE,
				name: n,
				memberName: r
			}) : this.node(e, {
				kind: i.Kind.TYPE_COORDINATE,
				name: n
			});
		}
		node(e, t) {
			return this._options.noLocation !== !0 && (t.loc = new n.Location(e, this._lexer.lastToken, this._lexer.source)), t;
		}
		peek(e) {
			return this._lexer.token.kind === e;
		}
		expectToken(e) {
			let n = this._lexer.token;
			if (n.kind === e) return this.advanceLexer(), n;
			throw (0, t.syntaxError)(this._lexer.source, n.start, `Expected ${g(e)}, found ${h(n)}.`);
		}
		expectOptionalToken(e) {
			return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
		}
		expectKeyword(e) {
			let n = this._lexer.token;
			if (n.kind === c.TokenKind.NAME && n.value === e) this.advanceLexer();
			else throw (0, t.syntaxError)(this._lexer.source, n.start, `Expected "${e}", found ${h(n)}.`);
		}
		expectOptionalKeyword(e) {
			let t = this._lexer.token;
			return t.kind === c.TokenKind.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
		}
		unexpected(e) {
			let n = e ?? this._lexer.token;
			return (0, t.syntaxError)(this._lexer.source, n.start, `Unexpected ${h(n)}.`);
		}
		any(e, t, n) {
			this.expectToken(e);
			let r = [];
			for (; !this.expectOptionalToken(n);) r.push(t.call(this));
			return r;
		}
		optionalMany(e, t, n) {
			if (this.expectOptionalToken(e)) {
				let e = [];
				do
					e.push(t.call(this));
				while (!this.expectOptionalToken(n));
				return e;
			}
			return [];
		}
		many(e, t, n) {
			this.expectToken(e);
			let r = [];
			do
				r.push(t.call(this));
			while (!this.expectOptionalToken(n));
			return r;
		}
		delimitedMany(e, t) {
			this.expectOptionalToken(e);
			let n = [];
			do
				n.push(t.call(this));
			while (this.expectOptionalToken(e));
			return n;
		}
		advanceLexer() {
			let { maxTokens: e } = this._options, n = this._lexer.advance();
			if (n.kind !== c.TokenKind.EOF && (++this._tokenCounter, e !== void 0 && this._tokenCounter > e)) throw (0, t.syntaxError)(this._lexer.source, n.start, `Document contains more that ${e} tokens. Parsing aborted.`);
		}
	};
	e.Parser = m;
	function h(e) {
		let t = e.value;
		return g(e.kind) + (t == null ? "" : ` "${t}"`);
	}
	function g(e) {
		return (0, a.isPunctuatorTokenKind)(e) ? `"${e}"` : e;
	}
})), $p = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.didYouMean = n;
	var t = 5;
	function n(e, n) {
		let [r, i] = n ? [e, n] : [void 0, e], a = " Did you mean ";
		r && (a += r + " ");
		let o = i.map((e) => `"${e}"`);
		switch (o.length) {
			case 0: return "";
			case 1: return a + o[0] + "?";
			case 2: return a + o[0] + " or " + o[1] + "?";
		}
		let s = o.slice(0, t), c = s.pop();
		return a + s.join(", ") + ", or " + c + "?";
	}
})), em = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.identityFunc = t;
	function t(e) {
		return e;
	}
})), tm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.keyMap = t;
	function t(e, t) {
		let n = Object.create(null);
		for (let r of e) n[t(r)] = r;
		return n;
	}
})), nm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.keyValMap = t;
	function t(e, t, n) {
		let r = Object.create(null);
		for (let i of e) r[t(i)] = n(i);
		return r;
	}
})), rm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.mapValue = t;
	function t(e, t) {
		let n = Object.create(null);
		for (let r of Object.keys(e)) n[r] = t(e[r], r);
		return n;
	}
})), im = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.naturalCompare = t;
	function t(e, t) {
		let r = 0, a = 0;
		for (; r < e.length && a < t.length;) {
			let o = e.charCodeAt(r), s = t.charCodeAt(a);
			if (i(o) && i(s)) {
				let c = 0;
				do
					++r, c = c * 10 + o - n, o = e.charCodeAt(r);
				while (i(o) && c > 0);
				let l = 0;
				do
					++a, l = l * 10 + s - n, s = t.charCodeAt(a);
				while (i(s) && l > 0);
				if (c < l) return -1;
				if (c > l) return 1;
			} else {
				if (o < s) return -1;
				if (o > s) return 1;
				++r, ++a;
			}
		}
		return e.length - t.length;
	}
	var n = 48, r = 57;
	function i(e) {
		return !isNaN(e) && n <= e && e <= r;
	}
})), am = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.suggestionList = n;
	var t = im();
	function n(e, n) {
		let i = Object.create(null), a = new r(e), o = Math.floor(e.length * .4) + 1;
		for (let e of n) {
			let t = a.measure(e, o);
			t !== void 0 && (i[e] = t);
		}
		return Object.keys(i).sort((e, n) => {
			let r = i[e] - i[n];
			return r === 0 ? (0, t.naturalCompare)(e, n) : r;
		});
	}
	var r = class {
		constructor(e) {
			this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = i(this._inputLowerCase), this._rows = [
				Array(e.length + 1).fill(0),
				Array(e.length + 1).fill(0),
				Array(e.length + 1).fill(0)
			];
		}
		measure(e, t) {
			if (this._input === e) return 0;
			let n = e.toLowerCase();
			if (this._inputLowerCase === n) return 1;
			let r = i(n), a = this._inputArray;
			if (r.length < a.length) {
				let e = r;
				r = a, a = e;
			}
			let o = r.length, s = a.length;
			if (o - s > t) return;
			let c = this._rows;
			for (let e = 0; e <= s; e++) c[0][e] = e;
			for (let e = 1; e <= o; e++) {
				let n = c[(e - 1) % 3], i = c[e % 3], o = i[0] = e;
				for (let t = 1; t <= s; t++) {
					let s = r[e - 1] === a[t - 1] ? 0 : 1, l = Math.min(n[t] + 1, i[t - 1] + 1, n[t - 1] + s);
					if (e > 1 && t > 1 && r[e - 1] === a[t - 2] && r[e - 2] === a[t - 1]) {
						let n = c[(e - 2) % 3][t - 2];
						l = Math.min(l, n + 1);
					}
					l < o && (o = l), i[t] = l;
				}
				if (o > t) return;
			}
			let l = c[o % 3][s];
			return l <= t ? l : void 0;
		}
	};
	function i(e) {
		let t = e.length, n = Array(t);
		for (let r = 0; r < t; ++r) n[r] = e.charCodeAt(r);
		return n;
	}
})), om = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.toObjMap = t;
	function t(e) {
		if (e == null) return Object.create(null);
		if (Object.getPrototypeOf(e) === null) return e;
		let t = Object.create(null);
		for (let [n, r] of Object.entries(e)) t[n] = r;
		return t;
	}
})), sm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.printString = t;
	function t(e) {
		return `"${e.replace(n, r)}"`;
	}
	var n = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
	function r(e) {
		return i[e.charCodeAt(0)];
	}
	var i = /* @__PURE__ */ "\\u0000.\\u0001.\\u0002.\\u0003.\\u0004.\\u0005.\\u0006.\\u0007.\\b.\\t.\\n.\\u000B.\\f.\\r.\\u000E.\\u000F.\\u0010.\\u0011.\\u0012.\\u0013.\\u0014.\\u0015.\\u0016.\\u0017.\\u0018.\\u0019.\\u001A.\\u001B.\\u001C.\\u001D.\\u001E.\\u001F...\\\"..........................................................\\\\...................................\\u007F.\\u0080.\\u0081.\\u0082.\\u0083.\\u0084.\\u0085.\\u0086.\\u0087.\\u0088.\\u0089.\\u008A.\\u008B.\\u008C.\\u008D.\\u008E.\\u008F.\\u0090.\\u0091.\\u0092.\\u0093.\\u0094.\\u0095.\\u0096.\\u0097.\\u0098.\\u0099.\\u009A.\\u009B.\\u009C.\\u009D.\\u009E.\\u009F".split(".");
})), cm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.BREAK = void 0, e.getEnterLeaveForKind = c, e.getVisitFn = l, e.visit = o, e.visitInParallel = s;
	var t = Vp(), n = X(), r = Up(), i = Z(), a = Object.freeze({});
	e.BREAK = a;
	function o(e, o, s = r.QueryDocumentKeys) {
		let l = /* @__PURE__ */ new Map();
		for (let e of Object.values(i.Kind)) l.set(e, c(o, e));
		let u, d = Array.isArray(e), f = [e], p = -1, m = [], h = e, g, _, v = [], y = [];
		do {
			p++;
			let e = p === f.length, i = e && m.length !== 0;
			if (e) {
				if (g = y.length === 0 ? void 0 : v[v.length - 1], h = _, _ = y.pop(), i) if (d) {
					h = h.slice();
					let e = 0;
					for (let [t, n] of m) {
						let r = t - e;
						n === null ? (h.splice(r, 1), e++) : h[r] = n;
					}
				} else {
					h = { ...h };
					for (let [e, t] of m) h[e] = t;
				}
				p = u.index, f = u.keys, m = u.edits, d = u.inArray, u = u.prev;
			} else if (_) {
				if (g = d ? p : f[p], h = _[g], h == null) continue;
				v.push(g);
			}
			let c;
			if (!Array.isArray(h)) {
				if ((0, r.isNode)(h) || (0, t.devAssert)(!1, `Invalid AST Node: ${(0, n.inspect)(h)}.`), c = (e ? l.get(h.kind)?.leave : l.get(h.kind)?.enter)?.call(o, h, g, _, v, y), c === a) break;
				if (c === !1) {
					if (!e) {
						v.pop();
						continue;
					}
				} else if (c !== void 0 && (m.push([g, c]), !e)) if ((0, r.isNode)(c)) h = c;
				else {
					v.pop();
					continue;
				}
			}
			c === void 0 && i && m.push([g, h]), e ? v.pop() : (u = {
				inArray: d,
				index: p,
				keys: f,
				edits: m,
				prev: u
			}, d = Array.isArray(h), f = d ? h : s[h.kind] ?? [], p = -1, m = [], _ && y.push(_), _ = h);
		} while (u !== void 0);
		return m.length === 0 ? e : m[m.length - 1][1];
	}
	function s(e) {
		let t = Array(e.length).fill(null), n = Object.create(null);
		for (let r of Object.values(i.Kind)) {
			let i = !1, o = Array(e.length).fill(void 0), s = Array(e.length).fill(void 0);
			for (let t = 0; t < e.length; ++t) {
				let { enter: n, leave: a } = c(e[t], r);
				i ||= n != null || a != null, o[t] = n, s[t] = a;
			}
			i && (n[r] = {
				enter(...n) {
					let r = n[0];
					for (let i = 0; i < e.length; i++) if (t[i] === null) {
						let s = o[i]?.apply(e[i], n);
						if (s === !1) t[i] = r;
						else if (s === a) t[i] = a;
						else if (s !== void 0) return s;
					}
				},
				leave(...n) {
					let r = n[0];
					for (let i = 0; i < e.length; i++) if (t[i] === null) {
						let r = s[i]?.apply(e[i], n);
						if (r === a) t[i] = a;
						else if (r !== void 0 && r !== !1) return r;
					} else t[i] === r && (t[i] = null);
				}
			});
		}
		return n;
	}
	function c(e, t) {
		let n = e[t];
		return typeof n == "object" ? n : typeof n == "function" ? {
			enter: n,
			leave: void 0
		} : {
			enter: e.enter,
			leave: e.leave
		};
	}
	/* c8 ignore next 8 */
	function l(e, t, n) {
		let { enter: r, leave: i } = c(e, t);
		return n ? i : r;
	}
})), lm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.print = i;
	var t = Kp(), n = sm(), r = cm();
	function i(e) {
		return (0, r.visit)(e, o);
	}
	var a = 80, o = {
		Name: { leave: (e) => e.value },
		Variable: { leave: (e) => "$" + e.name },
		Document: { leave: (e) => s(e.definitions, "\n\n") },
		OperationDefinition: { leave(e) {
			let t = d(e.variableDefinitions) ? l("(\n", s(e.variableDefinitions, "\n"), "\n)") : l("(", s(e.variableDefinitions, ", "), ")"), n = l("", e.description, "\n") + s([
				e.operation,
				s([e.name, t]),
				s(e.directives, " ")
			], " ");
			return (n === "query" ? "" : n + " ") + e.selectionSet;
		} },
		VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r, description: i }) => l("", i, "\n") + e + ": " + t + l(" = ", n) + l(" ", s(r, " ")) },
		SelectionSet: { leave: ({ selections: e }) => c(e) },
		Field: { leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
			let o = l("", e, ": ") + t, c = o + l("(", s(n, ", "), ")");
			return c.length > a && (c = o + l("(\n", u(s(n, "\n")), "\n)")), s([
				c,
				s(r, " "),
				i
			], " ");
		} },
		Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
		FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + l(" ", s(t, " ")) },
		InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => s([
			"...",
			l("on ", e),
			s(t, " "),
			n
		], " ") },
		FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i, description: a }) => l("", a, "\n") + `fragment ${e}${l("(", s(n, ", "), ")")} on ${t} ${l("", s(r, " "), " ")}` + i },
		IntValue: { leave: ({ value: e }) => e },
		FloatValue: { leave: ({ value: e }) => e },
		StringValue: { leave: ({ value: e, block: r }) => r ? (0, t.printBlockString)(e) : (0, n.printString)(e) },
		BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" },
		NullValue: { leave: () => "null" },
		EnumValue: { leave: ({ value: e }) => e },
		ListValue: { leave: ({ values: e }) => "[" + s(e, ", ") + "]" },
		ObjectValue: { leave: ({ fields: e }) => "{" + s(e, ", ") + "}" },
		ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
		Directive: { leave: ({ name: e, arguments: t }) => "@" + e + l("(", s(t, ", "), ")") },
		NamedType: { leave: ({ name: e }) => e },
		ListType: { leave: ({ type: e }) => "[" + e + "]" },
		NonNullType: { leave: ({ type: e }) => e + "!" },
		SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => l("", e, "\n") + s([
			"schema",
			s(t, " "),
			c(n)
		], " ") },
		OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t },
		ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => l("", e, "\n") + s([
			"scalar",
			t,
			s(n, " ")
		], " ") },
		ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => l("", e, "\n") + s([
			"type",
			t,
			l("implements ", s(n, " & ")),
			s(r, " "),
			c(i)
		], " ") },
		FieldDefinition: { leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => l("", e, "\n") + t + (d(n) ? l("(\n", u(s(n, "\n")), "\n)") : l("(", s(n, ", "), ")")) + ": " + r + l(" ", s(i, " ")) },
		InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => l("", e, "\n") + s([
			t + ": " + n,
			l("= ", r),
			s(i, " ")
		], " ") },
		InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => l("", e, "\n") + s([
			"interface",
			t,
			l("implements ", s(n, " & ")),
			s(r, " "),
			c(i)
		], " ") },
		UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => l("", e, "\n") + s([
			"union",
			t,
			s(n, " "),
			l("= ", s(r, " | "))
		], " ") },
		EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => l("", e, "\n") + s([
			"enum",
			t,
			s(n, " "),
			c(r)
		], " ") },
		EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => l("", e, "\n") + s([t, s(n, " ")], " ") },
		InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => l("", e, "\n") + s([
			"input",
			t,
			s(n, " "),
			c(r)
		], " ") },
		DirectiveDefinition: { leave: ({ description: e, name: t, arguments: n, directives: r, repeatable: i, locations: a }) => l("", e, "\n") + "directive @" + t + (d(n) ? l("(\n", u(s(n, "\n")), "\n)") : l("(", s(n, ", "), ")")) + l(" ", s(r, " ")) + (i ? " repeatable" : "") + " on " + s(a, " | ") },
		SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => s([
			"extend schema",
			s(e, " "),
			c(t)
		], " ") },
		ScalarTypeExtension: { leave: ({ name: e, directives: t }) => s([
			"extend scalar",
			e,
			s(t, " ")
		], " ") },
		ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => s([
			"extend type",
			e,
			l("implements ", s(t, " & ")),
			s(n, " "),
			c(r)
		], " ") },
		InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => s([
			"extend interface",
			e,
			l("implements ", s(t, " & ")),
			s(n, " "),
			c(r)
		], " ") },
		UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => s([
			"extend union",
			e,
			s(t, " "),
			l("= ", s(n, " | "))
		], " ") },
		EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => s([
			"extend enum",
			e,
			s(t, " "),
			c(n)
		], " ") },
		InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => s([
			"extend input",
			e,
			s(t, " "),
			c(n)
		], " ") },
		DirectiveExtension: { leave: ({ name: e, directives: t }) => s(["extend directive @" + e, s(t, " ")], " ") },
		TypeCoordinate: { leave: ({ name: e }) => e },
		MemberCoordinate: { leave: ({ name: e, memberName: t }) => s([e, l(".", t)]) },
		ArgumentCoordinate: { leave: ({ name: e, fieldName: t, argumentName: n }) => s([
			e,
			l(".", t),
			l("(", n, ":)")
		]) },
		DirectiveCoordinate: { leave: ({ name: e }) => s(["@", e]) },
		DirectiveArgumentCoordinate: { leave: ({ name: e, argumentName: t }) => s([
			"@",
			e,
			l("(", t, ":)")
		]) }
	};
	function s(e, t = "") {
		return e?.filter((e) => e).join(t) ?? "";
	}
	function c(e) {
		return l("{\n", u(s(e, "\n")), "\n}");
	}
	function l(e, t, n = "") {
		return t != null && t !== "" ? e + t + n : "";
	}
	function u(e) {
		return l("  ", e.replace(/\n/g, "\n  "));
	}
	function d(e) {
		/* c8 ignore next */
		return e?.some((e) => e.includes("\n")) ?? !1;
	}
})), um = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.valueFromASTUntyped = r;
	var t = nm(), n = Z();
	function r(e, i) {
		switch (e.kind) {
			case n.Kind.NULL: return null;
			case n.Kind.INT: return parseInt(e.value, 10);
			case n.Kind.FLOAT: return parseFloat(e.value);
			case n.Kind.STRING:
			case n.Kind.ENUM:
			case n.Kind.BOOLEAN: return e.value;
			case n.Kind.LIST: return e.values.map((e) => r(e, i));
			case n.Kind.OBJECT: return (0, t.keyValMap)(e.fields, (e) => e.name.value, (e) => r(e.value, i));
			case n.Kind.VARIABLE: return i?.[e.name.value];
		}
	}
})), dm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.assertEnumValueName = a, e.assertName = i;
	var t = Vp(), n = Y(), r = Gp();
	function i(e) {
		if (e ?? (0, t.devAssert)(!1, "Must provide name."), typeof e == "string" || (0, t.devAssert)(!1, "Expected name to be a string."), e.length === 0) throw new n.GraphQLError("Expected name to be a non-empty string.");
		for (let t = 1; t < e.length; ++t) if (!(0, r.isNameContinue)(e.charCodeAt(t))) throw new n.GraphQLError(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
		if (!(0, r.isNameStart)(e.charCodeAt(0))) throw new n.GraphQLError(`Names must start with [_a-zA-Z] but "${e}" does not.`);
		return e;
	}
	function a(e) {
		if (e === "true" || e === "false" || e === "null") throw new n.GraphQLError(`Enum values cannot be named: ${e}`);
		return i(e);
	}
})), Q = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.GraphQLUnionType = e.GraphQLScalarType = e.GraphQLObjectType = e.GraphQLNonNull = e.GraphQLList = e.GraphQLInterfaceType = e.GraphQLInputObjectType = e.GraphQLEnumType = void 0, e.argsToArgsConfig = Ae, e.assertAbstractType = pe, e.assertCompositeType = de, e.assertEnumType = O, e.assertInputObjectType = ee, e.assertInputType = ae, e.assertInterfaceType = w, e.assertLeafType = le, e.assertListType = A, e.assertNamedType = xe, e.assertNonNullType = re, e.assertNullableType = ve, e.assertObjectType = S, e.assertOutputType = se, e.assertScalarType = b, e.assertType = v, e.assertUnionType = E, e.assertWrappingType = ge, e.defineArguments = De, e.getNamedType = Se, e.getNullableType = ye, e.isAbstractType = fe, e.isCompositeType = ue, e.isEnumType = D, e.isInputObjectType = k, e.isInputType = ie, e.isInterfaceType = C, e.isLeafType = ce, e.isListType = te, e.isNamedType = be, e.isNonNullType = ne, e.isNullableType = _e, e.isObjectType = x, e.isOutputType = oe, e.isRequiredArgument = je, e.isRequiredInputField = Re, e.isScalarType = y, e.isType = _, e.isUnionType = T, e.isWrappingType = j, e.resolveObjMapThunk = we, e.resolveReadonlyArrayThunk = Ce;
	var t = Vp(), n = $p(), r = em(), i = X(), a = Xp(), o = hf(), s = tm(), c = nm(), l = rm(), u = am(), d = om(), f = Y(), p = Z(), m = lm(), h = um(), g = dm();
	function _(e) {
		return y(e) || x(e) || C(e) || T(e) || D(e) || k(e) || te(e) || ne(e);
	}
	function v(e) {
		if (!_(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL type.`);
		return e;
	}
	function y(e) {
		return (0, a.instanceOf)(e, M);
	}
	function b(e) {
		if (!y(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL Scalar type.`);
		return e;
	}
	function x(e) {
		return (0, a.instanceOf)(e, Te);
	}
	function S(e) {
		if (!x(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL Object type.`);
		return e;
	}
	function C(e) {
		return (0, a.instanceOf)(e, P);
	}
	function w(e) {
		if (!C(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL Interface type.`);
		return e;
	}
	function T(e) {
		return (0, a.instanceOf)(e, F);
	}
	function E(e) {
		if (!T(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL Union type.`);
		return e;
	}
	function D(e) {
		return (0, a.instanceOf)(e, Ne);
	}
	function O(e) {
		if (!D(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL Enum type.`);
		return e;
	}
	function k(e) {
		return (0, a.instanceOf)(e, Ie);
	}
	function ee(e) {
		if (!k(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL Input Object type.`);
		return e;
	}
	function te(e) {
		return (0, a.instanceOf)(e, me);
	}
	function A(e) {
		if (!te(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL List type.`);
		return e;
	}
	function ne(e) {
		return (0, a.instanceOf)(e, he);
	}
	function re(e) {
		if (!ne(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL Non-Null type.`);
		return e;
	}
	function ie(e) {
		return y(e) || D(e) || k(e) || j(e) && ie(e.ofType);
	}
	function ae(e) {
		if (!ie(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL input type.`);
		return e;
	}
	function oe(e) {
		return y(e) || x(e) || C(e) || T(e) || D(e) || j(e) && oe(e.ofType);
	}
	function se(e) {
		if (!oe(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL output type.`);
		return e;
	}
	function ce(e) {
		return y(e) || D(e);
	}
	function le(e) {
		if (!ce(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL leaf type.`);
		return e;
	}
	function ue(e) {
		return x(e) || C(e) || T(e);
	}
	function de(e) {
		if (!ue(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL composite type.`);
		return e;
	}
	function fe(e) {
		return C(e) || T(e);
	}
	function pe(e) {
		if (!fe(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL abstract type.`);
		return e;
	}
	var me = class {
		constructor(e) {
			_(e) || (0, t.devAssert)(!1, `Expected ${(0, i.inspect)(e)} to be a GraphQL type.`), this.ofType = e;
		}
		get [Symbol.toStringTag]() {
			return "GraphQLList";
		}
		toString() {
			return "[" + String(this.ofType) + "]";
		}
		toJSON() {
			return this.toString();
		}
	};
	e.GraphQLList = me;
	var he = class {
		constructor(e) {
			_e(e) || (0, t.devAssert)(!1, `Expected ${(0, i.inspect)(e)} to be a GraphQL nullable type.`), this.ofType = e;
		}
		get [Symbol.toStringTag]() {
			return "GraphQLNonNull";
		}
		toString() {
			return String(this.ofType) + "!";
		}
		toJSON() {
			return this.toString();
		}
	};
	e.GraphQLNonNull = he;
	function j(e) {
		return te(e) || ne(e);
	}
	function ge(e) {
		if (!j(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL wrapping type.`);
		return e;
	}
	function _e(e) {
		return _(e) && !ne(e);
	}
	function ve(e) {
		if (!_e(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL nullable type.`);
		return e;
	}
	function ye(e) {
		if (e) return ne(e) ? e.ofType : e;
	}
	function be(e) {
		return y(e) || x(e) || C(e) || T(e) || D(e) || k(e);
	}
	function xe(e) {
		if (!be(e)) throw Error(`Expected ${(0, i.inspect)(e)} to be a GraphQL named type.`);
		return e;
	}
	function Se(e) {
		if (e) {
			let t = e;
			for (; j(t);) t = t.ofType;
			return t;
		}
	}
	function Ce(e) {
		return typeof e == "function" ? e() : e;
	}
	function we(e) {
		return typeof e == "function" ? e() : e;
	}
	var M = class {
		constructor(e) {
			let n = e.parseValue ?? r.identityFunc;
			this.name = (0, g.assertName)(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = e.serialize ?? r.identityFunc, this.parseValue = n, this.parseLiteral = e.parseLiteral ?? ((e, t) => n((0, h.valueFromASTUntyped)(e, t))), this.extensions = (0, d.toObjMap)(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], e.specifiedByURL == null || typeof e.specifiedByURL == "string" || (0, t.devAssert)(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${(0, i.inspect)(e.specifiedByURL)}.`), e.serialize == null || typeof e.serialize == "function" || (0, t.devAssert)(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), e.parseLiteral && (typeof e.parseValue == "function" && typeof e.parseLiteral == "function" || (0, t.devAssert)(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`));
		}
		get [Symbol.toStringTag]() {
			return "GraphQLScalarType";
		}
		toConfig() {
			return {
				name: this.name,
				description: this.description,
				specifiedByURL: this.specifiedByURL,
				serialize: this.serialize,
				parseValue: this.parseValue,
				parseLiteral: this.parseLiteral,
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes
			};
		}
		toString() {
			return this.name;
		}
		toJSON() {
			return this.toString();
		}
	};
	e.GraphQLScalarType = M;
	var Te = class {
		constructor(e) {
			this.name = (0, g.assertName)(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = (0, d.toObjMap)(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this._fields = () => Ee(e), this._interfaces = () => N(e), e.isTypeOf == null || typeof e.isTypeOf == "function" || (0, t.devAssert)(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${(0, i.inspect)(e.isTypeOf)}.`);
		}
		get [Symbol.toStringTag]() {
			return "GraphQLObjectType";
		}
		getFields() {
			return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
		}
		getInterfaces() {
			return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
		}
		toConfig() {
			return {
				name: this.name,
				description: this.description,
				interfaces: this.getInterfaces(),
				fields: ke(this.getFields()),
				isTypeOf: this.isTypeOf,
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes
			};
		}
		toString() {
			return this.name;
		}
		toJSON() {
			return this.toString();
		}
	};
	e.GraphQLObjectType = Te;
	function N(e) {
		let n = Ce(e.interfaces ?? []);
		return Array.isArray(n) || (0, t.devAssert)(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n;
	}
	function Ee(e) {
		let n = we(e.fields);
		return Oe(n) || (0, t.devAssert)(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), (0, l.mapValue)(n, (n, r) => {
			Oe(n) || (0, t.devAssert)(!1, `${e.name}.${r} field config must be an object.`), n.resolve == null || typeof n.resolve == "function" || (0, t.devAssert)(!1, `${e.name}.${r} field resolver must be a function if provided, but got: ${(0, i.inspect)(n.resolve)}.`);
			let a = n.args ?? {};
			return Oe(a) || (0, t.devAssert)(!1, `${e.name}.${r} args must be an object with argument names as keys.`), {
				name: (0, g.assertName)(r),
				description: n.description,
				type: n.type,
				args: De(a),
				resolve: n.resolve,
				subscribe: n.subscribe,
				deprecationReason: n.deprecationReason,
				extensions: (0, d.toObjMap)(n.extensions),
				astNode: n.astNode
			};
		});
	}
	function De(e) {
		return Object.entries(e).map(([e, t]) => ({
			name: (0, g.assertName)(e),
			description: t.description,
			type: t.type,
			defaultValue: t.defaultValue,
			deprecationReason: t.deprecationReason,
			extensions: (0, d.toObjMap)(t.extensions),
			astNode: t.astNode
		}));
	}
	function Oe(e) {
		return (0, o.isObjectLike)(e) && !Array.isArray(e);
	}
	function ke(e) {
		return (0, l.mapValue)(e, (e) => ({
			description: e.description,
			type: e.type,
			args: Ae(e.args),
			resolve: e.resolve,
			subscribe: e.subscribe,
			deprecationReason: e.deprecationReason,
			extensions: e.extensions,
			astNode: e.astNode
		}));
	}
	function Ae(e) {
		return (0, c.keyValMap)(e, (e) => e.name, (e) => ({
			description: e.description,
			type: e.type,
			defaultValue: e.defaultValue,
			deprecationReason: e.deprecationReason,
			extensions: e.extensions,
			astNode: e.astNode
		}));
	}
	function je(e) {
		return ne(e.type) && e.defaultValue === void 0;
	}
	var P = class {
		constructor(e) {
			this.name = (0, g.assertName)(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = (0, d.toObjMap)(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this._fields = Ee.bind(void 0, e), this._interfaces = N.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || (0, t.devAssert)(!1, `${this.name} must provide "resolveType" as a function, but got: ${(0, i.inspect)(e.resolveType)}.`);
		}
		get [Symbol.toStringTag]() {
			return "GraphQLInterfaceType";
		}
		getFields() {
			return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
		}
		getInterfaces() {
			return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
		}
		toConfig() {
			return {
				name: this.name,
				description: this.description,
				interfaces: this.getInterfaces(),
				fields: ke(this.getFields()),
				resolveType: this.resolveType,
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes
			};
		}
		toString() {
			return this.name;
		}
		toJSON() {
			return this.toString();
		}
	};
	e.GraphQLInterfaceType = P;
	var F = class {
		constructor(e) {
			this.name = (0, g.assertName)(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = (0, d.toObjMap)(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this._types = Me.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || (0, t.devAssert)(!1, `${this.name} must provide "resolveType" as a function, but got: ${(0, i.inspect)(e.resolveType)}.`);
		}
		get [Symbol.toStringTag]() {
			return "GraphQLUnionType";
		}
		getTypes() {
			return typeof this._types == "function" && (this._types = this._types()), this._types;
		}
		toConfig() {
			return {
				name: this.name,
				description: this.description,
				types: this.getTypes(),
				resolveType: this.resolveType,
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes
			};
		}
		toString() {
			return this.name;
		}
		toJSON() {
			return this.toString();
		}
	};
	e.GraphQLUnionType = F;
	function Me(e) {
		let n = Ce(e.types);
		return Array.isArray(n) || (0, t.devAssert)(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), n;
	}
	var Ne = class {
		constructor(e) {
			this.name = (0, g.assertName)(e.name), this.description = e.description, this.extensions = (0, d.toObjMap)(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this._values = typeof e.values == "function" ? e.values : Fe(this.name, e.values), this._valueLookup = null, this._nameLookup = null;
		}
		get [Symbol.toStringTag]() {
			return "GraphQLEnumType";
		}
		getValues() {
			return typeof this._values == "function" && (this._values = Fe(this.name, this._values())), this._values;
		}
		getValue(e) {
			return this._nameLookup === null && (this._nameLookup = (0, s.keyMap)(this.getValues(), (e) => e.name)), this._nameLookup[e];
		}
		serialize(e) {
			this._valueLookup === null && (this._valueLookup = new Map(this.getValues().map((e) => [e.value, e])));
			let t = this._valueLookup.get(e);
			if (t === void 0) throw new f.GraphQLError(`Enum "${this.name}" cannot represent value: ${(0, i.inspect)(e)}`);
			return t.name;
		}
		parseValue(e) {
			if (typeof e != "string") {
				let t = (0, i.inspect)(e);
				throw new f.GraphQLError(`Enum "${this.name}" cannot represent non-string value: ${t}.` + Pe(this, t));
			}
			let t = this.getValue(e);
			if (t == null) throw new f.GraphQLError(`Value "${e}" does not exist in "${this.name}" enum.` + Pe(this, e));
			return t.value;
		}
		parseLiteral(e, t) {
			if (e.kind !== p.Kind.ENUM) {
				let t = (0, m.print)(e);
				throw new f.GraphQLError(`Enum "${this.name}" cannot represent non-enum value: ${t}.` + Pe(this, t), { nodes: e });
			}
			let n = this.getValue(e.value);
			if (n == null) {
				let t = (0, m.print)(e);
				throw new f.GraphQLError(`Value "${t}" does not exist in "${this.name}" enum.` + Pe(this, t), { nodes: e });
			}
			return n.value;
		}
		toConfig() {
			let e = (0, c.keyValMap)(this.getValues(), (e) => e.name, (e) => ({
				description: e.description,
				value: e.value,
				deprecationReason: e.deprecationReason,
				extensions: e.extensions,
				astNode: e.astNode
			}));
			return {
				name: this.name,
				description: this.description,
				values: e,
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes
			};
		}
		toString() {
			return this.name;
		}
		toJSON() {
			return this.toString();
		}
	};
	e.GraphQLEnumType = Ne;
	function Pe(e, t) {
		let r = e.getValues().map((e) => e.name), i = (0, u.suggestionList)(t, r);
		return (0, n.didYouMean)("the enum value", i);
	}
	function Fe(e, n) {
		return Oe(n) || (0, t.devAssert)(!1, `${e} values must be an object with value names as keys.`), Object.entries(n).map(([n, r]) => (Oe(r) || (0, t.devAssert)(!1, `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${(0, i.inspect)(r)}.`), {
			name: (0, g.assertEnumValueName)(n),
			description: r.description,
			value: r.value === void 0 ? n : r.value,
			deprecationReason: r.deprecationReason,
			extensions: (0, d.toObjMap)(r.extensions),
			astNode: r.astNode
		}));
	}
	var Ie = class {
		constructor(e) {
			this.name = (0, g.assertName)(e.name), this.description = e.description, this.extensions = (0, d.toObjMap)(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this.isOneOf = e.isOneOf ?? !1, this._fields = Le.bind(void 0, e);
		}
		get [Symbol.toStringTag]() {
			return "GraphQLInputObjectType";
		}
		getFields() {
			return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
		}
		toConfig() {
			let e = (0, l.mapValue)(this.getFields(), (e) => ({
				description: e.description,
				type: e.type,
				defaultValue: e.defaultValue,
				deprecationReason: e.deprecationReason,
				extensions: e.extensions,
				astNode: e.astNode
			}));
			return {
				name: this.name,
				description: this.description,
				fields: e,
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes,
				isOneOf: this.isOneOf
			};
		}
		toString() {
			return this.name;
		}
		toJSON() {
			return this.toString();
		}
	};
	e.GraphQLInputObjectType = Ie;
	function Le(e) {
		let n = we(e.fields);
		return Oe(n) || (0, t.devAssert)(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), (0, l.mapValue)(n, (n, r) => (!("resolve" in n) || (0, t.devAssert)(!1, `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`), {
			name: (0, g.assertName)(r),
			description: n.description,
			type: n.type,
			defaultValue: n.defaultValue,
			deprecationReason: n.deprecationReason,
			extensions: (0, d.toObjMap)(n.extensions),
			astNode: n.astNode
		}));
	}
	function Re(e) {
		return ne(e.type) && e.defaultValue === void 0;
	}
})), fm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.doTypesOverlap = i, e.isEqualType = n, e.isTypeSubTypeOf = r;
	var t = Q();
	function n(e, r) {
		return e === r ? !0 : (0, t.isNonNullType)(e) && (0, t.isNonNullType)(r) || (0, t.isListType)(e) && (0, t.isListType)(r) ? n(e.ofType, r.ofType) : !1;
	}
	function r(e, n, i) {
		return n === i ? !0 : (0, t.isNonNullType)(i) ? (0, t.isNonNullType)(n) ? r(e, n.ofType, i.ofType) : !1 : (0, t.isNonNullType)(n) ? r(e, n.ofType, i) : (0, t.isListType)(i) ? (0, t.isListType)(n) ? r(e, n.ofType, i.ofType) : !1 : (0, t.isListType)(n) ? !1 : (0, t.isAbstractType)(i) && ((0, t.isInterfaceType)(n) || (0, t.isObjectType)(n)) && e.isSubType(i, n);
	}
	function i(e, n, r) {
		return n === r ? !0 : (0, t.isAbstractType)(n) ? (0, t.isAbstractType)(r) ? e.getPossibleTypes(n).some((t) => e.isSubType(r, t)) : e.isSubType(n, r) : (0, t.isAbstractType)(r) ? e.isSubType(r, n) : !1;
	}
})), pm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.GraphQLString = e.GraphQLInt = e.GraphQLID = e.GraphQLFloat = e.GraphQLBoolean = e.GRAPHQL_MIN_INT = e.GRAPHQL_MAX_INT = void 0, e.isSpecifiedScalarType = h, e.specifiedScalarTypes = void 0;
	var t = X(), n = hf(), r = Y(), i = Z(), a = lm(), o = Q(), s = 2147483647;
	e.GRAPHQL_MAX_INT = s;
	var c = -2147483648;
	e.GRAPHQL_MIN_INT = c;
	var l = new o.GraphQLScalarType({
		name: "Int",
		description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
		serialize(e) {
			let n = g(e);
			if (typeof n == "boolean") return +!!n;
			let i = n;
			if (typeof n == "string" && n !== "" && (i = Number(n)), typeof i != "number" || !Number.isInteger(i)) throw new r.GraphQLError(`Int cannot represent non-integer value: ${(0, t.inspect)(n)}`);
			if (i > s || i < c) throw new r.GraphQLError("Int cannot represent non 32-bit signed integer value: " + (0, t.inspect)(n));
			return i;
		},
		parseValue(e) {
			if (typeof e != "number" || !Number.isInteger(e)) throw new r.GraphQLError(`Int cannot represent non-integer value: ${(0, t.inspect)(e)}`);
			if (e > s || e < c) throw new r.GraphQLError(`Int cannot represent non 32-bit signed integer value: ${e}`);
			return e;
		},
		parseLiteral(e) {
			if (e.kind !== i.Kind.INT) throw new r.GraphQLError(`Int cannot represent non-integer value: ${(0, a.print)(e)}`, { nodes: e });
			let t = parseInt(e.value, 10);
			if (t > s || t < c) throw new r.GraphQLError(`Int cannot represent non 32-bit signed integer value: ${e.value}`, { nodes: e });
			return t;
		}
	});
	e.GraphQLInt = l;
	var u = new o.GraphQLScalarType({
		name: "Float",
		description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
		serialize(e) {
			let n = g(e);
			if (typeof n == "boolean") return +!!n;
			let i = n;
			if (typeof n == "string" && n !== "" && (i = Number(n)), typeof i != "number" || !Number.isFinite(i)) throw new r.GraphQLError(`Float cannot represent non numeric value: ${(0, t.inspect)(n)}`);
			return i;
		},
		parseValue(e) {
			if (typeof e != "number" || !Number.isFinite(e)) throw new r.GraphQLError(`Float cannot represent non numeric value: ${(0, t.inspect)(e)}`);
			return e;
		},
		parseLiteral(e) {
			if (e.kind !== i.Kind.FLOAT && e.kind !== i.Kind.INT) throw new r.GraphQLError(`Float cannot represent non numeric value: ${(0, a.print)(e)}`, e);
			return parseFloat(e.value);
		}
	});
	e.GraphQLFloat = u;
	var d = new o.GraphQLScalarType({
		name: "String",
		description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
		serialize(e) {
			let n = g(e);
			if (typeof n == "string") return n;
			if (typeof n == "boolean") return n ? "true" : "false";
			if (typeof n == "number" && Number.isFinite(n)) return n.toString();
			throw new r.GraphQLError(`String cannot represent value: ${(0, t.inspect)(e)}`);
		},
		parseValue(e) {
			if (typeof e != "string") throw new r.GraphQLError(`String cannot represent a non string value: ${(0, t.inspect)(e)}`);
			return e;
		},
		parseLiteral(e) {
			if (e.kind !== i.Kind.STRING) throw new r.GraphQLError(`String cannot represent a non string value: ${(0, a.print)(e)}`, { nodes: e });
			return e.value;
		}
	});
	e.GraphQLString = d;
	var f = new o.GraphQLScalarType({
		name: "Boolean",
		description: "The `Boolean` scalar type represents `true` or `false`.",
		serialize(e) {
			let n = g(e);
			if (typeof n == "boolean") return n;
			if (Number.isFinite(n)) return n !== 0;
			throw new r.GraphQLError(`Boolean cannot represent a non boolean value: ${(0, t.inspect)(n)}`);
		},
		parseValue(e) {
			if (typeof e != "boolean") throw new r.GraphQLError(`Boolean cannot represent a non boolean value: ${(0, t.inspect)(e)}`);
			return e;
		},
		parseLiteral(e) {
			if (e.kind !== i.Kind.BOOLEAN) throw new r.GraphQLError(`Boolean cannot represent a non boolean value: ${(0, a.print)(e)}`, { nodes: e });
			return e.value;
		}
	});
	e.GraphQLBoolean = f;
	var p = new o.GraphQLScalarType({
		name: "ID",
		description: "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
		serialize(e) {
			let n = g(e);
			if (typeof n == "string") return n;
			if (Number.isInteger(n)) return String(n);
			throw new r.GraphQLError(`ID cannot represent value: ${(0, t.inspect)(e)}`);
		},
		parseValue(e) {
			if (typeof e == "string") return e;
			if (typeof e == "number" && Number.isInteger(e)) return e.toString();
			throw new r.GraphQLError(`ID cannot represent value: ${(0, t.inspect)(e)}`);
		},
		parseLiteral(e) {
			if (e.kind !== i.Kind.STRING && e.kind !== i.Kind.INT) throw new r.GraphQLError("ID cannot represent a non-string and non-integer value: " + (0, a.print)(e), { nodes: e });
			return e.value;
		}
	});
	e.GraphQLID = p;
	var m = Object.freeze([
		d,
		l,
		u,
		f,
		p
	]);
	e.specifiedScalarTypes = m;
	function h(e) {
		return m.some(({ name: t }) => e.name === t);
	}
	function g(e) {
		if ((0, n.isObjectLike)(e)) {
			if (typeof e.valueOf == "function") {
				let t = e.valueOf();
				if (!(0, n.isObjectLike)(t)) return t;
			}
			if (typeof e.toJSON == "function") return e.toJSON();
		}
		return e;
	}
})), mm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.GraphQLSpecifiedByDirective = e.GraphQLSkipDirective = e.GraphQLOneOfDirective = e.GraphQLIncludeDirective = e.GraphQLDirective = e.GraphQLDeprecatedDirective = e.DEFAULT_DEPRECATION_REASON = void 0, e.assertDirective = d, e.isDirective = u, e.isSpecifiedDirective = b, e.specifiedDirectives = void 0;
	var t = Vp(), n = X(), r = Xp(), i = hf(), a = om(), o = Wp(), s = dm(), c = Q(), l = pm();
	function u(e) {
		return (0, r.instanceOf)(e, f);
	}
	function d(e) {
		if (!u(e)) throw Error(`Expected ${(0, n.inspect)(e)} to be a GraphQL directive.`);
		return e;
	}
	var f = class {
		constructor(e) {
			this.name = (0, s.assertName)(e.name), this.description = e.description, this.locations = e.locations, this.isRepeatable = e.isRepeatable ?? !1, this.deprecationReason = e.deprecationReason, this.extensions = (0, a.toObjMap)(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], Array.isArray(e.locations) || (0, t.devAssert)(!1, `@${e.name} locations must be an Array.`);
			let n = e.args ?? {};
			(0, i.isObjectLike)(n) && !Array.isArray(n) || (0, t.devAssert)(!1, `@${e.name} args must be an object with argument names as keys.`), this.args = (0, c.defineArguments)(n);
		}
		get [Symbol.toStringTag]() {
			return "GraphQLDirective";
		}
		toConfig() {
			return {
				name: this.name,
				description: this.description,
				locations: this.locations,
				args: (0, c.argsToArgsConfig)(this.args),
				isRepeatable: this.isRepeatable,
				deprecationReason: this.deprecationReason,
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes
			};
		}
		toString() {
			return "@" + this.name;
		}
		toJSON() {
			return this.toString();
		}
	};
	e.GraphQLDirective = f;
	var p = new f({
		name: "include",
		description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
		locations: [
			o.DirectiveLocation.FIELD,
			o.DirectiveLocation.FRAGMENT_SPREAD,
			o.DirectiveLocation.INLINE_FRAGMENT
		],
		args: { if: {
			type: new c.GraphQLNonNull(l.GraphQLBoolean),
			description: "Included when true."
		} }
	});
	e.GraphQLIncludeDirective = p;
	var m = new f({
		name: "skip",
		description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
		locations: [
			o.DirectiveLocation.FIELD,
			o.DirectiveLocation.FRAGMENT_SPREAD,
			o.DirectiveLocation.INLINE_FRAGMENT
		],
		args: { if: {
			type: new c.GraphQLNonNull(l.GraphQLBoolean),
			description: "Skipped when true."
		} }
	});
	e.GraphQLSkipDirective = m;
	var h = "No longer supported";
	e.DEFAULT_DEPRECATION_REASON = h;
	var g = new f({
		name: "deprecated",
		description: "Marks an element of a GraphQL schema as no longer supported.",
		locations: [
			o.DirectiveLocation.FIELD_DEFINITION,
			o.DirectiveLocation.ARGUMENT_DEFINITION,
			o.DirectiveLocation.INPUT_FIELD_DEFINITION,
			o.DirectiveLocation.ENUM_VALUE,
			o.DirectiveLocation.DIRECTIVE_DEFINITION
		],
		args: { reason: {
			type: l.GraphQLString,
			description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
			defaultValue: h
		} }
	});
	e.GraphQLDeprecatedDirective = g;
	var _ = new f({
		name: "specifiedBy",
		description: "Exposes a URL that specifies the behavior of this scalar.",
		locations: [o.DirectiveLocation.SCALAR],
		args: { url: {
			type: new c.GraphQLNonNull(l.GraphQLString),
			description: "The URL that specifies the behavior of this scalar."
		} }
	});
	e.GraphQLSpecifiedByDirective = _;
	var v = new f({
		name: "oneOf",
		description: "Indicates exactly one field must be supplied and this field must not be `null`.",
		locations: [o.DirectiveLocation.INPUT_OBJECT],
		args: {}
	});
	e.GraphQLOneOfDirective = v;
	var y = Object.freeze([
		p,
		m,
		g,
		_,
		v
	]);
	e.specifiedDirectives = y;
	function b(e) {
		return y.some(({ name: t }) => t === e.name);
	}
})), hm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isIterableObject = t;
	function t(e) {
		return typeof e == "object" && typeof e?.[Symbol.iterator] == "function";
	}
})), gm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.astFromValue = c;
	var t = X(), n = gf(), r = hm(), i = hf(), a = Z(), o = Q(), s = pm();
	function c(e, u) {
		if ((0, o.isNonNullType)(u)) {
			let t = c(e, u.ofType);
			return t?.kind === a.Kind.NULL ? null : t;
		}
		if (e === null) return { kind: a.Kind.NULL };
		if (e === void 0) return null;
		if ((0, o.isListType)(u)) {
			let t = u.ofType;
			if ((0, r.isIterableObject)(e)) {
				let n = [];
				for (let r of e) {
					let e = c(r, t);
					e != null && n.push(e);
				}
				return {
					kind: a.Kind.LIST,
					values: n
				};
			}
			return c(e, t);
		}
		if ((0, o.isInputObjectType)(u)) {
			if (!(0, i.isObjectLike)(e)) return null;
			let t = [];
			for (let n of Object.values(u.getFields())) {
				let r = c(e[n.name], n.type);
				r && t.push({
					kind: a.Kind.OBJECT_FIELD,
					name: {
						kind: a.Kind.NAME,
						value: n.name
					},
					value: r
				});
			}
			return {
				kind: a.Kind.OBJECT,
				fields: t
			};
		}
		if ((0, o.isLeafType)(u)) {
			let n = u.serialize(e);
			if (n == null) return null;
			if (typeof n == "boolean") return {
				kind: a.Kind.BOOLEAN,
				value: n
			};
			if (typeof n == "number" && Number.isFinite(n)) {
				let e = String(n);
				return l.test(e) ? {
					kind: a.Kind.INT,
					value: e
				} : {
					kind: a.Kind.FLOAT,
					value: e
				};
			}
			if (typeof n == "string") return (0, o.isEnumType)(u) ? {
				kind: a.Kind.ENUM,
				value: n
			} : u === s.GraphQLID && l.test(n) ? {
				kind: a.Kind.INT,
				value: n
			} : {
				kind: a.Kind.STRING,
				value: n
			};
			throw TypeError(`Cannot convert value to AST: ${(0, t.inspect)(n)}.`);
		}
		/* c8 ignore next 3 */
		(0, n.invariant)(!1, "Unexpected input type: " + (0, t.inspect)(u));
	}
	var l = /^-?(?:0|[1-9][0-9]*)$/;
})), _m = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.introspectionTypes = e.__TypeKind = e.__Type = e.__Schema = e.__InputValue = e.__Field = e.__EnumValue = e.__DirectiveLocation = e.__Directive = e.TypeNameMetaFieldDef = e.TypeMetaFieldDef = e.TypeKind = e.SchemaMetaFieldDef = void 0, e.isIntrospectionType = v;
	var t = X(), n = gf(), r = Wp(), i = lm(), a = gm(), o = Q(), s = pm(), c = new o.GraphQLObjectType({
		name: "__Schema",
		description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
		fields: () => ({
			description: {
				type: s.GraphQLString,
				resolve: (e) => e.description
			},
			types: {
				description: "A list of all types supported by this server.",
				type: new o.GraphQLNonNull(new o.GraphQLList(new o.GraphQLNonNull(d))),
				resolve(e) {
					return Object.values(e.getTypeMap());
				}
			},
			queryType: {
				description: "The type that query operations will be rooted at.",
				type: new o.GraphQLNonNull(d),
				resolve: (e) => e.getQueryType()
			},
			mutationType: {
				description: "If this server supports mutation, the type that mutation operations will be rooted at.",
				type: d,
				resolve: (e) => e.getMutationType()
			},
			subscriptionType: {
				description: "If this server support subscription, the type that subscription operations will be rooted at.",
				type: d,
				resolve: (e) => e.getSubscriptionType()
			},
			directives: {
				description: "A list of all directives supported by this server.",
				type: new o.GraphQLNonNull(new o.GraphQLList(new o.GraphQLNonNull(l))),
				args: { includeDeprecated: {
					type: new o.GraphQLNonNull(s.GraphQLBoolean),
					defaultValue: !1
				} },
				resolve: (e, { includeDeprecated: t }) => t ? e.getDirectives() : e.getDirectives().filter((e) => e.deprecationReason == null)
			}
		})
	});
	e.__Schema = c;
	var l = new o.GraphQLObjectType({
		name: "__Directive",
		description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
		fields: () => ({
			name: {
				type: new o.GraphQLNonNull(s.GraphQLString),
				resolve: (e) => e.name
			},
			description: {
				type: s.GraphQLString,
				resolve: (e) => e.description
			},
			isRepeatable: {
				type: new o.GraphQLNonNull(s.GraphQLBoolean),
				resolve: (e) => e.isRepeatable
			},
			locations: {
				type: new o.GraphQLNonNull(new o.GraphQLList(new o.GraphQLNonNull(u))),
				resolve: (e) => e.locations
			},
			args: {
				type: new o.GraphQLNonNull(new o.GraphQLList(new o.GraphQLNonNull(p))),
				args: { includeDeprecated: {
					type: s.GraphQLBoolean,
					defaultValue: !1
				} },
				resolve(e, { includeDeprecated: t }) {
					return t ? e.args : e.args.filter((e) => e.deprecationReason == null);
				}
			},
			isDeprecated: {
				type: new o.GraphQLNonNull(s.GraphQLBoolean),
				resolve: (e) => e.deprecationReason != null
			},
			deprecationReason: {
				type: s.GraphQLString,
				resolve: (e) => e.deprecationReason
			}
		})
	});
	e.__Directive = l;
	var u = new o.GraphQLEnumType({
		name: "__DirectiveLocation",
		description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
		values: {
			QUERY: {
				value: r.DirectiveLocation.QUERY,
				description: "Location adjacent to a query operation."
			},
			MUTATION: {
				value: r.DirectiveLocation.MUTATION,
				description: "Location adjacent to a mutation operation."
			},
			SUBSCRIPTION: {
				value: r.DirectiveLocation.SUBSCRIPTION,
				description: "Location adjacent to a subscription operation."
			},
			FIELD: {
				value: r.DirectiveLocation.FIELD,
				description: "Location adjacent to a field."
			},
			FRAGMENT_DEFINITION: {
				value: r.DirectiveLocation.FRAGMENT_DEFINITION,
				description: "Location adjacent to a fragment definition."
			},
			FRAGMENT_SPREAD: {
				value: r.DirectiveLocation.FRAGMENT_SPREAD,
				description: "Location adjacent to a fragment spread."
			},
			INLINE_FRAGMENT: {
				value: r.DirectiveLocation.INLINE_FRAGMENT,
				description: "Location adjacent to an inline fragment."
			},
			VARIABLE_DEFINITION: {
				value: r.DirectiveLocation.VARIABLE_DEFINITION,
				description: "Location adjacent to a variable definition."
			},
			SCHEMA: {
				value: r.DirectiveLocation.SCHEMA,
				description: "Location adjacent to a schema definition."
			},
			SCALAR: {
				value: r.DirectiveLocation.SCALAR,
				description: "Location adjacent to a scalar definition."
			},
			OBJECT: {
				value: r.DirectiveLocation.OBJECT,
				description: "Location adjacent to an object type definition."
			},
			FIELD_DEFINITION: {
				value: r.DirectiveLocation.FIELD_DEFINITION,
				description: "Location adjacent to a field definition."
			},
			ARGUMENT_DEFINITION: {
				value: r.DirectiveLocation.ARGUMENT_DEFINITION,
				description: "Location adjacent to an argument definition."
			},
			INTERFACE: {
				value: r.DirectiveLocation.INTERFACE,
				description: "Location adjacent to an interface definition."
			},
			UNION: {
				value: r.DirectiveLocation.UNION,
				description: "Location adjacent to a union definition."
			},
			ENUM: {
				value: r.DirectiveLocation.ENUM,
				description: "Location adjacent to an enum definition."
			},
			ENUM_VALUE: {
				value: r.DirectiveLocation.ENUM_VALUE,
				description: "Location adjacent to an enum value definition."
			},
			INPUT_OBJECT: {
				value: r.DirectiveLocation.INPUT_OBJECT,
				description: "Location adjacent to an input object type definition."
			},
			INPUT_FIELD_DEFINITION: {
				value: r.DirectiveLocation.INPUT_FIELD_DEFINITION,
				description: "Location adjacent to an input object field definition."
			},
			DIRECTIVE_DEFINITION: {
				value: r.DirectiveLocation.DIRECTIVE_DEFINITION,
				description: "Location adjacent to a directive definition."
			}
		}
	});
	e.__DirectiveLocation = u;
	var d = new o.GraphQLObjectType({
		name: "__Type",
		description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
		fields: () => ({
			kind: {
				type: new o.GraphQLNonNull(g),
				resolve(e) {
					if ((0, o.isScalarType)(e)) return h.SCALAR;
					if ((0, o.isObjectType)(e)) return h.OBJECT;
					if ((0, o.isInterfaceType)(e)) return h.INTERFACE;
					if ((0, o.isUnionType)(e)) return h.UNION;
					if ((0, o.isEnumType)(e)) return h.ENUM;
					if ((0, o.isInputObjectType)(e)) return h.INPUT_OBJECT;
					if ((0, o.isListType)(e)) return h.LIST;
					if ((0, o.isNonNullType)(e)) return h.NON_NULL;
					/* c8 ignore next 3 */
					(0, n.invariant)(!1, `Unexpected type: "${(0, t.inspect)(e)}".`);
				}
			},
			name: {
				type: s.GraphQLString,
				resolve: (e) => "name" in e ? e.name : void 0
			},
			description: {
				type: s.GraphQLString,
				resolve: (e) => "description" in e ? e.description : void 0
			},
			specifiedByURL: {
				type: s.GraphQLString,
				resolve: (e) => "specifiedByURL" in e ? e.specifiedByURL : void 0
			},
			fields: {
				type: new o.GraphQLList(new o.GraphQLNonNull(f)),
				args: { includeDeprecated: {
					type: s.GraphQLBoolean,
					defaultValue: !1
				} },
				resolve(e, { includeDeprecated: t }) {
					if ((0, o.isObjectType)(e) || (0, o.isInterfaceType)(e)) {
						let n = Object.values(e.getFields());
						return t ? n : n.filter((e) => e.deprecationReason == null);
					}
				}
			},
			interfaces: {
				type: new o.GraphQLList(new o.GraphQLNonNull(d)),
				resolve(e) {
					if ((0, o.isObjectType)(e) || (0, o.isInterfaceType)(e)) return e.getInterfaces();
				}
			},
			possibleTypes: {
				type: new o.GraphQLList(new o.GraphQLNonNull(d)),
				resolve(e, t, n, { schema: r }) {
					if ((0, o.isAbstractType)(e)) return r.getPossibleTypes(e);
				}
			},
			enumValues: {
				type: new o.GraphQLList(new o.GraphQLNonNull(m)),
				args: { includeDeprecated: {
					type: s.GraphQLBoolean,
					defaultValue: !1
				} },
				resolve(e, { includeDeprecated: t }) {
					if ((0, o.isEnumType)(e)) {
						let n = e.getValues();
						return t ? n : n.filter((e) => e.deprecationReason == null);
					}
				}
			},
			inputFields: {
				type: new o.GraphQLList(new o.GraphQLNonNull(p)),
				args: { includeDeprecated: {
					type: s.GraphQLBoolean,
					defaultValue: !1
				} },
				resolve(e, { includeDeprecated: t }) {
					if ((0, o.isInputObjectType)(e)) {
						let n = Object.values(e.getFields());
						return t ? n : n.filter((e) => e.deprecationReason == null);
					}
				}
			},
			ofType: {
				type: d,
				resolve: (e) => "ofType" in e ? e.ofType : void 0
			},
			isOneOf: {
				type: s.GraphQLBoolean,
				resolve: (e) => {
					if ((0, o.isInputObjectType)(e)) return e.isOneOf;
				}
			}
		})
	});
	e.__Type = d;
	var f = new o.GraphQLObjectType({
		name: "__Field",
		description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
		fields: () => ({
			name: {
				type: new o.GraphQLNonNull(s.GraphQLString),
				resolve: (e) => e.name
			},
			description: {
				type: s.GraphQLString,
				resolve: (e) => e.description
			},
			args: {
				type: new o.GraphQLNonNull(new o.GraphQLList(new o.GraphQLNonNull(p))),
				args: { includeDeprecated: {
					type: s.GraphQLBoolean,
					defaultValue: !1
				} },
				resolve(e, { includeDeprecated: t }) {
					return t ? e.args : e.args.filter((e) => e.deprecationReason == null);
				}
			},
			type: {
				type: new o.GraphQLNonNull(d),
				resolve: (e) => e.type
			},
			isDeprecated: {
				type: new o.GraphQLNonNull(s.GraphQLBoolean),
				resolve: (e) => e.deprecationReason != null
			},
			deprecationReason: {
				type: s.GraphQLString,
				resolve: (e) => e.deprecationReason
			}
		})
	});
	e.__Field = f;
	var p = new o.GraphQLObjectType({
		name: "__InputValue",
		description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
		fields: () => ({
			name: {
				type: new o.GraphQLNonNull(s.GraphQLString),
				resolve: (e) => e.name
			},
			description: {
				type: s.GraphQLString,
				resolve: (e) => e.description
			},
			type: {
				type: new o.GraphQLNonNull(d),
				resolve: (e) => e.type
			},
			defaultValue: {
				type: s.GraphQLString,
				description: "A GraphQL-formatted string representing the default value for this input value.",
				resolve(e) {
					let { type: t, defaultValue: n } = e, r = (0, a.astFromValue)(n, t);
					return r ? (0, i.print)(r) : null;
				}
			},
			isDeprecated: {
				type: new o.GraphQLNonNull(s.GraphQLBoolean),
				resolve: (e) => e.deprecationReason != null
			},
			deprecationReason: {
				type: s.GraphQLString,
				resolve: (e) => e.deprecationReason
			}
		})
	});
	e.__InputValue = p;
	var m = new o.GraphQLObjectType({
		name: "__EnumValue",
		description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
		fields: () => ({
			name: {
				type: new o.GraphQLNonNull(s.GraphQLString),
				resolve: (e) => e.name
			},
			description: {
				type: s.GraphQLString,
				resolve: (e) => e.description
			},
			isDeprecated: {
				type: new o.GraphQLNonNull(s.GraphQLBoolean),
				resolve: (e) => e.deprecationReason != null
			},
			deprecationReason: {
				type: s.GraphQLString,
				resolve: (e) => e.deprecationReason
			}
		})
	});
	e.__EnumValue = m;
	var h;
	e.TypeKind = h, (function(e) {
		e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL";
	})(h || (e.TypeKind = h = {}));
	var g = new o.GraphQLEnumType({
		name: "__TypeKind",
		description: "An enum describing what kind of type a given `__Type` is.",
		values: {
			SCALAR: {
				value: h.SCALAR,
				description: "Indicates this type is a scalar."
			},
			OBJECT: {
				value: h.OBJECT,
				description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
			},
			INTERFACE: {
				value: h.INTERFACE,
				description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
			},
			UNION: {
				value: h.UNION,
				description: "Indicates this type is a union. `possibleTypes` is a valid field."
			},
			ENUM: {
				value: h.ENUM,
				description: "Indicates this type is an enum. `enumValues` is a valid field."
			},
			INPUT_OBJECT: {
				value: h.INPUT_OBJECT,
				description: "Indicates this type is an input object. `inputFields` is a valid field."
			},
			LIST: {
				value: h.LIST,
				description: "Indicates this type is a list. `ofType` is a valid field."
			},
			NON_NULL: {
				value: h.NON_NULL,
				description: "Indicates this type is a non-null. `ofType` is a valid field."
			}
		}
	});
	e.__TypeKind = g, e.SchemaMetaFieldDef = {
		name: "__schema",
		type: new o.GraphQLNonNull(c),
		description: "Access the current type schema of this server.",
		args: [],
		resolve: (e, t, n, { schema: r }) => r,
		deprecationReason: void 0,
		extensions: Object.create(null),
		astNode: void 0
	}, e.TypeMetaFieldDef = {
		name: "__type",
		type: d,
		description: "Request the type information of a single type.",
		args: [{
			name: "name",
			description: void 0,
			type: new o.GraphQLNonNull(s.GraphQLString),
			defaultValue: void 0,
			deprecationReason: void 0,
			extensions: Object.create(null),
			astNode: void 0
		}],
		resolve: (e, { name: t }, n, { schema: r }) => r.getType(t),
		deprecationReason: void 0,
		extensions: Object.create(null),
		astNode: void 0
	}, e.TypeNameMetaFieldDef = {
		name: "__typename",
		type: new o.GraphQLNonNull(s.GraphQLString),
		description: "The name of the current Object type at runtime.",
		args: [],
		resolve: (e, t, n, { parentType: r }) => r.name,
		deprecationReason: void 0,
		extensions: Object.create(null),
		astNode: void 0
	};
	var _ = Object.freeze([
		c,
		l,
		u,
		d,
		f,
		p,
		m,
		g
	]);
	e.introspectionTypes = _;
	function v(e) {
		return _.some(({ name: t }) => e.name === t);
	}
})), vm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.GraphQLSchema = void 0, e.assertSchema = d, e.isSchema = u;
	var t = Vp(), n = X(), r = Xp(), i = hf(), a = om(), o = Up(), s = Q(), c = mm(), l = _m();
	function u(e) {
		return (0, r.instanceOf)(e, f);
	}
	function d(e) {
		if (!u(e)) throw Error(`Expected ${(0, n.inspect)(e)} to be a GraphQL schema.`);
		return e;
	}
	var f = class {
		constructor(e) {
			this.__validationErrors = e.assumeValid === !0 ? [] : void 0, (0, i.isObjectLike)(e) || (0, t.devAssert)(!1, "Must provide configuration object."), !e.types || Array.isArray(e.types) || (0, t.devAssert)(!1, `"types" must be Array if provided but got: ${(0, n.inspect)(e.types)}.`), !e.directives || Array.isArray(e.directives) || (0, t.devAssert)(!1, `"directives" must be Array if provided but got: ${(0, n.inspect)(e.directives)}.`), this.description = e.description, this.extensions = (0, a.toObjMap)(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = e.extensionASTNodes ?? [], this._queryType = e.query, this._mutationType = e.mutation, this._subscriptionType = e.subscription, this._directives = e.directives ?? c.specifiedDirectives;
			let r = new Set(e.types);
			if (e.types != null) for (let t of e.types) r.delete(t), p(t, r);
			this._queryType != null && p(this._queryType, r), this._mutationType != null && p(this._mutationType, r), this._subscriptionType != null && p(this._subscriptionType, r);
			for (let e of this._directives) if ((0, c.isDirective)(e)) for (let t of e.args) p(t.type, r);
			p(l.__Schema, r), this._typeMap = Object.create(null), this._subTypeMap = Object.create(null), this._implementationsMap = Object.create(null);
			for (let e of r) {
				if (e == null) continue;
				let n = e.name;
				if (n || (0, t.devAssert)(!1, "One of the provided types for building the Schema is missing a name."), this._typeMap[n] !== void 0) throw Error(`Schema must contain uniquely named types but contains multiple types named "${n}".`);
				if (this._typeMap[n] = e, (0, s.isInterfaceType)(e)) {
					for (let t of e.getInterfaces()) if ((0, s.isInterfaceType)(t)) {
						let n = this._implementationsMap[t.name];
						n === void 0 && (n = this._implementationsMap[t.name] = {
							objects: [],
							interfaces: []
						}), n.interfaces.push(e);
					}
				} else if ((0, s.isObjectType)(e)) {
					for (let t of e.getInterfaces()) if ((0, s.isInterfaceType)(t)) {
						let n = this._implementationsMap[t.name];
						n === void 0 && (n = this._implementationsMap[t.name] = {
							objects: [],
							interfaces: []
						}), n.objects.push(e);
					}
				}
			}
		}
		get [Symbol.toStringTag]() {
			return "GraphQLSchema";
		}
		getQueryType() {
			return this._queryType;
		}
		getMutationType() {
			return this._mutationType;
		}
		getSubscriptionType() {
			return this._subscriptionType;
		}
		getRootType(e) {
			switch (e) {
				case o.OperationTypeNode.QUERY: return this.getQueryType();
				case o.OperationTypeNode.MUTATION: return this.getMutationType();
				case o.OperationTypeNode.SUBSCRIPTION: return this.getSubscriptionType();
			}
		}
		getTypeMap() {
			return this._typeMap;
		}
		getType(e) {
			return this.getTypeMap()[e];
		}
		getPossibleTypes(e) {
			return (0, s.isUnionType)(e) ? e.getTypes() : this.getImplementations(e).objects;
		}
		getImplementations(e) {
			return this._implementationsMap[e.name] ?? {
				objects: [],
				interfaces: []
			};
		}
		isSubType(e, t) {
			let n = this._subTypeMap[e.name];
			if (n === void 0) {
				if (n = Object.create(null), (0, s.isUnionType)(e)) for (let t of e.getTypes()) n[t.name] = !0;
				else {
					let t = this.getImplementations(e);
					for (let e of t.objects) n[e.name] = !0;
					for (let e of t.interfaces) n[e.name] = !0;
				}
				this._subTypeMap[e.name] = n;
			}
			return n[t.name] !== void 0;
		}
		getDirectives() {
			return this._directives;
		}
		getDirective(e) {
			return this.getDirectives().find((t) => t.name === e);
		}
		toConfig() {
			return {
				description: this.description,
				query: this.getQueryType(),
				mutation: this.getMutationType(),
				subscription: this.getSubscriptionType(),
				types: Object.values(this.getTypeMap()),
				directives: this.getDirectives(),
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes,
				assumeValid: this.__validationErrors !== void 0
			};
		}
	};
	e.GraphQLSchema = f;
	function p(e, t) {
		let n = (0, s.getNamedType)(e);
		if (!t.has(n)) {
			if (t.add(n), (0, s.isUnionType)(n)) for (let e of n.getTypes()) p(e, t);
			else if ((0, s.isObjectType)(n) || (0, s.isInterfaceType)(n)) {
				for (let e of n.getInterfaces()) p(e, t);
				for (let e of Object.values(n.getFields())) {
					p(e.type, t);
					for (let n of e.args) p(n.type, t);
				}
			} else if ((0, s.isInputObjectType)(n)) for (let e of Object.values(n.getFields())) p(e.type, t);
		}
		return t;
	}
})), ym = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.assertValidSchema = u, e.validateSchema = l;
	var t = X(), n = Y(), r = Up(), i = fm(), a = Q(), o = mm(), s = _m(), c = vm();
	function l(e) {
		if ((0, c.assertSchema)(e), e.__validationErrors) return e.__validationErrors;
		let t = new d(e);
		f(t), m(t), g(t);
		let n = t.getErrors();
		return e.__validationErrors = n, n;
	}
	function u(e) {
		let t = l(e);
		if (t.length !== 0) throw Error(t.map((e) => e.message).join("\n\n"));
	}
	var d = class {
		constructor(e) {
			this._errors = [], this.schema = e;
		}
		reportError(e, t) {
			let r = Array.isArray(t) ? t.filter(Boolean) : t;
			this._errors.push(new n.GraphQLError(e, { nodes: r }));
		}
		getErrors() {
			return this._errors;
		}
	};
	function f(e) {
		let n = e.schema, i = n.getQueryType();
		i ? (0, a.isObjectType)(i) || e.reportError(`Query root type must be Object type, it cannot be ${(0, t.inspect)(i)}.`, p(n, r.OperationTypeNode.QUERY) ?? i.astNode) : e.reportError("Query root type must be provided.", n.astNode);
		let o = n.getMutationType();
		o && !(0, a.isObjectType)(o) && e.reportError(`Mutation root type must be Object type if provided, it cannot be ${(0, t.inspect)(o)}.`, p(n, r.OperationTypeNode.MUTATION) ?? o.astNode);
		let s = n.getSubscriptionType();
		s && !(0, a.isObjectType)(s) && e.reportError(`Subscription root type must be Object type if provided, it cannot be ${(0, t.inspect)(s)}.`, p(n, r.OperationTypeNode.SUBSCRIPTION) ?? s.astNode);
	}
	function p(e, t) {
		return [e.astNode, ...e.extensionASTNodes].flatMap((e) => e?.operationTypes ?? []).find((e) => e.operation === t)?.type;
	}
	function m(e) {
		for (let n of e.schema.getDirectives()) {
			if (!(0, o.isDirective)(n)) {
				e.reportError(`Expected directive but got: ${(0, t.inspect)(n)}.`, n?.astNode);
				continue;
			}
			h(e, n), n.locations.length === 0 && e.reportError(`Directive @${n.name} must include 1 or more locations.`, n.astNode);
			for (let r of n.args) h(e, r), (0, a.isInputType)(r.type) || e.reportError(`The type of @${n.name}(${r.name}:) must be Input Type but got: ${(0, t.inspect)(r.type)}.`, r.astNode), (0, a.isRequiredArgument)(r) && r.deprecationReason != null && e.reportError(`Required argument @${n.name}(${r.name}:) cannot be deprecated.`, [O(r.astNode), r.astNode?.type]);
		}
	}
	function h(e, t) {
		t.name.startsWith("__") && e.reportError(`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`, t.astNode);
	}
	function g(e) {
		let n = T(e), r = e.schema.getTypeMap();
		for (let i of Object.values(r)) {
			if (!(0, a.isNamedType)(i)) {
				e.reportError(`Expected GraphQL named type but got: ${(0, t.inspect)(i)}.`, i.astNode);
				continue;
			}
			(0, s.isIntrospectionType)(i) || h(e, i), (0, a.isObjectType)(i) || (0, a.isInterfaceType)(i) ? (_(e, i), v(e, i)) : (0, a.isUnionType)(i) ? x(e, i) : (0, a.isEnumType)(i) ? S(e, i) : (0, a.isInputObjectType)(i) && (C(e, i), n(i));
		}
	}
	function _(e, n) {
		let r = Object.values(n.getFields());
		r.length === 0 && e.reportError(`Type ${n.name} must define one or more fields.`, [n.astNode, ...n.extensionASTNodes]);
		for (let i of r) {
			h(e, i), !(0, a.isOutputType)(i.type) && e.reportError(`The type of ${n.name}.${i.name} must be Output Type but got: ${(0, t.inspect)(i.type)}.`, i.astNode?.type);
			for (let r of i.args) {
				let o = r.name;
				h(e, r), !(0, a.isInputType)(r.type) && e.reportError(`The type of ${n.name}.${i.name}(${o}:) must be Input Type but got: ${(0, t.inspect)(r.type)}.`, r.astNode?.type), (0, a.isRequiredArgument)(r) && r.deprecationReason != null && e.reportError(`Required argument ${n.name}.${i.name}(${o}:) cannot be deprecated.`, [O(r.astNode), r.astNode?.type]);
			}
		}
	}
	function v(e, n) {
		let r = Object.create(null);
		for (let i of n.getInterfaces()) {
			if (!(0, a.isInterfaceType)(i)) {
				e.reportError(`Type ${(0, t.inspect)(n)} must only implement Interface types, it cannot implement ${(0, t.inspect)(i)}.`, E(n, i));
				continue;
			}
			if (n === i) {
				e.reportError(`Type ${n.name} cannot implement itself because it would create a circular reference.`, E(n, i));
				continue;
			}
			if (r[i.name]) {
				e.reportError(`Type ${n.name} can only implement ${i.name} once.`, E(n, i));
				continue;
			}
			r[i.name] = !0, b(e, n, i), y(e, n, i);
		}
	}
	function y(e, n, r) {
		let o = n.getFields();
		for (let s of Object.values(r.getFields())) {
			let c = s.name, l = o[c];
			if (!l) {
				e.reportError(`Interface field ${r.name}.${c} expected but ${n.name} does not provide it.`, [
					s.astNode,
					n.astNode,
					...n.extensionASTNodes
				]);
				continue;
			}
			(0, i.isTypeSubTypeOf)(e.schema, l.type, s.type) || e.reportError(`Interface field ${r.name}.${c} expects type ${(0, t.inspect)(s.type)} but ${n.name}.${c} is type ${(0, t.inspect)(l.type)}.`, [s.astNode?.type, l.astNode?.type]);
			for (let a of s.args) {
				let o = a.name, s = l.args.find((e) => e.name === o);
				if (!s) {
					e.reportError(`Interface field argument ${r.name}.${c}(${o}:) expected but ${n.name}.${c} does not provide it.`, [a.astNode, l.astNode]);
					continue;
				}
				(0, i.isEqualType)(a.type, s.type) || e.reportError(`Interface field argument ${r.name}.${c}(${o}:) expects type ${(0, t.inspect)(a.type)} but ${n.name}.${c}(${o}:) is type ${(0, t.inspect)(s.type)}.`, [a.astNode?.type, s.astNode?.type]);
			}
			for (let t of l.args) {
				let i = t.name;
				!s.args.find((e) => e.name === i) && (0, a.isRequiredArgument)(t) && e.reportError(`Object field ${n.name}.${c} includes required argument ${i} that is missing from the Interface field ${r.name}.${c}.`, [t.astNode, s.astNode]);
			}
		}
	}
	function b(e, t, n) {
		let r = t.getInterfaces();
		for (let i of n.getInterfaces()) r.includes(i) || e.reportError(i === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`, [...E(n, i), ...E(t, n)]);
	}
	function x(e, n) {
		let r = n.getTypes();
		r.length === 0 && e.reportError(`Union type ${n.name} must define one or more member types.`, [n.astNode, ...n.extensionASTNodes]);
		let i = Object.create(null);
		for (let o of r) {
			if (i[o.name]) {
				e.reportError(`Union type ${n.name} can only include type ${o.name} once.`, D(n, o.name));
				continue;
			}
			i[o.name] = !0, (0, a.isObjectType)(o) || e.reportError(`Union type ${n.name} can only include Object types, it cannot include ${(0, t.inspect)(o)}.`, D(n, String(o)));
		}
	}
	function S(e, t) {
		let n = t.getValues();
		n.length === 0 && e.reportError(`Enum type ${t.name} must define one or more values.`, [t.astNode, ...t.extensionASTNodes]);
		for (let t of n) h(e, t);
	}
	function C(e, n) {
		let r = Object.values(n.getFields());
		r.length === 0 && e.reportError(`Input Object type ${n.name} must define one or more fields.`, [n.astNode, ...n.extensionASTNodes]);
		for (let i of r) h(e, i), !(0, a.isInputType)(i.type) && e.reportError(`The type of ${n.name}.${i.name} must be Input Type but got: ${(0, t.inspect)(i.type)}.`, i.astNode?.type), (0, a.isRequiredInputField)(i) && i.deprecationReason != null && e.reportError(`Required input field ${n.name}.${i.name} cannot be deprecated.`, [O(i.astNode), i.astNode?.type]), n.isOneOf && w(n, i, e);
	}
	function w(e, t, n) {
		(0, a.isNonNullType)(t.type) && n.reportError(`OneOf input field ${e.name}.${t.name} must be nullable.`, t.astNode?.type), t.defaultValue !== void 0 && n.reportError(`OneOf input field ${e.name}.${t.name} cannot have a default value.`, t.astNode);
	}
	function T(e) {
		let t = Object.create(null), n = [], r = Object.create(null);
		return i;
		function i(o) {
			if (t[o.name]) return;
			t[o.name] = !0, r[o.name] = n.length;
			let s = Object.values(o.getFields());
			for (let t of s) if ((0, a.isNonNullType)(t.type) && (0, a.isInputObjectType)(t.type.ofType)) {
				let a = t.type.ofType, o = r[a.name];
				if (n.push(t), o === void 0) i(a);
				else {
					let t = n.slice(o), r = t.map((e) => e.name).join(".");
					e.reportError(`Cannot reference Input Object "${a.name}" within itself through a series of non-null fields: "${r}".`, t.map((e) => e.astNode));
				}
				n.pop();
			}
			r[o.name] = void 0;
		}
	}
	function E(e, t) {
		let { astNode: n, extensionASTNodes: r } = e;
		return (n == null ? r : [n, ...r]).flatMap((e) => e.interfaces ?? []).filter((e) => e.name.value === t.name);
	}
	function D(e, t) {
		let { astNode: n, extensionASTNodes: r } = e;
		return (n == null ? r : [n, ...r]).flatMap((e) => e.types ?? []).filter((e) => e.name.value === t);
	}
	function O(e) {
		return e?.directives?.find((e) => e.name.value === o.GraphQLDeprecatedDirective.name);
	}
})), bm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.typeFromAST = r;
	var t = Z(), n = Q();
	function r(e, i) {
		switch (i.kind) {
			case t.Kind.LIST_TYPE: {
				let t = r(e, i.type);
				return t && new n.GraphQLList(t);
			}
			case t.Kind.NON_NULL_TYPE: {
				let t = r(e, i.type);
				return t && new n.GraphQLNonNull(t);
			}
			case t.Kind.NAMED_TYPE: return e.getType(i.name.value);
		}
	}
})), xm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeInfo = void 0, e.visitWithTypeInfo = c;
	var t = Up(), n = Z(), r = cm(), i = Q(), a = _m(), o = bm();
	e.TypeInfo = class {
		constructor(e, t, n) {
			this._schema = e, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = n ?? s, t && ((0, i.isInputType)(t) && this._inputTypeStack.push(t), (0, i.isCompositeType)(t) && this._parentTypeStack.push(t), (0, i.isOutputType)(t) && this._typeStack.push(t));
		}
		get [Symbol.toStringTag]() {
			return "TypeInfo";
		}
		getType() {
			if (this._typeStack.length > 0) return this._typeStack[this._typeStack.length - 1];
		}
		getParentType() {
			if (this._parentTypeStack.length > 0) return this._parentTypeStack[this._parentTypeStack.length - 1];
		}
		getInputType() {
			if (this._inputTypeStack.length > 0) return this._inputTypeStack[this._inputTypeStack.length - 1];
		}
		getParentInputType() {
			if (this._inputTypeStack.length > 1) return this._inputTypeStack[this._inputTypeStack.length - 2];
		}
		getFieldDef() {
			if (this._fieldDefStack.length > 0) return this._fieldDefStack[this._fieldDefStack.length - 1];
		}
		getDefaultValue() {
			if (this._defaultValueStack.length > 0) return this._defaultValueStack[this._defaultValueStack.length - 1];
		}
		getDirective() {
			return this._directive;
		}
		getArgument() {
			return this._argument;
		}
		getEnumValue() {
			return this._enumValue;
		}
		enter(e) {
			let t = this._schema;
			switch (e.kind) {
				case n.Kind.SELECTION_SET: {
					let e = (0, i.getNamedType)(this.getType());
					this._parentTypeStack.push((0, i.isCompositeType)(e) ? e : void 0);
					break;
				}
				case n.Kind.FIELD: {
					let n = this.getParentType(), r, a;
					n && (r = this._getFieldDef(t, n, e), r && (a = r.type)), this._fieldDefStack.push(r), this._typeStack.push((0, i.isOutputType)(a) ? a : void 0);
					break;
				}
				case n.Kind.DIRECTIVE:
					this._directive = t.getDirective(e.name.value);
					break;
				case n.Kind.OPERATION_DEFINITION: {
					let n = t.getRootType(e.operation);
					this._typeStack.push((0, i.isObjectType)(n) ? n : void 0);
					break;
				}
				case n.Kind.INLINE_FRAGMENT:
				case n.Kind.FRAGMENT_DEFINITION: {
					let n = e.typeCondition, r = n ? (0, o.typeFromAST)(t, n) : (0, i.getNamedType)(this.getType());
					this._typeStack.push((0, i.isOutputType)(r) ? r : void 0);
					break;
				}
				case n.Kind.VARIABLE_DEFINITION: {
					let n = (0, o.typeFromAST)(t, e.type);
					this._inputTypeStack.push((0, i.isInputType)(n) ? n : void 0);
					break;
				}
				case n.Kind.ARGUMENT: {
					let t, n, r = this.getDirective() ?? this.getFieldDef();
					r && (t = r.args.find((t) => t.name === e.name.value), t && (n = t.type)), this._argument = t, this._defaultValueStack.push(t ? t.defaultValue : void 0), this._inputTypeStack.push((0, i.isInputType)(n) ? n : void 0);
					break;
				}
				case n.Kind.LIST: {
					let e = (0, i.getNullableType)(this.getInputType()), t = (0, i.isListType)(e) ? e.ofType : e;
					this._defaultValueStack.push(void 0), this._inputTypeStack.push((0, i.isInputType)(t) ? t : void 0);
					break;
				}
				case n.Kind.OBJECT_FIELD: {
					let t = (0, i.getNamedType)(this.getInputType()), n, r;
					(0, i.isInputObjectType)(t) && (r = t.getFields()[e.name.value], r && (n = r.type)), this._defaultValueStack.push(r ? r.defaultValue : void 0), this._inputTypeStack.push((0, i.isInputType)(n) ? n : void 0);
					break;
				}
				case n.Kind.ENUM: {
					let t = (0, i.getNamedType)(this.getInputType()), n;
					(0, i.isEnumType)(t) && (n = t.getValue(e.value)), this._enumValue = n;
					break;
				}
				default:
			}
		}
		leave(e) {
			switch (e.kind) {
				case n.Kind.SELECTION_SET:
					this._parentTypeStack.pop();
					break;
				case n.Kind.FIELD:
					this._fieldDefStack.pop(), this._typeStack.pop();
					break;
				case n.Kind.DIRECTIVE:
					this._directive = null;
					break;
				case n.Kind.OPERATION_DEFINITION:
				case n.Kind.INLINE_FRAGMENT:
				case n.Kind.FRAGMENT_DEFINITION:
					this._typeStack.pop();
					break;
				case n.Kind.VARIABLE_DEFINITION:
					this._inputTypeStack.pop();
					break;
				case n.Kind.ARGUMENT:
					this._argument = null, this._defaultValueStack.pop(), this._inputTypeStack.pop();
					break;
				case n.Kind.LIST:
				case n.Kind.OBJECT_FIELD:
					this._defaultValueStack.pop(), this._inputTypeStack.pop();
					break;
				case n.Kind.ENUM:
					this._enumValue = null;
					break;
				default:
			}
		}
	};
	function s(e, t, n) {
		let r = n.name.value;
		if (r === a.SchemaMetaFieldDef.name && e.getQueryType() === t) return a.SchemaMetaFieldDef;
		if (r === a.TypeMetaFieldDef.name && e.getQueryType() === t) return a.TypeMetaFieldDef;
		if (r === a.TypeNameMetaFieldDef.name && (0, i.isCompositeType)(t)) return a.TypeNameMetaFieldDef;
		if ((0, i.isObjectType)(t) || (0, i.isInterfaceType)(t)) return t.getFields()[r];
	}
	function c(e, n) {
		return {
			enter(...i) {
				let a = i[0];
				e.enter(a);
				let o = (0, r.getEnterLeaveForKind)(n, a.kind).enter;
				if (o) {
					let r = o.apply(n, i);
					return r !== void 0 && (e.leave(a), (0, t.isNode)(r) && e.enter(r)), r;
				}
			},
			leave(...t) {
				let i = t[0], a = (0, r.getEnterLeaveForKind)(n, i.kind).leave, o;
				return a && (o = a.apply(n, t)), e.leave(i), o;
			}
		};
	}
})), Sm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isConstValueNode = o, e.isDefinitionNode = n, e.isExecutableDefinitionNode = r, e.isSchemaCoordinateNode = f, e.isSelectionNode = i, e.isTypeDefinitionNode = l, e.isTypeExtensionNode = d, e.isTypeNode = s, e.isTypeSystemDefinitionNode = c, e.isTypeSystemExtensionNode = u, e.isValueNode = a;
	var t = Z();
	function n(e) {
		return r(e) || c(e) || u(e);
	}
	function r(e) {
		return e.kind === t.Kind.OPERATION_DEFINITION || e.kind === t.Kind.FRAGMENT_DEFINITION;
	}
	function i(e) {
		return e.kind === t.Kind.FIELD || e.kind === t.Kind.FRAGMENT_SPREAD || e.kind === t.Kind.INLINE_FRAGMENT;
	}
	function a(e) {
		return e.kind === t.Kind.VARIABLE || e.kind === t.Kind.INT || e.kind === t.Kind.FLOAT || e.kind === t.Kind.STRING || e.kind === t.Kind.BOOLEAN || e.kind === t.Kind.NULL || e.kind === t.Kind.ENUM || e.kind === t.Kind.LIST || e.kind === t.Kind.OBJECT;
	}
	function o(e) {
		return a(e) && (e.kind === t.Kind.LIST ? e.values.some(o) : e.kind === t.Kind.OBJECT ? e.fields.some((e) => o(e.value)) : e.kind !== t.Kind.VARIABLE);
	}
	function s(e) {
		return e.kind === t.Kind.NAMED_TYPE || e.kind === t.Kind.LIST_TYPE || e.kind === t.Kind.NON_NULL_TYPE;
	}
	function c(e) {
		return e.kind === t.Kind.SCHEMA_DEFINITION || l(e) || e.kind === t.Kind.DIRECTIVE_DEFINITION;
	}
	function l(e) {
		return e.kind === t.Kind.SCALAR_TYPE_DEFINITION || e.kind === t.Kind.OBJECT_TYPE_DEFINITION || e.kind === t.Kind.INTERFACE_TYPE_DEFINITION || e.kind === t.Kind.UNION_TYPE_DEFINITION || e.kind === t.Kind.ENUM_TYPE_DEFINITION || e.kind === t.Kind.INPUT_OBJECT_TYPE_DEFINITION;
	}
	function u(e) {
		return e.kind === t.Kind.SCHEMA_EXTENSION || e.kind === t.Kind.DIRECTIVE_EXTENSION || d(e);
	}
	function d(e) {
		return e.kind === t.Kind.SCALAR_TYPE_EXTENSION || e.kind === t.Kind.OBJECT_TYPE_EXTENSION || e.kind === t.Kind.INTERFACE_TYPE_EXTENSION || e.kind === t.Kind.UNION_TYPE_EXTENSION || e.kind === t.Kind.ENUM_TYPE_EXTENSION || e.kind === t.Kind.INPUT_OBJECT_TYPE_EXTENSION;
	}
	function f(e) {
		return e.kind === t.Kind.TYPE_COORDINATE || e.kind === t.Kind.MEMBER_COORDINATE || e.kind === t.Kind.ARGUMENT_COORDINATE || e.kind === t.Kind.DIRECTIVE_COORDINATE || e.kind === t.Kind.DIRECTIVE_ARGUMENT_COORDINATE;
	}
})), Cm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ExecutableDefinitionsRule = i;
	var t = Y(), n = Z(), r = Sm();
	function i(e) {
		return { Document(i) {
			for (let a of i.definitions) if (!(0, r.isExecutableDefinitionNode)(a)) {
				let r = a.kind === n.Kind.SCHEMA_DEFINITION || a.kind === n.Kind.SCHEMA_EXTENSION ? "schema" : "\"" + a.name.value + "\"";
				e.reportError(new t.GraphQLError(`The ${r} definition is not executable.`, { nodes: a }));
			}
			return !1;
		} };
	}
})), wm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.FieldsOnCorrectTypeRule = o;
	var t = $p(), n = im(), r = am(), i = Y(), a = Q();
	function o(e) {
		return { Field(n) {
			let r = e.getParentType();
			if (r && !e.getFieldDef()) {
				let a = e.getSchema(), o = n.name.value, l = (0, t.didYouMean)("to use an inline fragment on", s(a, r, o));
				l === "" && (l = (0, t.didYouMean)(c(r, o))), e.reportError(new i.GraphQLError(`Cannot query field "${o}" on type "${r.name}".` + l, { nodes: n }));
			}
		} };
	}
	function s(e, t, r) {
		if (!(0, a.isAbstractType)(t)) return [];
		let i = /* @__PURE__ */ new Set(), o = Object.create(null);
		for (let n of e.getPossibleTypes(t)) if (n.getFields()[r]) {
			i.add(n), o[n.name] = 1;
			for (let e of n.getInterfaces()) e.getFields()[r] && (i.add(e), o[e.name] = (o[e.name] ?? 0) + 1);
		}
		return [...i].sort((t, r) => {
			let i = o[r.name] - o[t.name];
			return i === 0 ? (0, a.isInterfaceType)(t) && e.isSubType(t, r) ? -1 : (0, a.isInterfaceType)(r) && e.isSubType(r, t) ? 1 : (0, n.naturalCompare)(t.name, r.name) : i;
		}).map((e) => e.name);
	}
	function c(e, t) {
		if ((0, a.isObjectType)(e) || (0, a.isInterfaceType)(e)) {
			let n = Object.keys(e.getFields());
			return (0, r.suggestionList)(t, n);
		}
		return [];
	}
})), Tm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.FragmentsOnCompositeTypesRule = a;
	var t = Y(), n = lm(), r = Q(), i = bm();
	function a(e) {
		return {
			InlineFragment(a) {
				let o = a.typeCondition;
				if (o) {
					let a = (0, i.typeFromAST)(e.getSchema(), o);
					if (a && !(0, r.isCompositeType)(a)) {
						let r = (0, n.print)(o);
						e.reportError(new t.GraphQLError(`Fragment cannot condition on non composite type "${r}".`, { nodes: o }));
					}
				}
			},
			FragmentDefinition(a) {
				let o = (0, i.typeFromAST)(e.getSchema(), a.typeCondition);
				if (o && !(0, r.isCompositeType)(o)) {
					let r = (0, n.print)(a.typeCondition);
					e.reportError(new t.GraphQLError(`Fragment "${a.name.value}" cannot condition on non composite type "${r}".`, { nodes: a.typeCondition }));
				}
			}
		};
	}
})), Em = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.KnownArgumentNamesOnDirectivesRule = s, e.KnownArgumentNamesRule = o;
	var t = $p(), n = am(), r = Y(), i = Z(), a = mm();
	function o(e) {
		return {
			...s(e),
			Argument(i) {
				let a = e.getArgument(), o = e.getFieldDef(), s = e.getParentType();
				if (!a && o && s) {
					let a = i.name.value, c = o.args.map((e) => e.name), l = (0, n.suggestionList)(a, c);
					e.reportError(new r.GraphQLError(`Unknown argument "${a}" on field "${s.name}.${o.name}".` + (0, t.didYouMean)(l), { nodes: i }));
				}
			}
		};
	}
	function s(e) {
		let o = Object.create(null), s = e.getSchema(), c = s ? s.getDirectives() : a.specifiedDirectives;
		for (let e of c) o[e.name] = e.args.map((e) => e.name);
		let l = e.getDocument().definitions;
		for (let e of l) if (e.kind === i.Kind.DIRECTIVE_DEFINITION) {
			/* c8 ignore next */
			let t = e.arguments ?? [];
			o[e.name.value] = t.map((e) => e.name.value);
		}
		return { Directive(i) {
			let a = i.name.value, s = o[a];
			if (i.arguments && s) for (let o of i.arguments) {
				let i = o.name.value;
				if (!s.includes(i)) {
					let c = (0, n.suggestionList)(i, s);
					e.reportError(new r.GraphQLError(`Unknown argument "${i}" on directive "@${a}".` + (0, t.didYouMean)(c), { nodes: o }));
				}
			}
			return !1;
		} };
	}
})), Dm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.KnownDirectivesRule = c;
	var t = X(), n = gf(), r = Y(), i = Up(), a = Wp(), o = Z(), s = mm();
	function c(e) {
		let t = Object.create(null), n = e.getSchema(), i = n ? n.getDirectives() : s.specifiedDirectives;
		for (let e of i) t[e.name] = e.locations;
		let a = e.getDocument().definitions;
		for (let e of a) e.kind === o.Kind.DIRECTIVE_DEFINITION && (t[e.name.value] = e.locations.map((e) => e.value));
		return { Directive(n, i, a, o, s) {
			let c = n.name.value, u = t[c];
			if (!u) {
				e.reportError(new r.GraphQLError(`Unknown directive "@${c}".`, { nodes: n }));
				return;
			}
			let d = l(s);
			d && !u.includes(d) && e.reportError(new r.GraphQLError(`Directive "@${c}" may not be used on ${d}.`, { nodes: n }));
		} };
	}
	function l(e) {
		let r = e[e.length - 1];
		switch ("kind" in r || (0, n.invariant)(!1), r.kind) {
			case o.Kind.OPERATION_DEFINITION: return u(r.operation);
			case o.Kind.FIELD: return a.DirectiveLocation.FIELD;
			case o.Kind.FRAGMENT_SPREAD: return a.DirectiveLocation.FRAGMENT_SPREAD;
			case o.Kind.INLINE_FRAGMENT: return a.DirectiveLocation.INLINE_FRAGMENT;
			case o.Kind.FRAGMENT_DEFINITION: return a.DirectiveLocation.FRAGMENT_DEFINITION;
			case o.Kind.VARIABLE_DEFINITION: return a.DirectiveLocation.VARIABLE_DEFINITION;
			case o.Kind.SCHEMA_DEFINITION:
			case o.Kind.SCHEMA_EXTENSION: return a.DirectiveLocation.SCHEMA;
			case o.Kind.SCALAR_TYPE_DEFINITION:
			case o.Kind.SCALAR_TYPE_EXTENSION: return a.DirectiveLocation.SCALAR;
			case o.Kind.OBJECT_TYPE_DEFINITION:
			case o.Kind.OBJECT_TYPE_EXTENSION: return a.DirectiveLocation.OBJECT;
			case o.Kind.FIELD_DEFINITION: return a.DirectiveLocation.FIELD_DEFINITION;
			case o.Kind.INTERFACE_TYPE_DEFINITION:
			case o.Kind.INTERFACE_TYPE_EXTENSION: return a.DirectiveLocation.INTERFACE;
			case o.Kind.UNION_TYPE_DEFINITION:
			case o.Kind.UNION_TYPE_EXTENSION: return a.DirectiveLocation.UNION;
			case o.Kind.ENUM_TYPE_DEFINITION:
			case o.Kind.ENUM_TYPE_EXTENSION: return a.DirectiveLocation.ENUM;
			case o.Kind.ENUM_VALUE_DEFINITION: return a.DirectiveLocation.ENUM_VALUE;
			case o.Kind.INPUT_OBJECT_TYPE_DEFINITION:
			case o.Kind.INPUT_OBJECT_TYPE_EXTENSION: return a.DirectiveLocation.INPUT_OBJECT;
			case o.Kind.INPUT_VALUE_DEFINITION: {
				let t = e[e.length - 3];
				return "kind" in t || (0, n.invariant)(!1), t.kind === o.Kind.INPUT_OBJECT_TYPE_DEFINITION ? a.DirectiveLocation.INPUT_FIELD_DEFINITION : a.DirectiveLocation.ARGUMENT_DEFINITION;
			}
			case o.Kind.DIRECTIVE_DEFINITION:
			case o.Kind.DIRECTIVE_EXTENSION: return a.DirectiveLocation.DIRECTIVE_DEFINITION;
			/* c8 ignore next */
			default: (0, n.invariant)(!1, "Unexpected kind: " + (0, t.inspect)(r.kind));
		}
	}
	function u(e) {
		switch (e) {
			case i.OperationTypeNode.QUERY: return a.DirectiveLocation.QUERY;
			case i.OperationTypeNode.MUTATION: return a.DirectiveLocation.MUTATION;
			case i.OperationTypeNode.SUBSCRIPTION: return a.DirectiveLocation.SUBSCRIPTION;
		}
	}
})), Om = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.KnownFragmentNamesRule = n;
	var t = Y();
	function n(e) {
		return { FragmentSpread(n) {
			let r = n.name.value;
			e.getFragment(r) || e.reportError(new t.GraphQLError(`Unknown fragment "${r}".`, { nodes: n.name }));
		} };
	}
})), km = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.KnownTypeNamesRule = s;
	var t = $p(), n = am(), r = Y(), i = Sm(), a = _m(), o = pm();
	function s(e) {
		let a = e.getSchema(), o = a ? a.getTypeMap() : Object.create(null), s = Object.create(null);
		for (let t of e.getDocument().definitions) (0, i.isTypeDefinitionNode)(t) && (s[t.name.value] = !0);
		let u = [...Object.keys(o), ...Object.keys(s)];
		return { NamedType(i, a, d, f, p) {
			let m = i.name.value;
			if (!o[m] && !s[m]) {
				let a = p[2] ?? d, o = a != null && l(a);
				if (o && c.includes(m)) return;
				let s = (0, n.suggestionList)(m, o ? c.concat(u) : u);
				e.reportError(new r.GraphQLError(`Unknown type "${m}".` + (0, t.didYouMean)(s), { nodes: i }));
			}
		} };
	}
	var c = [...o.specifiedScalarTypes, ...a.introspectionTypes].map((e) => e.name);
	function l(e) {
		return "kind" in e && ((0, i.isTypeSystemDefinitionNode)(e) || (0, i.isTypeSystemExtensionNode)(e));
	}
})), Am = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.LoneAnonymousOperationRule = r;
	var t = Y(), n = Z();
	function r(e) {
		let r = 0;
		return {
			Document(e) {
				r = e.definitions.filter((e) => e.kind === n.Kind.OPERATION_DEFINITION).length;
			},
			OperationDefinition(n) {
				!n.name && r > 1 && e.reportError(new t.GraphQLError("This anonymous operation must be the only defined operation.", { nodes: n }));
			}
		};
	}
})), jm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.LoneSchemaDefinitionRule = n;
	var t = Y();
	function n(e) {
		let n = e.getSchema(), r = n?.astNode ?? n?.getQueryType() ?? n?.getMutationType() ?? n?.getSubscriptionType(), i = 0;
		return { SchemaDefinition(n) {
			if (r) {
				e.reportError(new t.GraphQLError("Cannot define a new schema within a schema extension.", { nodes: n }));
				return;
			}
			i > 0 && e.reportError(new t.GraphQLError("Must provide only one schema definition.", { nodes: n })), ++i;
		} };
	}
})), Mm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MaxIntrospectionDepthRule = i;
	var t = Y(), n = Z(), r = 3;
	function i(e) {
		function i(t, a = Object.create(null), o = 0) {
			if (t.kind === n.Kind.FRAGMENT_SPREAD) {
				let n = t.name.value;
				if (a[n] === !0) return !1;
				let r = e.getFragment(n);
				if (!r) return !1;
				try {
					return a[n] = !0, i(r, a, o);
				} finally {
					a[n] = void 0;
				}
			}
			if (t.kind === n.Kind.FIELD && (t.name.value === "fields" || t.name.value === "interfaces" || t.name.value === "possibleTypes" || t.name.value === "inputFields") && (o++, o >= r)) return !0;
			if ("selectionSet" in t && t.selectionSet) {
				for (let e of t.selectionSet.selections) if (i(e, a, o)) return !0;
			}
			return !1;
		}
		return { Field(n) {
			if ((n.name.value === "__schema" || n.name.value === "__type") && i(n)) return e.reportError(new t.GraphQLError("Maximum introspection depth exceeded", { nodes: [n] })), !1;
		} };
	}
})), Nm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.NoFragmentCyclesRule = n;
	var t = Y();
	function n(e) {
		let n = Object.create(null), r = [], i = Object.create(null);
		return {
			OperationDefinition: () => !1,
			FragmentDefinition(e) {
				return a(e), !1;
			}
		};
		function a(o) {
			if (n[o.name.value]) return;
			let s = o.name.value;
			n[s] = !0;
			let c = e.getFragmentSpreads(o.selectionSet);
			if (c.length !== 0) {
				i[s] = r.length;
				for (let n of c) {
					let o = n.name.value, s = i[o];
					if (r.push(n), s === void 0) {
						let t = e.getFragment(o);
						t && a(t);
					} else {
						let n = r.slice(s), i = n.slice(0, -1).map((e) => "\"" + e.name.value + "\"").join(", ");
						e.reportError(new t.GraphQLError(`Cannot spread fragment "${o}" within itself` + (i === "" ? "." : ` via ${i}.`), { nodes: n }));
					}
					r.pop();
				}
				i[s] = void 0;
			}
		}
	}
})), Pm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.NoUndefinedVariablesRule = n;
	var t = Y();
	function n(e) {
		let n = Object.create(null);
		return {
			OperationDefinition: {
				enter() {
					n = Object.create(null);
				},
				leave(r) {
					let i = e.getRecursiveVariableUsages(r);
					for (let { node: a } of i) {
						let i = a.name.value;
						n[i] !== !0 && e.reportError(new t.GraphQLError(r.name ? `Variable "$${i}" is not defined by operation "${r.name.value}".` : `Variable "$${i}" is not defined.`, { nodes: [a, r] }));
					}
				}
			},
			VariableDefinition(e) {
				n[e.variable.name.value] = !0;
			}
		};
	}
})), Fm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.NoUnusedFragmentsRule = n;
	var t = Y();
	function n(e) {
		let n = [], r = [];
		return {
			OperationDefinition(e) {
				return n.push(e), !1;
			},
			FragmentDefinition(e) {
				return r.push(e), !1;
			},
			Document: { leave() {
				let i = Object.create(null);
				for (let t of n) for (let n of e.getRecursivelyReferencedFragments(t)) i[n.name.value] = !0;
				for (let n of r) {
					let r = n.name.value;
					i[r] !== !0 && e.reportError(new t.GraphQLError(`Fragment "${r}" is never used.`, { nodes: n }));
				}
			} }
		};
	}
})), Im = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.NoUnusedVariablesRule = n;
	var t = Y();
	function n(e) {
		let n = [];
		return {
			OperationDefinition: {
				enter() {
					n = [];
				},
				leave(r) {
					let i = Object.create(null), a = e.getRecursiveVariableUsages(r);
					for (let { node: e } of a) i[e.name.value] = !0;
					for (let a of n) {
						let n = a.variable.name.value;
						i[n] !== !0 && e.reportError(new t.GraphQLError(r.name ? `Variable "$${n}" is never used in operation "${r.name.value}".` : `Variable "$${n}" is never used.`, { nodes: a }));
					}
				}
			},
			VariableDefinition(e) {
				n.push(e);
			}
		};
	}
})), Lm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.sortValueNode = r;
	var t = im(), n = Z();
	function r(e) {
		switch (e.kind) {
			case n.Kind.OBJECT: return {
				...e,
				fields: i(e.fields)
			};
			case n.Kind.LIST: return {
				...e,
				values: e.values.map(r)
			};
			case n.Kind.INT:
			case n.Kind.FLOAT:
			case n.Kind.STRING:
			case n.Kind.BOOLEAN:
			case n.Kind.NULL:
			case n.Kind.ENUM:
			case n.Kind.VARIABLE: return e;
		}
	}
	function i(e) {
		return e.map((e) => ({
			...e,
			value: r(e.value)
		})).sort((e, n) => (0, t.naturalCompare)(e.name.value, n.name.value));
	}
})), Rm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.OverlappingFieldsCanBeMergedRule = l;
	var t = X(), n = Y(), r = Z(), i = lm(), a = Q(), o = Lm(), s = bm();
	function c(e) {
		return Array.isArray(e) ? e.map(([e, t]) => `subfields "${e}" conflict because ` + c(t)).join(" and ") : e;
	}
	function l(e) {
		let t = new w(), r = new T(), i = /* @__PURE__ */ new Map();
		return { SelectionSet(a) {
			let o = u(e, i, t, r, e.getParentType(), a);
			for (let [[t, r], i, a] of o) {
				let o = c(r);
				e.reportError(new n.GraphQLError(`Fields "${t}" conflict because ${o}. Use different aliases on the fields to fetch both if this was intentional.`, { nodes: i.concat(a) }));
			}
		} };
	}
	function u(e, t, n, r, i, a) {
		let o = [], [s, c] = b(e, t, i, a);
		if (m(e, o, t, n, r, s), c.length !== 0) for (let i = 0; i < c.length; i++) {
			d(e, o, t, n, r, !1, s, c[i]);
			for (let a = i + 1; a < c.length; a++) f(e, o, t, n, r, !1, c[i], c[a]);
		}
		return o;
	}
	function d(e, t, n, r, i, a, o, s) {
		if (r.has(o, s, a)) return;
		r.add(o, s, a);
		let c = e.getFragment(s);
		if (!c) return;
		let [l, u] = x(e, n, c);
		if (o !== l) {
			h(e, t, n, r, i, a, o, l);
			for (let s of u) d(e, t, n, r, i, a, o, s);
		}
	}
	function f(e, t, n, r, i, a, o, s) {
		if (o === s || i.has(o, s, a)) return;
		i.add(o, s, a);
		let c = e.getFragment(o), l = e.getFragment(s);
		if (!c || !l) return;
		let [u, d] = x(e, n, c), [p, m] = x(e, n, l);
		h(e, t, n, r, i, a, u, p);
		for (let s of m) f(e, t, n, r, i, a, o, s);
		for (let o of d) f(e, t, n, r, i, a, o, s);
	}
	function p(e, t, n, r, i, a, o, s, c) {
		let l = [], [u, p] = b(e, t, a, o), [m, g] = b(e, t, s, c);
		h(e, l, t, n, r, i, u, m);
		for (let a of g) d(e, l, t, n, r, i, u, a);
		for (let a of p) d(e, l, t, n, r, i, m, a);
		for (let a of p) for (let o of g) f(e, l, t, n, r, i, a, o);
		return l;
	}
	function m(e, t, n, r, i, a) {
		for (let [o, s] of Object.entries(a)) if (s.length > 1) for (let a = 0; a < s.length; a++) for (let c = a + 1; c < s.length; c++) {
			let l = g(e, n, r, i, !1, o, s[a], s[c]);
			l && t.push(l);
		}
	}
	function h(e, t, n, r, i, a, o, s) {
		for (let [c, l] of Object.entries(o)) {
			let o = s[c];
			if (o) for (let s of l) for (let l of o) {
				let o = g(e, n, r, i, a, c, s, l);
				o && t.push(o);
			}
		}
	}
	function g(e, n, r, i, o, s, c, l) {
		let [u, d, f] = c, [m, h, g] = l, v = o || u !== m && (0, a.isObjectType)(u) && (0, a.isObjectType)(m);
		if (!v) {
			let e = d.name.value, t = h.name.value;
			if (e !== t) return [
				[s, `"${e}" and "${t}" are different fields`],
				[d],
				[h]
			];
			if (!_(d, h)) return [
				[s, "they have differing arguments"],
				[d],
				[h]
			];
		}
		let b = f?.type, x = g?.type;
		if (b && x && y(b, x)) return [
			[s, `they return conflicting types "${(0, t.inspect)(b)}" and "${(0, t.inspect)(x)}"`],
			[d],
			[h]
		];
		let S = d.selectionSet, w = h.selectionSet;
		if (S && w) return C(p(e, n, r, i, v, (0, a.getNamedType)(b), S, (0, a.getNamedType)(x), w), s, d, h);
	}
	function _(e, t) {
		let n = e.arguments, r = t.arguments;
		if (n === void 0 || n.length === 0) return r === void 0 || r.length === 0;
		/* c8 ignore next */
		if (r === void 0 || r.length === 0 || n.length !== r.length)
 /* c8 ignore next */
		return !1;
		let i = new Map(r.map(({ name: e, value: t }) => [e.value, t]));
		return n.every((e) => {
			let t = e.value, n = i.get(e.name.value);
			return n === void 0 ? !1 : v(t) === v(n);
		});
	}
	function v(e) {
		return (0, i.print)((0, o.sortValueNode)(e));
	}
	function y(e, t) {
		return (0, a.isListType)(e) ? (0, a.isListType)(t) ? y(e.ofType, t.ofType) : !0 : (0, a.isListType)(t) ? !0 : (0, a.isNonNullType)(e) ? (0, a.isNonNullType)(t) ? y(e.ofType, t.ofType) : !0 : (0, a.isNonNullType)(t) ? !0 : (0, a.isLeafType)(e) || (0, a.isLeafType)(t) ? e !== t : !1;
	}
	function b(e, t, n, r) {
		let i = t.get(r);
		if (i) return i;
		let a = Object.create(null), o = Object.create(null);
		S(e, n, r, a, o);
		let s = [a, Object.keys(o)];
		return t.set(r, s), s;
	}
	function x(e, t, n) {
		return t.get(n.selectionSet) || b(e, t, (0, s.typeFromAST)(e.getSchema(), n.typeCondition), n.selectionSet);
	}
	function S(e, t, n, i, o) {
		for (let c of n.selections) switch (c.kind) {
			case r.Kind.FIELD: {
				let e = c.name.value, n;
				((0, a.isObjectType)(t) || (0, a.isInterfaceType)(t)) && (n = t.getFields()[e]);
				let r = c.alias ? c.alias.value : e;
				i[r] || (i[r] = []), i[r].push([
					t,
					c,
					n
				]);
				break;
			}
			case r.Kind.FRAGMENT_SPREAD:
				o[c.name.value] = !0;
				break;
			case r.Kind.INLINE_FRAGMENT: {
				let n = c.typeCondition;
				S(e, n ? (0, s.typeFromAST)(e.getSchema(), n) : t, c.selectionSet, i, o);
				break;
			}
		}
	}
	function C(e, t, n, r) {
		if (e.length > 0) return [
			[t, e.map(([e]) => e)],
			[n, ...e.map(([, e]) => e).flat()],
			[r, ...e.map(([, , e]) => e).flat()]
		];
	}
	var w = class {
		constructor() {
			this._data = /* @__PURE__ */ new Map();
		}
		has(e, t, n) {
			let r = this._data.get(e)?.get(t);
			return r === void 0 ? !1 : n ? !0 : n === r;
		}
		add(e, t, n) {
			let r = this._data.get(e);
			r === void 0 ? this._data.set(e, new Map([[t, n]])) : r.set(t, n);
		}
	}, T = class {
		constructor() {
			this._orderedPairSet = new w();
		}
		has(e, t, n) {
			return e < t ? this._orderedPairSet.has(e, t, n) : this._orderedPairSet.has(t, e, n);
		}
		add(e, t, n) {
			e < t ? this._orderedPairSet.add(e, t, n) : this._orderedPairSet.add(t, e, n);
		}
	};
})), zm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.PossibleFragmentSpreadsRule = o;
	var t = X(), n = Y(), r = Q(), i = fm(), a = bm();
	function o(e) {
		return {
			InlineFragment(a) {
				let o = e.getType(), s = e.getParentType();
				if ((0, r.isCompositeType)(o) && (0, r.isCompositeType)(s) && !(0, i.doTypesOverlap)(e.getSchema(), o, s)) {
					let r = (0, t.inspect)(s), i = (0, t.inspect)(o);
					e.reportError(new n.GraphQLError(`Fragment cannot be spread here as objects of type "${r}" can never be of type "${i}".`, { nodes: a }));
				}
			},
			FragmentSpread(r) {
				let a = r.name.value, o = s(e, a), c = e.getParentType();
				if (o && c && !(0, i.doTypesOverlap)(e.getSchema(), o, c)) {
					let i = (0, t.inspect)(c), s = (0, t.inspect)(o);
					e.reportError(new n.GraphQLError(`Fragment "${a}" cannot be spread here as objects of type "${i}" can never be of type "${s}".`, { nodes: r }));
				}
			}
		};
	}
	function s(e, t) {
		let n = e.getFragment(t);
		if (n) {
			let t = (0, a.typeFromAST)(e.getSchema(), n.typeCondition);
			if ((0, r.isCompositeType)(t)) return t;
		}
	}
})), Bm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.PossibleTypeExtensionsRule = l;
	var t = $p(), n = X(), r = gf(), i = am(), a = Y(), o = Z(), s = Sm(), c = Q();
	function l(e) {
		let n = e.getSchema(), r = Object.create(null);
		for (let t of e.getDocument().definitions) (0, s.isTypeDefinitionNode)(t) && (r[t.name.value] = t);
		return {
			ScalarTypeExtension: o,
			ObjectTypeExtension: o,
			InterfaceTypeExtension: o,
			UnionTypeExtension: o,
			EnumTypeExtension: o,
			InputObjectTypeExtension: o
		};
		function o(o) {
			let s = o.name.value, c = r[s], l = n?.getType(s), p;
			if (c ? p = u[c.kind] : l && (p = d(l)), p) {
				if (p !== o.kind) {
					let t = f(o.kind);
					e.reportError(new a.GraphQLError(`Cannot extend non-${t} type "${s}".`, { nodes: c ? [c, o] : o }));
				}
			} else {
				let c = Object.keys({
					...r,
					...n?.getTypeMap()
				}), l = (0, i.suggestionList)(s, c);
				e.reportError(new a.GraphQLError(`Cannot extend type "${s}" because it is not defined.` + (0, t.didYouMean)(l), { nodes: o.name }));
			}
		}
	}
	var u = {
		[o.Kind.SCALAR_TYPE_DEFINITION]: o.Kind.SCALAR_TYPE_EXTENSION,
		[o.Kind.OBJECT_TYPE_DEFINITION]: o.Kind.OBJECT_TYPE_EXTENSION,
		[o.Kind.INTERFACE_TYPE_DEFINITION]: o.Kind.INTERFACE_TYPE_EXTENSION,
		[o.Kind.UNION_TYPE_DEFINITION]: o.Kind.UNION_TYPE_EXTENSION,
		[o.Kind.ENUM_TYPE_DEFINITION]: o.Kind.ENUM_TYPE_EXTENSION,
		[o.Kind.INPUT_OBJECT_TYPE_DEFINITION]: o.Kind.INPUT_OBJECT_TYPE_EXTENSION
	};
	function d(e) {
		if ((0, c.isScalarType)(e)) return o.Kind.SCALAR_TYPE_EXTENSION;
		if ((0, c.isObjectType)(e)) return o.Kind.OBJECT_TYPE_EXTENSION;
		if ((0, c.isInterfaceType)(e)) return o.Kind.INTERFACE_TYPE_EXTENSION;
		if ((0, c.isUnionType)(e)) return o.Kind.UNION_TYPE_EXTENSION;
		if ((0, c.isEnumType)(e)) return o.Kind.ENUM_TYPE_EXTENSION;
		if ((0, c.isInputObjectType)(e)) return o.Kind.INPUT_OBJECT_TYPE_EXTENSION;
		/* c8 ignore next 3 */
		(0, r.invariant)(!1, "Unexpected type: " + (0, n.inspect)(e));
	}
	function f(e) {
		switch (e) {
			case o.Kind.SCALAR_TYPE_EXTENSION: return "scalar";
			case o.Kind.OBJECT_TYPE_EXTENSION: return "object";
			case o.Kind.INTERFACE_TYPE_EXTENSION: return "interface";
			case o.Kind.UNION_TYPE_EXTENSION: return "union";
			case o.Kind.ENUM_TYPE_EXTENSION: return "enum";
			case o.Kind.INPUT_OBJECT_TYPE_EXTENSION: return "input object";
			/* c8 ignore next */
			default: (0, r.invariant)(!1, "Unexpected kind: " + (0, n.inspect)(e));
		}
	}
})), Vm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ProvidedRequiredArgumentsOnDirectivesRule = l, e.ProvidedRequiredArgumentsRule = c;
	var t = X(), n = tm(), r = Y(), i = Z(), a = lm(), o = Q(), s = mm();
	function c(e) {
		return {
			...l(e),
			Field: { leave(n) {
				let i = e.getFieldDef();
				if (!i) return !1;
				let a = new Set(n.arguments?.map((e) => e.name.value));
				for (let s of i.args) if (!a.has(s.name) && (0, o.isRequiredArgument)(s)) {
					let a = (0, t.inspect)(s.type);
					e.reportError(new r.GraphQLError(`Field "${i.name}" argument "${s.name}" of type "${a}" is required, but it was not provided.`, { nodes: n }));
				}
			} }
		};
	}
	function l(e) {
		let c = Object.create(null), l = e.getSchema()?.getDirectives() ?? s.specifiedDirectives;
		for (let e of l) c[e.name] = (0, n.keyMap)(e.args.filter(o.isRequiredArgument), (e) => e.name);
		let d = e.getDocument().definitions;
		for (let e of d) if (e.kind === i.Kind.DIRECTIVE_DEFINITION) {
			/* c8 ignore next */
			let t = e.arguments ?? [];
			c[e.name.value] = (0, n.keyMap)(t.filter(u), (e) => e.name.value);
		}
		return { Directive: { leave(n) {
			let i = n.name.value, s = c[i];
			if (s) {
				/* c8 ignore next */
				let c = n.arguments ?? [], l = new Set(c.map((e) => e.name.value));
				for (let [c, u] of Object.entries(s)) if (!l.has(c)) {
					let s = (0, o.isType)(u.type) ? (0, t.inspect)(u.type) : (0, a.print)(u.type);
					e.reportError(new r.GraphQLError(`Directive "@${i}" argument "${c}" of type "${s}" is required, but it was not provided.`, { nodes: n }));
				}
			}
		} } };
	}
	function u(e) {
		return e.type.kind === i.Kind.NON_NULL_TYPE && e.defaultValue == null;
	}
})), Hm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ScalarLeafsRule = i;
	var t = X(), n = Y(), r = Q();
	function i(e) {
		return { Field(i) {
			let a = e.getType(), o = i.selectionSet;
			if (a) {
				if ((0, r.isLeafType)((0, r.getNamedType)(a))) {
					if (o) {
						let r = i.name.value, s = (0, t.inspect)(a);
						e.reportError(new n.GraphQLError(`Field "${r}" must not have a selection since type "${s}" has no subfields.`, { nodes: o }));
					}
				} else if (!o) {
					let r = i.name.value, o = (0, t.inspect)(a);
					e.reportError(new n.GraphQLError(`Field "${r}" of type "${o}" must have a selection of subfields. Did you mean "${r} { ... }"?`, { nodes: i }));
				} else if (o.selections.length === 0) {
					let r = i.name.value, o = (0, t.inspect)(a);
					e.reportError(new n.GraphQLError(`Field "${r}" of type "${o}" must have at least one field selected.`, { nodes: i }));
				}
			}
		} };
	}
})), Um = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.printPathArray = t;
	function t(e) {
		return e.map((e) => typeof e == "number" ? "[" + e.toString() + "]" : "." + e).join("");
	}
})), Wm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.addPath = t, e.pathToArray = n;
	function t(e, t, n) {
		return {
			prev: e,
			key: t,
			typename: n
		};
	}
	function n(e) {
		let t = [], n = e;
		for (; n;) t.push(n.key), n = n.prev;
		return t.reverse();
	}
})), Gm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.coerceInputValue = u;
	var t = $p(), n = X(), r = gf(), i = hm(), a = hf(), o = Wm();
	Um();
	var s = am(), c = Y(), l = Q();
	function u(e, t, n = Xi) {
		return d(e, t, n, void 0);
	}
	function d(e, u, f, p) {
		if ((0, l.isNonNullType)(u)) {
			if (e != null) return d(e, u.ofType, f, p);
			f((0, o.pathToArray)(p), e, new c.GraphQLError(`Expected non-nullable type "${(0, n.inspect)(u)}" not to be null.`));
			return;
		}
		if (e == null) return null;
		if ((0, l.isListType)(u)) {
			let t = u.ofType;
			return (0, i.isIterableObject)(e) ? Array.from(e, (e, n) => d(e, t, f, (0, o.addPath)(p, n, void 0))) : [d(e, t, f, p)];
		}
		if ((0, l.isInputObjectType)(u)) {
			if (!(0, a.isObjectLike)(e) || Array.isArray(e)) {
				f((0, o.pathToArray)(p), e, new c.GraphQLError(`Expected type "${u.name}" to be an object.`));
				return;
			}
			let r = Object.create(null), i = u.getFields();
			for (let t of Object.values(i)) {
				let i = e[t.name];
				if (i === void 0) {
					if (t.defaultValue !== void 0) r[t.name] = t.defaultValue;
					else if ((0, l.isNonNullType)(t.type)) {
						let r = (0, n.inspect)(t.type);
						f((0, o.pathToArray)(p), e, new c.GraphQLError(`Field "${t.name}" of required type "${r}" was not provided.`));
					}
					continue;
				}
				r[t.name] = d(i, t.type, f, (0, o.addPath)(p, t.name, u.name));
			}
			for (let n of Object.keys(e)) if (!i[n]) {
				let r = (0, s.suggestionList)(n, Object.keys(u.getFields()));
				f((0, o.pathToArray)(p), e, new c.GraphQLError(`Field "${n}" is not defined by type "${u.name}".` + (0, t.didYouMean)(r)));
			}
			if (u.isOneOf) {
				let t = Object.keys(r);
				t.length !== 1 && f((0, o.pathToArray)(p), e, new c.GraphQLError(`Exactly one key must be specified for OneOf type "${u.name}".`));
				let n = t[0], i = r[n];
				i === null && f((0, o.pathToArray)(p).concat(n), i, new c.GraphQLError(`Field "${n}" must be non-null.`));
			}
			return { ...r };
		}
		if ((0, l.isLeafType)(u)) {
			let t;
			try {
				t = u.parseValue(e);
			} catch (t) {
				t instanceof c.GraphQLError ? f((0, o.pathToArray)(p), e, t) : f((0, o.pathToArray)(p), e, new c.GraphQLError(`Expected type "${u.name}". ` + t.message, { originalError: t }));
				return;
			}
			return t === void 0 && f((0, o.pathToArray)(p), e, new c.GraphQLError(`Expected type "${u.name}".`)), t;
		}
		/* c8 ignore next 3 */
		(0, r.invariant)(!1, "Unexpected input type: " + (0, n.inspect)(u));
	}
})), Km = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.valueFromAST = o;
	var t = X(), n = gf(), r = tm(), i = Z(), a = Q();
	function o(e, l, u) {
		if (e) {
			if (e.kind === i.Kind.VARIABLE) {
				let t = e.name.value;
				if (u == null || u[t] === void 0 || !c(u, t)) return;
				let n = u[t];
				return n === null && (0, a.isNonNullType)(l) ? void 0 : n;
			}
			if ((0, a.isNonNullType)(l)) return e.kind === i.Kind.NULL ? void 0 : o(e, l.ofType, u);
			if (e.kind === i.Kind.NULL) return null;
			if ((0, a.isListType)(l)) {
				let t = l.ofType;
				if (e.kind === i.Kind.LIST) {
					let n = [];
					for (let r of e.values) if (s(r, u)) {
						if ((0, a.isNonNullType)(t)) return;
						n.push(null);
					} else {
						let e = o(r, t, u);
						if (e === void 0) return;
						n.push(e);
					}
					return n;
				}
				let n = o(e, t, u);
				return n === void 0 ? void 0 : [n];
			}
			if ((0, a.isInputObjectType)(l)) {
				if (e.kind !== i.Kind.OBJECT) return;
				let t = Object.create(null), n = (0, r.keyMap)(e.fields, (e) => e.name.value);
				for (let e of Object.values(l.getFields())) {
					let r = n[e.name];
					if (!r || s(r.value, u)) {
						if (e.defaultValue !== void 0) t[e.name] = e.defaultValue;
						else if ((0, a.isNonNullType)(e.type)) return;
						continue;
					}
					let i = o(r.value, e.type, u);
					if (i === void 0) return;
					t[e.name] = i;
				}
				if (l.isOneOf) {
					let e = Object.keys(t);
					if (e.length !== 1 || t[e[0]] === null) return;
				}
				return t;
			}
			if ((0, a.isLeafType)(l)) {
				let t;
				try {
					t = l.parseLiteral(e, u);
				} catch {
					return;
				}
				return t === void 0 ? void 0 : t;
			}
			/* c8 ignore next 3 */
			(0, n.invariant)(!1, "Unexpected input type: " + (0, t.inspect)(l));
		}
	}
	function s(e, t) {
		return e.kind === i.Kind.VARIABLE && (t == null || t[e.name.value] === void 0 || !c(t, e.name.value));
	}
	function c(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
})), qm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getArgumentValues = p, e.getDirectiveValues = m, e.getVariableValues = d;
	var t = X(), n = tm(), r = Um(), i = Y(), a = Z(), o = lm(), s = Q(), c = Gm(), l = bm(), u = Km();
	function d(e, t, n, r) {
		let a = [], o = r?.maxErrors;
		try {
			let r = f(e, t, n, (e) => {
				if (o != null && a.length >= o) throw new i.GraphQLError("Too many errors processing variables, error limit reached. Execution aborted.");
				a.push(e);
			});
			if (a.length === 0) return { coerced: r };
		} catch (e) {
			a.push(e);
		}
		return { errors: a };
	}
	function f(e, n, a, d) {
		let f = Object.create(null);
		for (let p of n) {
			let n = p.variable.name.value, m = (0, l.typeFromAST)(e, p.type);
			if (!(0, s.isInputType)(m)) {
				let e = (0, o.print)(p.type);
				d(new i.GraphQLError(`Variable "$${n}" expected value of type "${e}" which cannot be used as an input type.`, { nodes: p.type }));
				continue;
			}
			if (!h(a, n)) {
				if (p.defaultValue) f[n] = (0, u.valueFromAST)(p.defaultValue, m);
				else if ((0, s.isNonNullType)(m)) {
					let e = (0, t.inspect)(m);
					d(new i.GraphQLError(`Variable "$${n}" of required type "${e}" was not provided.`, { nodes: p }));
				}
				continue;
			}
			let g = a[n];
			if (g === null && (0, s.isNonNullType)(m)) {
				let e = (0, t.inspect)(m);
				d(new i.GraphQLError(`Variable "$${n}" of non-null type "${e}" must not be null.`, { nodes: p }));
				continue;
			}
			f[n] = (0, c.coerceInputValue)(g, m, (e, a, o) => {
				let s = `Variable "$${n}" got invalid value ` + (0, t.inspect)(a);
				e.length > 0 && (s += ` at "${n}${(0, r.printPathArray)(e)}"`), d(new i.GraphQLError(s + "; " + o.message, {
					nodes: p,
					originalError: o
				}));
			});
		}
		return { ...f };
	}
	function p(e, r, c) {
		let l = Object.create(null), d = r.arguments ?? [], f = (0, n.keyMap)(d, (e) => e.name.value);
		for (let n of e.args) {
			let e = n.name, d = n.type, p = f[e];
			if (!p) {
				if (n.defaultValue !== void 0) l[e] = n.defaultValue;
				else if ((0, s.isNonNullType)(d)) throw new i.GraphQLError(`Argument "${e}" of required type "${(0, t.inspect)(d)}" was not provided.`, { nodes: r });
				continue;
			}
			let m = p.value, g = m.kind === a.Kind.NULL;
			if (m.kind === a.Kind.VARIABLE) {
				let r = m.name.value;
				if (c == null || !h(c, r)) {
					if (n.defaultValue !== void 0) l[e] = n.defaultValue;
					else if ((0, s.isNonNullType)(d)) throw new i.GraphQLError(`Argument "${e}" of required type "${(0, t.inspect)(d)}" was provided the variable "$${r}" which was not provided a runtime value.`, { nodes: m });
					continue;
				}
				g = c[r] == null;
			}
			if (g && (0, s.isNonNullType)(d)) throw new i.GraphQLError(`Argument "${e}" of non-null type "${(0, t.inspect)(d)}" must not be null.`, { nodes: m });
			let _ = (0, u.valueFromAST)(m, d, c);
			if (_ === void 0) throw new i.GraphQLError(`Argument "${e}" has invalid value ${(0, o.print)(m)}.`, { nodes: m });
			l[e] = _;
		}
		return { ...l };
	}
	function m(e, t, n) {
		let r = t.directives?.find((t) => t.name.value === e.name);
		if (r) return p(e, r, n);
	}
	function h(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
})), Jm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.collectFields = o, e.collectSubfields = s;
	var t = Z(), n = Q(), r = mm(), i = bm(), a = qm();
	function o(e, t, n, r, i) {
		let a = /* @__PURE__ */ new Map();
		return c(e, t, n, r, i, a, /* @__PURE__ */ new Set()), a;
	}
	function s(e, t, n, r, i) {
		let a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
		for (let s of i) s.selectionSet && c(e, t, n, r, s.selectionSet, a, o);
		return a;
	}
	function c(e, n, r, i, a, o, s) {
		for (let f of a.selections) switch (f.kind) {
			case t.Kind.FIELD: {
				if (!l(r, f)) continue;
				let e = d(f), t = o.get(e);
				t === void 0 ? o.set(e, [f]) : t.push(f);
				break;
			}
			case t.Kind.INLINE_FRAGMENT:
				if (!l(r, f) || !u(e, f, i)) continue;
				c(e, n, r, i, f.selectionSet, o, s);
				break;
			case t.Kind.FRAGMENT_SPREAD: {
				let t = f.name.value;
				if (s.has(t) || !l(r, f)) continue;
				s.add(t);
				let a = n[t];
				if (!a || !u(e, a, i)) continue;
				c(e, n, r, i, a.selectionSet, o, s);
				break;
			}
		}
	}
	function l(e, t) {
		return (0, a.getDirectiveValues)(r.GraphQLSkipDirective, t, e)?.if === !0 ? !1 : (0, a.getDirectiveValues)(r.GraphQLIncludeDirective, t, e)?.if !== !1;
	}
	function u(e, t, r) {
		let a = t.typeCondition;
		if (!a) return !0;
		let o = (0, i.typeFromAST)(e, a);
		return o === r ? !0 : (0, n.isAbstractType)(o) ? e.isSubType(o, r) : !1;
	}
	function d(e) {
		return e.alias ? e.alias.value : e.name.value;
	}
})), Ym = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SingleFieldSubscriptionsRule = i;
	var t = Y(), n = Z(), r = Jm();
	function i(e) {
		return { OperationDefinition(i) {
			if (i.operation === "subscription") {
				let a = e.getSchema(), o = a.getSubscriptionType();
				if (o) {
					let s = i.name ? i.name.value : null, c = Object.create(null), l = e.getDocument(), u = Object.create(null);
					for (let e of l.definitions) e.kind === n.Kind.FRAGMENT_DEFINITION && (u[e.name.value] = e);
					let d = (0, r.collectFields)(a, u, c, o, i.selectionSet);
					if (d.size > 1) {
						let n = [...d.values()].slice(1).flat();
						e.reportError(new t.GraphQLError(s == null ? "Anonymous Subscription must select only one top level field." : `Subscription "${s}" must select only one top level field.`, { nodes: n }));
					}
					for (let n of d.values()) n[0].name.value.startsWith("__") && e.reportError(new t.GraphQLError(s == null ? "Anonymous Subscription must not select an introspection top level field." : `Subscription "${s}" must not select an introspection top level field.`, { nodes: n }));
				}
			}
		} };
	}
})), Xm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.groupBy = t;
	function t(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let r of e) {
			let e = t(r), i = n.get(e);
			i === void 0 ? n.set(e, [r]) : i.push(r);
		}
		return n;
	}
})), Zm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueArgumentDefinitionNamesRule = r;
	var t = Xm(), n = Y();
	function r(e) {
		return {
			DirectiveDefinition(e) {
				/* c8 ignore next */
				let t = e.arguments ?? [];
				return i(`@${e.name.value}`, t);
			},
			InterfaceTypeDefinition: r,
			InterfaceTypeExtension: r,
			ObjectTypeDefinition: r,
			ObjectTypeExtension: r
		};
		function r(e) {
			let t = e.name.value, n = e.fields ?? [];
			for (let e of n) {
				let n = e.name.value, r = e.arguments ?? [];
				i(`${t}.${n}`, r);
			}
			return !1;
		}
		function i(r, i) {
			let a = (0, t.groupBy)(i, (e) => e.name.value);
			for (let [t, i] of a) i.length > 1 && e.reportError(new n.GraphQLError(`Argument "${r}(${t}:)" can only be defined once.`, { nodes: i.map((e) => e.name) }));
			return !1;
		}
	}
})), Qm = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueArgumentNamesRule = r;
	var t = Xm(), n = Y();
	function r(e) {
		return {
			Field: r,
			Directive: r
		};
		function r(r) {
			/* c8 ignore next */
			let i = r.arguments ?? [], a = (0, t.groupBy)(i, (e) => e.name.value);
			for (let [t, r] of a) r.length > 1 && e.reportError(new n.GraphQLError(`There can be only one argument named "${t}".`, { nodes: r.map((e) => e.name) }));
		}
	}
})), $m = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueDirectiveNamesRule = n;
	var t = Y();
	function n(e) {
		let n = Object.create(null), r = e.getSchema();
		return { DirectiveDefinition(i) {
			let a = i.name.value;
			if (r != null && r.getDirective(a)) {
				e.reportError(new t.GraphQLError(`Directive "@${a}" already exists in the schema. It cannot be redefined.`, { nodes: i.name }));
				return;
			}
			return n[a] ? e.reportError(new t.GraphQLError(`There can be only one directive named "@${a}".`, { nodes: [n[a], i.name] })) : n[a] = i.name, !1;
		} };
	}
})), eh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueDirectivesPerLocationRule = a;
	var t = Y(), n = Z(), r = Sm(), i = mm();
	function a(e) {
		let a = Object.create(null), o = e.getSchema(), s = o ? o.getDirectives() : i.specifiedDirectives;
		for (let e of s) a[e.name] = !e.isRepeatable;
		let c = e.getDocument().definitions;
		for (let e of c) e.kind === n.Kind.DIRECTIVE_DEFINITION && (a[e.name.value] = !e.repeatable);
		let l = Object.create(null), u = Object.create(null), d = Object.create(null);
		return { enter(i) {
			if (!("directives" in i) || !i.directives) return;
			let o;
			if (i.kind === n.Kind.SCHEMA_DEFINITION || i.kind === n.Kind.SCHEMA_EXTENSION) o = l;
			else if ((0, r.isTypeDefinitionNode)(i) || (0, r.isTypeExtensionNode)(i)) {
				let e = i.name.value;
				o = u[e], o === void 0 && (u[e] = o = Object.create(null));
			} else if (i.kind === n.Kind.DIRECTIVE_DEFINITION || i.kind === n.Kind.DIRECTIVE_EXTENSION) {
				let e = i.name.value;
				o = d[e], o === void 0 && (d[e] = o = Object.create(null));
			} else o = Object.create(null);
			for (let n of i.directives) {
				let r = n.name.value;
				a[r] && (o[r] ? e.reportError(new t.GraphQLError(`The directive "@${r}" can only be used once at this location.`, { nodes: [o[r], n] })) : o[r] = n);
			}
		} };
	}
})), th = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueEnumValueNamesRule = r;
	var t = Y(), n = Q();
	function r(e) {
		let r = e.getSchema(), i = r ? r.getTypeMap() : Object.create(null), a = Object.create(null);
		return {
			EnumTypeDefinition: o,
			EnumTypeExtension: o
		};
		function o(r) {
			let o = r.name.value;
			a[o] || (a[o] = Object.create(null));
			/* c8 ignore next */
			let s = r.values ?? [], c = a[o];
			for (let r of s) {
				let a = r.name.value, s = i[o];
				(0, n.isEnumType)(s) && s.getValue(a) ? e.reportError(new t.GraphQLError(`Enum value "${o}.${a}" already exists in the schema. It cannot also be defined in this type extension.`, { nodes: r.name })) : c[a] ? e.reportError(new t.GraphQLError(`Enum value "${o}.${a}" can only be defined once.`, { nodes: [c[a], r.name] })) : c[a] = r.name;
			}
			return !1;
		}
	}
})), nh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueFieldDefinitionNamesRule = r;
	var t = Y(), n = Q();
	function r(e) {
		let n = e.getSchema(), r = n ? n.getTypeMap() : Object.create(null), a = Object.create(null);
		return {
			InputObjectTypeDefinition: o,
			InputObjectTypeExtension: o,
			InterfaceTypeDefinition: o,
			InterfaceTypeExtension: o,
			ObjectTypeDefinition: o,
			ObjectTypeExtension: o
		};
		function o(n) {
			let o = n.name.value;
			a[o] || (a[o] = Object.create(null));
			/* c8 ignore next */
			let s = n.fields ?? [], c = a[o];
			for (let n of s) {
				let a = n.name.value;
				i(r[o], a) ? e.reportError(new t.GraphQLError(`Field "${o}.${a}" already exists in the schema. It cannot also be defined in this type extension.`, { nodes: n.name })) : c[a] ? e.reportError(new t.GraphQLError(`Field "${o}.${a}" can only be defined once.`, { nodes: [c[a], n.name] })) : c[a] = n.name;
			}
			return !1;
		}
	}
	function i(e, t) {
		return (0, n.isObjectType)(e) || (0, n.isInterfaceType)(e) || (0, n.isInputObjectType)(e) ? e.getFields()[t] != null : !1;
	}
})), rh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueFragmentNamesRule = n;
	var t = Y();
	function n(e) {
		let n = Object.create(null);
		return {
			OperationDefinition: () => !1,
			FragmentDefinition(r) {
				let i = r.name.value;
				return n[i] ? e.reportError(new t.GraphQLError(`There can be only one fragment named "${i}".`, { nodes: [n[i], r.name] })) : n[i] = r.name, !1;
			}
		};
	}
})), ih = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueInputFieldNamesRule = r;
	var t = gf(), n = Y();
	function r(e) {
		let r = [], i = Object.create(null);
		return {
			ObjectValue: {
				enter() {
					r.push(i), i = Object.create(null);
				},
				leave() {
					let e = r.pop();
					e || (0, t.invariant)(!1), i = e;
				}
			},
			ObjectField(t) {
				let r = t.name.value;
				i[r] ? e.reportError(new n.GraphQLError(`There can be only one input field named "${r}".`, { nodes: [i[r], t.name] })) : i[r] = t.name;
			}
		};
	}
})), ah = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueOperationNamesRule = n;
	var t = Y();
	function n(e) {
		let n = Object.create(null);
		return {
			OperationDefinition(r) {
				let i = r.name;
				return i && (n[i.value] ? e.reportError(new t.GraphQLError(`There can be only one operation named "${i.value}".`, { nodes: [n[i.value], i] })) : n[i.value] = i), !1;
			},
			FragmentDefinition: () => !1
		};
	}
})), oh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueOperationTypesRule = n;
	var t = Y();
	function n(e) {
		let n = e.getSchema(), r = Object.create(null), i = n ? {
			query: n.getQueryType(),
			mutation: n.getMutationType(),
			subscription: n.getSubscriptionType()
		} : {};
		return {
			SchemaDefinition: a,
			SchemaExtension: a
		};
		function a(n) {
			/* c8 ignore next */
			let a = n.operationTypes ?? [];
			for (let n of a) {
				let a = n.operation, o = r[a];
				i[a] ? e.reportError(new t.GraphQLError(`Type for ${a} already defined in the schema. It cannot be redefined.`, { nodes: n })) : o ? e.reportError(new t.GraphQLError(`There can be only one ${a} type in schema.`, { nodes: [o, n] })) : r[a] = n;
			}
			return !1;
		}
	}
})), sh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueTypeNamesRule = n;
	var t = Y();
	function n(e) {
		let n = Object.create(null), r = e.getSchema();
		return {
			ScalarTypeDefinition: i,
			ObjectTypeDefinition: i,
			InterfaceTypeDefinition: i,
			UnionTypeDefinition: i,
			EnumTypeDefinition: i,
			InputObjectTypeDefinition: i
		};
		function i(i) {
			let a = i.name.value;
			if (r != null && r.getType(a)) {
				e.reportError(new t.GraphQLError(`Type "${a}" already exists in the schema. It cannot also be defined in this type definition.`, { nodes: i.name }));
				return;
			}
			return n[a] ? e.reportError(new t.GraphQLError(`There can be only one type named "${a}".`, { nodes: [n[a], i.name] })) : n[a] = i.name, !1;
		}
	}
})), ch = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UniqueVariableNamesRule = r;
	var t = Xm(), n = Y();
	function r(e) {
		return { OperationDefinition(r) {
			/* c8 ignore next */
			let i = r.variableDefinitions ?? [], a = (0, t.groupBy)(i, (e) => e.variable.name.value);
			for (let [t, r] of a) r.length > 1 && e.reportError(new n.GraphQLError(`There can be only one variable named "$${t}".`, { nodes: r.map((e) => e.variable.name) }));
		} };
	}
})), lh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ValuesOfCorrectTypeRule = l;
	var t = $p(), n = X(), r = tm(), i = am(), a = Y(), o = Z(), s = lm(), c = Q();
	function l(e) {
		return {
			ListValue(t) {
				let n = (0, c.getNullableType)(e.getParentInputType());
				if (!(0, c.isListType)(n)) return u(e, t), !1;
			},
			ObjectValue(t) {
				let i = (0, c.getNamedType)(e.getInputType());
				if (!(0, c.isInputObjectType)(i)) return u(e, t), !1;
				let o = (0, r.keyMap)(t.fields, (e) => e.name.value);
				for (let r of Object.values(i.getFields())) if (!o[r.name] && (0, c.isRequiredInputField)(r)) {
					let o = (0, n.inspect)(r.type);
					e.reportError(new a.GraphQLError(`Field "${i.name}.${r.name}" of required type "${o}" was not provided.`, { nodes: t }));
				}
				i.isOneOf && d(e, t, i, o);
			},
			ObjectField(n) {
				let r = (0, c.getNamedType)(e.getParentInputType());
				if (!e.getInputType() && (0, c.isInputObjectType)(r)) {
					let o = (0, i.suggestionList)(n.name.value, Object.keys(r.getFields()));
					e.reportError(new a.GraphQLError(`Field "${n.name.value}" is not defined by type "${r.name}".` + (0, t.didYouMean)(o), { nodes: n }));
				}
			},
			NullValue(t) {
				let r = e.getInputType();
				(0, c.isNonNullType)(r) && e.reportError(new a.GraphQLError(`Expected value of type "${(0, n.inspect)(r)}", found ${(0, s.print)(t)}.`, { nodes: t }));
			},
			EnumValue: (t) => u(e, t),
			IntValue: (t) => u(e, t),
			FloatValue: (t) => u(e, t),
			StringValue: (t) => u(e, t),
			BooleanValue: (t) => u(e, t)
		};
	}
	function u(e, t) {
		let r = e.getInputType();
		if (!r) return;
		let i = (0, c.getNamedType)(r);
		if (!(0, c.isLeafType)(i)) {
			let i = (0, n.inspect)(r);
			e.reportError(new a.GraphQLError(`Expected value of type "${i}", found ${(0, s.print)(t)}.`, { nodes: t }));
			return;
		}
		try {
			if (i.parseLiteral(t, void 0) === void 0) {
				let i = (0, n.inspect)(r);
				e.reportError(new a.GraphQLError(`Expected value of type "${i}", found ${(0, s.print)(t)}.`, { nodes: t }));
			}
		} catch (i) {
			let o = (0, n.inspect)(r);
			i instanceof a.GraphQLError ? e.reportError(i) : e.reportError(new a.GraphQLError(`Expected value of type "${o}", found ${(0, s.print)(t)}; ` + i.message, {
				nodes: t,
				originalError: i
			}));
		}
	}
	function d(e, t, n, r) {
		let i = Object.keys(r);
		if (i.length !== 1) {
			e.reportError(new a.GraphQLError(`OneOf Input Object "${n.name}" must specify exactly one key.`, { nodes: [t] }));
			return;
		}
		let s = r[i[0]]?.value;
		(!s || s.kind === o.Kind.NULL) && e.reportError(new a.GraphQLError(`Field "${n.name}.${i[0]}" must be non-null.`, { nodes: [t] }));
	}
})), uh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.VariablesAreInputTypesRule = a;
	var t = Y(), n = lm(), r = Q(), i = bm();
	function a(e) {
		return { VariableDefinition(a) {
			let o = (0, i.typeFromAST)(e.getSchema(), a.type);
			if (o !== void 0 && !(0, r.isInputType)(o)) {
				let r = a.variable.name.value, i = (0, n.print)(a.type);
				e.reportError(new t.GraphQLError(`Variable "$${r}" cannot be non-input type "${i}".`, { nodes: a.type }));
			}
		} };
	}
})), dh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.VariablesInAllowedPositionRule = s;
	var t = X(), n = Y(), r = Z(), i = Q(), a = fm(), o = bm();
	function s(e) {
		let r = Object.create(null);
		return {
			OperationDefinition: {
				enter() {
					r = Object.create(null);
				},
				leave(a) {
					let s = e.getRecursiveVariableUsages(a);
					for (let { node: a, type: l, defaultValue: u, parentType: d } of s) {
						let s = a.name.value, f = r[s];
						if (f && l) {
							let r = e.getSchema(), p = (0, o.typeFromAST)(r, f.type);
							if (p && !c(r, p, f.defaultValue, l, u)) {
								let r = (0, t.inspect)(p), i = (0, t.inspect)(l);
								e.reportError(new n.GraphQLError(`Variable "$${s}" of type "${r}" used in position expecting type "${i}".`, { nodes: [f, a] }));
							}
							(0, i.isInputObjectType)(d) && d.isOneOf && (0, i.isNullableType)(p) && e.reportError(new n.GraphQLError(`Variable "$${s}" is of type "${p}" but must be non-nullable to be used for OneOf Input Object "${d}".`, { nodes: [f, a] }));
						}
					}
				}
			},
			VariableDefinition(e) {
				r[e.variable.name.value] = e;
			}
		};
	}
	function c(e, t, n, o, s) {
		if ((0, i.isNonNullType)(o) && !(0, i.isNonNullType)(t)) {
			if (!(n != null && n.kind !== r.Kind.NULL) && s === void 0) return !1;
			let i = o.ofType;
			return (0, a.isTypeSubTypeOf)(e, t, i);
		}
		return (0, a.isTypeSubTypeOf)(e, t, o);
	}
})), fh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.specifiedSDLRules = e.specifiedRules = e.recommendedRules = void 0;
	var t = Cm(), n = wm(), r = Tm(), i = Em(), a = Dm(), o = Om(), s = km(), c = Am(), l = jm(), u = Mm(), d = Nm(), f = Pm(), p = Fm(), m = Im(), h = Rm(), g = zm(), _ = Bm(), v = Vm(), y = Hm(), b = Ym(), x = Zm(), S = Qm(), C = $m(), w = eh(), T = th(), E = nh(), D = rh(), O = ih(), k = ah(), ee = oh(), te = sh(), A = ch(), ne = lh(), re = uh(), ie = dh(), ae = Object.freeze([u.MaxIntrospectionDepthRule]);
	e.recommendedRules = ae, e.specifiedRules = Object.freeze([
		t.ExecutableDefinitionsRule,
		k.UniqueOperationNamesRule,
		c.LoneAnonymousOperationRule,
		b.SingleFieldSubscriptionsRule,
		s.KnownTypeNamesRule,
		r.FragmentsOnCompositeTypesRule,
		re.VariablesAreInputTypesRule,
		y.ScalarLeafsRule,
		n.FieldsOnCorrectTypeRule,
		D.UniqueFragmentNamesRule,
		o.KnownFragmentNamesRule,
		p.NoUnusedFragmentsRule,
		g.PossibleFragmentSpreadsRule,
		d.NoFragmentCyclesRule,
		A.UniqueVariableNamesRule,
		f.NoUndefinedVariablesRule,
		m.NoUnusedVariablesRule,
		a.KnownDirectivesRule,
		w.UniqueDirectivesPerLocationRule,
		i.KnownArgumentNamesRule,
		S.UniqueArgumentNamesRule,
		ne.ValuesOfCorrectTypeRule,
		v.ProvidedRequiredArgumentsRule,
		ie.VariablesInAllowedPositionRule,
		h.OverlappingFieldsCanBeMergedRule,
		O.UniqueInputFieldNamesRule,
		...ae
	]), e.specifiedSDLRules = Object.freeze([
		l.LoneSchemaDefinitionRule,
		ee.UniqueOperationTypesRule,
		te.UniqueTypeNamesRule,
		T.UniqueEnumValueNamesRule,
		E.UniqueFieldDefinitionNamesRule,
		x.UniqueArgumentDefinitionNamesRule,
		C.UniqueDirectiveNamesRule,
		s.KnownTypeNamesRule,
		a.KnownDirectivesRule,
		w.UniqueDirectivesPerLocationRule,
		_.PossibleTypeExtensionsRule,
		i.KnownArgumentNamesOnDirectivesRule,
		S.UniqueArgumentNamesRule,
		O.UniqueInputFieldNamesRule,
		v.ProvidedRequiredArgumentsOnDirectivesRule
	]);
})), ph = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ValidationContext = e.SDLValidationContext = e.ASTValidationContext = void 0;
	var t = Z(), n = cm(), r = xm(), i = class {
		constructor(e, t) {
			this._ast = e, this._fragments = void 0, this._fragmentSpreads = /* @__PURE__ */ new Map(), this._recursivelyReferencedFragments = /* @__PURE__ */ new Map(), this._onError = t;
		}
		get [Symbol.toStringTag]() {
			return "ASTValidationContext";
		}
		reportError(e) {
			this._onError(e);
		}
		getDocument() {
			return this._ast;
		}
		getFragment(e) {
			let n;
			if (this._fragments) n = this._fragments;
			else {
				n = Object.create(null);
				for (let e of this.getDocument().definitions) e.kind === t.Kind.FRAGMENT_DEFINITION && (n[e.name.value] = e);
				this._fragments = n;
			}
			return n[e];
		}
		getFragmentSpreads(e) {
			let n = this._fragmentSpreads.get(e);
			if (!n) {
				n = [];
				let r = [e], i;
				for (; i = r.pop();) for (let e of i.selections) e.kind === t.Kind.FRAGMENT_SPREAD ? n.push(e) : e.selectionSet && r.push(e.selectionSet);
				this._fragmentSpreads.set(e, n);
			}
			return n;
		}
		getRecursivelyReferencedFragments(e) {
			let t = this._recursivelyReferencedFragments.get(e);
			if (!t) {
				t = [];
				let n = Object.create(null), r = [e.selectionSet], i;
				for (; i = r.pop();) for (let e of this.getFragmentSpreads(i)) {
					let i = e.name.value;
					if (n[i] !== !0) {
						n[i] = !0;
						let e = this.getFragment(i);
						e && (t.push(e), r.push(e.selectionSet));
					}
				}
				this._recursivelyReferencedFragments.set(e, t);
			}
			return t;
		}
	};
	e.ASTValidationContext = i, e.SDLValidationContext = class extends i {
		constructor(e, t, n) {
			super(e, n), this._schema = t;
		}
		get [Symbol.toStringTag]() {
			return "SDLValidationContext";
		}
		getSchema() {
			return this._schema;
		}
	}, e.ValidationContext = class extends i {
		constructor(e, t, n, r) {
			super(t, r), this._schema = e, this._typeInfo = n, this._variableUsages = /* @__PURE__ */ new Map(), this._recursiveVariableUsages = /* @__PURE__ */ new Map();
		}
		get [Symbol.toStringTag]() {
			return "ValidationContext";
		}
		getSchema() {
			return this._schema;
		}
		getVariableUsages(e) {
			let t = this._variableUsages.get(e);
			if (!t) {
				let i = [], a = new r.TypeInfo(this._schema);
				(0, n.visit)(e, (0, r.visitWithTypeInfo)(a, {
					VariableDefinition: () => !1,
					Variable(e) {
						i.push({
							node: e,
							type: a.getInputType(),
							defaultValue: a.getDefaultValue(),
							parentType: a.getParentInputType()
						});
					}
				})), t = i, this._variableUsages.set(e, t);
			}
			return t;
		}
		getRecursiveVariableUsages(e) {
			let t = this._recursiveVariableUsages.get(e);
			if (!t) {
				t = this.getVariableUsages(e);
				for (let n of this.getRecursivelyReferencedFragments(e)) t = t.concat(this.getVariableUsages(n));
				this._recursiveVariableUsages.set(e, t);
			}
			return t;
		}
		getType() {
			return this._typeInfo.getType();
		}
		getParentType() {
			return this._typeInfo.getParentType();
		}
		getInputType() {
			return this._typeInfo.getInputType();
		}
		getParentInputType() {
			return this._typeInfo.getParentInputType();
		}
		getFieldDef() {
			return this._typeInfo.getFieldDef();
		}
		getDirective() {
			return this._typeInfo.getDirective();
		}
		getArgument() {
			return this._typeInfo.getArgument();
		}
		getEnumValue() {
			return this._typeInfo.getEnumValue();
		}
	};
})), mh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.assertValidSDL = p, e.assertValidSDLExtension = m, e.validate = d, e.validateSDL = f;
	var t = Vp(), n = rm(), r = Y(), i = Up(), a = cm(), o = ym(), s = xm(), c = fh(), l = ph(), u = (0, n.mapValue)(i.QueryDocumentKeys, (e) => e.filter((e) => e !== "description"));
	function d(e, n, i = c.specifiedRules, d, f = new s.TypeInfo(e)) {
		let p = d?.maxErrors ?? 100;
		n || (0, t.devAssert)(!1, "Must provide document."), (0, o.assertValidSchema)(e);
		let m = Object.freeze({}), h = [], g = new l.ValidationContext(e, n, f, (e) => {
			if (h.length >= p) throw h.push(new r.GraphQLError("Too many validation errors, error limit reached. Validation aborted.")), m;
			h.push(e);
		}), _ = (0, a.visitInParallel)(i.map((e) => e(g)));
		try {
			(0, a.visit)(n, (0, s.visitWithTypeInfo)(f, _), u);
		} catch (e) {
			if (e !== m) throw e;
		}
		return h;
	}
	function f(e, t, n = c.specifiedSDLRules) {
		let r = [], i = new l.SDLValidationContext(e, t, (e) => {
			r.push(e);
		}), o = n.map((e) => e(i));
		return (0, a.visit)(e, (0, a.visitInParallel)(o)), r;
	}
	function p(e) {
		let t = f(e);
		if (t.length !== 0) throw Error(t.map((e) => e.message).join("\n\n"));
	}
	function m(e, t) {
		let n = f(e, t);
		if (n.length !== 0) throw Error(n.map((e) => e.message).join("\n\n"));
	}
})), hh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.memoize3 = t;
	function t(e) {
		let t;
		return function(n, r, i) {
			t === void 0 && (t = /* @__PURE__ */ new WeakMap());
			let a = t.get(n);
			a === void 0 && (a = /* @__PURE__ */ new WeakMap(), t.set(n, a));
			let o = a.get(r);
			o === void 0 && (o = /* @__PURE__ */ new WeakMap(), a.set(r, o));
			let s = o.get(i);
			return s === void 0 && (s = e(n, r, i), o.set(i, s)), s;
		};
	}
})), gh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.promiseForObject = t;
	function t(e) {
		return Promise.all(Object.values(e)).then((t) => {
			let n = Object.create(null);
			for (let [r, i] of Object.keys(e).entries()) n[i] = t[r];
			return n;
		});
	}
})), _h = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.promiseReduce = n;
	var t = Hp();
	function n(e, n, r) {
		let i = r;
		for (let r of e) i = (0, t.isPromise)(i) ? i.then((e) => n(e, r)) : n(i, r);
		return i;
	}
})), vh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.assertValidExecutionArguments = T, e.buildExecutionContext = E, e.buildResolveInfo = te, e.defaultTypeResolver = e.defaultFieldResolver = void 0, e.execute = S, e.executeSync = C, e.getFieldDef = de;
	var t = Vp(), n = X(), r = gf(), i = hm(), a = hf(), o = Hp(), s = hh(), c = Wm(), l = gh(), u = _h(), d = Y(), f = xf(), p = Up(), m = Z(), h = Q(), g = _m(), _ = ym(), v = Jm(), y = qm(), b = (0, s.memoize3)((e, t, n) => (0, v.collectSubfields)(e.schema, e.fragments, e.variableValues, t, n)), x = class {
		constructor() {
			this._errorPositions = /* @__PURE__ */ new Set(), this._errors = [];
		}
		get errors() {
			return this._errors;
		}
		add(e, t) {
			this._hasNulledPosition(t) || (this._errorPositions.add(t), this._errors.push(e));
		}
		_hasNulledPosition(e) {
			let t = e;
			for (; t !== void 0;) {
				if (this._errorPositions.has(t)) return !0;
				t = t.prev;
			}
			return this._errorPositions.has(void 0);
		}
	};
	function S(e) {
		arguments.length < 2 || (0, t.devAssert)(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
		let { schema: n, document: r, variableValues: i, rootValue: a } = e;
		T(n, r, i);
		let s = E(e);
		if (!("schema" in s)) return { errors: s };
		try {
			let { operation: e } = s, t = D(s, e, a);
			return (0, o.isPromise)(t) ? t.then((e) => w(e, s.collectedErrors.errors), (e) => (s.collectedErrors.add(e, void 0), w(null, s.collectedErrors.errors))) : w(t, s.collectedErrors.errors);
		} catch (e) {
			return s.collectedErrors.add(e, void 0), w(null, s.collectedErrors.errors);
		}
	}
	function C(e) {
		let t = S(e);
		if ((0, o.isPromise)(t)) throw Error("GraphQL execution failed to complete synchronously.");
		return t;
	}
	function w(e, t) {
		return t.length === 0 ? { data: e } : {
			errors: t,
			data: e
		};
	}
	function T(e, n, r) {
		n || (0, t.devAssert)(!1, "Must provide document."), (0, _.assertValidSchema)(e), r == null || (0, a.isObjectLike)(r) || (0, t.devAssert)(!1, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.");
	}
	function E(e) {
		let { schema: t, document: n, rootValue: r, contextValue: i, variableValues: a, operationName: o, fieldResolver: s, typeResolver: c, subscribeFieldResolver: l, options: u } = e, f, p = Object.create(null);
		for (let e of n.definitions) switch (e.kind) {
			case m.Kind.OPERATION_DEFINITION:
				if (o == null) {
					if (f !== void 0) return [new d.GraphQLError("Must provide operation name if query contains multiple operations.")];
					f = e;
				} else e.name?.value === o && (f = e);
				break;
			case m.Kind.FRAGMENT_DEFINITION:
				p[e.name.value] = e;
				break;
			default:
		}
		if (!f) return o == null ? [new d.GraphQLError("Must provide an operation.")] : [new d.GraphQLError(`Unknown operation named "${o}".`)];
		/* c8 ignore next */
		let h = f.variableDefinitions ?? [], g = (0, y.getVariableValues)(t, h, a ?? {}, { maxErrors: u?.maxCoercionErrors ?? 50 });
		return g.errors ? g.errors : {
			schema: t,
			fragments: p,
			rootValue: r,
			contextValue: i,
			operation: f,
			variableValues: g.coerced,
			fieldResolver: s ?? ue,
			typeResolver: c ?? le,
			subscribeFieldResolver: l ?? ue,
			collectedErrors: new x()
		};
	}
	function D(e, t, n) {
		let r = e.schema.getRootType(t.operation);
		if (r == null) throw new d.GraphQLError(`Schema is not configured to execute ${t.operation} operation.`, { nodes: t });
		let i = (0, v.collectFields)(e.schema, e.fragments, e.variableValues, r, t.selectionSet);
		switch (t.operation) {
			case p.OperationTypeNode.QUERY: return k(e, r, n, void 0, i);
			case p.OperationTypeNode.MUTATION: return O(e, r, n, void 0, i);
			case p.OperationTypeNode.SUBSCRIPTION: return k(e, r, n, void 0, i);
		}
	}
	function O(e, t, n, r, i) {
		return (0, u.promiseReduce)(i.entries(), (i, [a, s]) => {
			let l = ee(e, t, n, s, (0, c.addPath)(r, a, t.name));
			return l === void 0 ? i : (0, o.isPromise)(l) ? l.then((e) => (i[a] = e, i)) : (i[a] = l, i);
		}, Object.create(null));
	}
	function k(e, t, n, r, i) {
		let a = Object.create(null), s = !1;
		try {
			for (let [l, u] of i.entries()) {
				let i = ee(e, t, n, u, (0, c.addPath)(r, l, t.name));
				i !== void 0 && (a[l] = i, (0, o.isPromise)(i) && (s = !0));
			}
		} catch (e) {
			if (s) return (0, l.promiseForObject)(a).finally(() => {
				throw e;
			});
			throw e;
		}
		return s ? (0, l.promiseForObject)(a) : a;
	}
	function ee(e, t, n, r, i) {
		let a = de(e.schema, t, r[0]);
		if (!a) return;
		let s = a.type, l = a.resolve ?? e.fieldResolver, u = te(e, a, r, t, i);
		try {
			let t = (0, y.getArgumentValues)(a, r[0], e.variableValues), d = e.contextValue, p = l(n, t, d, u), m;
			return m = (0, o.isPromise)(p) ? p.then((t) => ne(e, s, r, u, i, t)) : ne(e, s, r, u, i, p), (0, o.isPromise)(m) ? m.then(void 0, (t) => A((0, f.locatedError)(t, r, (0, c.pathToArray)(i)), s, i, e)) : m;
		} catch (t) {
			return A((0, f.locatedError)(t, r, (0, c.pathToArray)(i)), s, i, e);
		}
	}
	function te(e, t, n, r, i) {
		return {
			fieldName: t.name,
			fieldNodes: n,
			returnType: t.type,
			parentType: r,
			path: i,
			schema: e.schema,
			fragments: e.fragments,
			rootValue: e.rootValue,
			operation: e.operation,
			variableValues: e.variableValues
		};
	}
	function A(e, t, n, r) {
		if ((0, h.isNonNullType)(t)) throw e;
		return r.collectedErrors.add(e, n), null;
	}
	function ne(e, t, i, a, o, s) {
		if (s instanceof Error) throw s;
		if ((0, h.isNonNullType)(t)) {
			let n = ne(e, t.ofType, i, a, o, s);
			if (n === null) throw Error(`Cannot return null for non-nullable field ${a.parentType.name}.${a.fieldName}.`);
			return n;
		}
		if (s == null) return null;
		if ((0, h.isListType)(t)) return re(e, t, i, a, o, s);
		if ((0, h.isLeafType)(t)) return ie(t, s);
		if ((0, h.isAbstractType)(t)) return ae(e, t, i, a, o, s);
		if ((0, h.isObjectType)(t)) return se(e, t, i, a, o, s);
		/* c8 ignore next 6 */
		(0, r.invariant)(!1, "Cannot complete value of unexpected output type: " + (0, n.inspect)(t));
	}
	function re(e, t, n, r, a, s) {
		if (!(0, i.isIterableObject)(s)) throw new d.GraphQLError(`Expected Iterable, but did not find one for field "${r.parentType.name}.${r.fieldName}".`);
		let l = t.ofType, u = !1, p = Array.from(s, (t, i) => {
			let s = (0, c.addPath)(a, i, void 0);
			try {
				let i;
				return i = (0, o.isPromise)(t) ? t.then((t) => ne(e, l, n, r, s, t)) : ne(e, l, n, r, s, t), (0, o.isPromise)(i) ? (u = !0, i.then(void 0, (t) => A((0, f.locatedError)(t, n, (0, c.pathToArray)(s)), l, s, e))) : i;
			} catch (t) {
				return A((0, f.locatedError)(t, n, (0, c.pathToArray)(s)), l, s, e);
			}
		});
		return u ? Promise.all(p) : p;
	}
	function ie(e, t) {
		let r = e.serialize(t);
		if (r == null) throw Error(`Expected \`${(0, n.inspect)(e)}.serialize(${(0, n.inspect)(t)})\` to return non-nullable value, returned: ${(0, n.inspect)(r)}`);
		return r;
	}
	function ae(e, t, n, r, i, a) {
		let s = t.resolveType ?? e.typeResolver, c = e.contextValue, l = s(a, c, r, t);
		return (0, o.isPromise)(l) ? l.then((o) => se(e, oe(o, e, t, n, r, a), n, r, i, a)) : se(e, oe(l, e, t, n, r, a), n, r, i, a);
	}
	function oe(e, t, r, i, a, o) {
		if (e == null) throw new d.GraphQLError(`Abstract type "${r.name}" must resolve to an Object type at runtime for field "${a.parentType.name}.${a.fieldName}". Either the "${r.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, i);
		if ((0, h.isObjectType)(e)) throw new d.GraphQLError("Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.");
		if (typeof e != "string") throw new d.GraphQLError(`Abstract type "${r.name}" must resolve to an Object type at runtime for field "${a.parentType.name}.${a.fieldName}" with value ${(0, n.inspect)(o)}, received "${(0, n.inspect)(e)}".`);
		let s = t.schema.getType(e);
		if (s == null) throw new d.GraphQLError(`Abstract type "${r.name}" was resolved to a type "${e}" that does not exist inside the schema.`, { nodes: i });
		if (!(0, h.isObjectType)(s)) throw new d.GraphQLError(`Abstract type "${r.name}" was resolved to a non-object type "${e}".`, { nodes: i });
		if (!t.schema.isSubType(r, s)) throw new d.GraphQLError(`Runtime Object type "${s.name}" is not a possible type for "${r.name}".`, { nodes: i });
		return s;
	}
	function se(e, t, n, r, i, a) {
		let s = b(e, t, n);
		if (t.isTypeOf) {
			let c = t.isTypeOf(a, e.contextValue, r);
			if ((0, o.isPromise)(c)) return c.then((r) => {
				if (!r) throw ce(t, a, n);
				return k(e, t, a, i, s);
			});
			if (!c) throw ce(t, a, n);
		}
		return k(e, t, a, i, s);
	}
	function ce(e, t, r) {
		return new d.GraphQLError(`Expected value of type "${e.name}" but got: ${(0, n.inspect)(t)}.`, { nodes: r });
	}
	var le = function(e, t, n, r) {
		if ((0, a.isObjectLike)(e) && typeof e.__typename == "string") return e.__typename;
		let i = n.schema.getPossibleTypes(r), s = [];
		for (let r = 0; r < i.length; r++) {
			let a = i[r];
			if (a.isTypeOf) {
				let i = a.isTypeOf(e, t, n);
				if ((0, o.isPromise)(i)) s[r] = i;
				else if (i) return s.length && Promise.allSettled(s).catch(() => {}), a.name;
			}
		}
		if (s.length) return Promise.all(s).then((e) => {
			for (let t = 0; t < e.length; t++) if (e[t]) return i[t].name;
		});
	};
	e.defaultTypeResolver = le;
	var ue = function(e, t, n, r) {
		if ((0, a.isObjectLike)(e) || typeof e == "function") {
			let i = e[r.fieldName];
			return typeof i == "function" ? e[r.fieldName](t, n, r) : i;
		}
	};
	e.defaultFieldResolver = ue;
	function de(e, t, n) {
		let r = n.name.value;
		return r === g.SchemaMetaFieldDef.name && e.getQueryType() === t ? g.SchemaMetaFieldDef : r === g.TypeMetaFieldDef.name && e.getQueryType() === t ? g.TypeMetaFieldDef : r === g.TypeNameMetaFieldDef.name ? g.TypeNameMetaFieldDef : t.getFields()[r];
	}
})), yh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.graphql = s, e.graphqlSync = c;
	var t = Vp(), n = Hp(), r = Qp(), i = ym(), a = mh(), o = vh();
	function s(e) {
		return new Promise((t) => t(l(e)));
	}
	function c(e) {
		let t = l(e);
		if ((0, n.isPromise)(t)) throw Error("GraphQL execution failed to complete synchronously.");
		return t;
	}
	function l(e) {
		arguments.length < 2 || (0, t.devAssert)(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
		let { schema: n, source: s, rootValue: c, contextValue: l, variableValues: u, operationName: d, fieldResolver: f, typeResolver: p } = e, m = (0, i.validateSchema)(n);
		if (m.length > 0) return { errors: m };
		let h;
		try {
			h = (0, r.parse)(s);
		} catch (e) {
			return { errors: [e] };
		}
		let g = (0, a.validate)(n, h);
		return g.length > 0 ? { errors: g } : (0, o.execute)({
			schema: n,
			document: h,
			rootValue: c,
			contextValue: l,
			variableValues: u,
			operationName: d,
			fieldResolver: f,
			typeResolver: p
		});
	}
})), bh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "DEFAULT_DEPRECATION_REASON", {
		enumerable: !0,
		get: function() {
			return r.DEFAULT_DEPRECATION_REASON;
		}
	}), Object.defineProperty(e, "GRAPHQL_MAX_INT", {
		enumerable: !0,
		get: function() {
			return i.GRAPHQL_MAX_INT;
		}
	}), Object.defineProperty(e, "GRAPHQL_MIN_INT", {
		enumerable: !0,
		get: function() {
			return i.GRAPHQL_MIN_INT;
		}
	}), Object.defineProperty(e, "GraphQLBoolean", {
		enumerable: !0,
		get: function() {
			return i.GraphQLBoolean;
		}
	}), Object.defineProperty(e, "GraphQLDeprecatedDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLDeprecatedDirective;
		}
	}), Object.defineProperty(e, "GraphQLDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLDirective;
		}
	}), Object.defineProperty(e, "GraphQLEnumType", {
		enumerable: !0,
		get: function() {
			return n.GraphQLEnumType;
		}
	}), Object.defineProperty(e, "GraphQLFloat", {
		enumerable: !0,
		get: function() {
			return i.GraphQLFloat;
		}
	}), Object.defineProperty(e, "GraphQLID", {
		enumerable: !0,
		get: function() {
			return i.GraphQLID;
		}
	}), Object.defineProperty(e, "GraphQLIncludeDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLIncludeDirective;
		}
	}), Object.defineProperty(e, "GraphQLInputObjectType", {
		enumerable: !0,
		get: function() {
			return n.GraphQLInputObjectType;
		}
	}), Object.defineProperty(e, "GraphQLInt", {
		enumerable: !0,
		get: function() {
			return i.GraphQLInt;
		}
	}), Object.defineProperty(e, "GraphQLInterfaceType", {
		enumerable: !0,
		get: function() {
			return n.GraphQLInterfaceType;
		}
	}), Object.defineProperty(e, "GraphQLList", {
		enumerable: !0,
		get: function() {
			return n.GraphQLList;
		}
	}), Object.defineProperty(e, "GraphQLNonNull", {
		enumerable: !0,
		get: function() {
			return n.GraphQLNonNull;
		}
	}), Object.defineProperty(e, "GraphQLObjectType", {
		enumerable: !0,
		get: function() {
			return n.GraphQLObjectType;
		}
	}), Object.defineProperty(e, "GraphQLOneOfDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLOneOfDirective;
		}
	}), Object.defineProperty(e, "GraphQLScalarType", {
		enumerable: !0,
		get: function() {
			return n.GraphQLScalarType;
		}
	}), Object.defineProperty(e, "GraphQLSchema", {
		enumerable: !0,
		get: function() {
			return t.GraphQLSchema;
		}
	}), Object.defineProperty(e, "GraphQLSkipDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLSkipDirective;
		}
	}), Object.defineProperty(e, "GraphQLSpecifiedByDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLSpecifiedByDirective;
		}
	}), Object.defineProperty(e, "GraphQLString", {
		enumerable: !0,
		get: function() {
			return i.GraphQLString;
		}
	}), Object.defineProperty(e, "GraphQLUnionType", {
		enumerable: !0,
		get: function() {
			return n.GraphQLUnionType;
		}
	}), Object.defineProperty(e, "SchemaMetaFieldDef", {
		enumerable: !0,
		get: function() {
			return a.SchemaMetaFieldDef;
		}
	}), Object.defineProperty(e, "TypeKind", {
		enumerable: !0,
		get: function() {
			return a.TypeKind;
		}
	}), Object.defineProperty(e, "TypeMetaFieldDef", {
		enumerable: !0,
		get: function() {
			return a.TypeMetaFieldDef;
		}
	}), Object.defineProperty(e, "TypeNameMetaFieldDef", {
		enumerable: !0,
		get: function() {
			return a.TypeNameMetaFieldDef;
		}
	}), Object.defineProperty(e, "__Directive", {
		enumerable: !0,
		get: function() {
			return a.__Directive;
		}
	}), Object.defineProperty(e, "__DirectiveLocation", {
		enumerable: !0,
		get: function() {
			return a.__DirectiveLocation;
		}
	}), Object.defineProperty(e, "__EnumValue", {
		enumerable: !0,
		get: function() {
			return a.__EnumValue;
		}
	}), Object.defineProperty(e, "__Field", {
		enumerable: !0,
		get: function() {
			return a.__Field;
		}
	}), Object.defineProperty(e, "__InputValue", {
		enumerable: !0,
		get: function() {
			return a.__InputValue;
		}
	}), Object.defineProperty(e, "__Schema", {
		enumerable: !0,
		get: function() {
			return a.__Schema;
		}
	}), Object.defineProperty(e, "__Type", {
		enumerable: !0,
		get: function() {
			return a.__Type;
		}
	}), Object.defineProperty(e, "__TypeKind", {
		enumerable: !0,
		get: function() {
			return a.__TypeKind;
		}
	}), Object.defineProperty(e, "assertAbstractType", {
		enumerable: !0,
		get: function() {
			return n.assertAbstractType;
		}
	}), Object.defineProperty(e, "assertCompositeType", {
		enumerable: !0,
		get: function() {
			return n.assertCompositeType;
		}
	}), Object.defineProperty(e, "assertDirective", {
		enumerable: !0,
		get: function() {
			return r.assertDirective;
		}
	}), Object.defineProperty(e, "assertEnumType", {
		enumerable: !0,
		get: function() {
			return n.assertEnumType;
		}
	}), Object.defineProperty(e, "assertEnumValueName", {
		enumerable: !0,
		get: function() {
			return s.assertEnumValueName;
		}
	}), Object.defineProperty(e, "assertInputObjectType", {
		enumerable: !0,
		get: function() {
			return n.assertInputObjectType;
		}
	}), Object.defineProperty(e, "assertInputType", {
		enumerable: !0,
		get: function() {
			return n.assertInputType;
		}
	}), Object.defineProperty(e, "assertInterfaceType", {
		enumerable: !0,
		get: function() {
			return n.assertInterfaceType;
		}
	}), Object.defineProperty(e, "assertLeafType", {
		enumerable: !0,
		get: function() {
			return n.assertLeafType;
		}
	}), Object.defineProperty(e, "assertListType", {
		enumerable: !0,
		get: function() {
			return n.assertListType;
		}
	}), Object.defineProperty(e, "assertName", {
		enumerable: !0,
		get: function() {
			return s.assertName;
		}
	}), Object.defineProperty(e, "assertNamedType", {
		enumerable: !0,
		get: function() {
			return n.assertNamedType;
		}
	}), Object.defineProperty(e, "assertNonNullType", {
		enumerable: !0,
		get: function() {
			return n.assertNonNullType;
		}
	}), Object.defineProperty(e, "assertNullableType", {
		enumerable: !0,
		get: function() {
			return n.assertNullableType;
		}
	}), Object.defineProperty(e, "assertObjectType", {
		enumerable: !0,
		get: function() {
			return n.assertObjectType;
		}
	}), Object.defineProperty(e, "assertOutputType", {
		enumerable: !0,
		get: function() {
			return n.assertOutputType;
		}
	}), Object.defineProperty(e, "assertScalarType", {
		enumerable: !0,
		get: function() {
			return n.assertScalarType;
		}
	}), Object.defineProperty(e, "assertSchema", {
		enumerable: !0,
		get: function() {
			return t.assertSchema;
		}
	}), Object.defineProperty(e, "assertType", {
		enumerable: !0,
		get: function() {
			return n.assertType;
		}
	}), Object.defineProperty(e, "assertUnionType", {
		enumerable: !0,
		get: function() {
			return n.assertUnionType;
		}
	}), Object.defineProperty(e, "assertValidSchema", {
		enumerable: !0,
		get: function() {
			return o.assertValidSchema;
		}
	}), Object.defineProperty(e, "assertWrappingType", {
		enumerable: !0,
		get: function() {
			return n.assertWrappingType;
		}
	}), Object.defineProperty(e, "getNamedType", {
		enumerable: !0,
		get: function() {
			return n.getNamedType;
		}
	}), Object.defineProperty(e, "getNullableType", {
		enumerable: !0,
		get: function() {
			return n.getNullableType;
		}
	}), Object.defineProperty(e, "introspectionTypes", {
		enumerable: !0,
		get: function() {
			return a.introspectionTypes;
		}
	}), Object.defineProperty(e, "isAbstractType", {
		enumerable: !0,
		get: function() {
			return n.isAbstractType;
		}
	}), Object.defineProperty(e, "isCompositeType", {
		enumerable: !0,
		get: function() {
			return n.isCompositeType;
		}
	}), Object.defineProperty(e, "isDirective", {
		enumerable: !0,
		get: function() {
			return r.isDirective;
		}
	}), Object.defineProperty(e, "isEnumType", {
		enumerable: !0,
		get: function() {
			return n.isEnumType;
		}
	}), Object.defineProperty(e, "isInputObjectType", {
		enumerable: !0,
		get: function() {
			return n.isInputObjectType;
		}
	}), Object.defineProperty(e, "isInputType", {
		enumerable: !0,
		get: function() {
			return n.isInputType;
		}
	}), Object.defineProperty(e, "isInterfaceType", {
		enumerable: !0,
		get: function() {
			return n.isInterfaceType;
		}
	}), Object.defineProperty(e, "isIntrospectionType", {
		enumerable: !0,
		get: function() {
			return a.isIntrospectionType;
		}
	}), Object.defineProperty(e, "isLeafType", {
		enumerable: !0,
		get: function() {
			return n.isLeafType;
		}
	}), Object.defineProperty(e, "isListType", {
		enumerable: !0,
		get: function() {
			return n.isListType;
		}
	}), Object.defineProperty(e, "isNamedType", {
		enumerable: !0,
		get: function() {
			return n.isNamedType;
		}
	}), Object.defineProperty(e, "isNonNullType", {
		enumerable: !0,
		get: function() {
			return n.isNonNullType;
		}
	}), Object.defineProperty(e, "isNullableType", {
		enumerable: !0,
		get: function() {
			return n.isNullableType;
		}
	}), Object.defineProperty(e, "isObjectType", {
		enumerable: !0,
		get: function() {
			return n.isObjectType;
		}
	}), Object.defineProperty(e, "isOutputType", {
		enumerable: !0,
		get: function() {
			return n.isOutputType;
		}
	}), Object.defineProperty(e, "isRequiredArgument", {
		enumerable: !0,
		get: function() {
			return n.isRequiredArgument;
		}
	}), Object.defineProperty(e, "isRequiredInputField", {
		enumerable: !0,
		get: function() {
			return n.isRequiredInputField;
		}
	}), Object.defineProperty(e, "isScalarType", {
		enumerable: !0,
		get: function() {
			return n.isScalarType;
		}
	}), Object.defineProperty(e, "isSchema", {
		enumerable: !0,
		get: function() {
			return t.isSchema;
		}
	}), Object.defineProperty(e, "isSpecifiedDirective", {
		enumerable: !0,
		get: function() {
			return r.isSpecifiedDirective;
		}
	}), Object.defineProperty(e, "isSpecifiedScalarType", {
		enumerable: !0,
		get: function() {
			return i.isSpecifiedScalarType;
		}
	}), Object.defineProperty(e, "isType", {
		enumerable: !0,
		get: function() {
			return n.isType;
		}
	}), Object.defineProperty(e, "isUnionType", {
		enumerable: !0,
		get: function() {
			return n.isUnionType;
		}
	}), Object.defineProperty(e, "isWrappingType", {
		enumerable: !0,
		get: function() {
			return n.isWrappingType;
		}
	}), Object.defineProperty(e, "resolveObjMapThunk", {
		enumerable: !0,
		get: function() {
			return n.resolveObjMapThunk;
		}
	}), Object.defineProperty(e, "resolveReadonlyArrayThunk", {
		enumerable: !0,
		get: function() {
			return n.resolveReadonlyArrayThunk;
		}
	}), Object.defineProperty(e, "specifiedDirectives", {
		enumerable: !0,
		get: function() {
			return r.specifiedDirectives;
		}
	}), Object.defineProperty(e, "specifiedScalarTypes", {
		enumerable: !0,
		get: function() {
			return i.specifiedScalarTypes;
		}
	}), Object.defineProperty(e, "validateSchema", {
		enumerable: !0,
		get: function() {
			return o.validateSchema;
		}
	});
	var t = vm(), n = Q(), r = mm(), i = pm(), a = _m(), o = ym(), s = dm();
})), xh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "BREAK", {
		enumerable: !0,
		get: function() {
			return l.BREAK;
		}
	}), Object.defineProperty(e, "DirectiveLocation", {
		enumerable: !0,
		get: function() {
			return f.DirectiveLocation;
		}
	}), Object.defineProperty(e, "Kind", {
		enumerable: !0,
		get: function() {
			return i.Kind;
		}
	}), Object.defineProperty(e, "Lexer", {
		enumerable: !0,
		get: function() {
			return o.Lexer;
		}
	}), Object.defineProperty(e, "Location", {
		enumerable: !0,
		get: function() {
			return u.Location;
		}
	}), Object.defineProperty(e, "OperationTypeNode", {
		enumerable: !0,
		get: function() {
			return u.OperationTypeNode;
		}
	}), Object.defineProperty(e, "Source", {
		enumerable: !0,
		get: function() {
			return t.Source;
		}
	}), Object.defineProperty(e, "Token", {
		enumerable: !0,
		get: function() {
			return u.Token;
		}
	}), Object.defineProperty(e, "TokenKind", {
		enumerable: !0,
		get: function() {
			return a.TokenKind;
		}
	}), Object.defineProperty(e, "getEnterLeaveForKind", {
		enumerable: !0,
		get: function() {
			return l.getEnterLeaveForKind;
		}
	}), Object.defineProperty(e, "getLocation", {
		enumerable: !0,
		get: function() {
			return n.getLocation;
		}
	}), Object.defineProperty(e, "getVisitFn", {
		enumerable: !0,
		get: function() {
			return l.getVisitFn;
		}
	}), Object.defineProperty(e, "isConstValueNode", {
		enumerable: !0,
		get: function() {
			return d.isConstValueNode;
		}
	}), Object.defineProperty(e, "isDefinitionNode", {
		enumerable: !0,
		get: function() {
			return d.isDefinitionNode;
		}
	}), Object.defineProperty(e, "isExecutableDefinitionNode", {
		enumerable: !0,
		get: function() {
			return d.isExecutableDefinitionNode;
		}
	}), Object.defineProperty(e, "isSchemaCoordinateNode", {
		enumerable: !0,
		get: function() {
			return d.isSchemaCoordinateNode;
		}
	}), Object.defineProperty(e, "isSelectionNode", {
		enumerable: !0,
		get: function() {
			return d.isSelectionNode;
		}
	}), Object.defineProperty(e, "isTypeDefinitionNode", {
		enumerable: !0,
		get: function() {
			return d.isTypeDefinitionNode;
		}
	}), Object.defineProperty(e, "isTypeExtensionNode", {
		enumerable: !0,
		get: function() {
			return d.isTypeExtensionNode;
		}
	}), Object.defineProperty(e, "isTypeNode", {
		enumerable: !0,
		get: function() {
			return d.isTypeNode;
		}
	}), Object.defineProperty(e, "isTypeSystemDefinitionNode", {
		enumerable: !0,
		get: function() {
			return d.isTypeSystemDefinitionNode;
		}
	}), Object.defineProperty(e, "isTypeSystemExtensionNode", {
		enumerable: !0,
		get: function() {
			return d.isTypeSystemExtensionNode;
		}
	}), Object.defineProperty(e, "isValueNode", {
		enumerable: !0,
		get: function() {
			return d.isValueNode;
		}
	}), Object.defineProperty(e, "parse", {
		enumerable: !0,
		get: function() {
			return s.parse;
		}
	}), Object.defineProperty(e, "parseConstValue", {
		enumerable: !0,
		get: function() {
			return s.parseConstValue;
		}
	}), Object.defineProperty(e, "parseSchemaCoordinate", {
		enumerable: !0,
		get: function() {
			return s.parseSchemaCoordinate;
		}
	}), Object.defineProperty(e, "parseType", {
		enumerable: !0,
		get: function() {
			return s.parseType;
		}
	}), Object.defineProperty(e, "parseValue", {
		enumerable: !0,
		get: function() {
			return s.parseValue;
		}
	}), Object.defineProperty(e, "print", {
		enumerable: !0,
		get: function() {
			return c.print;
		}
	}), Object.defineProperty(e, "printLocation", {
		enumerable: !0,
		get: function() {
			return r.printLocation;
		}
	}), Object.defineProperty(e, "printSourceLocation", {
		enumerable: !0,
		get: function() {
			return r.printSourceLocation;
		}
	}), Object.defineProperty(e, "visit", {
		enumerable: !0,
		get: function() {
			return l.visit;
		}
	}), Object.defineProperty(e, "visitInParallel", {
		enumerable: !0,
		get: function() {
			return l.visitInParallel;
		}
	});
	var t = Zp(), n = _f(), r = vf(), i = Z(), a = qp(), o = Jp(), s = Qp(), c = lm(), l = cm(), u = Up(), d = Sm(), f = Wp();
})), Sh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isAsyncIterable = t;
	function t(e) {
		return typeof e?.[Symbol.asyncIterator] == "function";
	}
})), Ch = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.mapAsyncIterator = t;
	function t(e, t) {
		let n = e[Symbol.asyncIterator]();
		async function r(e) {
			if (e.done) return e;
			try {
				return {
					value: await t(e.value),
					done: !1
				};
			} catch (e) {
				/* c8 ignore start */
				if (typeof n.return == "function") try {
					await n.return();
				} catch {}
				throw e;
			}
		}
		return {
			async next() {
				return r(await n.next());
			},
			async return() {
				return typeof n.return == "function" ? r(await n.return()) : {
					value: void 0,
					done: !0
				};
			},
			async throw(e) {
				if (typeof n.throw == "function") return r(await n.throw(e));
				throw e;
			},
			[Symbol.asyncIterator]() {
				return this;
			}
		};
	}
})), wh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createSourceEventStream = p, e.subscribe = d;
	var t = Vp(), n = X(), r = Sh(), i = Wm(), a = Y(), o = xf(), s = Jm(), c = vh(), l = Ch(), u = qm();
	async function d(e) {
		arguments.length < 2 || (0, t.devAssert)(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
		let n = await p(e);
		return (0, r.isAsyncIterable)(n) ? (0, l.mapAsyncIterator)(n, (t) => (0, c.execute)({
			...e,
			rootValue: t
		})) : n;
	}
	function f(e) {
		let t = e[0];
		return t && "document" in t ? t : {
			schema: t,
			document: e[1],
			rootValue: e[2],
			contextValue: e[3],
			variableValues: e[4],
			operationName: e[5],
			subscribeFieldResolver: e[6]
		};
	}
	async function p(...e) {
		let t = f(e), { schema: i, document: o, variableValues: s } = t;
		(0, c.assertValidExecutionArguments)(i, o, s);
		let l = (0, c.buildExecutionContext)(t);
		if (!("schema" in l)) return { errors: l };
		try {
			let e = await m(l);
			if (!(0, r.isAsyncIterable)(e)) throw Error(`Subscription field must return Async Iterable. Received: ${(0, n.inspect)(e)}.`);
			return e;
		} catch (e) {
			if (e instanceof a.GraphQLError) return { errors: [e] };
			throw e;
		}
	}
	async function m(e) {
		let { schema: t, fragments: n, operation: r, variableValues: l, rootValue: d } = e, f = t.getSubscriptionType();
		if (f == null) throw new a.GraphQLError("Schema is not configured to execute subscription operation.", { nodes: r });
		let [p, m] = [...(0, s.collectFields)(t, n, l, f, r.selectionSet).entries()][0], h = (0, c.getFieldDef)(t, f, m[0]);
		if (!h) {
			let e = m[0].name.value;
			throw new a.GraphQLError(`The subscription field "${e}" is not defined.`, { nodes: m });
		}
		let g = (0, i.addPath)(void 0, p, f.name), _ = (0, c.buildResolveInfo)(e, h, m, f, g);
		try {
			let t = (0, u.getArgumentValues)(h, m[0], l), n = e.contextValue, r = await (h.subscribe ?? e.subscribeFieldResolver)(d, t, n, _);
			if (r instanceof Error) throw r;
			return r;
		} catch (e) {
			throw (0, o.locatedError)(e, m, (0, i.pathToArray)(g));
		}
	}
})), Th = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "createSourceEventStream", {
		enumerable: !0,
		get: function() {
			return r.createSourceEventStream;
		}
	}), Object.defineProperty(e, "defaultFieldResolver", {
		enumerable: !0,
		get: function() {
			return n.defaultFieldResolver;
		}
	}), Object.defineProperty(e, "defaultTypeResolver", {
		enumerable: !0,
		get: function() {
			return n.defaultTypeResolver;
		}
	}), Object.defineProperty(e, "execute", {
		enumerable: !0,
		get: function() {
			return n.execute;
		}
	}), Object.defineProperty(e, "executeSync", {
		enumerable: !0,
		get: function() {
			return n.executeSync;
		}
	}), Object.defineProperty(e, "getArgumentValues", {
		enumerable: !0,
		get: function() {
			return i.getArgumentValues;
		}
	}), Object.defineProperty(e, "getDirectiveValues", {
		enumerable: !0,
		get: function() {
			return i.getDirectiveValues;
		}
	}), Object.defineProperty(e, "getVariableValues", {
		enumerable: !0,
		get: function() {
			return i.getVariableValues;
		}
	}), Object.defineProperty(e, "responsePathAsArray", {
		enumerable: !0,
		get: function() {
			return t.pathToArray;
		}
	}), Object.defineProperty(e, "subscribe", {
		enumerable: !0,
		get: function() {
			return r.subscribe;
		}
	});
	var t = Wm(), n = vh(), r = wh(), i = qm();
})), Eh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.NoDeprecatedCustomRule = i;
	var t = gf(), n = Y(), r = Q();
	function i(e) {
		return {
			Field(r) {
				let i = e.getFieldDef(), a = i?.deprecationReason;
				if (i && a != null) {
					let o = e.getParentType();
					o ?? (0, t.invariant)(!1), e.reportError(new n.GraphQLError(`The field ${o.name}.${i.name} is deprecated. ${a}`, { nodes: r }));
				}
			},
			Argument(r) {
				let i = e.getArgument(), a = i?.deprecationReason;
				if (i && a != null) {
					let o = e.getDirective();
					if (o != null) e.reportError(new n.GraphQLError(`Directive "@${o.name}" argument "${i.name}" is deprecated. ${a}`, { nodes: r }));
					else {
						let o = e.getParentType(), s = e.getFieldDef();
						o != null && s != null || (0, t.invariant)(!1), e.reportError(new n.GraphQLError(`Field "${o.name}.${s.name}" argument "${i.name}" is deprecated. ${a}`, { nodes: r }));
					}
				}
			},
			ObjectField(t) {
				let i = (0, r.getNamedType)(e.getParentInputType());
				if ((0, r.isInputObjectType)(i)) {
					let r = i.getFields()[t.name.value], a = r?.deprecationReason;
					a != null && e.reportError(new n.GraphQLError(`The input field ${i.name}.${r.name} is deprecated. ${a}`, { nodes: t }));
				}
			},
			EnumValue(i) {
				let a = e.getEnumValue(), o = a?.deprecationReason;
				if (a && o != null) {
					let s = (0, r.getNamedType)(e.getInputType());
					s ?? (0, t.invariant)(!1), e.reportError(new n.GraphQLError(`The enum value "${s.name}.${a.name}" is deprecated. ${o}`, { nodes: i }));
				}
			}
		};
	}
})), Dh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.NoSchemaIntrospectionCustomRule = i;
	var t = Y(), n = Q(), r = _m();
	function i(e) {
		return { Field(i) {
			let a = (0, n.getNamedType)(e.getType());
			a && (0, r.isIntrospectionType)(a) && e.reportError(new t.GraphQLError(`GraphQL introspection has been disabled, but the requested query contained the field "${i.name.value}".`, { nodes: i }));
		} };
	}
})), Oh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "ExecutableDefinitionsRule", {
		enumerable: !0,
		get: function() {
			return i.ExecutableDefinitionsRule;
		}
	}), Object.defineProperty(e, "FieldsOnCorrectTypeRule", {
		enumerable: !0,
		get: function() {
			return a.FieldsOnCorrectTypeRule;
		}
	}), Object.defineProperty(e, "FragmentsOnCompositeTypesRule", {
		enumerable: !0,
		get: function() {
			return o.FragmentsOnCompositeTypesRule;
		}
	}), Object.defineProperty(e, "KnownArgumentNamesRule", {
		enumerable: !0,
		get: function() {
			return s.KnownArgumentNamesRule;
		}
	}), Object.defineProperty(e, "KnownDirectivesRule", {
		enumerable: !0,
		get: function() {
			return c.KnownDirectivesRule;
		}
	}), Object.defineProperty(e, "KnownFragmentNamesRule", {
		enumerable: !0,
		get: function() {
			return l.KnownFragmentNamesRule;
		}
	}), Object.defineProperty(e, "KnownTypeNamesRule", {
		enumerable: !0,
		get: function() {
			return u.KnownTypeNamesRule;
		}
	}), Object.defineProperty(e, "LoneAnonymousOperationRule", {
		enumerable: !0,
		get: function() {
			return d.LoneAnonymousOperationRule;
		}
	}), Object.defineProperty(e, "LoneSchemaDefinitionRule", {
		enumerable: !0,
		get: function() {
			return te.LoneSchemaDefinitionRule;
		}
	}), Object.defineProperty(e, "MaxIntrospectionDepthRule", {
		enumerable: !0,
		get: function() {
			return ee.MaxIntrospectionDepthRule;
		}
	}), Object.defineProperty(e, "NoDeprecatedCustomRule", {
		enumerable: !0,
		get: function() {
			return ce.NoDeprecatedCustomRule;
		}
	}), Object.defineProperty(e, "NoFragmentCyclesRule", {
		enumerable: !0,
		get: function() {
			return f.NoFragmentCyclesRule;
		}
	}), Object.defineProperty(e, "NoSchemaIntrospectionCustomRule", {
		enumerable: !0,
		get: function() {
			return le.NoSchemaIntrospectionCustomRule;
		}
	}), Object.defineProperty(e, "NoUndefinedVariablesRule", {
		enumerable: !0,
		get: function() {
			return p.NoUndefinedVariablesRule;
		}
	}), Object.defineProperty(e, "NoUnusedFragmentsRule", {
		enumerable: !0,
		get: function() {
			return m.NoUnusedFragmentsRule;
		}
	}), Object.defineProperty(e, "NoUnusedVariablesRule", {
		enumerable: !0,
		get: function() {
			return h.NoUnusedVariablesRule;
		}
	}), Object.defineProperty(e, "OverlappingFieldsCanBeMergedRule", {
		enumerable: !0,
		get: function() {
			return g.OverlappingFieldsCanBeMergedRule;
		}
	}), Object.defineProperty(e, "PossibleFragmentSpreadsRule", {
		enumerable: !0,
		get: function() {
			return _.PossibleFragmentSpreadsRule;
		}
	}), Object.defineProperty(e, "PossibleTypeExtensionsRule", {
		enumerable: !0,
		get: function() {
			return se.PossibleTypeExtensionsRule;
		}
	}), Object.defineProperty(e, "ProvidedRequiredArgumentsRule", {
		enumerable: !0,
		get: function() {
			return v.ProvidedRequiredArgumentsRule;
		}
	}), Object.defineProperty(e, "ScalarLeafsRule", {
		enumerable: !0,
		get: function() {
			return y.ScalarLeafsRule;
		}
	}), Object.defineProperty(e, "SingleFieldSubscriptionsRule", {
		enumerable: !0,
		get: function() {
			return b.SingleFieldSubscriptionsRule;
		}
	}), Object.defineProperty(e, "UniqueArgumentDefinitionNamesRule", {
		enumerable: !0,
		get: function() {
			return ae.UniqueArgumentDefinitionNamesRule;
		}
	}), Object.defineProperty(e, "UniqueArgumentNamesRule", {
		enumerable: !0,
		get: function() {
			return x.UniqueArgumentNamesRule;
		}
	}), Object.defineProperty(e, "UniqueDirectiveNamesRule", {
		enumerable: !0,
		get: function() {
			return oe.UniqueDirectiveNamesRule;
		}
	}), Object.defineProperty(e, "UniqueDirectivesPerLocationRule", {
		enumerable: !0,
		get: function() {
			return S.UniqueDirectivesPerLocationRule;
		}
	}), Object.defineProperty(e, "UniqueEnumValueNamesRule", {
		enumerable: !0,
		get: function() {
			return re.UniqueEnumValueNamesRule;
		}
	}), Object.defineProperty(e, "UniqueFieldDefinitionNamesRule", {
		enumerable: !0,
		get: function() {
			return ie.UniqueFieldDefinitionNamesRule;
		}
	}), Object.defineProperty(e, "UniqueFragmentNamesRule", {
		enumerable: !0,
		get: function() {
			return C.UniqueFragmentNamesRule;
		}
	}), Object.defineProperty(e, "UniqueInputFieldNamesRule", {
		enumerable: !0,
		get: function() {
			return w.UniqueInputFieldNamesRule;
		}
	}), Object.defineProperty(e, "UniqueOperationNamesRule", {
		enumerable: !0,
		get: function() {
			return T.UniqueOperationNamesRule;
		}
	}), Object.defineProperty(e, "UniqueOperationTypesRule", {
		enumerable: !0,
		get: function() {
			return A.UniqueOperationTypesRule;
		}
	}), Object.defineProperty(e, "UniqueTypeNamesRule", {
		enumerable: !0,
		get: function() {
			return ne.UniqueTypeNamesRule;
		}
	}), Object.defineProperty(e, "UniqueVariableNamesRule", {
		enumerable: !0,
		get: function() {
			return E.UniqueVariableNamesRule;
		}
	}), Object.defineProperty(e, "ValidationContext", {
		enumerable: !0,
		get: function() {
			return n.ValidationContext;
		}
	}), Object.defineProperty(e, "ValuesOfCorrectTypeRule", {
		enumerable: !0,
		get: function() {
			return D.ValuesOfCorrectTypeRule;
		}
	}), Object.defineProperty(e, "VariablesAreInputTypesRule", {
		enumerable: !0,
		get: function() {
			return O.VariablesAreInputTypesRule;
		}
	}), Object.defineProperty(e, "VariablesInAllowedPositionRule", {
		enumerable: !0,
		get: function() {
			return k.VariablesInAllowedPositionRule;
		}
	}), Object.defineProperty(e, "recommendedRules", {
		enumerable: !0,
		get: function() {
			return r.recommendedRules;
		}
	}), Object.defineProperty(e, "specifiedRules", {
		enumerable: !0,
		get: function() {
			return r.specifiedRules;
		}
	}), Object.defineProperty(e, "validate", {
		enumerable: !0,
		get: function() {
			return t.validate;
		}
	});
	var t = mh(), n = ph(), r = fh(), i = Cm(), a = wm(), o = Tm(), s = Em(), c = Dm(), l = Om(), u = km(), d = Am(), f = Nm(), p = Pm(), m = Fm(), h = Im(), g = Rm(), _ = zm(), v = Vm(), y = Hm(), b = Ym(), x = Qm(), S = eh(), C = rh(), w = ih(), T = ah(), E = ch(), D = lh(), O = uh(), k = dh(), ee = Mm(), te = jm(), A = oh(), ne = sh(), re = th(), ie = nh(), ae = Zm(), oe = $m(), se = Bm(), ce = Eh(), le = Dh();
})), kh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getIntrospectionQuery = t;
	function t(e) {
		let t = {
			descriptions: !0,
			specifiedByUrl: !1,
			directiveIsRepeatable: !1,
			schemaDescription: !1,
			inputValueDeprecation: !1,
			experimentalDirectiveDeprecation: !1,
			oneOf: !1,
			typeDepth: 9,
			...e
		}, n = t.descriptions ? "description" : "", r = t.specifiedByUrl ? "specifiedByURL" : "", i = t.directiveIsRepeatable ? "isRepeatable" : "", a = t.schemaDescription ? n : "";
		function o(e) {
			return t.inputValueDeprecation ? e : "";
		}
		function s(e) {
			return t.experimentalDirectiveDeprecation ? e : "";
		}
		let c = t.oneOf ? "isOneOf" : "";
		function l(e, t) {
			if (e <= 0) return "";
			if (e > 100) throw Error("Please set typeDepth to a reasonable value between 0 and 100; the default is 9.");
			return `
${t}ofType {
${t}  name
${t}  kind${l(e - 1, t + "  ")}
${t}}`;
		}
		return `
    query IntrospectionQuery {
      __schema {
        ${a}
        queryType { name kind }
        mutationType { name kind }
        subscriptionType { name kind }
        types {
          ...FullType
        }
        directives${s("(includeDeprecated: true)")} {
          name
          ${n}
          ${i}
          ${s("isDeprecated")}
          ${s("deprecationReason")}
          locations
          args${o("(includeDeprecated: true)")} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${n}
      ${r}
      ${c}
      fields(includeDeprecated: true) {
        name
        ${n}
        args${o("(includeDeprecated: true)")} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${o("(includeDeprecated: true)")} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${n}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${n}
      type { ...TypeRef }
      defaultValue
      ${o("isDeprecated")}
      ${o("deprecationReason")}
    }

    fragment TypeRef on __Type {
      kind
      name${l(t.typeDepth, "      ")}
    }
  `;
	}
})), Ah = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getOperationAST = n;
	var t = Z();
	function n(e, n) {
		let r = null;
		for (let i of e.definitions) if (i.kind === t.Kind.OPERATION_DEFINITION) {
			if (n == null) {
				if (r) return null;
				r = i;
			} else if (i.name?.value === n) return i;
		}
		return r;
	}
})), jh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getOperationRootType = n;
	var t = Y();
	function n(e, n) {
		if (n.operation === "query") {
			let r = e.getQueryType();
			if (!r) throw new t.GraphQLError("Schema does not define the required query root type.", { nodes: n });
			return r;
		}
		if (n.operation === "mutation") {
			let r = e.getMutationType();
			if (!r) throw new t.GraphQLError("Schema is not configured for mutations.", { nodes: n });
			return r;
		}
		if (n.operation === "subscription") {
			let r = e.getSubscriptionType();
			if (!r) throw new t.GraphQLError("Schema is not configured for subscriptions.", { nodes: n });
			return r;
		}
		throw new t.GraphQLError("Can only have query, mutation and subscription operations.", { nodes: n });
	}
})), Mh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.introspectionFromSchema = a;
	var t = gf(), n = Qp(), r = vh(), i = kh();
	function a(e, a) {
		let o = {
			specifiedByUrl: !0,
			directiveIsRepeatable: !0,
			schemaDescription: !0,
			inputValueDeprecation: !0,
			experimentalDirectiveDeprecation: !0,
			oneOf: !0,
			...a
		}, s = (0, n.parse)((0, i.getIntrospectionQuery)(o)), c = (0, r.executeSync)({
			schema: e,
			document: s
		});
		return !c.errors && c.data || (0, t.invariant)(!1), c.data;
	}
})), Nh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.buildClientSchema = f;
	var t = Vp(), n = X(), r = hf(), i = nm(), a = Qp(), o = Q(), s = mm(), c = _m(), l = pm(), u = vm(), d = Km();
	function f(e, f) {
		(0, r.isObjectLike)(e) && (0, r.isObjectLike)(e.__schema) || (0, t.devAssert)(!1, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${(0, n.inspect)(e)}.`);
		let p = e.__schema, m = (0, i.keyValMap)(p.types, (e) => e.name, (e) => C(e));
		for (let e of [...l.specifiedScalarTypes, ...c.introspectionTypes]) m[e.name] && (m[e.name] = e);
		let h = p.queryType ? x(p.queryType) : null, g = p.mutationType ? x(p.mutationType) : null, _ = p.subscriptionType ? x(p.subscriptionType) : null, v = p.directives ? p.directives.map(ie) : [];
		return new u.GraphQLSchema({
			description: p.description,
			query: h,
			mutation: g,
			subscription: _,
			types: Object.values(m),
			directives: v,
			assumeValid: f?.assumeValid
		});
		function y(e) {
			if (e.kind === c.TypeKind.LIST) {
				let t = e.ofType;
				if (!t) throw Error("Decorated type deeper than introspection query.");
				return new o.GraphQLList(y(t));
			}
			if (e.kind === c.TypeKind.NON_NULL) {
				let t = e.ofType;
				if (!t) throw Error("Decorated type deeper than introspection query.");
				let n = y(t);
				return new o.GraphQLNonNull((0, o.assertNullableType)(n));
			}
			return b(e);
		}
		function b(e) {
			let t = e.name;
			if (!t) throw Error(`Unknown type reference: ${(0, n.inspect)(e)}.`);
			let r = m[t];
			if (!r) throw Error(`Invalid or incomplete schema, unknown type: ${t}. Ensure that a full introspection query is used in order to build a client schema.`);
			return r;
		}
		function x(e) {
			return (0, o.assertObjectType)(b(e));
		}
		function S(e) {
			return (0, o.assertInterfaceType)(b(e));
		}
		function C(e) {
			if (e != null && e.name != null && e.kind != null) switch (e.kind) {
				case c.TypeKind.SCALAR: return w(e);
				case c.TypeKind.OBJECT: return E(e);
				case c.TypeKind.INTERFACE: return D(e);
				case c.TypeKind.UNION: return O(e);
				case c.TypeKind.ENUM: return k(e);
				case c.TypeKind.INPUT_OBJECT: return ee(e);
			}
			let t = (0, n.inspect)(e);
			throw Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${t}.`);
		}
		function w(e) {
			return new o.GraphQLScalarType({
				name: e.name,
				description: e.description,
				specifiedByURL: e.specifiedByURL
			});
		}
		function T(e) {
			if (e.interfaces === null && e.kind === c.TypeKind.INTERFACE) return [];
			if (!e.interfaces) {
				let t = (0, n.inspect)(e);
				throw Error(`Introspection result missing interfaces: ${t}.`);
			}
			return e.interfaces.map(S);
		}
		function E(e) {
			return new o.GraphQLObjectType({
				name: e.name,
				description: e.description,
				interfaces: () => T(e),
				fields: () => te(e)
			});
		}
		function D(e) {
			return new o.GraphQLInterfaceType({
				name: e.name,
				description: e.description,
				interfaces: () => T(e),
				fields: () => te(e)
			});
		}
		function O(e) {
			if (!e.possibleTypes) {
				let t = (0, n.inspect)(e);
				throw Error(`Introspection result missing possibleTypes: ${t}.`);
			}
			return new o.GraphQLUnionType({
				name: e.name,
				description: e.description,
				types: () => e.possibleTypes.map(x)
			});
		}
		function k(e) {
			if (!e.enumValues) {
				let t = (0, n.inspect)(e);
				throw Error(`Introspection result missing enumValues: ${t}.`);
			}
			return new o.GraphQLEnumType({
				name: e.name,
				description: e.description,
				values: (0, i.keyValMap)(e.enumValues, (e) => e.name, (e) => ({
					description: e.description,
					deprecationReason: e.deprecationReason
				}))
			});
		}
		function ee(e) {
			if (!e.inputFields) {
				let t = (0, n.inspect)(e);
				throw Error(`Introspection result missing inputFields: ${t}.`);
			}
			return new o.GraphQLInputObjectType({
				name: e.name,
				description: e.description,
				fields: () => ne(e.inputFields),
				isOneOf: e.isOneOf
			});
		}
		function te(e) {
			if (!e.fields) throw Error(`Introspection result missing fields: ${(0, n.inspect)(e)}.`);
			return (0, i.keyValMap)(e.fields, (e) => e.name, A);
		}
		function A(e) {
			let t = y(e.type);
			if (!(0, o.isOutputType)(t)) {
				let e = (0, n.inspect)(t);
				throw Error(`Introspection must provide output type for fields, but received: ${e}.`);
			}
			if (!e.args) {
				let t = (0, n.inspect)(e);
				throw Error(`Introspection result missing field args: ${t}.`);
			}
			return {
				description: e.description,
				deprecationReason: e.deprecationReason,
				type: t,
				args: ne(e.args)
			};
		}
		function ne(e) {
			return (0, i.keyValMap)(e, (e) => e.name, re);
		}
		function re(e) {
			let t = y(e.type);
			if (!(0, o.isInputType)(t)) {
				let e = (0, n.inspect)(t);
				throw Error(`Introspection must provide input type for arguments, but received: ${e}.`);
			}
			let r = e.defaultValue == null ? void 0 : (0, d.valueFromAST)((0, a.parseValue)(e.defaultValue), t);
			return {
				description: e.description,
				type: t,
				defaultValue: r,
				deprecationReason: e.deprecationReason
			};
		}
		function ie(e) {
			if (!e.args) {
				let t = (0, n.inspect)(e);
				throw Error(`Introspection result missing directive args: ${t}.`);
			}
			if (!e.locations) {
				let t = (0, n.inspect)(e);
				throw Error(`Introspection result missing directive locations: ${t}.`);
			}
			return new s.GraphQLDirective({
				name: e.name,
				description: e.description,
				isRepeatable: e.isRepeatable,
				deprecationReason: e.deprecationReason,
				locations: e.locations.slice(),
				args: ne(e.args)
			});
		}
	}
})), Ph = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.extendSchema = g, e.extendSchemaImpl = _;
	var t = Vp(), n = X(), r = gf(), i = tm(), a = rm(), o = Z(), s = Sm(), c = Q(), l = mm(), u = _m(), d = pm(), f = vm(), p = mh(), m = qm(), h = Km();
	function g(e, n, r) {
		(0, f.assertSchema)(e), n != null && n.kind === o.Kind.DOCUMENT || (0, t.devAssert)(!1, "Must provide valid Document AST."), r?.assumeValid !== !0 && r?.assumeValidSDL !== !0 && (0, p.assertValidSDLExtension)(n, e);
		let i = e.toConfig(), a = _(i, n, r);
		return i === a ? e : new f.GraphQLSchema(a);
	}
	function _(e, t, i) {
		let f = [], p = Object.create(null), m = Object.create(null), g = [], _, S = [];
		for (let e of t.definitions) if (e.kind === o.Kind.SCHEMA_DEFINITION) _ = e;
		else if (e.kind === o.Kind.SCHEMA_EXTENSION) S.push(e);
		else if ((0, s.isTypeDefinitionNode)(e)) f.push(e);
		else if ((0, s.isTypeExtensionNode)(e)) {
			let t = e.name.value, n = p[t];
			p[t] = n ? n.concat([e]) : [e];
		} else if (e.kind === o.Kind.DIRECTIVE_DEFINITION) g.push(e);
		else if (e.kind === o.Kind.DIRECTIVE_EXTENSION) {
			let t = e.name.value, n = m[t];
			m[t] = n ? n.concat([e]) : [e];
		}
		if (Object.keys(p).length === 0 && f.length === 0 && Object.keys(m).length === 0 && g.length === 0 && S.length === 0 && _ == null) return e;
		let C = Object.create(null);
		for (let t of e.types) C[t.name] = ee(t);
		for (let e of f) {
			let t = e.name.value;
			C[t] = v[t] ?? ve(e);
		}
		let w = Object.create(null);
		for (let t of e.directives) w[t.name] = le(t);
		let T = {
			query: e.query && O(e.query),
			mutation: e.mutation && O(e.mutation),
			subscription: e.subscription && O(e.subscription),
			..._ && ce([_]),
			...ce(S)
		}, E = Object.values(w);
		return {
			description: _?.description?.value,
			...T,
			types: Object.values(C),
			directives: [...E.map(k), ...g.map(fe)],
			extensions: Object.create(null),
			astNode: _ ?? e.astNode,
			extensionASTNodes: e.extensionASTNodes.concat(S),
			assumeValid: i?.assumeValid ?? !1
		};
		function D(e) {
			return (0, c.isListType)(e) ? new c.GraphQLList(D(e.ofType)) : (0, c.isNonNullType)(e) ? new c.GraphQLNonNull(D(e.ofType)) : O(e);
		}
		function O(e) {
			return C[e.name];
		}
		function k(e) {
			let t = e.toConfig();
			return new l.GraphQLDirective({
				...t,
				args: (0, a.mapValue)(t.args, se)
			});
		}
		function ee(e) {
			if ((0, u.isIntrospectionType)(e) || (0, d.isSpecifiedScalarType)(e)) return e;
			if ((0, c.isScalarType)(e)) return ne(e);
			if ((0, c.isObjectType)(e)) return re(e);
			if ((0, c.isInterfaceType)(e)) return ie(e);
			if ((0, c.isUnionType)(e)) return ae(e);
			if ((0, c.isEnumType)(e)) return A(e);
			if ((0, c.isInputObjectType)(e)) return te(e);
			/* c8 ignore next 3 */
			(0, r.invariant)(!1, "Unexpected type: " + (0, n.inspect)(e));
		}
		function te(e) {
			let t = e.toConfig(), n = p[t.name] ?? [];
			return new c.GraphQLInputObjectType({
				...t,
				fields: () => ({
					...(0, a.mapValue)(t.fields, (e) => ({
						...e,
						type: D(e.type)
					})),
					...he(n)
				}),
				extensionASTNodes: t.extensionASTNodes.concat(n)
			});
		}
		function A(e) {
			let t = e.toConfig(), n = p[e.name] ?? [];
			return new c.GraphQLEnumType({
				...t,
				values: {
					...t.values,
					...j(n)
				},
				extensionASTNodes: t.extensionASTNodes.concat(n)
			});
		}
		function ne(e) {
			let t = e.toConfig(), n = p[t.name] ?? [], r = t.specifiedByURL;
			for (let e of n) r = b(e) ?? r;
			return new c.GraphQLScalarType({
				...t,
				specifiedByURL: r,
				extensionASTNodes: t.extensionASTNodes.concat(n)
			});
		}
		function re(e) {
			let t = e.toConfig(), n = p[t.name] ?? [];
			return new c.GraphQLObjectType({
				...t,
				interfaces: () => [...e.getInterfaces().map(O), ...ge(n)],
				fields: () => ({
					...(0, a.mapValue)(t.fields, oe),
					...pe(n)
				}),
				extensionASTNodes: t.extensionASTNodes.concat(n)
			});
		}
		function ie(e) {
			let t = e.toConfig(), n = p[t.name] ?? [];
			return new c.GraphQLInterfaceType({
				...t,
				interfaces: () => [...e.getInterfaces().map(O), ...ge(n)],
				fields: () => ({
					...(0, a.mapValue)(t.fields, oe),
					...pe(n)
				}),
				extensionASTNodes: t.extensionASTNodes.concat(n)
			});
		}
		function ae(e) {
			let t = e.toConfig(), n = p[t.name] ?? [];
			return new c.GraphQLUnionType({
				...t,
				types: () => [...e.getTypes().map(O), ..._e(n)],
				extensionASTNodes: t.extensionASTNodes.concat(n)
			});
		}
		function oe(e) {
			return {
				...e,
				type: D(e.type),
				args: e.args && (0, a.mapValue)(e.args, se)
			};
		}
		function se(e) {
			return {
				...e,
				type: D(e.type)
			};
		}
		function ce(e) {
			let t = {};
			for (let n of e) {
				let e = n.operationTypes ?? [];
				for (let n of e) t[n.operation] = ue(n.type);
			}
			return t;
		}
		function le(e) {
			let t = e.toConfig(), n = m[t.name] ?? [], r = t.deprecationReason ?? n.map((e) => y(e)).find((e) => e != null);
			return new l.GraphQLDirective({
				...t,
				deprecationReason: r,
				extensionASTNodes: t.extensionASTNodes.concat(n)
			});
		}
		function ue(e) {
			let t = e.name.value, n = v[t] ?? C[t];
			if (n === void 0) throw Error(`Unknown type: "${t}".`);
			return n;
		}
		function de(e) {
			return e.kind === o.Kind.LIST_TYPE ? new c.GraphQLList(de(e.type)) : e.kind === o.Kind.NON_NULL_TYPE ? new c.GraphQLNonNull(de(e.type)) : ue(e);
		}
		function fe(e) {
			let t = m[e.name.value] ?? [], n = y(e) ?? t.map((e) => y(e)).find((e) => e != null);
			return new l.GraphQLDirective({
				name: e.name.value,
				description: e.description?.value,
				locations: e.locations.map(({ value: e }) => e),
				isRepeatable: e.repeatable,
				args: me(e.arguments),
				deprecationReason: n,
				astNode: e,
				extensionASTNodes: t
			});
		}
		function pe(e) {
			let t = Object.create(null);
			for (let n of e) {
				let e = n.fields ?? [];
				for (let n of e) t[n.name.value] = {
					type: de(n.type),
					description: n.description?.value,
					args: me(n.arguments),
					deprecationReason: y(n),
					astNode: n
				};
			}
			return t;
		}
		function me(e) {
			let t = e ?? [], n = Object.create(null);
			for (let e of t) {
				let t = de(e.type);
				n[e.name.value] = {
					type: t,
					description: e.description?.value,
					defaultValue: (0, h.valueFromAST)(e.defaultValue, t),
					deprecationReason: y(e),
					astNode: e
				};
			}
			return n;
		}
		function he(e) {
			let t = Object.create(null);
			for (let n of e) {
				let e = n.fields ?? [];
				for (let n of e) {
					let e = de(n.type);
					t[n.name.value] = {
						type: e,
						description: n.description?.value,
						defaultValue: (0, h.valueFromAST)(n.defaultValue, e),
						deprecationReason: y(n),
						astNode: n
					};
				}
			}
			return t;
		}
		function j(e) {
			let t = Object.create(null);
			for (let n of e) {
				let e = n.values ?? [];
				for (let n of e) t[n.name.value] = {
					description: n.description?.value,
					deprecationReason: y(n),
					astNode: n
				};
			}
			return t;
		}
		function ge(e) {
			return e.flatMap((e) => e.interfaces?.map(ue) ?? []);
		}
		function _e(e) {
			return e.flatMap((e) => e.types?.map(ue) ?? []);
		}
		function ve(e) {
			let t = e.name.value, n = p[t] ?? [];
			switch (e.kind) {
				case o.Kind.OBJECT_TYPE_DEFINITION: {
					let r = [e, ...n];
					return new c.GraphQLObjectType({
						name: t,
						description: e.description?.value,
						interfaces: () => ge(r),
						fields: () => pe(r),
						astNode: e,
						extensionASTNodes: n
					});
				}
				case o.Kind.INTERFACE_TYPE_DEFINITION: {
					let r = [e, ...n];
					return new c.GraphQLInterfaceType({
						name: t,
						description: e.description?.value,
						interfaces: () => ge(r),
						fields: () => pe(r),
						astNode: e,
						extensionASTNodes: n
					});
				}
				case o.Kind.ENUM_TYPE_DEFINITION: {
					let r = [e, ...n];
					return new c.GraphQLEnumType({
						name: t,
						description: e.description?.value,
						values: j(r),
						astNode: e,
						extensionASTNodes: n
					});
				}
				case o.Kind.UNION_TYPE_DEFINITION: {
					let r = [e, ...n];
					return new c.GraphQLUnionType({
						name: t,
						description: e.description?.value,
						types: () => _e(r),
						astNode: e,
						extensionASTNodes: n
					});
				}
				case o.Kind.SCALAR_TYPE_DEFINITION: return new c.GraphQLScalarType({
					name: t,
					description: e.description?.value,
					specifiedByURL: b(e),
					astNode: e,
					extensionASTNodes: n
				});
				case o.Kind.INPUT_OBJECT_TYPE_DEFINITION: {
					let r = [e, ...n];
					return new c.GraphQLInputObjectType({
						name: t,
						description: e.description?.value,
						fields: () => he(r),
						astNode: e,
						extensionASTNodes: n,
						isOneOf: x(e)
					});
				}
			}
		}
	}
	var v = (0, i.keyMap)([...d.specifiedScalarTypes, ...u.introspectionTypes], (e) => e.name);
	function y(e) {
		return (0, m.getDirectiveValues)(l.GraphQLDeprecatedDirective, e)?.reason;
	}
	function b(e) {
		return (0, m.getDirectiveValues)(l.GraphQLSpecifiedByDirective, e)?.url;
	}
	function x(e) {
		return !!(0, m.getDirectiveValues)(l.GraphQLOneOfDirective, e);
	}
})), Fh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.buildASTSchema = c, e.buildSchema = l;
	var t = Vp(), n = Z(), r = Qp(), i = mm(), a = vm(), o = mh(), s = Ph();
	function c(e, r) {
		e != null && e.kind === n.Kind.DOCUMENT || (0, t.devAssert)(!1, "Must provide valid Document AST."), r?.assumeValid !== !0 && r?.assumeValidSDL !== !0 && (0, o.assertValidSDL)(e);
		let c = {
			description: void 0,
			types: [],
			directives: [],
			extensions: Object.create(null),
			extensionASTNodes: [],
			assumeValid: !1
		}, l = (0, s.extendSchemaImpl)(c, e, r);
		if (l.astNode == null) for (let e of l.types) switch (e.name) {
			case "Query":
				l.query = e;
				break;
			case "Mutation":
				l.mutation = e;
				break;
			case "Subscription":
				l.subscription = e;
				break;
		}
		let u = [...l.directives, ...i.specifiedDirectives.filter((e) => l.directives.every((t) => t.name !== e.name))];
		return new a.GraphQLSchema({
			...l,
			directives: u
		});
	}
	function l(e, t) {
		return c((0, r.parse)(e, {
			noLocation: t?.noLocation,
			allowLegacyFragmentVariables: t?.allowLegacyFragmentVariables,
			experimentalDirectivesOnDirectiveDefinitions: t?.experimentalDirectivesOnDirectiveDefinitions
		}), {
			assumeValidSDL: t?.assumeValidSDL,
			assumeValid: t?.assumeValid
		});
	}
})), Ih = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.lexicographicSortSchema = l;
	var t = X(), n = gf(), r = nm(), i = im(), a = Q(), o = mm(), s = _m(), c = vm();
	function l(e) {
		let i = e.toConfig(), l = (0, r.keyValMap)(d(i.types), (e) => e.name, x);
		return new c.GraphQLSchema({
			...i,
			types: Object.values(l),
			directives: d(i.directives).map(g),
			query: h(i.query),
			mutation: h(i.mutation),
			subscription: h(i.subscription)
		});
		function p(e) {
			return (0, a.isListType)(e) ? new a.GraphQLList(p(e.ofType)) : (0, a.isNonNullType)(e) ? new a.GraphQLNonNull(p(e.ofType)) : m(e);
		}
		function m(e) {
			return l[e.name];
		}
		function h(e) {
			return e && m(e);
		}
		function g(e) {
			let t = e.toConfig();
			return new o.GraphQLDirective({
				...t,
				locations: f(t.locations, (e) => e),
				args: _(t.args)
			});
		}
		function _(e) {
			return u(e, (e) => ({
				...e,
				type: p(e.type)
			}));
		}
		function v(e) {
			return u(e, (e) => ({
				...e,
				type: p(e.type),
				args: e.args && _(e.args)
			}));
		}
		function y(e) {
			return u(e, (e) => ({
				...e,
				type: p(e.type)
			}));
		}
		function b(e) {
			return d(e).map(m);
		}
		function x(e) {
			if ((0, a.isScalarType)(e) || (0, s.isIntrospectionType)(e)) return e;
			if ((0, a.isObjectType)(e)) {
				let t = e.toConfig();
				return new a.GraphQLObjectType({
					...t,
					interfaces: () => b(t.interfaces),
					fields: () => v(t.fields)
				});
			}
			if ((0, a.isInterfaceType)(e)) {
				let t = e.toConfig();
				return new a.GraphQLInterfaceType({
					...t,
					interfaces: () => b(t.interfaces),
					fields: () => v(t.fields)
				});
			}
			if ((0, a.isUnionType)(e)) {
				let t = e.toConfig();
				return new a.GraphQLUnionType({
					...t,
					types: () => b(t.types)
				});
			}
			if ((0, a.isEnumType)(e)) {
				let t = e.toConfig();
				return new a.GraphQLEnumType({
					...t,
					values: u(t.values, (e) => e)
				});
			}
			if ((0, a.isInputObjectType)(e)) {
				let t = e.toConfig();
				return new a.GraphQLInputObjectType({
					...t,
					fields: () => y(t.fields)
				});
			}
			/* c8 ignore next 3 */
			(0, n.invariant)(!1, "Unexpected type: " + (0, t.inspect)(e));
		}
	}
	function u(e, t) {
		let n = Object.create(null);
		for (let r of Object.keys(e).sort(i.naturalCompare)) n[r] = t(e[r]);
		return n;
	}
	function d(e) {
		return f(e, (e) => e.name);
	}
	function f(e, t) {
		return e.slice().sort((e, n) => {
			let r = t(e), a = t(n);
			return (0, i.naturalCompare)(r, a);
		});
	}
})), Lh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.printIntrospectionSchema = f, e.printSchema = d, e.printType = _;
	var t = X(), n = gf(), r = Kp(), i = Z(), a = lm(), o = Q(), s = mm(), c = _m(), l = pm(), u = gm();
	function d(e) {
		return m(e, (e) => !(0, s.isSpecifiedDirective)(e), p);
	}
	function f(e) {
		return m(e, s.isSpecifiedDirective, c.isIntrospectionType);
	}
	function p(e) {
		return !(0, l.isSpecifiedScalarType)(e) && !(0, c.isIntrospectionType)(e);
	}
	function m(e, t, n) {
		let r = e.getDirectives().filter(t), i = Object.values(e.getTypeMap()).filter(n);
		return [
			h(e),
			...r.map((e) => k(e)),
			...i.map((e) => _(e))
		].filter(Boolean).join("\n\n");
	}
	function h(e) {
		if (e.description == null && g(e)) return;
		let t = [], n = e.getQueryType();
		n && t.push(`  query: ${n.name}`);
		let r = e.getMutationType();
		r && t.push(`  mutation: ${r.name}`);
		let i = e.getSubscriptionType();
		return i && t.push(`  subscription: ${i.name}`), A(e) + `schema {\n${t.join("\n")}\n}`;
	}
	function g(e) {
		let t = e.getQueryType();
		if (t && t.name !== "Query") return !1;
		let n = e.getMutationType();
		if (n && n.name !== "Mutation") return !1;
		let r = e.getSubscriptionType();
		return !(r && r.name !== "Subscription");
	}
	function _(e) {
		if ((0, o.isScalarType)(e)) return v(e);
		if ((0, o.isObjectType)(e)) return b(e);
		if ((0, o.isInterfaceType)(e)) return x(e);
		if ((0, o.isUnionType)(e)) return S(e);
		if ((0, o.isEnumType)(e)) return C(e);
		if ((0, o.isInputObjectType)(e)) return w(e);
		/* c8 ignore next 3 */
		(0, n.invariant)(!1, "Unexpected type: " + (0, t.inspect)(e));
	}
	function v(e) {
		return A(e) + `scalar ${e.name}` + te(e);
	}
	function y(e) {
		let t = e.getInterfaces();
		return t.length ? " implements " + t.map((e) => e.name).join(" & ") : "";
	}
	function b(e) {
		return A(e) + `type ${e.name}` + y(e) + T(e);
	}
	function x(e) {
		return A(e) + `interface ${e.name}` + y(e) + T(e);
	}
	function S(e) {
		let t = e.getTypes(), n = t.length ? " = " + t.join(" | ") : "";
		return A(e) + "union " + e.name + n;
	}
	function C(e) {
		let t = e.getValues().map((e, t) => A(e, "  ", !t) + "  " + e.name + ee(e.deprecationReason));
		return A(e) + `enum ${e.name}` + E(t);
	}
	function w(e) {
		let t = Object.values(e.getFields()).map((e, t) => A(e, "  ", !t) + "  " + O(e));
		return A(e) + `input ${e.name}` + (e.isOneOf ? " @oneOf" : "") + E(t);
	}
	function T(e) {
		return E(Object.values(e.getFields()).map((e, t) => A(e, "  ", !t) + "  " + e.name + D(e.args, "  ") + ": " + String(e.type) + ee(e.deprecationReason)));
	}
	function E(e) {
		return e.length === 0 ? "" : " {\n" + e.join("\n") + "\n}";
	}
	function D(e, t = "") {
		return e.length === 0 ? "" : e.every((e) => !e.description) ? "(" + e.map(O).join(", ") + ")" : "(\n" + e.map((e, n) => A(e, "  " + t, !n) + "  " + t + O(e)).join("\n") + "\n" + t + ")";
	}
	function O(e) {
		let t = (0, u.astFromValue)(e.defaultValue, e.type), n = e.name + ": " + String(e.type);
		return t && (n += ` = ${(0, a.print)(t)}`), n + ee(e.deprecationReason);
	}
	function k(e) {
		return A(e) + "directive @" + e.name + D(e.args) + ee(e.deprecationReason) + (e.isRepeatable ? " repeatable" : "") + " on " + e.locations.join(" | ");
	}
	function ee(e) {
		return e == null ? "" : e === s.DEFAULT_DEPRECATION_REASON ? " @deprecated" : ` @deprecated(reason: ${(0, a.print)({
			kind: i.Kind.STRING,
			value: e
		})})`;
	}
	function te(e) {
		return e.specifiedByURL == null ? "" : ` @specifiedBy(url: ${(0, a.print)({
			kind: i.Kind.STRING,
			value: e.specifiedByURL
		})})`;
	}
	function A(e, t = "", n = !0) {
		let { description: o } = e;
		if (o == null) return "";
		let s = (0, a.print)({
			kind: i.Kind.STRING,
			value: o,
			block: (0, r.isPrintableAsBlockString)(o)
		});
		return (t && !n ? "\n" + t : t) + s.replace(/\n/g, "\n" + t) + "\n";
	}
})), Rh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.concatAST = n;
	var t = Z();
	function n(e) {
		let n = [];
		for (let t of e) n.push(...t.definitions);
		return {
			kind: t.Kind.DOCUMENT,
			definitions: n
		};
	}
})), zh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.separateOperations = r;
	var t = Z(), n = cm();
	function r(e) {
		let n = [], r = Object.create(null);
		for (let i of e.definitions) switch (i.kind) {
			case t.Kind.OPERATION_DEFINITION:
				n.push(i);
				break;
			case t.Kind.FRAGMENT_DEFINITION:
				r[i.name.value] = a(i.selectionSet);
				break;
			default:
		}
		let o = Object.create(null);
		for (let s of n) {
			let n = /* @__PURE__ */ new Set();
			for (let e of a(s.selectionSet)) i(n, r, e);
			let c = s.name ? s.name.value : "";
			o[c] = {
				kind: t.Kind.DOCUMENT,
				definitions: e.definitions.filter((e) => e === s || e.kind === t.Kind.FRAGMENT_DEFINITION && n.has(e.name.value))
			};
		}
		return o;
	}
	function i(e, t, n) {
		if (!e.has(n)) {
			e.add(n);
			let r = t[n];
			if (r !== void 0) for (let n of r) i(e, t, n);
		}
	}
	function a(e) {
		let t = [];
		return (0, n.visit)(e, { FragmentSpread(e) {
			t.push(e.name.value);
		} }), t;
	}
})), Bh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.stripIgnoredCharacters = a;
	var t = Kp(), n = Jp(), r = Zp(), i = qp();
	function a(e) {
		let a = (0, r.isSource)(e) ? e : new r.Source(e), o = a.body, s = new n.Lexer(a), c = "", l = !1;
		for (; s.advance().kind !== i.TokenKind.EOF;) {
			let e = s.token, r = e.kind, a = !(0, n.isPunctuatorTokenKind)(e.kind);
			l && (a || e.kind === i.TokenKind.SPREAD) && (c += " ");
			let u = o.slice(e.start, e.end);
			r === i.TokenKind.BLOCK_STRING ? c += (0, t.printBlockString)(e.value, { minimize: !0 }) : c += u, l = a;
		}
		return c;
	}
})), Vh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.assertValidName = i, e.isValidNameError = a;
	var t = Vp(), n = Y(), r = dm();
	/* c8 ignore start */
	function i(e) {
		let t = a(e);
		if (t) throw t;
		return e;
	}
	function a(e) {
		if (typeof e == "string" || (0, t.devAssert)(!1, "Expected name to be a string."), e.startsWith("__")) return new n.GraphQLError(`Name "${e}" must not begin with "__", which is reserved by GraphQL introspection.`);
		try {
			(0, r.assertName)(e);
		} catch (e) {
			return e;
		}
	}
})), Hh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DangerousChangeType = e.BreakingChangeType = void 0, e.findBreakingChanges = d, e.findDangerousChanges = f;
	var t = X(), n = gf(), r = tm(), i = lm(), a = Q(), o = pm(), s = gm(), c = Lm(), l;
	e.BreakingChangeType = l, (function(e) {
		e.TYPE_REMOVED = "TYPE_REMOVED", e.TYPE_CHANGED_KIND = "TYPE_CHANGED_KIND", e.TYPE_REMOVED_FROM_UNION = "TYPE_REMOVED_FROM_UNION", e.VALUE_REMOVED_FROM_ENUM = "VALUE_REMOVED_FROM_ENUM", e.REQUIRED_INPUT_FIELD_ADDED = "REQUIRED_INPUT_FIELD_ADDED", e.IMPLEMENTED_INTERFACE_REMOVED = "IMPLEMENTED_INTERFACE_REMOVED", e.FIELD_REMOVED = "FIELD_REMOVED", e.FIELD_CHANGED_KIND = "FIELD_CHANGED_KIND", e.REQUIRED_ARG_ADDED = "REQUIRED_ARG_ADDED", e.ARG_REMOVED = "ARG_REMOVED", e.ARG_CHANGED_KIND = "ARG_CHANGED_KIND", e.DIRECTIVE_REMOVED = "DIRECTIVE_REMOVED", e.DIRECTIVE_ARG_REMOVED = "DIRECTIVE_ARG_REMOVED", e.REQUIRED_DIRECTIVE_ARG_ADDED = "REQUIRED_DIRECTIVE_ARG_ADDED", e.DIRECTIVE_REPEATABLE_REMOVED = "DIRECTIVE_REPEATABLE_REMOVED", e.DIRECTIVE_LOCATION_REMOVED = "DIRECTIVE_LOCATION_REMOVED";
	})(l || (e.BreakingChangeType = l = {}));
	var u;
	e.DangerousChangeType = u, (function(e) {
		e.VALUE_ADDED_TO_ENUM = "VALUE_ADDED_TO_ENUM", e.TYPE_ADDED_TO_UNION = "TYPE_ADDED_TO_UNION", e.OPTIONAL_INPUT_FIELD_ADDED = "OPTIONAL_INPUT_FIELD_ADDED", e.OPTIONAL_ARG_ADDED = "OPTIONAL_ARG_ADDED", e.IMPLEMENTED_INTERFACE_ADDED = "IMPLEMENTED_INTERFACE_ADDED", e.ARG_DEFAULT_VALUE_CHANGE = "ARG_DEFAULT_VALUE_CHANGE";
	})(u || (e.DangerousChangeType = u = {}));
	function d(e, t) {
		return p(e, t).filter((e) => e.type in l);
	}
	function f(e, t) {
		return p(e, t).filter((e) => e.type in u);
	}
	function p(e, t) {
		return [...h(e, t), ...m(e, t)];
	}
	function m(e, t) {
		let n = [], r = E(e.getDirectives(), t.getDirectives());
		for (let e of r.removed) n.push({
			type: l.DIRECTIVE_REMOVED,
			description: `${e.name} was removed.`
		});
		for (let [e, t] of r.persisted) {
			let r = E(e.args, t.args);
			for (let t of r.added) (0, a.isRequiredArgument)(t) && n.push({
				type: l.REQUIRED_DIRECTIVE_ARG_ADDED,
				description: `A required arg ${t.name} on directive ${e.name} was added.`
			});
			for (let t of r.removed) n.push({
				type: l.DIRECTIVE_ARG_REMOVED,
				description: `${t.name} was removed from ${e.name}.`
			});
			e.isRepeatable && !t.isRepeatable && n.push({
				type: l.DIRECTIVE_REPEATABLE_REMOVED,
				description: `Repeatable flag was removed from ${e.name}.`
			});
			for (let r of e.locations) t.locations.includes(r) || n.push({
				type: l.DIRECTIVE_LOCATION_REMOVED,
				description: `${r} was removed from ${e.name}.`
			});
		}
		return n;
	}
	function h(e, t) {
		let n = [], r = E(Object.values(e.getTypeMap()), Object.values(t.getTypeMap()));
		for (let e of r.removed) n.push({
			type: l.TYPE_REMOVED,
			description: (0, o.isSpecifiedScalarType)(e) ? `Standard scalar ${e.name} was removed because it is not referenced anymore.` : `${e.name} was removed.`
		});
		for (let [e, t] of r.persisted) (0, a.isEnumType)(e) && (0, a.isEnumType)(t) ? n.push(...v(e, t)) : (0, a.isUnionType)(e) && (0, a.isUnionType)(t) ? n.push(..._(e, t)) : (0, a.isInputObjectType)(e) && (0, a.isInputObjectType)(t) ? n.push(...g(e, t)) : (0, a.isObjectType)(e) && (0, a.isObjectType)(t) || (0, a.isInterfaceType)(e) && (0, a.isInterfaceType)(t) ? n.push(...b(e, t), ...y(e, t)) : e.constructor !== t.constructor && n.push({
			type: l.TYPE_CHANGED_KIND,
			description: `${e.name} changed from ${w(e)} to ${w(t)}.`
		});
		return n;
	}
	function g(e, t) {
		let n = [], r = E(Object.values(e.getFields()), Object.values(t.getFields()));
		for (let t of r.added) (0, a.isRequiredInputField)(t) ? n.push({
			type: l.REQUIRED_INPUT_FIELD_ADDED,
			description: `A required field ${t.name} on input type ${e.name} was added.`
		}) : n.push({
			type: u.OPTIONAL_INPUT_FIELD_ADDED,
			description: `An optional field ${t.name} on input type ${e.name} was added.`
		});
		for (let t of r.removed) n.push({
			type: l.FIELD_REMOVED,
			description: `${e.name}.${t.name} was removed.`
		});
		for (let [t, i] of r.persisted) C(t.type, i.type) || n.push({
			type: l.FIELD_CHANGED_KIND,
			description: `${e.name}.${t.name} changed type from ${String(t.type)} to ${String(i.type)}.`
		});
		return n;
	}
	function _(e, t) {
		let n = [], r = E(e.getTypes(), t.getTypes());
		for (let t of r.added) n.push({
			type: u.TYPE_ADDED_TO_UNION,
			description: `${t.name} was added to union type ${e.name}.`
		});
		for (let t of r.removed) n.push({
			type: l.TYPE_REMOVED_FROM_UNION,
			description: `${t.name} was removed from union type ${e.name}.`
		});
		return n;
	}
	function v(e, t) {
		let n = [], r = E(e.getValues(), t.getValues());
		for (let t of r.added) n.push({
			type: u.VALUE_ADDED_TO_ENUM,
			description: `${t.name} was added to enum type ${e.name}.`
		});
		for (let t of r.removed) n.push({
			type: l.VALUE_REMOVED_FROM_ENUM,
			description: `${t.name} was removed from enum type ${e.name}.`
		});
		return n;
	}
	function y(e, t) {
		let n = [], r = E(e.getInterfaces(), t.getInterfaces());
		for (let t of r.added) n.push({
			type: u.IMPLEMENTED_INTERFACE_ADDED,
			description: `${t.name} added to interfaces implemented by ${e.name}.`
		});
		for (let t of r.removed) n.push({
			type: l.IMPLEMENTED_INTERFACE_REMOVED,
			description: `${e.name} no longer implements interface ${t.name}.`
		});
		return n;
	}
	function b(e, t) {
		let n = [], r = E(Object.values(e.getFields()), Object.values(t.getFields()));
		for (let t of r.removed) n.push({
			type: l.FIELD_REMOVED,
			description: `${e.name}.${t.name} was removed.`
		});
		for (let [t, i] of r.persisted) n.push(...x(e, t, i)), S(t.type, i.type) || n.push({
			type: l.FIELD_CHANGED_KIND,
			description: `${e.name}.${t.name} changed type from ${String(t.type)} to ${String(i.type)}.`
		});
		return n;
	}
	function x(e, t, n) {
		let r = [], i = E(t.args, n.args);
		for (let n of i.removed) r.push({
			type: l.ARG_REMOVED,
			description: `${e.name}.${t.name} arg ${n.name} was removed.`
		});
		for (let [n, a] of i.persisted) if (!C(n.type, a.type)) r.push({
			type: l.ARG_CHANGED_KIND,
			description: `${e.name}.${t.name} arg ${n.name} has changed type from ${String(n.type)} to ${String(a.type)}.`
		});
		else if (n.defaultValue !== void 0) if (a.defaultValue === void 0) r.push({
			type: u.ARG_DEFAULT_VALUE_CHANGE,
			description: `${e.name}.${t.name} arg ${n.name} defaultValue was removed.`
		});
		else {
			let i = T(n.defaultValue, n.type), o = T(a.defaultValue, a.type);
			i !== o && r.push({
				type: u.ARG_DEFAULT_VALUE_CHANGE,
				description: `${e.name}.${t.name} arg ${n.name} has changed defaultValue from ${i} to ${o}.`
			});
		}
		for (let n of i.added) (0, a.isRequiredArgument)(n) ? r.push({
			type: l.REQUIRED_ARG_ADDED,
			description: `A required arg ${n.name} on ${e.name}.${t.name} was added.`
		}) : r.push({
			type: u.OPTIONAL_ARG_ADDED,
			description: `An optional arg ${n.name} on ${e.name}.${t.name} was added.`
		});
		return r;
	}
	function S(e, t) {
		return (0, a.isListType)(e) ? (0, a.isListType)(t) && S(e.ofType, t.ofType) || (0, a.isNonNullType)(t) && S(e, t.ofType) : (0, a.isNonNullType)(e) ? (0, a.isNonNullType)(t) && S(e.ofType, t.ofType) : (0, a.isNamedType)(t) && e.name === t.name || (0, a.isNonNullType)(t) && S(e, t.ofType);
	}
	function C(e, t) {
		return (0, a.isListType)(e) ? (0, a.isListType)(t) && C(e.ofType, t.ofType) : (0, a.isNonNullType)(e) ? (0, a.isNonNullType)(t) && C(e.ofType, t.ofType) || !(0, a.isNonNullType)(t) && C(e.ofType, t) : (0, a.isNamedType)(t) && e.name === t.name;
	}
	function w(e) {
		if ((0, a.isScalarType)(e)) return "a Scalar type";
		if ((0, a.isObjectType)(e)) return "an Object type";
		if ((0, a.isInterfaceType)(e)) return "an Interface type";
		if ((0, a.isUnionType)(e)) return "a Union type";
		if ((0, a.isEnumType)(e)) return "an Enum type";
		if ((0, a.isInputObjectType)(e)) return "an Input type";
		/* c8 ignore next 3 */
		(0, n.invariant)(!1, "Unexpected type: " + (0, t.inspect)(e));
	}
	function T(e, t) {
		let r = (0, s.astFromValue)(e, t);
		return r ?? (0, n.invariant)(!1), (0, i.print)((0, c.sortValueNode)(r));
	}
	function E(e, t) {
		let n = [], i = [], a = [], o = (0, r.keyMap)(e, ({ name: e }) => e), s = (0, r.keyMap)(t, ({ name: e }) => e);
		for (let t of e) {
			let e = s[t.name];
			e === void 0 ? i.push(t) : a.push([t, e]);
		}
		for (let e of t) o[e.name] === void 0 && n.push(e);
		return {
			added: n,
			persisted: a,
			removed: i
		};
	}
})), Uh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.resolveASTSchemaCoordinate = d, e.resolveSchemaCoordinate = a;
	var t = X(), n = Z(), r = Qp(), i = Q();
	function a(e, t) {
		return d(e, (0, r.parseSchemaCoordinate)(t));
	}
	function o(e, t) {
		let n = t.name.value, r = e.getType(n);
		if (r != null) return {
			kind: "NamedType",
			type: r
		};
	}
	function s(e, n) {
		let r = n.name.value, a = e.getType(r);
		if (!a) throw Error(`Expected ${(0, t.inspect)(r)} to be defined as a type in the schema.`);
		if (!(0, i.isEnumType)(a) && !(0, i.isInputObjectType)(a) && !(0, i.isObjectType)(a) && !(0, i.isInterfaceType)(a)) throw Error(`Expected ${(0, t.inspect)(r)} to be an Enum, Input Object, Object or Interface type.`);
		if ((0, i.isEnumType)(a)) {
			let e = n.memberName.value, t = a.getValue(e);
			return t == null ? void 0 : {
				kind: "EnumValue",
				type: a,
				enumValue: t
			};
		}
		if ((0, i.isInputObjectType)(a)) {
			let e = n.memberName.value, t = a.getFields()[e];
			return t == null ? void 0 : {
				kind: "InputField",
				type: a,
				inputField: t
			};
		}
		let o = n.memberName.value, s = a.getFields()[o];
		if (s != null) return {
			kind: "Field",
			type: a,
			field: s
		};
	}
	function c(e, n) {
		let r = n.name.value, a = e.getType(r);
		if (a == null) throw Error(`Expected ${(0, t.inspect)(r)} to be defined as a type in the schema.`);
		if (!(0, i.isObjectType)(a) && !(0, i.isInterfaceType)(a)) throw Error(`Expected ${(0, t.inspect)(r)} to be an object type or interface type.`);
		let o = n.fieldName.value, s = a.getFields()[o];
		if (s == null) throw Error(`Expected ${(0, t.inspect)(o)} to exist as a field of type ${(0, t.inspect)(r)} in the schema.`);
		let c = n.argumentName.value, l = s.args.find((e) => e.name === c);
		if (l != null) return {
			kind: "FieldArgument",
			type: a,
			field: s,
			fieldArgument: l
		};
	}
	function l(e, t) {
		let n = t.name.value, r = e.getDirective(n);
		if (r) return {
			kind: "Directive",
			directive: r
		};
	}
	function u(e, n) {
		let r = n.name.value, i = e.getDirective(r);
		if (!i) throw Error(`Expected ${(0, t.inspect)(r)} to be defined as a directive in the schema.`);
		let { argumentName: { value: a } } = n, o = i.args.find((e) => e.name === a);
		if (o) return {
			kind: "DirectiveArgument",
			directive: i,
			directiveArgument: o
		};
	}
	function d(e, t) {
		switch (t.kind) {
			case n.Kind.TYPE_COORDINATE: return o(e, t);
			case n.Kind.MEMBER_COORDINATE: return s(e, t);
			case n.Kind.ARGUMENT_COORDINATE: return c(e, t);
			case n.Kind.DIRECTIVE_COORDINATE: return l(e, t);
			case n.Kind.DIRECTIVE_ARGUMENT_COORDINATE: return u(e, t);
		}
	}
})), Wh = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "BreakingChangeType", {
		enumerable: !0,
		get: function() {
			return x.BreakingChangeType;
		}
	}), Object.defineProperty(e, "DangerousChangeType", {
		enumerable: !0,
		get: function() {
			return x.DangerousChangeType;
		}
	}), Object.defineProperty(e, "TypeInfo", {
		enumerable: !0,
		get: function() {
			return m.TypeInfo;
		}
	}), Object.defineProperty(e, "assertValidName", {
		enumerable: !0,
		get: function() {
			return b.assertValidName;
		}
	}), Object.defineProperty(e, "astFromValue", {
		enumerable: !0,
		get: function() {
			return p.astFromValue;
		}
	}), Object.defineProperty(e, "buildASTSchema", {
		enumerable: !0,
		get: function() {
			return o.buildASTSchema;
		}
	}), Object.defineProperty(e, "buildClientSchema", {
		enumerable: !0,
		get: function() {
			return a.buildClientSchema;
		}
	}), Object.defineProperty(e, "buildSchema", {
		enumerable: !0,
		get: function() {
			return o.buildSchema;
		}
	}), Object.defineProperty(e, "coerceInputValue", {
		enumerable: !0,
		get: function() {
			return h.coerceInputValue;
		}
	}), Object.defineProperty(e, "concatAST", {
		enumerable: !0,
		get: function() {
			return g.concatAST;
		}
	}), Object.defineProperty(e, "doTypesOverlap", {
		enumerable: !0,
		get: function() {
			return y.doTypesOverlap;
		}
	}), Object.defineProperty(e, "extendSchema", {
		enumerable: !0,
		get: function() {
			return s.extendSchema;
		}
	}), Object.defineProperty(e, "findBreakingChanges", {
		enumerable: !0,
		get: function() {
			return x.findBreakingChanges;
		}
	}), Object.defineProperty(e, "findDangerousChanges", {
		enumerable: !0,
		get: function() {
			return x.findDangerousChanges;
		}
	}), Object.defineProperty(e, "getIntrospectionQuery", {
		enumerable: !0,
		get: function() {
			return t.getIntrospectionQuery;
		}
	}), Object.defineProperty(e, "getOperationAST", {
		enumerable: !0,
		get: function() {
			return n.getOperationAST;
		}
	}), Object.defineProperty(e, "getOperationRootType", {
		enumerable: !0,
		get: function() {
			return r.getOperationRootType;
		}
	}), Object.defineProperty(e, "introspectionFromSchema", {
		enumerable: !0,
		get: function() {
			return i.introspectionFromSchema;
		}
	}), Object.defineProperty(e, "isEqualType", {
		enumerable: !0,
		get: function() {
			return y.isEqualType;
		}
	}), Object.defineProperty(e, "isTypeSubTypeOf", {
		enumerable: !0,
		get: function() {
			return y.isTypeSubTypeOf;
		}
	}), Object.defineProperty(e, "isValidNameError", {
		enumerable: !0,
		get: function() {
			return b.isValidNameError;
		}
	}), Object.defineProperty(e, "lexicographicSortSchema", {
		enumerable: !0,
		get: function() {
			return c.lexicographicSortSchema;
		}
	}), Object.defineProperty(e, "printIntrospectionSchema", {
		enumerable: !0,
		get: function() {
			return l.printIntrospectionSchema;
		}
	}), Object.defineProperty(e, "printSchema", {
		enumerable: !0,
		get: function() {
			return l.printSchema;
		}
	}), Object.defineProperty(e, "printType", {
		enumerable: !0,
		get: function() {
			return l.printType;
		}
	}), Object.defineProperty(e, "resolveASTSchemaCoordinate", {
		enumerable: !0,
		get: function() {
			return S.resolveASTSchemaCoordinate;
		}
	}), Object.defineProperty(e, "resolveSchemaCoordinate", {
		enumerable: !0,
		get: function() {
			return S.resolveSchemaCoordinate;
		}
	}), Object.defineProperty(e, "separateOperations", {
		enumerable: !0,
		get: function() {
			return _.separateOperations;
		}
	}), Object.defineProperty(e, "stripIgnoredCharacters", {
		enumerable: !0,
		get: function() {
			return v.stripIgnoredCharacters;
		}
	}), Object.defineProperty(e, "typeFromAST", {
		enumerable: !0,
		get: function() {
			return u.typeFromAST;
		}
	}), Object.defineProperty(e, "valueFromAST", {
		enumerable: !0,
		get: function() {
			return d.valueFromAST;
		}
	}), Object.defineProperty(e, "valueFromASTUntyped", {
		enumerable: !0,
		get: function() {
			return f.valueFromASTUntyped;
		}
	}), Object.defineProperty(e, "visitWithTypeInfo", {
		enumerable: !0,
		get: function() {
			return m.visitWithTypeInfo;
		}
	});
	var t = kh(), n = Ah(), r = jh(), i = Mh(), a = Nh(), o = Fh(), s = Ph(), c = Ih(), l = Lh(), u = bm(), d = Km(), f = um(), p = gm(), m = xm(), h = Gm(), g = Rh(), _ = zh(), v = Bh(), y = fm(), b = Vh(), x = Hh(), S = Uh();
})), Gh = (/* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "BREAK", {
		enumerable: !0,
		get: function() {
			return i.BREAK;
		}
	}), Object.defineProperty(e, "BreakingChangeType", {
		enumerable: !0,
		get: function() {
			return c.BreakingChangeType;
		}
	}), Object.defineProperty(e, "DEFAULT_DEPRECATION_REASON", {
		enumerable: !0,
		get: function() {
			return r.DEFAULT_DEPRECATION_REASON;
		}
	}), Object.defineProperty(e, "DangerousChangeType", {
		enumerable: !0,
		get: function() {
			return c.DangerousChangeType;
		}
	}), Object.defineProperty(e, "DirectiveLocation", {
		enumerable: !0,
		get: function() {
			return i.DirectiveLocation;
		}
	}), Object.defineProperty(e, "ExecutableDefinitionsRule", {
		enumerable: !0,
		get: function() {
			return o.ExecutableDefinitionsRule;
		}
	}), Object.defineProperty(e, "FieldsOnCorrectTypeRule", {
		enumerable: !0,
		get: function() {
			return o.FieldsOnCorrectTypeRule;
		}
	}), Object.defineProperty(e, "FragmentsOnCompositeTypesRule", {
		enumerable: !0,
		get: function() {
			return o.FragmentsOnCompositeTypesRule;
		}
	}), Object.defineProperty(e, "GRAPHQL_MAX_INT", {
		enumerable: !0,
		get: function() {
			return r.GRAPHQL_MAX_INT;
		}
	}), Object.defineProperty(e, "GRAPHQL_MIN_INT", {
		enumerable: !0,
		get: function() {
			return r.GRAPHQL_MIN_INT;
		}
	}), Object.defineProperty(e, "GraphQLBoolean", {
		enumerable: !0,
		get: function() {
			return r.GraphQLBoolean;
		}
	}), Object.defineProperty(e, "GraphQLDeprecatedDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLDeprecatedDirective;
		}
	}), Object.defineProperty(e, "GraphQLDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLDirective;
		}
	}), Object.defineProperty(e, "GraphQLEnumType", {
		enumerable: !0,
		get: function() {
			return r.GraphQLEnumType;
		}
	}), Object.defineProperty(e, "GraphQLError", {
		enumerable: !0,
		get: function() {
			return s.GraphQLError;
		}
	}), Object.defineProperty(e, "GraphQLFloat", {
		enumerable: !0,
		get: function() {
			return r.GraphQLFloat;
		}
	}), Object.defineProperty(e, "GraphQLID", {
		enumerable: !0,
		get: function() {
			return r.GraphQLID;
		}
	}), Object.defineProperty(e, "GraphQLIncludeDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLIncludeDirective;
		}
	}), Object.defineProperty(e, "GraphQLInputObjectType", {
		enumerable: !0,
		get: function() {
			return r.GraphQLInputObjectType;
		}
	}), Object.defineProperty(e, "GraphQLInt", {
		enumerable: !0,
		get: function() {
			return r.GraphQLInt;
		}
	}), Object.defineProperty(e, "GraphQLInterfaceType", {
		enumerable: !0,
		get: function() {
			return r.GraphQLInterfaceType;
		}
	}), Object.defineProperty(e, "GraphQLList", {
		enumerable: !0,
		get: function() {
			return r.GraphQLList;
		}
	}), Object.defineProperty(e, "GraphQLNonNull", {
		enumerable: !0,
		get: function() {
			return r.GraphQLNonNull;
		}
	}), Object.defineProperty(e, "GraphQLObjectType", {
		enumerable: !0,
		get: function() {
			return r.GraphQLObjectType;
		}
	}), Object.defineProperty(e, "GraphQLOneOfDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLOneOfDirective;
		}
	}), Object.defineProperty(e, "GraphQLScalarType", {
		enumerable: !0,
		get: function() {
			return r.GraphQLScalarType;
		}
	}), Object.defineProperty(e, "GraphQLSchema", {
		enumerable: !0,
		get: function() {
			return r.GraphQLSchema;
		}
	}), Object.defineProperty(e, "GraphQLSkipDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLSkipDirective;
		}
	}), Object.defineProperty(e, "GraphQLSpecifiedByDirective", {
		enumerable: !0,
		get: function() {
			return r.GraphQLSpecifiedByDirective;
		}
	}), Object.defineProperty(e, "GraphQLString", {
		enumerable: !0,
		get: function() {
			return r.GraphQLString;
		}
	}), Object.defineProperty(e, "GraphQLUnionType", {
		enumerable: !0,
		get: function() {
			return r.GraphQLUnionType;
		}
	}), Object.defineProperty(e, "Kind", {
		enumerable: !0,
		get: function() {
			return i.Kind;
		}
	}), Object.defineProperty(e, "KnownArgumentNamesRule", {
		enumerable: !0,
		get: function() {
			return o.KnownArgumentNamesRule;
		}
	}), Object.defineProperty(e, "KnownDirectivesRule", {
		enumerable: !0,
		get: function() {
			return o.KnownDirectivesRule;
		}
	}), Object.defineProperty(e, "KnownFragmentNamesRule", {
		enumerable: !0,
		get: function() {
			return o.KnownFragmentNamesRule;
		}
	}), Object.defineProperty(e, "KnownTypeNamesRule", {
		enumerable: !0,
		get: function() {
			return o.KnownTypeNamesRule;
		}
	}), Object.defineProperty(e, "Lexer", {
		enumerable: !0,
		get: function() {
			return i.Lexer;
		}
	}), Object.defineProperty(e, "Location", {
		enumerable: !0,
		get: function() {
			return i.Location;
		}
	}), Object.defineProperty(e, "LoneAnonymousOperationRule", {
		enumerable: !0,
		get: function() {
			return o.LoneAnonymousOperationRule;
		}
	}), Object.defineProperty(e, "LoneSchemaDefinitionRule", {
		enumerable: !0,
		get: function() {
			return o.LoneSchemaDefinitionRule;
		}
	}), Object.defineProperty(e, "MaxIntrospectionDepthRule", {
		enumerable: !0,
		get: function() {
			return o.MaxIntrospectionDepthRule;
		}
	}), Object.defineProperty(e, "NoDeprecatedCustomRule", {
		enumerable: !0,
		get: function() {
			return o.NoDeprecatedCustomRule;
		}
	}), Object.defineProperty(e, "NoFragmentCyclesRule", {
		enumerable: !0,
		get: function() {
			return o.NoFragmentCyclesRule;
		}
	}), Object.defineProperty(e, "NoSchemaIntrospectionCustomRule", {
		enumerable: !0,
		get: function() {
			return o.NoSchemaIntrospectionCustomRule;
		}
	}), Object.defineProperty(e, "NoUndefinedVariablesRule", {
		enumerable: !0,
		get: function() {
			return o.NoUndefinedVariablesRule;
		}
	}), Object.defineProperty(e, "NoUnusedFragmentsRule", {
		enumerable: !0,
		get: function() {
			return o.NoUnusedFragmentsRule;
		}
	}), Object.defineProperty(e, "NoUnusedVariablesRule", {
		enumerable: !0,
		get: function() {
			return o.NoUnusedVariablesRule;
		}
	}), Object.defineProperty(e, "OperationTypeNode", {
		enumerable: !0,
		get: function() {
			return i.OperationTypeNode;
		}
	}), Object.defineProperty(e, "OverlappingFieldsCanBeMergedRule", {
		enumerable: !0,
		get: function() {
			return o.OverlappingFieldsCanBeMergedRule;
		}
	}), Object.defineProperty(e, "PossibleFragmentSpreadsRule", {
		enumerable: !0,
		get: function() {
			return o.PossibleFragmentSpreadsRule;
		}
	}), Object.defineProperty(e, "PossibleTypeExtensionsRule", {
		enumerable: !0,
		get: function() {
			return o.PossibleTypeExtensionsRule;
		}
	}), Object.defineProperty(e, "ProvidedRequiredArgumentsRule", {
		enumerable: !0,
		get: function() {
			return o.ProvidedRequiredArgumentsRule;
		}
	}), Object.defineProperty(e, "ScalarLeafsRule", {
		enumerable: !0,
		get: function() {
			return o.ScalarLeafsRule;
		}
	}), Object.defineProperty(e, "SchemaMetaFieldDef", {
		enumerable: !0,
		get: function() {
			return r.SchemaMetaFieldDef;
		}
	}), Object.defineProperty(e, "SingleFieldSubscriptionsRule", {
		enumerable: !0,
		get: function() {
			return o.SingleFieldSubscriptionsRule;
		}
	}), Object.defineProperty(e, "Source", {
		enumerable: !0,
		get: function() {
			return i.Source;
		}
	}), Object.defineProperty(e, "Token", {
		enumerable: !0,
		get: function() {
			return i.Token;
		}
	}), Object.defineProperty(e, "TokenKind", {
		enumerable: !0,
		get: function() {
			return i.TokenKind;
		}
	}), Object.defineProperty(e, "TypeInfo", {
		enumerable: !0,
		get: function() {
			return c.TypeInfo;
		}
	}), Object.defineProperty(e, "TypeKind", {
		enumerable: !0,
		get: function() {
			return r.TypeKind;
		}
	}), Object.defineProperty(e, "TypeMetaFieldDef", {
		enumerable: !0,
		get: function() {
			return r.TypeMetaFieldDef;
		}
	}), Object.defineProperty(e, "TypeNameMetaFieldDef", {
		enumerable: !0,
		get: function() {
			return r.TypeNameMetaFieldDef;
		}
	}), Object.defineProperty(e, "UniqueArgumentDefinitionNamesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueArgumentDefinitionNamesRule;
		}
	}), Object.defineProperty(e, "UniqueArgumentNamesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueArgumentNamesRule;
		}
	}), Object.defineProperty(e, "UniqueDirectiveNamesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueDirectiveNamesRule;
		}
	}), Object.defineProperty(e, "UniqueDirectivesPerLocationRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueDirectivesPerLocationRule;
		}
	}), Object.defineProperty(e, "UniqueEnumValueNamesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueEnumValueNamesRule;
		}
	}), Object.defineProperty(e, "UniqueFieldDefinitionNamesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueFieldDefinitionNamesRule;
		}
	}), Object.defineProperty(e, "UniqueFragmentNamesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueFragmentNamesRule;
		}
	}), Object.defineProperty(e, "UniqueInputFieldNamesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueInputFieldNamesRule;
		}
	}), Object.defineProperty(e, "UniqueOperationNamesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueOperationNamesRule;
		}
	}), Object.defineProperty(e, "UniqueOperationTypesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueOperationTypesRule;
		}
	}), Object.defineProperty(e, "UniqueTypeNamesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueTypeNamesRule;
		}
	}), Object.defineProperty(e, "UniqueVariableNamesRule", {
		enumerable: !0,
		get: function() {
			return o.UniqueVariableNamesRule;
		}
	}), Object.defineProperty(e, "ValidationContext", {
		enumerable: !0,
		get: function() {
			return o.ValidationContext;
		}
	}), Object.defineProperty(e, "ValuesOfCorrectTypeRule", {
		enumerable: !0,
		get: function() {
			return o.ValuesOfCorrectTypeRule;
		}
	}), Object.defineProperty(e, "VariablesAreInputTypesRule", {
		enumerable: !0,
		get: function() {
			return o.VariablesAreInputTypesRule;
		}
	}), Object.defineProperty(e, "VariablesInAllowedPositionRule", {
		enumerable: !0,
		get: function() {
			return o.VariablesInAllowedPositionRule;
		}
	}), Object.defineProperty(e, "__Directive", {
		enumerable: !0,
		get: function() {
			return r.__Directive;
		}
	}), Object.defineProperty(e, "__DirectiveLocation", {
		enumerable: !0,
		get: function() {
			return r.__DirectiveLocation;
		}
	}), Object.defineProperty(e, "__EnumValue", {
		enumerable: !0,
		get: function() {
			return r.__EnumValue;
		}
	}), Object.defineProperty(e, "__Field", {
		enumerable: !0,
		get: function() {
			return r.__Field;
		}
	}), Object.defineProperty(e, "__InputValue", {
		enumerable: !0,
		get: function() {
			return r.__InputValue;
		}
	}), Object.defineProperty(e, "__Schema", {
		enumerable: !0,
		get: function() {
			return r.__Schema;
		}
	}), Object.defineProperty(e, "__Type", {
		enumerable: !0,
		get: function() {
			return r.__Type;
		}
	}), Object.defineProperty(e, "__TypeKind", {
		enumerable: !0,
		get: function() {
			return r.__TypeKind;
		}
	}), Object.defineProperty(e, "assertAbstractType", {
		enumerable: !0,
		get: function() {
			return r.assertAbstractType;
		}
	}), Object.defineProperty(e, "assertCompositeType", {
		enumerable: !0,
		get: function() {
			return r.assertCompositeType;
		}
	}), Object.defineProperty(e, "assertDirective", {
		enumerable: !0,
		get: function() {
			return r.assertDirective;
		}
	}), Object.defineProperty(e, "assertEnumType", {
		enumerable: !0,
		get: function() {
			return r.assertEnumType;
		}
	}), Object.defineProperty(e, "assertEnumValueName", {
		enumerable: !0,
		get: function() {
			return r.assertEnumValueName;
		}
	}), Object.defineProperty(e, "assertInputObjectType", {
		enumerable: !0,
		get: function() {
			return r.assertInputObjectType;
		}
	}), Object.defineProperty(e, "assertInputType", {
		enumerable: !0,
		get: function() {
			return r.assertInputType;
		}
	}), Object.defineProperty(e, "assertInterfaceType", {
		enumerable: !0,
		get: function() {
			return r.assertInterfaceType;
		}
	}), Object.defineProperty(e, "assertLeafType", {
		enumerable: !0,
		get: function() {
			return r.assertLeafType;
		}
	}), Object.defineProperty(e, "assertListType", {
		enumerable: !0,
		get: function() {
			return r.assertListType;
		}
	}), Object.defineProperty(e, "assertName", {
		enumerable: !0,
		get: function() {
			return r.assertName;
		}
	}), Object.defineProperty(e, "assertNamedType", {
		enumerable: !0,
		get: function() {
			return r.assertNamedType;
		}
	}), Object.defineProperty(e, "assertNonNullType", {
		enumerable: !0,
		get: function() {
			return r.assertNonNullType;
		}
	}), Object.defineProperty(e, "assertNullableType", {
		enumerable: !0,
		get: function() {
			return r.assertNullableType;
		}
	}), Object.defineProperty(e, "assertObjectType", {
		enumerable: !0,
		get: function() {
			return r.assertObjectType;
		}
	}), Object.defineProperty(e, "assertOutputType", {
		enumerable: !0,
		get: function() {
			return r.assertOutputType;
		}
	}), Object.defineProperty(e, "assertScalarType", {
		enumerable: !0,
		get: function() {
			return r.assertScalarType;
		}
	}), Object.defineProperty(e, "assertSchema", {
		enumerable: !0,
		get: function() {
			return r.assertSchema;
		}
	}), Object.defineProperty(e, "assertType", {
		enumerable: !0,
		get: function() {
			return r.assertType;
		}
	}), Object.defineProperty(e, "assertUnionType", {
		enumerable: !0,
		get: function() {
			return r.assertUnionType;
		}
	}), Object.defineProperty(e, "assertValidName", {
		enumerable: !0,
		get: function() {
			return c.assertValidName;
		}
	}), Object.defineProperty(e, "assertValidSchema", {
		enumerable: !0,
		get: function() {
			return r.assertValidSchema;
		}
	}), Object.defineProperty(e, "assertWrappingType", {
		enumerable: !0,
		get: function() {
			return r.assertWrappingType;
		}
	}), Object.defineProperty(e, "astFromValue", {
		enumerable: !0,
		get: function() {
			return c.astFromValue;
		}
	}), Object.defineProperty(e, "buildASTSchema", {
		enumerable: !0,
		get: function() {
			return c.buildASTSchema;
		}
	}), Object.defineProperty(e, "buildClientSchema", {
		enumerable: !0,
		get: function() {
			return c.buildClientSchema;
		}
	}), Object.defineProperty(e, "buildSchema", {
		enumerable: !0,
		get: function() {
			return c.buildSchema;
		}
	}), Object.defineProperty(e, "coerceInputValue", {
		enumerable: !0,
		get: function() {
			return c.coerceInputValue;
		}
	}), Object.defineProperty(e, "concatAST", {
		enumerable: !0,
		get: function() {
			return c.concatAST;
		}
	}), Object.defineProperty(e, "createSourceEventStream", {
		enumerable: !0,
		get: function() {
			return a.createSourceEventStream;
		}
	}), Object.defineProperty(e, "defaultFieldResolver", {
		enumerable: !0,
		get: function() {
			return a.defaultFieldResolver;
		}
	}), Object.defineProperty(e, "defaultTypeResolver", {
		enumerable: !0,
		get: function() {
			return a.defaultTypeResolver;
		}
	}), Object.defineProperty(e, "doTypesOverlap", {
		enumerable: !0,
		get: function() {
			return c.doTypesOverlap;
		}
	}), Object.defineProperty(e, "execute", {
		enumerable: !0,
		get: function() {
			return a.execute;
		}
	}), Object.defineProperty(e, "executeSync", {
		enumerable: !0,
		get: function() {
			return a.executeSync;
		}
	}), Object.defineProperty(e, "extendSchema", {
		enumerable: !0,
		get: function() {
			return c.extendSchema;
		}
	}), Object.defineProperty(e, "findBreakingChanges", {
		enumerable: !0,
		get: function() {
			return c.findBreakingChanges;
		}
	}), Object.defineProperty(e, "findDangerousChanges", {
		enumerable: !0,
		get: function() {
			return c.findDangerousChanges;
		}
	}), Object.defineProperty(e, "formatError", {
		enumerable: !0,
		get: function() {
			return s.formatError;
		}
	}), Object.defineProperty(e, "getArgumentValues", {
		enumerable: !0,
		get: function() {
			return a.getArgumentValues;
		}
	}), Object.defineProperty(e, "getDirectiveValues", {
		enumerable: !0,
		get: function() {
			return a.getDirectiveValues;
		}
	}), Object.defineProperty(e, "getEnterLeaveForKind", {
		enumerable: !0,
		get: function() {
			return i.getEnterLeaveForKind;
		}
	}), Object.defineProperty(e, "getIntrospectionQuery", {
		enumerable: !0,
		get: function() {
			return c.getIntrospectionQuery;
		}
	}), Object.defineProperty(e, "getLocation", {
		enumerable: !0,
		get: function() {
			return i.getLocation;
		}
	}), Object.defineProperty(e, "getNamedType", {
		enumerable: !0,
		get: function() {
			return r.getNamedType;
		}
	}), Object.defineProperty(e, "getNullableType", {
		enumerable: !0,
		get: function() {
			return r.getNullableType;
		}
	}), Object.defineProperty(e, "getOperationAST", {
		enumerable: !0,
		get: function() {
			return c.getOperationAST;
		}
	}), Object.defineProperty(e, "getOperationRootType", {
		enumerable: !0,
		get: function() {
			return c.getOperationRootType;
		}
	}), Object.defineProperty(e, "getVariableValues", {
		enumerable: !0,
		get: function() {
			return a.getVariableValues;
		}
	}), Object.defineProperty(e, "getVisitFn", {
		enumerable: !0,
		get: function() {
			return i.getVisitFn;
		}
	}), Object.defineProperty(e, "graphql", {
		enumerable: !0,
		get: function() {
			return n.graphql;
		}
	}), Object.defineProperty(e, "graphqlSync", {
		enumerable: !0,
		get: function() {
			return n.graphqlSync;
		}
	}), Object.defineProperty(e, "introspectionFromSchema", {
		enumerable: !0,
		get: function() {
			return c.introspectionFromSchema;
		}
	}), Object.defineProperty(e, "introspectionTypes", {
		enumerable: !0,
		get: function() {
			return r.introspectionTypes;
		}
	}), Object.defineProperty(e, "isAbstractType", {
		enumerable: !0,
		get: function() {
			return r.isAbstractType;
		}
	}), Object.defineProperty(e, "isCompositeType", {
		enumerable: !0,
		get: function() {
			return r.isCompositeType;
		}
	}), Object.defineProperty(e, "isConstValueNode", {
		enumerable: !0,
		get: function() {
			return i.isConstValueNode;
		}
	}), Object.defineProperty(e, "isDefinitionNode", {
		enumerable: !0,
		get: function() {
			return i.isDefinitionNode;
		}
	}), Object.defineProperty(e, "isDirective", {
		enumerable: !0,
		get: function() {
			return r.isDirective;
		}
	}), Object.defineProperty(e, "isEnumType", {
		enumerable: !0,
		get: function() {
			return r.isEnumType;
		}
	}), Object.defineProperty(e, "isEqualType", {
		enumerable: !0,
		get: function() {
			return c.isEqualType;
		}
	}), Object.defineProperty(e, "isExecutableDefinitionNode", {
		enumerable: !0,
		get: function() {
			return i.isExecutableDefinitionNode;
		}
	}), Object.defineProperty(e, "isInputObjectType", {
		enumerable: !0,
		get: function() {
			return r.isInputObjectType;
		}
	}), Object.defineProperty(e, "isInputType", {
		enumerable: !0,
		get: function() {
			return r.isInputType;
		}
	}), Object.defineProperty(e, "isInterfaceType", {
		enumerable: !0,
		get: function() {
			return r.isInterfaceType;
		}
	}), Object.defineProperty(e, "isIntrospectionType", {
		enumerable: !0,
		get: function() {
			return r.isIntrospectionType;
		}
	}), Object.defineProperty(e, "isLeafType", {
		enumerable: !0,
		get: function() {
			return r.isLeafType;
		}
	}), Object.defineProperty(e, "isListType", {
		enumerable: !0,
		get: function() {
			return r.isListType;
		}
	}), Object.defineProperty(e, "isNamedType", {
		enumerable: !0,
		get: function() {
			return r.isNamedType;
		}
	}), Object.defineProperty(e, "isNonNullType", {
		enumerable: !0,
		get: function() {
			return r.isNonNullType;
		}
	}), Object.defineProperty(e, "isNullableType", {
		enumerable: !0,
		get: function() {
			return r.isNullableType;
		}
	}), Object.defineProperty(e, "isObjectType", {
		enumerable: !0,
		get: function() {
			return r.isObjectType;
		}
	}), Object.defineProperty(e, "isOutputType", {
		enumerable: !0,
		get: function() {
			return r.isOutputType;
		}
	}), Object.defineProperty(e, "isRequiredArgument", {
		enumerable: !0,
		get: function() {
			return r.isRequiredArgument;
		}
	}), Object.defineProperty(e, "isRequiredInputField", {
		enumerable: !0,
		get: function() {
			return r.isRequiredInputField;
		}
	}), Object.defineProperty(e, "isScalarType", {
		enumerable: !0,
		get: function() {
			return r.isScalarType;
		}
	}), Object.defineProperty(e, "isSchema", {
		enumerable: !0,
		get: function() {
			return r.isSchema;
		}
	}), Object.defineProperty(e, "isSchemaCoordinateNode", {
		enumerable: !0,
		get: function() {
			return i.isSchemaCoordinateNode;
		}
	}), Object.defineProperty(e, "isSelectionNode", {
		enumerable: !0,
		get: function() {
			return i.isSelectionNode;
		}
	}), Object.defineProperty(e, "isSpecifiedDirective", {
		enumerable: !0,
		get: function() {
			return r.isSpecifiedDirective;
		}
	}), Object.defineProperty(e, "isSpecifiedScalarType", {
		enumerable: !0,
		get: function() {
			return r.isSpecifiedScalarType;
		}
	}), Object.defineProperty(e, "isType", {
		enumerable: !0,
		get: function() {
			return r.isType;
		}
	}), Object.defineProperty(e, "isTypeDefinitionNode", {
		enumerable: !0,
		get: function() {
			return i.isTypeDefinitionNode;
		}
	}), Object.defineProperty(e, "isTypeExtensionNode", {
		enumerable: !0,
		get: function() {
			return i.isTypeExtensionNode;
		}
	}), Object.defineProperty(e, "isTypeNode", {
		enumerable: !0,
		get: function() {
			return i.isTypeNode;
		}
	}), Object.defineProperty(e, "isTypeSubTypeOf", {
		enumerable: !0,
		get: function() {
			return c.isTypeSubTypeOf;
		}
	}), Object.defineProperty(e, "isTypeSystemDefinitionNode", {
		enumerable: !0,
		get: function() {
			return i.isTypeSystemDefinitionNode;
		}
	}), Object.defineProperty(e, "isTypeSystemExtensionNode", {
		enumerable: !0,
		get: function() {
			return i.isTypeSystemExtensionNode;
		}
	}), Object.defineProperty(e, "isUnionType", {
		enumerable: !0,
		get: function() {
			return r.isUnionType;
		}
	}), Object.defineProperty(e, "isValidNameError", {
		enumerable: !0,
		get: function() {
			return c.isValidNameError;
		}
	}), Object.defineProperty(e, "isValueNode", {
		enumerable: !0,
		get: function() {
			return i.isValueNode;
		}
	}), Object.defineProperty(e, "isWrappingType", {
		enumerable: !0,
		get: function() {
			return r.isWrappingType;
		}
	}), Object.defineProperty(e, "lexicographicSortSchema", {
		enumerable: !0,
		get: function() {
			return c.lexicographicSortSchema;
		}
	}), Object.defineProperty(e, "locatedError", {
		enumerable: !0,
		get: function() {
			return s.locatedError;
		}
	}), Object.defineProperty(e, "parse", {
		enumerable: !0,
		get: function() {
			return i.parse;
		}
	}), Object.defineProperty(e, "parseConstValue", {
		enumerable: !0,
		get: function() {
			return i.parseConstValue;
		}
	}), Object.defineProperty(e, "parseSchemaCoordinate", {
		enumerable: !0,
		get: function() {
			return i.parseSchemaCoordinate;
		}
	}), Object.defineProperty(e, "parseType", {
		enumerable: !0,
		get: function() {
			return i.parseType;
		}
	}), Object.defineProperty(e, "parseValue", {
		enumerable: !0,
		get: function() {
			return i.parseValue;
		}
	}), Object.defineProperty(e, "print", {
		enumerable: !0,
		get: function() {
			return i.print;
		}
	}), Object.defineProperty(e, "printError", {
		enumerable: !0,
		get: function() {
			return s.printError;
		}
	}), Object.defineProperty(e, "printIntrospectionSchema", {
		enumerable: !0,
		get: function() {
			return c.printIntrospectionSchema;
		}
	}), Object.defineProperty(e, "printLocation", {
		enumerable: !0,
		get: function() {
			return i.printLocation;
		}
	}), Object.defineProperty(e, "printSchema", {
		enumerable: !0,
		get: function() {
			return c.printSchema;
		}
	}), Object.defineProperty(e, "printSourceLocation", {
		enumerable: !0,
		get: function() {
			return i.printSourceLocation;
		}
	}), Object.defineProperty(e, "printType", {
		enumerable: !0,
		get: function() {
			return c.printType;
		}
	}), Object.defineProperty(e, "recommendedRules", {
		enumerable: !0,
		get: function() {
			return o.recommendedRules;
		}
	}), Object.defineProperty(e, "resolveASTSchemaCoordinate", {
		enumerable: !0,
		get: function() {
			return c.resolveASTSchemaCoordinate;
		}
	}), Object.defineProperty(e, "resolveObjMapThunk", {
		enumerable: !0,
		get: function() {
			return r.resolveObjMapThunk;
		}
	}), Object.defineProperty(e, "resolveReadonlyArrayThunk", {
		enumerable: !0,
		get: function() {
			return r.resolveReadonlyArrayThunk;
		}
	}), Object.defineProperty(e, "resolveSchemaCoordinate", {
		enumerable: !0,
		get: function() {
			return c.resolveSchemaCoordinate;
		}
	}), Object.defineProperty(e, "responsePathAsArray", {
		enumerable: !0,
		get: function() {
			return a.responsePathAsArray;
		}
	}), Object.defineProperty(e, "separateOperations", {
		enumerable: !0,
		get: function() {
			return c.separateOperations;
		}
	}), Object.defineProperty(e, "specifiedDirectives", {
		enumerable: !0,
		get: function() {
			return r.specifiedDirectives;
		}
	}), Object.defineProperty(e, "specifiedRules", {
		enumerable: !0,
		get: function() {
			return o.specifiedRules;
		}
	}), Object.defineProperty(e, "specifiedScalarTypes", {
		enumerable: !0,
		get: function() {
			return r.specifiedScalarTypes;
		}
	}), Object.defineProperty(e, "stripIgnoredCharacters", {
		enumerable: !0,
		get: function() {
			return c.stripIgnoredCharacters;
		}
	}), Object.defineProperty(e, "subscribe", {
		enumerable: !0,
		get: function() {
			return a.subscribe;
		}
	}), Object.defineProperty(e, "syntaxError", {
		enumerable: !0,
		get: function() {
			return s.syntaxError;
		}
	}), Object.defineProperty(e, "typeFromAST", {
		enumerable: !0,
		get: function() {
			return c.typeFromAST;
		}
	}), Object.defineProperty(e, "validate", {
		enumerable: !0,
		get: function() {
			return o.validate;
		}
	}), Object.defineProperty(e, "validateSchema", {
		enumerable: !0,
		get: function() {
			return r.validateSchema;
		}
	}), Object.defineProperty(e, "valueFromAST", {
		enumerable: !0,
		get: function() {
			return c.valueFromAST;
		}
	}), Object.defineProperty(e, "valueFromASTUntyped", {
		enumerable: !0,
		get: function() {
			return c.valueFromASTUntyped;
		}
	}), Object.defineProperty(e, "version", {
		enumerable: !0,
		get: function() {
			return t.version;
		}
	}), Object.defineProperty(e, "versionInfo", {
		enumerable: !0,
		get: function() {
			return t.versionInfo;
		}
	}), Object.defineProperty(e, "visit", {
		enumerable: !0,
		get: function() {
			return i.visit;
		}
	}), Object.defineProperty(e, "visitInParallel", {
		enumerable: !0,
		get: function() {
			return i.visitInParallel;
		}
	}), Object.defineProperty(e, "visitWithTypeInfo", {
		enumerable: !0,
		get: function() {
			return c.visitWithTypeInfo;
		}
	});
	var t = Bp(), n = yh(), r = bh(), i = xh(), a = Th(), o = Oh(), s = Sf(), c = Wh();
})))(), Kh = new Set([
	"properties",
	"items",
	"additionalProperties",
	"allOf",
	"anyOf",
	"oneOf"
]), qh = (e, t = /* @__PURE__ */ new WeakSet(), n = /* @__PURE__ */ new WeakMap(), a = [], o = /* @__PURE__ */ new Set()) => {
	if (typeof e != "object" || !e) return e;
	let s = e.__$ref;
	if (t.has(e) || typeof s == "string" && o.has(s)) return typeof s == "string" ? r + s : [i, a.find((e) => !Kh.has(e)) || a[0]].filter(Boolean).join(":");
	if (n.has(e)) return n.get(e);
	t.add(e), typeof s == "string" && o.add(s);
	let c = (e, r) => qh(e, t, n, [...a, r], o), l = Array.isArray(e) ? e.map((e, t) => c(e, t.toString())) : Object.fromEntries(Object.entries(e).map(([e, t]) => [e, c(t, e)]));
	return !Array.isArray(l) && typeof s == "string" && !("__$ref" in l) && (l.__$ref = s), n.set(e, l), t.delete(e), typeof s == "string" && o.delete(s), l;
}, Jh = new Gh.GraphQLScalarType({
	...Vs,
	name: "JSONSchema",
	description: "OpenAPI schema scalar type that handles circular references",
	serialize: (e) => Vs.serialize(qh(e))
}), Yh = (e, t) => e(t.summary || t.operationId || `${t.method}-${t.path}`), $ = new Is({ defaultFieldNullability: !1 }), Xh = $.addScalarType("JSON", Vs), Zh = $.addScalarType("JSONObject", Hs), Qh = $.addScalarType("JSONSchema", Jh), $h = (e) => Object.fromEntries(Object.entries(e).filter(([e]) => e.startsWith("x-"))), eg = (e) => {
	let t = e.tags ?? [], r = Object.values(e.paths ?? {}).flatMap((e) => Lp.map((t) => e?.[t]).filter((e) => e != null)), i = new Set(r.flatMap((e) => e.tags ?? [])), a = r.some((e) => (e.tags?.length ?? 0) === 0), o = n(), s = Object.fromEntries(Array.from(new Set([...Array.from(i), ...t.map((e) => e.name)])).map((e) => [e, o(e)])), c = [
		...t.filter((e) => i.has(e.name)).map((e) => ({
			...e,
			slug: s[e.name]
		})),
		...Array.from(i).filter((e) => !t.some((t) => t.name === e)).map((e) => ({
			name: e,
			slug: s[e]
		})),
		...a ? [{
			name: void 0,
			slug: void 0
		}] : []
	], l = e["x-tagGroups"] ?? [];
	if (l.length === 0) return c;
	let u = l.flatMap((e) => e.tags);
	return c.sort((e, t) => {
		if (!e.name || !t.name) return 0;
		let n = u.indexOf(e.name), r = u.indexOf(t.name);
		return n === -1 && r === -1 ? 0 : n === -1 ? 1 : r === -1 ? -1 : n - r;
	});
}, tg = (e, t = []) => {
	let r = n(), i = n(), a = Array.from(new Set([...e.flatMap((e) => e.tags ?? []), ...t.map((e) => e.name)]));
	return {
		operations: Object.fromEntries(e.map((e) => [ng(e), Yh(r, e)])),
		tags: Object.fromEntries(a.map((e) => [e, i(e)]))
	};
}, ng = (e) => [
	e.path,
	e.method,
	e.operationId,
	e.summary
].filter(Boolean).join("-"), rg = (e) => Object.entries(e ?? {}).flatMap(([e, t]) => Lp.flatMap((n) => {
	if (!t?.[n]) return [];
	let r = t[n], i = t.parameters ?? [], a = r.parameters ?? [], o = [...i.filter((e) => !a.some((t) => t.name === e.name && t.in === e.in)), ...a], s = t.servers ?? [], c = r.servers ?? [], l = c.length > 0 ? c : s;
	return {
		...r,
		method: n,
		path: e,
		parameters: o,
		servers: l,
		tags: r.tags ?? []
	};
})), ig = $.objectRef("SchemaContact").implement({ fields: (e) => ({
	name: e.exposeString("name", { nullable: !0 }),
	url: e.exposeString("url", { nullable: !0 }),
	email: e.exposeString("email", { nullable: !0 })
}) }), ag = $.objectRef("SchemaLicense").implement({ fields: (e) => ({
	name: e.exposeString("name"),
	url: e.exposeString("url", { nullable: !0 }),
	identifier: e.exposeString("identifier", { nullable: !0 })
}) }), og = $.objectRef("SchemaExternalDocs").implement({ fields: (e) => ({
	description: e.exposeString("description", { nullable: !0 }),
	url: e.exposeString("url")
}) }), sg = $.objectRef("SchemaTag");
sg.implement({ fields: (e) => ({
	name: e.exposeString("name", { nullable: !0 }),
	slug: e.exposeString("slug", { nullable: !0 }),
	isUntagged: e.field({
		type: "Boolean",
		resolve: (e) => !e.name
	}),
	description: e.exposeString("description", { nullable: !0 }),
	operations: e.field({
		type: [Ag],
		resolve: (e, t, n) => {
			let r = n.tags.map((e) => e.name);
			return n.operations.filter((t) => e.name ? t.tags?.includes(e.name) : t.tags?.length === 0 || t.tags?.every((e) => !r.includes(e))).map((t) => ({
				...t,
				parentTag: e.name
			}));
		}
	}),
	prev: e.field({
		type: sg,
		nullable: !0,
		resolve: (e, t, n) => {
			let r = n.tags.findIndex((t) => t.slug === e.slug);
			return n.tags[r - 1];
		}
	}),
	next: e.field({
		type: sg,
		nullable: !0,
		resolve: (e, t, n) => {
			let r = n.tags.findIndex((t) => t.slug === e.slug);
			return n.tags[r + 1];
		}
	}),
	extensions: e.field({
		type: Zh,
		resolve: (e) => $h(e),
		nullable: !0
	})
}) });
var cg = $.objectRef("Server").implement({ fields: (e) => ({
	url: e.exposeString("url"),
	description: e.exposeString("description", { nullable: !0 })
}) }), lg = $.objectRef("WebhookItem").implement({ fields: (e) => ({
	name: e.exposeString("name"),
	method: e.exposeString("method"),
	summary: e.exposeString("summary", { nullable: !0 }),
	description: e.exposeString("description", { nullable: !0 }),
	operationId: e.exposeString("operationId", { nullable: !0 })
}) }), ug = $.enumType("SecuritySchemeType", { values: [
	"apiKey",
	"http",
	"oauth2",
	"openIdConnect",
	"mutualTLS"
] }), dg = $.enumType("SecuritySchemeIn", { values: [
	"header",
	"query",
	"cookie"
] }), fg = $.objectRef("OAuthScopeItem").implement({ fields: (e) => ({
	name: e.exposeString("name"),
	description: e.exposeString("description")
}) }), pg = $.objectRef("OAuthFlowItem").implement({ fields: (e) => ({
	authorizationUrl: e.exposeString("authorizationUrl", { nullable: !0 }),
	tokenUrl: e.exposeString("tokenUrl", { nullable: !0 }),
	refreshUrl: e.exposeString("refreshUrl", { nullable: !0 }),
	scopes: e.field({
		type: [fg],
		resolve: (e) => Object.entries(e.scopes ?? {}).map(([e, t]) => ({
			name: e,
			description: t
		}))
	})
}) }), mg = $.objectRef("OAuthFlowsItem").implement({ fields: (e) => ({
	implicit: e.field({
		type: pg,
		resolve: (e) => e.implicit ?? null,
		nullable: !0
	}),
	password: e.field({
		type: pg,
		resolve: (e) => e.password ?? null,
		nullable: !0
	}),
	clientCredentials: e.field({
		type: pg,
		resolve: (e) => e.clientCredentials ?? null,
		nullable: !0
	}),
	authorizationCode: e.field({
		type: pg,
		resolve: (e) => e.authorizationCode ?? null,
		nullable: !0
	})
}) }), hg = $.objectRef("SecuritySchemeItem").implement({ fields: (e) => ({
	name: e.exposeString("name"),
	type: e.field({
		type: ug,
		resolve: (e) => e.type
	}),
	description: e.exposeString("description", { nullable: !0 }),
	in: e.field({
		type: dg,
		resolve: (e) => e.in ?? null,
		nullable: !0
	}),
	paramName: e.exposeString("paramName", { nullable: !0 }),
	scheme: e.exposeString("scheme", { nullable: !0 }),
	bearerFormat: e.exposeString("bearerFormat", { nullable: !0 }),
	openIdConnectUrl: e.exposeString("openIdConnectUrl", { nullable: !0 }),
	flows: e.field({
		type: mg,
		resolve: (e) => e.flows ?? null,
		nullable: !0
	}),
	extensions: e.field({
		type: Zh,
		resolve: (e) => e.extensions ?? null,
		nullable: !0
	})
}) }), gg = $.objectRef("SecurityRequirementScheme").implement({ fields: (e) => ({
	scheme: e.field({
		type: hg,
		resolve: (e) => e.scheme
	}),
	scopes: e.stringList({ resolve: (e) => e.scopes })
}) }), _g = $.objectRef("SecurityRequirementItem").implement({ fields: (e) => ({ schemes: e.field({
	type: [gg],
	resolve: (e) => e.schemes
}) }) }), vg = (e) => {
	let t = e.components?.securitySchemes ?? {};
	return Object.entries(t).map(([e, t]) => ({
		name: e,
		type: t.type,
		description: t.description,
		in: t.in,
		paramName: t.name,
		scheme: t.scheme,
		bearerFormat: t.bearerFormat,
		openIdConnectUrl: t.openIdConnectUrl,
		flows: t.flows,
		extensions: $h(t)
	}));
}, yg = (e, t) => e ? e.map((e) => ({ schemes: Object.entries(e).filter(([e]) => !e.startsWith("__")).flatMap(([e, n]) => {
	let r = t.find((t) => t.name === e);
	return r ? [{
		scheme: r,
		scopes: n
	}] : [];
}) })) : [], bg = (e) => {
	let t = e.webhooks ?? {};
	return Object.entries(t).flatMap(([e, t]) => Lp.flatMap((n) => {
		let r = t?.[n];
		return r ? {
			name: e,
			method: n.toUpperCase(),
			summary: r.summary,
			description: r.description,
			operationId: r.operationId
		} : [];
	}));
}, xg = $.objectRef("PathItem").implement({ fields: (e) => ({
	path: e.exposeString("path"),
	methods: e.exposeStringList("methods")
}) }), Sg = $.objectRef("TagItem").implement({ fields: (e) => ({
	name: e.exposeString("name"),
	description: e.exposeString("description", { nullable: !0 }),
	extensions: e.field({
		type: Zh,
		resolve: (e) => $h(e),
		nullable: !0
	})
}) }), Cg = $.objectRef("EncodingItem").implement({ fields: (e) => ({
	name: e.exposeString("name"),
	contentType: e.exposeString("contentType", { nullable: !0 }),
	headers: e.expose("headers", {
		type: Zh,
		nullable: !0
	}),
	style: e.exposeString("style", { nullable: !0 }),
	explode: e.exposeBoolean("explode", { nullable: !0 }),
	allowReserved: e.exposeBoolean("allowReserved", { nullable: !0 })
}) }), wg = $.objectRef("ExampleItem").implement({ fields: (e) => ({
	name: e.exposeString("name"),
	summary: e.exposeString("summary", { nullable: !0 }),
	description: e.exposeString("description", { nullable: !0 }),
	value: e.expose("value", {
		type: Xh,
		nullable: !0
	}),
	externalValue: e.exposeString("externalValue", { nullable: !0 })
}) }), Tg = $.enumType("ParameterIn", { values: [
	"query",
	"header",
	"path",
	"cookie"
] }), Eg = $.objectRef("ParameterItem").implement({ fields: (e) => ({
	name: e.exposeString("name"),
	in: e.field({
		type: Tg,
		resolve: (e) => e.in
	}),
	description: e.exposeString("description", { nullable: !0 }),
	required: e.exposeBoolean("required", { nullable: !0 }),
	deprecated: e.exposeBoolean("deprecated", { nullable: !0 }),
	allowEmptyValue: e.exposeBoolean("allowEmptyValue", { nullable: !0 }),
	style: e.exposeString("style", { nullable: !0 }),
	explode: e.exposeBoolean("explode", { nullable: !0 }),
	allowReserved: e.exposeBoolean("allowReserved", { nullable: !0 }),
	examples: e.field({
		type: [wg],
		resolve: (e) => Object.entries(e.examples ?? {}).map(([e, t]) => ({
			name: e,
			...typeof t == "string" ? { value: t } : t
		})),
		nullable: !0
	}),
	schema: e.expose("schema", {
		type: Qh,
		nullable: !0
	}),
	extensions: e.field({
		type: Zh,
		resolve: (e) => $h(e),
		nullable: !0
	})
}) }), Dg = $.objectRef("MediaTypeObject").implement({ fields: (e) => ({
	mediaType: e.exposeString("mediaType"),
	schema: e.expose("schema", {
		type: Qh,
		nullable: !0
	}),
	examples: e.expose("examples", {
		type: [wg],
		nullable: !0
	}),
	encoding: e.expose("encoding", {
		type: [Cg],
		nullable: !0
	})
}) }), Og = $.objectRef("RequestBodyObject").implement({ fields: (e) => ({
	description: e.exposeString("description", { nullable: !0 }),
	content: e.expose("content", {
		type: [Dg],
		nullable: !0
	}),
	required: e.exposeBoolean("required", { nullable: !0 })
}) }), kg = $.objectRef("ResponseItem").implement({ fields: (e) => ({
	statusCode: e.exposeString("statusCode"),
	description: e.exposeString("description", { nullable: !0 }),
	content: e.expose("content", {
		type: [Dg],
		nullable: !0
	}),
	headers: e.expose("headers", {
		type: Xh,
		nullable: !0
	}),
	links: e.expose("links", {
		type: Xh,
		nullable: !0
	}),
	extensions: e.field({
		type: Zh,
		resolve: (e) => $h(e),
		nullable: !0
	})
}) }), Ag = $.objectRef("OperationItem").implement({ fields: (e) => ({
	slug: e.field({
		type: "String",
		resolve: (e, t, n) => {
			let r = n.slugs.operations[ng(e)];
			if (!r) throw Error(`No slug found for operation: ${ng(e)}`);
			return r;
		}
	}),
	path: e.exposeString("path"),
	method: e.exposeString("method"),
	operationId: e.exposeString("operationId", { nullable: !0 }),
	summary: e.exposeString("summary", { nullable: !0 }),
	description: e.exposeString("description", { nullable: !0 }),
	contentTypes: e.stringList({ resolve: (e) => Object.keys(e.requestBody?.content ?? {}) }),
	parameters: e.expose("parameters", {
		type: [Eg],
		nullable: !0
	}),
	servers: e.field({
		type: [cg],
		resolve: (e, t, n) => e.servers && e.servers.length > 0 ? e.servers : n.schema.servers ?? []
	}),
	requestBody: e.field({
		type: Og,
		resolve: (e) => ({
			description: e.requestBody?.description,
			required: e.requestBody?.required,
			content: Object.entries(e.requestBody?.content ?? {}).map(([e, t]) => ({
				mediaType: e,
				schema: t.schema,
				examples: t.examples ? Object.entries(t.examples).map(([e, t]) => ({
					name: e,
					...typeof t == "string" ? { value: t } : t
				})) : t.example === void 0 ? [] : [{
					name: "",
					value: t.example
				}],
				encoding: Object.entries(t.encoding ?? {}).map(([e, t]) => ({
					name: e,
					...t
				}))
			}))
		}),
		nullable: !0
	}),
	responses: e.field({
		type: [kg],
		resolve: (e) => Object.entries(e.responses ?? {}).map(([e, t]) => ({
			statusCode: e,
			description: t.description,
			content: Object.entries(t.content ?? {}).map(([e, { schema: t, examples: n, example: r }]) => ({
				mediaType: e,
				schema: t,
				examples: n ? Object.entries(n).map(([e, t]) => ({
					name: e,
					...typeof t == "string" ? { value: t } : t
				})) : r === void 0 ? [] : [{
					name: "",
					value: r
				}]
			})),
			headers: t.headers,
			links: t.links
		}))
	}),
	tags: e.field({
		type: [Sg],
		resolve: (e, t, n) => e.tags?.map((e) => ({
			name: e,
			description: n.schema.tags?.find((t) => t.name === e)?.description
		})),
		nullable: !0
	}),
	deprecated: e.exposeBoolean("deprecated", { nullable: !0 }),
	security: e.field({
		type: [_g],
		nullable: !0,
		resolve: (e, t, n) => {
			let r = vg(n.schema), i = e.security ?? n.schema.security;
			return i ? yg(i, r) : null;
		}
	}),
	extensions: e.field({
		type: Zh,
		resolve: (e) => $h(e),
		nullable: !0
	})
}) }), jg = $.objectRef("SchemaItem").implement({ fields: (e) => ({
	name: e.exposeString("name"),
	schema: e.expose("schema", { type: Qh }),
	extensions: e.expose("extensions", {
		type: Zh,
		nullable: !0
	})
}) }), Mg = $.objectRef("Components");
Mg.implement({ fields: (e) => ({
	schemas: e.field({
		type: [jg],
		resolve: (e) => Object.entries(e.schemas ?? {}).map(([e, t]) => ({
			name: e,
			schema: t,
			extensions: $h(t)
		})),
		nullable: !0
	}),
	securitySchemes: e.field({
		type: [hg],
		resolve: (e, t, n) => vg(n.schema),
		nullable: !0
	})
}) });
var Ng = $.objectRef("Schema").implement({ fields: (e) => ({
	openapi: e.string({ resolve: (e) => e.openapi }),
	url: e.string({
		resolve: (e) => e.servers?.at(0)?.url,
		nullable: !0
	}),
	servers: e.field({
		type: [cg],
		resolve: (e) => e.servers ?? []
	}),
	title: e.string({ resolve: (e) => e.info.title }),
	version: e.string({ resolve: (e) => e.info.version }),
	description: e.string({
		resolve: (e) => e.info.description,
		nullable: !0
	}),
	summary: e.string({
		resolve: (e) => e.info.summary,
		nullable: !0
	}),
	contact: e.field({
		type: ig,
		nullable: !0,
		resolve: (e) => e.info.contact ?? null
	}),
	license: e.field({
		type: ag,
		nullable: !0,
		resolve: (e) => e.info.license ?? null
	}),
	termsOfService: e.string({
		resolve: (e) => e.info.termsOfService,
		nullable: !0
	}),
	externalDocs: e.field({
		type: og,
		nullable: !0,
		resolve: (e) => e.externalDocs ?? null
	}),
	paths: e.field({
		type: [xg],
		resolve: (e) => Object.entries(e.paths ?? {}).map(([e, t]) => ({
			path: e,
			methods: Object.keys(t)
		}))
	}),
	tag: e.field({
		type: sg,
		args: {
			slug: e.arg.string(),
			name: e.arg.string(),
			untagged: e.arg.boolean()
		},
		nullable: !0,
		resolve: (e, t, n) => {
			if (t.untagged) return n.tags.find((e) => e.name === void 0);
			if (t.slug) return n.tags.find((e) => e.slug === t.slug);
			if (t.name) return n.tags.find((e) => e.name === t.name);
		}
	}),
	tags: e.field({
		type: [sg],
		resolve: (e, t, n) => n.tags
	}),
	operations: e.field({
		type: [Ag],
		args: {
			path: e.arg.string(),
			method: e.arg.string(),
			operationId: e.arg.string(),
			tag: e.arg.string(),
			untagged: e.arg.boolean()
		},
		resolve: (e, t, n) => n.operations.filter((e) => (!t.operationId || e.operationId === t.operationId) && (!t.path || e.path === t.path) && (!t.method || e.method === t.method) && (!t.tag || e.tags?.some((e) => t.tag?.includes(e))) && (!t.untagged || (e.tags ?? []).length === 0))
	}),
	webhooks: e.field({
		type: [lg],
		resolve: (e) => bg(e)
	}),
	components: e.field({
		type: Mg,
		resolve: (e) => e.components,
		nullable: !0
	}),
	security: e.field({
		type: [_g],
		nullable: !0,
		resolve: (e) => {
			let t = vg(e);
			return e.security ? yg(e.security, t) : null;
		}
	}),
	extensions: e.field({
		type: Zh,
		resolve: (e) => $h(e),
		nullable: !0
	})
}) }), Pg = $.enumType("SchemaType", { values: [
	"url",
	"file",
	"raw"
] });
$.queryType({ fields: (e) => ({ schema: e.field({
	type: Ng,
	args: {
		type: e.arg({
			type: Pg,
			required: !0
		}),
		input: e.arg({
			type: Xh,
			required: !0
		})
	},
	resolve: async (e, t, n) => {
		if (t.type === "file" && typeof t.input == "string") {
			let e = n.schemaImports?.[t.input];
			if (!e) throw Error(`No schema loader found for path: ${t.input}`);
			n.schema = (await e()).schema;
		} else n.schema = await zp(t.input);
		return n.operations = rg(n.schema.paths), n.slugs = tg(n.operations, n.schema.tags), n.tags = eg(n.schema), n.schema;
	}
}) }) });
var Fg = $.toSchema(), Ig = (e) => mf({
	schema: Fg,
	batching: !0,
	...e
}), Lg = (e) => Ig({
	context: { schemaImports: e.schemaImports },
	plugins: [oe({ logFn: (e, { args: t }) => {} })]
});
//#endregion
export { Lg as createServer };
