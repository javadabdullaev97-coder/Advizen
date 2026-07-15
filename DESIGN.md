# Design System: Advizen Consulting

## 1. Visual Theme & Atmosphere

A restrained, high-agency consulting interface rooted in quiet luxury. The atmosphere is like a well-lit private equity boardroom after hours — surfaces are near-black, almost tactile, with one deliberate warm-crimson accent cutting through the dark like a blade. No decoration for decoration's sake.

Density: **4** — generous breathing room, editorial whitespace. Sections feel like pages in a premium annual report.
Variance: **7** — asymmetric layouts, offset typographic anchors, deliberate spatial tension between elements. Never centered hero.
Motion: **7** — fluid spring physics for UI transitions, staggered orchestration on scroll reveals, perpetual micro-loops on interactive beams and map markers. Never decorative-only motion.

The site serves international investors, executives, and legal/finance professionals navigating Uzbekistan and Central Asia. Every design decision should communicate precision, confidentiality, and measured authority. Crimson is the only warmth allowed.

---

## 2. Color Palette & Roles

- **Void Canvas** (`#0D0D0D`) — Primary background. The page substrate. Never pure black.
- **Deep Void** (`#080808`) — Alternate section background for depth separation.
- **Abyss** (`#050505`) — Hero overlay tint. Maximum depth.
- **Charcoal Surface** (`#1A1A1A`) — Card and panel fills. Elevated above canvas.
- **Surface Light** (`#222222`) — Hovered card state, subtle elevation.
- **Hairline Border** (`#2A2A2A`) — Structural 1px dividers between sections and cells.
- **Border Light** (`#333333`) — Hovered border state. Slightly brighter.
- **Warm Parchment** (`#D9D4CE`) — Primary foreground text. Deliberately warm — not cold white. This warmth is the brand's human signature against cold dark backgrounds.
- **Steel Muted** (`#999999`) — Secondary text, labels, metadata, eyebrows.
- **Charcoal Muted** (`#666666`) — Tertiary text, footer copyright, placeholder states.
- **Oxblood Crimson** (`#940e27`) — The single accent. CTAs, active indicators, accent lines, map pulses, beam animations. All crimson usage traces back to this one root.
- **Crimson Bright** (`#b01535`) — Hover state for crimson elements. 20% brighter, never neon.
- **Crimson Dark** (`#6e0a1c`) — Pressed/active state for crimson. Deeper, more confident.
- **Crimson RGB** (`148, 14, 39`) — Used in `rgba()` for ambient glows: `rgba(148,14,39,0.12)` to `rgba(148,14,39,0.04)`.

**Banned color patterns:**
- Pure black `#000000` — use Void Canvas instead
- Any purple, violet, or indigo tones
- Neon gradients or oversaturated glow effects
- Blue accent anything — this is a crimson-only brand
- Warm/cool gray fluctuation — Zinc neutrals only, no mixing

---

## 3. Typography Rules

- **Display / Wordmark:** `Raleway` — Weight 400–500, letter-spacing `0.12em`, used exclusively for the ADVIZEN logotype at large scale. Evokes luxury editorial rather than corporate.
- **Section Headlines:** `Outfit` or `Cabinet Grotesk` — Weight 600, tracking `-0.01em`. Confident without being aggressive. Replace Inter for all heading contexts.
- **Body / UI:** `Geist` — Weight 300–500, relaxed leading `1.65`, max `65ch` per line. Clean, technical, neutral. Replaces Inter for all paragraph and navigation contexts.
- **Mono / Numbers / Metadata:** `Geist Mono` — For transaction amounts (`$10B+`), counters, tabular data, track record stats. Every number in dense data contexts must use monospace.
- **Eyebrow Labels:** `Geist` or `Outfit` — `text-[11px]`, `tracking-[0.28em]`, `uppercase`, `text-muted`. The pattern `tracking-luxury` (0.22–0.38em spaced caps) is the brand's typographic fingerprint. Keep this.
- **Scale Hierarchy:** Display `clamp(3.5rem, 9vw, 8rem)` → Section H2 `clamp(2rem, 4vw, 3.25rem)` → Subsection H3 `1.35rem` → Body `0.9375rem` (15px) → Caption `0.75rem` (12px) → Eyebrow `0.6875rem` (11px).

**Banned:**
- `Inter` in any headline or display context
- Generic serif fonts (`Georgia`, `Times New Roman`, `Garamond`)
- Font sizes below `11px`
- Weight 700+ in body text — authority comes from spacing and color, not bold

---

## 4. Hero Section

Full-viewport hero with a background image of Tashkent/Uzbekistan aerial or architectural photography. Dark overlay at `bg-black/55` to ensure text legibility. The image slowly scales from `1.06x → 1.0x` on entrance (Ken Burns entrance, not a loop).

**Layout:** Left-aligned, asymmetric. Content anchored left in a `max-w-7xl` container. Right side: image bleeds into darkness. Never centered.

**Stacking order (top → bottom):**
1. Eyebrow label — `"CENTRAL ASIA · ADVISORY"` in `tracking-[0.38em] uppercase text-white/60 text-[11px]`
2. Large wordmark headline — `"ADVIZEN"` in Raleway at `clamp(5rem, 12vw, 10rem)`, color `#D6CFC8`, letter-spacing `0.14em`. One word, enormous, confident.
3. Subtitle — `"Integrated tax, legal, finance, and operational\nconsulting for businesses entering Uzbekistan."` — Geist 300, `text-[15px] text-white/70 max-w-[380px] leading-relaxed`.
4. Single CTA — Primary `MagneticButton` to `/contact`. No secondary "Learn more" link.
5. Location anchor — Bottom-left: `"TASHKENT, UZBEKISTAN"` in `tracking-[0.3em] uppercase text-white/35 text-[11px]` flanked by 40px hairline rules.

**Banned in Hero:**
- "Scroll to explore" text
- Bouncing chevron arrows
- Centered layout
- More than one CTA
- Stock photo clichés (handshakes, suits, globes)

---

## 5. Component Stylings

### Buttons (MagneticButton)
Two variants only. Both `rounded-full`, no sharp corners.

**Primary (crimson fill):**
- Background: `rgba(148,14,39,0.85)` — not fully opaque, slightly translucent
- Border: `1px solid rgba(176,21,53,0.3)`
- Text: `#D9D4CE`, `tracking-wider uppercase text-[13px]`
- Hover: scale `1.05x`, background brightens to `#940e27`
- Active: scale `0.97x`, background darkens to `#6e0a1c`
- Mouse-tracked radial glow on hover: `radial-gradient(circle, rgba(255,255,255,0.22) center, transparent 70%)`
- Padding: `px-8 py-3.5`
- No outer box-shadow glow. No neon ring.

**Outline (ghost):**
- Background: `transparent`
- Border: `1px solid rgba(255,255,255,0.14)`
- Text: `#D9D4CE`
- Hover: border brightens to `rgba(255,255,255,0.28)`, same radial glow but cooler
- Same scale behavior as primary

### Navigation (Navbar)
- Fixed top, `h-20`, full-width
- Logo + wordmark left, nav links absolutely centered, language switcher + CTA right
- Transparent on hero, transitions to `bg-[#0A0A0A]/95 backdrop-blur-xl` with `border-b border-white/[0.08]` after 40px scroll
- Nav links: Geist `text-[13px] font-medium tracking-[0.04em]`, `text-muted hover:text-foreground`
- Active link: thin 1px underline in crimson (`bg-primary h-px`)
- Language switcher: 3 flag + code pills, `rounded-full border border-white/[0.08]`, active pill has `border-white/30 bg-white/[0.06]`

### Cards (Service/Insight Cards)
- Background: `#1A1A1A` or `rgba(255,255,255,0.02)`
- Border: `1px solid rgba(255,255,255,0.07)`
- Corner radius: `0` to `4px` — this is a consulting firm, not a consumer app. Restrained rounding.
- Shadow: no drop shadow. Elevation via border contrast only.
- Hover: border brightens to `rgba(255,255,255,0.14)`, image inside scales `1.035x`
- Use cards ONLY for insight articles and service detail panels. Not for stats or feature lists.

### Stats / Track Record
- Never in equal 3-column card layout
- Use: asymmetric number + label stacks, large monospace figure (`Geist Mono, text-4xl`) above small label (`Geist, text-[11px] tracking-[0.18em] uppercase text-muted`)
- Example: `$10B+` large → `in total deals advised` small, separated by 8px
- Arrange in horizontal row with `border-l border-white/[0.07]` dividers between items

### Service List Panels (Advisory / Operations sections)
- Left: vertical list of service names, `border-r border-white/[0.07]`
- Each row: icon square + service name + arrow. Active row: left 2px accent bar in service color, subtle gradient background
- Right: animated detail panel. Large service name header, description, "Who this is for" callout with left border in service color, related reading link
- Service accent colors per discipline — one unique color per service, never crimson (reserved for brand)
- Row click → navigate to service page (desktop behavior)

### FAQ Accordion
- Container: `max-w-3xl mx-auto`
- Rows: `border-b border-white/[0.06]`, generous `py-5` padding
- Question: Geist `text-[15px] font-medium text-white/80`
- Answer: Geist `text-[14px] text-white/55 leading-relaxed`
- Expand indicator: `+` / `−` or chevron, right-aligned, crimson when open
- Expand animation: CSS `grid-template-rows: 0fr → 1fr` transition, not height JS measurement

### Map (UzbekistanMap)
- Interactive SVG map of Uzbekistan
- Regions: default fill `rgba(148,14,39,0.15)` stroke `rgba(148,14,39,0.4)`
- Active/hovered region: fill `rgba(110,10,28,0.7)` stroke `rgba(148,14,39,1)` with `0 0 12px rgba(148,14,39,0.5)` glow
- Pulse ring animation on selected region marker: scale `1→2x` opacity `0.5→0` on 1.5s loop
- Info panel right of map: region name, population, GDP, SEZ, key industries

### Footer
- Background: `#0A0A0A`, `border-t border-white/[0.06]`
- Brand column left (`380px fixed`): logo, one-line tagline, phone, email, location
- 4 link columns right: Expertise / Operations / Firm / Legal
- Link text: `text-[13px] text-muted hover:text-foreground transition-colors`
- Column headers: `text-[11px] tracking-[0.2em] uppercase text-white/30 mb-5`
- Social icons row: `border-t border-white/[0.06] py-8`
- Copyright: `text-[11px] text-muted-dark`

---

## 6. Layout Principles

- Container: `max-w-7xl mx-auto px-6 lg:px-8` everywhere. Never full-bleed text.
- Section vertical rhythm: `py-20 md:py-28 lg:py-32`. Generous. Breathe.
- Grid: CSS Grid over Flexbox math. `grid-cols-[5fr_7fr]` for asymmetric split panels (service detail). Never `calc()` percentage hacks.
- Hero layout: Left-aligned split. Content occupies left 55%, image darkness bleeds right.
- Insight section: asymmetric `grid-cols-[1.4fr_1fr]` — featured article large left, 2 smaller right.
- Stats row: `flex items-start gap-12 md:gap-20` with vertical dividers. Never in cards.
- No 3-column equal grid layouts anywhere. Ever.
- Ambient glows: `position: absolute`, `border-radius: 50%`, `pointer-events: none`, `filter: blur(120-150px)`. Disabled on mobile via media query — too expensive to paint.
- Full-height sections: `min-h-[100dvh]` — never `h-screen` (iOS Safari bug).

---

## 7. Responsive Rules

- **< 768px (Mobile):** All multi-column layouts collapse to single column. No exceptions.
- **Service panels:** Desktop tab UI → Mobile accordion (expand/collapse per service).
- **Typography:** Headlines via `clamp()`. Body minimum `15px`. Never below `14px`.
- **Touch targets:** All interactive elements minimum `44px` tap area.
- **Map:** Simplified on mobile — region tap shows modal panel instead of side-by-side.
- **Ambient glows disabled on mobile** — `filter: blur(150px)` on large divs destroys mobile paint performance.
- **Film grain overlay (`body::after`) disabled on mobile** — `position: fixed` repaints every scroll frame.
- **Horizontal scroll forbidden** — overflow: hidden on body if needed, but never scroll trap.

---

## 8. Motion & Interaction

- **Default easing:** `[0.16, 1, 0.3, 1]` — exponential ease-out. Premium, weighty, confident. Never linear or `ease-in-out`.
- **Spring physics:** `stiffness: 120, damping: 22` for layout transitions. Slightly bouncy but controlled.
- **Scroll reveals:** `AnimatedSection` wrapper — `opacity: 0→1` + `y: 24→0` on viewport entry with `margin: -60px`. Each section staggers children with `0.055s` cascade delay.
- **Text reveals:** Word-by-word stagger for hero H1 and section H2s. Each word: `opacity: 0→1, y: 12→0` at `0.04s` intervals.
- **Perpetual micro-interactions:**
  - Beam animation (Disciplines Integration): pulsing gradient line on `1.8s` loop
  - Map pulse rings: scale + opacity loop on `1.5s` interval
  - Navbar: smooth `backdrop-filter` transition on scroll
- **Staggered list reveals:** Service rows enter left (`x: -12→0`) with `i * 0.055s` delay. Never instant mount.
- **Tab panel transitions:** `opacity + y: ±14→0` cross-fade between active service panels. Duration `0.3s`.
- **Performance rule:** Animate ONLY `transform` and `opacity`. Never `width`, `height`, `top`, `left`. Never repaint.
- **Mobile motion:** Reduce all delays to max `50ms`. Skip `y` translations (use only opacity). Never animate on scroll on mobile — too expensive.

---

## 9. Anti-Patterns (Banned)

### Visual
- No emojis anywhere in the UI
- No `Inter` font in headlines or display contexts
- No generic serif fonts (`Georgia`, `Times New Roman`, `Garamond`, `Palatino`)
- No pure black `#000000` — use `#0D0D0D` minimum
- No neon outer-glow shadows on buttons or cards
- No purple, violet, or blue accent colors — crimson only
- No oversaturated gradients on text
- No custom mouse cursors
- No overlapping elements — clean spatial separation always
- No 3-column equal card grid layouts for any feature section
- No gradient text on large headings (subtle underline accent: ok. Full gradient fill on H1: banned)

### Copy & Content
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Empower", "Transform"
- No generic placeholder names: "John Doe", "Acme Corp", "Nexus Solutions"
- No fake round numbers: `99.9%`, `50%` — use real figures (`$10B+`, `80+`, `30+`)
- No filler text: "Scroll to explore", "Swipe down", scroll arrows, bouncing chevrons
- No broken image links — use real images from the project assets or `picsum.photos`

### Layout
- No centered Hero (variance > 4)
- No horizontal overflow on any viewport
- No `h-screen` — use `min-h-[100dvh]`
- No flexbox `calc()` percentage math — use CSS Grid
- No generic "three cards in a row" feature sections

### Motion
- No linear easing
- No CSS animations on `width`, `height`, `top`, `left`
- No `position: fixed` elements with expensive paint (disable grain/glow on mobile)
- No animation delays over `400ms` for user-triggered interactions
