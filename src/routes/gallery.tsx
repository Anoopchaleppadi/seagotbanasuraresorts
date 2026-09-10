import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { GALLERY_DATA } from "@/lib/gallery";
import { IMAGES, galleryPhotoList } from "@/lib/images";

/** Merge auto-discovered folder photos with curated GALLERY_DATA, deduped by src URL. */
const ALL_GALLERY = (() => {
  const folder = galleryPhotoList().map((p) => ({ src: p.src, category: p.category, alt: p.alt }));
  const seen = new Set(folder.map((g) => g.src));
  const merged = [...folder];
  for (const g of GALLERY_DATA) {
    if (!seen.has(g.src)) {
      seen.add(g.src);
      merged.push(g);
    }
  }
  return merged;
})();

const GALLERY_CATEGORIES = ["All", ...Array.from(new Set(ALL_GALLERY.map((g) => g.category)))];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Seagot Banasura Resorts, Wayanad" },
      { name: "description", content: "Explore photos of villas, rooms, infinity pool, adventure, restaurant and nature at Seagot Banasura Resorts." },
      { property: "og:title", content: "Gallery — Seagot Banasura" },
      { property: "og:description", content: "Villas, pool, adventure and nature in Wayanad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = cat === "All" ? ALL_GALLERY : ALL_GALLERY.filter((g) => g.category === cat);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (d: number) => setLightbox((i) => (i === null ? i : (i + d + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, step]);

  const active = lightbox !== null ? filtered[lightbox] : null;

  return (
    <SiteLayout>
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <img src={IMAGES.resort.aerial} alt="Aerial view of Seagot Banasura Resorts, Wayanad" className="absolute inset-0 h-full w-full object-cover ken-burns" width={1600} height={1100} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-end px-6 pb-16 text-center text-white">
          <span className="divider-gold animate-fade-up">Gallery</span>
          <h1 className="mt-5 font-serif text-5xl sm:text-6xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Moments from Banasura Hills
          </h1>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => { setCat(c); setLightbox(null); }}
                className={`rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition ${
                  cat === c
                    ? "border-transparent bg-gradient-emerald text-white shadow-luxe"
                    : "border-emerald/20 bg-white text-charcoal/80 hover:border-gold hover:text-emerald-deep"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:balance]">
            {filtered.map((g, i) => (
              <Reveal key={`${g.src}-${g.alt}-${cat}`} delay={i * 40}>
                <button
                  onClick={() => setLightbox(i)}
                  className="mb-4 block w-full overflow-hidden rounded-2xl group"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-6 animate-fade-up"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass-dark text-white"
            onClick={close}
          >
            <X size={20} />
          </button>

          <span className="absolute left-6 top-6 rounded-full glass-dark px-4 py-2 text-xs tracking-[0.2em] uppercase text-white/90">
            {active.category} · {(lightbox ?? 0) + 1} / {filtered.length}
          </span>

          <button
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full glass-dark text-white transition hover:text-gold"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full glass-dark text-white transition hover:text-gold"
            onClick={(e) => { e.stopPropagation(); step(1); }}
          >
            <ChevronRight size={22} />
          </button>

          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-luxe"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {active.caption ?? active.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </SiteLayout>
  );
}
