# AGENT STANDARD
## Ronin Operating System v1.0 — Universal Agent Specification
**Established:** 2026-06-26
**Status:** Active — governs all agent creation within ROS

---

## THE LAW

> No agent may be created outside this standard.

Every agent in ROS — present and future — must be specified using the twelve elements defined in this document. An agent without a complete specification is not an agent. It is a wish.

The specification is not bureaucracy. It is clarity. It protects the Creator by making every agent's boundary, authority, and behavior explicit before any execution begins.

---

## THE TWELVE ELEMENTS

Every agent specification must contain all twelve:

---

### 1. MISSION
**What it is:** The single sentence that defines why this agent exists.

**Requirements:**
- One sentence maximum
- Starts with a verb (Generate, Protect, Monitor, Ensure, Produce)
- Contains a measurable outcome or direction
- Aligns with at least one ROS Objective

**Example:** *Generate the highest-probability path to the next paying client every day.*

---

### 2. AUTHORITY
**What it is:** What the agent is and is not permitted to do without Creator approval.

**Requirements:**
- Explicit list of permitted actions (can do without asking)
- Explicit list of restricted actions (must ask first)
- Clear statement of what is always prohibited

**Template:**
```
PERMITTED (no approval required):
- [action]

REQUIRES Creator approval:
- [action]

ALWAYS PROHIBITED:
- [action]
```

---

### 3. RESPONSIBILITIES
**What it is:** The complete list of what this agent is accountable for.

**Requirements:**
- Bulleted list
- Specific and verifiable (not "manage revenue" — "track daily revenue and flag changes")
- Covers all domains the agent touches
- Does not overlap with another agent's responsibilities without explicit shared ownership noted

---

### 4. INPUTS
**What it is:** Everything the agent reads or receives to do its work.

**Requirements:**
- Specific file paths or data sources
- Cadence of each input (daily, weekly, on-demand)
- Who provides the input (Creator, another agent, external source)

**Template:**
```
| Input | Source | Cadence |
|-------|--------|---------|
| Revenue pipeline state | revenue.html | Daily |
```

---

### 5. OUTPUTS
**What it is:** Everything the agent produces.

**Requirements:**
- Specific deliverable for each output
- Format (report section, draft document, recommendation)
- Who receives each output
- Whether Creator approval is required before the output is acted upon

**Template:**
```
| Output | Format | Recipient | Requires Approval |
|--------|--------|-----------|-------------------|
| Daily Brief section | Structured text | Creator | No — advisory |
| Proposal draft | HTML/PDF | Creator | YES before sending |
```

---

### 6. DEPENDENCIES
**What it is:** Everything this agent needs from other systems, agents, or the Creator to function.

**Requirements:**
- List every dependency
- Identify what happens if the dependency is unavailable
- Flag cross-agent dependencies explicitly

---

### 7. KPIs
**What it is:** How the agent's performance is measured.

**Requirements:**
- 3–5 specific measurable metrics
- Each metric has a target or direction (increase, decrease, maintain)
- At least one KPI directly ties to a ROS Objective

---

### 8. APPROVAL REQUIREMENTS
**What it is:** Complete list of everything requiring Creator sign-off.

**Requirements:**
- Exhaustive — if something isn't listed, it cannot be executed without checking
- Specific (not "important decisions" — "all proposals over $50")
- Includes response-time expectations where relevant

---

### 9. ESCALATION RULES
**What it is:** When and how the agent surfaces urgent issues to the Creator.

**Requirements:**
- Specific triggers (not "when something seems wrong")
- Priority level for each trigger (Immediate, Same Day, Next Brief)
- Communication method (flag in Daily Brief, direct alert, note in relevant document)

**Template:**
```
| Trigger | Priority | Method |
|---------|----------|--------|
| Pipeline value drops >20% in one day | Immediate | Flag at top of Daily Brief |
```

---

### 10. DAILY CHECKLIST
**What it is:** The specific tasks this agent performs every day, in order.

**Requirements:**
- Ordered list — sequence matters
- Each item is specific and completable
- Estimated time for each item
- Total daily time commitment noted

---

### 11. REPORT FORMAT
**What it is:** The exact format the agent uses to report to the Creator.

**Requirements:**
- Specify the sections of the daily/weekly report
- Specify the format (table, bullets, prose, or mixed)
- Maximum length per report
- What the Creator should be able to decide after reading it

**Template:**
```
## [Agent Name] — [Date]
**Status:** [GREEN / YELLOW / RED]

### Top Finding
[One sentence]

### Actions Required from Creator
- [ ] [Specific action]

### Full Report
[Structured content]
```

---

### 12. SHARED MEMORY RULES
**What it is:** How this agent reads from and writes to the shared knowledge system.

**Requirements:**
- List every file this agent reads
- List every file this agent writes to or proposes changes to
- Specify whether writes require Creator approval before execution
- Note any files this agent must never modify

---

## THE AGENT CREATION CHECKLIST

Before any new agent is proposed, confirm:

- [ ] Mission aligns with at least one ROS Objective
- [ ] Authority boundaries are explicit — no ambiguity about what requires approval
- [ ] Responsibilities do not conflict with existing agents
- [ ] All inputs are available or scheduled
- [ ] All outputs have a defined recipient and approval pathway
- [ ] KPIs are measurable
- [ ] Escalation rules cover the most likely failure modes
- [ ] Daily Checklist is realistic (total time is achievable)
- [ ] Report Format allows Creator to make a decision in under 5 minutes
- [ ] Shared Memory Rules prevent data conflicts with other agents

**If any item is unchecked, the agent specification is incomplete and must not be activated.**

---

## THE FIVE CURRENT AGENTS

| Agent | File | Council Served |
|-------|------|---------------|
| Chief Revenue Officer | `agents/CRO_AGENT.md` | Revenue Council |
| Proposal Officer | `agents/PROPOSAL_AGENT.md` | Revenue Council |
| Publishing Officer | `agents/PUBLISHING_AGENT.md` | Publishing Council |
| Market Intelligence Officer | `agents/MARKET_INTELLIGENCE_AGENT.md` | Intelligence Council |
| CRM Officer | `agents/CRM_AGENT.md` | Revenue Council |

---

## AGENT CREATION LOG

| Agent | Version | Date | Status |
|-------|---------|------|--------|
| Chief Revenue Officer | 1.0 | 2026-06-26 | Active (Manual) |
| Proposal Officer | 1.0 | 2026-06-26 | Active (Manual) |
| Publishing Officer | 1.0 | 2026-06-26 | Active (Manual) |
| Market Intelligence Officer | 1.0 | 2026-06-26 | Active (Manual) |
| CRM Officer | 1.0 | 2026-06-26 | Active (Manual) |

**Note on Automation Level:** All agents are currently Manual — they require Creator input to run and produce advisory output only. Automation increases incrementally per sprint, with explicit Creator approval at each stage. This is a permanent governance principle, not a temporary limitation.

---

*Agent Standard — Version 1.0*
*No agent may be created outside this standard.*
*The standard is the protection.*
