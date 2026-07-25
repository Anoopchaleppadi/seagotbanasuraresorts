import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TESTIMONIALS } from "@/lib/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import heroLake from "@/assets/hero-lake.jpg";
import pool from "@/assets/pool.jpg";
import villaThree from "@/assets/villa-three.jpg";
import villaDeluxe from "@/assets/villa-deluxe.jpg";
import aerial from "@/assets/aerial.jpg";

const guestPhotos = [heroLake, pool, villaThree, villaDeluxe, aerial];

function TestimonialsPage() {
  const [idx, setIdx] = useState(0);
  const active = TESTIMONIALS[idx];
  const total = TESTIMONIALS.length;

  return (
    <SiteLayout>
      <section className="relative h-[52vh] min-h-[400px] w-full overflow-hidden">
        <img src={heroLake} alt="Guest testimonials Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-14 text-white">
          <Breadcrumbs items={[{ label: "Testimonials" }]} dark />
          <span className="divider-gold mt-3">Guest Stories</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">Loved by families, couples & teams</h1>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative rounded-3xl bg-gradient-emerald text-white p-10 sm:p-14 shadow-luxe overflow-hidden">
              <Quote className="absolute top-6 right-8 text-white/10" size={80} />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: active.rating }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="mt-5 font-serif text-2xl sm:text-3xl leading-relaxed">"{active.text}"</p>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-medium">{active.name}</p>
                  <p className="text-white/70 text-sm">{active.location} · via {active.source}</p>
                </div>
                <div className="flex gap-2">
                  <button aria-label="Previous testimonial" onClick={() => setIdx((i) => (i - 1 + total) % total)} className="grid h-11 w-11 place-items-center rounded-full border border-white/25 hover:border-gold hover:text-gold-soft transition">
                    <ChevronLeft size={18} />
                  </button>
                  <button aria-label="Next testimonial" onClick={() => setIdx((i) => (i + 1) % total)} className="grid h-11 w-11 place-items-center rounded-full border border-white/25 hover:border-gold hover:text-gold-soft transition">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-16">
            <h2 className="font-serif text-3xl text-emerald-deep text-center">Google Reviews</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 40}>
                  <article className="rounded-3xl bg-white p-7 shadow-sm h-full">
                    <div className="flex gap-0.5 text-gold">
                      {Array.from({ length: t.rating }).map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">"{t.text}"</p>
                    <p className="mt-5 text-xs text-emerald-deep font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location} · {t.source}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-3xl text-emerald-deep text-center">Guest Photos</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
              {guestPhotos.map((p, i) => (
                <Reveal key={i} delay={i * 30}>
                  <img src={p} alt={`Guest photo ${i + 1}`} loading="lazy" decoding="async" className="h-40 md:h-56 w-full object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials & Guest Reviews — Seagot Banasura Resorts" },
      { name: "description", content: "Read what guests are saying about Seagot Banasura Resorts, Wayanad — families, couples, honeymooners and corporate groups." },
      { property: "og:title", content: "Guest Testimonials — Seagot Banasura" },
      { property: "og:description", content: "5-star Google reviews from families, couples and groups." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
      { property: "og:image", content: heroLake },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Guest Testimonials — Seagot Banasura" },
      { name: "twitter:description", content: "Reviews from families, couples and groups." },
      { name: "twitter:image", content: heroLake },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "LodgingBusiness", name: "Seagot Banasura Resorts",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: String(TESTIMONIALS.length), bestRating: "5" },
        review: TESTIMONIALS.map((t) => ({
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: String(t.rating), bestRating: "5" },
          author: { "@type": "Person", name: t.name },
          reviewBody: t.text,
        })),
      }),
    }],
  }),
  component: TestimonialsPage,
});
