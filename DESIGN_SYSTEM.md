# Design System — Warm-Canvas Editorial (Claude-brand analysis)

> **Read this file first.** It is the single source of truth for how to build UI in this
> codebase. Token values live in `tailwind.config.js` (Tailwind utilities) and
> `globals.css` (CSS variables, for the rare non-Tailwind context). Never hardcode a hex
> value, font stack, spacing number, or radius in a component — always reference a token.

## 1. What this system is

A warm-cream editorial interface. Cream canvas + serif display headlines + coral CTA +
dark navy product-chrome cards. This is **not** a cool-blue SaaS look — the warmth and
the serif headline are the two things that make it recognizable. If a component you're
building drifts toward pure white backgrounds, sans-serif headlines, or blue accents,
stop — that's off-system.

Three surfaces only, alternating for pacing:
1. **Cream canvas** (`bg-canvas`) — default floor
2. **Light cream card** (`bg-surface-card`) — feature/content cards
3. **Dark navy** (`bg-surface-dark`) — code/product-mockup cards, CTA bands, footer

Never repeat the same surface in two consecutive page sections. Typical page rhythm:
`cream → cream-card → dark-mockup → cream → coral-callout → dark-footer`.

## 2. Tokens

### Color

| Token (Tailwind class suffix) | Hex | Use |
|---|---|---|
| `primary` | #cc785c | Primary CTA background, brand accent |
| `primary-active` | #a9583e | Pressed/active state of primary |
| `primary-disabled` | #e6dfd8 | Disabled primary button |
| `accent-teal` | #5db8a6 | Sparse — status dots, "active" indicators |
| `accent-amber` | #e8a55a | Sparse — category badges, inline highlights |
| `ink` | #141413 | Headlines, primary text |
| `body` | #3d3d3a | Default running text |
| `body-strong` | #252523 | Emphasized paragraphs, lead text |
| `muted` | #6c6a64 | Sub-headings, breadcrumbs |
| `muted-soft` | #8e8b82 | Captions, fine print |
| `canvas` | #faf9f5 | Page background (default) |
| `surface-soft` | #f5f0e8 | Section dividers, soft bands |
| `surface-card` | #efe9de | Feature/content cards |
| `surface-cream-strong` | #e8e0d2 | Selected tabs, emphasized bands |
| `surface-dark` | #181715 | Product mockups, footer, CTA bands |
| `surface-dark-elevated` | #252320 | Elevated panels inside dark bands |
| `surface-dark-soft` | #1f1e1b | Code block bg inside dark cards |
| `hairline` | #e6dfd8 | 1px borders on cream surfaces |
| `hairline-soft` | #ebe6df | Barely-visible in-band dividers |
| `on-primary` | #ffffff | Text on coral |
| `on-dark` | #faf9f5 | Text on dark surfaces |
| `on-dark-soft` | #a09d96 | Secondary text on dark surfaces |
| `success` / `warning` / `error` | #5db872 / #d4a017 / #c64545 | Status only |

**Rule: coral is scarce.** One primary CTA per view gets `bg-primary`. Full-bleed coral
callout cards are the only place it's generous. Never use coral for icons, borders, or
decorative accents scattered around a page.

### Typography

Two-family system, no exceptions:
- **Display** (`font-display`) — serif, weight 400 only, negative letter-spacing. h1/h2/h3
  and any hero/callout headline. **Never bold this face.**
- **Sans** (`font-sans`) — body copy, nav, buttons, labels, captions.
- **Mono** (`font-mono`) — code blocks and terminal text only.

| Tailwind class | Size | Weight | Use |
|---|---|---|---|
| `text-display-xl font-display` | 64px | 400 | Page h1 |
| `text-display-lg font-display` | 48px | 400 | Section heads |
| `text-display-md font-display` | 36px | 400 | Sub-section heads, model names |
| `text-display-sm font-display` | 28px | 400 | Pricing tier names, callout headlines |
| `text-title-lg font-sans` | 22px | 500 | Pricing plan labels |
| `text-title-md font-sans` | 18px | 500 | Feature card titles |
| `text-title-sm font-sans` | 16px | 500 | Connector tile titles, list labels |
| `text-body-md font-sans` | 16px | 400 | Default running text |
| `text-body-sm font-sans` | 14px | 400 | Footer body, fine print |
| `text-caption font-sans` | 13px | 500 | Badge labels |
| `text-caption-uppercase font-sans uppercase` | 12px | 500 | Category tags, "NEW" badges |
| `text-code font-mono` | 14px | 400 | Code blocks |
| `text-button font-sans` | 14px | 500 | Button labels |
| `text-nav-link font-sans` | 14px | 500 | Nav menu items |

Font size classes already bake in the correct `lineHeight`/`letterSpacing`/`fontWeight`
via `tailwind.config.js` — you don't need to set those separately.

### Spacing (4px base unit)

`xxs`=4 · `xs`=8 · `sm`=12 · `md`=16 · `lg`=24 · `xl`=32 · `xxl`=48 · `section`=96

Use as `p-xl`, `gap-lg`, `py-section`, etc. Section-to-section vertical rhythm is always
`py-section` (96px). Card internal padding is `p-xl` (32px) except code-window cards and
connector tiles, which use `p-lg` (24px).

### Radius

`xs`=4 (badge accents) · `sm`=6 (small inline buttons) · `md`=8 (buttons, inputs, tabs) ·
`lg`=12 (content cards) · `xl`=16 (hero illustration container) · `pill`=9999 (badges,
avatars)

### Elevation

Color-block first, shadow rare. Default: no shadow. The only shadow token is
`shadow-hover` (`0 1px 3px rgba(20,20,19,0.08)`), used sparingly on hover-elevated
states. Depth comes from surface color contrast (cream vs. dark), not drop shadows.

## 3. Components

Each entry gives the Tailwind class recipe. Build these as reusable components in
`components/` (reference implementations included alongside this doc) rather than
re-typing the class strings inline.

| Component | Recipe |
|---|---|
| `button-primary` | `bg-primary text-on-primary text-button rounded-md px-5 py-3 h-10 hover:bg-primary-active` |
| `button-primary-disabled` | `bg-primary-disabled text-muted rounded-md` (no hover) |
| `button-secondary` | `bg-canvas text-ink text-button rounded-md px-5 py-3 h-10 border border-hairline` |
| `button-secondary-on-dark` | `bg-surface-dark-elevated text-on-dark text-button rounded-md px-5 py-3` |
| `button-text-link` | `bg-transparent text-ink text-button` (no border/bg) |
| `button-icon-circular` | `bg-canvas text-ink rounded-pill border border-hairline w-9 h-9` |
| `text-link` (inline) | `text-primary underline-offset-2 active:underline` |
| `top-nav` | `bg-canvas h-16 text-nav-link` |
| `hero-band` | `bg-canvas py-section grid grid-cols-12 gap-lg` (6/6 split on desktop) |
| `hero-illustration-card` | `bg-canvas rounded-xl` (or `bg-surface-dark` for code-mockup hero) |
| `feature-card` | `bg-surface-card rounded-lg p-xl` |
| `product-mockup-card-dark` | `bg-surface-dark text-on-dark rounded-lg p-xl` |
| `code-window-card` | `bg-surface-dark rounded-lg p-lg` with inner block `bg-surface-dark-soft` + `text-code font-mono` |
| `model-comparison-card` | `bg-canvas border border-hairline rounded-lg p-xl` |
| `pricing-tier-card` | `bg-canvas border border-hairline rounded-lg p-xl` |
| `pricing-tier-card-featured` | `bg-surface-dark text-on-dark rounded-lg p-xl` (dark = the featured signal) |
| `callout-card-coral` | `bg-primary text-on-primary rounded-lg p-xxl` |
| `connector-tile` | `bg-canvas border border-hairline rounded-lg p-5` (20px) |
| `text-input` | `bg-canvas text-ink text-body-md rounded-md px-3.5 py-2.5 h-10 border border-hairline` |
| `text-input-focused` | add `focus:border-primary focus:ring-[3px] focus:ring-primary/15` |
| `cookie-consent-card` | `bg-surface-dark text-on-dark rounded-lg p-lg` (fixed, bottom-right) |
| `badge-pill` | `bg-surface-card text-ink text-caption rounded-pill px-3 py-1` |
| `badge-coral` | `bg-primary text-on-primary text-caption-uppercase rounded-pill px-3 py-1` |
| `category-tab` | `text-muted text-nav-link px-3.5 py-2 rounded-md` |
| `category-tab-active` | `bg-surface-card text-ink text-nav-link px-3.5 py-2 rounded-md` |
| `cta-band-coral` | `bg-primary text-on-primary rounded-lg p-16` with `text-display-sm font-display` headline |
| `cta-band-dark` | `bg-surface-dark text-on-dark rounded-lg p-16` |
| `footer` | `bg-surface-dark text-on-dark-soft py-16` — 4-col link grid on desktop; never inverts |

Reference implementations for the most-reused components (`Button`, `Badge`, `Card`
variants, `Input`, `TopNav`) are in `components/`.

## 4. Rules for the coding agent

### Always
- Import colors/fonts/spacing/radius **only** from Tailwind theme keys defined in
  `tailwind.config.js`. Never write a raw hex or px value in a component.
  `bg-[#cc785c]` is wrong; `bg-primary` is correct.
- Use `font-display` + weight 400 for every h1/h2/h3 and hero/callout headline.
- Use `font-sans` for everything else (body, nav, buttons, labels).
- Keep `py-section` (96px) rhythm between major page bands.
- Alternate surfaces band-to-band — never two cream-card bands in a row, never two dark
  bands in a row.
- Give every interactive element a visible focus state (already handled globally by
  `:focus-visible` in `globals.css` — don't override it away).
- Build responsively mobile-first using the `tablet:` / `desktop:` / `wide:` breakpoints
  defined in the config (768 / 1024 / 1440px).

### Never
- Never bold the display/serif face. It stays at weight 400 always.
- Never use blue or cyan as an accent color — coral is the only brand accent.
- Never scatter `bg-primary` across small decorative elements — reserve it for the single
  primary CTA per view and full-bleed coral callout cards.
- Never invert the dark surfaces to light (footer, `pricing-tier-card-featured`,
  `product-mockup-card-dark` stay dark always).
- Never add a fourth surface color (no purple, no green section backgrounds). The system
  is cream / coral / dark-navy, full stop.
- Never introduce a hover state beyond what's specified — only default and active/pressed
  states exist in this system. If a component needs a new interaction state, flag it as
  a gap rather than inventing one.
- Never use `rounded-full`/arbitrary radii outside the `xs`–`pill` scale.

## 5. Responsive behavior

| Breakpoint | Range | Key changes |
|---|---|---|
| Mobile (default) | < 768px | Hamburger nav; h1 64→32px; hero stacks (content, then illustration); feature grid 1-up; connectors 2-up; pricing 1-up; footer 4-col → 1-col |
| `tablet:` | 768–1024px | Nav stays horizontal, tightens; feature cards 2-up; connectors 3-up; pricing 2-up |
| `desktop:` | 1024–1440px | Full nav; feature cards 3-up; connectors 4/6-up; pricing 3-up |
| `wide:` | > 1440px | Same as desktop; content capped at `max-w-content` (1200px) with more outer margin |

- Minimum touch target 40×40px for primary buttons and inputs; icon-circular buttons are
  an accepted 36×36 exception.
- Code blocks scroll horizontally on mobile rather than wrapping — never wrap code lines.
- Feature/connector/pricing grids **reduce column count**, they don't shrink card size.

## 6. Known gaps (flag rather than guess)

- **Fonts**: Copernicus and StyreneB are Anthropic-licensed and not available as web
  fonts. This system substitutes Tiempos Headline/Cormorant Garamond (display) and Inter
  (sans) — already wired into `tailwind.config.js`. If exact brand fonts become
  available, swap them into the `fontFamily` config only; no component changes needed.
- **Brand mark**: the radial-spike logo glyph is a brand asset (SVG), not a token in this
  system. Source it separately; don't approximate it with CSS shapes.
- **Motion**: no animation/transition timings are specified beyond
  `prefers-reduced-motion` handling. If a spec calls for motion (typewriter code reveal,
  message animations), treat timing/easing as undefined and ask, don't invent brand-critical motion.
- **Form validation states**: only `text-input-focused` is defined. Error/success input
  states aren't specified — use the `error`/`success` semantic colors as a starting point
  but confirm before shipping a validation flow.
- **Product-surface components** (chat bubbles, file upload chips, conversation
  sidebar): out of scope. This system covers marketing-surface components only.

## 7. File map

```
tailwind.config.js   → all design tokens (source of truth for Tailwind classes)
globals.css          → CSS variable mirror + base resets + focus/motion accessibility
DESIGN_SYSTEM.md      → this file — rules, token tables, component recipes
components/
  Button.jsx          → primary/secondary/text-link/icon-circular variants
  Badge.jsx           → pill/coral badge variants
  Card.jsx            → feature/product-mockup-dark/pricing/callout-coral variants
  Input.jsx           → text-input with focus state
  TopNav.jsx           → top navigation bar
```
