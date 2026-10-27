import { Link } from "@tanstack/react-router";
import { site } from "@/data/content";
import { InView } from "@/components/in-view";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative min-h-screen overflow-hidden">
      <img
        src="/images/field-open.jpg"
        alt="A figure walking through a field of ochre flowers"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/25" />
      <div className="relative z-[1] flex min-h-screen flex-col justify-between px-5 pb-10 pt-28 md:px-14">
        <div className="flex justify-end pt-4">
          <Link to="/works" className="explore-orb group" data-cursor="hot" aria-label="Explore works">
            <span className="meta flex items-center gap-2 text-paper">
              Works
              <span className="block h-px w-8 bg-paper transition-all group-hover:w-12" />
            </span>
          </Link>
        </div>
        <div className="max-w-4xl">
          <InView>
            <h2 className="section-title">
              Let <em>the</em>
              <span className="block">Line Live</span>
            </h2>
          </InView>
          <div className="mt-10 flex max-w-xl flex-col gap-4">
            {site.manifesto.body.map((p, i) => (
              <InView key={p} delay={i * 90}>
                <p className="body-copy max-w-[42ch] text-paper">{p}</p>
              </InView>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="h-px w-16 bg-paper/50" />
          <Link to="/works/$slug" params={{ slug: "field-of-mind" }} className="see-link" data-cursor="hot">
            <span className="meta text-paper">{site.manifesto.caption}</span>
            <span className="line" />
            See collection
          </Link>
        </div>
      </div>
    </section>
  );
}
