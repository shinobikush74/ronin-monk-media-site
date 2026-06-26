# IMMERSIVE EXPERIENCE GUIDE
## Cinematic Design Standards for the Ronin Monk Headquarters
**Established:** 2026-06-26
**Status:** Active — applies to all Sprint 010 implementation and forward

---

## I. THE CORE PRINCIPLE

> The Headquarters is no longer a website.
> It is a location.
> Every page is a destination.
> Every transition is travel.
> Every animation represents movement between places.
> Every click should feel intentional.
> Nothing should feel generic.

The designer's model is not a web designer.
The designer's model is a filmmaker.

---

## II. THE CINEMATIC MODEL

Think in scenes, not sections.

Every homepage scroll is a scene sequence:

| Scene | Atmosphere | Purpose |
|-------|-----------|---------|
| The Threshold | Dark, silent, the seal appears | Establish presence |
| The Doctrine | Slow word reveal, brass on black | Establish philosophy |
| The Four Frequencies | Warm, ambient, each card breathes | Invite exploration |
| The Character Drop | Single figure, environment expands | Establish protagonist |
| Latest Transmission | Three windows into the world | Show breadth |
| The Order | Eyes of Trust, quiet invitation | Offer belonging |
| Footer | The mantra, then silence | Close with doctrine |

Between every scene: **intentional pause**. Not loading time. Designed breathing room.

---

## III. THE FIVE PRINCIPLES OF CINEMATIC FLOW

### 1. Silence First
Before content, there is space. Every page should open with a moment where nothing demands attention — just environment. The video hero runs. The seal appears. Nothing asks for a click.

### 2. Reveal, Never Dump
Content reveals as the visitor is ready. IntersectionObserver triggers — but the trigger is not just functional, it is narrative. Words appear one line at a time. Images rise from darkness. Audio fades in. The experience is progressive disclosure of a world, not a download of information.

### 3. Movement Has Meaning
No animation is decorative. Every animation communicates something about the world:
- **Fade in from below** — something rising, remembered, surfacing
- **Horizontal drift** — frequency, signal, transmission
- **Scale pulse** — breath, heartbeat, life
- **Opacity fade** — the veil between what is seen and what is known
- **Slow parallax** — depth, layers, the world has history behind it

### 4. Sound is Environmental
Audio is never background music playing behind content. Audio is the environment itself. The Resonance Chamber has a frequency. The Archive has the sound of pages. The Forge has ambient weight. Sound tells the visitor where they are.

### 5. Light and Shadow
The Headquarters palette is dark — obsidian, deep indigo, the darkness of space before a star appears. Light is earned. Brass, amber, azure, teal — these colors appear against darkness and therefore mean something when they appear. They are not decorative. They are signal.

---

## IV. PAGE ATMOSPHERE SPECIFICATIONS

### The Threshold (Homepage)
- **Entry state:** Full-screen muted video loop. Seal fades in over 2s. Headline arrives letter by letter or line by line.
- **Feeling:** You have arrived somewhere. You are not yet sure what it is, but it has weight.
- **Sound:** Ambient hum, very low, optional. Never intrusive.

### The Archive (Blog / Word)
- **Entry state:** Dark. A single light source — like a library at night. Content items rise as visited.
- **Feeling:** You are in a place where things have been kept for a long time. Nothing here is disposable.
- **Sound:** Low ambient drone. Paper texture. Silence between entries.

### The Resonance Chamber (Music)
- **Entry state:** Waveform visualization or frequency ring. Audio bar appears. Signal language.
- **Feeling:** The signal has always been playing. You are only now in range.
- **Sound:** The page has audio. This is the one page where sound is the content.

### The Forge (Services)
- **Entry state:** Heavier. More grounded. Metallic undertone in color. The work happens here.
- **Feeling:** You are in a workshop where real things are made. Not a pitch deck.
- **Sound:** Silence. The Forge is where you work. Sound would distract.

### The Living Mythology (Lore / Story)
- **Entry state:** The most expansive. Stars, deep space, the Sky Khan universe visible.
- **Feeling:** The universe is larger than you thought. You are reading something that was always true.
- **Sound:** The most ambient. Space-adjacent. Frequency hum at very low volume.

### The Council Chamber (Contact)
- **Entry state:** Intimate. Like entering a private room. The noise of the world has stopped.
- **Feeling:** This is where real dialogue happens. There is weight to this communication.
- **Sound:** Silence.

### The Marketplace of Relics (Shop)
- **Entry state:** Like entering a museum after hours. Objects lit individually. Each has history.
- **Feeling:** These are not products on a shelf. Each one was made for someone who would find it.
- **Sound:** Low ambient. The feeling of a sacred space.

### The Fifth Frequency (Action / Community)
- **Entry state:** Warmer. More human. This is where doctrine meets reality.
- **Feeling:** You are not alone in this. There are others. There is something you can do.
- **Sound:** Optional ambient that suggests collective presence — not crowd noise, but the feeling of others nearby.

---

## V. TRANSITION STANDARDS

When a visitor moves from one location to another:

- **Cross-fade minimum 300ms** — no hard cuts
- **Page load is not instantaneous** — there is a brief darkness between locations (150–200ms fade-out before new page fades in)
- **The nav itself communicates travel** — active frequency glows, inactive frequencies exist in the peripheral

For Sprint 010, transitions are handled with CSS `opacity` transitions on `body` triggered by `beforeunload` and `DOMContentLoaded`. No JavaScript router required. Vanilla.

```css
body {
  opacity: 0;
  transition: opacity 300ms ease;
}
body.loaded {
  opacity: 1;
}
```

```js
document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('loaded');
});
document.querySelectorAll('a[href]').forEach(function (link) {
  link.addEventListener('click', function () {
    document.body.classList.remove('loaded');
  });
});
```

---

## VI. ANIMATION SYSTEM

Eight animation types, all CSS + IntersectionObserver. No animation library required.

| Class | Effect | Use case |
|-------|--------|----------|
| `data-reveal="rise"` | Translate Y +20px → 0, opacity 0 → 1 | Text, cards, most content |
| `data-reveal="drift"` | Translate X -15px → 0, opacity 0 → 1 | Horizontal elements, frequency names |
| `data-reveal="pulse"` | Scale 0.97 → 1, opacity 0 → 1 | Seals, sigils, circular elements |
| `data-reveal="veil"` | Opacity 0 → 1 only | Background elements, environmental layers |
| `data-reveal="slow"` | Rise with 800ms duration instead of 400ms | Mantra lines, doctrine statements |
| `data-reveal="stagger"` | Children animate sequentially with 120ms delay | Card grids, list items |
| `data-reveal="line"` | Each line of text reveals sequentially | Multi-line doctrine passages |
| `data-reveal="glyph"` | SVG stroke-dashoffset animation | Seals, sigils drawn in |

IntersectionObserver threshold: 0.15 (triggers when 15% of element is visible).

**`prefers-reduced-motion` override:** All animations reduce to opacity-only at 600ms. Never zero — the reveal should still happen, just gently.

---

## VII. THE EMOTIONAL PACING RULE

Every page must have at least three beats:

1. **Arrival** — The visitor orients. What is this place? (3–5 seconds)
2. **Discovery** — Something reveals that shifts their understanding. (variable)
3. **Invitation** — A clear, unhurried path forward. Never a hard sell.

If a page skips the Arrival and goes directly to Discovery, it feels like a presentation, not a world.
If a page skips the Invitation, the visitor leaves without knowing what to do next.
Both failures break the immersion.

---

*Immersive Experience Guide — Version 1.0*
*Applies to all Sprint 010 implementation and forward.*
*Reference this document before designing any page component or animation.*
