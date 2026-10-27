import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as InView } from "./in-view-BXa3E-Ub.mjs";
import { t as SketchReveal } from "./sketch-reveal-BthtKg85.mjs";
import { t as Lightbox } from "./lightbox-DyKaTvjJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection-block-ZcP9RyB8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CollectionBlock({ collection, featured = false }) {
	const [open, setOpen] = (0, import_react.useState)(null);
	const c = collection;
	const imgs = c.images;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative border-b border-line px-5 py-16 md:px-12 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: c.category
				}), featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: "Featured"
				}) : null]
			}),
			c.layout === "a" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-[1fr_minmax(16rem,22rem)_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-end gap-4",
						children: imgs.slice(0, 2).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, {
							delay: i * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchReveal, {
								...img,
								onOpen: () => setOpen(i)
							})
						}, img.src + i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InView, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-display leading-[0.9] tracking-tight",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "meta mt-4",
								children: c.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-5 block h-px w-10 bg-line-strong" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy mt-6",
								children: c.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy mt-4",
								children: c.body[0]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/works/$slug",
								params: { slug: c.slug },
								className: "see-link mt-8",
								"data-cursor": "hot",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line" }), "See collection"]
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-start justify-end gap-4",
						children: imgs.slice(2, 5).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, {
							delay: i * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchReveal, {
								...img,
								onOpen: () => setOpen(i + 2)
							})
						}, img.src + i))
					})
				]
			}) : null,
			c.layout === "b" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-[auto_1fr_auto]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-4",
								children: imgs.slice(2, 4).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchReveal, {
									...img,
									onOpen: () => setOpen(i + 2)
								}) }, img.src))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, { children: imgs[1] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchReveal, {
								...imgs[1],
								onOpen: () => setOpen(1)
							}) : null }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/works/$slug",
								params: { slug: c.slug },
								className: "see-link",
								"data-cursor": "hot",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line" }), "See collection"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InView, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-display leading-[0.9] tracking-tight",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "meta mt-4",
							children: c.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-5 block h-px w-10 bg-line-strong" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy mt-6",
							children: c.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy mt-4",
							children: c.body[0]
						})
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, { children: imgs[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchReveal, {
						...imgs[0],
						onOpen: () => setOpen(0)
					}) : null })
				]
			}) : null,
			c.layout === "c" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-end gap-4",
					children: imgs.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchReveal, {
							...img,
							onOpen: () => setOpen(i)
						})
					}, img.src + i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InView, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-display leading-[0.9] tracking-tight",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta mt-4",
						children: c.date
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-5 block h-px w-10 bg-line-strong" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-6",
						children: c.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-4",
						children: c.body[0]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/works/$slug",
						params: { slug: c.slug },
						className: "see-link mt-8",
						"data-cursor": "hot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line" }), "See collection"]
					})
				] })]
			}) : null,
			open !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				images: imgs,
				index: open,
				onClose: () => setOpen(null),
				onIndex: setOpen
			}) : null
		]
	});
}
//#endregion
export { CollectionBlock as t };
