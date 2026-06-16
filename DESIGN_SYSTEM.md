# VeriStasis Design System

Portable design kit extracted from the marketing site (`style.css`). Use this to bring the product UI (Next.js app) into the same visual language. Reference implementation for every component lives in this repo's `style.css` and page HTML.

## Brand

- **Name:** VeriStasis (camelCase S, never "VeriStasis")
- **Logo:** `assets/logo.svg` — gradient shield + keyhole + V, transparent background. Favicon variant: `public/favicon.svg` (dark-filled for visibility in tabs).
- **Voice:** decisive, technical, proof-driven ("proof, not promises"). No hedging.

## Tokens

### Colors

| Token | Value | Use |
|---|---|---|
| `--cyan` | `#38bdf8` | Primary accent, links, active states, icons |
| `--cyan-bright` | `#7dd3fc` | Accent hover, highlighted code |
| `--blue` | `#3b82f6` | Gradient mid-stop, primary button |
| `--violet` | `#a78bfa` | Gradient end-stop, secondary accents |
| `--emerald` | `#34d399` | Success, live/online indicators, checkmarks |
| `--bg` | `#050507` | App background |
| `--bg-soft` | `#08080c` | Slightly raised background |
| `--bg-card` | `#0c0c10` | Cards, panels, modals |
| `--bg-card-hover` | `#111118` | Card hover state |
| `--text-1` | `#f4f4f5` | Primary text |
| `--text-2` | `#a1a1aa` | Secondary text, descriptions |
| `--text-3` | `#52525b` | Muted text, labels, placeholders |
| `--border` | `rgba(255,255,255,0.06)` | Default borders, dividers |
| `--border-hover` | `rgba(255,255,255,0.12)` | Border hover / emphasis |
| Danger (errors, destructive) | `#f87171` on `rgba(239,68,68,0.1)` bg | Matches compare-bad styling |
| Success bg | `rgba(52,211,153,0.06)` border `rgba(52,211,153,0.16)` | Matches zk-foot / formOk |

**Brand gradient:** `linear-gradient(120deg, #38bdf8 0%, #3b82f6 45%, #a78bfa 100%)` — headlines (background-clip text), progress bars. Primary button uses the shorter `135deg, #38bdf8 → #3b82f6`.

### Shape, motion, type

| Token | Value |
|---|---|
| `--radius` | `16px` (panels) — inputs/buttons use `10–12px` |
| `--radius-lg` | `24px` (large cards, modals) |
| `--ease` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` (icons, playful hovers only) |
| Headings | `'Plus Jakarta Sans'`, weight 700–800, letter-spacing `-0.02em` to `-0.045em` |
| Body/UI | `'Inter'`, 13–15px, weight 400–600 |
| Mono (data, scores, badges, code) | `'JetBrains Mono'`, 10–12px, uppercase labels get `letter-spacing: 0.06–0.08em` |
| Selection | `::selection { background: rgba(56,189,248,0.28); color: #fff; }` |

### Tailwind mapping (drop into `tailwind.config` theme.extend)

```js
colors: {
  brand: { cyan: '#38bdf8', 'cyan-bright': '#7dd3fc', blue: '#3b82f6', violet: '#a78bfa', emerald: '#34d399' },
  surface: { DEFAULT: '#050507', soft: '#08080c', card: '#0c0c10', hover: '#111118' },
  ink: { 1: '#f4f4f5', 2: '#a1a1aa', 3: '#52525b' },
  line: { DEFAULT: 'rgba(255,255,255,0.06)', hover: 'rgba(255,255,255,0.12)' },
},
fontFamily: {
  display: ['"Plus Jakarta Sans"', 'sans-serif'],
  sans: ['Inter', 'sans-serif'],
  mono: ['"JetBrains Mono"', 'monospace'],
},
transitionTimingFunction: {
  brand: 'cubic-bezier(0.16, 1, 0.3, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
},
```

## Component recipes (reference: style.css)

- **Primary button** (`.btn-hero-primary` / `.btn-solid`): gradient bg, white text, `border-radius: 12px`, glow shadow `0 0 0 1px rgba(56,189,248,0.3), 0 4px 24px rgba(56,189,248,0.28)`, hover lifts `-2px` + brightens. App version: drop the shine-sweep `::before`, keep the glow.
- **Ghost/secondary button** (`.btn-hero-ghost`): transparent, `1px` border `--border-hover`, text `--text-2` → white on hover.
- **Inputs** (`.input`): bg `rgba(255,255,255,0.025)`, border `--border`, radius `10px`, focus = cyan border `rgba(56,189,248,0.5)` + ring `0 0 0 3px rgba(56,189,248,0.1)`. Labels: 12px, weight 600, `--text-2`.
- **Selects** (`select.input`): `appearance:none` + inline SVG chevron, `color-scheme: dark`, dark `option` bg `#0c0c10`, `:invalid` placeholder in `--text-3`.
- **Cards/panels** (`.cell`, `.form-card`): bg `--bg-card`, border `--border`, radius `16–24px`, hover bg `--bg-card-hover`. Optional cursor spotlight (radial gradient at `--mx/--my`) — nice on dashboards, skip on dense tables.
- **Icon chips** (`.cell-icon`): 42px square, radius 11px, bg `rgba(56,189,248,0.06)`, border `rgba(56,189,248,0.12)`, cyan lucide icon at 19px.
- **Stat/metric blocks** (`.metric`): big number in Plus Jakarta 800 with accent `<span>` in cyan; label 12px `--text-3`.
- **Status/live badge** (`.zk-live`, `.eyebrow-dot`): mono 10px uppercase + 6px pulsing emerald dot (`box-shadow` glow, 1.6–2.5s ease pulse).
- **Tags/pills** (`.tag`, `.framework-tag`): mono 10–12px, pill radius, border `--border`, hover cyan border + lift.
- **Code/terminal blocks** (`.codeblock`): pure black bg, traffic-light dots, mono 12px; syntax colors: keys `#7dd3fc`, values `#86efac`, booleans `#fbbf24`, comments `#3f3f46`.
- **Accordion** (`.faq-*`): max-height transition, plus icon rotates 45°, `aria-expanded` synced in JS.
- **Auth card** (`signin.html` `.auth-card`): the spec for the NextAuth sign-in screen — gradient border via mask-composite, 440px max width, SSO buttons, divider, footer trust line.
- **Skip link, focus rings:** keep these patterns in the app (`.skip-link`, input focus ring).

## App-adaptation rules (important)

**Carry over:** tokens, buttons, inputs, cards, badges, metric blocks, code blocks, auth screen, the topbar treatment (blur + border-on-scroll), empty states styled like `.zk-foot` callouts.

**Leave on the marketing site:** drifting aurora orbs, cursor-following glow, marquee, scroll-reveal animations, the noise/grain overlay, magnetic buttons. A compliance dashboard needs calm — use at most one static radial glow per screen, and respect `prefers-reduced-motion` everywhere.

**App-specific guidance:**
- Density: tables/lists at 13–14px Inter, 10–12px mono for IDs/scores/timestamps.
- Compliance score: render with the brand gradient (text or progress ring) — it's the hero metric of every dashboard screen.
- Control states: mapped/passing = emerald, open finding = `#f87171`, pending = `--text-3`.
- Sidebar nav (if any): bg `--bg-soft`, active item = `rgba(56,189,248,0.08)` bg + cyan text, matching `.nav-center a.active`.
- Toasts/banners: success uses the `.zk-foot` recipe; errors mirror it with the danger palette.
- Fonts: load via `next/font` (Inter, Plus Jakarta Sans, JetBrains Mono) rather than the Google Fonts `<link>`.
- Icons: lucide-react, 16–19px, default color `--cyan` in chips, `--text-3` inline.
