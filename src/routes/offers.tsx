import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OFFERS } from "@/lib/offers";
import { Tag, Check } from "lucide-react";
import heroLake from "@/assets/hero-lake.jpg";

function OffersPage() {
  return (
    <SiteLayout>
      <section className="relative h-[52vh] min-h-[400px] w-full overflow-hidden">
        <img src={heroLake} alt="Offers at Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-14 text-white">
          <Breadcrumbs items={[{ label: "Offers" }]} dark />
          <span className="divider-gold mt-3">Special Offers</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">Offers to stay longer, and better</h1>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2">
          {OFFERS.map((o, i) => (
            <Reveal key={o.slug} delay={i * 60}>
              <article className="group relative overflow-hidden rounded-3xl bg-white shadow-luxe hover:-translate-y-1 transition">
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs text-forest"><Tag size={12} /> {o.badge}</span>
                    <span className="text-xs text-muted-foreground">Limited</span>
                  </div>
                  <h2 className="mt-4 font-serif text-2xl text-emerald-deep">{o.name}</h2>
                  <p className="mt-1 text-sm text-gold font-medium">{o.headline}</p>
                  <p className="mt-3 text-sm text-charcoal/75">{o.description}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-charcoal/80">
                    {o.perks.map((p) => (
                      <li key={p} className="flex items-start gap-1.5"><Check size={12} className="mt-0.5 text-gold shrink-0" />{p}</li>
                    ))}
                  </ul>
                  <Link to="/contact" hash="book" className="btn-luxe mt-6 w-full !py-2.5 text-sm">Claim Offer</Link>
                </div>
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-emerald opacity-10 group-hover:opacity-20 transition" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Wayanad Resort Offers & Deals — Seagot Banasura Resorts" },
      { name: "description", content: "Seasonal monsoon offer, weekday deals, group and corporate packages, and holiday specials at Seagot Banasura Resorts, Wayanad." },
      { property: "og:title", content: "Offers & Deals — Seagot Banasura" },
      { property: "og:description", content: "Monsoon, weekday, group, corporate and holiday offers in Wayanad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/offers" },
      { property: "og:image", content: heroLake },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Wayanad Resort Offers" },
      { name: "twitter:description", content: "Seasonal offers at Seagot Banasura." },
      { name: "twitter:image", content: heroLake },
    ],
    links: [{ rel: "canonical", href: "/offers" }],
  }),
  component: OffersPage,
});
