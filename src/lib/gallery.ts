import { IMAGES } from "./images";

export interface GalleryItem {
  /** Image reference — swap the file in src/assets or the IMAGES key. */
  src: string;
  category: GalleryCategory;
  /** SEO-friendly, descriptive alt text. */
  alt: string;
  /** Optional caption shown in the lightbox. */
  caption?: string;
}

export type GalleryCategory =
  | "Resort"
  | "Villas"
  | "Rooms"
  | "Infinity Pool"
  | "Lake"
  | "Mountains"
  | "Restaurant"
  | "Food"
  | "Adventure"
  | "Events"
  | "Nature"
  | "Sunrise"
  | "Sunset"
  | "Guests";

/**
 * Add more original Seagot photographs by appending entries below —
 * the gallery component needs no changes.
 */
export const GALLERY_DATA: GalleryItem[] = [
  { src: IMAGES.resort.aerial, category: "Resort", alt: "Aerial drone view of Seagot Banasura Resorts, Wayanad", caption: "The resort from the air" },
  { src: IMAGES.resort.driveway, category: "Resort", alt: "Entrance driveway of Seagot Banasura Resorts", caption: "Arrival driveway" },
  { src: IMAGES.experiences.pool, category: "Infinity Pool", alt: "Infinity pool overlooking Banasura Sagar Dam at Seagot Banasura Resorts", caption: "Mirror-edge infinity pool" },
  { src: IMAGES.experiences.campfire, category: "Infinity Pool", alt: "Infinity pool illuminated at night at Seagot Banasura Resorts, Wayanad" },
  { src: IMAGES.villas.standard, category: "Villas", alt: "Standard two bedroom villa exterior at Seagot Banasura Resorts" },
  { src: IMAGES.villas.three, category: "Villas", alt: "Three bedroom villa with private pool deck at Seagot Banasura Resorts" },
  { src: IMAGES.villas.deluxe, category: "Rooms", alt: "Deluxe villa bedroom with lake view at Seagot Banasura Resorts" },
  { src: IMAGES.villas.presidential, category: "Rooms", alt: "Four bedroom villa bedroom interior at Seagot Banasura Resorts" },
  { src: IMAGES.restaurant.interior, category: "Restaurant", alt: "Lakeside multi-cuisine restaurant at Seagot Banasura Resorts, Wayanad" },
  { src: IMAGES.experiences.zipline, category: "Adventure", alt: "Guest ziplining across the valley at Seagot Banasura Resorts, Wayanad" },
  { src: IMAGES.experiences.trek, category: "Lake", alt: "Raft on Banasura Sagar lake near Seagot Banasura Resorts" },
  { src: IMAGES.nearby.banasura, category: "Lake", alt: "Banasura Sagar Dam reservoir near Seagot Banasura Resorts, Wayanad" },
  { src: IMAGES.nearby.chembra, category: "Mountains", alt: "Western Ghats peaks around Wayanad seen from Seagot Banasura Resorts" },
  { src: IMAGES.nearby.waterfall, category: "Nature", alt: "Soochipara waterfalls in Wayanad near Seagot Banasura Resorts" },
  { src: IMAGES.hero.lake, category: "Sunset", alt: "Sunset over Banasura Sagar lake from Seagot Banasura Resorts" },
  { src: IMAGES.resort.aerial, category: "Sunrise", alt: "Sunrise mist over the Wayanad hills at Seagot Banasura Resorts" },
  { src: IMAGES.villas.three, category: "Guests", alt: "Guests enjoying the poolside at Seagot Banasura Resorts, Wayanad" },
  { src: IMAGES.experiences.campfire, category: "Events", alt: "Evening event set-up by the pool at Seagot Banasura Resorts" },
];

export const GALLERY_CATEGORIES: string[] = [
  "All",
  ...Array.from(new Set(GALLERY_DATA.map((g) => g.category))),
];
