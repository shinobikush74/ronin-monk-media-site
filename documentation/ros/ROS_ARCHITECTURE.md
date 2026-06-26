# ROS ARCHITECTURE
## Ronin Operating System v1.0 — Structural Architecture
**Established:** 2026-06-26
**Status:** Active — governs all system design decisions within ROS

---

## I. THE FIVE LAYERS

```
╔═════════════════════════════════════════════════════════════╗
║  LAYER 5 — CONSTITUTIONAL LAYER                             ║
║                                                             ║
║  CONSTITUTION_OF_RONIN_MONK_MEDIA.md                        ║
║  REVENUE_CONSTITUTION.md                                    ║
║  BRAND_DOCTRINE.md                                          ║
║                                                             ║
║  Supreme authority. Unchanging except by Creator directive. ║
╚═════════════════════════════════════════════════════════════╝
           ↕ informs
╔═════════════════════════════════════════════════════════════╗
║  LAYER 4 — COUNCIL LAYER                                    ║
║                                                             ║
║  Revenue Council    ·   Publishing Council                  ║
║  Creative Council   ·   Operations Council                  ║
║  Intelligence Council · Archive Council                     ║
║                                                             ║
║  Councils think, recommend, and brief the Creator.          ║
║  They do not execute without Creator approval.              ║
╚═════════════════════════════════════════════════════════════╝
           ↕ directs / receives reports from
╔═════════════════════════════════════════════════════════════╗
║  LAYER 3 — AGENT LAYER                                      ║
║                                                             ║
║  CRO Agent           ·  Proposal Agent                      ║
║  Publishing Agent    ·  Market Intelligence Agent            ║
║  CRM Agent                                                  ║
║                                                             ║
║  Agents research, organize, and execute approved work.      ║
║  All output is ADVISORY unless Creator approves execution.  ║
╚═════════════════════════════════════════════════════════════╝
           ↕ reads / writes to
╔═════════════════════════════════════════════════════════════╗
║  LAYER 2 — OPERATIONS LAYER                                 ║
║                                                             ║
║  Headquarters (public site)  ·  RMHQ (admin)               ║
║  Revenue pipelines           ·  Publishing workflows        ║
║  Knowledge systems           ·  CRM                        ║
║  Automation (Sprint 014+)                                   ║
║                                                             ║
║  This is where work happens. All systems here serve the     ║
║  layers above.                                              ║
╚═════════════════════════════════════════════════════════════╝
           ↕ built on
╔═════════════════════════════════════════════════════════════╗
║  LAYER 1 — FOUNDATION LAYER                                 ║
║                                                             ║
║  Static HTML/CSS/Vanilla JS (no framework, no build step)   ║
║  Netlify (hosting + forms + identity)                       ║
║  GitHub (version control)                                   ║
║  Config files (payment-links.json, audience-markets.json,  ║
║               revenue-streams.json, collector-products.json)║
║                                                             ║
║  The technical substrate. Stable. Changed only when a       ║
║  clear operational need requires it.                        ║
╚═════════════════════════════════════════════════════════════╝
```

---

## II. DATA FLOW ARCHITECTURE

### The Morning Flow (Daily Operations)
```
Creator wakes →
  Daily Council Brief generated (DAILY_COUNCIL_PROTOCOL.md) →
    Revenue status pulled (revenue.html / Sales Pipeline) →
    Market Intelligence pulled (Market Intelligence Agent) →
    Publishing queue reviewed (Publishing Agent) →
    CRM actions reviewed (CRM Agent) →
    Next $100 Mission identified (CRO Agent) →
  Creator reviews brief (5–10 minutes) →
  Creator approves or redirects today's priorities →
  Agents execute approved work →
  End of day: brief updated with progress
```

### The Revenue Flow
```
Lead enters →
  Sales Pipeline (Awareness) →
    CRM Agent flags for follow-up →
    Creator contacts / responds →
    Proposal Agent generates proposal →
    Creator approves proposal →
    Proposal sent →
    Deposit received → Sales Pipeline (Booked) →
    Work begins → Client Pipeline (Project Active) →
    Delivery → Client Pipeline (Project Complete) →
    Follow-up → Client Pipeline (Maintenance) →
    Referral → Collector Pipeline (tier upgrade) + Sales Pipeline (Advocate)
```

### The Publishing Flow
```
Creator creates or approves content →
  Publishing Agent transforms for each platform →
    Website (Archive post) →
    YouTube (video + description + tags) →
    Instagram (caption + hashtags) →
    LinkedIn (professional framing) →
    X (doctrine-language post) →
    Newsletter (Order transmission) →
    Bandcamp (if music) →
  Creator reviews all platform versions →
  Creator approves each platform individually →
  Publishing Agent schedules or posts approved content
```

### The Intelligence Flow
```
Market Intelligence Agent monitors (daily) →
  Afrofuturism space →
  Underground Hip Hop →
  Fantasy / speculative fiction →
  Anime and worldbuilding communities →
  Collector markets →
  Key international markets (US/UK/Nigeria/Ghana/South Africa/Japan/South Korea) →
  Produces Daily Intelligence Brief →
  Revenue Council reviews →
  Relevant opportunities surfaced in Daily Council Brief →
  Creator decides whether to act
```

### The Knowledge Flow
```
Creator decision or doctrine statement →
  Captured in relevant doctrine document →
  Cross-referenced in BRAND_DOCTRINE.md →
  Indexed in REPORT_INDEX.md →
  Logged in PROJECT_EXECUTION_LOG.md →
  Archive Agent files for retrieval →
  Future sessions reference via memory system
```

---

## III. AGENT INTERACTION MAP

```
                    ┌─────────────────┐
                    │    CREATOR      │
                    │  (Final Auth.)  │
                    └────────┬────────┘
                             │ approves / directs
              ┌──────────────┼──────────────┐
              │              │              │
         ┌────▼────┐    ┌────▼────┐   ┌────▼────┐
         │   CRO   │    │Proposal │   │Publishing│
         │  Agent  │    │  Agent  │   │  Agent  │
         └────┬────┘    └────┬────┘   └────┬────┘
              │              │              │
        Revenue          Proposals     Platform
        Pipeline          & Contracts   Content
              │              │              │
              └──────────────┼──────────────┘
                             │
                    ┌────────┴────────┐
                    │   CRM AGENT     │◄──── Market Intel Agent
                    │ (relationship   │      (external signals)
                    │  memory)        │
                    └─────────────────┘
```

**Agent Communication Rules:**
- Agents do not communicate directly with each other in the current phase
- All agent output goes to the Creator for review
- The Daily Council Brief is the shared output surface where all agent reports converge
- Future phase (Sprint 017+): Agent-to-agent communication via shared memory files

---

## IV. SHARED MEMORY ARCHITECTURE

ROS agents share knowledge through structured files, not real-time APIs. This makes the system reliable, auditable, and operable without complex infrastructure.

### Current Shared Memory Files (Active)
| File | Purpose | Read by | Written by |
|------|---------|---------|-----------|
| `config/payment-links.json` | Payment URLs | All revenue pages | Creator / Claude |
| `config/audience-markets.json` | 15-market data | Audience Intel, CRO | Creator / Claude |
| `config/revenue-streams.json` | Revenue stream data | Revenue Center | Creator / Claude |
| `config/collector-products.json` | Collector segment data | Revenue Center | Creator / Claude |

### Planned Shared Memory Files (Sprint 014+)
| File | Purpose | Agent |
|------|---------|-------|
| `config/daily-brief.json` | Daily Council Brief data | All agents read; CRO writes |
| `config/pipeline-state.json` | Current pipeline counts | CRO Agent, Proposal Agent |
| `config/client-registry.json` | All client records | CRM Agent |
| `config/publishing-queue.json` | Content awaiting publication | Publishing Agent |
| `config/market-signals.json` | Intelligence findings | Market Intelligence Agent |
| `config/proposal-log.json` | All proposals and status | Proposal Agent, CRM Agent |

---

## V. TECHNOLOGY ARCHITECTURE

### Current Stack (Permanent Foundation)
```
Hosting:       Netlify
               ├── Auto-deploy from GitHub main branch
               ├── Forms (Netlify Forms) — active
               └── Identity (Sprint 012)

Code:          Static HTML5 / CSS / Vanilla JS
               ├── No framework
               ├── No build step
               └── Any Claude session can read and edit any file

Version:       GitHub
               └── shinobikush74/ronin-monk-media-site

Config:        JSON files in /config/
               └── Single source of truth for all data

Fonts:         Google Fonts CDN
               └── Cinzel · Cormorant Garamond · Inter

CSP:           Netlify.toml
               └── script-src 'self' — no unsafe-inline
```

### Automation Roadmap (Future Sprints)
```
Sprint 012:   Netlify Identity → member authentication
Sprint 014:   Netlify Functions → form automation, CRM triggers
Sprint 015:   CRM API → Gumroad webhook → auto-update collector tier
Sprint 017:   Publishing API → scheduled cross-platform posting
Sprint 018:   Analytics integration → real-time KPI dashboard
```

---

## VI. SECURITY ARCHITECTURE

| Protection | Mechanism | Status |
|-----------|-----------|--------|
| Admin area invisible to search engines | `<meta name="robots" content="noindex, nofollow">` on all 23 admin pages | Active |
| Admin area not linked from public nav | Enforced by design | Active |
| CSP — no inline scripts | `js/admin-utils.js` external, all admin pages | Active |
| Protected IP off GitHub | `.gitignore` blocks `codex-primer-drafts/`, `midjourney-prompts/`, `twine-adventure/` | Active |
| No credentials in codebase | Netlify env vars only | Active |
| Admin auth | Netlify Identity | Sprint 012 |

---

## VII. GOVERNANCE ARCHITECTURE

### Decision Authority Matrix

| Decision Type | Authority | Can Delegate? |
|--------------|-----------|--------------|
| Constitutional amendment | Creator only | Never |
| Canon change | Creator only | Never |
| Agent activation / deactivation | Creator | Never |
| Sprint direction | Creator | Never |
| Proposal approval | Creator | Never |
| Content publication | Creator | Never |
| Revenue terms | Creator | Never |
| Code deployment | Creator (via push to main) | Never |
| Research and drafting | Agents | Yes |
| Data organization | Agents | Yes |
| Draft generation | Agents | Yes |
| Intelligence monitoring | Agents | Yes |

---

*ROS Architecture — Version 1.0*
*The structural blueprint of the Ronin Operating System.*
*All system design decisions reference this document.*
