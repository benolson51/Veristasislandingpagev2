# VeriStasis — Marketing Site

Static marketing site for **VeriStasis**, the done-for-you CMMC Level 2 documentation engine for small defense contractors (CMMC Level 2, NIST SP 800-171 Rev 2).

VeriStasis turns a contractor's attested answers into the three mandatory artifacts — System Security Plan, POA&M, and the full policy set — computes the real SPRS score, shows the fastest legitimate path to raise it, and keeps everything version-controlled and assessment-ready.

VeriStasis is a DBA of Ensight LLC · Kingsburg, CA.

> **Claims discipline:** every claim on this site must be true of the shipped product. It is a software-assisted documentation & document-control service — **not** a SIEM, continuous-monitoring platform, or CUI hosting environment, and it does not connect to customer live systems. Generation is deterministic (rules/templates), not AI. See `DESIGN_SYSTEM.md` for the visual kit.

## Stack

Pure static HTML/CSS/JS — no framework, no build step.

- `style.css` — shared design system (dark theme, gradients, bento grids, animations)
- `script.js` — shared interactions (scroll reveal, navbar, FAQ accordion, cursor glow, metric count-up)
- [Lucide](https://lucide.dev) icons via CDN (pinned), Google Fonts (Inter, Plus Jakarta Sans, JetBrains Mono)

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Landing — hero with ScorePath projection panel, signature capabilities, comparison, pipeline, honest data-handling band, channel band, FAQ |
| `platform.html` | The engine — SmartScope intake, SPRS + ScorePath, generated artifacts, export/C3PAO bundle, LiveDoc control |
| `solutions.html` | Audiences — defense contractors and the RPO/MSP channel; packaging tiers (Starter / Complete / Managed) |
| `security.html` | Security & data handling — client-side encrypted evidence, what we can/can't read, SPD-only-pending-counsel posture |
| `company.html` | About — leadership, location, why we build this way |
| `contact.html` | Book-a-demo / request-access form |
| `signin.html` | Sign-in (email + password mock) |
| `privacy.html`, `terms.html` | Legal |

## Preview locally

Any static server works:

```sh
npx serve .
# or
npm run dev   # serves on http://localhost:5599
```

## Assets

- `assets/logo.svg` — primary shield mark (gradient, transparent background)
- `assets/og.png` — 1200×630 social share image
- `public/favicon.svg` — favicon variant of the shield

## Before deploying

- Set `og:url` and switch `og:image` to an absolute URL in each page's `<head>`.
- The contact and sign-in forms are front-end only — wire `contact.html`'s form to a backend or form service (fields are named and ready).
- Pricing numbers are intentionally omitted (draft/internal); tiers are shown by name only.
