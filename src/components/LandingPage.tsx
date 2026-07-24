import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { RESORT, waLink, telLink } from "@/lib/resort";
import type { LandingPageData } from "@/lib/landing";

export function LandingPage({ data, crumbs }: { data: LandingPageData; crumbs: Crumb[] }) {
  const waMessage = `Hi Seagot Banasura, I'm interested in ${data.h1}. Please share details and availability.`;
  return (
    <SiteLayout>
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={data.hero}
          alt={`${data.h1} at Seagot Banasura Resorts, Wayanad`}
          className="absolute inset-0 h-full w-full object-cover ken-burns"
          fetchPriority="high"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-20 text-white">
          <div className="mb-4"><Breadcrumbs items={crumbs} dark /></div>
          <span className="divider-gold animate-fade-up">{data.eyebrow}</span>
          <h1
            className="mt-4 font-serif text-4xl leading-tight sm:text-6xl md:text-7xl animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            {data.h1}
          </h1>
          <p
            className="mt-5 max-w-2xl text-white/85 text-lg animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {data.intro}
          </p>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {data.sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 60}>
                <article>
                  <h2 className="font-serif text-3xl text-emerald-deep sm:text-4xl">{s.heading}</h2>
                  <p className="mt-4 text-charcoal/80">{s.body}</p>
                </article>
              </Reveal>
            ))}

            <Reveal>
              <div>
                <h2 className="font-serif text-3xl text-emerald-deep">Amenities & Highlights</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {data.amenities.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-charcoal/85">
                      <Check size={18} className="mt-0.5 shrink-0 text-gold" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-3xl text-emerald-deep">Frequently Asked Questions</h2>
                <div className="mt-6 divide-y divide-emerald/15 rounded-3xl bg-white/70 backdrop-blur">
                  {data.faqs.map((f) => (
                    <details key={f.q} className="group p-6">
                      <summary className="flex cursor-pointer items-start justify-between gap-4 font-medium text-emerald-deep">
                        <span>{f.q}</span>
                        <span className="text-gold transition group-open:rotate-45">＋</span>
                      </summary>
                      <p className="mt-3 text-sm text-charcoal/75">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <aside>
            <div className="sticky top-24 space-y-4">
              <div className="glass rounded-3xl p-8 shadow-luxe">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald">Reserve</div>
                <h3 className="mt-3 font-serif text-2xl text-emerald-deep">Plan your stay</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Speak with our reservations team, or book instantly on WhatsApp.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={waLink(waMessage)} target="_blank" rel="noreferrer" className="btn-luxe">
                    <MessageCircle size={18} /> WhatsApp us
                  </a>
                  <Link
                    to="/contact"
                    hash="book"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald/30 px-6 py-3 text-sm font-medium text-emerald-deep transition hover:border-gold hover:text-forest"
                  >
                    Book Now <ArrowRight size={16} />
                  </Link>
                  <a
                    href={telLink(RESORT.phones.reservations)}
                    className="inline-flex items-center justify-center gap-2 text-center text-xs text-muted-foreground hover:text-emerald-deep"
                  >
                    <Phone size={12} /> +91 {RESORT.phones.reservations}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald/15 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald">Related</p>
                <ul className="mt-3 space-y-2 text-sm text-charcoal/80">
                  {data.related.map((r) => (
                    <li key={r.to}>
                      <Link to={r.to} className="inline-flex items-center gap-1 hover:text-emerald-deep">
                        {r.label} <ArrowRight size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

export function landingHead(data: LandingPageData, base: string, crumbs: Crumb[]) {
  const path = `/${data.slug}`;
  const bcItems = [{ label: "Home", to: "/" }, ...crumbs];
  return {
    meta: [
      { title: data.title },
      { name: "description", content: data.description },
      { name: "keywords", content: data.keywords },
      { property: "og:title", content: data.title },
      { property: "og:description", content: data.description },
      { property: "og:image", content: data.hero },
      { property: "og:type", content: "article" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: data.title },
      { name: "twitter:description", content: data.description },
      { name: "twitter:image", content: data.hero },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: bcItems.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: c.to ? `${base}${c.to}` : undefined,
          })),
        }),
      },
    ],
  };
}
