# Design: HydroDrive USA

Visual refinement after the owner found the first rework too austere. Keep the established brand, restore atmosphere and motion, and introduce the company before inviting visitors to explore the fleet. The owner requested a simpler first screen with appealing copy about lower-emission and luxury rentals, plus only the core booking action.

## System
- Genre: editorial. Theme: brand. Shape: company introduction, fleet gallery, service details, rental comparison.
- Tone: welcoming, confident, local. The logo cyan and light neutral lead the palette; navy supports readable text and navigation. Darker cyan separates service and career sections.
- Logos: existing public/logo.png, favicon assets and ClariCloud mark, unchanged.
- Colors: sampled directly from public/logo.png: cyan #0097B2 (background) and light neutral #E6E8E6 (droplet). This user-requested logo alignment supersedes the previous green palette. Cyan uses navy text; darker cyan is derived for accessible links and light text surfaces. White and the existing navy remain supporting neutrals.
- Fonts: system-ui, -apple-system, sans-serif for body and display. No added face.
- A cyan hero uses the exact logo color and a subtle tint, with dark readable text. The owner-requested background adds two broad, faint water contours inspired by the logo's droplet, using only cyan and the logo's light neutral.
- Rounded photographic frames and pricing comparison panels provide structure. No generic benefit-card wall.
- Exact legal text and job facts stay. No invented numbers, reviews, photos or destinations.
- Four owner-supplied vehicle photos use authorized generated courtyard backgrounds. Keep public/images/fleet/PROVENANCE.md as the source record. At the owner's request, public captions and alt text describe the vehicles without background-generation wording.

## Layout and motion
- One 1280px capped container: 48px desktop, 24px tablet and 20px phone gutters.
- Header: 80px desktop / 72px phone, existing logo and destinations.
- Hero: “Electric days. Luxury getaways.” introduces the range, followed by a short Orange County company introduction and one “Book your drive” link to the existing #book section. A centered desktop composition becomes left-aligned on phones. No hero photos, selector, price strip or secondary CTA.
- Banner height targets 72% of the stable viewport, within the requested 70–80% range, leaving the next section visible. Content may expand the banner on very short screens or with larger text so nothing is clipped.
- Background: two CSS-only contour layers drift slowly over 22 and 26 seconds. They are clipped to the banner, sit behind the content, ignore pointer input and do not move the layout. No new assets or JavaScript.
- Fleet photographs appear once, below the introduction. Existing prices and discounts remain in Pricing.
- Opening: short staggered type and CTA fades with an 8px rise, settled within 900ms. Content remains available without JavaScript.
- Hover: subtle button lift and directional arrow movement. Never transition all properties.
- Reduced motion: static background contours, no entrance or hover movement, ordinary anchor scrolling.
- Fleet: large two-column photo gallery, stacked on phones; vehicle categories below.
- About: dark cyan section, two-column open list; single column on phones.
- Pricing: three comparable plans; the existing popular weekly plan gets logo-cyan emphasis.
- Trust: existing figures and Turo destination only. Booking: logo-cyan action band.
- Contact: readable light surface and white form, existing phone-opening handler and honest explanation.
- Careers: dark cyan introduction and light role list. Jobs: summary rail beside light reading surface, stacked on phones. Legal documents: light reading surface, unchanged copy.
- Buttons and interactive controls: at least 44px; visible keyboard focus; no clipped or overflowing phone content.

## Preservation and ownership
- The visual refinement changes src/app/page.tsx, globals.css, tokens.css, base.css and this file. The subsequent logo-palette pass changes tokens.css, globals.css and this file, plus page.tsx to eagerly load the four shared hero/gallery images after a desktop image-loading failure was reproduced. The introduction revision changes only page.tsx, globals.css and this document. No deleted or new source files.
- The background-motion and shorter-banner revision changes only globals.css and this document. Copy, markup, links, fields and handlers are unchanged.
- Existing component functions and exports remain; edit their markup in place.
- Keep all existing destinations, fields, form handlers, scripts, analytics and language variants. The owner-authorized introduction revision removes the redundant hero-only selector, its ID and state, secondary About CTA, and duplicated rental statistics. About navigation and the pricing details remain elsewhere.
- Preserve role arrays, metadata and legal text verbatim.
- Do not submit forms, make calls or send applications in the preview.
- The owner approved this revision for merging into main and production publication on 2026-10-24, with background-generation wording removed from the public site.

## Verification
- Fresh before/after evidence: external hydrodrive-visual-refinement, hydrodrive-logo-palette and hydrodrive-introduction folders.
- Inspect all seven routes at 375px and 1440px; additional width checks 320–1920px.
- Check the single hero CTA, unique fleet images, mobile navigation, keyboard focus, reduced motion and no-JavaScript rendering.
- Hallmark before/kept comparison, independent visual review, typecheck, production build, copy ledger and image provenance.
