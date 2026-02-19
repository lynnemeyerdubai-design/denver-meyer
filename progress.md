# Denver Meyer Landing Page — Progress Log

**Project:** denver-meyer.vercel.app
**Repository:** github.com/lynnemeyerdubai-design/denver-meyer
**Started:** 2026-02-19
**Last Updated:** 2026-02-20

---

## Current State

Live static landing page deployed on Vercel with GitHub auto-deploy. All code pushed and in sync.

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
- **Availability section:** Iterated through multiple backgrounds (#1F1F1F → #2E2E2E → #3D3D3D → #F3E6DC → #E2C5A8 → #F2B882). Final: bright orange #F2B882 with white text and black button
- **Button styling:** Primary buttons use #F2B882 orange. Availability CTA uses black bg with white text (btn--dark)
- **Client logos:** Changed to solid black for impact
- **Section dividers:** Peach/orange (#D6A77A, 2px) between major sections. Internal content borders use charcoal (#6B6B6B, 0.6 opacity)
- **Footer:** Removed grey divider line between top and bottom
- **Section labels** (ABOUT, SERVICES, etc.): Sized to 1.25rem (20px), uppercase

### Phase 4 — Typography
- Started with Syne (headings) + Inter (body) via Google Fonts
- Switched entirely to Inter across all elements
- Final switch to Helvetica Neue Light system font stack — no external font requests
- Font weights: 300 (body text), 400 (headings, nav, buttons)
- Font smoothing: -webkit-font-smoothing: antialiased

### Phase 5 — Hero Section Refinements
- Changed "Denver Meyer" from stacked (Denver / Meyer) to single line
- Font size: clamp(48px, 6vw, 72px), weight 400
- Replaced 100vh height with padding-based sizing (120px top, 80px bottom; 80px/60px on mobile)
- Tagline displays as single line on desktop (white-space: nowrap), wraps to 2 lines on mobile (max-width: 480px)
- Removed "Dubai, UAE — working globally" location line
- Buttons spaced 64px below tagline, 18px gap between them, min-width 220px each
- Hero container centered with margin-left/right: auto, equal padding

### Phase 6 — Navigation
- Replaced "Start a Conversation" pill CTA with plain "Contact" link
- Nav links: About | Services | Portfolio | Contact

### Phase 7 — Form Integration
- Connected contact form to Formspree (POST to https://formspree.io/f/xqeddkdd)
- AJAX submission with inline "Thank you" success message
- Form fields: Name, Email, Project Type (dropdown), Message

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
    logo-dior.png          — Client logos (6 total)
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
| --color-primary | #1A1A1A | Headings, dark backgrounds |
| --color-body | #3D3D3D | Body text |
| --color-muted | #7A7A7A | Captions, labels |
| --color-surface | #F7F6F3 | Alternate section backgrounds |
| --color-bg | #FDFCFA | Page background |
| --color-accent | #F2B882 | Primary buttons, availability bg |
| Section dividers | #D6A77A, 2px | Between major sections |
| Content borders | #6B6B6B, 0.6 opacity | Internal dividers |

---

## Known Issues / Notes

- Vercel free tier has 100 deploys/day limit — hit on 2026-02-20
- No staging environment — production only
- LinkedIn and Instagram footer links are placeholder (#)
- Contact form dropdown options match services list
