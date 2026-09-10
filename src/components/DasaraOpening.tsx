import { useEffect, useMemo, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroTwilightAsset from "@/assets/hero-twilight.jpg.asset.json";
import logo from "@/assets/seagot-banasura-logo.jpg";
import { waLink } from "@/lib/resort";

export const DASARA_CAMPAIGN = {
  campaignEnabled: true,
  campaignStartDate: "2026-09-10T00:00:00+05:30",
  campaignEndDate: "2026-10-21T23:59:59+05:30",
} as const;

const SESSION_KEY = "sbr-dasara-2026-seen";
const AUTO_EXIT_MS = 6800;
const WHATSAPP_MESSAGE =
  "Hi Seagot Banasura Resorts, I would like to check Dasara holiday availability.";

export function isDasaraCampaignActive(now = Date.now()) {
  const start = new Date(DASARA_CAMPAIGN.campaignStartDate).getTime();
  const end = new Date(DASARA_CAMPAIGN.campaignEndDate).getTime();
  return DASARA_CAMPAIGN.campaignEnabled && now >= start && now <= end;
}

type Petal = {
  left: number;
  delay: number;
  duration: number;
  size: number;
};

function FestiveAtmosphere() {
  const petals = useMemo<Petal[]>(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        left: (index * 37 + 7) % 96,
        delay: (index * 0.43) % 3.4,
        duration: 6.5 + (index % 4) * 1.1,
        size: 5 + (index % 3) * 2,
      })),
    [],
  );

  return (
    <div className="dasara-atmosphere" aria-hidden="true">
      <div className="dasara-mist dasara-mist-one" />
      <div className="dasara-mist dasara-mist-two" />
      <div className="dasara-light-rays" />
      <div className="dasara-water-shimmer" />
      <div className="dasara-particles">
        {Array.from({ length: 14 }, (_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 29 + 9) % 96}%`,
              top: `${15 + ((index * 17) % 70)}%`,
              animationDelay: `${(index * 0.31) % 2.8}s`,
              animationDuration: `${4.8 + (index % 4)}s`,
            }}
          />
        ))}
      </div>
      <div className="dasara-petals">
        {petals.map((petal, index) => (
          <span
            key={index}
            style={{
              left: `${petal.left}%`,
              width: petal.size,
              height: petal.size * 1.7,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ElephantSilhouette() {
  return (
    <svg
      className="dasara-elephant"
      viewBox="0 0 360 240"
      role="img"
      aria-label="Elegant Dasara elephant silhouette"
    >
      <defs>
        <linearGradient id="dasaraElephantGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="0.55" stopColor="currentColor" stopOpacity="0.88" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.38" />
        </linearGradient>
      </defs>
      <path
        fill="url(#dasaraElephantGold)"
        d="M74 103c13-47 57-72 111-68 60 4 91 37 93 86 15 0 27 8 28 23 1 13-7 27-20 34-4 2-8-4-4-7 12-10 11-23 3-30-5-5-12-5-18-3l-7 71h-23l-9-58h-76l-5 58h-24l-7-64c-13-5-24-15-29-29-7 4-13 11-16 21-2 8-11 8-10-1 1-15 9-27 23-33Z"
      />
      <path
        d="M99 91c25-20 55-30 91-28 29 2 51 11 70 29M139 72c6 18 20 30 42 35 23-5 40-17 50-35M126 113h114M110 99c-17 4-29 16-34 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M142 55c9-18 23-28 40-30 19 2 33 12 42 30M168 34l14-19 14 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="246" cy="113" r="3" fill="currentColor" />
      <path d="M108 202h50M220 202h50" stroke="currentColor" strokeWidth="3" opacity="0.55" />
    </svg>
  );
}

function Lamp({ side }: { side: "left" | "right" }) {
  return (
    <div className={`dasara-lamp dasara-lamp-${side}`} aria-hidden="true">
      <span className="dasara-flame" />
      <span className="dasara-lamp-bowl" />
      <span className="dasara-lamp-stem" />
    </div>
  );
}

export function DasaraOpening() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!isDasaraCampaignActive()) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Storage can be unavailable in privacy modes; show once for this page load.
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const exitTimer = window.setTimeout(() => setLeaving(true), AUTO_EXIT_MS);
    const closeTimer = window.setTimeout(() => setVisible(false), AUTO_EXIT_MS + 850);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLeaving(true);
        window.setTimeout(() => setVisible(false), 450);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.classList.add("dasara-open");
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(closeTimer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("dasara-open");
    };
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 450);
  };

  const checkAvailability = () => {
    dismiss();
    window.setTimeout(() => {
      window.location.hash = "book";
    }, 470);
  };

  return (
    <section
      className={`dasara-opening ${leaving ? "dasara-opening-leaving" : ""}`}
      aria-label="Dasara 2026 welcome from Seagot Banasura Resorts"
      aria-live="polite"
    >
      <div
        className="dasara-background"
        style={{ backgroundImage: `url(${heroTwilightAsset.url})` }}
        aria-hidden="true"
      />
      <div className="dasara-color-grade" aria-hidden="true" />
      <FestiveAtmosphere />

      <button type="button" className="dasara-skip" onClick={dismiss} aria-label="Skip Dasara welcome">
        Skip <span aria-hidden="true">→</span>
      </button>

      <div className="dasara-brand">
        <span className="dasara-logo-shell">
          <img src={logo} alt="Seagot Banasura Resorts" width={160} height={160} />
        </span>
        <span className="dasara-brand-copy">Seagot Banasura Resorts</span>
      </div>

      <ElephantSilhouette />
      <Lamp side="left" />
      <Lamp side="right" />

      <div className="dasara-content">
        <div className="dasara-pattern" aria-hidden="true" />
        <p className="dasara-badge">Dasara Holiday Special</p>
        <p className="dasara-kicker">🏹 Dasara 2026</p>
        <h2>
          <span>This Dasara,</span>
          Escape to Wayanad
        </h2>
        <p className="dasara-supporting">
          Celebrate the holidays amidst misty mountains,
          <br className="hidden sm:block" /> peaceful waters &amp; unforgettable moments.
        </p>
        <div className="dasara-kannada" lang="kn">
          <p>ಈ ದಸರಾ… ವಯನಾಡಿಗೆ ಒಂದು ಸುಂದರ ಪ್ರವಾಸ! 🌿</p>
          <span>ದಸರಾ ರಜೆಯಲ್ಲಿ ವಯನಾಡಿನ ಪ್ರಕೃತಿ ಸೌಂದರ್ಯವನ್ನು ಅನುಭವಿಸಿ.</span>
        </div>
        <div className="dasara-actions">
          <button type="button" className="dasara-primary" onClick={checkAvailability}>
            Check Dasara Availability <ArrowRight size={17} aria-hidden="true" />
          </button>
          <a
            className="dasara-secondary"
            href={waLink(WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            aria-label="WhatsApp Seagot Banasura Resorts about Dasara availability"
          >
            <MessageCircle size={17} aria-hidden="true" /> WhatsApp Us
          </a>
        </div>
        <p className="dasara-origin">From Karnataka to Wayanad</p>
        <p className="dasara-cities">Bengaluru <span>•</span> Mysuru <span>•</span> Kodagu <span>•</span> Mangaluru</p>
      </div>
    </section>
  );
}