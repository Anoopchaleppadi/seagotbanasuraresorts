import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { GALLERY, GALLERY_CATEGORIES } from "@/lib/experiences";
import aerial from "@/assets/aerial.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Seagot Banasura Resorts, Wayanad" },
      { name: "description", content: "Explore photos of villas, rooms, infinity pool, adventure, restaurant and nature at Seagot Banasura Resorts." },
      { property: "og:title", content: "Gallery — Seagot Banasura" },
      { property: "og:description", content: "Villas, pool, adventure and nature in Wayanad." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = cat === "All" ? GALLERY : GALLERY.filter((g) => g.category === cat);

  return (
    <SiteLayout>
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <img src={aerial} alt="Gallery hero" className="absolute inset-0 h-full w-full object-cover ken-burns" width={1600} height={1100} fetchPriority="high" />
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
                onClick={() => setCat(c)}
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
              <Reveal key={`${g.src}-${cat}`} delay={i * 40}>
                <button
                  onClick={() => setLightbox(i)}
                  className="mb-4 block w-full overflow-hidden rounded-2xl group"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-6 animate-fade-up"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass-dark text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-luxe"
          />
        </div>
      )}
    </SiteLayout>
  );
}
