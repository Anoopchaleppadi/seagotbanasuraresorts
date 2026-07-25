export interface Offer {
  slug: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  perks: string[];
}

export const OFFERS: Offer[] = [
  { slug: "monsoon", name: "Monsoon Offer", badge: "Seasonal", headline: "Up to 25% off · Jun–Sep", description: "Watch Wayanad turn emerald from your villa balcony. Heated pool, hot chai and slow monsoon mornings.", perks: ["25% off villa tariff", "Complimentary hi-tea", "Guided mist walk", "Late check-out subject to availability"] },
  { slug: "weekday", name: "Weekday Offer", badge: "Mon–Thu", headline: "Stay 2, pay for 1.5 nights", description: "Quieter estate, better value. Ideal for remote workers, writers and couples avoiding the weekend rush.", perks: ["Extended check-out", "Complimentary breakfast", "50% off spa (add-on)", "Free WiFi in villa"] },
  { slug: "group", name: "Group Offer", badge: "10+ guests", headline: "Book 4 villas, get the 5th free (equal category)", description: "Reunions, birthdays, milestone trips — take over a wing of Seagot Banasura.", perks: ["Dedicated coordinator", "Custom menus", "Private bonfire", "Group airport transfer"] },
  { slug: "corporate", name: "Corporate Offer", badge: "Offsites", headline: "Turnkey offsite from 15–150 pax", description: "Conference hall, breakout villas, team-building activities and structured dining.", perks: ["AV-equipped hall", "Hi-tea & working lunch", "Team activities", "GST invoicing"] },
  { slug: "holiday", name: "Holiday Offer", badge: "Long weekends", headline: "Curated 3N packages for national holidays", description: "Onam, Christmas, New Year and long weekends — planned experiences and festive dining.", perks: ["Festive dinners", "Cultural performances", "Kids programming", "Guaranteed pool cabana"] },
];
