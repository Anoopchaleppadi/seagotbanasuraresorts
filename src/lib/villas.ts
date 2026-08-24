import villaStandard from "@/assets/villa-standard.jpg";
import villaDeluxe from "@/assets/villa-deluxe.jpg";
import villaThree from "@/assets/villa-three.jpg";
import villaPresidential from "@/assets/villa-presidential.jpg";

export type VillaCategory =
  | "standard"
  | "deluxe"
  | "three-bedroom"
  | "three-bedroom-ensuite"
  | "presidential";

export interface Villa {
  /** Public URL slug — collection name based, never operational. */
  slug: string;
  /** Guest-facing collection name. */
  name: string;
  /** Collection sequence number, e.g. "01". */
  number: string;
  /** Short editorial line used on hero sections. */
  tagline: string;
  category: VillaCategory;
  /** INTERNAL ONLY — operational unit identifiers. Never render publicly. */
  villaNumbers: string[];
  capacity: string;
  adultCapacity: number;
  price: number;
  extraAdult: number;
  child: number;
  breakfast: boolean;
  luxury?: boolean;
  ac?: boolean;
  /** Elegant specification chips shown to guests. */
  specs: string[];
  features: string[];
  amenities: string[];
  bedrooms: number;
  bathrooms: string;
  image: string;
  description: string;
}

export const VILLAS: Villa[] = [
  {
    slug: "the-lake-house",
    name: "The Lake House",
    number: "01",
    tagline: "Your private escape in the heart of Banasura.",
    category: "standard",
    villaNumbers: ["205", "218", "219", "220", "304"],
    capacity: "4 Guests",
    adultCapacity: 4,
    price: 9000,
    extraAdult: 1300,
    child: 750,
    breakfast: true,
    bedrooms: 2,
    bathrooms: "1 Attached · 1 Common",
    image: villaStandard,
    specs: ["04 Guests", "02 Bedrooms", "02 Levels", "Private Living Space", "Balcony"],
    features: [
      "Two Levels",
      "Private Living Space",
      "Private Balcony",
      "02 Bedrooms",
      "01 Attached Bathroom",
      "01 Common Bathroom",
      "Lake View",
    ],
    amenities: [
      "King bed with premium linen",
      "In-house dining nook",
      "Rain shower",
      "Hot water 24/7",
      "Complimentary Wi-Fi",
      "Daily housekeeping",
    ],
    description:
      "A serene private escape designed for families and guests seeking space, comfort and the beauty of Banasura.",
  },
  {
    slug: "the-signature-house",
    name: "The Signature House",
    number: "02",
    tagline: "Contemporary comfort above a still lake.",
    category: "deluxe",
    villaNumbers: ["123"],
    capacity: "4 Guests",
    adultCapacity: 4,
    price: 11000,
    extraAdult: 1600,
    child: 800,
    breakfast: true,
    luxury: true,
    bedrooms: 2,
    bathrooms: "2 Attached",
    image: villaDeluxe,
    specs: ["04 Guests", "02 Bedrooms", "02 Levels", "Private Living Space", "Balcony", "Deluxe"],
    features: [
      "Deluxe Interior",
      "Two Levels",
      "Private Living Space",
      "Private Balcony",
      "02 Bedrooms",
      "02 Attached Bathrooms",
      "Lake View",
    ],
    amenities: [
      "Premium linen",
      "Rainfall shower",
      "Tea & coffee service",
      "Hot water 24/7",
      "Complimentary Wi-Fi",
      "Daily housekeeping",
    ],
    description:
      "A refined private stay where contemporary comfort meets the tranquil landscape of Banasura.",
  },
  {
    slug: "the-grand-house",
    name: "The Grand House",
    number: "03",
    tagline: "Room enough for everyone you love.",
    category: "three-bedroom",
    villaNumbers: ["204", "209", "210", "216", "217", "302", "306"],
    capacity: "6 Guests",
    adultCapacity: 6,
    price: 12000,
    extraAdult: 1300,
    child: 750,
    breakfast: true,
    bedrooms: 3,
    bathrooms: "2 Attached",
    image: villaThree,
    specs: ["06 Guests", "03 Bedrooms", "02 Levels", "Private Living Space", "Balcony"],
    features: [
      "03 Bedrooms",
      "Two Levels",
      "Private Living Space",
      "Private Balcony",
      "02 Attached Bathrooms",
      "Lake View",
    ],
    amenities: [
      "King & twin bedding",
      "Group dining table",
      "Complimentary tea/coffee",
      "Hot water 24/7",
      "Complimentary Wi-Fi",
      "Daily housekeeping",
    ],
    description:
      "An expansive private escape created for families and groups to reconnect, relax and experience Banasura together.",
  },
  {
    slug: "the-grand-ensuite-house",
    name: "The Grand Ensuite House",
    number: "04",
    tagline: "Three bedrooms, three private bathrooms.",
    category: "three-bedroom-ensuite",
    villaNumbers: ["301"],
    capacity: "6 Guests",
    adultCapacity: 6,
    price: 12000,
    extraAdult: 1300,
    child: 750,
    breakfast: true,
    bedrooms: 3,
    bathrooms: "3 Attached",
    image: villaThree,
    specs: ["06 Guests", "03 Bedrooms", "03 Attached Bathrooms", "02 Levels", "Private Living Space", "Balcony"],
    features: [
      "03 Bedrooms",
      "03 Attached Bathrooms",
      "Two Levels",
      "Private Living Space",
      "Private Balcony",
      "Lake View",
    ],
    amenities: [
      "King & twin bedding",
      "Group dining table",
      "Complimentary tea/coffee",
      "Hot water 24/7",
      "Complimentary Wi-Fi",
      "Daily housekeeping",
    ],
    description:
      "A spacious private stay designed around comfort, privacy and effortless group living.",
  },
  {
    slug: "the-banasura-residence",
    name: "The Banasura Residence",
    number: "05",
    tagline: "Our most expansive private stay.",
    category: "presidential",
    villaNumbers: ["215"],
    capacity: "8 Guests",
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
    specs: ["08 Guests", "04 Bedrooms", "Air Conditioned", "02 Levels", "Private Living Space", "Balcony"],
    features: [
      "Air Conditioned",
      "04 Bedrooms",
      "04 Attached Bathrooms",
      "Two Levels",
      "Grand Private Living Space",
      "Large Private Balcony",
      "Panoramic Lake View",
    ],
    amenities: [
      "Premium linen across four bedrooms",
      "Private dining setting",
      "Hot water 24/7",
      "Complimentary Wi-Fi",
      "Daily housekeeping",
    ],
    description:
      "Our most expansive private accommodation, designed for memorable family and group escapes surrounded by the Banasura landscape.",
  },
];

export const getVilla = (slug: string) => VILLAS.find((v) => v.slug === slug);
