# ARCHITECTURE DECISION RECORD (ADR)
## Ronin Monk Media LLC — RMHQ Creator OS
**Last Updated:** 2026-06-26

---

## ADR-001 | Static HTML — No Framework
**Sprint:** 000
**Decision:** Build the entire website and admin platform in static HTML5 / CSS / Vanilla JS. No React, Vue, Next.js, or any build step.
**Rationale:** Zero build complexity. Netlify deploys instantly. No dependency rot. Creator can read every file. Any Claude session can edit any file without context about a framework.
**Status:** Active — permanent constraint.

---

## ADR-002 | Centralized Payment Config
**Sprint:** 005
**Decision:** All payment links stored in `config/payment-links.json`. Public pages load via `js/payment-config.js`. Admin pages load via `js/admin-payment-config.js`. HTML uses `data-payment-key="paypal.url"` attribute pattern.
**Rationale:** One file to update when PayPal link changes. No hardcoded URLs scattered across 20+ pages.
**Status:** Active — enforced on all pages with payment buttons.

---

## ADR-003 | Admin Area Security
**Sprint:** 005
**Decision:** All admin pages carry `<meta name="robots" content="noindex, nofollow" />`. Admin area is never linked from public navigation. No private keys, passwords, API keys, or bank info stored anywhere in the codebase.
**Rationale:** Admin area is not ready for public access. Search engines must not index it. Credentials belong in Netlify environment variables or external password managers only.
**Status:** Active — permanent constraint.

---

## ADR-004 | Deploy Gate
**Sprint:** 005
**Decision:** No deployment to Netlify without explicit Creator approval. Claude does not push, deploy, or run `netlify deploy` under any circumstances.
**Rationale:** Preventing accidental public exposure of incomplete work or admin pages.
**Status:** Active — permanent constraint.

---

## ADR-005 | Protected IP
**Sprint:** 005
**Decision:** Grim Lore Raps, Codex Primer, Lore Engine internals, Canon Intelligence, and deep Sky Khan materials are never exposed publicly without Creator approval.
**Rationale:** These are core IP assets. Exposure before proper launch damages commercial value.
**Status:** Active — permanent constraint.

---

## ADR-006 | CSS Custom Properties — Design Tokens
**Sprint:** 004
**Decision:** All colors and fonts reference CSS custom properties: `--obsidian-0/1/2`, `--brass-1/2/3`, `--mist-0/1/2/3`, `--amber-1`. Font stack: `--font-display` (Cinzel), `--font-serif` (Cormorant Garamond), `--font-body` (Inter).
**Rationale:** Consistent theming across 22+ pages without duplication. Theme changes in one place.
**Status:** Active.

---

## ADR-007 | Admin Shell Layout
**Sprint:** 004
**Decision:** CSS Grid admin shell: `220px sidebar + 1fr main + 52px topbar`, `height: 100vh`. Sidebar is fixed, main scrolls.
**Rationale:** Standard admin UI pattern. Works at all viewport sizes with responsive overrides.
**Status:** Active.

---

## ADR-008 | AI Governance — Manual First
**Sprint:** 007
**Decision:** All AI agents operate in Manual Only mode by default. No agent executes any action without Creator reading and approving the output. Automation Level is documented on every module.
**Rationale:** Creator must maintain full control of all business operations. Automation is introduced incrementally, per sprint, with explicit Creator approval at each stage.
**Status:** Active — enforced in Agent Queue and all module AI Prep sections.

---

## ADR-009 | Sprint 008 CSS Namespace
**Sprint:** 008
**Decision:** All Sprint 008 component classes use `.s8-*` prefix. Sprint 007 used `.mc-*` (Mission Control). Future sprints use `.s9-*`, `.s10-*`, etc.
**Rationale:** Prevents class collision across sprints. Makes it easy to identify which sprint introduced a component. Enables clean removal of deprecated sprint components in future.
**Status:** Active.

---

## ADR-010 | Tab System — Data Attributes + Vanilla JS
**Sprint:** 008
**Decision:** Tab UI uses `data-tg` (tab group) and `data-pg` (panel group) HTML attributes. JS function `s8Tab(grp, idx)` toggling `.s8-tab--active` and `.s8-panel--hidden`. Inline `<script>` at bottom of each page.
**Rationale:** No external tab library needed. Readable, copy-paste pattern. Works with zero JS build step. Each page is fully self-contained.
**Status:** Active.

---

## ADR-011 | AI Prep Section — Every Module
**Sprint:** 008
**Decision:** Every admin module includes an AI Prep section displaying: Responsible Agent / Automation Level / Creator Approval Required.
**Rationale:** Prepares the platform for future AI agent integration. Makes the handoff point explicit. Creator always knows what requires approval before automation can proceed.
**Status:** Active.

---

## ADR-012 | Integration Hooks — Placeholder Only
**Sprint:** 008
**Decision:** All third-party integration UI elements (PayPal, Stripe, Gumroad, Bandcamp, YouTube, Wavlake, Fountain, Primal, GitHub, Google Calendar, email platforms, analytics) are non-functional visual placeholders. No API calls, no credentials, no live connections.
**Rationale:** Shows the Creator where integrations will live and what they will do, without creating security risk or incomplete functionality.
**Status:** Active.

---

## ADR-013 | CRM Pipeline Strip — Always Visible
**Sprint:** 008
**Decision:** The CRM pipeline (7 stages + 4 stats) is rendered above the tab panel on crm.html, not inside a tab. It is always visible regardless of which tab is active.
**Rationale:** Pipeline view is the most important single piece of information in a CRM. Hiding it behind a tab forces extra clicks and loses context while working on leads or clients.
**Status:** Active.

---

## ADR-014 | Config Files as Single Source of Truth — Audience & Revenue
**Sprint:** 009
**Decision:** All audience market data, revenue stream data, and collector product data are stored in dedicated JSON config files (`config/audience-markets.json`, `config/revenue-streams.json`, `config/collector-products.json`). Admin pages display this data; they do not duplicate it.
**Rationale:** 15 markets × multiple fields = high duplication risk if embedded in HTML. Config files let Claude update data in one place across future sprints. Mirrors the pattern established by `config/payment-links.json` in ADR-002.
**Status:** Active.

---

## ADR-015 | Revenue Priority Rule — Enforced in UI
**Sprint:** 009
**Decision:** The Revenue Priority Rule ("Every action must answer: What is most likely to move Ronin Monk Media toward its next $100?") is displayed as a persistent banner on every revenue-related admin page, not just documented in a config file.
**Rationale:** A rule that only lives in documentation is invisible. The banner keeps the $100 goal in the Creator's peripheral awareness during every planning session. Removes cognitive overhead of remembering the rule.
**Status:** Active — `.s9-revenue-rule` component in Sprint 009 CSS.

---

## ADR-017 | External JS File for CSP Compliance — No unsafe-inline
**Sprint:** 009B
**Decision:** All shared admin JavaScript is consolidated in `js/admin-utils.js` and loaded with `<script src="../js/admin-utils.js" defer></script>` on every admin page. No inline `<script>` blocks exist in any admin page. `unsafe-inline` is not added to `script-src`.
**Rationale:** Netlify enforces `Content-Security-Policy: script-src 'self'`, which blocks inline scripts silently (no visible error, just dead JS). Adding `unsafe-inline` would weaken the CSP for the entire site including public pages. A single shared external file is safer, easier to maintain, and future-proof — new admin pages simply include one line.
**Status:** Active — enforced on all 23 admin pages.

---

## ADR-016 | International Expansion — Structure Before Translation
**Sprint:** 009
**Decision:** International content strategy (FR/DE/JA/KO/PT/ES) is documented as structure only. No translated content is written, no translated pages are created, and no AI agent generates translations without explicit Creator review and approval.
**Rationale:** Machine-translated lore content degrades brand quality and can introduce factual errors in sensitive IP material (Sky Khan universe). Structure is established now so translation can be added incrementally when Creator is ready, one market at a time.
**Status:** Active — enforced in audience.html International Content tab and agent constraints.
