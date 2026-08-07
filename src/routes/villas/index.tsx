import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Users, Bath, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { VILLAS } from "@/lib/villas";
import heroLake from "@/assets/hero-lake.jpg";

export const Route = createFileRoute("/villas/")({
  head: () => ({
    meta: [
      { title: "Standard Villas in Wayanad — Seagot Banasura Resorts" },
      { name: "description", content: "Fifteen lake-view villas at Seagot Banasura Resorts. Standard, Deluxe, Three Bedroom and Presidential villas overlooking Banasura Sagar Dam." },
      { property: "og:title", content: "Standard Villas in Wayanad" },
      { property: "og:description", content: "Standard, Deluxe, Three Bedroom and Presidential lake-view villas." },
      { property: "og:url", content: "/villas" },
    ],
    links: [{ rel: "canonical", href: "/villas" }],
  }),
  component: VillasPage,
});

function VillasPage() {
  return (
    <SiteLayout>
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img src={heroLake} alt="Standard lake-view villas at Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" width={1920} height={1200} />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-end px-6 pb-24 text-center text-white">
          <span className="divider-gold animate-fade-up">Our Villas</span>
          <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Fifteen private villas.<br /><span className="italic text-gradient-gold">One lake.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/85 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Every villa is built to open, not to enclose — Kerala wood, glass walls and balconies over Banasura Sagar.
          </p>
        </div>
      </section>

      <section className="bg-mist px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10">
          {VILLAS.map((v, i) => (
            <Reveal key={v.slug} delay={i * 80}>
              <article className={`grid gap-10 rounded-3xl bg-white p-6 shadow-glass md:grid-cols-2 md:p-8 ${v.luxury ? "ring-1 ring-gold/40" : ""}`}>
                <Link to="/villas/$slug" params={{ slug: v.slug }} className="group relative block overflow-hidden rounded-2xl">
                  <img src={v.image} alt={v.name} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  {v.luxury && (
                    <span className="absolute right-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-charcoal shadow-gold-glow">
                      Standard
                    </span>
                  )}
                </Link>
                <div className="flex flex-col">
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald">{v.villaNumbers.length} {v.villaNumbers.length > 1 ? "villas available" : "villa"} · {v.villaNumbers.join(", ")}</p>
                  <h2 className="mt-3 font-serif text-3xl text-emerald-deep sm:text-4xl">{v.name}</h2>
                  <p className="mt-4 text-charcoal/75">{v.description}</p>

                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-charcoal/85">
                    <span className="inline-flex items-center gap-2"><Users size={16} className="text-gold" /> {v.capacity}</span>
                    <span className="inline-flex items-center gap-2"><BedDouble size={16} className="text-gold" /> {v.bedrooms} Bedrooms</span>
                    <span className="inline-flex items-center gap-2"><Bath size={16} className="text-gold" /> {v.bathrooms}</span>
                    {v.ac && <span className="inline-flex items-center gap-2"><Sparkles size={16} className="text-gold" /> Air Conditioned</span>}
                  </div>

                  <ul className="mt-6 grid grid-cols-2 gap-y-2 text-sm text-charcoal/70">
                    {v.features.slice(0, 6).map((f) => (
                      <li key={f} className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />{f}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
                    <div>
                      <div className="text-xs text-muted-foreground">From (breakfast included)</div>
                      <div className="font-serif text-3xl text-emerald-deep">
                        ₹{v.price.toLocaleString("en-IN")}<span className="text-sm text-muted-foreground"> / night</span>
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        Extra adult ₹{v.extraAdult} · Child (6–12) ₹{v.child} · Under 6 free
                      </div>
                    </div>
                    <Link to="/villas/$slug" params={{ slug: v.slug }} className="btn-luxe">
                      View Villa <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
