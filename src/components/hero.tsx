import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/content";
import { ClientDust } from "@/components/chrome";
import { usePrefersReducedMotion } from "@/hooks/use-mounted";

export function Hero() {
  const wrap = useRef<HTMLElement>(null);
  const visual = useRef<HTMLDivElement>(null);
  const ui = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(visual.current, {
        scale: 1.72,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
        },
      });
      gsap.to(ui.current, {
        opacity: 0,
        y: -28,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: "55% top",
          scrub: 0.3,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [reduced]);

  const scrollNext = () => {
    document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={wrap} className="hero-stage">
      <div className="hero-pin">
        <div ref={visual} className="hero-visual">
          <img
            src="/images/hero-portal.jpg"
            alt="A circular concrete portal looking onto a field, a figure seated on the rim"
          />
        </div>
        <ClientDust />
        <div
          ref={ui}
          className="relative z-[3] flex h-full flex-col justify-between px-5 pb-8 pt-24 md:px-12 md:pb-10 md:pt-28"
        >
          <div className="relative flex min-h-0 flex-1 items-center">
            <div className="pointer-events-none absolute left-0 top-[16%] w-max">
              <p className="hero-kicker mb-1 md:mb-2">{site.hero.kicker}</p>
              <h1 className="hero-word">{site.hero.left}</h1>
            </div>
            <p className="hero-year pointer-events-none absolute right-0 top-[16%] hidden md:block">
              *{site.year}
            </p>
            <div className="pointer-events-none absolute bottom-[14%] right-0 w-max text-right">
              <p className="hero-amp mb-1 mr-[38%] hidden md:block">&</p>
              <h2 className="hero-word">{site.hero.right}</h2>
            </div>
          </div>
          <div className="relative flex items-end justify-between">
            <button
              type="button"
              onClick={scrollNext}
              className="flex items-center gap-3"
              data-cursor="hot"
              aria-label="Scroll down"
            >
              <span className="relative grid h-20 w-20 place-items-center">
                <span className="absolute inset-0 rounded-full border border-line-strong" />
                <span className="scroll-cue">Scroll down</span>
              </span>
            </button>
            <p className="meta absolute bottom-1 left-1/2 hidden -translate-x-1/2 md:block">
              {site.tagline}
            </p>
            <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden className="opacity-70">
              <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="0.6" />
              <circle cx="18" cy="18" r="9" fill="none" stroke="currentColor" strokeWidth="0.6" />
              <circle cx="18" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
