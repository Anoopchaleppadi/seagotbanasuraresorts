import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { waLink } from "@/lib/resort";
import { Flame, Music, Moon, Tent, Leaf, Utensils } from "lucide-react";
import expCampfire from "@/assets/exp-campfire.jpg";
import expTrek from "@/assets/exp-trek.jpg";

const features = [
  { icon: Tent, name: "Camping", desc: "Premium waterproof tents with cots, linen and fairy lights." },
  { icon: Flame, name: "Bonfire", desc: "Roaring fire, cushioned seating and Wayanad hot toddy." },
  { icon: Music, name: "Live Music", desc: "Acoustic sets and DJ nights on request." },
  { icon: Moon, name: "Night Stay", desc: "Sleep under the Ghats' clearest starlit sky." },
  { icon: Utensils, name: "BBQ Dinner", desc: "Grilled dinner with Kerala-spiced marinades." },
  { icon: Leaf, name: "Nature Experience", desc: "Guided dawn walk and birdwatching." },
];

function CampingPage() {
  return (
    <SiteLayout>
      <section className="relative h-[62vh] min-h-[460px] w-full overflow-hidden">
        <img src={expCampfire} alt="Luxury camping and bonfire at Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-16 text-white">
          <Breadcrumbs items={[{ label: "Camping" }]} dark />
          <span className="divider-gold mt-3">Under the stars</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">Camping at Banasura Sagar</h1>
          <p className="mt-3 max-w-2xl text-white/85 text-lg">A premium tented experience — bonfire, live music and a night sky you won't get in the city.</p>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.name} delay={i * 50}>
                <div className="glass rounded-3xl p-7 hover:-translate-y-1 transition shadow-luxe">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-emerald text-white shadow-luxe"><f.icon size={20} /></div>
                  <h3 className="mt-4 font-serif text-xl text-emerald-deep">{f.name}</h3>
                  <p className="mt-2 text-sm text-charcoal/75">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <aside>
            <div className="sticky top-32 glass rounded-3xl p-8 shadow-luxe">
              <img src={expTrek} alt="Camp site" loading="lazy" className="rounded-2xl h-40 w-full object-cover" />
              <h3 className="mt-5 font-serif text-2xl text-emerald-deep">Book Camping</h3>
              <p className="mt-2 text-sm text-charcoal/70">Bookings are subject to weather and minimum group size (4 pax).</p>
              <a href={waLink("Hi Seagot Banasura, I'd like to book the camping experience.")} target="_blank" rel="noreferrer" className="btn-luxe mt-6 w-full">Book Camping</a>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createFileRoute("/camping")({
  head: () => ({
    meta: [
      { title: "Camping in Wayanad — Bonfire & Night Stay at Seagot Banasura" },
      { name: "description", content: "Premium camping in Wayanad — tented night stay, bonfire, live music and BBQ dinner overlooking Banasura Sagar Dam." },
      { property: "og:title", content: "Camping in Wayanad — Seagot Banasura Resorts" },
      { property: "og:description", content: "Luxury tented camping, bonfire and stargazing above Banasura Sagar." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/camping" },
      { property: "og:image", content: expCampfire },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Camping in Wayanad — Seagot Banasura" },
      { name: "twitter:description", content: "Luxury camping, bonfire and stargazing." },
      { name: "twitter:image", content: expCampfire },
    ],
    links: [{ rel: "canonical", href: "/camping" }],
  }),
  component: CampingPage,
});
