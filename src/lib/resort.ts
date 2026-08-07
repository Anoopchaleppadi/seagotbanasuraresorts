export const RESORT = {
  name: "Seagot Banasura Resorts",
  short: "Seagot Banasura",
  tagline: "Escape to Standard at Banasura Hills",
  location: "Banasura Sagar Dam, Wayanad, Kerala, India",
  address:
    "Seagot Banasura Resorts, Padinjarathara, Banasura Sagar Dam Road, Wayanad, Kerala 673575, India",
  email: "reservations@seagotbanasura.com",
  whatsapp: "9747880808",
  phones: {
    reception: "9747330303",
    reservations: "9747440404",
    sales: "9747550505",
  },
  mapEmbed:
    "https://www.google.com/maps?q=Banasura+Sagar+Dam,+Wayanad,+Kerala&output=embed",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export const waLink = (message?: string) => {
  const base = `https://wa.me/91${RESORT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const telLink = (num: string) => `tel:+91${num}`;
