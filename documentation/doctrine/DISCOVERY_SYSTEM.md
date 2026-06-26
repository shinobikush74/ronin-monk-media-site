# DISCOVERY SYSTEM
## Hidden Elements, Environmental Storytelling, and Reward-for-Curiosity Architecture
**Established:** 2026-06-26
**Status:** Active — governs all discovery design across the Headquarters

---

## I. THE PRINCIPLE

> Visitors should discover things rather than simply navigate.
> Reward curiosity.
> Make people want to return.

The Discovery System is not a feature. It is a philosophy of architecture.

A Headquarters built only for navigation is a website.
A Headquarters built for discovery is a world.

The difference is that a world contains more than what is immediately visible. It has depth. It has history. It rewards the traveler who looks behind, underneath, and between things.

---

## II. CATEGORIES OF DISCOVERY

### 1. Environmental Storytelling
Content that is not explicitly presented — it exists in the environment and can only be found by attention.

**Examples:**
- A single line of the Second Doctrine hidden in the background texture of The Archive ("Remember who you were" rendered in near-invisible opacity)
- A faction glyph embedded in the sacred geometry pattern of the homepage background
- A date in the Sky Khan calendar embedded in the footer of The Living Mythology, below the copyright line
- The coordinates of a Sky Khan location embedded as metadata in an image alt tag

**Rule:** Environmental storytelling must be findable — not random. If a visitor looks carefully at a specific location, they will find it.

### 2. Hidden Scrolls
Transmissions that are accessible but not in the main navigation. They exist at a URL but are not linked from anywhere obvious.

**Examples:**
- `/pages/field-report-001.html` — a first-person field report from inside the Sky Khan universe, linked only from a hidden clickable element on The Living Mythology page
- `/pages/signal-log.html` — a log of all transmissions received by The Order, not indexed, accessible only via a clue on The Resonance Chamber

**Rule:** Hidden scrolls must be genuinely discoverable — not impossible to find, not publicly listed. At least one visible clue on the site leads to each hidden scroll.

### 3. Clickable Glyphs
Symbols that appear decorative but respond to interaction. Clicking or long-pressing a glyph reveals something.

**Examples:**
- The Ronin Monk Seal on the homepage — clicking the center ring reveals a short doctrinal statement that fades in and out
- A faction sigil in the footer of The Living Mythology — clicking it opens a tooltip with the faction's core creed
- A frequency ring on The Resonance Chamber — clicking it reveals a hidden track not shown in the main music list

**Rule:** Clickable glyphs never have obvious interactive indicators (no cursor change announcement, no hover highlight). They are discovered by curiosity.

### 4. Hidden Audio
A sound that plays in a specific context — a location trigger, a glyph click, or a scroll depth milestone.

**Examples:**
- At 90% scroll depth on The Living Mythology, a very quiet ambient sound begins — as if the universe has become aware of the reader
- Clicking the Ronin Monk Seal in the footer triggers a 3-second audio pulse — a fragment of a Shinobi Kush transmission
- The Council Chamber has a subtle sound when the contact form is submitted — a single tone, like a transmission being sent

**Rule:** Hidden audio is always opt-in by behavior (scroll depth, click) — never autoplaying. Volume is always low. Duration is short (under 10 seconds for discovery audio).

### 5. Lore Fragments
Pieces of Sky Khan universe lore that appear in unexpected places — as footnotes, as metadata, as image captions, as comment-block text visible only in the page source.

**Examples:**
- The HTML source of The Threshold contains a comment: `<!-- Signal received. Frequency authenticated. Welcome to the Headquarters, traveler. — Sky Khan Transmission Log, Year 47 AF -->`
- An image alt tag on The Living Mythology reads: "The Dome of the Kabal, as it appeared before the Fracture — recovered from the Waste-Born archive"
- A footnote on The Archive's about section, at the very bottom: "The Archive was first assembled in Year 12 AF. 847 transmissions recovered to date."

**Rule:** Lore fragments must be internally consistent with the Sky Khan universe canon. Never improvised or throwaway.

### 6. Unlockable Elements
Content that becomes visible after a specific visitor behavior.

**Examples:**
- After joining The Order (email submission), the thank-you page reveals a hidden codex fragment not available elsewhere
- After visiting all five frequency pages, a hidden sixth element appears on the homepage — a subtle animation change or a new glyph
- Visitors who arrive from a specific URL parameter (shared by Order members) see a different version of The Threshold — with a welcome message from the Creator

**Rule:** Unlockable elements are delivered via sessionStorage or URL parameters — no login required. The unlock is lightweight. The reward is meaningful, not just cosmetic.

---

## III. DISCOVERY MAP (Sprint 010 Implementation)

| Location | Discovery Type | What Is Found | Implementation |
|----------|---------------|---------------|----------------|
| The Threshold (homepage) | Clickable Glyph | Clicking Ronin Monk Seal reveals 3-line doctrinal statement | CSS fade, JS click handler |
| The Threshold (homepage) | HTML Source Lore | Transmission log comment in `<head>` | Static HTML comment |
| The Archive | Environmental Storytelling | "Remember who you were" in background at 5% opacity | CSS `::after` pseudo-element |
| The Resonance Chamber | Hidden Audio | Scroll to 90% → ambient tone plays (3s, very low) | IntersectionObserver + Audio API |
| The Resonance Chamber | Clickable Glyph | Frequency ring click → hidden track reveal | JS click + CSS expand |
| The Living Mythology | Lore Fragment | Image alt tags carry faction archive descriptions | Static HTML alt attributes |
| The Living Mythology | Environmental Storytelling | Sky Khan calendar date in footer | Static HTML, styled as environmental copy |
| The Living Mythology | Hidden Scroll link | A clickable glyph links to `/pages/field-report-001.html` | JS click, no visible href |
| The Forge | Environmental Storytelling | A line of the Second Doctrine at 4% opacity in the hero | CSS overlay |
| The Order (join form) | Unlockable Element | Post-submission: codex fragment on thank-you page | Netlify Forms redirect + dedicated thank-you page |
| All pages | HTML Source Lore | Each page's source contains a unique Sky Khan transmission log entry | Static HTML comments |

---

## IV. DISCOVERY DESIGN RULES

1. **Never advertise the discovery system.** No "there are hidden elements on this site." The discovery is the reward. Announcing it removes the reward.

2. **Every discovery must be discoverable without instructions.** A curious visitor who explores naturally should be able to find every element. If finding it requires specific knowledge that isn't embedded in the world, it fails.

3. **Discovery elements are never load-bearing.** Critical information never lives only in a discovery element. A visitor who never finds any hidden element should still have a complete experience. Discovery enriches; it does not gatekeep.

4. **Discovery elements must earn their place.** A hidden element that reveals nothing meaningful is noise. Every discovery should add to the visitor's understanding of the world, the philosophy, or the mythology.

5. **Catalog every discovery element.** The full discovery map lives in this document. New elements added in future sprints are added to the map in this document before implementation.

---

## V. FUTURE DISCOVERY EXPANSIONS (Post-Sprint 010)

These are planned but not yet implemented:

- **The Signal Archive** — a hidden page at `/pages/signal-archive.html` that logs every transmission (blog post, music release, lore fragment) in-universe chronological order
- **The Faction Challenge** — visiting all five frequency pages in one session unlocks a faction assignment quiz
- **Collector Discovery** — limited artifact editions come with a URL only printed in the artifact itself, leading to a hidden gratitude transmission from the Creator
- **Order Member Discovery** — a hidden section of The Fifth Frequency visible only to signed-in Order members (Netlify Identity, Sprint 012)

---

*Discovery System — Version 1.0*
*Established by Creator directive — 2026-06-26*
*Update the discovery map section whenever a new discovery element is added to the Headquarters.*
