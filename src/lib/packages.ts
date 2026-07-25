export interface Package {
  slug: string;
  name: string;
  tag: string;
  priceLabel: string;
  highlights: string[];
}

export const PACKAGES: Package[] = [
  { slug: "family", name: "Family Package", tag: "Made for families", priceLabel: "On request", highlights: ["2N/3D villa stay", "All meals included", "Kids activities", "Pool & campfire"] },
  { slug: "bachelor", name: "Bachelor Package", tag: "For the crew", priceLabel: "On request", highlights: ["Group villa stay", "BBQ + bonfire night", "Adventure activities", "Late check-out"] },
  { slug: "corporate", name: "Corporate Package", tag: "Offsites & retreats", priceLabel: "On request", highlights: ["Conference hall", "Team-building activities", "All meals + hi-tea", "Airport transfers"] },
  { slug: "weekend", name: "Weekend Package", tag: "Fri–Sun getaway", priceLabel: "On request", highlights: ["2N villa stay", "Breakfast + one dinner", "Pool access", "Sunset walk"] },
  { slug: "honeymoon", name: "Honeymoon Package", tag: "Just the two of you", priceLabel: "On request", highlights: ["Private dinner setup", "Room decoration", "Couple spa (optional)", "Late check-out"] },
  { slug: "school", name: "School Tour", tag: "Student groups", priceLabel: "On request", highlights: ["Group accommodation", "Guided nature walk", "Adventure zone", "All meals"] },
  { slug: "college", name: "College Tour", tag: "Student groups", priceLabel: "On request", highlights: ["Dorm-style stay", "Bonfire & DJ night", "Zipline & kayaking", "Group discounts"] },
  { slug: "group", name: "Group Package", tag: "10+ guests", priceLabel: "On request", highlights: ["Multi-villa booking", "Custom menus", "Private events", "Dedicated coordinator"] },
];
