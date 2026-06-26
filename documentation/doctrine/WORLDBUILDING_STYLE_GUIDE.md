# WORLDBUILDING STYLE GUIDE
## Visual Language, Typography, and Design Doctrine for the Ronin Monk Headquarters
**Established:** 2026-06-26
**Status:** Active — governs all visual and copy decisions from Sprint 010 forward

---

## I. THE WORLDBUILDING PRINCIPLE

The Headquarters is not designed. It is **built**.

The difference:
- Designed things are arranged for aesthetic appeal
- Built worlds have internal logic, consistent physics, and a history that pre-dates the visitor's arrival

Every visual decision must be justifiable within the world's logic. If a color exists, it exists because it means something in the Sky Khan universe. If a font exists, it exists because it carries a specific cultural or temporal weight. If a symbol exists, it holds memory.

---

## II. THE VISUAL PHILOSOPHY

### Afrofuturism as Epistemology

Afrofuturism at Ronin Monk Media is not:
- Octavia Butler aesthetics reproduced (though she is an ancestor)
- Afro-centric color palettes applied to UI
- "Black sci-fi" as genre category

Afrofuturism at Ronin Monk Media is:
- The assertion that Black futures are not contingent on present-day permission
- The visual language of a civilization that survived, remembered, and built
- The convergence of ancestral pattern, sacred geometry, and technological imagination
- Gold and obsidian. Frequency rings and tribal seals. Ancient scripts and digital transmissions.

The visual language holds all of this simultaneously.

---

## III. COLOR SYSTEM

### Foundation Tokens (from codebase — do not change hex values)

| Token | Hex | Meaning in the World |
|-------|-----|---------------------|
| `--obsidian-0` | `#06060a` | The void before the signal — deep space, the ground state |
| `--brass-2` | `#d4af37` | The ancestral frequency — gold, sacred knowledge, recovered greatness |
| `--indigo-1` | `#2d2766` | The depth frequency — the place between sleep and knowing |
| `--amber-1` | `#f0a04b` | The living frequency — warmth, fire, humanity |

### Sprint 010 Frequency Tokens (derived from artwork)

| Token | Hex | Frequency | Atmosphere |
|-------|-----|-----------|-----------|
| `--frequency-amber` | `#f0901a` | WORD | The Archive — fire of language |
| `--frequency-azure` | `#0090d0` | SOUND | The Resonance Chamber — signal blue |
| `--frequency-teal` | `#19c5b8` | SYMBOL | The Forge — sacred craft |
| `--frequency-crimson` | `#8a0010` | STORY | The Living Mythology — blood memory |
| `--frequency-action` | `#2a9d56` | ACTION | The Fifth Frequency — growth, life, earth |

### Environmental Tokens

| Token | Hex | Use |
|-------|-----|-----|
| `--dome-dark` | `#042018` | Deep environmental backgrounds |
| `--slate-mid` | `#1a2535` | Secondary backgrounds, cards |
| `--crimson-deep` | `#8a0010` | Story/mythology elements |
| `--ember` | `#e07820` | Accent warmth, hover states |
| `--frequency-ash` | `#c0b0a0` | Muted text, secondary content |

### Usage Rules

- **Never pure white text on dark backgrounds** — use `--frequency-ash` or `rgba(255,255,255,0.85)` for body text
- **Brass is sacred** — use `--brass-2` only for doctrine statements, mantra lines, and the Ronin Monk Seal
- **Frequency colors belong to their pages** — amber on The Archive, azure on The Resonance Chamber, etc. Cross-frequency use must be intentional
- **Background base is always `--obsidian-0`** — the world is dark, light is earned

---

## IV. TYPOGRAPHY SYSTEM

### The Three Typefaces

| Font | Role | Personality |
|------|------|------------|
| **Cinzel** | Display — page titles, location names, section headers | Ancestral authority. Monumental. The name carved in stone. |
| **Cormorant Garamond** | Doctrine — mantra, philosophy statements, quotes | Sacred, intimate, the handwritten scroll. Italic for mantra. |
| **Inter** | Body — all readable content, UI, descriptions | The modern frequency. Clear signal. No romanticization of difficulty. |

### Hierarchy

```
Location Name (Cinzel, 48–72px, `--brass-2` or white, letter-spacing: 0.08em)
Section Anchor (Cinzel, 32–40px, frequency color)
Doctrine Statement (Cormorant Garamond italic, 24–32px, `--brass-2`)
Subheading (Inter semibold, 18–20px, white)
Body (Inter regular, 16px, `--frequency-ash`)
Caption / Secondary (Inter regular, 14px, opacity 0.6)
```

### Rules

- **Cormorant Garamond italic is reserved for doctrine** — mantra, philosophy statements, the Second Doctrine. It should never appear for utility copy.
- **All-caps Cinzel** is for location names only — never for body text or CTAs
- **Line height for doctrine statements:** 1.8 minimum — breathing room is not wasted space
- **Letter spacing on Cinzel:** 0.06–0.12em — monumental, not compressed

---

## V. SYMBOLS AND GLYPHS

The Headquarters uses symbols that carry history in the world of Sky Khan.

### The Ronin Monk Seal
- Primary identity mark
- Used on homepage threshold, footer (all pages), and The Order zone
- Never decorative — always meaningful
- Always in `--brass-2` against dark backgrounds
- Appears via `data-reveal="glyph"` animation (drawn in via SVG stroke)

### The Five Frequency Marks
Each frequency has a unique glyph that identifies its location:
- WORD — a stylized scroll or quill mark
- SOUND — a frequency waveform ring
- SYMBOL — a concentric seal or sigil
- STORY — an open eye or portal glyph
- ACTION — an upward-reaching form, hands or flame

These glyphs serve as:
- Navigation identifiers in the frequency nav
- Page identity marks in hero zones
- Hidden discovery elements within content

### Sacred Geometry
The Sky Khan universe uses concentric rings, grid-cross patterns, and radial symmetry derived from both ancestral African design and speculative future civilization architecture. These appear as:
- Background textures (low opacity, `--indigo-1` or darker)
- Hero image overlays
- Transition elements between sections

---

## VI. IMAGERY STANDARDS

### Source Hierarchy
1. **Original Ronin Monk artwork** — always first choice (from `OneDrive/Pictures/ronin monk pics`, `The Frequency Wars Trilogy`, `landscapes`)
2. **Video assets** — from `Videos/Ronin Monk Media LLC` and `D:/videos/2024 ronin videos`
3. **No stock imagery** — ever. This world does not use generic images.

### Treatment
- All images carry a color grading pass in CSS: `mix-blend-mode: multiply` or `luminosity` over frequency color overlay
- Hero images are full-bleed — no borders, no boxes, no contained thumbnails
- Character images (Shinobi Kush) are always transparent background, environment-integrated, never in a frame

### The Character
Shinobi Kush is the guide within The Headquarters. Not the mascot. Not the brand spokesperson. The guide who exists within the world. They appear:
- On The Resonance Chamber (SOUND page) — primary appearance
- As a transparent overlay on The Threshold (homepage) — subtle, environmental
- In discovery moments — visible only to those who look

---

## VII. LAYOUT PRINCIPLES

### The World Is Not a Grid

The Headquarters uses **structure with intention**, not rigid grid systems.

- Full-bleed sections feel like locations, not containers
- White space (here: obsidian space) is geography — the distance between things has meaning
- Nothing is centered for the sake of centering — things are placed where the world places them
- Asymmetry in hero zones communicates a world that predates the designer's arrival

### Depth
Every page has layers:
- Background layer — environmental (low opacity artwork, sacred geometry, color field)
- Midground layer — primary content
- Foreground layer — interactive elements, CTAs, the active signal

### Mobile
The world works on every device. On mobile:
- Location names are still monumental (40px minimum)
- Doctrine statements are still Cormorant italic
- The ambient audio bar becomes a floating button (bottom-right, not a strip)
- Discovery elements are touch-activated (long press or double-tap)

---

## VIII. THE FIVE TESTS BEFORE SHIPPING ANY ELEMENT

1. Does it look like it was made for this specific world, or could it appear on any website?
2. Would removing it make the world feel less complete?
3. Does it carry a memory or transmit a signal?
4. Does a visitor unfamiliar with the world understand what they are looking at without needing to be told?
5. Will it still feel meaningful in twenty years?

If an element fails test 1, it does not belong in the Headquarters.

---

*Worldbuilding Style Guide — Version 1.0*
*Established by Creator directive — 2026-06-26*
*Reference before designing any visual element.*
