import { lazy, Suspense, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { stages } from "@/data/content";
import type { StudioMode } from "@/components/studio-3d";
import { Footer } from "@/components/chrome";
import { InView } from "@/components/in-view";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

const Studio3D = lazy(() => import("@/components/studio-3d"));

export const Route = createFileRoute("/process")({ component: Process });

const MODE: Record<string, StudioMode> = {
  mark: "mark",
  bone: "bone",
  clay: "clay",
  light: "light",
};

function Process() {
  const mounted = useMounted();
  const [id, setId] = useState("mark");
  const stage = stages.find((s) => s.id === id) ?? stages[0];
  const [split, setSplit] = useState(48);

  return (
    <main className="bg-ink pt-20">
      <header className="px-5 py-14 md:px-12 md:py-20">
        <p className="meta">From mark to motion</p>
        <h1 className="section-title mt-4">Process</h1>
        <p className="body-copy mt-6 max-w-[50ch]">
          Drag the form. Switch the stage. The same body, four drafts — graphite,
          wire, clay, light. Nothing here is a template. It is a sitting you can turn.
        </p>
      </header>

      <section className="grid border-y border-line lg:grid-cols-[1fr_22rem]">
        <div className="relative h-[70vh] min-h-[420px] bg-ink-2">
          {mounted ? (
            <Suspense fallback={<div className="h-full w-full bg-ink-2" />}>
              <Studio3D mode={MODE[id] ?? "mark"} />
            </Suspense>
          ) : (
            <div className="h-full w-full bg-ink-2" />
          )}
          <p className="meta pointer-events-none absolute bottom-5 left-5">
            Drag to orbit · scroll to scale
          </p>
        </div>
        <aside className="flex flex-col justify-between border-l border-line p-6 md:p-8">
          <div>
            {stages.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setId(s.id)}
                className={cn(
                  "block w-full border-b border-line py-4 text-left transition-colors",
                  s.id === id ? "text-paper" : "text-graphite hover:text-paper",
                )}
                data-cursor="hot"
              >
                <span className="meta">{s.label}</span>
                <span className="mt-1 block font-display text-3xl">{s.title}</span>
              </button>
            ))}
          </div>
          <p className="body-copy mt-8">{stage?.copy}</p>
        </aside>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-24">
        <InView>
          <p className="meta">Under the still</p>
          <h2 className="section-title mt-3">Sketch holds the cinema</h2>
          <p className="body-copy mt-5">
            Drag the seam. Left is the page. Right is the beauty pass. This is how
            every plate on the site is built.
          </p>
        </InView>
        <div
          className="relative mt-10 h-[58vh] min-h-[320px] overflow-hidden bg-ink-2"
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setSplit(((e.clientX - r.left) / r.width) * 100);
          }}
          data-cursor="hot"
        >
          <img
            src="/images/mira-beauty.jpg"
            alt="CGI beauty pass"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <img
            src="/images/mira-beauty-sk.jpg"
            alt="Graphite underdrawing"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
          />
          <div
            className="absolute top-0 z-[1] h-full w-px bg-paper"
            style={{ left: `${split}%` }}
          />
          <span className="meta absolute left-4 top-4">Graphite</span>
          <span className="meta absolute right-4 top-4">Cinema</span>
        </div>
      </section>
      <Footer />
    </main>
  );
}
