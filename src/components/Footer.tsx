import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { RESORT, waLink, telLink } from "@/lib/resort";
import logoUrl from "@/assets/seagot-banasura-logo.jpg";
import { VILLA_UNITS } from "@/lib/villaUnits";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-emerald text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(60%_50%_at_50%_0%,white,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-luxe ring-1 ring-white/30">
                <img src={logoUrl} alt="Seagot Banasura Resorts logo" className="h-12 w-12 object-contain" loading="lazy" decoding="async" />
              </span>
              <span className="font-serif text-2xl">Seagot Banasura</span>
            </div>
            <p className="mt-5 text-sm text-white/75">
              A standard lake-view resort by Banasura Sagar Dam, hidden in the
              mist of Wayanad's Western Ghats.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: RESORT.socials.instagram, label: "Instagram" },
                { icon: Facebook, href: RESORT.socials.facebook, label: "Facebook" },
                { icon: Youtube, href: RESORT.socials.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
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
            <h3 className="text-sm uppercase tracking-[0.28em] text-gold-soft">Stay</h3>
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              <li><Link to="/villas" className="hover:text-gold-soft">The Seagot Collection</Link></li>
              <li><Link to="/villas/$slug" params={{ slug: "standard-2-bedroom" }} className="hover:text-gold-soft">Standard 2 Bedroom</Link></li>
              <li><Link to="/villas/$slug" params={{ slug: "the-signature-house" }} className="hover:text-gold-soft">The Signature House</Link></li>
              <li><Link to="/villas/$slug" params={{ slug: "the-grand-house" }} className="hover:text-gold-soft">The Grand House</Link></li>
              <li><Link to="/villas/$slug" params={{ slug: "the-banasura-residence" }} className="hover:text-gold-soft">The Banasura Residence</Link></li>
              <li><Link to="/offers/monsoon" className="hover:text-gold-soft">Monsoon Offers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.28em] text-gold-soft">Quick Links</h3>
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              <li><Link to="/about-us" className="hover:text-gold-soft">About Us</Link></li>
              <li><Link to="/accommodation" className="hover:text-gold-soft">Accommodation</Link></li>
              <li><Link to="/resort-amenities" className="hover:text-gold-soft">Resort Amenities</Link></li>
              <li><Link to="/adventure-activities" className="hover:text-gold-soft">Adventure Activities</Link></li>
              <li><Link to="/packages" className="hover:text-gold-soft">Packages</Link></li>
              <li><Link to="/offers" className="hover:text-gold-soft">Offers</Link></li>
              <li><Link to="/tariff" className="hover:text-gold-soft">Tariff</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold-soft">Testimonials</Link></li>
              <li><Link to="/feedback" className="hover:text-gold-soft">Feedback</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-soft">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-gold-soft">Blog</Link></li>
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
        </div>

        <div className="mt-12 rounded-2xl border border-white/15 bg-white/[0.03] p-5">
          <p className="text-[10px] uppercase tracking-[0.24em] text-gold-soft">Individual Villas</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/75">
            {VILLA_UNITS.map((u) => (
              <Link key={u.num} to="/villas/unit/$num" params={{ num: u.num }} className="rounded-full border border-white/15 px-3 py-1 hover:border-gold hover:text-gold-soft">
                Villa {u.num}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Seagot Banasura Resorts. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-gold-soft">FAQ</Link>
            <Link to="/privacy-policy" className="hover:text-gold-soft">Privacy</Link>
            <Link to="/terms-and-conditions" className="hover:text-gold-soft">Terms</Link>
            <Link to="/cancellation-policy" className="hover:text-gold-soft">Cancellation</Link>
            <Link to="/refund-policy" className="hover:text-gold-soft">Refund</Link>
            <a href="/sitemap.xml" className="hover:text-gold-soft">Sitemap</a>

          </div>
        </div>
      </div>
    </footer>
  );
}
