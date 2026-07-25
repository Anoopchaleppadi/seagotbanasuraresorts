import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import type { LegalDoc } from "@/lib/legal";

export function LegalPage({ doc, crumbs }: { doc: LegalDoc; crumbs: Crumb[] }) {
  return (
    <SiteLayout>
      <section className="bg-gradient-emerald text-white pt-36 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={crumbs} dark />
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">{doc.title}</h1>
          <p className="mt-3 text-sm text-white/70">Last updated: {doc.updated}</p>
        </div>
      </section>
      <section className="bg-mist px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-lg text-charcoal/85">{doc.intro}</p>
          </Reveal>
          <div className="mt-10 space-y-10">
            {doc.sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 50}>
                <article className="rounded-3xl bg-white/70 backdrop-blur p-8 shadow-sm">
                  <h2 className="font-serif text-2xl text-emerald-deep">{s.heading}</h2>
                  <div className="mt-4 space-y-3 text-charcoal/80 text-sm leading-relaxed">
                    {s.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center text-sm text-muted-foreground">
            Questions? <Link to="/contact" className="text-emerald-deep hover:text-gold">Contact us</Link>.
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function legalHead(doc: LegalDoc, crumbs: Crumb[]) {
  const path = `/${doc.slug}`;
  const bcItems = [{ label: "Home", to: "/" }, ...crumbs];
  return {
    meta: [
      { title: doc.metaTitle },
      { name: "description", content: doc.metaDescription },
      { property: "og:title", content: doc.metaTitle },
      { property: "og:description", content: doc.metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: doc.metaTitle },
      { name: "twitter:description", content: doc.metaDescription },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: bcItems.map((c, i) => ({
            "@type": "ListItem", position: i + 1, name: c.label,
            item: c.to ? c.to : undefined,
          })),
        }),
      },
    ],
  };
}
