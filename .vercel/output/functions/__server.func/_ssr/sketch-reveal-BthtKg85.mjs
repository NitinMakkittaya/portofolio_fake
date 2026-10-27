import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { s as cn } from "./router-n_pcLFC8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sketch-reveal-BthtKg85.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SketchReveal({ src, sketch, alt, size = "md", className, onOpen }) {
	const [pos, setPos] = (0, import_react.useState)({
		x: 50,
		y: 50,
		on: false
	});
	const move = (0, import_react.useCallback)((e) => {
		const r = e.currentTarget.getBoundingClientRect();
		setPos({
			x: (e.clientX - r.left) / r.width * 100,
			y: (e.clientY - r.top) / r.height * 100,
			on: true
		});
	}, []);
	const sizeClass = size === "full" ? "w-full h-full" : `size-${size}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("work-img group", sizeClass, className),
		onMouseMove: sketch ? move : void 0,
		onMouseLeave: () => setPos((p) => ({
			...p,
			on: false
		})),
		"data-cursor": "hot",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute inset-0 z-10",
				onClick: onOpen,
				"aria-label": `Open ${alt}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: "cgi"
			}),
			sketch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: sketch,
				alt: "",
				className: "sketch-layer",
				style: {
					maskImage: pos.on ? `radial-gradient(circle 9rem at ${pos.x}% ${pos.y}%, transparent 0 38%, black 72%)` : "none",
					opacity: pos.on ? 1 : .92,
					transition: pos.on ? "none" : "opacity 400ms ease"
				}
			}) : null
		]
	});
}
//#endregion
export { SketchReveal as t };
