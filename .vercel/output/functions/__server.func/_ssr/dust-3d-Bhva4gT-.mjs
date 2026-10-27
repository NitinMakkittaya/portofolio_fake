import { i as __toESM } from "../_runtime.mjs";
import { c as useFrame, d as require_react, i as PointMaterial, s as Canvas, t as Points, u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dust-3d-Bhva4gT-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Cloud({ count = 520 }) {
	const ref = (0, import_react.useRef)(null);
	const positions = (0, import_react.useMemo)(() => {
		const a = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			a[i * 3] = (Math.random() - .5) * 14;
			a[i * 3 + 1] = (Math.random() - .5) * 8;
			a[i * 3 + 2] = (Math.random() - .5) * 7;
		}
		return a;
	}, [count]);
	useFrame(({ clock, pointer }) => {
		const pts = ref.current;
		if (!pts) return;
		pts.rotation.y = clock.elapsedTime * .018 + pointer.x * .18;
		pts.rotation.x = pointer.y * .07;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Points, {
		ref,
		positions,
		stride: 3,
		frustumCulled: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PointMaterial, {
			transparent: true,
			color: "#d8d2c8",
			size: .016,
			sizeAttenuation: true,
			depthWrite: false
		})
	});
}
function Dust3D({ dense = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 z-[2]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
			camera: {
				position: [
					0,
					0,
					4.2
				],
				fov: 50
			},
			dpr: [1, 1.5],
			gl: {
				alpha: true,
				antialias: false
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { count: dense ? 900 : 480 })
		})
	});
}
//#endregion
export { Dust3D as default };
