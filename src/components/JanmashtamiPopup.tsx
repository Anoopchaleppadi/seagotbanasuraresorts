import { useEffect, useMemo, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import krishna from "@/assets/krishna-janmashtami.png";
import { waLink } from "@/lib/resort";

/** Temporary Krishna Janmashtami availability popup. Set to false to remove. */
export const JANMASHTAMI_POPUP_ACTIVE = true;

/** Auto-disables after this moment (IST). */
const CAMPAIGN_END = new Date("2026-09-10T23:59:00+05:30").getTime();
const STORAGE_KEY = "sbr-janmashtami-2026-seen";

const WA_MESSAGE =
  "Hi Seagot Banasura Resorts, I would like to check tomorrow's room availability and Krishna Janmashtami offer.";

function Sparkles({ count = 12 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 83) % 96}%`,
        size: 4 + ((i * 3) % 6),
        duration: 6 + ((i * 2) % 5),
        delay: -((i * 1.4) % 7),
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((s, i) => (
        <span
          key={i}
          className="krishna-spark"
          style={{
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function JanmashtamiPopup() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!JANMASHTAMI_POPUP_ACTIVE || Date.now() > CAMPAIGN_END) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* storage blocked */
    }
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
    }, 650);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 260);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[95] flex items-end justify-center overflow-y-auto p-3 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Krishna Janmashtami availability announcement"
    >
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background: "color-mix(in oklab, var(--emerald-deep) 74%, black)",
          animation: `${closing ? "krishnaFadeOut" : "krishnaFadeIn"} 0.3s ease both`,
        }}
        onClick={close}
      />

      <div
        className="relative z-10 my-auto w-full max-w-full overflow-hidden rounded-3xl border border-gold/30 shadow-luxe sm:max-w-md"
        style={{
          background:
            "linear-gradient(165deg, color-mix(in oklab, var(--background) 96%, var(--gold)), color-mix(in oklab, var(--background) 88%, var(--emerald)))",
          animation: `${closing ? "krishnaPopOut" : "krishnaPopIn"} 0.42s cubic-bezier(0.2,0.8,0.2,1) both`,
        }}
      >
        <Sparkles />

        <button
          onClick={close}
          aria-label="Close announcement"
          className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full border border-emerald/20 bg-white/70 text-emerald-deep transition hover:bg-emerald-deep hover:text-white"
        >
          <X size={16} />
        </button>

        <div className="relative px-5 pb-6 pt-6 text-center sm:px-8 sm:pb-8">
          <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-gold/45 bg-white/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-deep">
            🦚 Krishna Janmashtami Special
          </span>

          <div className="relative mx-auto mt-4 grid h-28 w-28 place-items-center sm:h-36 sm:w-36">
            <span className="krishna-aura absolute inset-0 rounded-full" aria-hidden="true" />
            <img
              src={krishna}
              alt="Illustration of Lord Krishna playing the flute"
              width={768}
              height={768}
              loading="lazy"
              decoding="async"
              className="krishna-float relative h-full w-auto object-contain"
            />
          </div>

          <h2 className="mt-4 font-serif text-2xl leading-tight text-emerald-deep sm:text-3xl">
            Today is Completely Booked
          </h2>
          <p className="mt-1 text-sm text-charcoal/70">No Availability Today</p>

          <div className="mt-5 rounded-2xl border border-gold/35 bg-white/55 px-4 py-4">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald"
              style={{ animation: "availGlow 2.4s ease-in-out infinite" }}
            >
              Tomorrow — Limited Rooms Available
            </p>
            <p className="mt-2 font-serif text-lg leading-snug text-emerald-deep sm:text-xl">
              Grab Our <span className="text-gradient-gold italic">Krishna Janmashtami</span> Offer
            </p>
          </div>

          <a
            href={waLink(WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white shadow-luxe transition hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle size={18} /> WhatsApp Us Now
          </a>

          <p className="mt-2.5 text-sm font-medium tracking-wide text-emerald-deep">
            +91 9747880808
          </p>
        </div>
      </div>
    </div>
  );
}
