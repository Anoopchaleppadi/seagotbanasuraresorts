import heroLake from "@/assets/hero-lake.jpg";
import pool from "@/assets/pool.jpg";
import expRestaurant from "@/assets/exp-restaurant.jpg";
import expZipline from "@/assets/exp-zipline.jpg";
import expCampfire from "@/assets/exp-campfire.jpg";
import expTrek from "@/assets/exp-trek.jpg";
import villaPresidential from "@/assets/villa-presidential.jpg";
import villaThree from "@/assets/villa-three.jpg";
import aerial from "@/assets/aerial.jpg";

export interface LandingSection {
  heading: string;
  body: string;
}

export interface LandingFaq {
  q: string;
  a: string;
}

export interface LandingPageData {
  slug: string; // route path without leading slash
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  hero: string;
  keywords: string;
  intro: string;
  sections: LandingSection[];
  amenities: string[];
  faqs: LandingFaq[];
  related: { label: string; to: string; params?: Record<string, string> }[];
  video?: string;
  breadcrumb: string;
}

export const LANDING_PAGES: Record<string, LandingPageData> = {
  "infinity-pool": {
    slug: "infinity-pool",
    eyebrow: "The Pool",
    h1: "Infinity Pool Overlooking Banasura Sagar",
    title: "Infinity Pool Resort in Wayanad — Seagot Banasura",
    description: "Swim into the sky at Seagot Banasura's mirror-edge infinity pool overlooking Banasura Sagar Dam. Open sunrise to sunset with lakeside lounging.",
    keywords: "Infinity Pool Wayanad, Pool Resort Kerala, Lake View Pool Wayanad",
    hero: pool,
    breadcrumb: "Infinity Pool",
    intro: "Our infinity pool sits on the highest ridge of the estate, its water level cut precisely to meet the horizon of Banasura Sagar. It's designed to feel less like a pool and more like an extension of the lake.",
    sections: [
      { heading: "Mirror edge · Lake horizon", body: "The infinity edge dissolves into the water body below, so you swim toward the Western Ghats. Sunrise and sunset are the two hours we recommend most." },
      { heading: "Deep-end and shallow-end", body: "Zoned for both strong swimmers and families with children, with heated water during the cooler monsoon and winter months." },
      { heading: "Poolside service", body: "Wood-fired pizzas, cold-pressed juices, tender coconut and our signature Banasura sundowner delivered to your lounger." },
    ],
    amenities: ["Infinity edge", "Heated in monsoon", "Kids splash zone", "Poolside dining", "Cabanas & loungers", "Towel service"],
    faqs: [
      { q: "What are the pool timings?", a: "The infinity pool is open from 6:30 am to 7:00 pm daily for in-house guests." },
      { q: "Is the pool suitable for children?", a: "Yes — there is a shallow zone with lifeguard supervision. Children under 12 must be accompanied by an adult." },
      { q: "Do you rent swimwear?", a: "Swimwear is not provided but is available at the resort boutique." },
    ],
    related: [
      { label: "Explore villas", to: "/villas" },
      { label: "Lakeside restaurant", to: "/restaurant" },
      { label: "Book your stay", to: "/contact" },
    ],
  },
  "restaurant": {
    slug: "restaurant",
    eyebrow: "The Restaurant",
    h1: "Lakeside Restaurant in Wayanad",
    title: "Best Restaurant in Wayanad with Lake View — Seagot Banasura",
    description: "Kerala flavours reimagined at Seagot Banasura's lakeside restaurant. Wood-fired kitchen, tasting menus and dining decks over Banasura Sagar.",
    keywords: "Restaurant Wayanad, Lake View Restaurant Kerala, Fine Dining Wayanad",
    hero: expRestaurant,
    breadcrumb: "Restaurant",
    intro: "A glass-walled dining room and open-air deck perched over the lake. Our kitchen sources from Wayanad's farms and spice estates, and the tasting menu shifts with the season.",
    sections: [
      { heading: "Kerala roots · Modern hand", body: "Meen pollichathu, Wayanad chicken curry, thoran and puttu — served with the plating and precision of a modern kitchen." },
      { heading: "Wood-fired kitchen", body: "Sourdough, artisan pizzas and slow-roasted local pork loin from our open wood-fired oven." },
      { heading: "Bar & Cellar", body: "A curated cocktail list built around Wayanad coffee, cardamom and toddy palm, alongside a small library of Indian wines." },
    ],
    amenities: ["All-day dining", "Lake-view deck", "Wood-fired oven", "In-villa dining", "Chef's table", "Vegan & Jain menus"],
    faqs: [
      { q: "Do I need to book a table?", a: "Reservations are recommended for dinner. In-house guests get priority; walk-in guests are welcome subject to availability." },
      { q: "Is the restaurant open to non-residents?", a: "Yes, on advance reservation via WhatsApp on +91 9747880808." },
      { q: "Are vegetarian and Jain meals available?", a: "Yes — our menu has clearly marked vegetarian, vegan and Jain options prepared in a separate section of the kitchen." },
    ],
    related: [
      { label: "Villas", to: "/villas" },
      { label: "Infinity pool", to: "/infinity-pool" },
      { label: "Reserve a table", to: "/contact" },
    ],
  },
  "adventure": {
    slug: "adventure",
    eyebrow: "Adventure",
    h1: "Adventure Activities in Wayanad",
    title: "Adventure Resort in Wayanad — Zipline, Sky Cycling & Trekking",
    description: "Zipline, sky cycling, giant swing, treks and guided nature walks at Seagot Banasura. Wayanad's most complete adventure resort.",
    keywords: "Adventure Resort Kerala, Zipline Wayanad, Trekking Resort Wayanad",
    hero: expZipline,
    breadcrumb: "Adventure",
    intro: "The Western Ghats are one of India's finest natural adventure playgrounds. From our estate you can glide, climb, trek and paddle — with trained guides and top-grade safety kit.",
    sections: [
      { heading: "Ziplining over the lake", body: "A double-line zip strung high across the estate valley — the longest guest zip in this stretch of Wayanad." },
      { heading: "Sky cycling & giant swing", body: "Pedal a suspended cycle across the sky, then free-fall into the valley wind on our giant swing." },
      { heading: "Guided treks", body: "Sunrise trek to Chembra Peak's heart-shaped lake, guided walks through spice estates and full-day treks to Banasura Peak." },
    ],
    amenities: ["Zipline", "Sky cycling", "Giant swing", "Trekking", "Kayaking (Karlad)", "Nature walks"],
    faqs: [
      { q: "Are activities included in the tariff?", a: "In-resort activities are chargeable at guest-friendly rates. Treks and off-resort experiences are booked as packages." },
      { q: "What is the minimum age?", a: "Zipline and sky cycling: 12+. Giant swing: 14+ with medical fitness declaration." },
      { q: "Do you provide equipment?", a: "All safety harnesses, helmets and gear are provided and inspected daily." },
    ],
    related: [
      { label: "Nearby attractions", to: "/nearby-attractions" },
      { label: "Family resort", to: "/family" },
      { label: "Plan your stay", to: "/contact" },
    ],
  },
  "weddings": {
    slug: "weddings",
    eyebrow: "Destination Weddings",
    h1: "Destination Wedding Resort in Wayanad",
    title: "Destination Wedding Resort in Wayanad — Seagot Banasura",
    description: "Host your destination wedding at Seagot Banasura Resorts, Wayanad. Lakeside mandap, 15 private villas, custom menus and full wedding planning.",
    keywords: "Destination Wedding Wayanad, Lakeside Wedding Kerala, Wedding Resort Wayanad",
    hero: villaPresidential,
    breadcrumb: "Destination Weddings",
    intro: "A wedding at Seagot Banasura begins where the lake meets the mountains. We host intimate ceremonies of 30 guests to full celebrations of 200, with buyout of the estate available.",
    sections: [
      { heading: "Ceremony settings", body: "Lakeside mandap on the lower lawn, an emerald-forest ceremony deck and a chandelier-lit indoor hall for evening rituals." },
      { heading: "Reception & catering", body: "A dedicated wedding chef, curated Kerala tasting menus, live counters and premium bar programmes." },
      { heading: "Stay for the whole party", body: "Fifteen private villas across four categories can host up to 90 guests on-property, with concierge coordination for extra hotel blocks." },
    ],
    amenities: ["Lakeside mandap", "Full estate buyout", "Wedding planner", "Catering & bar", "Photography partners", "Bridal suite"],
    faqs: [
      { q: "What is the maximum guest count?", a: "The estate comfortably hosts up to 200 for the ceremony and reception, and 90 in on-property villas." },
      { q: "Can you help with mehendi, sangeet and haldi?", a: "Yes — a dedicated wedding coordinator plans every function across your stay." },
      { q: "Do you offer full buyouts?", a: "Yes. Please write to reservations@seagotbanasura.com for buyout tariffs and available dates." },
    ],
    related: [
      { label: "Villas", to: "/villas" },
      { label: "Corporate retreats", to: "/corporate" },
      { label: "Enquire now", to: "/contact" },
    ],
  },
  "corporate": {
    slug: "corporate",
    eyebrow: "Corporate Retreats",
    h1: "Corporate Retreat Resort in Wayanad",
    title: "Corporate Retreat Resort in Wayanad — Seagot Banasura",
    description: "Offsites, leadership retreats and team building in Wayanad. Meeting spaces, adventure programmes and 15 private villas at Seagot Banasura.",
    keywords: "Corporate Resort Wayanad, Offsite Wayanad, Team Building Resort Kerala",
    hero: villaThree,
    breadcrumb: "Corporate Retreats",
    intro: "A serious offsite in a place that quiets the mind. Full A/V, breakout rooms and 15 villas that can be blocked exclusively for your team.",
    sections: [
      { heading: "Meeting spaces", body: "A boardroom for 24, a bright hall for 60 and open-air pavilions for keynotes with the lake as a backdrop." },
      { heading: "Team building", body: "Curated adventure activities — ziplining, trekking, kayaking and cook-offs led by our chef." },
      { heading: "Wellness for leadership", body: "Sunrise yoga on the deck, breathwork and quiet 1:1 walking rooms across the estate." },
    ],
    amenities: ["Boardroom 24", "Hall for 60", "High-speed Wi-Fi", "A/V & projection", "Team building", "Full estate buyout"],
    faqs: [
      { q: "How many can you host?", a: "Up to 90 residential and 120 for day sessions. Full estate buyout is available on request." },
      { q: "Do you have internet suitable for hybrid sessions?", a: "Yes — enterprise-grade Wi-Fi across meeting spaces and villas." },
      { q: "Can you customise packages?", a: "Absolutely. We build offsite packages around your agenda, from 2-day sprints to week-long retreats." },
    ],
    related: [
      { label: "Villas", to: "/villas" },
      { label: "Adventure activities", to: "/adventure" },
      { label: "Get a proposal", to: "/contact" },
    ],
  },
  "family": {
    slug: "family",
    eyebrow: "For Families",
    h1: "Family Resort in Wayanad",
    title: "Family Resort in Wayanad — Villas, Pool & Activities",
    description: "The best family resort in Wayanad. Spacious villas, kids play area, safe pool, nature walks and Kerala hospitality at Seagot Banasura.",
    keywords: "Family Resort Wayanad, Kid Friendly Resort Kerala, Wayanad Resort with Pool",
    hero: villaThree,
    breadcrumb: "Family Resort",
    intro: "Designed for the two things families remember most — space to be together and space to breathe apart. Our villas sleep up to eight, and the estate has activities from ages 3 to 83.",
    sections: [
      { heading: "Villas built for families", body: "Two, three and four bedroom villas with connected living rooms, extra bedding and child-safe balconies." },
      { heading: "Play & learn", body: "A dedicated kids play zone, indoor games lounge, and guided nature walks that turn into biology lessons." },
      { heading: "Safe adventure", body: "Family-friendly zipline and giant swing sessions, kayaking at Karlad Lake and easy day treks with our guides." },
    ],
    amenities: ["Family villas", "Kids play area", "Safe pool zone", "Nature walks", "Cribs on request", "Kid menus"],
    faqs: [
      { q: "Do children stay free?", a: "Children under 6 stay complimentary using existing bedding. Children aged 6–12 are charged at ₹750–800 depending on villa category." },
      { q: "Do you offer cribs and highchairs?", a: "Yes, both are complimentary on request at the time of booking." },
      { q: "Are activities safe for young children?", a: "Yes — activity age minimums are clearly enforced and every session has a trained supervisor." },
    ],
    related: [
      { label: "Three bedroom villa", to: "/villas/three-bedroom-villa" },
      { label: "Adventure activities", to: "/adventure" },
      { label: "Plan your stay", to: "/contact" },
    ],
  },
  "nearby-attractions": {
    slug: "nearby-attractions",
    eyebrow: "Around the Resort",
    h1: "Attractions Near Banasura Sagar Dam",
    title: "Places to Visit near Banasura Sagar — Seagot Banasura",
    description: "Banasura Sagar Dam, Chembra Peak, Edakkal Caves, Pookode Lake and Soochipara Waterfalls — all within an hour of Seagot Banasura.",
    keywords: "Places to Visit Wayanad, Banasura Sagar Dam, Chembra Peak, Wayanad Tourism",
    hero: aerial,
    breadcrumb: "Nearby Attractions",
    intro: "Wayanad is one of the most complete tourism destinations in Kerala — Neolithic caves, tea estates, wildlife sanctuaries and India's largest earthen dam are all a short drive from our estate.",
    sections: [
      { heading: "Banasura Sagar Dam · 3 km", body: "India's largest earthen dam and the source of our name. Sunset boat rides on the reservoir are a resort favourite." },
      { heading: "Chembra Peak · 35 km", body: "The heart-shaped lake trek that puts Wayanad on the map. We arrange permits, guides and packed breakfast." },
      { heading: "Edakkal Caves · 45 km", body: "Neolithic petroglyphs carved 6,000 years ago — a short hike rewards you with history and a valley view." },
    ],
    amenities: ["Curated day tours", "Private cabs", "Guide services", "Trek permits", "Packed breakfast", "Sunset boat rides"],
    faqs: [
      { q: "Do you organise trips to Chembra Peak?", a: "Yes — permits, guide, transport and packed breakfast are arranged for a 4 am start." },
      { q: "How far is Kalpetta town?", a: "Kalpetta is about 25 km from the resort, roughly a 45 minute drive." },
      { q: "Can I go boating at the dam?", a: "Yes, we can arrange speedboat and pedal boat rides at Banasura Sagar Dam, subject to KTDC availability." },
    ],
    related: [
      { label: "Adventure activities", to: "/adventure" },
      { label: "Book your stay", to: "/contact" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  "faq": {
    slug: "faq",
    eyebrow: "Guest Information",
    h1: "Frequently Asked Questions",
    title: "FAQ — Seagot Banasura Resorts, Wayanad",
    description: "Timings, check-in, tariffs, children policy, distance and directions — everything you need to know before staying at Seagot Banasura.",
    keywords: "Seagot Banasura FAQ, Wayanad Resort Booking, Banasura Sagar Resort",
    hero: heroLake,
    breadcrumb: "FAQ",
    intro: "Answers to the questions our reservations team hears most often. Still unsure? WhatsApp us on +91 9747880808 — we reply within minutes.",
    sections: [
      { heading: "Location & directions", body: "We are on Banasura Sagar Dam Road, Padinjarathara, Wayanad — about 30 km from Kalpetta and 100 km from Kozhikode airport." },
      { heading: "Check-in & check-out", body: "Standard check-in is 2:00 pm and check-out is 11:00 am. Early check-in and late check-out are subject to availability." },
      { heading: "Payment & cancellation", body: "We accept UPI, cards and bank transfer. A 25% advance secures your booking; cancellations up to 7 days before check-in are refunded 100%." },
    ],
    amenities: ["Free Wi-Fi", "Free parking", "Airport pickup", "24/7 room service", "Pet-friendly on request", "Doctor on call"],
    faqs: [
      { q: "How far is the nearest airport?", a: "Kannur International Airport (CNN) is 90 km and Kozhikode (Calicut) Airport (CCJ) is 100 km. We arrange private airport transfers on request." },
      { q: "Is the resort child friendly?", a: "Yes. Children under 6 stay free. We have family villas, a kids play area and a shallow pool zone with lifeguard supervision." },
      { q: "Do you allow pets?", a: "Small pets are welcome in select villas on advance request. Please write to us before booking." },
      { q: "Is the resort open in monsoon?", a: "Yes — monsoon is our most beautiful season. We have heated pool water and special monsoon offers." },
      { q: "Can I have a bonfire?", a: "Yes, bonfires are complimentary for stays over 2 nights and chargeable otherwise, subject to weather." },
    ],
    related: [
      { label: "Villas", to: "/villas" },
      { label: "Monsoon offers", to: "/offers/monsoon" },
      { label: "Contact us", to: "/contact" },
    ],
  },
  "offers-monsoon": {
    slug: "offers/monsoon",
    eyebrow: "Seasonal Offer",
    h1: "Monsoon Offers at Seagot Banasura Resorts",
    title: "Monsoon Offers — Seagot Banasura Resorts, Wayanad",
    description: "Up to 25% off villa tariffs, complimentary bonfire and monsoon breakfast at Seagot Banasura Resorts, Wayanad. Valid June to September.",
    keywords: "Monsoon Offer Wayanad, Monsoon Resort Kerala, Wayanad Monsoon Deals",
    hero: expCampfire,
    breadcrumb: "Monsoon Offers",
    intro: "Wayanad in the rains is quiet, cinematic and green. Our monsoon package makes it easy — softer tariffs, warmer touches and every window seat facing the storm.",
    sections: [
      { heading: "25% off villa tariffs", body: "Valid on all villa categories for stays booked between June 1 and September 30." },
      { heading: "Complimentary bonfire nights", body: "One bonfire evening on us for every 2-night stay, weather permitting." },
      { heading: "Monsoon breakfast", body: "A traditional Wayanadan breakfast spread — puttu, kadala curry, appam and hot filter coffee — included daily." },
    ],
    amenities: ["25% off tariffs", "Heated pool", "Complimentary bonfire", "Monsoon breakfast", "Late check-out", "Airport transfer discount"],
    faqs: [
      { q: "Is the offer combinable with other discounts?", a: "The monsoon offer is our best available rate for the season and is not combinable with other promotions." },
      { q: "Is the offer refundable?", a: "Yes, cancellations up to 7 days before check-in are fully refunded." },
      { q: "Are activities available in monsoon?", a: "Most activities run in monsoon — the zipline pauses only for heavy rain, and our pool is heated." },
    ],
    related: [
      { label: "Villas", to: "/villas" },
      { label: "Book your stay", to: "/contact" },
      { label: "FAQ", to: "/faq" },
    ],
  },
};

export const getLanding = (key: string) => LANDING_PAGES[key];
