import { Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { RESORT, waLink, telLink } from "@/lib/resort";

export function TopBar() {
  const phones = [RESORT.phones.reservations, RESORT.phones.sales, RESORT.whatsapp];
  return (
    <div className="relative z-[60] w-full bg-gradient-emerald text-white/90 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {phones.map((num) => (
            <a
              key={num}
              href={telLink(num)}
              className="inline-flex items-center gap-1.5 hover:text-gold-soft transition"
            >
              <Phone size={12} className="text-gold" />
              <span className="tracking-wide">+91 {num}</span>
            </a>
          ))}
        </div>
        <div className="hidden md:inline-flex items-center gap-1.5 text-white/75">
          <MapPin size={12} className="text-gold" />
          Padinjarathara, Wayanad, Kerala
        </div>
        <div className="flex items-center gap-2">
          <a href={RESORT.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-7 w-7 place-items-center rounded-full border border-white/25 hover:border-gold hover:text-gold-soft transition">
            <Instagram size={12} />
          </a>
          <a href={RESORT.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-7 w-7 place-items-center rounded-full border border-white/25 hover:border-gold hover:text-gold-soft transition">
            <Facebook size={12} />
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-7 w-7 place-items-center rounded-full border border-white/25 hover:border-gold hover:text-gold-soft transition">
            <MessageCircle size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
