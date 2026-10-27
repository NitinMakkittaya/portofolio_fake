import { createFileRoute, Link } from "@tanstack/react-router";
import { tools } from "@/data/content";
import { Footer, ClientDust } from "@/components/chrome";
import { InView } from "@/components/in-view";
import { SketchReveal } from "@/components/sketch-reveal";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <main className="relative bg-ink pt-20">
      <ClientDust />
      <section className="grid items-end gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-24">
        <div>
          <p className="meta">The atelier</p>
          <InView>
            <h1 className="section-title mt-4">
              A draughtsman
              <span className="block italic">who learned weather.</span>
            </h1>
          </InView>
          <InView delay={120}>
            <p className="body-copy mt-8 max-w-[46ch]">
              Veln works where a pencil line is asked to become atmosphere. The
              practice began on cream stock — years of observational drawing, charcoal
              that scars the page — and moved, without abandoning the page, into
              lookdev, volume, and the long composite.
            </p>
            <p className="body-copy mt-4 max-w-[46ch]">
              The drawings are not concept art to be discarded. They are the bones.
              Hover any finished still in the archive and the graphite is still
              there, waiting under the light.
            </p>
          </InView>
        </div>
        <InView>
          <SketchReveal
            src="/images/artist.jpg"
            sketch="/images/artist-sk.jpg"
            alt="Studio portrait, graphite on the fingers"
            size="full"
            className="min-h-[420px] w-full md:min-h-[560px]"
          />
        </InView>
      </section>
      <section className="border-t border-line px-5 py-16 md:px-12">
        <p className="meta">Instruments</p>
        <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
          {tools.map((t) => (
            <li key={t} className="border-t border-line pt-3 font-display text-xl italic">
              {t}
            </li>
          ))}
        </ul>
      </section>
      <section className="grid gap-10 border-t border-line px-5 py-16 md:grid-cols-3 md:px-12">
        {[
          { n: "01", t: "Sketch", d: "A sitting on paper until the weight is true." },
          { n: "02", t: "Solve", d: "Topology, volume, the skeleton light will obey." },
          { n: "03", t: "Breathe", d: "Lookdev, grain, the last drawing on the beauty pass." },
        ].map((s) => (
          <InView key={s.n}>
            <p className="meta">{s.n}</p>
            <h2 className="mt-3 font-display text-3xl">{s.t}</h2>
            <p className="body-copy mt-3">{s.d}</p>
          </InView>
        ))}
      </section>
      <section className="border-t border-line px-5 py-16 md:px-12">
        <h2 className="section-title max-w-3xl">
          Open for the work that still begins
          <span className="italic"> on a page.</span>
        </h2>
        <Link to="/contact" className="see-link mt-10" data-cursor="hot">
          <span className="line" />
          Write to the studio
        </Link>
      </section>
      <Footer />
    </main>
  );
}
