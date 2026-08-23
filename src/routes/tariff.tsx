import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ACCOMMODATION } from "@/lib/accommodation";
import { VILLAS } from "@/lib/villas";
import { PriceSplit } from "@/components/PriceSplit";
import { Clock } from "lucide-react";
import villaDeluxe from "@/assets/villa-deluxe.jpg";

const TARIFF_MATCH: Record<string, string> = {
  "standard-2-bedroom-villa": "standard-2-bedroom",
  "deluxe-2-bedroom-villa": "deluxe-2-bedroom",
  "standard-3-bedroom-villa": "three-bedroom",
  "deluxe-4-bedroom-villa": "presidential-four-bedroom",
};

const rows = ACCOMMODATION.map((c) => {
  const villa = VILLAS.find((v) => v.slug === TARIFF_MATCH[c.slug]);
  return {
    name: c.name,
    villa,
    capacity: c.capacity,
    breakfast: "Included",
    extra: "₹ On request",
    children: "Below 5 free · 5-12 at 50%",
  };
});

function TariffPage() {
  return (
    <SiteLayout>
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden">
        <img src={villaDeluxe} alt="Tariff and pricing at Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-14 text-white">
          <Breadcrumbs items={[{ label: "Tariff" }]} dark />
          <span className="divider-gold mt-3">Pricing</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">Tariff & Rates</h1>
          <p className="mt-3 max-w-2xl text-white/85 text-lg">Transparent, per-villa rates. Reach out for real-time availability, seasonal offers and group discounts.</p>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="glass rounded-3xl shadow-luxe overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-5 bg-gradient-emerald text-white text-xs sm:text-sm uppercase tracking-wider">
                {["Accommodation", "Capacity", "Breakfast", "Extra Person", "Children"].map((h) => (
                  <div key={h} className="px-5 py-4 border-r border-white/10 last:border-0">{h}</div>
                ))}
              </div>
              {rows.map((r, i) => (
                <div key={r.name} className={`grid grid-cols-2 sm:grid-cols-5 text-sm ${i % 2 ? "bg-white/60" : "bg-white/80"}`}>
                  <div className="px-5 py-4 font-serif text-emerald-deep">{r.name}</div>
                  <div className="px-5 py-4 text-charcoal/80">{r.capacity}</div>
                  <div className="px-5 py-4 text-charcoal/80">{r.breakfast}</div>
                  <div className="px-5 py-4 text-charcoal/80">{r.extra}</div>
                  <div className="px-5 py-4 text-charcoal/80">{r.children}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-emerald text-white"><Clock size={20} /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald">Check-in</p>
                  <p className="font-serif text-xl text-emerald-deep">2:00 PM</p>
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-emerald text-white"><Clock size={20} /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald">Check-out</p>
                  <p className="font-serif text-xl text-emerald-deep">11:00 AM</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 text-center">
            <Link to="/contact" hash="book" className="btn-luxe">Book Now</Link>
            <p className="mt-3 text-xs text-muted-foreground">Rates exclude applicable taxes. Rates vary by season and length of stay.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createFileRoute("/tariff")({
  head: () => ({
    meta: [
      { title: "Tariff & Rates — Seagot Banasura Resorts, Wayanad" },
      { name: "description", content: "Villa tariffs, capacity, breakfast, extra person and children pricing at Seagot Banasura Resorts. Check-in 2 PM · Check-out 11 AM." },
      { property: "og:title", content: "Tariff — Seagot Banasura Resorts" },
      { property: "og:description", content: "Villa pricing, capacity and inclusions at our Wayanad lake resort." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tariff" },
      { property: "og:image", content: villaDeluxe },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tariff — Seagot Banasura" },
      { name: "twitter:description", content: "Villa pricing and inclusions in Wayanad." },
      { name: "twitter:image", content: villaDeluxe },
    ],
    links: [{ rel: "canonical", href: "/tariff" }],
  }),
  component: TariffPage,
});
