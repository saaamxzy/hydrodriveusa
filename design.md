# Design: HydroDrive USA

Locked system for the full Hallmark rework. Preserve the existing brand and wiring.

## System
- Genre: editorial. Theme: brand. Shape: rental offer followed by fleet rows.
- Tone: practical, local, direct. Dark navy with green actions and cyan links.
- Logos: existing public/logo.png, favicon assets and ClariCloud mark, unchanged.
- Colors: all seven named brand values in src/app/tokens.css retain original hex values.
- Fonts: system-ui, -apple-system, sans-serif for body and display. No added face.
- No gradients, glows, decorative pills, icon tiles, card grids, or hover scaling.
- Exact legal text and all job facts stay. No invented photos, claims or destinations.
- User supplied four vehicle photos and authorized generated shared backgrounds. Display all four with a plain disclosure, preserve source files, and document provenance in public/images/fleet/PROVENANCE.md.

## Layout and shared classes
- .container: one 1280px capped container with 48px desktop and 16px phone gutters.
- .site-header > .container.header-row: 80px desktop / 72px phone header.
- .brand contains existing Image and .brand-name; accent span is .brand-accent.
- .nav-link, .back-link, .text-link: cyan/light text, instant visible keyboard focus.
- .button and .button-secondary: 48–52px high, 6px radius, no text wrapping.
- .page-intro: opening section; .page-title and .page-lead for title and description.
- .section-heading: large left-aligned title. .section-intro: supporting text.
- .role-list: full-width hairline-separated entries. .role-row is each existing Link.
- .role-title, .role-meta, .role-compensation, .role-action organize each role.
- .breadcrumbs: wraps safely, body face, sentence case, no badges.
- .job-layout: desktop summary rail plus readable document; stacks on phones.
- .job-summary: h1 .job-title, facts .job-meta, original application CTA near title.
- .job-content: no containing card. Existing sections use .job-section.
- .job-section h2: 25px / 24px. Paragraph measure 65ch, 16px/1.7 body.
- .job-list: semantic ul, plain lists with subdued rules; all items preserved.
- .job-apply: original application closing prose; original CTA may move to summary.
- .document-layout: capped container with .document-intro and .document-body.
- .document-title: responsive document h1, no copy change. .document-body h2: 24px.
- .document-body: 70ch measure, 16px/1.7. No cards or marketing hero treatment.

## Ownership and integration
- Lead owns globals.css, tokens.css, base.css, homepage, footer and technical-role component.
- Page workers edit only their assigned page; do not edit shared CSS or dependencies.
- All CSS for shared classes is lead-owned. Ask for missing classes, never inline colors.
- Existing component functions and page exports remain. Edit their markup in place.
- Keep all hrefs, IDs, keys, fields, handler expressions, scripts and analytics.
- Preserve role arrays and metadata verbatim. Preserve legal text verbatim.
- No commits, pushes, deployment, real form submission, calls or application sends.

## Verification
- Baseline and output: external hydrodrive-hallmark-audit review folder.
- Review at 375px and 1440px; audit also covers 320–1920px.
- Hallmark before/kept comparison, typecheck, build, copy ledger and photo-slot manifest.
