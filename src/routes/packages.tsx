import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PACKAGES } from "@/lib/packages";
import { Check, Sparkles } from "lucide-react";
import aerial from "@/assets/aerial.jpg";

function PackagesPage() {
  return (
    <SiteLayout>
      <section className="relative h-[52vh] min-h-[400px] w-full overflow-hidden">
        <img src={aerial} alt="Resort packages at Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-14 text-white">
          <Breadcrumbs items={[{ label: "Packages" }]} dark />
          <span className="divider-gold mt-3">Curated stays</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">Packages for every kind of trip</h1>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.slug} delay={i * 50}>
              <article className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-luxe hover:-translate-y-1 transition">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-gold">
                  <Sparkles size={12} /> {p.tag}
                </div>
                <h2 className="mt-3 font-serif text-2xl text-emerald-deep">{p.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.priceLabel}</p>
                <ul className="mt-5 space-y-2 text-sm text-charcoal/80">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2"><Check size={14} className="mt-0.5 text-gold shrink-0" />{h}</li>
                  ))}
                </ul>
                <Link to="/contact" hash="book" className="btn-luxe mt-7 w-full !py-2.5 text-sm">Book Now</Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Wayanad Resort Packages — Family, Corporate, Honeymoon | Seagot Banasura" },
      { name: "description", content: "Curated stay packages at Seagot Banasura Resorts — family, bachelor, corporate, weekend, honeymoon, school, college and group packages in Wayanad." },
      { property: "og:title", content: "Resort Packages — Seagot Banasura" },
      { property: "og:description", content: "Family, corporate, honeymoon and group packages in Wayanad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/packages" },
      { property: "og:image", content: aerial },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Wayanad Resort Packages" },
      { name: "twitter:description", content: "Family, corporate, honeymoon and group packages." },
      { name: "twitter:image", content: aerial },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});
