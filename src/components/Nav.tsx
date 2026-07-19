import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { RESORT } from "@/lib/resort";
import logoAsset from "@/assets/seagot-banasura-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/villas", label: "Villas" },
  { to: "/experiences", label: "Experiences" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span
            className={`inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-luxe ring-1 transition-transform group-hover:scale-105 ${
              scrolled ? "ring-border" : "ring-white/40"
            }`}
          >
            <img
              src={logoAsset.url}
              alt="Seagot Banasura Resorts logo"
              className="h-11 w-11 object-contain"
              loading="eager"
              decoding="async"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-xl tracking-wide ${
                scrolled ? "text-emerald-deep" : "text-white"
              }`}
            >
              Seagot Banasura
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.28em] ${
                scrolled ? "text-muted-foreground" : "text-white/75"
              }`}
            >
              Resorts · Wayanad
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? "text-charcoal hover:text-emerald-deep"
                    : "text-white/90 hover:text-gold-soft"
                }`}
                activeProps={{
                  className: `${
                    scrolled ? "text-emerald-deep" : "text-gold-soft"
                  } after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto after:h-px after:w-6 after:bg-gold`,
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            hash="book"
            className="hidden btn-luxe !py-2.5 !px-5 text-sm sm:inline-flex"
          >
            Book Now
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className={`md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
              scrolled
                ? "border-border text-charcoal"
                : "border-white/40 text-white"
            }`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mt-3 glass rounded-2xl p-5 animate-fade-up">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-charcoal hover:bg-mist"
                  activeProps={{ className: "text-emerald-deep" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/contact"
                hash="book"
                onClick={() => setOpen(false)}
                className="btn-luxe w-full"
              >
                Book Now
              </Link>
            </li>
            <li className="mt-2 text-center text-xs text-muted-foreground">
              Reservations · +91 {RESORT.phones.reservations}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
