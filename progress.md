# Denver Meyer Landing Page — Progress Log

**Project:** denver-meyer.vercel.app
**Repository:** github.com/lynnemeyerdubai-design/denver-meyer
**Started:** 2026-02-19
**Last Updated:** 2026-02-20

---

## Current State

Live static landing page deployed on Vercel with GitHub auto-deploy. All code committed, pushed, and deployed. Project complete.

---

## Tech Stack

- Static HTML / CSS / JS (no framework)
- Font: Helvetica Neue Light (system font stack, no Google Fonts)
- Hosting: Vercel (free tier)
- Form: Formspree (endpoint: xqeddkdd)
- Repo: GitHub (lynnemeyerdubai-design/denver-meyer)

---

## Completed Work

### Phase 1 — Initial Build
- Created directory structure and project spec
- Built index.html with all sections: Nav, Hero, About, Services, Portfolio, Availability, Contact, Footer
- Built full CSS design system with custom properties, BEM naming, responsive breakpoints
- Added main.js for mobile nav toggle and form submission
- Wrote content.md as source of truth for all copy
- Deployed to Vercel

### Phase 2 — Copy & Content Refinements
- Rewrote all copy from third-person to first-person voice
- Rewrote About section with senior, authoritative positioning (25+ years, Krea8tiv Design Concepts)
- Rewrote Services section multiple times — final version is single concise paragraph per service
- Updated services to: Retail Design, Commercial Interior Design, Design Conceptualisation, 2D Technical Documentation, 3D Visualisation, Project Management
- Updated portfolio from placeholder tiles to 6 real retail project images
- Merged portfolio closing into single continuous paragraph
- Added "Trusted by leading brands" client logos (Dior, Boucheron, Michael Cinco, Messika, Lolita Bonita, Nicoli)

### Phase 3 — Visual Design Refinements
- **Availability section:** Iterated through multiple backgrounds (#1F1F1F → #2E2E2E → #3D3D3D → #F3E6DC → #E2C5A8 → #F2B882). Final: bright orange #F2B882 with black text and black button
- **Button styling:** Primary buttons use #F2B882 orange. Availability CTA uses black bg with white text (btn--dark)
- **Client logos:** Solid black filter, flex-centered grid, transparent padding on PNGs to prevent cropping
- **Section dividers:** Peach/orange (#D4A373, 2px) between major sections. Charcoal divider (#3A3A3A) above client logos
- **Footer:** Grey divider line above footer (#444444), grey line between footer top and bottom (rgba 107,107,107,0.6)
- **Section labels** (SERVICES, PORTFOLIO, CONTACT): Sized to 1.25rem (20px), uppercase
- **Section spacing:** Increased padding — 96px mobile, 128px desktop

### Phase 4 — Typography
- Started with Syne (headings) + Inter (body) via Google Fonts
- Switched entirely to Inter across all elements
- Final switch to Helvetica Neue Light system font stack — no external font requests
- Font weights: 300 (body text), 400 (headings, nav, buttons), 700 (hero name)
- Font smoothing: -webkit-font-smoothing: antialiased
- All text color changed to pure black (#000000) for readability with light font weight

### Phase 5 — Hero Section Refinements
- Changed "Denver Meyer" from stacked (Denver / Meyer) to single line
- Font size: clamp(48px, 6vw, 72px), weight 700
- Replaced 100vh height with padding-based sizing (140px top/bottom; 100px on mobile)
- Tagline displays as single line on desktop (white-space: nowrap), wraps on mobile (max-width: 480px)
- Removed "Dubai, UAE — working globally" location line
- Buttons: 48px spacing below tagline, 18px gap on desktop, stacked vertically on mobile
- Hero container centered with consistent var(--space-lg) padding

### Phase 6 — Navigation
- Replaced "Start a Conversation" pill CTA with plain "Contact" link
- Nav links: About | Services | Portfolio | Contact

### Phase 7 — Form Integration
- Connected contact form to Formspree (POST to https://formspree.io/f/xqeddkdd)
- AJAX submission with inline "Thank you" success message
- Form fields: Name, Email, Project Type (dropdown), Message
- Placeholder text: "Tell me about your project." (single full stop)

### Phase 8 — Content & Layout Fixes (2026-02-20)
- Removed "ABOUT" section label (nav anchor preserved)
- Removed Experience/Focus detail block from About section
- Removed "Dubai, UAE" from contact section
- Updated About lead: "Based in Dubai, working globally, I bring over 25 years..."
- Redrafted all 6 service descriptions to not start with "I"
- Availability section: text changed from white to black, body text uppercase
- Portfolio intro and closing paragraphs set to full-width (removed max-width)
- Portfolio closing paragraph color changed from grey to black
- Footer: DENVER MEYER in uppercase, real LinkedIn and Instagram links added
- Client logos: added transparent padding to all 6 PNGs, charcoal divider line above, flex grid with 40px max-height
- Mobile: buttons stack vertically and center, consistent padding across all sections
- Added krea8tivdesignconcepts.com website link in contact section (below email) and footer
- Footer now has 4 links: Website, LinkedIn, Instagram, Email
- Increased section padding for more breathing room between sections
- Availability section: increased spacing between heading, body text, and button

---

## File Structure

```
landing-page/
  index.html              — Main page (all sections)
  styles/styles.css       — Full CSS (tokens, reset, components, responsive)
  scripts/main.js         — Mobile nav, form AJAX, scroll behavior
  content.md              — Copy source of truth
  build-progress.json     — Task tracking
  progress.md             — This file
  vercel.json             — Vercel static site config
  assets/
    retail-01.jpg          — Portfolio images (6 total)
    retail-02.jpg
    retail-03.jpg
    retail-04.jpg
    retail-05.jpg
    retail-06.jpg
    logo-dior.png          — Client logos (6 total, with transparent padding)
    logo-boucheron.png
    logo-michael-cinco.png
    logo-messika.png
    logo-lolita-bonita.png
    logo-nicoli.png
```

---

## Design Tokens (Current)

| Token | Value | Use |
|-------|-------|-----|
| Font | Helvetica Neue Light | All text |
| --color-primary | #000000 | Headings, body text, dark backgrounds |
| --color-body | #000000 | Body text |
| --color-muted | #000000 | Labels, captions (changed from grey for readability) |
| --color-surface | #F7F6F3 | Alternate section backgrounds |
| --color-bg | #FDFCFA | Page background |
| --color-accent | #F2B882 | Primary buttons, availability bg |
| Section dividers | #D4A373, 2px | Between major sections |
| Client divider | #3A3A3A, 1px | Above client logos |
| Footer divider | #444444, 1px | Above footer |

---

## Known Issues / Notes

- Vercel free tier has 100 deploys/day limit
- No staging environment — production only
- All code committed, pushed, and deployed to Vercel as of 2026-02-20
- Website link: krea8tivdesignconcepts.com
- LinkedIn link: linkedin.com/in/denvermeyer
- Instagram link: instagram.com/krea8tivdesignconcepts
- Contact form dropdown options match services list
- Cloudflare tunnel available for temporary sharing while Vercel limit is active
