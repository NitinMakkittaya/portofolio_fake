import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { collections, getCollection } from "@/data/content";
import { Footer } from "@/components/chrome";
import { Lightbox } from "@/components/lightbox";
import { SketchReveal } from "@/components/sketch-reveal";
import { InView } from "@/components/in-view";

export const Route = createFileRoute("/works/$slug")({
  component: CollectionPage,
});

function CollectionPage() {
  const { slug } = Route.useParams();
  const c = getCollection(slug);
  const [open, setOpen] = useState<number | null>(null);
  if (!c) throw notFound();

  const next = collections[(collections.findIndex((x) => x.slug === c.slug) + 1) % collections.length];

  return (
    <main className="bg-ink pt-20">
      <header className="grid gap-10 border-b border-line px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:py-20">
        <div>
          <p className="meta">{c.category} · {c.date}</p>
          <h1 className="section-title mt-4">{c.title}</h1>
        </div>
        <div className="flex flex-col justify-end gap-4">
          {c.body.map((p) => (
            <p key={p} className="body-copy max-w-[44ch]">
              {p}
            </p>
          ))}
        </div>
      </header>
      <section className="grid grid-cols-2 gap-3 px-3 py-6 md:grid-cols-12 md:gap-5 md:px-12 md:py-14">
        {c.images.map((img, i) => (
          <InView
            key={img.src + i}
            className={
              i % 5 === 0
                ? "col-span-2 md:col-span-7"
                : i % 5 === 1
                  ? "col-span-2 md:col-span-5"
                  : i % 5 === 2
                    ? "col-span-1 md:col-span-4"
                    : i % 5 === 3
                      ? "col-span-1 md:col-span-4"
                      : "col-span-2 md:col-span-4"
            }
          >
            <SketchReveal
              {...img}
              size="full"
              className="h-full min-h-[220px] w-full md:min-h-[320px]"
              onOpen={() => setOpen(i)}
            />
          </InView>
        ))}
      </section>
      {next ? (
        <div className="flex items-center justify-between border-t border-line px-5 py-10 md:px-12">
          <p className="meta">Next sitting</p>
          <Link to="/works/$slug" params={{ slug: next.slug }} className="see-link" data-cursor="hot">
            {next.title}
            <span className="line" />
          </Link>
        </div>
      ) : null}
      {open !== null ? (
        <Lightbox images={c.images} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
      ) : null}
      <Footer />
    </main>
  );
}
