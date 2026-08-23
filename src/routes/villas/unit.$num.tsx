import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Users, BedDouble, Bath, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { VILLA_UNITS, getUnit, type VillaUnit } from "@/lib/villaUnits";
import { RESORT, waLink, telLink } from "@/lib/resort";

export const Route = createFileRoute("/villas/unit/$num")({
  loader: ({ params }) => {
    const unit = getUnit(params.num);
    if (!unit) throw notFound();
    return { unit };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Villa not found" }, { name: "robots", content: "noindex" }] };
    }
    const u = loaderData.unit;
    const title = `Villa ${u.num} — ${u.parent.name}, Seagot Banasura Wayanad`;
    const desc = `Villa ${u.num} at Seagot Banasura Resorts, Wayanad. ${u.highlight} ${u.view}, ${u.parent.bedrooms} bedrooms, from ₹${u.parent.price.toLocaleString("en-IN")}/night.`;
    const path = `/villas/unit/${u.num}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: u.parent.image },
        { property: "og:type", content: "product" },
        { property: "og:url", content: path },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: u.parent.image },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HotelRoom",
            name: `Villa ${u.num} — ${u.parent.name}`,
            description: `${u.highlight} ${u.parent.description}`,
            occupancy: { "@type": "QuantitativeValue", maxValue: u.parent.adultCapacity },
            numberOfRooms: u.parent.bedrooms,
            image: u.parent.image,
            containedInPlace: { "@type": "Resort", name: "Seagot Banasura Resorts" },
            offers: {
              "@type": "Offer",
              price: u.parent.price,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Villas", item: "/villas" },
              { "@type": "ListItem", position: 3, name: `Villa ${u.num}` },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="min-h-[70vh] flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="font-serif text-5xl text-emerald-deep">Villa not found</h1>
          <Link to="/villas" className="btn-luxe mt-8">Back to Villas</Link>
        </div>
      </section>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <section className="min-h-[70vh] flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="font-serif text-4xl text-emerald-deep">Something went wrong</h1>
          <button onClick={reset} className="btn-luxe mt-6">Try Again</button>
        </div>
      </section>
    </SiteLayout>
  ),
  component: UnitPage,
});

function UnitPage() {
  const { unit: u } = Route.useLoaderData() as { unit: VillaUnit };
  const others = VILLA_UNITS.filter((x) => x.num !== u.num).slice(0, 4);
  const waMessage = `🏡 Villa ${u.num} Enquiry\n\n${u.parent.name}\nCapacity: ${u.parent.capacity}\nFrom ₹${u.parent.price.toLocaleString("en-IN")}/night\n\nPlease share availability.`;

  return (
    <SiteLayout>
      <section className="relative h-[75vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={u.parent.image}
          alt={`Villa ${u.num} — ${u.parent.name} at Seagot Banasura Resorts, Wayanad`}
          className="absolute inset-0 h-full w-full object-cover ken-burns"
          fetchPriority="high"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-20 text-white">
          <div className="mb-4">
            <Breadcrumbs items={[{ label: "Villas", to: "/villas" }, { label: `Villa ${u.num}` }]} dark />
          </div>
          <span className="divider-gold animate-fade-up">{u.floor} · {u.view}</span>
          <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Villa {u.num}
          </h1>
          <p className="mt-3 max-w-2xl font-serif text-xl text-white/80">{u.parent.name}</p>
          <p className="mt-5 max-w-2xl text-white/85 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {u.highlight}
          </p>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <div>
                <span className="divider-gold">This Unit</span>
                <h2 className="mt-4 font-serif text-3xl text-emerald-deep sm:text-4xl">
                  Villa {u.num} at a glance
                </h2>
                <p className="mt-4 text-charcoal/80">{u.parent.description}</p>
                <div className="mt-8 flex flex-wrap gap-4 text-sm">
                  <Stat icon={Users} label="Capacity" value={u.parent.capacity} />
                  <Stat icon={BedDouble} label="Bedrooms" value={`${u.parent.bedrooms}`} />
                  <Stat icon={Bath} label="Bathrooms" value={u.parent.bathrooms} />
                  {u.parent.ac && <Stat icon={Sparkles} label="Climate" value="Air Conditioned" />}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl text-emerald-deep">Features</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {u.parent.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-charcoal/85">
                      <Check size={18} className="mt-0.5 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>


            <Reveal>
              <div>
                <h2 className="font-serif text-2xl text-emerald-deep">Explore more</h2>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <Link to="/gallery" className="rounded-full border border-emerald/30 px-4 py-2 hover:border-gold hover:text-emerald-deep">Villa gallery →</Link>
                  <Link to="/experiences" className="rounded-full border border-emerald/30 px-4 py-2 hover:border-gold hover:text-emerald-deep">Experiences →</Link>
                  <Link to="/nearby-attractions" className="rounded-full border border-emerald/30 px-4 py-2 hover:border-gold hover:text-emerald-deep">Nearby attractions →</Link>
                  <Link to="/infinity-pool" className="rounded-full border border-emerald/30 px-4 py-2 hover:border-gold hover:text-emerald-deep">Infinity pool →</Link>
                </div>
              </div>
            </Reveal>
          </div>

          <aside>
            <div className="sticky top-24 space-y-4">
              <div className="glass rounded-3xl p-8 shadow-luxe">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald">From</div>
                <div className="mt-2 font-serif text-4xl text-emerald-deep">
                  ₹{u.parent.price.toLocaleString("en-IN")}
                  <span className="text-base text-muted-foreground"> / night</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Breakfast included for base occupancy</p>
                <div className="mt-6 space-y-2 text-sm text-charcoal/80">
                  <div className="flex justify-between"><span>Extra adult</span><span>₹{u.parent.extraAdult}</span></div>
                  <div className="flex justify-between"><span>Child (6–12)</span><span>₹{u.parent.child}</span></div>
                  <div className="flex justify-between"><span>Under 6</span><span>Complimentary</span></div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={waLink(waMessage)} target="_blank" rel="noreferrer" className="btn-luxe">
                    <MessageCircle size={18} /> Book via WhatsApp
                  </a>
                  <Link
                    to="/contact"
                    hash="book"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald/30 px-6 py-3 text-sm font-medium text-emerald-deep transition hover:border-gold hover:text-forest"
                  >
                    Book Now <ArrowRight size={16} />
                  </Link>
                  <a href={telLink(RESORT.phones.reservations)} className="text-center text-xs text-muted-foreground">
                    Or call +91 {RESORT.phones.reservations}
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-emerald/15 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald">Category</p>
                <Link to="/villas/$slug" params={{ slug: u.parentSlug }} className="mt-2 block font-serif text-lg text-emerald-deep hover:text-gold">
                  {u.parent.name} →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="divider-gold">Other Units</span>
              <h2 className="mt-4 font-serif text-3xl text-emerald-deep sm:text-4xl">More villas in the estate</h2>
            </div>
            <Link to="/villas" className="text-sm font-medium text-emerald hover:text-gold">All villas →</Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.num}
                to="/villas/unit/$num"
                params={{ num: o.num }}
                className="group overflow-hidden rounded-2xl bg-white shadow-glass hover-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={o.parent.image} alt={`Villa ${o.num}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald">Villa {o.num}</p>
                  <h3 className="mt-1 font-serif text-lg text-emerald-deep">{o.parent.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-emerald/15 bg-white px-4 py-3">
      <Icon size={18} className="text-gold" />
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
        <div className="text-sm font-medium text-emerald-deep">{value}</div>
      </div>
    </div>
  );
}
