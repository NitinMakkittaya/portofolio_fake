import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lightbox-DyKaTvjJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Lightbox({ images, index, onClose, onIndex }) {
	const img = images[index];
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
			if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		index,
		images.length,
		onClose,
		onIndex
	]);
	if (!img) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex items-center justify-center bg-ink/95",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Image viewer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute inset-0",
				onClick: onClose,
				"aria-label": "Close"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img.src,
				alt: img.alt,
				className: "relative z-[1] max-h-[82vh] max-w-[88vw] object-contain"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "meta absolute bottom-8 left-1/2 z-[1] -translate-x-1/2 text-center",
				children: img.alt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute left-4 top-1/2 z-[1] -translate-y-1/2 px-3 py-6 text-paper/70 hover:text-paper",
				onClick: () => onIndex((index - 1 + images.length) % images.length),
				"aria-label": "Previous",
				"data-cursor": "hot",
				children: "←"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute right-4 top-1/2 z-[1] -translate-y-1/2 px-3 py-6 text-paper/70 hover:text-paper",
				onClick: () => onIndex((index + 1) % images.length),
				"aria-label": "Next",
				"data-cursor": "hot",
				children: "→"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "meta absolute right-6 top-6 z-[1]",
				onClick: onClose,
				"data-cursor": "hot",
				children: "Close"
			})
		]
	});
}
//#endregion
export { Lightbox as t };
