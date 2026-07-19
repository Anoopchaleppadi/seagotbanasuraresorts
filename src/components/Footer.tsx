import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { RESORT, waLink, telLink } from "@/lib/resort";
import logoAsset from "@/assets/seagot-banasura-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-emerald text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(60%_50%_at_50%_0%,white,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-luxe ring-1 ring-white/30">
                <img src={logoAsset.url} alt="Seagot Banasura Resorts logo" className="h-12 w-12 object-contain" loading="lazy" decoding="async" />
              </span>
              <span className="font-serif text-2xl">Seagot Banasura</span>
            </div>
            <p className="mt-5 text-sm text-white/75">
              A luxury lake-view resort by Banasura Sagar Dam, hidden in the
              mist of Wayanad's Western Ghats.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: RESORT.socials.instagram },
                { icon: Facebook, href: RESORT.socials.facebook },
                { icon: Youtube, href: RESORT.socials.youtube },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label="Social link"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white/85 transition hover:border-gold hover:text-gold-soft"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.28em] text-gold-soft">Explore</h3>
            <ul className="mt-5 space-y-3 text-white/85">
              <li><Link to="/" className="hover:text-gold-soft">Home</Link></li>
              <li><Link to="/villas" className="hover:text-gold-soft">Villas</Link></li>
              <li><Link to="/experiences" className="hover:text-gold-soft">Experiences</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-soft">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-gold-soft">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.28em] text-gold-soft">Contact</h3>
            <ul className="mt-5 space-y-3 text-white/85 text-sm">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" /><span>{RESORT.address}</span></li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-gold" /><a href={telLink(RESORT.phones.reservations)} className="hover:text-gold-soft">+91 {RESORT.phones.reservations}</a></li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-gold" /><a href={`mailto:${RESORT.email}`} className="hover:text-gold-soft">{RESORT.email}</a></li>
              <li>
                <a href={waLink()} target="_blank" rel="noreferrer" className="mt-3 inline-flex btn-ghost-luxe !py-2 !px-4 text-xs">
                  WhatsApp +91 {RESORT.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.28em] text-gold-soft">Stay in touch</h3>
            <p className="mt-5 text-sm text-white/75">
              Monsoon offers, seasonal menus and private-villa openings.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex overflow-hidden rounded-full glass-dark"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email address"
                className="flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none"
              />
              <button type="submit" className="bg-gradient-gold px-5 text-sm font-medium text-charcoal">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Seagot Banasura Resorts. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gold-soft">Privacy Policy</Link>
            <Link to="/" className="hover:text-gold-soft">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
