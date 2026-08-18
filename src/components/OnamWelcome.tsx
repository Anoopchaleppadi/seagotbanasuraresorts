import { useEffect, useMemo, useState } from "react";
import { X, MessageCircle, Sparkles } from "lucide-react";
import maveli from "@/assets/onam-maveli.png";
import logo from "@/assets/seagot-banasura-logo.jpg";
import { waLink } from "@/lib/resort";

/** Onam experience auto-disables after this date. */
const ONAM_END = new Date("2026-08-31T00:00:00+05:30").getTime();
const STORAGE_KEY = "sbr-onam-2026-seen";

const WA_MESSAGE =
  "Hi Seagot Banasura Resorts, I'm interested in the Onam package. Please share the details.";

const PETAL_COLORS = [
  "var(--gold)",
  "var(--gold-soft)",
  "oklch(0.72 0.17 45)",
  "oklch(0.85 0.13 95)",
  "oklch(0.62 0.15 25)",
];

function Petals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 97) % 100}%`,
        size: 8 + ((i * 7) % 10),
        duration: 7 + ((i * 3) % 6),
        delay: -((i * 1.7) % 8),
        drift: `${((i % 5) - 2) * 3}vw`,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="onam-petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: 0.7,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--drift" as string]: p.drift,
          }}
        />
      ))}
    </div>
  );
}

function Pookalam({ className = "" }: { className?: string }) {
  return (
    <div className={`relative grid place-items-center ${className}`} aria-hidden="true">
      {[0, 1, 2].map((ring) => (
        <div
          key={ring}
          className="absolute rounded-full border"
          style={{
            inset: `${ring * 12}%`,
            borderColor: ring % 2 ? "color-mix(in oklab, var(--gold) 55%, transparent)" : "color-mix(in oklab, var(--emerald) 45%, transparent)",
            borderStyle: ring === 1 ? "dashed" : "solid",
            animation: `onamRingSpin ${28 + ring * 14}s linear infinite ${ring % 2 ? "reverse" : ""}`,
          }}
        />
      ))}
      {Array.from({ length: 12 }, (_, i) => (
        <span
          key={i}
          className="absolute inset-0 block"
          style={{ transform: `rotate(${i * 30}deg)` }}
        >
          <span
            className="absolute left-1/2 top-[7%] block h-[9%] w-[9%] -translate-x-1/2 rounded-full"
            style={{ background: PETAL_COLORS[i % PETAL_COLORS.length], opacity: 0.85 }}
          />
        </span>
      ))}
      <span className="block h-4 w-4 rounded-full bg-gradient-gold" />
    </div>
  );
}

export function OnamWelcome() {
  const [scene, setScene] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    if (Date.now() > ONAM_END) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage blocked — show once for this page load */
    }
    setScene(1);
  }, []);

  useEffect(() => {
    if (scene !== 1) return;
    const t = setTimeout(() => setScene(2), 2800);
    return () => clearTimeout(t);
  }, [scene]);

  useEffect(() => {
    if (scene === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setScene(0);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [scene]);

  if (scene === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Onam celebrations at Seagot Banasura Resorts"
    >
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{ background: "color-mix(in oklab, var(--emerald-deep) 78%, black)" }}
        onClick={() => scene === 2 && setScene(0)}
      />
      <Petals />

      {scene === 1 ? (
        <div className="relative z-10 flex flex-col items-center text-center">
          <Pookalam className="h-40 w-40 sm:h-52 sm:w-52" />
          <img
            src={maveli}
            alt="Illustration of King Mahabali"
            width={816}
            height={816}
            className="mt-4 h-28 w-auto sm:h-36"
            style={{ animation: "onamBloom 1s cubic-bezier(0.2,0.8,0.2,1) both 0.2s" }}
          />
          <p
            className="mt-6 text-[11px] uppercase tracking-[0.4em] text-gold-soft"
            style={{ animation: "onamRise 0.8s ease-out both 0.3s" }}
          >
            Celebrate Onam
          </p>
          <h2
            className="mt-3 max-w-xl font-serif text-3xl leading-tight text-white sm:text-5xl"
            style={{ animation: "onamRise 0.9s ease-out both 0.7s" }}
          >
            At <span className="italic text-gradient-gold">Seagot Banasura Resorts</span>
          </h2>
          <p
            className="mt-4 text-sm text-white/80 sm:text-base"
            style={{ animation: "onamRise 0.9s ease-out both 1.2s" }}
          >
            Where Nature Meets Tradition
          </p>
          <button
            onClick={() => setScene(2)}
            className="mt-8 rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-gold hover:text-gold-soft"
          >
            Skip
          </button>
        </div>
      ) : (
        <div
          className="relative z-10 max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/25 bg-cream/95 p-6 text-center shadow-luxe sm:p-9"
          style={{
            background: "color-mix(in oklab, var(--background) 96%, var(--gold))",
            animation: "onamScaleIn 0.6s cubic-bezier(0.2,0.8,0.2,1) both",
          }}
        >
          <button
            onClick={() => setScene(0)}
            aria-label="Close Onam offer"
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-emerald/20 text-emerald-deep transition hover:bg-emerald-deep hover:text-white"
          >
            <X size={16} />
          </button>

          <img src={logo} alt="Seagot Banasura Resorts" width={200} height={80} className="mx-auto h-12 w-auto" />

          <div className="mt-5 flex items-center justify-center gap-4">
            <Pookalam className="h-16 w-16 shrink-0" />
            <img
              src={maveli}
              alt="Illustration of King Mahabali"
              width={816}
              height={816}
              loading="lazy"
              className="h-24 w-auto sm:h-28"
            />
            <Pookalam className="h-16 w-16 shrink-0" />
          </div>

          <p className="mt-5 text-[10px] uppercase tracking-[0.32em] text-emerald">
            Wayanad · Kerala
          </p>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-emerald-deep sm:text-3xl">
            Onam Celebrations at Seagot
          </h2>
          <p className="mt-2 text-sm text-charcoal/75">
            Experience the Spirit of Onam in Wayanad
          </p>

          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-charcoal/80 sm:text-sm">
            Traditional Sadya • Resort Stay • Nature • Family Moments
          </p>

          <a
            href={waLink(WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setScene(0)}
            className="btn-luxe mt-7 w-full justify-center"
          >
            <MessageCircle size={18} /> Grab Onam Package
          </a>

          <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-charcoal/60">
            <Sparkles size={12} /> WhatsApp +91 9747880808
          </p>
        </div>
      )}
    </div>
  );
}
