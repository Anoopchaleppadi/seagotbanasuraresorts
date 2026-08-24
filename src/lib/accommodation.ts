import { VILLAS, type Villa } from "./villas";

/**
 * The Seagot Collection — guest-facing accommodation experiences.
 * Derived from the internal inventory so names, imagery and pricing
 * stay in sync while operational identifiers remain private.
 */
export interface AccommodationCategory {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  hero: string;
  description: string;
  capacity: string;
  facilities: string[];
  stay: Villa;
}

export const ACCOMMODATION: AccommodationCategory[] = VILLAS.map((v) => ({
  slug: v.slug,
  number: v.number,
  name: v.name,
  tagline: v.tagline,
  hero: v.image,
  description: v.description,
  capacity: `${v.capacity} · ${v.bedrooms} Bedrooms`,
  facilities: v.specs,
  stay: v,
}));

export const COLLECTION = ACCOMMODATION;
