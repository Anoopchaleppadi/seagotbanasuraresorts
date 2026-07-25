import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Award, Leaf, Waves, Users, Home, Mountain } from "lucide-react";
import aerial from "@/assets/aerial.jpg";
import heroLake from "@/assets/hero-lake.jpg";
import pool from "@/assets/pool.jpg";

const stats = [
  { icon: Home, label: "15 Luxury Villas" },
  { icon: Award, label: "40 Elegant Rooms" },
  { icon: Users, label: "150 Guest Capacity" },
  { icon: Mountain, label: "Lake View Resort" },
  { icon: Waves, label: "Infinity Pool" },
  { icon: Leaf, label: "Nature Experience" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative h-[62vh] min-h-[460px] w-full overflow-hidden">
        <img src={aerial} alt="Aerial view of Seagot Banasura Resorts" className="absolute inset-0 h-full w-full object-cover ken-burns" width={1920} height={1200} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-16 text-white">
          <Breadcrumbs items={[{ label: "About Us" }]} dark />
          <span className="divider-gold mt-3">Our Story</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">A quiet luxury above Banasura Sagar</h1>
          <p className="mt-4 max-w-2xl text-white/85 text-lg">Seagot Banasura Resorts began as a promise — to build a retreat that belongs to Wayanad, not one imposed on it. Fifteen villas, forty rooms, one lake, and an unhurried Kerala hospitality.</p>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div>
              <span className="divider-gold">The Story</span>
              <h2 className="mt-3 font-serif text-4xl text-emerald-deep">Built with the Ghats in mind</h2>
              <p className="mt-5 text-charcoal/80">Perched above the Banasura Sagar Dam — India's largest earthen dam — Seagot Banasura was designed by architects and gardeners who spent a year on site before drawing a single line. Every villa opens to the lake. Every walkway follows the natural contour of the land.</p>
              <p className="mt-4 text-charcoal/80">The result is a resort that feels less like a hotel and more like a private estate — one you happen to be visiting.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <img src={heroLake} alt="Banasura Sagar lake view from Seagot Banasura Resorts" loading="lazy" decoding="async" className="rounded-3xl shadow-luxe h-[420px] w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="divider-gold mx-auto">Why choose us</span>
            <h2 className="mt-3 font-serif text-4xl text-emerald-deep">A stay engineered around the view</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="glass rounded-3xl p-8 text-center shadow-luxe hover:-translate-y-1 transition">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-emerald text-white shadow-luxe">
                    <s.icon size={22} />
                  </div>
                  <p className="mt-4 font-serif text-xl text-emerald-deep">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-emerald text-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-10">
              <span className="text-xs uppercase tracking-[0.28em] text-gold-soft">Mission</span>
              <h3 className="mt-3 font-serif text-3xl">To host you as Wayanad would</h3>
              <p className="mt-4 text-white/85">Slow mornings. Home-cooked Kerala meals. Staff who remember your name. Rooms that open to a horizon you didn't expect. A place where luxury is measured in silence, not gold.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-10">
              <span className="text-xs uppercase tracking-[0.28em] text-gold-soft">Vision</span>
              <h3 className="mt-3 font-serif text-3xl">Kerala's most loved lake resort</h3>
              <p className="mt-4 text-white/85">To be the resort families return to across generations — one that grows more thoughtful, more sustainable and more rooted with every season.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={pool} alt="Infinity pool at Seagot Banasura Resorts" loading="lazy" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center text-white">
          <h2 className="font-serif text-4xl sm:text-5xl">Come stay with us</h2>
          <p className="mt-3 text-white/85 max-w-xl">Reserve a villa, plan a wedding, or send us questions — we typically reply within an hour.</p>
          <Link to="/contact" hash="book" className="btn-luxe mt-6">Book your stay</Link>
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Seagot Banasura Resorts, Wayanad" },
      { name: "description", content: "The story, mission and vision behind Seagot Banasura Resorts — a 15-villa, 40-room lake-view luxury resort near Banasura Sagar Dam, Wayanad." },
      { property: "og:title", content: "About Seagot Banasura Resorts — Luxury Lake View Resort in Wayanad" },
      { property: "og:description", content: "15 villas, 40 rooms, 150 guests. A Kerala luxury retreat above Banasura Sagar Dam." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about-us" },
      { property: "og:image", content: aerial },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Seagot Banasura Resorts" },
      { name: "twitter:description", content: "15 villas, 40 rooms, 150 guests. Luxury above Banasura Sagar." },
      { name: "twitter:image", content: aerial },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "About Us", item: "/about-us" },
        ],
      }),
    }],
  }),
  component: AboutPage,
});
