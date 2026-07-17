import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Users, Bath, Sparkles, Check, MapPin, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { getVilla, VILLAS, type Villa } from "@/lib/villas";
import { ATTRACTIONS } from "@/lib/experiences";
import { RESORT, waLink, telLink } from "@/lib/resort";

export const Route = createFileRoute("/villas/$slug")({
  loader: ({ params }) => {
    const villa = getVilla(params.slug);
    if (!villa) throw notFound();
    return { villa };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Villa not found" }, { name: "robots", content: "noindex" }] };
    }
    const v = loaderData.villa;
    return {
      meta: [
        { title: `${v.name} — Seagot Banasura Resorts, Wayanad` },
        { name: "description", content: `${v.name} at Seagot Banasura Resorts. ${v.capacity}, ${v.bedrooms} bedrooms, lake view. From ₹${v.price.toLocaleString("en-IN")}/night.` },
        { property: "og:title", content: `${v.name} — Seagot Banasura` },
        { property: "og:description", content: v.description },
        { property: "og:image", content: v.image },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/villas/${v.slug}` },
      ],
      links: [{ rel: "canonical", href: `/villas/${v.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HotelRoom",
            name: v.name,
            description: v.description,
            occupancy: { "@type": "QuantitativeValue", maxValue: v.adultCapacity },
            numberOfRooms: v.bedrooms,
            offers: { "@type": "Offer", price: v.price, priceCurrency: "INR" },
          }),
        },
      ],
    };
  },
  component: VillaDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="min-h-[70vh] flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="font-serif text-5xl text-emerald-deep">Villa not found</h1>
          <p className="mt-4 text-muted-foreground">The villa you're looking for is not in our estate.</p>
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
});

function VillaDetail() {
  const { villa: v } = Route.useLoaderData() as { villa: Villa };
  const others = VILLAS.filter((x) => x.slug !== v.slug).slice(0, 3);

  const waMessage = `🏡 Villa Enquiry\n\nVilla: ${v.name}\nCapacity: ${v.capacity}\nPrice: ₹${v.price.toLocaleString("en-IN")}/night\n\nPlease share availability.`;

  return (
    <SiteLayout>
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <img src={v.image} alt={v.name} className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" width={1600} height={1100} />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-20 text-white">
          <span className="divider-gold animate-fade-up">
            Villa {v.villaNumbers.join(" · ")}
          </span>
          <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {v.name}
          </h1>
          <p className="mt-5 max-w-2xl text-white/85 text-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {v.description}
          </p>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-14">
            <Reveal>
              <div>
                <span className="divider-gold">The Villa</span>
                <h2 className="mt-4 font-serif text-3xl text-emerald-deep sm:text-4xl">A private lake-view retreat.</h2>
                <div className="mt-8 flex flex-wrap gap-6 text-sm">
                  <Stat icon={Users} label="Capacity" value={v.capacity} />
                  <Stat icon={BedDouble} label="Bedrooms" value={`${v.bedrooms}`} />
                  <Stat icon={Bath} label="Bathrooms" value={v.bathrooms} />
                  {v.ac && <Stat icon={Sparkles} label="Climate" value="Air Conditioned" />}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h3 className="font-serif text-2xl text-emerald-deep">Features</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-charcoal/85">
                      <Check size={18} className="mt-0.5 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h3 className="font-serif text-2xl text-emerald-deep">In-villa Amenities</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {v.amenities.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-charcoal/85">
                      <Check size={18} className="mt-0.5 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="glass rounded-3xl p-8">
                <h3 className="font-serif text-2xl text-emerald-deep">Floor Layout</h3>
                <p className="mt-3 text-sm text-muted-foreground">A schematic guide to your villa's layout.</p>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {Array.from({ length: v.bedrooms }).map((_, i) => (
                    <div key={i} className="rounded-2xl border border-emerald/20 bg-white/80 p-4 text-center">
                      <BedDouble className="mx-auto text-emerald-deep" size={22} />
                      <p className="mt-2 text-sm text-charcoal/80">Bedroom {i + 1}</p>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-emerald/20 bg-white/80 p-4 text-center">
                    <Sparkles className="mx-auto text-emerald-deep" size={22} />
                    <p className="mt-2 text-sm text-charcoal/80">Living Area</p>
                  </div>
                  <div className="rounded-2xl border border-emerald/20 bg-white/80 p-4 text-center">
                    <MapPin className="mx-auto text-emerald-deep" size={22} />
                    <p className="mt-2 text-sm text-charcoal/80">Balcony · Lake View</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="sticky top-24 space-y-4">
              <div className="glass rounded-3xl p-8 shadow-luxe">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald">From</div>
                <div className="mt-2 font-serif text-4xl text-emerald-deep">
                  ₹{v.price.toLocaleString("en-IN")}<span className="text-base text-muted-foreground"> / night</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Breakfast included for base occupancy
                </p>

                <div className="mt-6 space-y-2 text-sm text-charcoal/80">
                  <div className="flex justify-between"><span>Extra adult</span><span>₹{v.extraAdult}</span></div>
                  <div className="flex justify-between"><span>Child (6–12)</span><span>₹{v.child}</span></div>
                  <div className="flex justify-between"><span>Child (under 6)</span><span>Complimentary</span></div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a href={waLink(waMessage)} target="_blank" rel="noreferrer" className="btn-luxe">
                    <MessageCircle size={18} /> Book via WhatsApp
                  </a>
                  <Link to="/contact" hash="book" className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald/30 px-6 py-3 text-sm font-medium text-emerald-deep transition hover:border-gold hover:text-forest">
                    Booking Form <ArrowRight size={16} />
                  </Link>
                  <a href={telLink(RESORT.phones.reservations)} className="text-center text-xs text-muted-foreground">
                    Or call +91 {RESORT.phones.reservations}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald/15 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald">Villa Numbers</p>
                <p className="mt-2 font-serif text-lg text-emerald-deep">
                  {v.villaNumbers.map((n) => `#${n}`).join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="divider-gold">Around You</span>
            <h2 className="mt-4 font-serif text-4xl text-emerald-deep sm:text-5xl">Nearby attractions</h2>
          </div>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 md:grid-cols-4">
          {ATTRACTIONS.slice(0, 4).map((a, i) => (
            <Reveal key={a.name} delay={i * 60}>
              <div className="overflow-hidden rounded-3xl bg-white shadow-glass hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.name} loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full glass px-2.5 py-1 text-[11px] text-emerald-deep">{a.distance}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-emerald-deep">{a.name}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="divider-gold">Also Consider</span>
              <h2 className="mt-4 font-serif text-3xl text-emerald-deep sm:text-4xl">Other villas in the estate</h2>
            </div>
            <Link to="/villas" className="text-sm font-medium text-emerald transition hover:text-gold">All villas →</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} to="/villas/$slug" params={{ slug: o.slug }} className="group overflow-hidden rounded-3xl bg-white shadow-glass hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={o.image} alt={o.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-emerald-deep">{o.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">From ₹{o.price.toLocaleString("en-IN")} / night</p>
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
