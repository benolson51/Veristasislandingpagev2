# AGENTS.md — VeriStasis landing site & GTM kit

Orientation for an AI agent (Codex / Claude) reviewing or editing this repo. **Read this first.**

## What this project is
The **marketing website + go-to-market (GTM) sales kit** for **VeriStasis** — a **done-for-you CMMC Level 2 /
NIST SP 800-171 documentation engine** for small U.S. defense contractors. The product turns a contractor's
*self-attested* answers into the mandatory audit artifacts (System Security Plan, POA&M, ~20 policies),
computes their **real SPRS score**, and produces a C3PAO-ready bundle — every package reviewed by a **CMMC
Registered Practitioner (RP)** before the customer certifies. Generation is **deterministic (rules +
templates), NOT AI.**

> ⚠️ **This repo is NOT the product.** The actual application (auth, encryption, RBAC, the generation engine)
> lives in a **separate repo, `cmmc-compliance-platform`.** Security / bug / test review of the *product*
> belongs there. This repo is essentially **static HTML/CSS/JS + markdown sales docs.**

## Structure
- Marketing pages: `index.html`, `platform.html`, `solutions.html`, `company.html`, `security.html`,
  `privacy.html`, `contact.html`, `terms.html`, `signin.html`.
- `style.css` — design system; `script.js` — site JS.
- `assets/`, `public/` — images/static.
- Generators (open in a browser → "Save as PDF" / "Download PNG"): `mailer-packet.html` (flagship
  direct-mail briefing), `banner-*.html`, `logo-*.html`, `signature-logo.html`, `post-graphic.html`,
  `cmmc-readiness-checklist.html`, `readiness-checklist-print.html`.
- `gtm/` — sales playbook, outreach drafts, prospect list, pricing/positioning docs (markdown). **Contains
  real prospect contact data — handle as confidential.**
- `deploy/` — a **byte-identical mirror** of the site that is uploaded to hosting.
- `cmmc.db` — SQLite (control/question data for the generator).

## Hard conventions (do not break)
1. **`deploy/` must stay byte-identical to the root site files.** A change to a root page (e.g. `index.html`)
   must be applied identically to `deploy/<same file>`. The duplication is intentional — **not** a bug to "dedupe."
2. **Push only to the `v2` git remote** (`Veristasislandingpagev2`). **`origin` is an OLD repo — never push there.**
3. **Brand/design:** dark theme; Plus Jakarta Sans (headings) + Inter (body); gradient cyan→blue→violet
   (`#38bdf8 → #3b82f6 → #a78bfa`). The gradient-text CSS is scoped to `.hero h1 .gradient-text`; using
   `.gradient-text` elsewhere needs an inline gradient declaration.
4. **Pricing tiers (canonical names):** Audit Foundation → C3PAO-Ready Package → Always Current → RP Partner.

## ⚠️ Compliance claim guardrails (§12) — CRITICAL for any copy edit
This is a False-Claims-Act-sensitive business. **Do NOT "improve" marketing copy in ways that change these
claims. If you spot a claim issue, FLAG it — do not silently rewrite.** Binding rules:
- **Never claim VeriStasis certifies, assesses, or is a C3PAO.** A C3PAO certifies; we produce the package. We
  hold **no accreditation**.
- **Banned overclaim: "independent measurement / determination / authority."** The SPRS score is the
  *customer's self-assessment* computed from their inputs — never our independent determination.
- **Never imply we make a customer "compliant," "certified," "audit-ready," or that we raise their score.** The
  customer closes gaps; we document. (This is why the tiers are named Audit Foundation / C3PAO-Ready Package /
  Always Current / RP Partner — names like "Audit Ready," "Continuous Compliance," "Certification Partner"
  were rejected as overclaims.)
- **Deterministic, NOT AI.** Never describe generation as AI / LLM / generative. ("AI guesses; VeriStasis proves.")
- **We never touch or host customer systems or CUI;** evidence is client-side encrypted. Not a SIEM / monitoring tool.
- **Auth = TOTP MFA.** Do not claim FIDO2 / WebAuthn / "phishing-resistant" or SSO/SAML (not implemented).
- **No CMVP / FIPS 140-3 "validated" claim** ("FIPS 140-3-compliant; CMVP validation in progress"). **FedRAMP =
  "Moderate Equivalency, in progress,"** never "authorized."

## Good review focus for THIS repo
- HTML/CSS/JS quality, accessibility (a11y), responsive + dark-mode behavior, SEO/meta/JSON-LD correctness,
  broken links, and **drift between root pages and their `deploy/` mirror** (they should match exactly).
- The generator HTML files (print/PDF correctness).
- Internal consistency of the `gtm/` docs (pricing numbers, tier names, dates, DOJ figures).
- **Flag — do not auto-fix — anything touching the §12 claims above.**
