import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { R as notFound, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as collections, i as Footer, l as getCollection, n as Route } from "./router-n_pcLFC8.mjs";
import { t as InView } from "./in-view-BXa3E-Ub.mjs";
import { t as SketchReveal } from "./sketch-reveal-BthtKg85.mjs";
import { t as Lightbox } from "./lightbox-DyKaTvjJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/works._slug-CQ6myWcR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CollectionPage() {
	const { slug } = Route.useParams();
	const c = getCollection(slug);
	const [open, setOpen] = (0, import_react.useState)(null);
	if (!c) throw notFound();
	const next = collections[(collections.findIndex((x) => x.slug === c.slug) + 1) % collections.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-ink pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "grid gap-10 border-b border-line px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "meta",
					children: [
						c.category,
						" · ",
						c.date
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "section-title mt-4",
					children: c.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col justify-end gap-4",
					children: c.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy max-w-[44ch]",
						children: p
					}, p))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid grid-cols-2 gap-3 px-3 py-6 md:grid-cols-12 md:gap-5 md:px-12 md:py-14",
				children: c.images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, {
					className: i % 5 === 0 ? "col-span-2 md:col-span-7" : i % 5 === 1 ? "col-span-2 md:col-span-5" : i % 5 === 2 ? "col-span-1 md:col-span-4" : i % 5 === 3 ? "col-span-1 md:col-span-4" : "col-span-2 md:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchReveal, {
						...img,
						size: "full",
						className: "h-full min-h-[220px] w-full md:min-h-[320px]",
						onOpen: () => setOpen(i)
					})
				}, img.src + i))
			}),
			next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-t border-line px-5 py-10 md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: "Next sitting"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/works/$slug",
					params: { slug: next.slug },
					className: "see-link",
					"data-cursor": "hot",
					children: [next.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line" })]
				})]
			}) : null,
			open !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				images: c.images,
				index: open,
				onClose: () => setOpen(null),
				onIndex: setOpen
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CollectionPage as component };
