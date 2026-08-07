export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}

export const LEGAL: Record<string, LegalDoc> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy — Seagot Banasura Resorts",
    metaDescription: "How Seagot Banasura Resorts collects, uses and protects the personal information of our guests and website visitors.",
    intro: "Seagot Banasura Resorts respects your privacy. This policy describes what information we collect, why we collect it, and how we protect it.",
    updated: "January 2025",
    sections: [
      { heading: "Information we collect", body: [
        "When you make an enquiry, booking or feedback submission we collect your name, phone number, email address, stay dates and preferences.",
        "We collect standard web analytics (pages visited, device type, approximate location) to improve the site experience. No payment information is stored on this website.",
      ]},
      { heading: "How we use it", body: [
        "To confirm and service your reservation, to respond to enquiries, to process feedback, and to send occasional offers if you have opted in.",
        "We do not sell or rent your data to third parties. We share it only with service providers required to deliver your stay (for example, transport partners you've booked through us).",
      ]},
      { heading: "Cookies", body: [
        "We use essential cookies for site functionality and anonymous analytics cookies to understand usage. You can disable cookies in your browser at any time.",
      ]},
      { heading: "Your rights", body: [
        "You may request access to, correction of, or deletion of your personal data at any time by writing to reservations@seagotbanasura.com. We will respond within 30 days.",
      ]},
      { heading: "Contact", body: [
        "Questions about this policy? Email reservations@seagotbanasura.com or call +91 9747550505.",
      ]},
    ],
  },
  "terms-and-conditions": {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    metaTitle: "Terms & Conditions — Seagot Banasura Resorts",
    metaDescription: "Terms of use and booking terms for Seagot Banasura Resorts, Wayanad.",
    intro: "By using this website or booking a stay with us, you agree to the following terms.",
    updated: "January 2025",
    sections: [
      { heading: "Bookings", body: [
        "All bookings are subject to availability and confirmation by our reservations team. Rates quoted are per villa per night unless otherwise stated and are inclusive of applicable taxes as required by law.",
      ]},
      { heading: "Check-in & check-out", body: [
        "Standard check-in is from 2:00 PM. Standard check-out is by 11:00 AM. Early check-in and late check-out are subject to availability and may incur an additional charge.",
      ]},
      { heading: "Guest conduct", body: [
        "Guests are expected to conduct themselves in a manner respectful of other guests, staff and the natural environment of Wayanad. Smoking is prohibited inside villas. Pets are not permitted unless pre-approved.",
      ]},
      { heading: "Damages", body: [
        "Guests are liable for any damage to villa property, furnishings or the resort premises caused during their stay.",
      ]},
      { heading: "Limitation of liability", body: [
        "Seagot Banasura Resorts is not liable for loss of valuables not deposited in the villa safe or reception locker. Adventure activities are undertaken at the guest's own risk after signing the applicable waiver.",
      ]},
    ],
  },
  "cancellation-policy": {
    slug: "cancellation-policy",
    title: "Cancellation Policy",
    metaTitle: "Cancellation Policy — Seagot Banasura Resorts",
    metaDescription: "Cancellation timelines and charges for reservations at Seagot Banasura Resorts, Wayanad.",
    intro: "We understand plans change. Our cancellation policy is designed to be fair to both guests and the resort.",
    updated: "January 2025",
    sections: [
      { heading: "Standard cancellations", body: [
        "More than 14 days before check-in: no cancellation charge; full deposit refunded.",
        "7 to 14 days before check-in: 25% of the total booking value.",
        "3 to 7 days before check-in: 50% of the total booking value.",
        "Less than 72 hours before check-in or no-show: 100% of the total booking value.",
      ]},
      { heading: "Peak season & festive bookings", body: [
        "Bookings for 20 Dec–5 Jan, long weekends and Onam are non-refundable within 30 days of check-in.",
      ]},
      { heading: "Group & event bookings", body: [
        "Group bookings (4+ villas), weddings and corporate events follow the terms of the signed contract, which supersedes this standard policy.",
      ]},
      { heading: "How to cancel", body: [
        "Email reservations@seagotbanasura.com with your booking reference, or call +91 9747550505. Cancellations are effective only when acknowledged in writing.",
      ]},
    ],
  },
  "refund-policy": {
    slug: "refund-policy",
    title: "Refund Policy",
    metaTitle: "Refund Policy — Seagot Banasura Resorts",
    metaDescription: "Refund processing timelines and terms for cancelled reservations at Seagot Banasura Resorts.",
    intro: "Where a refund is due under our cancellation policy, it will be processed as described below.",
    updated: "January 2025",
    sections: [
      { heading: "Processing time", body: [
        "Approved refunds are initiated within 7 business days of cancellation confirmation and typically reflect in your account within 7–14 business days depending on your bank.",
      ]},
      { heading: "Mode of refund", body: [
        "Refunds are made to the original payment method. If that is not possible, we will transfer the amount to a bank account nominated by the guest in writing.",
      ]},
      { heading: "Non-refundable items", body: [
        "Third-party charges (airport transfers already booked, event vendor deposits, custom experiences) are refunded only to the extent recoverable from the respective vendor.",
      ]},
      { heading: "Disputes", body: [
        "Any refund dispute must be raised in writing within 30 days of the original transaction. Contact reservations@seagotbanasura.com.",
      ]},
    ],
  },
};
