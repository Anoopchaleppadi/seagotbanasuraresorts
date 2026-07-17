import expZipline from "@/assets/exp-zipline.jpg";
import expCampfire from "@/assets/exp-campfire.jpg";
import expTrek from "@/assets/exp-trek.jpg";
import expRestaurant from "@/assets/exp-restaurant.jpg";
import pool from "@/assets/pool.jpg";
import attrBanasura from "@/assets/attr-banasura.jpg";
import attrWaterfall from "@/assets/attr-waterfall.jpg";
import attrChembra from "@/assets/attr-chembra.jpg";
import aerial from "@/assets/aerial.jpg";

export interface Experience {
  title: string;
  desc: string;
  image: string;
}

export const EXPERIENCES: Experience[] = [
  { title: "Infinity Pool", desc: "A mirror-edge pool that dissolves into the Banasura horizon.", image: pool },
  { title: "Lakeside Restaurant", desc: "Kerala flavours reimagined, served with a view.", image: expRestaurant },
  { title: "Zipline", desc: "Glide above the emerald canopy of Wayanad.", image: expZipline },
  { title: "Sky Cycling", desc: "Pedal across the sky on a suspended track.", image: expZipline },
  { title: "Giant Swing", desc: "A breathtaking free-fall into the valley wind.", image: expZipline },
  { title: "Campfire Nights", desc: "Stories, warmth and stars over the lake.", image: expCampfire },
  { title: "Sunrise Trek", desc: "Meet the sun above a sea of clouds at Chembra.", image: expTrek },
  { title: "Sunset View", desc: "The Ghats turn to gold from our private ridge.", image: expTrek },
  { title: "Nature Walk", desc: "Guided walks through spice-scented Wayanad forest.", image: aerial },
  { title: "Kids Play Area", desc: "A safe, imaginative playground for our youngest guests.", image: aerial },
  { title: "Indoor Games", desc: "Carrom, chess, and board games in the lounge.", image: expRestaurant },
  { title: "Outdoor Games", desc: "Cricket, badminton and lawn games.", image: aerial },
  { title: "Destination Weddings", desc: "Say yes with the lake and mountains as your witness.", image: aerial },
  { title: "Corporate Retreats", desc: "Focused offsites in a setting that inspires.", image: aerial },
];

export interface Attraction {
  name: string;
  distance: string;
  desc: string;
  image: string;
}

export const ATTRACTIONS: Attraction[] = [
  { name: "Banasura Sagar Dam", distance: "3 km", desc: "India's largest earthen dam and our namesake.", image: attrBanasura },
  { name: "Karlad Lake", distance: "9 km", desc: "Serene lake for kayaking and zip lining.", image: attrBanasura },
  { name: "Chembra Peak", distance: "35 km", desc: "The famed heart-shaped lake trek.", image: attrChembra },
  { name: "Edakkal Caves", distance: "45 km", desc: "Neolithic petroglyphs carved into stone.", image: attrChembra },
  { name: "Soochipara Waterfalls", distance: "42 km", desc: "A three-tiered cascade in dense forest.", image: attrWaterfall },
  { name: "Pookode Lake", distance: "38 km", desc: "A tranquil freshwater lake surrounded by evergreen forests.", image: attrBanasura },
  { name: "Thirunelli Temple", distance: "60 km", desc: "Ancient temple wrapped in the Brahmagiri hills.", image: attrChembra },
  { name: "Muthanga Wildlife Sanctuary", distance: "70 km", desc: "Home to elephants, bison and tigers.", image: aerial },
];

export const GALLERY: { src: string; category: string; alt: string }[] = [
  { src: aerial, category: "Drone", alt: "Aerial view of Seagot Banasura resort" },
  { src: pool, category: "Pool", alt: "Infinity pool at sunset" },
  { src: villaStandardImg, category: "Villas", alt: "Standard villa exterior" },
  { src: villaDeluxeImg, category: "Rooms", alt: "Deluxe villa bedroom" },
  { src: villaThreeImg, category: "Villas", alt: "Three bedroom villa balcony" },
  { src: villaPresidentialImg, category: "Rooms", alt: "Presidential villa living room" },
  { src: expRestaurant, category: "Restaurant", alt: "Lakeside restaurant interior" },
  { src: expZipline, category: "Adventure", alt: "Zipline over the lake" },
  { src: expTrek, category: "Nature", alt: "Sunrise trek at Chembra Peak" },
  { src: expCampfire, category: "Nature", alt: "Evening campfire over the lake" },
  { src: attrBanasura, category: "Nature", alt: "Banasura Sagar Dam aerial" },
  { src: attrWaterfall, category: "Nature", alt: "Soochipara Waterfalls" },
];

// helper imports need to be at bottom because of TS hoisting concerns for consts
import villaStandardImg from "@/assets/villa-standard.jpg";
import villaDeluxeImg from "@/assets/villa-deluxe.jpg";
import villaThreeImg from "@/assets/villa-three.jpg";
import villaPresidentialImg from "@/assets/villa-presidential.jpg";
