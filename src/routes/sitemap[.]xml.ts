import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { VILLAS } from "@/lib/villas";
import { VILLA_UNITS } from "@/lib/villaUnits";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "daily";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/villas", changefreq: "weekly", priority: "0.9" },
          { path: "/experiences", changefreq: "monthly", priority: "0.8" },
          { path: "/gallery", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/infinity-pool", changefreq: "monthly", priority: "0.8" },
          { path: "/restaurant", changefreq: "monthly", priority: "0.8" },
          { path: "/adventure", changefreq: "monthly", priority: "0.8" },
          { path: "/weddings", changefreq: "monthly", priority: "0.8" },
          { path: "/corporate", changefreq: "monthly", priority: "0.8" },
          { path: "/family", changefreq: "monthly", priority: "0.8" },
          { path: "/nearby-attractions", changefreq: "monthly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.6" },
          { path: "/offers/monsoon", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          ...VILLAS.map((v) => ({ path: `/villas/${v.slug}`, changefreq: "monthly" as const, priority: "0.8" })),
          ...VILLA_UNITS.map((u) => ({ path: `/villas/unit/${u.num}`, changefreq: "monthly" as const, priority: "0.7" })),
          ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly" as const, priority: "0.6" })),
          ...BLOG_CATEGORIES.map((c) => ({ path: `/blog/category/${c.toLowerCase()}`, changefreq: "monthly" as const, priority: "0.5" })),
        ];
        const urls = entries.map((e) => [
          `  <url>`,
          `    <loc>${BASE_URL}${e.path}</loc>`,
          e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
          e.priority ? `    <priority>${e.priority}</priority>` : null,
          `  </url>`,
        ].filter(Boolean).join("\n"));
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
