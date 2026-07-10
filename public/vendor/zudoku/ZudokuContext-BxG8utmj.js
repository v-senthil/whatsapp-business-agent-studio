import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { f as n, g as r, n as i, t as a } from "./joinUrl-51baNiN4.js";
import { o, t as s } from "./dist-CyinVPgs.js";
import { t as c } from "./useQuery-B8Uxp7FM.js";
//#region ../../node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.7_use-sync-external-store@1.6.0_react@19.2.7_/node_modules/zustand/esm/vanilla.mjs
var l = /* @__PURE__ */ e(t(), 1), u = (e) => {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (!Object.is(i, t)) {
			let e = t;
			t = r ?? (typeof i != "object" || !i) ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = {
		setState: r,
		getState: i,
		getInitialState: () => o,
		subscribe: (e) => (n.add(e), () => n.delete(e))
	}, o = t = e(r, i, a);
	return a;
}, d = ((e) => e ? u(e) : u), f = (e) => e;
function p(e, t = f) {
	let n = l.useSyncExternalStore(e.subscribe, l.useCallback(() => t(e.getState()), [e, t]), l.useCallback(() => t(e.getInitialState()), [e, t]));
	return l.useDebugValue(n), n;
}
var m = (e) => {
	let t = d(e), n = (e) => p(t, e);
	return Object.assign(n, t), n;
}, h = ((e) => e ? m(e) : m);
//#endregion
//#region ../../node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.7_use-sync-external-store@1.6.0_react@19.2.7_/node_modules/zustand/esm/middleware.mjs
function g(e, t) {
	let n;
	try {
		n = e();
	} catch {
		return;
	}
	return {
		getItem: (e) => {
			let r = (e) => e === null ? null : JSON.parse(e, t?.reviver), i = n.getItem(e) ?? null;
			return i instanceof Promise ? i.then(r) : r(i);
		},
		setItem: (e, r) => n.setItem(e, JSON.stringify(r, t?.replacer)),
		removeItem: (e) => n.removeItem(e)
	};
}
var _ = (e) => (t) => {
	try {
		let n = e(t);
		return n instanceof Promise ? n : {
			then(e) {
				return _(e)(n);
			},
			catch(e) {
				return this;
			}
		};
	} catch (e) {
		return {
			then(e) {
				return this;
			},
			catch(t) {
				return _(t)(e);
			}
		};
	}
}, v = (e, t) => (n, r, i) => {
	let a = {
		storage: g(() => window.localStorage),
		partialize: (e) => e,
		version: 0,
		merge: (e, t) => ({
			...t,
			...e
		}),
		...t
	}, o = !1, s = 0, c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = a.storage;
	if (!u) return e((...e) => {
		console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), n(...e);
	}, r, i);
	let d = () => {
		let e = a.partialize({ ...r() });
		return u.setItem(a.name, {
			state: e,
			version: a.version
		});
	}, f = i.setState;
	i.setState = (e, t) => (f(e, t), d());
	let p = e((...e) => (n(...e), d()), r, i);
	i.getInitialState = () => p;
	let m, h = () => {
		if (!u) return;
		let e = ++s;
		o = !1, c.forEach((e) => e(r() ?? p));
		let t = a.onRehydrateStorage?.call(a, r() ?? p) || void 0;
		return _(u.getItem.bind(u))(a.name).then((e) => {
			if (e) if (typeof e.version == "number" && e.version !== a.version) {
				if (a.migrate) {
					let t = a.migrate(e.state, e.version);
					return t instanceof Promise ? t.then((e) => [!0, e]) : [!0, t];
				}
				console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
			} else return [!1, e.state];
			return [!1, void 0];
		}).then((t) => {
			if (e !== s) return;
			let [i, o] = t;
			if (m = a.merge(o, r() ?? p), n(m, !0), i) return d();
		}).then(() => {
			e === s && (t?.(r(), void 0), m = r(), o = !0, l.forEach((e) => e(m)));
		}).catch((n) => {
			e === s && t?.(void 0, n);
		});
	};
	return i.persist = {
		setOptions: (e) => {
			a = {
				...a,
				...e
			}, e.storage && (u = e.storage);
		},
		clearStorage: () => {
			u?.removeItem(a.name);
		},
		getOptions: () => a,
		rehydrate: () => h(),
		hasHydrated: () => o,
		onHydrate: (e) => (c.add(e), () => {
			c.delete(e);
		}),
		onFinishHydration: (e) => (l.add(e), () => {
			l.delete(e);
		})
	}, a.skipHydration || h(), m || p;
}, y = (e) => {
	let t = (t) => {
		t.key === e.persist.getOptions().name && t.newValue && e.persist.rehydrate();
	};
	if (!(typeof window > "u")) return window.addEventListener("storage", t), () => {
		window.removeEventListener("storage", t);
	};
}, b = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
}, x = typeof window < "u" ? window.ZUDOKU_SSR_AUTH : void 0, S = void 0, C = h()(v((e) => ({
	isAuthenticated: !!x?.profile,
	isPending: x === void 0,
	profile: x?.profile ?? null,
	providerData: null,
	setAuthenticationPending: () => e(() => ({
		isAuthenticated: !1,
		isPending: !1,
		profile: null,
		providerData: null
	})),
	setLoggedOut: () => e(() => ({
		isAuthenticated: !1,
		isPending: !1,
		profile: null,
		providerData: null
	})),
	setLoggedIn: ({ profile: t, providerData: n }) => e(() => ({
		isAuthenticated: !0,
		isPending: !1,
		profile: t,
		providerData: n
	}))
}), {
	merge: (e, t) => ({
		...t,
		isPending: !1,
		...typeof e == "object" ? e : {}
	}),
	name: "auth-state",
	storage: g(() => typeof window > "u" || S ? b : localStorage)
}));
y(C);
var w = C, T = (e) => /^-?\d+$/.test(e) ? {
	type: "index",
	value: Number(e)
} : {
	type: "label",
	value: e
}, E = (e) => e.split("/").filter(Boolean), ee = (e, t, n, r) => {
	switch (e.type) {
		case "index": return (e.value < 0 ? r + e.value : e.value) === n;
		case "label": return t.label?.toLowerCase() === e.value.toLowerCase();
	}
}, D = (e, t) => {
	if (!t) return;
	if (t === "/") return {
		parentItems: e,
		isRoot: !0
	};
	let n = E(t).map(T);
	if (n.length === 0) return;
	let r = e;
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (!t) return;
		let i = r.findIndex((e, n) => ee(t, e, n, r.length));
		if (i === -1) return;
		let a = r[i];
		if (!a) return;
		if (e === n.length - 1) return {
			item: a,
			parentItems: r,
			index: i
		};
		if (a.type !== "category") return;
		r = a.items;
	}
}, O = [
	"doc",
	"link",
	"category",
	"section"
], k = (e) => O.some((t) => t === e.type), A = (e) => e.map((e) => e.type === "category" ? {
	...e,
	items: A(e.items)
} : { ...e }), j = (e, t) => {
	if (!t) return e;
	let n = e.split("/").filter(Boolean), r = n[0];
	if (!r) return e;
	if (!Number.isNaN(Number(r))) return n.length > 1 ? void 0 : e;
	if (r.toLowerCase() === t.toLowerCase()) return n.slice(1).join("/") || "/";
	if (!(n.length > 1)) return e;
}, M = (e, t, n) => {
	let r = A(e), i = [];
	for (let e of t) {
		let t = j(e.match, n);
		if (t === void 0) continue;
		let a = D(r, t);
		if (!a) {
			i.push(`Rule target "${e.match}" not found`);
			continue;
		}
		if (a.isRoot) {
			e.type === "sort" ? r.sort((t, n) => k(t) && k(n) ? e.by(t, n) : 0) : i.push(`Rule type "${e.type}" cannot target the root level`);
			continue;
		}
		switch (e.type) {
			case "remove":
				a.parentItems.splice(a.index, 1);
				break;
			case "modify":
				a.parentItems[a.index] = {
					...a.item,
					...e.set
				};
				break;
			case "insert": {
				let t = +(e.position === "after");
				a.parentItems.splice(a.index + t, 0, ...e.items);
				break;
			}
			case "sort": {
				let t = a.item.type === "category" ? a.item.items : void 0;
				t ? t.sort((t, n) => k(t) && k(n) ? e.by(t, n) : 0) : i.push(`Sort target "${e.match}" is not a category`);
				break;
			}
			case "move": {
				let t = j(e.to, n);
				if (t === void 0) break;
				let [o] = a.parentItems.splice(a.index, 1);
				if (!o) break;
				let s = D(r, t);
				if (!s || s.isRoot) {
					i.push(`Move target "${e.to}" not found`), a.parentItems.splice(a.index, 0, o);
					break;
				}
				let c = +(e.position === "after");
				s.parentItems.splice(s.index + c, 0, o);
				break;
			}
		}
	}
	return {
		result: r,
		warnings: i
	};
}, N = Object.freeze({ API_IDENTITIES: ["api-identities"] }), P = () => {
	let e = o();
	return { invalidateCache: (0, l.useCallback)((t) => e.invalidateQueries({ queryKey: N[t] }), [e]) };
}, F = (e, t) => {
	for (let n of e) {
		let e = I(n, t);
		if (e !== void 0) return e;
	}
}, I = (e, t, n = []) => {
	let r = t(e, n);
	if (r !== void 0) return r;
	if (e.type === "category") for (let r of e.items) {
		let i = I(r, t, [...n, e]);
		if (i !== void 0) return i;
	}
}, L = (e) => e.type === "doc" ? e.path : e.to, R = (e) => {
	switch (e.type) {
		case "doc":
		case "custom-page": return a(e.path);
		case "link": return e.to;
		case "category": return e.link ? a(L(e.link)) : void 0;
		default: return;
	}
}, z = (e) => {
	switch (e.type) {
		case "doc":
		case "custom-page": return a(e.path);
		case "link": return e.to;
		case "category": return e.link ? a(L(e.link)) : I(e, (e) => {
			if (e.type !== "category" && e.type !== "separator" && e.type !== "section" && e.type !== "filter") return z(e);
		}) ?? "";
		default: return "";
	}
}, B = (e) => a(e.split("?").at(0)?.split("#").at(0) ?? ""), V = (e) => R(e) ?? z(e), H = (e) => e.link ? a(L(e.link)) : z(e), U = (e) => e.type + (e.label ?? "") + ("path" in e ? e.path : "") + ("file" in e ? e.file : "") + ("to" in e ? e.to : ""), W = (e, t) => [a(e), t].filter(Boolean).join("#"), G = (e, t, n) => {
	let r = e.includes("#");
	return {
		isActive: e === W(t.pathname, r ? t.activeAnchor : void 0),
		isPending: n ? e === W(n.pathname, n.hash.slice(1)) : !1
	};
}, K = (e) => {
	let t = a(r().pathname);
	return I(e, (e) => {
		switch (e.type) {
			case "category": return e.link && a(L(e.link)) === t ? !0 : void 0;
			case "custom-page":
			case "doc": return a(e.path) === t ? !0 : void 0;
			case "link": return a(e.to) === t ? !0 : void 0;
			default: return;
		}
	});
}, q = () => {
	let e = a(r().pathname), { navigation: t } = $(), n, i, o = !1;
	return F(t, (t) => {
		if (t.type === "separator" || t.type === "section" || t.type === "filter") return;
		let r = t.type === "doc" ? a(t.path) : t.type === "category" && t.link ? a(L(t.link)) : void 0;
		if (r) {
			if (o) return i = {
				label: t.label,
				id: r
			}, !0;
			e === r ? o = !0 : n = {
				label: t.label,
				id: r
			};
		}
	}), {
		prev: n,
		next: i
	};
}, J = s("relative flex items-center gap-2 px-(--padding-nav-item) my-px py-1.5 rounded-lg hover:bg-accent tabular-nums", {
	variants: {
		isActive: {
			true: "bg-accent font-medium",
			false: "text-foreground/80"
		},
		isMuted: {
			true: "text-foreground/30",
			false: ""
		},
		isPending: {
			true: "bg-accent animate-pulse",
			false: ""
		}
	},
	defaultVariants: { isActive: !1 }
}), Y = (e, t) => [
	"separator",
	"section",
	"filter"
].includes(e.type) || e.label?.toLowerCase().includes(t.toLowerCase()) ? !0 : e.type === "category" ? e.items.some((e) => Y(e, t)) : !1, X = ({ auth: e, context: t, filterQuery: n }) => (r) => r.type === "filter" ? !0 : n?.trim() && !Y(r, n) ? !1 : typeof r.display == "function" ? r.display({
	context: t,
	auth: e
}) : r.display === "hide" || !r.label ? !1 : r.display === "auth" && e.isAuthenticated || r.display === "anon" && !e.isAuthenticated || !r.display || r.display === "always";
//#endregion
//#region src/lib/components/context/ZudokuReactContext.tsx
globalThis.__ZUDOKU_CONTEXT ??= (0, l.createContext)(void 0);
var Z = globalThis.__ZUDOKU_CONTEXT, Q = () => {
	let e = (0, l.useContext)(Z);
	if (!e) throw Error("useZudoku must be used within a ZudokuProvider.");
	return e;
}, te = () => {
	let { getApiIdentities: e } = Q(), { isAuthenticated: t } = w(), { invalidateCache: n } = P();
	return (0, l.useEffect)(() => {
		t || n("API_IDENTITIES");
	}, [t, n]), c({
		queryFn: e,
		queryKey: N.API_IDENTITIES
	});
}, ne = (e) => {
	let t = /* @__PURE__ */ new Set(), n = (e) => {
		for (let r of e) {
			let e = R(r)?.split("?").at(0)?.split("#").at(0);
			e && t.add(e), r.type === "category" && n(r.items);
		}
	};
	return n(e), [...t];
}, $ = () => {
	let { getPluginNavigation: e, navigation: t, navigationRules: o } = Q(), s = r();
	(0, l.useRef)(/* @__PURE__ */ new Set());
	let c = a(s.pathname), u = F(t, (e, t) => {
		if (e.type !== "link" && R(e) === c) return t.at(0) ?? e;
	}), { isAuthenticated: d } = w(), { data: f } = i({
		queryFn: () => e(c),
		queryKey: [
			"plugin-navigation",
			c,
			d
		],
		staleTime: void 0
	}), p = u;
	if (!u && f.length > 0) {
		let e = ne(f);
		p = t.flatMap((e) => {
			let t = R(e);
			return t ? [{
				item: e,
				path: t
			}] : [];
		}).sort((e, t) => t.path.length - e.path.length).find(({ path: t }) => e.some((e) => n({
			path: t,
			end: !1
		}, e) ?? n({
			path: e,
			end: !1
		}, t)))?.item;
	}
	return {
		navigation: (0, l.useMemo)(() => {
			let e = [...p?.type === "category" ? p.items : [], ...f];
			if (p?.label && o.length > 0) {
				let { result: t, warnings: n } = M(e, o, p?.label);
				return t;
			}
			return e;
		}, [
			p,
			f,
			o
		]),
		topNavItem: p
	};
};
//#endregion
export { p as C, h as S, q as _, B as a, g as b, G as c, V as d, X as f, K as g, I as h, Z as i, U as l, F as m, $ as n, z as o, H as p, Q as r, R as s, te as t, J as u, w as v, d as w, v as x, y };
