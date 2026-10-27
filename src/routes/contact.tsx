import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/content";
import { Footer } from "@/components/chrome";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({ component: Contact });

const KINDS = ["VFX / composite", "CGI / lookdev", "Animation", "Graphite sitting", "Title design"];

function Contact() {
  const [sent, setSent] = useState(false);
  const [kind, setKind] = useState(KINDS[0]);

  return (
    <main className="bg-ink pt-20">
      <section className="grid gap-16 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-12 md:py-24">
        <div>
          <p className="meta">Commissions</p>
          <h1 className="section-title mt-4">
            Write to
            <span className="block italic">the studio.</span>
          </h1>
          <p className="body-copy mt-8 max-w-[42ch]">
            Open for a small number of sittings each season — film, still, title,
            creature. Send a note with the shape of the work. Graphite first, always.
          </p>
          <p className="mt-10 font-display text-2xl italic">{site.email}</p>
        </div>
        <div>
          {sent ? (
            <div className="flex min-h-[28rem] flex-col justify-center border-t border-line pt-8">
              <p className="meta">Received</p>
              <h2 className="mt-3 font-display text-4xl">The page is noted.</h2>
              <p className="body-copy mt-4">
                The studio reads slowly. If the sitting is right, you will hear back
                with a time and a material list.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-7"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = String(data.get("name") ?? "").trim();
                const email = String(data.get("email") ?? "").trim();
                const message = String(data.get("message") ?? "").trim();
                if (!name || !email || !message) return;
                setSent(true);
              }}
            >
              <label className="block">
                <span className="meta">Name</span>
                <input name="name" required className="underline-input mt-2" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="meta">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="underline-input mt-2"
                  placeholder="you@studio.com"
                />
              </label>
              <fieldset>
                <legend className="meta">The sitting</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {KINDS.map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setKind(k)}
                      className={cn(
                        "border px-3 py-2 text-xs tracking-[0.16em] uppercase transition-colors",
                        kind === k
                          ? "border-paper bg-paper text-ink"
                          : "border-line-strong text-paper/70 hover:border-paper",
                      )}
                    >
                      {k}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="kind" value={kind} />
              </fieldset>
              <label className="block">
                <span className="meta">Note</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="underline-input mt-2 resize-none"
                  placeholder="What wants to be drawn."
                />
              </label>
              <button type="submit" className="see-link self-start pt-2" data-cursor="hot">
                <span className="line" />
                Send the note
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
