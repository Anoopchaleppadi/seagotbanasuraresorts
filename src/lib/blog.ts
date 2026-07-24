import heroLake from "@/assets/hero-lake.jpg";
import pool from "@/assets/pool.jpg";
import expRestaurant from "@/assets/exp-restaurant.jpg";
import expZipline from "@/assets/exp-zipline.jpg";
import expCampfire from "@/assets/exp-campfire.jpg";
import expTrek from "@/assets/exp-trek.jpg";
import villaPresidential from "@/assets/villa-presidential.jpg";

export const BLOG_CATEGORIES = [
  "Travel",
  "Wayanad",
  "Adventure",
  "Food",
  "Family",
  "Wedding",
  "Corporate",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  author: string;
  date: string; // ISO
  image: string;
  keywords: string;
  body: string[]; // paragraphs
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-time-to-visit-wayanad",
    title: "The Best Time to Visit Wayanad — A Season-by-Season Guide",
    description: "When to plan your Wayanad trip — monsoon greens, winter mist and summer clarity, from a resort that has watched every season change.",
    category: "Wayanad",
    author: "Seagot Banasura",
    date: "2026-04-10",
    image: heroLake,
    keywords: "Best time to visit Wayanad, Wayanad season guide, Wayanad weather",
    body: [
      "Wayanad has three distinct seasons and each one rewards a different kind of traveller. October to February is the classic tourist window — clear mornings, cool evenings and the highest visibility across the Ghats.",
      "June to September is the monsoon, and this is our favourite season for a slow, cinematic stay. The lake fills to the brim, the estate turns emerald and the sound of rain on the Kerala tile roofs becomes its own meditation.",
      "March to May is warm but far from unpleasant at our altitude — perfect for adventure activities, treks and long afternoons at the infinity pool.",
      "Whenever you come, plan around Banasura Sagar Dam at sunset. It's the one experience we recommend everyone book in advance.",
    ],
  },
  {
    slug: "chembra-peak-heart-lake-trek",
    title: "Trekking Chembra Peak — Wayanad's Heart-Shaped Lake",
    description: "A first-timer's guide to the Chembra Peak trek — permits, timing, difficulty and what to pack, from a resort that plans this trek every week.",
    category: "Adventure",
    author: "Seagot Banasura",
    date: "2026-03-20",
    image: expTrek,
    keywords: "Chembra Peak trek, Wayanad trekking, Heart shaped lake Wayanad",
    body: [
      "The Chembra Peak trek is one of the most iconic short treks in South India. The reward is the famous heart-shaped lake, roughly two-thirds of the way up.",
      "Permits are limited daily and issued from the Forest Department office at Meppadi. From Seagot Banasura it's a 4 am start to secure a permit, followed by a 3–4 hour trek up.",
      "Pack light — water, energy bars, a windbreaker and good trekking shoes. Our concierge arranges packed breakfast and a private guide.",
    ],
  },
  {
    slug: "wayanad-food-guide",
    title: "A Traveller's Guide to Wayanad Food",
    description: "Puttu, kadala curry, meen pollichathu and Wayanadan coffee — a guide to the flavours of Wayanad from our lakeside kitchen.",
    category: "Food",
    author: "Seagot Banasura",
    date: "2026-02-14",
    image: expRestaurant,
    keywords: "Wayanad food, Kerala cuisine Wayanad, Best restaurants Wayanad",
    body: [
      "Wayanadan food sits at the crossroads of Malabar, Kodagu and tribal traditions. It's earthy, spice-forward and generous.",
      "Start with a traditional breakfast of puttu and kadala curry. For lunch, look for a banana-leaf sadya or a meen pollichathu — fish wrapped in banana leaf and grilled.",
      "End the day with a small pour of Wayanadan filter coffee. Our estate sits right in the coffee belt and our beans are roasted weekly in-house.",
    ],
  },
  {
    slug: "planning-a-destination-wedding-in-wayanad",
    title: "Planning a Destination Wedding in Wayanad — A Practical Guide",
    description: "Timelines, venues, permits and hidden costs of a Wayanad destination wedding — from the team behind Seagot Banasura's lakeside weddings.",
    category: "Wedding",
    author: "Seagot Banasura",
    date: "2026-01-25",
    image: villaPresidential,
    keywords: "Destination wedding Wayanad, Wayanad wedding venue, Lakeside wedding Kerala",
    body: [
      "A Wayanad wedding needs about six months of planning. Start with your date — the best window is November to February, with monsoon weddings a beautiful alternative for smaller groups.",
      "Venues fall into three categories: hotels with banquet halls, private estates and full-service resorts. A resort like Seagot Banasura gives you the stay, ceremony and reception in one place.",
      "Budget for the essentials that first-time planners miss — décor logistics, generator backup, alcohol permits and guest transport from Kalpetta or Kozhikode airport.",
    ],
  },
  {
    slug: "why-monsoon-is-the-best-season-in-wayanad",
    title: "Why Monsoon Might Be the Best Season in Wayanad",
    description: "A defence of the Wayanad monsoon — softer light, quieter estates, better food and a lake that finally shows its full self.",
    category: "Travel",
    author: "Seagot Banasura",
    date: "2026-06-05",
    image: expCampfire,
    keywords: "Wayanad monsoon, Best monsoon resort Kerala, Wayanad in June",
    body: [
      "The tourist calendar tells you to visit Wayanad in winter. We think the monsoon is the season that best rewards a slow traveller.",
      "The lake at Banasura Sagar fills to its brim, the tea and coffee estates glow, and the resort empties enough that you feel like you own it.",
      "Yes, some outdoor activities pause during heavy showers — but sit with a hot filter coffee on your balcony as the rain rolls in, and you'll understand why some of our guests only visit in July.",
    ],
  },
  {
    slug: "family-holidays-in-wayanad",
    title: "Family Holidays in Wayanad — How We Plan for Guests with Kids",
    description: "A resort's insider notes on planning a family holiday in Wayanad — activities, safety, timing and villa choice.",
    category: "Family",
    author: "Seagot Banasura",
    date: "2026-05-01",
    image: pool,
    keywords: "Family holiday Wayanad, Wayanad with kids, Kid friendly resort Kerala",
    body: [
      "The best family holidays are quietly engineered. Choose a villa that gives everyone their own space — our three bedroom villas are the family favourite.",
      "Slot in one big adventure day (zipline, kayaking at Karlad, or a short trek) and balance it with slow mornings by the pool.",
      "Book your Chembra Peak trek and Banasura Dam boat ride in advance — both fill up quickly in peak season.",
    ],
  },
  {
    slug: "corporate-offsite-wayanad",
    title: "How to Run a Great Corporate Offsite in Wayanad",
    description: "A checklist for planning a corporate offsite in Wayanad — venue selection, agenda pacing, breakout activities and connectivity.",
    category: "Corporate",
    author: "Seagot Banasura",
    date: "2026-05-18",
    image: expZipline,
    keywords: "Corporate offsite Wayanad, Team building Kerala, Corporate resort Wayanad",
    body: [
      "The best offsites feel like a change of altitude, not just location. Choose a venue with real quiet — Wayanad delivers that in a way a city hotel cannot.",
      "Pace the agenda in half-day blocks and give real breathing room between sessions. Slot in one shared adventure — a zipline session or a group trek — to break hierarchy.",
      "Confirm enterprise-grade Wi-Fi and A/V before you book. At Seagot Banasura we run hybrid sessions weekly with no connectivity issues.",
    ],
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
export const getByCategory = (cat: string) =>
  BLOG_POSTS.filter((p) => p.category.toLowerCase() === cat.toLowerCase());
