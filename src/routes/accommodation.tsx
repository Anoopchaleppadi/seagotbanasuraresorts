import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ACCOMMODATION } from "@/lib/accommodation";
import { Users, ArrowRight, Check } from "lucide-react";
import villaPresidential from "@/assets/villa-presidential.jpg";

function AccommodationPage() {
  return (
    <SiteLayout>
      <section className="relative h-[54vh] min-h-[420px] w-full overflow-hidden">
        <img src={villaPresidential} alt="Standard villa accommodation at Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-14 text-white">
          <Breadcrumbs items={[{ label: "Accommodation" }]} dark />
          <span className="divider-gold mt-3">Rooms & Villas</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">The Seagot Collection</h1>
          <p className="mt-3 max-w-2xl text-white/85 text-lg">Five private houses in The Seagot Collection — each designed around space, quiet and a view of the Wayanad landscape.</p>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2">
          {ACCOMMODATION.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <article className="group overflow-hidden rounded-3xl bg-white shadow-luxe hover:-translate-y-1 transition">
                <div className="relative h-64 overflow-hidden">
                  <img src={c.hero} alt={c.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs text-emerald-deep">
                    <Users size={12} /> {c.capacity}
                  </span>
                </div>
                <div className="p-8">
                  <h2 className="font-serif text-2xl text-emerald-deep">{c.name}</h2>
                  <p className="mt-2 text-sm text-charcoal/75">{c.description}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-charcoal/80">
                    {c.facilities.map((f) => (
                      <li key={f} className="flex items-start gap-1.5"><Check size={12} className="mt-0.5 text-gold shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between">
                    <Link to="/contact" hash="book" className="btn-luxe !py-2.5 !px-5 text-sm">Book Now</Link>
                    <Link to="/villas" className="inline-flex items-center gap-1 text-sm text-emerald-deep hover:text-gold">View the collection <ArrowRight size={14} /></Link>
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

export const Route = createFileRoute("/accommodation")({
  head: () => ({
    meta: [
      { title: "The Seagot Collection — Private Houses at Seagot Banasura, Wayanad" },
      { name: "description", content: "Explore The Seagot Collection — The Lake House, The Signature House, The Grand House, The Grand Ensuite House and The Banasura Residence, all with lake and mountain views." },
      { property: "og:title", content: "Accommodation at Seagot Banasura Resorts" },
      { property: "og:description", content: "Five private houses with lake and mountain views in Wayanad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/accommodation" },
      { property: "og:image", content: villaPresidential },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accommodation at Seagot Banasura Resorts" },
      { name: "twitter:description", content: "Five private houses in Wayanad." },
      { name: "twitter:image", content: villaPresidential },
    ],
    links: [{ rel: "canonical", href: "/accommodation" }],
  }),
  component: AccommodationPage,
});
