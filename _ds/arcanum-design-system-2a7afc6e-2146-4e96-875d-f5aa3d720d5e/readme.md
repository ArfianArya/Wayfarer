# Arcanum — the Wayfarer design system

**Arcanum** is the visual language behind **Wayfarer**, a personal UI/UX design portfolio built around *The Fool's Journey*. The site presents a designer's work — mobile apps, web experiences, design systems, and complex digital products — as a deck of tarot plates: numbered chapters, each drawn from the same ink-and-gold palette.

The brand's own summary line, from the source system: *"Every card drawn from the same deck."*

## Sources

| Source | Notes |
|---|---|
| `uploads/arcanum-design-system_1.html` | The complete, authored Arcanum design-system document (8 numbered plates: Foundations, Color, Type, Space, Components, Ornament, Motion, Usage). **This is the ground truth for every value in this project** — colors, type scale, spacing names, component states, motion durations, and do/don't rules were transcribed from it, not invented. |
| Brand brief (chat) | Wayfarer positioning: dark mystical fantasy, cinematic storybook atmosphere, vintage tarot influence, portfolio-focused rather than decorative. |

No Figma file, repository, or font binaries were provided. Anything not present in the source is called out under **Gaps & substitutions** below.

## Products / surfaces

1. **Wayfarer portfolio site** — the product the system exists for. Home, work index, case study, profile/resume. Recreated in `ui_kits/wayfarer_portfolio/`.
2. **Arcanum codex** — the design-system document itself (the uploaded file), a public-facing artifact of the portfolio. Recreated in `ui_kits/arcanum_codex/`.

---

## Content fundamentals

**Voice.** First person, singular, and unhurried. The designer speaks as *I*; the reader is addressed as *you* only in instructional copy (usage rules, docs). Sentences are declarative and often built on a metaphor drawn from the tarot/manuscript world, then landed with a plain, concrete clause.

> "I see the whole arc from the first spark to the final experience."
> "Motion should feel like candlelight — a small, warm response, never a performance."
> "The ground stays near-black so gold and parchment read as candlelight hitting a dark surface — not as color filling the page."

**Structure of a copy block.** Eyebrow (mono, tracked, uppercase) → display headline, usually with one italic gold phrase carrying the emotional weight → one lead paragraph → optionally one quieter secondary paragraph in `--ash-dim`. Never more than two paragraphs before a component or a divider.

**Casing.** Sentence case for headlines and body. UPPERCASE only for mono micro-labels (eyebrows, field labels, role captions, tags) and always tracked — never uppercase a headline. Roman numerals (0, I, II, III…) number every section, mirroring the Major Arcana.

**Punctuation.** The middot with hair spaces (`·`) separates clauses in labels — `Mobile App · Case Study`, `Design System · Personal Portfolio`. The em dash (`—`) sets off the turn in a sentence. Curly apostrophes. No exclamation marks anywhere. Lists in the usage plate use an em dash as the bullet glyph, not a disc.

**Naming.** Things are named, not numbered. Spacing steps are `hairline / inline / stack / base / comfortable / loose / section / plate / chapter`, not `space-1…9`. Components take world-flavoured names where the source gives them: *Codex Card*, *Sigil Input*, *Chapter Markers*, *Plate*. Each numbered section is paired with an arcana and a one-line rule of what it governs — `I · The Magician — Raw pigment, made to work`.

**Length.** Lead copy stays under 56ch; body under 62ch. Captions are three to six words. Headlines are one line at display size.

**Emoji.** Never. Not in UI, not in copy, not in docs. The ornament set (star, diamond, crescent) does the work emoji would do elsewhere.

**Tone to avoid.** No growth-marketing verbs ("unlock", "supercharge"), no exclamation, no self-deprecation, no mysticism played as gimmick — the tarot framing is a structural conceit, and copy should still read as a professional describing real work.

---

## Visual foundations

**Palette.** Six inks, one accent. The ground is `--ink #0B0906` — never pure black, always a trace of warmth. Panels sit one layer up on `--ink-raised #17120B`. `--gold #C09861` is the single accent and carries **one job per screen** (a call to action, an active nav state, *or* a divider — not all three). `--gold-bright #E3C08A` is a hover/focus color only, never a resting one. `--parchment #FFF6D6` is reserved for display type and the brightest UI text; `--ash #B9AE9C` is default body; `--ash-dim #7C7566` is captions. `--oxblood #8C3A3A` exists only for destructive actions and errors, always as a fill, never as text on ink. Contrast note from the source: gold on ink reads ≈ 7.5 : 1, so it is safe at body size.

**Type.** Three families. `Libertinus Serif Display` (regular 400, with a heavily used italic) for anything above 24px — display, H1–H3, the wordmark, arcana names. `Geist` for everything read quickly — lead 18/1.6, body 16/1.7, small 13, label 12/.10em. `Geist Mono` for anything *measured* — hex values, numerals, eyebrows (11px/.16em), role captions, spacing values. Rule: never set the display serif below 24px; its engraving detail blurs into the dark ground. Headings are always weight 400 — never bolded.

**Backgrounds.** Flat near-black, never gradient-filled. Depth comes from three fixed, inert layers: (1) two soft gold radial washes at the top corners (`--wash-hero`), fixed and `pointer-events:none`; (2) a 5%-opacity fractal-noise grain (`assets/grain.svg`) in `mix-blend-mode: overlay` across the whole viewport; (3) a hand-placed starfield of 1–1.5px radial dots, **hero section only**, at 55% opacity. No photography ships with the system. No repeating patterns beyond the grain. Card art panels use a single gold radial wash (`--wash-plate-art`) as the intended placeholder for unbuilt imagery.

**Imagery vibe.** When real imagery is added it should be warm-dark and low-key: candlelit, high-contrast, blacks that stay warm, visible grain. Cool blues, bright saturation, and flat product screenshots on white all fight the ground. Forest silhouettes, mist and moonlight are the intended subject register — always behind a scrim so type stays readable.

**Corners.** Sharp. `0–2px` only; the ornament carries all the softness. The single exception is the 6px chapter dot, which is a full circle.

**Borders.** Everything is a 1px hairline in gold-at-alpha: `--line` (16%) for default borders, grids and dividers; `--line-strong` (34%) for plates, fields and cards; solid `--gold` on hover/focus. Grid layouts are built as `gap:1px` over a `--line` background so the gutters read as engraved rules rather than empty space.

**Shadows.** Effectively none in the conventional sense — no black drop shadows anywhere. Elevation reads as *light bleeding off a gold edge*: `--glow-ring-gold` (0 0 0 4px gold@16%) on primary hover, `--glow-ring-quiet` (@10%) on secondary hover, `--focus-ring` (0 0 0 3px gold@14%) on field focus, `--shadow-dot` on the active chapter dot, and one warm bloom for lifted cards — `0 18px 34px -18px rgba(192,152,97,.45)`.

**Motion.** Four steps, all respecting `prefers-reduced-motion`. `fast` 150ms `cubic-bezier(.4,0,.2,1)` for hover/focus feedback; `base` 250ms for card lift and panel state; `slow` 450ms `cubic-bezier(.16,1,.3,1)` for section reveals on first scroll; `twinkle` 6s ease-in-out loop for the ambient starfield — **one instance per page**. No bounce, no spring, no parallax, no entrance animation on individual elements.

**Hover states.** Links: color `--ash` → `--gold-bright` plus a `--gold-dim` 1px underline appearing from transparent. Primary button: fill `--gold` → `--gold-bright` + gold ring + `translateY(-1px)`. Secondary button: transparent → gold@10% wash + quiet ring + `translateY(-1px)`. Cards: `translateY(-4px)`, border warms to solid `--gold`, warm bloom appears. Swatch/list rows: background `--ink` → `--ink-raised`, nothing else.

**Press / disabled.** There is no scale-down press state; the lift simply resolves. Disabled is `opacity: .35`, `cursor: not-allowed`, with transform and shadow forced off. Focus is always visible: solid gold border plus the 3px gold ring.

**Transparency & blur.** Used in exactly two places: the sticky nav (`rgba(11,9,6,.86)` + `backdrop-filter: blur(10px)`) and the alpha-gold borders/glows. No frosted cards, no blurred imagery, no glassmorphism panels.

**Layout.** 1180px max content width, 32px side gutters, single collapse breakpoint at 880px where every multi-column grid goes to one column. Vertical rhythm on the named 8px scale, with 96px `chapter` gaps between numbered sections and a 1px `--line` top border opening each one. The nav is the only fixed/sticky element. Plate headers use a 220px left rail (numeral + arcana) against a fluid right column.

**Cards.** Square corners, 1px `--line-strong` border, `linear-gradient(180deg, --ink-raised, --ink)` fill, 24px interior padding, centred content, art panel 96px tall with its own `--line` hairline. No rounded corners, no colored left border, no filled header bar.

**Ornament budget.** The corner frame and the sparkle are emphasis tools: one framed element per screen, ornaments never nested. The full star/diamond/star divider marks a section change; the plain fading rule handles everything else.

---

## Iconography

**There is no icon set.** The source system ships exactly one glyph — a four-point star drawn as an SVG `<symbol id="spark">` and referenced with `<use>` throughout the document. It is copied verbatim into `assets/`:

- `assets/sparkle.svg` — `fill="currentColor"`, for inline SVG use where a parent sets `color`.
- `assets/sparkle-gold.svg` / `assets/sparkle-parchment.svg` — pre-filled variants for `<img>` use, where `currentColor` cannot resolve.
- `assets/grain.svg` — the fractal-noise texture used as the page grain (transcribed from the source's inline data-URI).

Alongside it, two ornaments are drawn in **pure CSS**, not as icon files: the **diamond** (a 7px square with a 1px gold border, rotated 45°) and the **crescent** (a gold disc overlapped by a second disc filled with the page ground). Both ship as components (`Sparkle`, `Crescent`) rather than assets.

**Approach.** Arcanum has no functional icon vocabulary — no chevrons, no close, no search, no social glyphs. Navigation is typographic: Roman numerals in mono do the work of icons, and labels are spelled out. **Emoji and unicode dingbats are never used as icons**; the only non-alphabetic characters in copy are the middot `·` and the em dash `—`.

**If you need a functional icon** the source doesn't cover (a close button, an external-link arrow), use **Lucide** at `stroke-width: 1.25`, sized 14–20px, colored `--gold` or `--ash` — its hairline stroke is the closest available match to the 1px hairline language. This is a **flagged substitution**: it is not in the source. Prefer a typographic solution first.

**No logo exists.** The source has no logo file. The brand mark is set type — a `Sparkle` at 14–18px followed by the brand name in *italic* Libertinus Serif Display, `--parchment`, at 20px in the nav and 15px in the footer. Do not draw, trace, or generate a mark; render the wordmark in type wherever a logo would go.

---

## Gaps & substitutions

- **Font binaries.** None were provided. All three families (`Libertinus Serif Display`, `Geist`, `Geist Mono`) are the source's own choices and are all available on Google Fonts, so `tokens/fonts.css` loads them from the Google Fonts CDN and no `.woff2` files ship with this system. **If you have licensed/self-hosted copies, send them and I'll swap the CDN import for local `@font-face` rules.**
- **Icons.** No functional icon set exists in the source; Lucide is proposed as a fallback and flagged above.
- **Imagery.** No photography or illustration was provided. Card art panels and case-study covers intentionally fall back to the gold radial wash + sparkle placeholder rather than invented images.
- **Project content.** The source names two sample projects (*Aurelia*, *Wayfinder*). The UI kits extend that with *Meridian* and *Lanterna* as placeholder case studies so the grids read realistically — replace with real work.
- **Intentional additions.** The source's component plate defines Buttons, Navigation Link, Eyebrow Tag, Sigil Input, Chapter Markers and Codex Card, and its ornament plate defines the corner frame, star, crescent and divider. Built as components, that inventory is complete. Three wrappers were added because the source uses the pattern repeatedly but doesn't name it: **`NavBar`** (the sticky header the nav links live in), **`PlateHead`** (the numeral + arcana + title section header used on all eight plates), and **`Eyebrow`** (the tracked mono kicker used in the hero and throughout). No other primitives were invented — there is no Toast, Avatar, Tabs, Modal or Switch, because the source defines none.

---

## Index

### Root
| File | What it is |
|---|---|
| `styles.css` | Global entry point — `@import` list only. Link this one file. |
| `readme.md` | This document. |
| `SKILL.md` | Agent-skill front matter for use outside this project. |
| `thumbnail.html` | Homepage tile for the design system. |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `motion` · `effects` · `base` |
| `assets/` | `sparkle.svg` · `sparkle-gold.svg` · `sparkle-parchment.svg` · `grain.svg` |
| `guidelines/` | 20 foundation specimen cards (Colors, Type, Spacing, Brand) |

### Components
| Group | Components |
|---|---|
| `components/core/` | **Button**, **Tag**, **Input**, **Divider**, **Frame**, **Sparkle**, **Crescent** |
| `components/navigation/` | **NavBar**, **NavLink**, **ChapterDots** |
| `components/content/` | **Eyebrow**, **PlateHead**, **CodexCard** |

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard` HTML showing its states.

### UI kits
| Kit | Screens |
|---|---|
| `ui_kits/wayfarer_portfolio/` | Home · Work index · Case study · Profile & resume — click-through in `index.html` |
| `ui_kits/arcanum_codex/` | The design-system document itself — color, type, space and component plates |

### Starting points
`Button` · `NavBar` · `PlateHead` · `CodexCard` · the Wayfarer home screen · the Arcanum codex page.
