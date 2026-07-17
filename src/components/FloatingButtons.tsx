import { useEffect, useState } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { RESORT, waLink, telLink } from "@/lib/resort";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      {callOpen && (
        <div className="mb-1 w-56 rounded-2xl glass p-3 animate-fade-up shadow-luxe">
          <p className="px-2 pb-2 text-xs uppercase tracking-[0.22em] text-emerald-deep">Call us</p>
          {[
            { label: "Reception", num: RESORT.phones.reception },
            { label: "Reservations", num: RESORT.phones.reservations },
            { label: "Sales", num: RESORT.phones.sales },
          ].map((c) => (
            <a
              key={c.num}
              href={telLink(c.num)}
              className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-charcoal hover:bg-mist"
            >
              <span className="text-charcoal/80">{c.label}</span>
              <span className="font-medium text-emerald-deep">+91 {c.num}</span>
            </a>
          ))}
        </div>
      )}

      <a
        href={waLink("Hello Seagot Banasura, I'd like to check availability.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full shadow-luxe transition hover:scale-110"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        <MessageCircle className="text-white" size={24} />
      </a>

      <button
        onClick={() => setCallOpen((v) => !v)}
        aria-label="Call us"
        aria-expanded={callOpen}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-emerald text-white shadow-luxe transition hover:scale-110"
      >
        <Phone size={22} />
      </button>

      {showTop && (
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid h-11 w-11 place-items-center rounded-full glass text-emerald-deep transition hover:scale-110"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
