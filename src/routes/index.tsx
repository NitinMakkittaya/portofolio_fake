import { createFileRoute, Link } from "@tanstack/react-router";
import { collections } from "@/data/content";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { CollectionBlock } from "@/components/collection-block";
import { Footer } from "@/components/chrome";
import { InView } from "@/components/in-view";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = collections.filter((c) => c.slug === "mira" || c.slug === "thorn-choir");

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Manifesto />
      <section className="bg-ink">
        {featured.map((c) => (
          <CollectionBlock key={c.slug} collection={c} featured />
        ))}
      </section>
      <section className="relative overflow-hidden px-5 py-24 md:px-12 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <img src="/images/field-away.jpg" alt="" className="h-full w-full object-cover grayscale" />
          <div className="absolute inset-0 bg-ink/80" />
        </div>
        <InView className="relative">
          <p className="meta">The atelier</p>
          <h2 className="section-title mt-5 max-w-4xl">
            Two crafts. One sitting.
            <span className="mt-2 block italic">Pencil, then light.</span>
          </h2>
          <p className="body-copy mt-8 max-w-[46ch]">
            Veln is a studio of observational drawing and digital cinema. Commissions open
            for lookdev, title design, VFX stills, and the long walk from a page to a frame.
          </p>
          <div className="mt-10 flex flex-wrap gap-8">
            <Link to="/about" className="see-link" data-cursor="hot">
              <span className="line" />
              About the studio
            </Link>
            <Link to="/process" className="see-link" data-cursor="hot">
              <span className="line" />
              Open the process
            </Link>
          </div>
        </InView>
      </section>
      <Footer />
    </main>
  );
}
