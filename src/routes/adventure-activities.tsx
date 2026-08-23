import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import expZipline from "@/assets/exp-zipline.jpg";
import expTrek from "@/assets/exp-trek.jpg";
import expCampfire from "@/assets/exp-campfire.jpg";
import expRestaurant from "@/assets/exp-restaurant.jpg";
import aerial from "@/assets/aerial.jpg";
import pool from "@/assets/pool.jpg";
import heroLake from "@/assets/hero-lake.jpg";

const activities = [
  { name: "Zipline", image: expZipline, desc: "Fly across the estate on a 400m twin-cable zipline with lake views." },
  { name: "Sky Cycling", image: aerial, desc: "Balance across a suspended cable — a heart-in-mouth photo moment." },
  { name: "Giant Swing", image: expZipline, desc: "The signature Wayanad giant swing — a controlled free-fall into the trees." },
  { name: "Kayaking", image: heroLake, desc: "Paddle across Banasura Sagar with our licensed kayak guides." },
  { name: "Soft Trekking", image: expTrek, desc: "Guided 2–4 hour treks through nearby estates and forest trails." },
  { name: "Nature Walk", image: expTrek, desc: "Slow guided walks with our resident naturalist." },
  { name: "Campfire", image: expCampfire, desc: "Nightly bonfire with music, stories and Wayanad-spiced hot toddy." },
  { name: "BBQ", image: expRestaurant, desc: "Live barbecue counters featuring Malabar spice-rubbed meats and veg." },
];

function AdventurePage() {
  return (
    <SiteLayout>
      <section className="relative h-[60vh] min-h-[460px] w-full overflow-hidden">
        <img src={expZipline} alt="Adventure activities at Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-16 text-white">
          <Breadcrumbs items={[{ label: "Adventure Activities" }]} dark />
          <span className="divider-gold mt-3">Adventure</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">Adrenaline, framed by the Ghats</h1>
          <p className="mt-3 max-w-2xl text-white/85 text-lg">Eight on-site activities — from zipline to kayaking on Banasura Sagar — designed for solo travellers, families and groups.</p>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <Reveal key={a.name} delay={i * 50}>
                <article className="group overflow-hidden rounded-3xl bg-white shadow-luxe hover:-translate-y-1 transition">
                  <div className="relative h-56 overflow-hidden">
                    <img src={a.image} alt={`${a.name} at Seagot Banasura`} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 font-serif text-2xl text-white">{a.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-charcoal/75">{a.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" hash="book" className="btn-luxe">Book activities with your stay</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createFileRoute("/adventure-activities")({
  head: () => ({
    meta: [
      { title: "Adventure Activities in Wayanad — Seagot Banasura Resorts" },
      { name: "description", content: "Zipline, sky cycling, giant swing, kayaking, trekking, nature walks, campfire and BBQ — all on-site at Seagot Banasura Resorts, Wayanad." },
      { property: "og:title", content: "Adventure Activities — Seagot Banasura Resorts" },
      { property: "og:description", content: "9 on-site adventure activities in the Wayanad Western Ghats." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/adventure-activities" },
      { property: "og:image", content: expZipline },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Adventure Activities — Seagot Banasura" },
      { name: "twitter:description", content: "Zipline, kayaking, trekking and more in Wayanad." },
      { name: "twitter:image", content: expZipline },
    ],
    links: [{ rel: "canonical", href: "/adventure-activities" }],
  }),
  component: AdventurePage,
});
