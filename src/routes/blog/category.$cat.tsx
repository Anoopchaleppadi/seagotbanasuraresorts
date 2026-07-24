import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BLOG_CATEGORIES, getByCategory } from "@/lib/blog";

export const Route = createFileRoute("/blog/category/$cat")({
  loader: ({ params }) => {
    const cat = BLOG_CATEGORIES.find((c) => c.toLowerCase() === params.cat.toLowerCase());
    if (!cat) throw notFound();
    return { cat, posts: getByCategory(cat) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Category not found" }, { name: "robots", content: "noindex" }] };
    const { cat } = loaderData;
    const title = `${cat} — Seagot Banasura Blog`;
    const desc = `${cat} stories, guides and travel notes from Seagot Banasura Resorts, Wayanad.`;
    const path = `/blog/category/${params.cat}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: path },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: path }],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="min-h-[60vh] flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="font-serif text-4xl text-emerald-deep">Category not found</h1>
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
  component: CategoryPage,
});

function CategoryPage() {
  const { cat, posts } = Route.useLoaderData() as { cat: string; posts: ReturnType<typeof getByCategory> };
  return (
    <SiteLayout>
      <section className="bg-mist px-6 pt-32 pb-12">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: cat }]} />
          <h1 className="mt-4 font-serif text-5xl text-emerald-deep">{cat}</h1>
          <p className="mt-3 text-charcoal/75">{posts.length} {posts.length === 1 ? "post" : "posts"} in this category.</p>
        </div>
      </section>
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block overflow-hidden rounded-3xl bg-white shadow-glass hover-lift">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl text-emerald-deep">{p.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-charcoal/75">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
