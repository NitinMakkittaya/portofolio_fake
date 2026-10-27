import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { a as useMounted, d as stages, i as Footer, s as cn } from "./router-n_pcLFC8.mjs";
import { t as InView } from "./in-view-BXa3E-Ub.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-CwdoqgKw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Studio3D = (0, import_react.lazy)(() => import("./studio-3d-D8ATlXIY.mjs"));
var MODE = {
	mark: "mark",
	bone: "bone",
	clay: "clay",
	light: "light"
};
function Process() {
	const mounted = useMounted();
	const [id, setId] = (0, import_react.useState)("mark");
	const stage = stages.find((s) => s.id === id) ?? stages[0];
	const [split, setSplit] = (0, import_react.useState)(48);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-ink pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "px-5 py-14 md:px-12 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: "From mark to motion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "section-title mt-4",
						children: "Process"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-6 max-w-[50ch]",
						children: "Drag the form. Switch the stage. The same body, four drafts — graphite, wire, clay, light. Nothing here is a template. It is a sitting you can turn."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid border-y border-line lg:grid-cols-[1fr_22rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[70vh] min-h-[420px] bg-ink-2",
					children: [mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
						fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-ink-2" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio3D, { mode: MODE[id] ?? "mark" })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-ink-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta pointer-events-none absolute bottom-5 left-5",
						children: "Drag to orbit · scroll to scale"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "flex flex-col justify-between border-l border-line p-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: stages.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setId(s.id),
						className: cn("block w-full border-b border-line py-4 text-left transition-colors", s.id === id ? "text-paper" : "text-graphite hover:text-paper"),
						"data-cursor": "hot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "meta",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-display text-3xl",
							children: s.title
						})]
					}, s.id)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-8",
						children: stage?.copy
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 py-16 md:px-12 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InView, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: "Under the still"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title mt-3",
						children: "Sketch holds the cinema"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-5",
						children: "Drag the seam. Left is the page. Right is the beauty pass. This is how every plate on the site is built."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-10 h-[58vh] min-h-[320px] overflow-hidden bg-ink-2",
					onPointerMove: (e) => {
						const r = e.currentTarget.getBoundingClientRect();
						setSplit((e.clientX - r.left) / r.width * 100);
					},
					"data-cursor": "hot",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/mira-beauty.jpg",
							alt: "CGI beauty pass",
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/mira-beauty-sk.jpg",
							alt: "Graphite underdrawing",
							className: "absolute inset-0 h-full w-full object-cover",
							style: { clipPath: `inset(0 ${100 - split}% 0 0)` }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 z-[1] h-full w-px bg-paper",
							style: { left: `${split}%` }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "meta absolute left-4 top-4",
							children: "Graphite"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "meta absolute right-4 top-4",
							children: "Cinema"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Process as component };
