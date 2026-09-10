/**
 * Centralised image registry for Seagot Banasura Resorts.
 *
 * Replace a photograph by overwriting the file in `src/assets/` (keep the same
 * filename) or by pointing the reference below at a new file. Every component
 * reads images from here, so layout, aspect-ratio handling, radii, glass
 * effects and hover animations stay exactly the same when photos change.
 *
 * Only original Seagot Banasura photographs should be used here.
 */
import aerial from "@/assets/aerial.jpg";
import heroLake from "@/assets/hero-lake.jpg";
import pool from "@/assets/pool.jpg";
import expZipline from "@/assets/exp-zipline.jpg";
import expCampfire from "@/assets/exp-campfire.jpg";
import expTrek from "@/assets/exp-trek.jpg";
import expRestaurant from "@/assets/exp-restaurant.jpg";
import villaStandard from "@/assets/villa-standard.jpg";
import villaDeluxe from "@/assets/villa-deluxe.jpg";
import villaThree from "@/assets/villa-three.jpg";
import villaPresidential from "@/assets/villa-presidential.jpg";
import attrBanasura from "@/assets/attr-banasura.jpg";
import attrChembra from "@/assets/attr-chembra.jpg";
import attrWaterfall from "@/assets/attr-waterfall.jpg";
import logo from "@/assets/seagot-banasura-logo.jpg";

export const IMAGES = {
  brand: { logo },
  hero: { lake: heroLake, aerial },
  resort: { aerial, pool, driveway: expRestaurant, lake: heroLake },
  villas: {
    standard: villaStandard,
    deluxe: villaDeluxe,
    three: villaThree,
    presidential: villaPresidential,
  },
  experiences: {
    pool,
    zipline: expZipline,
    campfire: expCampfire,
    trek: expTrek,
    restaurant: expRestaurant,
    nature: aerial,
  },
  restaurant: { interior: expRestaurant },
  nearby: { banasura: attrBanasura, chembra: attrChembra, waterfall: attrWaterfall },
} as const;

export type ImageRef = string;

/**
 * Per-villa photo gallery — auto-discovered.
 *
 * Drop any .jpg/.jpeg/.png/.webp photo into
 *   src/assets/villas/<villa-slug>/
 * and it appears on that villa's detail page automatically (no code edit).
 * Files are ordered by filename, so prefix with numbers to control the order:
 *   01-exterior.jpg, 02-bedroom.jpg, 03-living.jpg, 04-balcony.jpg, 05-view.jpg
 */
const villaGlob = import.meta.glob(
  "../assets/villas/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const villaGalleryEntries: Record<string, { path: string; url: string }[]> = {};
for (const [path, url] of Object.entries(villaGlob)) {
  const match = path.match(/villas\/([^/]+)\//);
  if (!match) continue;
  const slug = match[1];
  (villaGalleryEntries[slug] ??= []).push({ path, url });
}
for (const slug of Object.keys(villaGalleryEntries)) {
  villaGalleryEntries[slug].sort((a, b) => a.path.localeCompare(b.path));
}

/** Returns the ordered list of gallery photo URLs for a villa slug. */
export function villaGallery(slug: string): string[] {
  return (villaGalleryEntries[slug] ?? []).map((e) => e.url);
}

/**
 * Main Gallery page — auto-discovered photos.
 *
 * Drop any .jpg/.jpeg/.png/.webp photo into
 *   src/assets/gallery/<category>/
 * and it appears on the /gallery page automatically (no code edit).
 *
 * The folder name becomes the filter category (title-cased for display).
 * Files are ordered by filename, so prefix with numbers to control the order:
 *   01-aerial.jpg, 02-driveway.jpg, 03-pool-night.jpg ...
 *
 * The alt text is derived from the filename (numbers stripped, hyphens to
 * spaces, title-cased). For richer captions, keep using GALLERY_DATA in
 * src/lib/gallery.ts — both sources are merged on the gallery page.
 */
const galleryGlob = import.meta.glob(
  "../assets/gallery/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

export interface GalleryPhoto {
  src: string;
  category: string;
  alt: string;
}

function titleCase(s: string): string {
  return s
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function altFromFilename(path: string): string {
  const file = path.split("/").pop() ?? path;
  const stem = file.replace(/\.[^.]+$/, "");
  // strip leading number prefix like "01-"
  const cleaned = stem.replace(/^\d+[-_\s]*/, "");
  return titleCase(cleaned) || "Seagot Banasura Resorts";
}

const galleryPhotos: GalleryPhoto[] = [];
for (const [path, url] of Object.entries(galleryGlob)) {
  const match = path.match(/gallery\/([^/]+)\//);
  const category = match ? titleCase(match[1]) : "Resort";
  galleryPhotos.push({ src: url, category, alt: altFromFilename(path) });
}
galleryPhotos.sort((a, b) => a.src.localeCompare(b.src));

/** Returns all auto-discovered gallery photos, ordered by filename. */
export function galleryPhotoList(): GalleryPhoto[] {
  return galleryPhotos;
}
