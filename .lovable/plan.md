# Dasara 2026 Cinematic Opening

## Scope
- Remove the expired Janmashtami/Onam opening component, its image, storage/event coordination, and opening-only animation styles.
- Keep ordinary holiday references, availability logic, booking, navigation, pages, pricing, images, and desktop layout unchanged.
- Add one isolated full-screen Dasara opening layer mounted by the existing site layout.

## Experience
- Use the current twilight pool and Wayanad landscape imagery as the cinematic background, without changing the homepage image.
- Stage a 3–4 second sequence: dark reveal, mist and water shimmer, warm resort light and logo, restrained festive ornaments, then campaign copy and actions.
- Present the exact English and Kannada campaign copy, Karnataka city line, campaign badge, skip control, availability action, and existing WhatsApp action.
- Add a refined lightweight elephant silhouette, lamp motifs, peacock-feather accents, marigold petals, particles, and light rays with CSS/SVG only.
- Crossfade and subtly scale away to reveal the unchanged page. Skip and Escape dismiss immediately without navigation or reload.

## Campaign Rules
- Define `campaignEnabled`, `campaignStartDate`, and `campaignEndDate` together in one exported configuration.
- Show the full opening only once per browser session while the campaign is active; returning visits in that session go directly to the site.
- Make expiry automatic, leaving no overlay or blocked scrolling when inactive.
- Route “Check Dasara Availability” to the existing booking section and “WhatsApp Us” through the existing resort WhatsApp helper.

## Mobile, Accessibility, and Performance
- Fit the complete experience at 320, 360, 375, 390, 414, and 430px without horizontal overflow or overlapping controls.
- Reduce ornament count and motion on small screens; respect `prefers-reduced-motion` with an immediate readable state and shorter exit.
- Keep controls keyboard accessible, preserve screen-reader access to the underlying site, and avoid focus trapping.
- Use no video, new dependency, or additional large image.

## Verification
- Verify first visit, returning session, Skip/Escape, both actions, auto-transition, date expiry logic, body scrolling restoration, and absence of old campaign references.
- Check desktop and all requested mobile widths for overflow, visual clipping, console errors, and unchanged homepage behavior after dismissal.
