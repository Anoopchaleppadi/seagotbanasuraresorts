import { useEffect, useState } from "react";
import { X, MessageCircle, Zap, MapPin } from "lucide-react";
import { RESORT, waLink } from "@/lib/resort";

/**
 * Toggle to disable the entire recruitment promotion.
 * Setting this to false removes the card without affecting the rest of the site.
 */
export const JOB_OPENING_ACTIVE = true;

const DISMISS_KEY = "sbr-job-dismissed";

const WA_NUMBER = "9747880808";
const WA_MESSAGE =
  "Hi Seagot Banasura Resorts, I'm interested in the Adventure Activity Operator position. Please share the job details.";

/** Build a WhatsApp link for a specific number (RESORT.waLink uses the resort default). */
function jobWaLink(message?: string) {
  const base = `https://wa.me/91${WA_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function RecruitmentCard() {
  const [onamActive, setOnamActive] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [show, setShow] = useState(false);

  // Coordinate with the Onam overlay: never show while Onam is visible.
  useEffect(() => {
    if (!JOB_OPENING_ACTIVE) return;
    try {
      if (localStorage.getItem(DISMISS_KEY)) {
        setDismissed(true);
        return;
      }
    } catch {
      /* storage blocked */
    }
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { active?: boolean } | undefined;
      setOnamActive(detail?.active === true);
    };
    window.addEventListener("sbr:onam-status", handler as EventListener);
    setOnamActive(
      (window as unknown as { __sbrOnamActive?: boolean }).__sbrOnamActive === true,
    );
    return () => window.removeEventListener("sbr:onam-status", handler as EventListener);
  }, []);

  // Reveal the card once Onam is no longer active (or never was).
  useEffect(() => {
    if (!JOB_OPENING_ACTIVE || dismissed) return;
    if (onamActive) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, [onamActive, dismissed]);

  if (!JOB_OPENING_ACTIVE || dismissed || !show) return null;

  const close = () => {
    setShow(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* storage blocked */
    }
  };

  return (
    <div
      className="fixed bottom-[9.5rem] right-4 z-[90] w-[calc(100vw-2rem)] max-w-[20rem] sm:bottom-[9.5rem] sm:right-5"
      role="dialog"
      aria-label="Job opening at Seagot Banasura Resorts"
      style={{ animation: "jobSlideIn 0.55s cubic-bezier(0.2,0.8,0.2,1) both" }}
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-gold/30 shadow-luxe"
        style={{
          background:
            "color-mix(in oklab, var(--emerald-deep) 92%, black)",
          color: "white",
        }}
      >
        {/* gold top accent */}
        <div className="h-1 w-full bg-gradient-gold" />

        <button
          onClick={close}
          aria-label="Close job opening card"
          className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white"
        >
          <X size={14} />
        </button>

        <div className="px-5 pb-5 pt-4 text-center">
          {/* Urgent hiring indicator */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
            <span
              className="block h-1.5 w-1.5 rounded-full bg-gold"
              style={{ animation: "urgentPulse 1.4s ease-in-out infinite" }}
            />
            Urgent Hiring
          </span>

          <p className="mt-3 text-[10px] uppercase tracking-[0.32em] text-white/60">
            We're Hiring
          </p>
          <h3 className="mt-1 font-serif text-xl leading-tight text-white sm:text-2xl">
            Adventure Activity Operator
          </h3>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-white/75">
            <span className="inline-flex items-center gap-1">
              <Zap size={11} className="text-gold-soft" /> Immediate Joining
            </span>
            <span className="text-white/30">•</span>
            <span>Attractive Package</span>
            <span className="text-white/30">•</span>
            <span>Accommodation & Food</span>
          </div>

          <a
            href={jobWaLink(WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="btn-luxe mt-4 w-full justify-center text-sm"
          >
            <MessageCircle size={16} /> Apply Now
          </a>

          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-[10px] text-white/55">
            <span className="inline-flex items-center gap-1">
              <MapPin size={10} /> {RESORT.short}
            </span>
            <span className="text-white/25">•</span>
            <span>WhatsApp +91 {WA_NUMBER}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
