import { u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { c as collections, i as Footer } from "./router-n_pcLFC8.mjs";
import { t as CollectionBlock } from "./collection-block-ZcP9RyB8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/works-jwvK5IXA.js
var import_jsx_runtime = require_jsx_runtime();
function Works() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-ink pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line px-5 py-14 md:px-12 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: "Selected plates"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "section-title mt-4",
						children: "Works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-6 max-w-[48ch]",
						children: "Collections from the last sittings. Hover a still — the graphite is still underneath. Click to open the plate."
					})
				]
			}),
			collections.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionBlock, { collection: c }, c.slug)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Works as component };
