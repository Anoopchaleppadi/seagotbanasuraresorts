import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const color = dark ? "text-white/75" : "text-emerald/80";
  const active = dark ? "text-white" : "text-emerald-deep";
  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${color}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="inline-flex items-center gap-1.5">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-gold">
            <Home size={12} /> Home
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight size={12} className="opacity-60" />
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="hover:text-gold">{c.label}</Link>
            ) : (
              <span className={`${active} font-medium`}>{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbSchema(base: string, items: Crumb[]) {
  const list = [{ label: "Home", to: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.to ? `${base}${c.to}` : undefined,
    })),
  };
}
