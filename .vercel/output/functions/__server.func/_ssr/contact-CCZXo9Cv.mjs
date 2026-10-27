import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { i as Footer, s as cn, u as site } from "./router-n_pcLFC8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CCZXo9Cv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KINDS = [
	"VFX / composite",
	"CGI / lookdev",
	"Animation",
	"Graphite sitting",
	"Title design"
];
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [kind, setKind] = (0, import_react.useState)(KINDS[0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-ink pt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-16 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-12 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: "Commissions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "section-title mt-4",
					children: ["Write to", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block italic",
						children: "the studio."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy mt-8 max-w-[42ch]",
					children: "Open for a small number of sittings each season — film, still, title, creature. Send a note with the shape of the work. Graphite first, always."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 font-display text-2xl italic",
					children: site.email
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-[28rem] flex-col justify-center border-t border-line pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: "Received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "The page is noted."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-4",
						children: "The studio reads slowly. If the sitting is right, you will hear back with a time and a material list."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-7",
				onSubmit: (e) => {
					e.preventDefault();
					const data = new FormData(e.currentTarget);
					const name = String(data.get("name") ?? "").trim();
					const email = String(data.get("email") ?? "").trim();
					const message = String(data.get("message") ?? "").trim();
					if (!name || !email || !message) return;
					setSent(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "meta",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							required: true,
							className: "underline-input mt-2",
							placeholder: "Your name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "meta",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							required: true,
							className: "underline-input mt-2",
							placeholder: "you@studio.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "meta",
							children: "The sitting"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setKind(k),
								className: cn("border px-3 py-2 text-xs tracking-[0.16em] uppercase transition-colors", kind === k ? "border-paper bg-paper text-ink" : "border-line-strong text-paper/70 hover:border-paper"),
								children: k
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "hidden",
							name: "kind",
							value: kind
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "meta",
							children: "Note"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							required: true,
							rows: 5,
							className: "underline-input mt-2 resize-none",
							placeholder: "What wants to be drawn."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "see-link self-start pt-2",
						"data-cursor": "hot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line" }), "Send the note"]
					})
				]
			}) })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})]
	});
}
//#endregion
export { Contact as component };
