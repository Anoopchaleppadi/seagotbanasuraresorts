import villaStandard from "@/assets/villa-standard.jpg";
import villaDeluxe from "@/assets/villa-deluxe.jpg";
import villaThree from "@/assets/villa-three.jpg";
import villaPresidential from "@/assets/villa-presidential.jpg";
import aerial from "@/assets/aerial.jpg";
import pool from "@/assets/pool.jpg";

export interface AccommodationCategory {
  slug: string;
  name: string;
  hero: string;
  description: string;
  capacity: string;
  facilities: string[];
}

export const ACCOMMODATION: AccommodationCategory[] = [
  {
    slug: "standard-2-bedroom-villa",
    name: "Standard 2 Bedroom Villa",
    hero: villaStandard,
    description: "A refined two-bedroom retreat with private balcony, mountain view and warm Kerala interiors — perfect for couples travelling together or small families.",
    capacity: "Sleeps 4 · 2 Bedrooms",
    facilities: ["Private balcony", "King & twin beds", "Rain shower", "Tea & coffee bar", "Smart TV", "Complimentary Wi-Fi"],
  },
  {
    slug: "deluxe-2-bedroom-villa",
    name: "Deluxe 2 Bedroom Villa",
    hero: villaDeluxe,
    description: "Elevated two-bedroom villas with panoramic lake views, plush furnishings and a private sit-out designed for slow mornings and sunset chai.",
    capacity: "Sleeps 4 · 2 Bedrooms",
    facilities: ["Lake-facing sit-out", "Premium linen", "Bathtub", "Espresso machine", "Mini-bar", "Turn-down service"],
  },
  {
    slug: "standard-3-bedroom-villa",
    name: "Standard 3 Bedroom Villa",
    hero: villaThree,
    description: "Three-bedroom villas for families and small groups, with a shared living room, garden patio and views over the Western Ghats.",
    capacity: "Sleeps 6 · 3 Bedrooms",
    facilities: ["Shared living room", "Garden patio", "Two bathrooms", "Dining nook", "Complimentary breakfast", "Board games"],
  },
  {
    slug: "deluxe-4-bedroom-villa",
    name: "Deluxe 4 Bedroom Villa",
    hero: villaPresidential,
    description: "Our flagship four-bedroom villa — a private wing with lounge, dining hall and lake terrace ideal for celebrations and multi-generational stays.",
    capacity: "Sleeps 8 · 4 Bedrooms",
    facilities: ["Private lounge", "Lake terrace", "Butler on call", "Private dining", "Four ensuite baths", "Airport transfer"],
  },
  {
    slug: "family-room-with-balcony",
    name: "Family Room with Balcony",
    hero: aerial,
    description: "Spacious family rooms with a private balcony framing the mist-veiled Wayanad hills — a cosy option for compact families.",
    capacity: "Sleeps 3 · 1 Bedroom",
    facilities: ["Private balcony", "Queen bed + roll-away", "Ensuite bath", "Coffee maker", "Reading corner", "Complimentary Wi-Fi"],
  },
  {
    slug: "family-room-with-sit-out",
    name: "Family Room with Sit Out",
    hero: pool,
    description: "Warmly appointed rooms with a garden-facing sit-out — perfect for morning yoga, tea and children playing outdoors.",
    capacity: "Sleeps 3 · 1 Bedroom",
    facilities: ["Garden sit-out", "Queen bed + roll-away", "Rain shower", "Mini-fridge", "Smart TV", "Kids welcome amenities"],
  },
];
