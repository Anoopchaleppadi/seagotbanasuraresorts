import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { EXPERIENCES } from "@/lib/experiences";
import pool from "@/assets/pool.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Seagot Banasura Resorts, Wayanad" },
      { name: "description", content: "Adventure activities, campfire nights, sunrise treks, infinity pool and Kerala cuisine at Seagot Banasura Resorts." },
      { property: "og:title", content: "Experiences — Seagot Banasura" },
      { property: "og:description", content: "Adventure, cuisine and Kerala hospitality at Banasura Sagar." },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <SiteLayout>
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img src={pool} alt="Experiences at Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" width={1600} height={1100} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-end px-6 pb-24 text-center text-white">
          <span className="divider-gold animate-fade-up">Experiences</span>
          <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            A resort <span className="italic text-gradient-gold">designed like a day.</span>
          </h1>
        </div>
      </section>

      <section className="bg-mist px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-16">
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.title} delay={i * 40}>
              <article className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden rounded-3xl shadow-glass group">
                  <img src={e.image} alt={e.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.28em] text-gold">Experience · {String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-3 font-serif text-4xl text-emerald-deep sm:text-5xl">{e.title}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-charcoal/75">{e.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
