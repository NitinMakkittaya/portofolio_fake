import {
  createContext,
  lazy,
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { site, reelFrames } from "@/data/content";
import { cn } from "@/lib/utils";
import { useIsMobile, useMounted, usePrefersReducedMotion } from "@/hooks/use-mounted";

const Dust3D = lazy(() => import("@/components/dust-3d"));

type SiteCtx = {
  openReel: () => void;
  setHot: (v: boolean) => void;
};

const Ctx = createContext<SiteCtx | null>(null);
export function useSite() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useSite");
  return v;
}

const NAV = [
  { to: "/about" as const, label: "About" },
  { to: "/works" as const, label: "Works" },
  { to: "/process" as const, label: "Process" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const mounted = useMounted();
  const mobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const [hot, setHot] = useState(false);
  const [reel, setReel] = useState(false);
  const [menu, setMenu] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const cursor = useRef({ x: 0, y: 0 });
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 520);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (!mounted || reduced) return;
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, [mounted, reduced]);

  useEffect(() => {
    if (mobile || reduced || !mounted) return;
    let raf = 0;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const onMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
      const t = e.target as HTMLElement | null;
      const isHot = Boolean(
        t?.closest("a, button, [data-cursor='hot'], input, textarea, select"),
      );
      setHot(isHot);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    const loop = () => {
      pos.x += (cursor.current.x - pos.x) * 0.22;
      pos.y += (cursor.current.y - pos.y) * 0.22;
      if (ring.current) ring.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [mobile, reduced, mounted]);

  useEffect(() => {
    document.body.style.overflow = menu || reel ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, reel]);

  const showCursor = mounted && !mobile && !reduced;

  return (
    <Ctx.Provider value={{ openReel: () => setReel(true), setHot }}>
      <div className={cn("min-h-screen bg-ink text-paper", showCursor && "has-custom-cursor")}>
        <Loader done={loaded} />
        <Grain />
        {showCursor ? (
          <>
            <div ref={ring} className={cn("cursor-ring", hot && "is-hot")} />
            <div ref={dot} className="cursor-dot" />
          </>
        ) : null}
        <Nav menu={menu} setMenu={setMenu} onReel={() => setReel(true)} />
        {menu ? <MobileMenu onClose={() => setMenu(false)} onReel={() => { setMenu(false); setReel(true); }} /> : null}
        {reel ? <Reel onClose={() => setReel(false)} /> : null}
        {children}
      </div>
    </Ctx.Provider>
  );
}

function Loader({ done }: { done: boolean }) {
  return (
    <div className={cn("loader", done && "is-done")} aria-hidden={done}>
      <div className="flex flex-col items-center gap-6">
        <svg width="96" height="96" viewBox="0 0 96 96">
          <circle cx="48" cy="48" r="45" className="orb-stroke" />
          <circle cx="48" cy="48" r="28" className="orb-stroke" style={{ animationDelay: "180ms" }} />
        </svg>
        <p className="mark-word">Veln</p>
        <p className="meta">Graphite · Cinema · {site.year}</p>
      </div>
    </div>
  );
}

function Grain() {
  return (
    <div className="grain" aria-hidden>
      <svg>
        <filter id="veln-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#veln-grain)" />
      </svg>
    </div>
  );
}

function Nav({
  menu,
  setMenu,
  onReel,
}: {
  menu: boolean;
  setMenu: (v: boolean) => void;
  onReel: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const bar = useRef<HTMLElement>(null);
  const prog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (prog.current) prog.current.style.setProperty("--p", String(p));
      bar.current?.classList.toggle("is-field", window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header ref={bar} className="nav-bar">
      <div className="flex items-center border-r border-line px-4 md:px-6">
        <Link to="/" className="mark-word" aria-label="Veln home">
          Veln
        </Link>
      </div>
      <nav className="hidden items-center justify-center gap-9 md:flex">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn("nav-link", pathname === item.to && "is-active")}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center justify-end gap-5 border-l border-line px-4 md:px-6">
        <button type="button" className="nav-link hidden md:inline" onClick={onReel}>
          Reel
        </button>
        <button
          type="button"
          className="nav-link md:hidden"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close menu" : "Open menu"}
        >
          {menu ? "Close" : "Menu"}
        </button>
      </div>
      <div ref={prog} className="nav-progress" />
    </header>
  );
}

function MobileMenu({ onClose, onReel }: { onClose: () => void; onReel: () => void }) {
  return (
    <div className="menu-overlay">
      <div className="flex flex-col gap-5">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            className="font-display text-[14vw] leading-[0.9] tracking-tight"
          >
            {item.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={onReel}
          className="text-left font-display text-[14vw] leading-[0.9] tracking-tight"
        >
          Reel
        </button>
      </div>
    </div>
  );
}

function Reel({ onClose }: { onClose: () => void }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % reelFrames.length), 1400);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearInterval(id);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[75] bg-ink">
      <img
        src={reelFrames[i]}
        alt=""
        className="h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <p className="mark-word absolute left-6 top-6">Veln</p>
      <button type="button" className="meta absolute right-6 top-7" onClick={onClose}>
        Close reel
      </button>
      <p className="meta absolute bottom-8 left-6">
        {String(i + 1).padStart(2, "0")} / {String(reelFrames.length).padStart(2, "0")}
      </p>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {reelFrames.map((_, n) => (
          <button
            key={n}
            type="button"
            aria-label={`Frame ${n + 1}`}
            onClick={() => setI(n)}
            className={cn(
              "h-px w-8",
              n === i ? "bg-paper" : "bg-paper/30",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="grid grid-cols-2 border-t border-line md:grid-cols-[11rem_1fr_11rem]">
      <div className="flex flex-col justify-center gap-1 border-r border-line px-6 py-8">
        <p className="mark-word">Veln</p>
        <p className="meta">© {site.name}, {site.year}</p>
      </div>
      <div className="hidden items-center justify-center md:flex">
        <p className="meta">{site.tagline}</p>
      </div>
      <Link
        to="/contact"
        className="flex items-center justify-end border-l border-line px-6 py-8"
      >
        <span className="nav-link">Commissions</span>
      </Link>
    </footer>
  );
}

export function ClientDust({ dense }: { dense?: boolean }) {
  const mounted = useMounted();
  const reduced = usePrefersReducedMotion();
  const mobile = useIsMobile();
  if (!mounted || reduced || mobile) return null;
  return (
    <Suspense fallback={null}>
      <Dust3D dense={dense} />
    </Suspense>
  );
}
