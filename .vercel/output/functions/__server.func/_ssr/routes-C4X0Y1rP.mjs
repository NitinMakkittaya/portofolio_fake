import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { c as collections, i as Footer, o as usePrefersReducedMotion, r as ClientDust, u as site } from "./router-n_pcLFC8.mjs";
import { t as InView } from "./in-view-BXa3E-Ub.mjs";
import { t as CollectionBlock } from "./collection-block-ZcP9RyB8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C4X0Y1rP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const wrap = (0, import_react.useRef)(null);
	const visual = (0, import_react.useRef)(null);
	const ui = (0, import_react.useRef)(null);
	const reduced = usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		gsapWithCSS.registerPlugin(ScrollTrigger);
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.to(visual.current, {
				scale: 1.72,
				ease: "none",
				scrollTrigger: {
					trigger: wrap.current,
					start: "top top",
					end: "bottom bottom",
					scrub: .4
				}
			});
			gsapWithCSS.to(ui.current, {
				opacity: 0,
				y: -28,
				ease: "none",
				scrollTrigger: {
					trigger: wrap.current,
					start: "top top",
					end: "55% top",
					scrub: .3
				}
			});
		}, wrap);
		return () => ctx.revert();
	}, [reduced]);
	const scrollNext = () => {
		document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: wrap,
		className: "hero-stage",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-pin",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: visual,
					className: "hero-visual",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero-portal.jpg",
						alt: "A circular concrete portal looking onto a field, a figure seated on the rim"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientDust, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: ui,
					className: "relative z-[3] flex h-full flex-col justify-between px-5 pb-8 pt-24 md:px-12 md:pb-10 md:pt-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex min-h-0 flex-1 items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-none absolute left-0 top-[18%] max-w-[46%]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hero-kicker mb-1 md:mb-2",
									children: site.hero.kicker
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "hero-word",
									children: site.hero.left
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "hero-year pointer-events-none absolute right-[6%] top-[16%] hidden md:block",
								children: ["*", site.year]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-none absolute bottom-[18%] right-0 text-right md:bottom-[16%] md:right-[4%]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hero-amp mb-1 mr-[42%] hidden md:block",
									children: "&"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "hero-word",
									children: site.hero.right
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-end justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: scrollNext,
								className: "flex items-center gap-3",
								"data-cursor": "hot",
								"aria-label": "Scroll down",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative grid h-20 w-20 place-items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full border border-line-strong" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "scroll-cue",
										children: "Scroll down"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "meta absolute bottom-1 left-1/2 hidden -translate-x-1/2 md:block",
								children: site.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "36",
								height: "36",
								viewBox: "0 0 36 36",
								"aria-hidden": true,
								className: "opacity-70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "18",
										cy: "18",
										r: "16",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "0.6"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "18",
										cy: "18",
										r: "9",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "0.6"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "18",
										cy: "18",
										r: "3",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "0.6"
									})
								]
							})
						]
					})]
				})
			]
		})
	});
}
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "manifesto",
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/field-open.jpg",
				alt: "A figure walking through a field of ochre flowers",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[1] flex min-h-screen flex-col justify-between px-5 pb-10 pt-28 md:px-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end pt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/works",
							className: "explore-orb group",
							"data-cursor": "hot",
							"aria-label": "Explore works",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "meta flex items-center gap-2 text-paper",
								children: ["Works", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-8 bg-paper transition-all group-hover:w-12" })]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-4xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "section-title",
							children: [
								"Let ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "the" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: "Line Live"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex max-w-xl flex-col gap-4",
							children: site.manifesto.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InView, {
								delay: i * 90,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "body-copy max-w-[42ch] text-paper",
									children: p
								})
							}, p))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-16 bg-paper/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/works/$slug",
							params: { slug: "field-of-mind" },
							className: "see-link",
							"data-cursor": "hot",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "meta text-paper",
									children: site.manifesto.caption
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line" }),
								"See collection"
							]
						})]
					})
				]
			})
		]
	});
}
function Home() {
	const featured = collections.filter((c) => c.slug === "mira" || c.slug === "thorn-choir");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink",
			children: featured.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionBlock, {
				collection: c,
				featured: true
			}, c.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden px-5 py-24 md:px-12 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 opacity-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/field-away.jpg",
					alt: "",
					className: "h-full w-full object-cover grayscale"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/80" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InView, {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: "The atelier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "section-title mt-5 max-w-4xl",
						children: ["Two crafts. One sitting.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block italic",
							children: "Pencil, then light."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-8 max-w-[46ch]",
						children: "Veln is a studio of observational drawing and digital cinema. Commissions open for lookdev, title design, VFX stills, and the long walk from a page to a frame."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "see-link",
							"data-cursor": "hot",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line" }), "About the studio"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/process",
							className: "see-link",
							"data-cursor": "hot",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line" }), "Open the process"]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };
