# VeriStasis — Marketing Site

Static marketing site for **VeriStasis**, an all-in-one CMMC Level 2 compliance platform for the Defense Industrial Base (CMMC Level 2, NIST 800-171 Rev 2).

VeriStasis is a DBA of Ensight LLC · Kingsburg, CA · Co-founded by Brian & Benjamin Olson.

## Stack

Pure static HTML/CSS/JS — no framework, no build step.

- `style.css` — shared design system (dark theme, gradients, bento grids, animations)
- `script.js` — shared interactions (scroll reveal, navbar, FAQ accordion, live encryption demo, cursor glow)
- [Lucide](https://lucide.dev) icons via CDN (pinned), Google Fonts (Inter, Plus Jakarta Sans, JetBrains Mono)

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Landing — hero with live evidence-vault encryption demo, features, comparison, pipeline, FAQ |
| `platform.html` | Platform architecture — evidence workflow, telemetry, Wazuh SIEM, kiosk |
| `solutions.html` | Solutions by segment — primes, subcontractors, MSPs, government |
| `security.html` | Trust center — streaming encryption, zero-trust identity, empirical testing |
| `company.html` | About — leadership, headquarters, mission |
| `contact.html` | Demo request form |
| `signin.html` | Sign-in (MFA-themed mock) |

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
