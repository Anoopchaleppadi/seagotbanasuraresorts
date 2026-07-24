import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_POSTS } from "@/lib/blog";

const BASE_URL = "";

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const items = BLOG_POSTS.map((p) => [
          `    <item>`,
          `      <title><![CDATA[${p.title}]]></title>`,
          `      <link>${BASE_URL}/blog/${p.slug}</link>`,
          `      <guid isPermaLink="true">${BASE_URL}/blog/${p.slug}</guid>`,
          `      <pubDate>${new Date(p.date).toUTCString()}</pubDate>`,
          `      <category>${p.category}</category>`,
          `      <description><![CDATA[${p.description}]]></description>`,
          `    </item>`,
        ].join("\n")).join("\n");

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0"><channel>`,
          `    <title>Seagot Banasura Resorts — Blog</title>`,
          `    <link>${BASE_URL}/blog</link>`,
          `    <description>Wayanad travel, food, adventure and hospitality stories from Seagot Banasura Resorts.</description>`,
          `    <language>en-in</language>`,
          items,
          `  </channel></rss>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
