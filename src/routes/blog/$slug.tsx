import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BLOG_POSTS, getPost, type BlogPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Post not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    const path = `/blog/${params.slug}`;
    return {
      meta: [
        { title: `${p.title} — Seagot Banasura Blog` },
        { name: "description", content: p.description },
        { name: "keywords", content: p.keywords },
        { name: "author", content: p.author },
        { property: "article:published_time", content: p.date },
        { property: "article:section", content: p.category },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: path },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: p.title },
        { name: "twitter:description", content: p.description },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title,
            description: p.description,
            image: p.image,
            datePublished: p.date,
            dateModified: p.date,
            author: { "@type": "Organization", name: p.author },
            publisher: {
              "@type": "Organization",
              name: "Seagot Banasura Resorts",
              logo: { "@type": "ImageObject", url: "/favicon.ico" },
            },
            mainEntityOfPage: path,
            articleSection: p.category,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="min-h-[60vh] flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="font-serif text-4xl text-emerald-deep">Post not found</h1>
          <Link to="/blog" className="btn-luxe mt-6">Back to blog</Link>
        </div>
      </section>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <section className="min-h-[60vh] flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="font-serif text-3xl text-emerald-deep">Something went wrong</h1>
          <button onClick={reset} className="btn-luxe mt-4">Try again</button>
        </div>
      </section>
    </SiteLayout>
  ),
  component: PostPage,
});

function PostPage() {
  const { post: p } = Route.useLoaderData() as { post: BlogPost };
  const related = BLOG_POSTS.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 3);
  const fallbackRelated = related.length ? related : BLOG_POSTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <SiteLayout>
      <article className="bg-white">
        <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-hero-overlay" />
          <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-start justify-end px-6 pb-14 text-white">
            <div className="mb-4"><Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: p.title }]} dark /></div>
            <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">{p.category}</span>
            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">{p.title}</h1>
            <p className="mt-3 text-sm text-white/80">
              By {p.author} · {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 py-16 prose-lg">
          <p className="text-lg text-charcoal/85">{p.description}</p>
          {p.body.map((para, i) => (
            <p key={i} className="mt-6 text-charcoal/80 leading-relaxed">{para}</p>
          ))}

          <div className="mt-14 rounded-3xl bg-mist p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-emerald">Plan your stay</p>
            <h2 className="mt-2 font-serif text-2xl text-emerald-deep">Come see it for yourself</h2>
            <p className="mt-2 text-sm text-charcoal/75">Fifteen private villas, an infinity pool over Banasura Sagar and Kerala hospitality at its finest.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/villas" className="btn-luxe">View Villas</Link>
              <Link to="/contact" hash="book" className="rounded-full border border-emerald/30 px-5 py-2.5 text-sm font-medium text-emerald-deep hover:border-gold">Book now</Link>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-mist px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl text-emerald-deep">Related posts</h2>
            <Link to="/blog" className="text-sm text-emerald hover:text-gold">All posts →</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {fallbackRelated.map((r) => (
              <Reveal key={r.slug}>
                <Link to="/blog/$slug" params={{ slug: r.slug }} className="group block overflow-hidden rounded-2xl bg-white shadow-glass hover-lift">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-emerald">{r.category}</p>
                    <h3 className="mt-1 font-serif text-lg text-emerald-deep">{r.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
