import {
  Waves, Mountain, UtensilsCrossed, ParkingSquare, Wifi, Clock, Flame,
  Beef, Gamepad2, Trees, Baby, Compass, Leaf, Zap,
  type LucideIcon,
} from "lucide-react";

export interface Amenity {
  name: string;
  desc: string;
  icon: LucideIcon;
}

export const AMENITIES: Amenity[] = [
  { name: "Infinity Pool", desc: "Mirror-edge pool overlooking Banasura Sagar.", icon: Waves },
  { name: "Lake View", desc: "Panoramic vistas from every villa and public space.", icon: Mountain },
  { name: "Restaurant", desc: "Multi-cuisine dining with Kerala specialities.", icon: UtensilsCrossed },
  { name: "Parking", desc: "Complimentary on-site parking for all guests.", icon: ParkingSquare },
  { name: "WiFi", desc: "High-speed complimentary Wi-Fi resort-wide.", icon: Wifi },
  { name: "24 Hour Reception", desc: "Round-the-clock concierge and front desk.", icon: Clock },
  { name: "Campfire", desc: "Nightly bonfire under the Wayanad stars.", icon: Flame },
  { name: "BBQ", desc: "Live barbecue counters and grill nights.", icon: Beef },
  { name: "Indoor Games", desc: "Carrom, chess, table tennis and a game lounge.", icon: Gamepad2 },
  { name: "Outdoor Games", desc: "Badminton, cricket lawn and open play areas.", icon: Trees },
  { name: "Kids Area", desc: "Dedicated play zone and children's activities.", icon: Baby },
  { name: "Adventure Activities", desc: "Zipline, kayaking, giant swing and more.", icon: Compass },
  { name: "Nature Walk", desc: "Guided estate and lakeside nature walks.", icon: Leaf },
  { name: "Power Backup", desc: "24-hour uninterrupted power supply.", icon: Zap },
];
