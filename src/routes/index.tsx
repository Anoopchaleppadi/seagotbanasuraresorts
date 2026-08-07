import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Waves, Mountain, Trees, Utensils, Flame, Users, Baby, Gamepad2, Heart, Building2, Sparkles, ChevronDown, ChevronRight, Star, Sun, Sunrise, MapPin } from "lucide-react";
import heroLake from "@/assets/hero-lake.jpg";
import aerial from "@/assets/aerial.jpg";
import pool from "@/assets/pool.jpg";
import { VILLAS } from "@/lib/villas";
import { EXPERIENCES, ATTRACTIONS, GALLERY } from "@/lib/experiences";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { RESORT, waLink } from "@/lib/resort";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seagot Banasura Resorts — Standard Lake View Resort in Wayanad" },
      {
        name: "description",
        content:
          "A standard lake-view resort by Banasura Sagar Dam, Wayanad. Private villas, infinity pool, adventure, and Kerala hospitality.",
      },
      { property: "og:title", content: "Seagot Banasura Resorts — Wayanad" },
      { property: "og:description", content: "Standard lake-view villas by Banasura Sagar Dam." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { label: "Standard Villas", value: "15" },
  { label: "Guest Rooms", value: "40" },
  { label: "Guest Capacity", value: "150" },
  { label: "Infinity Pool", value: "1" },
];

const whyItems = [
  { icon: Waves, title: "Infinity Pool", desc: "Merges into the lake's horizon." },
  { icon: Mountain, title: "Lake View Villas", desc: "Wake up to the Western Ghats." },
  { icon: Sparkles, title: "Adventure Activities", desc: "Zipline, sky-cycle, giant swing." },
  { icon: Utensils, title: "Restaurant", desc: "Kerala cuisine, lakeside setting." },
  { icon: Heart, title: "Destination Weddings", desc: "A backdrop nature composed." },
  { icon: Building2, title: "Corporate Retreats", desc: "Focused offsites in the hills." },
  { icon: Users, title: "Family Holidays", desc: "Spaces for every generation." },
  { icon: Baby, title: "Kids Play Area", desc: "Safe, imaginative, outdoors." },
  { icon: Flame, title: "Campfire", desc: "Warmth under the stars." },
  { icon: Gamepad2, title: "Indoor & Outdoor Games", desc: "From carrom to cricket." },
  { icon: Trees, title: "Nature Walks", desc: "Guided trails through Wayanad." },
  { icon: Sunrise, title: "Sunrise Trek", desc: "Chembra Peak at first light." },
];

const itineraries = [
  {
    days: "1 Day",
    title: "The Essence of Banasura",
    stops: ["Sunrise at the infinity pool", "Banasura Sagar Dam boat ride", "Kerala thali at the lakeside restaurant", "Campfire under the stars"],
  },
  {
    days: "2 Days",
    title: "Lakes, Peaks & Peace",
    stops: ["Day 1 · Banasura Dam + Karlad Lake kayaking", "Sunset yoga on the ridge", "Day 2 · Sunrise trek at Chembra Peak", "Ayurvedic dinner in villa"],
  },
  {
    days: "3 Days",
    title: "The Wayanad Grand Tour",
    stops: ["Day 1 · Arrival, pool ritual, dinner", "Day 2 · Edakkal Caves + Soochipara Falls", "Day 3 · Thirunelli Temple + Muthanga Sanctuary", "Farewell breakfast on the balcony"],
  },
];

const faqs = [
  { q: "Where exactly is Seagot Banasura Resorts located?", a: "We are set on a ridge overlooking Banasura Sagar Dam in Padinjarathara, Wayanad — about 3 km from the dam and 25 km from Kalpetta town." },
  { q: "What is the ideal season to visit Wayanad?", a: "Wayanad is a year-round destination. Monsoon (June–September) is dramatic and green; October–March is cool and clear; April–May offers hot afternoons and cool evenings." },
  { q: "Do you host destination weddings and corporate retreats?", a: "Yes. We host intimate weddings, milestone celebrations, and focused corporate offsites with full estate takeovers available for groups of up to 150 guests." },
  { q: "How do I book a villa?", a: "The fastest way is our booking form or WhatsApp at +91 9747880808. Our reservations desk answers within minutes: +91 9747440404." },
  { q: "Is breakfast included?", a: "Yes — every villa tariff includes breakfast for the base occupancy at our lakeside restaurant." },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <MonsoonOfferBanner />
      <About />
      <WhyChoose />
      <VillasPreview />
      <PlanYourStay />
      <ExperiencesSection />
      <GalleryPreview />
      <NearbyAttractions />
      <Testimonials />
      <FaqSection />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      <img
        src={heroLake}
        alt="Infinity pool overlooking Banasura Sagar Dam at golden hour"
        width={1920}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-hero-overlay" />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col items-center justify-center px-6 pt-32 text-center text-white">
        <span className="divider-gold animate-fade-up">Wayanad · Kerala</span>
        <h1
          className="mt-6 max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[92px] animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Escape to Standard at{" "}
          <span className="italic text-gradient-gold">Banasura Hills</span>
        </h1>
        <p
          className="mt-7 max-w-2xl text-lg text-white/85 sm:text-xl animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          Experience nature, elegance, comfort and unforgettable memories at
          Seagot Banasura Resorts.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Link to="/contact" hash="book" className="btn-luxe">
            Book Your Stay <ArrowRight size={18} />
          </Link>
          <Link to="/villas" className="btn-ghost-luxe">
            Explore Villas
          </Link>
        </div>

        <div
          className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass-dark rounded-2xl px-4 py-5 text-center float-slow"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <div className="font-serif text-3xl text-gold-soft">{s.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60">
        <ChevronDown className="animate-bounce" size={22} />
      </div>
    </section>
  );
}

function MonsoonOfferBanner() {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass shadow-luxe flex flex-col items-center gap-4 rounded-3xl px-6 py-6 md:flex-row md:justify-between md:px-10">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-gold text-charcoal">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-emerald">Weekday Monsoon Offer</p>
                <h3 className="mt-1 font-serif text-xl text-emerald-deep sm:text-2xl">
                  Save 25% on villa stays · Sun–Thu
                </h3>
              </div>
            </div>
            <Link to="/contact" hash="book" className="btn-luxe">
              Book Now <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, subtitle, center = true }: { eyebrow: string; title: React.ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <span className="divider-gold">{eyebrow}</span>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-emerald-deep sm:text-5xl md:text-[56px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <section className="bg-mist px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={aerial}
              width={1600}
              height={1100}
              loading="lazy"
              alt="Aerial view of Seagot Banasura Resort villas"
              className="rounded-3xl shadow-luxe object-cover w-full h-[520px]"
            />
            <div className="absolute -bottom-8 -right-4 hidden md:block glass rounded-2xl px-6 py-5 shadow-luxe max-w-xs">
              <p className="font-serif text-xl text-emerald-deep">Set beside Banasura Sagar Dam</p>
              <p className="mt-1 text-sm text-muted-foreground">Wayanad, Kerala</p>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <SectionTitle
              center={false}
              eyebrow="The Sanctuary"
              title={<>A quiet standard cradled by <span className="italic text-gradient-emerald">the Western Ghats</span>.</>}
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              Seagot Banasura Resorts sits on a hill ledge above Banasura Sagar Dam
              — Asia's largest earthen dam — where the mountains fall gently into
              still water. Fifteen private villas, hand-built in Kerala teak and
              stone, open onto the same view that has shaped these forests for centuries.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
              This is a place for slow mornings and long conversations — for
              families, small weddings, and companies who understand that the
              best ideas arrive with the mist.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/villas" className="btn-luxe">Discover the Villas</Link>
              <Link to="/experiences" className="inline-flex items-center gap-2 rounded-full border border-emerald/25 px-6 py-3 text-emerald-deep transition hover:border-gold hover:text-forest">
                Our Experiences <ChevronRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="px-6 py-28 bg-white">
      <Reveal>
        <SectionTitle eyebrow="Why Seagot" title="Twelve reasons to disappear here." />
      </Reveal>
      <div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {whyItems.map((w, i) => (
          <Reveal key={w.title} delay={i * 40}>
            <div className="group h-full rounded-3xl border border-border/60 bg-white p-7 transition-all duration-500 hover-lift hover:border-gold/60">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-emerald text-white shadow-luxe transition-transform group-hover:rotate-6 group-hover:scale-105">
                <w.icon size={22} />
              </div>
              <h3 className="mt-5 font-serif text-xl text-emerald-deep">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function VillasPreview() {
  const highlights = [VILLAS[0], VILLAS[1], VILLAS[3]];
  return (
    <section className="bg-mist px-6 py-28">
      <Reveal>
        <SectionTitle
          eyebrow="The Villas"
          title="Fifteen private residences. One lake."
          subtitle="Every villa opens to the same silent horizon — the only choice is how much of it you'd like to live in."
        />
      </Reveal>
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-3">
        {highlights.map((v, i) => (
          <Reveal key={v.slug} delay={i * 100}>
            <Link
              to="/villas/$slug"
              params={{ slug: v.slug }}
              className="group block overflow-hidden rounded-3xl bg-white shadow-glass hover-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  width={1600}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-deep/85 to-transparent" />
                {v.luxury && (
                  <span className="absolute right-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-charcoal shadow-gold-glow">
                    Standard
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-soft">{v.capacity}</p>
                  <h3 className="mt-2 font-serif text-2xl">{v.name}</h3>
                </div>
              </div>
              <div className="flex items-center justify-between px-6 py-5">
                <div>
                  <div className="text-xs text-muted-foreground">From</div>
                  <div className="font-serif text-xl text-emerald-deep">₹{v.price.toLocaleString("en-IN")}<span className="text-xs text-muted-foreground"> / night</span></div>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald transition group-hover:text-gold">
                  Discover <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/villas" className="btn-ghost-luxe !text-emerald-deep !border-emerald/30 hover:!border-gold hover:!text-gold">
          View All Villas <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function PlanYourStay() {
  return (
    <section className="relative overflow-hidden bg-gradient-emerald px-6 py-28 text-white">
      <img src={pool} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <span className="divider-gold !text-gold-soft">Plan Your Stay</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-[56px]">Itineraries composed with care.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            A few ideas for turning your stay into a story — with distances,
            mornings and moments already thought through.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {itineraries.map((it, i) => (
            <Reveal key={it.days} delay={i * 120}>
              <div className="glass-dark h-full rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-gold-glow">
                <span className="rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-charcoal">
                  {it.days}
                </span>
                <h3 className="mt-5 font-serif text-2xl text-white">{it.title}</h3>
                <ul className="mt-5 space-y-3">
                  {it.stops.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-white/85">
                      <Sun size={16} className="mt-0.5 shrink-0 text-gold-soft" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperiencesSection() {
  const feat = EXPERIENCES.slice(0, 9);
  return (
    <section className="bg-white px-6 py-28">
      <Reveal>
        <SectionTitle
          eyebrow="Experiences"
          title="Adventure, stillness, and everything in between."
        />
      </Reveal>
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {feat.map((e, i) => (
          <Reveal key={e.title} delay={i * 60}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src={e.image}
                alt={e.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <h3 className="font-serif text-2xl">{e.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/85 transition-all duration-500 group-hover:max-h-32">
                  {e.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/experiences" className="btn-luxe">All Experiences <ArrowRight size={16} /></Link>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const shots = GALLERY.slice(0, 6);
  return (
    <section className="bg-mist px-6 py-28">
      <Reveal>
        <SectionTitle eyebrow="Gallery" title="Fragments of a Wayanad morning." />
      </Reveal>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
        {shots.map((g, i) => (
          <Reveal
            key={g.src}
            delay={i * 60}
            className={`${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            <div className="group h-full w-full overflow-hidden rounded-2xl">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 ${
                  i === 0 ? "min-h-[400px] md:min-h-[520px]" : "h-56 md:h-64"
                }`}
              />
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/gallery" className="btn-ghost-luxe !text-emerald-deep !border-emerald/30 hover:!border-gold hover:!text-gold">
          Full Gallery <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function NearbyAttractions() {
  return (
    <section className="bg-white px-6 py-28">
      <Reveal>
        <SectionTitle
          eyebrow="Nearby"
          title="Wayanad at your doorstep."
          subtitle="Peaks, lakes, temples and waterfalls — the estate is our sanctuary; Wayanad is our garden."
        />
      </Reveal>
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ATTRACTIONS.map((a, i) => (
          <Reveal key={a.name} delay={i * 50}>
            <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-glass hover-lift">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={a.image} alt={a.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[11px] font-medium text-emerald-deep">
                  <MapPin size={12} /> {a.distance}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-emerald-deep">{a.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Ananya & Rohan", where: "Bangalore", quote: "The most peaceful three days of our year. The infinity pool at sunrise is unforgettable." },
  { name: "Prasad Family", where: "Kochi", quote: "Rare to find standard and warmth in the same breath. Our children still talk about the campfire." },
  { name: "Nikhil M.", where: "Mumbai", quote: "Booked the Presidential Villa for our founders' offsite. Everything, from breakfast to the bonfire, was designed with intent." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="relative overflow-hidden bg-gradient-emerald px-6 py-28 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-10 [background:radial-gradient(60%_60%_at_50%_40%,white,transparent)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <span className="divider-gold !text-gold-soft">Kind Words</span>
        <div className="mt-8 flex justify-center gap-1 text-gold">
          {[...Array(5)].map((_, k) => <Star key={k} size={18} fill="currentColor" />)}
        </div>
        <blockquote className="mt-6 font-serif text-2xl leading-snug sm:text-3xl md:text-4xl">
          "{t.quote}"
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/70">
          {t.name} · {t.where}
        </p>
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              aria-label={`Show testimonial ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-3 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-mist px-6 py-28">
      <Reveal>
        <SectionTitle eyebrow="FAQ" title="Answers to soften the planning." />
      </Reveal>
      <div className="mx-auto mt-14 max-w-3xl">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 40}>
            <div className="border-b border-border/70">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={open === i}
              >
                <span className="font-serif text-lg text-emerald-deep sm:text-xl">{f.q}</span>
                <ChevronDown className={`shrink-0 text-emerald transition-transform ${open === i ? "rotate-180" : ""}`} size={20} />
              </button>
              <div
                className={`grid overflow-hidden text-charcoal/75 transition-all duration-500 ${
                  open === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="min-h-0 leading-relaxed">{f.a}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <img src={heroLake} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/70" />
      <div className="relative mx-auto max-w-4xl text-center text-white">
        <span className="divider-gold !text-gold-soft">Reserve Your Villa</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-[64px]">
          Book your unforgettable stay today.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/85">
          Our reservations team responds personally, in minutes. Choose the villa, the season and the memory to make.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" hash="book" className="btn-luxe">Book Your Stay</Link>
          <a href={waLink(`Hello Seagot Banasura, I'd like to plan a stay.`)} target="_blank" rel="noreferrer" className="btn-ghost-luxe">
            WhatsApp +91 {RESORT.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
