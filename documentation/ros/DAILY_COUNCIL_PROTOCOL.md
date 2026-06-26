# DAILY COUNCIL PROTOCOL
## Ronin Operating System v1.0 — Morning Operations Standard
**Established:** 2026-06-26
**Status:** Active — governs daily operations rhythm

---

## THE PURPOSE

Every morning the Headquarters prepares a Daily Council Brief.

The Creator begins each day with clarity.

Not clarity about everything — clarity about **what matters today**. The Daily Council Brief answers the one question that overrides all others:

> *What is the highest-value action I can take today to move the Creative Order forward?*

Everything else in the brief exists to inform that answer.

---

## THE DAILY COUNCIL BRIEF — 14 ELEMENTS

The brief contains exactly these sections, in this order:

---

### 1. REVENUE COUNCIL
**Produced by:** CRO Agent
**Content:**
- Revenue yesterday: $[X]
- Revenue this month: $[X] / $8,333 goal ([X]%)
- Revenue this year: $[X] / $100,000 goal ([X]%)
- Pipeline value: $[X]
- Consultations pending: [N]
- Product sales (all time): [N]
- Email subscribers: [N]

**Decision trigger:** If any metric drops or stalls unexpectedly, CRO Agent flags and recommends.

---

### 2. PUBLISHING COUNCIL
**Produced by:** Publishing Agent
**Content:**
- Content published today: [title / platform]
- Content in queue (awaiting approval): [N items, titles]
- Platform engagement summary: [top-performing post]
- Recommended next publication: [title + platform + reason]

**Decision trigger:** If queue is empty (no content awaiting approval), Publishing Agent flags content gap.

---

### 3. CREATIVE COUNCIL
**Produced by:** Creator-led / Archive Agent support
**Content:**
- IP status: [active lore in development]
- Pending creative decisions: [list]
- Lore items flagged for Creator review: [list]
- Creative opportunities identified: [if any]

**Decision trigger:** Any canon conflict or IP decision pending more than 7 days.

---

### 4. OPERATIONS COUNCIL
**Produced by:** Claude (Editor)
**Content:**
- Headquarters status: [Live / Issues detected]
- RMHQ status: [All systems / Issues]
- Open sprints: [current sprint + status]
- Technical debt items: [top 1–2]
- Security status: [Clear / Alert]

**Decision trigger:** Any system failure or security alert escalates immediately.

---

### 5. MARKET INTELLIGENCE
**Produced by:** Market Intelligence Agent
**Content:**
- Top market signal today: [one specific finding]
- Platform shift or policy change: [if any]
- Emerging opportunity: [if any]
- Threat or risk: [if any]

**Decision trigger:** High-urgency signals (platform policy change, major competitor move) surface at top of brief.

---

### 6. AUDIENCE GROWTH
**Produced by:** CRO Agent + Publishing Agent
**Content:**
- Email subscribers: [N] (change from last week: [+/-])
- Gumroad customers: [N]
- Top platform follower count: [N / platform]
- Audience growth trend: [growing / flat / declining]
- Next audience growth action: [specific recommendation]

---

### 7. HIGHEST ROI OPPORTUNITY
**Produced by:** CRO Agent
**Content:**
- The single highest-probability action the Creator can take today to generate revenue
- Estimated value if acted on
- Estimated time required
- What would need to happen for it to close

**Format:**
```
HIGHEST ROI OPPORTUNITY
Action: [specific action]
Est. Value: $[X]
Time Required: [N hours]
Path to Close: [1–2 sentences]
```

---

### 8. HIGHEST PRIORITY CLIENT
**Produced by:** CRM Agent
**Content:**
- Current client or prospect most in need of Creator attention
- Stage in pipeline
- Days since last contact
- Recommended action
- Draft communication ready: [Yes / No]

**Decision trigger:** Any client inactive for 7+ days without an explanation.

---

### 9. HIGHEST PRIORITY PROPOSAL
**Produced by:** Proposal Agent
**Content:**
- Proposal most likely to close today or this week
- Proposal value
- Days outstanding
- Next recommended action

**Decision trigger:** Any proposal outstanding 14+ days without a response.

---

### 10. HIGHEST PRIORITY PRODUCT
**Produced by:** CRO Agent
**Content:**
- The artifact most likely to sell with minimal Creator effort today
- Why it's the priority now (trend, event, timing)
- Recommended promotion action
- Platform recommendation

---

### 11. HIGHEST PRIORITY CONTENT
**Produced by:** Publishing Agent
**Content:**
- The transmission most in need of publication or promotion today
- Platform recommendation
- Estimated reach impact
- Status (draft ready / needs Creator input)

---

### 12. NEXT $100 MISSION
**Produced by:** CRO Agent
**Content:**
- The specific, actionable path to the next $100 in revenue
- What needs to happen, by whom, within what timeframe
- Current gap from $0 (or current YTD) to the next $100 milestone

**Format:**
```
NEXT $100 MISSION
Current: $[X]
Target: $[Next $100 milestone]
Gap: $[Y]
Path: [1–2 sentences — the specific action]
Timeframe: [Today / This week / 30 days]
```

---

### 13. CONSTITUTION REMINDER
**Produced by:** Archive Agent / Static
**Content:**
- One line from the Constitution, rotating daily
- One line from the Doctrine of Remembrance, rotating weekly
- Today's Ronin Method step: Observe / Study / Discern / Integrate / Create / Serve / Remember (rotating daily, 7-day cycle)

**Purpose:** Ensures the Creator begins each day grounded in doctrine, not just operations.

---

### 14. AWAITING CREATOR APPROVAL
**Produced by:** All agents
**Content:**
- Complete list of everything waiting for Creator decision before it can move forward
- Organized by urgency: Today / This Week / When Ready
- Each item links to the relevant document or draft

**Format:**
```
AWAITING CREATOR APPROVAL

TODAY:
- [ ] [Item] — [Agent that prepared it]

THIS WEEK:
- [ ] [Item]

WHEN READY:
- [ ] [Item]
```

---

## BRIEF DELIVERY PROTOCOL

**When:** Before the Creator begins any other work for the day

**How:** The Creator opens `admin/index.html` (Mission Control) — which becomes the primary morning surface for the Daily Council Brief in Sprint 012+

**Current delivery (v1.0):** Brief is generated by Claude (Editor) on request or at start of each working session. Stored as `config/daily-brief-[date].md` (Sprint 014+ automation)

**Review time:** 5–10 minutes maximum. If reviewing the brief takes longer than 10 minutes, the brief is too long — it should be condensed.

**Decision output:** After reviewing the brief, the Creator confirms:
1. Today's highest priority action
2. Any items in "Awaiting Creator Approval" to act on now
3. Any redirects (if the brief surfaces a different priority than planned)

---

## BRIEF CADENCE

| Frequency | What runs |
|-----------|-----------|
| Daily (every working day) | Full brief — all 14 elements |
| Weekly (Monday) | Extended brief — includes week-in-review summary |
| Sprint start | Sprint brief — aligns brief with sprint objectives |
| Sprint end | Sprint close brief — verifies Revenue Constitution test results |

---

## WHAT THE DAILY BRIEF IS NOT

- Not a status report to share with others
- Not a substitute for taking action
- Not a guarantee that all data is current (data is manually updated until Sprint 014+ automation)
- Not a decision-making body — the Creator decides; the brief informs

---

*Daily Council Protocol — Version 1.0*
*The operating rhythm of the Creative Order.*
*Every day begins with clarity.*
