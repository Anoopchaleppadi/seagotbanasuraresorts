import { useEffect, useMemo, useState } from "react";
import { X, Flower2, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/resort";

/** Temporary Onam-weekend availability announcement. Edit or set active:false to remove. */
export const availabilityAlert = {
  active: true,
  startDate: "2026-08-20",
  endDate: "2026-08-22",
  dates: "21st & 22nd August",
  status: "Almost Full",
  message: "Only Limited Villas Available",
};

const DISMISS_KEY = "sbr-availability-2026-08-dismissed";
const WA_MESSAGE =
  "Hi Seagot Banasura Resorts, I would like to check availability for 21st/22nd August.";

/** Uses the visitor's local date: visible from startDate 00:00 through endDate 23:59. */
function withinWindow() {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate(),
  ).padStart(2, "0")}`;
  return today >= availabilityAlert.startDate && today <= availabilityAlert.endDate;
}

function Petals({ count = 10 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 100) / count + 3}%`,
        size: 5 + ((i * 3) % 5),
        duration: 9 + ((i * 2) % 5),
        delay: -((i * 1.3) % 9),
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="avail-petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function AvailabilityAlert() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!availabilityAlert.active || !withinWindow()) return;
    try {
      if (sessionStorage.getItem(DISMISS_KEY) || localStorage.getItem(DISMISS_KEY)) {
        setDismissed(true);
      }
    } catch {
      /* storage blocked */
    }
    setVisible(true);
  }, []);

  if (!visible) return null;

  const close = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* storage blocked */
    }
  };

  const cta = (
    <a
      href={waLink(WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-deep transition hover:brightness-110"
    >
      <MessageCircle size={13} /> <span className="hidden sm:inline">Check Availability</span>
      <span className="sm:hidden">Check Now</span>
    </a>
  );

  // Compact persistent badge after dismissal
  if (dismissed) {
    return (
      <a
        href={waLink(WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Onam weekend availability — check now on WhatsApp"
        className="fixed bottom-6 left-4 z-[85] inline-flex items-center gap-2 rounded-full border border-gold/40 px-3.5 py-2 text-[11px] font-medium text-white shadow-luxe transition hover:scale-105 sm:left-5"
        style={{ background: "color-mix(in oklab, var(--emerald-deep) 94%, black)" }}
      >
        <span
          className="block h-1.5 w-1.5 rounded-full bg-gold"
          style={{ animation: "urgentPulse 1.6s ease-in-out infinite" }}
        />
        <span className="text-gold-soft">21–22 Aug</span>
        <span className="text-white/70">Almost Full</span>
      </a>
    );
  }

  return (
    <>
      {/* Desktop / tablet: slim premium announcement bar */}
      <div
        className="relative z-[60] hidden overflow-hidden border-b border-gold/25 md:block"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in oklab, var(--emerald-deep) 96%, black), color-mix(in oklab, var(--forest) 92%, black))",
          animation: "availSlideDown 0.6s cubic-bezier(0.2,0.8,0.2,1) both",
        }}
        role="status"
      >
        <Petals />
        <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-4 px-6 py-2.5 text-white">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold-soft">
            <Flower2 size={13} className="text-gold" /> Onam Weekend Update
          </span>
          <span className="h-4 w-px bg-white/20" />
          <span className="text-sm font-medium text-white/90">{availabilityAlert.dates}</span>
          <span
            className="rounded-full border border-gold/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-soft"
            style={{ animation: "availGlow 2.4s ease-in-out infinite" }}
          >
            {availabilityAlert.status}!
          </span>
          <span className="text-xs text-white/70">{availabilityAlert.message}</span>
          {cta}
        </div>
        <button
          onClick={close}
          aria-label="Dismiss availability announcement"
          className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white/60 transition hover:bg-white/10 hover:text-white"
        >
          <X size={14} />
        </button>
      </div>

      {/* Mobile: compact floating notification */}
      <div
        className="fixed bottom-4 left-3 right-3 z-[85] md:hidden"
        style={{ animation: "jobSlideIn 0.55s cubic-bezier(0.2,0.8,0.2,1) both" }}
        role="status"
      >
        <div
          className="relative overflow-hidden rounded-2xl border border-gold/30 pr-9 shadow-luxe"
          style={{ background: "color-mix(in oklab, var(--emerald-deep) 95%, black)" }}
        >
          <Petals count={6} />
          <div className="relative flex items-center gap-3 px-4 py-3 text-white">
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-gold-soft">
                <Flower2 size={11} className="text-gold" /> 21–22 Aug
              </p>
              <p
                className="mt-0.5 text-sm font-semibold text-gold-soft"
                style={{ animation: "availGlow 2.4s ease-in-out infinite" }}
              >
                {availabilityAlert.status}!
              </p>
              <p className="truncate text-[11px] text-white/70">Limited Villas</p>
            </div>
            {cta}
          </div>
          <button
            onClick={close}
            aria-label="Dismiss availability announcement"
            className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full border border-white/15 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <X size={13} />
          </button>
        </div>
      </div>
    </>
  );
}
