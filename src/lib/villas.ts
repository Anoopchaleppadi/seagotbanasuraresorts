import villaStandard from "@/assets/villa-standard.jpg";
import villaDeluxe from "@/assets/villa-deluxe.jpg";
import villaThree from "@/assets/villa-three.jpg";
import villaPresidential from "@/assets/villa-presidential.jpg";

export type VillaCategory =
  | "standard"
  | "deluxe"
  | "three-bedroom"
  | "presidential";

export interface Villa {
  slug: string;
  name: string;
  category: VillaCategory;
  villaNumbers: string[];
  capacity: string;
  adultCapacity: number;
  price: number;
  extraAdult: number;
  child: number;
  breakfast: boolean;
  luxury?: boolean;
  ac?: boolean;
  features: string[];
  amenities: string[];
  bedrooms: number;
  bathrooms: string;
  image: string;
  description: string;
}

export const VILLAS: Villa[] = [
  {
    slug: "standard-2-bedroom",
    name: "Standard 2 Bedroom Villa",
    category: "standard",
    villaNumbers: ["205", "218", "219", "220", "304"],
    capacity: "4 Adults",
    adultCapacity: 4,
    price: 9000,
    extraAdult: 1300,
    child: 750,
    breakfast: true,
    bedrooms: 2,
    bathrooms: "1 Attached · 1 Common",
    image: villaStandard,
    features: [
      "Two Floors",
      "Private Living Area",
      "Private Balcony",
      "2 Bedrooms",
      "1 Attached Bathroom",
      "1 Common Bathroom",
      "Lake View",
    ],
    amenities: [
      "King bed with premium linen",
      "In-villa dining nook",
      "Rain shower",
      "Hot water 24/7",
      "Complimentary Wi-Fi",
      "Daily housekeeping",
    ],
    description:
      "A two-floor lake-view retreat set among the mist of the Western Ghats. Warm Kerala craftsmanship, a private balcony that opens to the horizon and quiet space for four to unwind.",
  },
  {
    slug: "deluxe-2-bedroom",
    name: "Deluxe 2 Bedroom Villa",
    category: "deluxe",
    villaNumbers: ["123"],
    capacity: "4 Adults",
    adultCapacity: 4,
    price: 11000,
    extraAdult: 1600,
    child: 800,
    breakfast: true,
    luxury: true,
    bedrooms: 2,
    bathrooms: "2 Attached",
    image: villaDeluxe,
    features: [
      "Premium Interior",
      "Luxury Furniture",
      "Private Balcony",
      "Lake View",
      "Curated Ambient Lighting",
    ],
    amenities: [
      "Egyptian cotton linens",
      "Rainfall shower + bathtub",
      "In-villa mini bar",
      "Espresso machine",
      "Curated aromatherapy",
      "Butler on request",
    ],
    description:
      "Our signature deluxe villa — a study in emerald and gold. Vaulted ceilings, teak floors and floor-to-ceiling glass framing the still waters of Banasura Sagar.",
  },
  {
    slug: "three-bedroom-villa",
    name: "Three Bedroom Villa",
    category: "three-bedroom",
    villaNumbers: ["204", "209", "210", "216", "217", "301", "302", "306"],
    capacity: "6 Adults",
    adultCapacity: 6,
    price: 12000,
    extraAdult: 1300,
    child: 750,
    breakfast: true,
    bedrooms: 3,
    bathrooms: "Villa 301 · 3 Attached / 302 · 2 Attached / 306 · 2 Attached",
    image: villaThree,
    features: [
      "3 Bedrooms",
      "Spacious Living Area",
      "Private Balcony",
      "Lake View",
      "Ideal for Families & Groups",
    ],
    amenities: [
      "King & Twin bedding",
      "Group dining table",
      "Complimentary tea/coffee",
      "Board games hamper",
      "Terrace lounge",
    ],
    description:
      "Built for gatherings that deserve a view. Three private bedrooms, a shared lounge and a wide balcony where the sunset lingers over the lake.",
  },
  {
    slug: "presidential-4-bedroom",
    name: "Presidential Four Bedroom Villa",
    category: "presidential",
    villaNumbers: ["215"],
    capacity: "8 Adults",
    adultCapacity: 8,
    price: 24000,
    extraAdult: 1600,
    child: 800,
    breakfast: true,
    luxury: true,
    ac: true,
    bedrooms: 4,
    bathrooms: "4 Attached",
    image: villaPresidential,
    features: [
      "Air Conditioned",
      "Four Bedrooms",
      "Grand Living Area",
      "Large Private Balcony",
      "Luxury Interior",
      "Panoramic Lake View",
    ],
    amenities: [
      "Chandelier-lit double height living",
      "Chef on request",
      "Premium bar setup",
      "Private butler",
      "Cinema-quality sound",
      "Bespoke turndown ritual",
    ],
    description:
      "The Presidential Villa 215 — the estate's crown jewel. Double-height living, four bedrooms and a sweeping balcony that meets the mountains and the lake as one.",
  },
];

export const getVilla = (slug: string) => VILLAS.find((v) => v.slug === slug);
