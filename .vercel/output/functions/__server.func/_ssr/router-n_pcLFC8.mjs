import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-n_pcLFC8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var site = {
	name: "Veln",
	year: "2026",
	tagline: "FRAMES THAT REFUSE TO STAY STILL",
	email: "studio@veln.art",
	hero: {
		kicker: "between",
		left: "Graphite",
		right: "Cinema"
	},
	manifesto: {
		titleLead: "Let the",
		title: "Line Live",
		body: ["Drawing has always been the first machine. Before the solver, before the volume, a mark on paper decides what the light is allowed to know.", "The sketches are not discarded. They are the bones. Every still on this site began as graphite and was asked, slowly, to breathe."],
		caption: "FIELD OF MIND — 18 JUNE 2026"
	}
};
var collections = [
	{
		slug: "mira",
		title: "Mira",
		date: "28 OCTOBER 2026",
		category: "Portrait",
		excerpt: "A face still holds more weather than any simulation. Mira sat for graphite first, then for the camera of light.",
		body: ["Ordinary portraiture, asked to remain strange. The sitting began with a 6B on cream stock — three hours, no talking — then a second day under split theatrical lights.", "The CGI skin is not a replacement. It is a second drawing, made of specular and pore, laid over the first until they argue."],
		cover: "/images/mira-beauty.jpg",
		layout: "a",
		images: [
			{
				src: "/images/mira-sketch.jpg",
				alt: "Graphite study of Mira",
				size: "sm"
			},
			{
				src: "/images/mira-hat.jpg",
				sketch: "/images/mira-hat-sk.jpg",
				alt: "Mira with hat, split light",
				size: "lg"
			},
			{
				src: "/images/mira-beauty.jpg",
				sketch: "/images/mira-beauty-sk.jpg",
				alt: "Mira beauty still, crimson and teal",
				size: "md"
			},
			{
				src: "/images/mira-recline.jpg",
				sketch: "/images/mira-recline-sk.jpg",
				alt: "Mira reclining in red practical light",
				size: "wide"
			},
			{
				src: "/images/mira-beauty-sk.jpg",
				alt: "Pencil translation of the beauty still",
				size: "sm"
			}
		]
	},
	{
		slug: "thorn-choir",
		title: "Thorn Choir",
		date: "14 OCTOBER 2026",
		category: "VFX",
		excerpt: "Neon magical light, a veil, a forest that never existed. Arcane studies of a figure the pencil named before the renderer did.",
		body: ["A series of stills and a short volume pass in a forest built from scans of thorn and wet bark. The halo is not jewelry. It is a rig of thin emitters, then a drawing of the same rig.", "See the graphite under the cobalt. The veil was charcoal before it was a shader."],
		cover: "/images/thorn-halo.jpg",
		layout: "b",
		images: [
			{
				src: "/images/thorn-halo.jpg",
				sketch: "/images/thorn-halo-sk.jpg",
				alt: "Veiled figure with sunburst halo",
				size: "xl"
			},
			{
				src: "/images/thorn-antlers.jpg",
				sketch: "/images/thorn-antlers-sk.jpg",
				alt: "Antlered cloak in a night forest",
				size: "lg"
			},
			{
				src: "/images/thorn-antlers-sk.jpg",
				alt: "Graphite study, antlered figure",
				size: "sm"
			},
			{
				src: "/images/thorn-halo-sk.jpg",
				alt: "Pencil halo study",
				size: "sm"
			},
			{
				src: "/images/thorn-wide.jpg",
				alt: "Wide crop, forest still",
				size: "wide"
			}
		]
	},
	{
		slug: "pulse",
		title: "Pulse",
		date: "19 SEPTEMBER 2026",
		category: "Animation",
		excerpt: "Gesture drawings that refuse to sit. Motion captured, then drawn back on top of the capture until the body is both true and invented.",
		body: ["A dancer, a room of magenta practicals, and a stack of charcoal gesture pages timed to the same breath. The composite keeps the smear of the pencil.", "Animation here is not a cycle. It is a sitting that happens to move."],
		cover: "/images/pulse-recline.jpg",
		layout: "c",
		images: [
			{
				src: "/images/pulse-recline.jpg",
				sketch: "/images/mira-recline-sk.jpg",
				alt: "Pulse still, body in magenta light",
				size: "wide"
			},
			{
				src: "/images/pulse-beauty.jpg",
				sketch: "/images/mira-beauty-sk.jpg",
				alt: "Pulse portrait grade",
				size: "lg"
			},
			{
				src: "/images/mira-recline-sk.jpg",
				alt: "Gesture drawing for Pulse",
				size: "md"
			}
		]
	},
	{
		slug: "iron-sleep",
		title: "Iron Sleep",
		date: "23 AUGUST 2026",
		category: "CGI",
		excerpt: "Skin dusted in metallic graphite. Two figures who know what weight looks like when it is only light.",
		body: ["A lookdev study of powder, oil, and cold specular. The metal is not gold. It is the silver of a 6B pushed until it shines.", "Sculpture first, then the renderer, then the pencil again on top of the beauty pass."],
		cover: "/images/iron-hat.jpg",
		layout: "a",
		images: [
			{
				src: "/images/iron-hat.jpg",
				sketch: "/images/mira-hat-sk.jpg",
				alt: "Iron Sleep, metallic graphite portrait",
				size: "lg"
			},
			{
				src: "/images/iron-artist.jpg",
				sketch: "/images/artist-sk.jpg",
				alt: "Graphite-dusted studio portrait",
				size: "md"
			},
			{
				src: "/images/artist-sk.jpg",
				alt: "Pencil study for Iron Sleep",
				size: "sm"
			},
			{
				src: "/images/mira-hat-sk.jpg",
				alt: "Hat study in graphite",
				size: "sm"
			}
		]
	},
	{
		slug: "field-of-mind",
		title: "Field of Mind",
		date: "18 JUNE 2026",
		category: "CGI",
		excerpt: "A landscape that is half paper, half volume. The portal is a lens. The field is a drawing that learned weather.",
		body: ["Built as a circular aperture in a black studio — a concrete iris looking onto a field that does not exist. The walk was animated, then painted back with grain.", "The point was never the flowers. It was the rim: the place a person can sit between a room and a world."],
		cover: "/images/field-away.jpg",
		layout: "b",
		images: [
			{
				src: "/images/field-open.jpg",
				sketch: "/images/field-open-sk.jpg",
				alt: "Woman in the ochre field, arms open",
				size: "xl"
			},
			{
				src: "/images/field-away.jpg",
				alt: "Walking away through the field",
				size: "wide"
			},
			{
				src: "/images/field-detail.jpg",
				alt: "Detail, wildflowers and hill",
				size: "md"
			},
			{
				src: "/images/portal-inner.jpg",
				alt: "Through the portal",
				size: "sm"
			},
			{
				src: "/images/field-open-sk.jpg",
				alt: "Graphite translation of the field",
				size: "md"
			}
		]
	},
	{
		slug: "graphite",
		title: "Graphite",
		date: "ONGOING",
		category: "Sketch",
		excerpt: "The plates the rest of the work is built on. Observational drawings, no solver, no apology.",
		body: ["Cream stock, 4B to 8B, a kneaded eraser that is more wound than tool. These pages are not concept. They are the work.", "Hover any finished still on this site and the drawing is still there, waiting under the light."],
		cover: "/images/mira-sketch.jpg",
		layout: "c",
		images: [
			{
				src: "/images/mira-sketch.jpg",
				alt: "Portrait study in graphite",
				size: "lg"
			},
			{
				src: "/images/artist-sk.jpg",
				alt: "Studio self-study",
				size: "md"
			},
			{
				src: "/images/thorn-antlers-sk.jpg",
				alt: "Antlered figure, pencil",
				size: "md"
			},
			{
				src: "/images/mira-beauty-sk.jpg",
				alt: "Beauty still, drawn back",
				size: "sm"
			},
			{
				src: "/images/field-open-sk.jpg",
				alt: "Field, graphite",
				size: "wide"
			}
		]
	}
];
var tools = [
	"Graphite 2H–8B",
	"Charcoal & cream stock",
	"Blender",
	"Houdini",
	"Nuke",
	"Mari",
	"Maya",
	"Flame"
];
var stages = [
	{
		id: "mark",
		label: "Mark",
		title: "Graphite",
		copy: "Every creature, face, and field is drawn until the weight of the line is true. No concept dump. A sitting."
	},
	{
		id: "bone",
		label: "Bone",
		title: "Topology",
		copy: "The drawing is read as structure. Wire, edge flow, the skeleton the light will have to obey."
	},
	{
		id: "clay",
		label: "Clay",
		title: "Lookdev",
		copy: "Pore, powder, metal, paper tooth. Materials are mixed until they remember the pencil."
	},
	{
		id: "light",
		label: "Light",
		title: "Composite",
		copy: "Grain, veil, the last drawing on top of the beauty pass. Cinema, with the sketch still audible."
	}
];
function getCollection(slug) {
	return collections.find((c) => c.slug === slug);
}
var reelFrames = [
	"/images/hero-portal.jpg",
	"/images/field-open.jpg",
	"/images/mira-hat.jpg",
	"/images/mira-beauty.jpg",
	"/images/thorn-halo.jpg",
	"/images/thorn-antlers.jpg",
	"/images/pulse-recline.jpg",
	"/images/iron-hat.jpg",
	"/images/mira-sketch.jpg",
	"/images/field-away.jpg"
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function useMounted() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	return mounted;
}
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const on = () => setReduced(mq.matches);
		on();
		mq.addEventListener("change", on);
		return () => mq.removeEventListener("change", on);
	}, []);
	return reduced;
}
function useIsMobile() {
	const [mobile, setMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(max-width: 767px)");
		const on = () => setMobile(mq.matches);
		on();
		mq.addEventListener("change", on);
		return () => mq.removeEventListener("change", on);
	}, []);
	return mobile;
}
var Dust3D = (0, import_react.lazy)(() => import("./dust-3d-Bhva4gT-.mjs"));
var Ctx = (0, import_react.createContext)(null);
var NAV = [
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/works",
		label: "Works"
	},
	{
		to: "/process",
		label: "Process"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteShell({ children }) {
	const mounted = useMounted();
	const mobile = useIsMobile();
	const reduced = usePrefersReducedMotion();
	const [hot, setHot] = (0, import_react.useState)(false);
	const [reel, setReel] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	const cursor = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const ring = (0, import_react.useRef)(null);
	const dot = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => setLoaded(true), 1600);
		return () => window.clearTimeout(t);
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		gsapWithCSS.registerPlugin(ScrollTrigger);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!mounted || reduced) return;
		const lenis = new Lenis({
			duration: 1.15,
			smoothWheel: true,
			wheelMultiplier: .9
		});
		lenis.on("scroll", ScrollTrigger.update);
		const ticker = (time) => {
			lenis.raf(time * 1e3);
		};
		gsapWithCSS.ticker.add(ticker);
		gsapWithCSS.ticker.lagSmoothing(0);
		return () => {
			gsapWithCSS.ticker.remove(ticker);
			lenis.destroy();
		};
	}, [mounted, reduced]);
	(0, import_react.useEffect)(() => {
		if (mobile || reduced || !mounted) return;
		let raf = 0;
		const pos = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		};
		const onMove = (e) => {
			cursor.current = {
				x: e.clientX,
				y: e.clientY
			};
			const t = e.target;
			const isHot = Boolean(t?.closest("a, button, [data-cursor='hot'], input, textarea, select"));
			setHot(isHot);
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		const loop = () => {
			pos.x += (cursor.current.x - pos.x) * .22;
			pos.y += (cursor.current.y - pos.y) * .22;
			if (ring.current) ring.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
			if (dot.current) dot.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)`;
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			window.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(raf);
		};
	}, [
		mobile,
		reduced,
		mounted
	]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menu || reel ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menu, reel]);
	const showCursor = mounted && !mobile && !reduced;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			openReel: () => setReel(true),
			setHot
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("min-h-screen bg-ink text-paper", showCursor && "has-custom-cursor"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, { done: loaded }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
				showCursor ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: ring,
					className: cn("cursor-ring", hot && "is-hot")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: dot,
					className: "cursor-dot"
				})] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
					menu,
					setMenu,
					onReel: () => setReel(true)
				}),
				menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenu, {
					onClose: () => setMenu(false),
					onReel: () => {
						setMenu(false);
						setReel(true);
					}
				}) : null,
				reel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reel, { onClose: () => setReel(false) }) : null,
				children
			]
		})
	});
}
function Loader({ done }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("loader", done && "is-done"),
		"aria-hidden": done,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: "96",
					height: "96",
					viewBox: "0 0 96 96",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "48",
						cy: "48",
						r: "45",
						className: "orb-stroke"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "48",
						cy: "48",
						r: "28",
						className: "orb-stroke",
						style: { animationDelay: "180ms" }
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mark-word",
					children: "Veln"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "meta",
					children: ["Graphite · Cinema · ", site.year]
				})
			]
		})
	});
}
function Grain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grain",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
			id: "veln-grain",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feTurbulence", {
				type: "fractalNoise",
				baseFrequency: "0.85",
				numOctaves: "4",
				stitchTiles: "stitch"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "100%",
			height: "100%",
			filter: "url(#veln-grain)"
		})] })
	});
}
function Nav({ menu, setMenu, onReel }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const bar = (0, import_react.useRef)(null);
	const prog = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const p = max > 0 ? window.scrollY / max : 0;
			if (prog.current) prog.current.style.setProperty("--p", String(p));
			bar.current?.classList.toggle("is-field", window.scrollY > window.innerHeight * .85);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		ref: bar,
		className: "nav-bar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center border-r border-line px-4 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mark-word",
					"aria-label": "Veln home",
					children: "Veln"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden items-center justify-center gap-9 md:flex",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: cn("nav-link", pathname === item.to && "is-active"),
					children: item.label
				}, item.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-end gap-5 border-l border-line px-4 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "nav-link hidden md:inline",
					onClick: onReel,
					children: "Reel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "nav-link md:hidden",
					onClick: () => setMenu(!menu),
					"aria-label": menu ? "Close menu" : "Open menu",
					children: menu ? "Close" : "Menu"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: prog,
				className: "nav-progress"
			})
		]
	});
}
function MobileMenu({ onClose, onReel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "menu-overlay",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-5",
			children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				onClick: onClose,
				className: "font-display text-[14vw] leading-[0.9] tracking-tight",
				children: item.label
			}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onReel,
				className: "text-left font-display text-[14vw] leading-[0.9] tracking-tight",
				children: "Reel"
			})]
		})
	});
}
function Reel({ onClose }) {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setI((n) => (n + 1) % reelFrames.length), 1400);
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => {
			window.clearInterval(id);
			window.removeEventListener("keydown", onKey);
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[75] bg-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: reelFrames[i],
				alt: "",
				className: "h-full w-full object-cover opacity-90"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mark-word absolute left-6 top-6",
				children: "Veln"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "meta absolute right-6 top-7",
				onClick: onClose,
				children: "Close reel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "meta absolute bottom-8 left-6",
				children: [
					String(i + 1).padStart(2, "0"),
					" / ",
					String(reelFrames.length).padStart(2, "0")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2",
				children: reelFrames.map((_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Frame ${n + 1}`,
					onClick: () => setI(n),
					className: cn("h-px w-8", n === i ? "bg-paper" : "bg-paper/30")
				}, n))
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "grid grid-cols-2 border-t border-line md:grid-cols-[11rem_1fr_11rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center gap-1 border-r border-line px-6 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mark-word",
					children: "Veln"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "meta",
					children: [
						"© ",
						site.name,
						", ",
						site.year
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden items-center justify-center md:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: site.tagline
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "flex items-center justify-end border-l border-line px-6 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nav-link",
					children: "Commissions"
				})
			})
		]
	});
}
function ClientDust({ dense }) {
	const mounted = useMounted();
	const reduced = usePrefersReducedMotion();
	const mobile = useIsMobile();
	if (!mounted || reduced || mobile) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dust3D, { dense })
	});
}
var styles_default = "/assets/styles-Q6kB5syV.css";
var APP_NAME = "VELN — Graphite & Cinema";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Veln is a motion atelier working between observational graphite and digital cinema. VFX, CGI, animation, and drawing."
			},
			{
				name: "theme-color",
				content: "#0a0a0a"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600&display=swap"
			}
		]
	}),
	errorComponent: AppErrorComponent,
	notFoundComponent: NotFound,
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-ink text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "meta",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-display",
				children: "Lost in the grain"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "see-link mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "line" }), "Back to the studio"]
			})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-C4X0Y1rP.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./about-BUZi-s0u.mjs");
var Route$4 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./contact-CCZXo9Cv.mjs");
var Route$3 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./process-CwdoqgKw.mjs");
var Route$2 = createFileRoute("/process")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./works-jwvK5IXA.mjs");
var Route$1 = createFileRoute("/works")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./works._slug-CQ6myWcR.mjs");
var Route = createFileRoute("/works/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var ProcessRoute = Route$2.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => Route$6
});
var WorksRoute = Route$1.update({
	id: "/works",
	path: "/works",
	getParentRoute: () => Route$6
});
var WorksRouteChildren = { WorksSlugRoute: Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => WorksRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	ProcessRoute,
	WorksRoute: WorksRoute._addFileChildren(WorksRouteChildren)
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
//#endregion
export { useMounted as a, collections as c, stages as d, tools as f, Footer as i, getCollection as l, Route as n, usePrefersReducedMotion as o, ClientDust as r, cn as s, router_exports as t, site as u };
