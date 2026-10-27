import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Collection } from "@/data/content";
import { InView } from "@/components/in-view";
import { Lightbox } from "@/components/lightbox";
import { SketchReveal } from "@/components/sketch-reveal";

export function CollectionBlock({
  collection,
  featured = false,
}: {
  collection: Collection;
  featured?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const c = collection;
  const imgs = c.images;

  return (
    <article className="relative border-b border-line px-5 py-16 md:px-12 md:py-24">
      <div className="mb-4 flex items-center justify-between">
        <p className="meta">{c.category}</p>
        {featured ? <p className="meta">Featured</p> : null}
      </div>

      {c.layout === "a" ? (
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(16rem,22rem)_1fr]">
          <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
            {imgs.slice(0, 2).map((img, i) => (
              <InView key={img.src + i} delay={i * 80}>
                <SketchReveal
                  {...img}
                  onOpen={() => setOpen(i)}
                />
              </InView>
            ))}
          </div>
          <div className="px-1">
            <InView>
              <h2 className="font-display text-display leading-[0.9] tracking-tight">{c.title}</h2>
              <p className="meta mt-4">{c.date}</p>
              <span className="mt-5 block h-px w-10 bg-line-strong" />
              <p className="body-copy mt-6">{c.excerpt}</p>
              <p className="body-copy mt-4">{c.body[0]}</p>
              <Link
                to="/works/$slug"
                params={{ slug: c.slug }}
                className="see-link mt-8"
                data-cursor="hot"
              >
                <span className="line" />
                See collection
              </Link>
            </InView>
          </div>
          <div className="flex flex-col flex-wrap items-start justify-end gap-4 sm:flex-row">
            {imgs.slice(2, 5).map((img, i) => (
              <InView key={img.src + i} delay={i * 80}>
                <SketchReveal {...img} onOpen={() => setOpen(i + 2)} />
              </InView>
            ))}
          </div>
        </div>
      ) : null}

      {c.layout === "b" ? (
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr_auto]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              {imgs.slice(2, 4).map((img, i) => (
                <InView key={img.src}>
                  <SketchReveal {...img} onOpen={() => setOpen(i + 2)} />
                </InView>
              ))}
            </div>
            <InView>
              {imgs[1] ? (
                <SketchReveal {...imgs[1]} onOpen={() => setOpen(1)} />
              ) : null}
            </InView>
            <Link
              to="/works/$slug"
              params={{ slug: c.slug }}
              className="see-link"
              data-cursor="hot"
            >
              <span className="line" />
              See collection
            </Link>
          </div>
          <div>
            <InView>
              <h2 className="font-display text-display leading-[0.9] tracking-tight">{c.title}</h2>
              <p className="meta mt-4">{c.date}</p>
              <span className="mt-5 block h-px w-10 bg-line-strong" />
              <p className="body-copy mt-6">{c.excerpt}</p>
              <p className="body-copy mt-4">{c.body[0]}</p>
            </InView>
          </div>
          <InView>
            {imgs[0] ? <SketchReveal {...imgs[0]} onOpen={() => setOpen(0)} /> : null}
          </InView>
        </div>
      ) : null}

      {c.layout === "c" ? (
        <div className="grid min-w-0 items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
            {imgs.map((img, i) => (
              <InView key={img.src + i} delay={i * 70}>
                <SketchReveal {...img} onOpen={() => setOpen(i)} />
              </InView>
            ))}
          </div>
          <InView>
            <h2 className="font-display text-display leading-[0.9] tracking-tight">{c.title}</h2>
            <p className="meta mt-4">{c.date}</p>
            <span className="mt-5 block h-px w-10 bg-line-strong" />
            <p className="body-copy mt-6">{c.excerpt}</p>
            <p className="body-copy mt-4">{c.body[0]}</p>
            <Link
              to="/works/$slug"
              params={{ slug: c.slug }}
              className="see-link mt-8"
              data-cursor="hot"
            >
              <span className="line" />
              See collection
            </Link>
          </InView>
        </div>
      ) : null}

      {open !== null ? (
        <Lightbox
          images={imgs}
          index={open}
          onClose={() => setOpen(null)}
          onIndex={setOpen}
        />
      ) : null}
    </article>
  );
}
