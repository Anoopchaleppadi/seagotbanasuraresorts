## Scope

Extend the existing site — do NOT touch Home, Villas, Experiences, Gallery, or Contact layouts. Preserve the Liquid Glass theme, typography, animations, and color tokens.

## 1. Header — slim top bar

Add a `TopBar` component above the existing `Nav`, rendered inside `SiteLayout`.

- Left: three phone numbers (`9747440404`, `9747550505`, `9747880808`) with `tel:` links + phone icon.
- Middle: address chip "Padinjarathara, Wayanad, Kerala".
- Right: Instagram, Facebook, WhatsApp icons — open in new tab, `rel="noreferrer"`.
- Emerald gradient background, gold hover, ~34px tall, hidden on very small screens (address hides first).
- Adjust `Nav` sticky offset so it sits below the top bar until scroll (top bar scrolls away; nav becomes fixed as today).

## 2. New pages (clean SEO URLs)

All new pages use the existing `LandingPage` template where possible, otherwise a new bespoke section built from existing utilities (`glass`, `btn-luxe`, `Reveal`, `Breadcrumbs`). Each ships full `head()` with title, description, canonical, OG, Twitter, and relevant JSON-LD + BreadcrumbList.

New routes:

- `/about-us` — story, "Why choose us" stat grid (15 Villas · 40 Rooms · 150 Guests · Lake View · Infinity Pool · Nature), Mission & Vision, image sections.
- `/accommodation` — grid of 6 categories (Standard 2BR, Deluxe 2BR, Standard 3BR, Deluxe 4BR, Family Room w/ Balcony, Family Room w/ Sit Out). Each card: hero image, description, capacity, facilities, Book Now → `/contact#book`.
- `/resort-amenities` — animated icon cards for all 14 amenities listed.
- `/adventure-activities` — image cards for each activity + Book Now CTA. (Note: existing `/adventure` route stays; new SEO URL added, old redirected via link update.)
- `/camping` — hero + feature list + Book Camping button.
- `/packages` — 8 package cards (Family, Bachelor, Corporate, Weekend, Honeymoon, School, College, Group) with price placeholder, highlights, Book Now.
- `/offers` — 5 animated offer cards (Monsoon, Weekday, Group, Corporate, Holiday).
- `/tariff` — elegant pricing table (Category, Capacity, Breakfast, Extra Person, Children, Check-in 2 PM / out 11 AM) + Book Now.
- `/testimonials` — Google review cards, video testimonial placeholders, guest photo grid, animated carousel + Review schema.
- `/feedback` — form (Name, Phone, Email, Rating stars, Experience, Suggestions), submit shows success animation (client-only, no backend).
- `/privacy-policy`, `/terms-and-conditions`, `/cancellation-policy`, `/refund-policy` — long-form legal pages using a shared `LegalPage` component.

Existing routes kept as-is; footer links point to new SEO URLs.

## 3. Footer

Rewrite Quick Links section to match the new URL list. Keep villa/individual-villa block. Add Google Maps embed thumbnail linking out.

## 4. Technical SEO

- Update `sitemap.xml` server route to include all new URLs.
- `public/robots.txt` — already present; ensure `Sitemap:` line stays optional (no base URL yet).
- `404` — add `notFoundComponent` on root with branded page.
- Each new route: canonical (relative), OG/Twitter, JSON-LD (Article/Service/Product/FAQ as appropriate), BreadcrumbList.
- Add Review schema on `/testimonials`, Offer schema on `/offers`, PriceSpecification hints on `/tariff`.
- Manifest already exists; leave.

## 5. Performance

- All new `<img>` use `loading="lazy" decoding="async"`.
- Reuse existing hero images from `src/assets/` where possible; only generate new ones if a category has no suitable existing asset (accommodation categories, camping hero).

## Out of scope

- No Home/Villas/Experiences/Gallery/Contact redesign.
- No CMS/admin.
- No new backend — Feedback form is client-only success state.
- No pricing values wired (placeholders only, per prompt).

## Technical notes

- File names follow flat convention: `src/routes/about-us.tsx`, `accommodation.tsx`, `resort-amenities.tsx`, `adventure-activities.tsx`, `camping.tsx`, `packages.tsx`, `offers.tsx`, `tariff.tsx`, `testimonials.tsx`, `feedback.tsx`, `privacy-policy.tsx`, `terms-and-conditions.tsx`, `cancellation-policy.tsx`, `refund-policy.tsx`.
- New shared components: `src/components/TopBar.tsx`, `src/components/LegalPage.tsx`.
- New data: `src/lib/accommodation.ts`, `src/lib/packages.ts`, `src/lib/offers.ts`, `src/lib/amenities.ts`, `src/lib/testimonials.ts`, `src/lib/legal.ts`.
- Reuse `Breadcrumbs`, `Reveal`, `glass`/`btn-luxe` utilities. No new deps.
