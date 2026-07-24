import { VILLAS, type Villa } from "./villas";

export interface VillaUnit {
  num: string;
  slug: string; // "villa-205"
  parentSlug: string;
  parent: Villa;
  view: string;
  floor: string;
  highlight: string;
}

const VIEWS = ["Lake View", "Lake & Mountain View", "Panoramic Lake View", "Valley View"];
const FLOORS = ["Ground floor", "First floor", "Upper floor", "Duplex"];

function unit(num: string, parentSlug: string, i: number, highlight: string): VillaUnit {
  const parent = VILLAS.find((v) => v.slug === parentSlug)!;
  return {
    num,
    slug: `villa-${num}`,
    parentSlug,
    parent,
    view: VIEWS[i % VIEWS.length],
    floor: FLOORS[i % FLOORS.length],
    highlight,
  };
}

export const VILLA_UNITS: VillaUnit[] = [
  unit("205", "standard-2-bedroom", 0, "Corner villa with the widest balcony in the standard block."),
  unit("218", "standard-2-bedroom", 1, "Tucked into the tree line for extra privacy and birdsong at dawn."),
  unit("219", "standard-2-bedroom", 2, "Direct-facing dam view with sunrise light through the living room."),
  unit("220", "standard-2-bedroom", 3, "Family-favourite unit closest to the pool deck and play lawn."),
  unit("304", "standard-2-bedroom", 0, "Elevated position for uninterrupted sightlines across the water."),
  unit("123", "deluxe-2-bedroom", 1, "Signature deluxe suite — teak floors, rain shower and private bathtub."),
  unit("204", "three-bedroom-villa", 2, "Wide-format three bedroom with a shared lounge that opens to the balcony."),
  unit("209", "three-bedroom-villa", 3, "Ideal for two families; two king rooms and one twin room."),
  unit("210", "three-bedroom-villa", 0, "Popular for small group getaways with a private outdoor sit-out."),
  unit("216", "three-bedroom-villa", 1, "Quiet garden-facing block with a covered veranda."),
  unit("217", "three-bedroom-villa", 2, "Direct pool-side access on the ground level."),
  unit("301", "three-bedroom-villa", 3, "Three attached bathrooms — the most spacious three bedroom villa."),
  unit("302", "three-bedroom-villa", 0, "Sunset-facing balcony with panoramic Western Ghats views."),
  unit("306", "three-bedroom-villa", 1, "Top-floor villa with double-height ceilings in the living room."),
  unit("215", "presidential-4-bedroom", 2, "The Presidential — air conditioned, four bedrooms, chandelier-lit hall."),
];

export const getUnit = (num: string) => VILLA_UNITS.find((u) => u.num === num || u.slug === num);
