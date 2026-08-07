import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AMENITIES } from "@/lib/amenities";
import pool from "@/assets/pool.jpg";

function AmenitiesPage() {
  return (
    <SiteLayout>
      <section className="relative h-[52vh] min-h-[400px] w-full overflow-hidden">
        <img src={pool} alt="Resort amenities at Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-14 text-white">
          <Breadcrumbs items={[{ label: "Resort Amenities" }]} dark />
          <span className="divider-gold mt-3">Amenities</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">Everything you need. Nothing you don't.</h1>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.name} delay={i * 40}>
                <div className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-luxe hover:-translate-y-1 transition">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-emerald transition duration-500" />
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-emerald text-white shadow-luxe group-hover:bg-white group-hover:text-emerald-deep transition">
                      <a.icon size={22} />
                    </div>
                    <h3 className="mt-5 font-serif text-xl text-emerald-deep group-hover:text-white transition">{a.name}</h3>
                    <p className="mt-2 text-sm text-charcoal/70 group-hover:text-white/85 transition">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createFileRoute("/resort-amenities")({
  head: () => ({
    meta: [
      { title: "Resort Amenities — Seagot Banasura Resorts, Wayanad" },
      { name: "description", content: "Infinity pool, restaurant, 24-hour reception, campfire, BBQ, adventure activities, kids area and more — every amenity at Seagot Banasura Resorts." },
      { property: "og:title", content: "Resort Amenities — Seagot Banasura Resorts" },
      { property: "og:description", content: "14 world-class amenities at our lake-view standard resort in Wayanad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resort-amenities" },
      { property: "og:image", content: pool },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Resort Amenities — Seagot Banasura" },
      { name: "twitter:description", content: "Infinity pool, restaurant, adventure and more." },
      { name: "twitter:image", content: pool },
    ],
    links: [{ rel: "canonical", href: "/resort-amenities" }],
  }),
  component: AmenitiesPage,
});
