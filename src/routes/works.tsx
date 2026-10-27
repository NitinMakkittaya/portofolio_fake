import { createFileRoute } from "@tanstack/react-router";
import { collections } from "@/data/content";
import { CollectionBlock } from "@/components/collection-block";
import { Footer } from "@/components/chrome";

export const Route = createFileRoute("/works")({ component: Works });

function Works() {
  return (
    <main className="bg-ink pt-20">
      <header className="border-b border-line px-5 py-14 md:px-12 md:py-20">
        <p className="meta">Selected plates</p>
        <h1 className="section-title mt-4">Works</h1>
        <p className="body-copy mt-6 max-w-[48ch]">
          Collections from the last sittings. Hover a still — the graphite is still
          underneath. Click to open the plate.
        </p>
      </header>
      {collections.map((c) => (
        <CollectionBlock key={c.slug} collection={c} />
      ))}
      <Footer />
    </main>
  );
}
