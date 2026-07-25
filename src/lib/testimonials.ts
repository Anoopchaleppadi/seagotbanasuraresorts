export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  source: "Google" | "TripAdvisor" | "MakeMyTrip" | "Direct";
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Aditya & Neha", location: "Bengaluru", rating: 5, source: "Google", text: "The infinity pool at sunrise is unreal. Staff remembered our anniversary and set up a private dinner on the terrace — genuinely one of the best resorts we've stayed at in India." },
  { name: "The Menon Family", location: "Kochi", rating: 5, source: "Google", text: "Three generations, one villa. The kids never wanted to leave the pool, and the elders loved the quiet mornings on the balcony. Food was fantastic — real Kerala flavours." },
  { name: "Rohan D.", location: "Mumbai", rating: 5, source: "TripAdvisor", text: "Went for a corporate offsite with 40 people. Everything was handled — AV, meals, adventure activities, bonfire. Zero stress for the organiser." },
  { name: "Sara P.", location: "Chennai", rating: 5, source: "Google", text: "The view from the villa balcony over Banasura Sagar is genuinely breathtaking. Every detail felt considered — the linen, the amenities, the little welcome note." },
  { name: "Vikram & Priya", location: "Hyderabad", rating: 5, source: "MakeMyTrip", text: "Booked the honeymoon package. Room decor, private dinner, spa — all beautifully done. Would come back for our anniversary in a heartbeat." },
  { name: "College Group of 24", location: "Coimbatore", rating: 5, source: "Direct", text: "Bonfire night, kayaking, zipline — packed two days that we still talk about. Great coordination and fair pricing for the group." },
];
