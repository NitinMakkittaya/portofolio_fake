import { u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as tools, i as Footer, r as ClientDust } from "./router-n_pcLFC8.mjs";
import { t as InView } from "./in-view-BXa3E-Ub.mjs";
import { t as SketchReveal } from "./sketch-reveal-BthtKg85.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BUZi-s0u.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative bg-ink pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientDust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid items-end gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: "The atelier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "section-title mt-4",
						children: ["A draughtsman", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block italic",
							children: "who learned weather."
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InView, {
						delay: 120,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy mt-8 max-w-[46ch]",
							children: "Veln works where a pencil line is asked to become atmosphere. The practice began on cream stock — years of observational drawing, charcoal that scars the page — and moved, without abandoning the page, into lookdev, volume, and the long composite."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy mt-4 max-w-[46ch]",
							children: "The drawings are not concept art to be discarded. They are the bones. Hover any finished still in the archive and the graphite is still there, waiting under the light."
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchReveal, {
					src: "/images/artist.jpg",
					sketch: "/images/artist-sk.jpg",
					alt: "Studio portrait, graphite on the fingers",
					size: "full",
					className: "min-h-[420px] w-full md:min-h-[560px]"
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-t border-line px-5 py-16 md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: "Instruments"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4",
					children: tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-line pt-3 font-display text-xl italic",
						children: t
					}, t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-10 border-t border-line px-5 py-16 md:grid-cols-3 md:px-12",
				children: [
					{
						n: "01",
						t: "Sketch",
						d: "A sitting on paper until the weight is true."
					},
					{
						n: "02",
						t: "Solve",
						d: "Topology, volume, the skeleton light will obey."
					},
					{
						n: "03",
						t: "Breathe",
						d: "Lookdev, grain, the last drawing on the beauty pass."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InView, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: s.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl",
						children: s.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-3",
						children: s.d
					})
				] }, s.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-t border-line px-5 py-16 md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-title max-w-3xl",
					children: ["Open for the work that still begins", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic",
						children: " on a page."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "see-link mt-10",
					"data-cursor": "hot",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line" }), "Write to the studio"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { About as component };
