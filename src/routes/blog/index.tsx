import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Wayanad Travel, Food & Adventure | Seagot Banasura" },
      { name: "description", content: "Guides, stories and insider notes from Seagot Banasura Resorts — Wayanad travel, food, adventure, family and wedding planning." },
      { property: "og:title", content: "Seagot Banasura Blog — Wayanad Travel Guides" },
      { property: "og:description", content: "Wayanad travel, food and adventure guides from a lakeside resort." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/blog" },
      { rel: "alternate", type: "application/rss+xml", title: "Seagot Banasura Blog RSS", href: "/rss.xml" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteLayout>
      <section className="bg-mist px-6 pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <h1 className="mt-4 font-serif text-5xl text-emerald-deep sm:text-6xl">The Journal</h1>
          <p className="mt-4 max-w-2xl text-charcoal/75">
            Stories, guides and insider notes from Seagot Banasura Resorts — a lakeside estate in Wayanad.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((c) => (
              <Link
                key={c}
                to="/blog/category/$cat"
                params={{ cat: c.toLowerCase() }}
                className="rounded-full border border-emerald/25 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-deep hover:border-gold hover:text-gold"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 50}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block overflow-hidden rounded-3xl bg-white shadow-glass hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-emerald-deep">{p.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-emerald">{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
                  <h2 className="mt-2 font-serif text-xl text-emerald-deep">{p.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-charcoal/75">{p.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
