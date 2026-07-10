import { Lt as e, Rt as t, zt as n } from "./main-CQFzjeJU.js";
import { t as r } from "./useQuery-B8Uxp7FM.js";
//#region src/lib/plugins/openapi/util/useWarmupSchema.ts
var i = t("\n  query SchemaWarmup($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      openapi\n    }\n  }\n"), a = () => {
	let { input: t, type: a } = e();
	r({
		...n(i, {
			input: t,
			type: a
		}),
		enabled: typeof window < "u",
		notifyOnChangeProps: []
	});
};
//#endregion
export { a as t };
