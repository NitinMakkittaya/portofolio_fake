import { a as MeshDistortMaterial, n as ContactShadows, o as OrbitControls, r as Float, s as Canvas, u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-3d-D8ATlXIY.js
var import_jsx_runtime = require_jsx_runtime();
function Form({ mode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Float, {
		speed: 1.1,
		rotationIntensity: .35,
		floatIntensity: .55,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [1.22, mode === "bone" ? 0 : 1] }),
			mode === "mark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#cfc8bc",
				roughness: 1,
				metalness: 0
			}) : null,
			mode === "bone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#ece8e0",
				wireframe: true
			}) : null,
			mode === "clay" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#9c968c",
				roughness: .92,
				metalness: .05
			}) : null,
			mode === "light" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshDistortMaterial, {
				color: "#e4dfd6",
				roughness: .18,
				metalness: .72,
				distort: .32,
				speed: 1.4
			}) : null
		] }), mode === "mark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [1.22, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
			color: "#2c2a26",
			wireframe: true
		})] }) : null]
	});
}
function Studio3D({ mode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		camera: {
			position: [
				0,
				.2,
				4.2
			],
			fov: 42
		},
		dpr: [1, 1.75],
		gl: {
			antialias: true,
			alpha: true
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .28 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					3.2,
					4,
					2
				],
				intensity: 1.35,
				color: "#f3eee6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-4,
					-1,
					-2
				],
				intensity: .4,
				color: "#8aa0b4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, { mode }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
				position: [
					0,
					-1.55,
					0
				],
				opacity: .38,
				blur: 2.6,
				far: 4,
				color: "#000000"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
				enablePan: false,
				minDistance: 2.6,
				maxDistance: 6.5,
				autoRotate: true,
				autoRotateSpeed: .5,
				enableDamping: true
			})
		]
	});
}
//#endregion
export { Studio3D as default };
