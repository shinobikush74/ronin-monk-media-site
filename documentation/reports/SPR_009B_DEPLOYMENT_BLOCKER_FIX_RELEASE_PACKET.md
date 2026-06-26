# SPRINT 009B RELEASE PACKET
## Deployment Blocker Fix — External JS + CSP frame-src
**Date:** 2026-06-26
**Prepared by:** Claude (Editor)
**For:** LaRon Monte Adams (Creator / CEO)
**Sprint:** 009B (deployment blocker / hotfix)
**Status:** COMPLETE

---

## MISSION

Make the admin dashboard and media embeds deployment-safe on Netlify without relaxing the Content Security Policy beyond what is necessary.

**Blockers fixed:**
1. Inline scripts blocked by `script-src 'self'` CSP — all JS moved to external file
2. Vimeo and Mixcloud embeds blocked by missing `frame-src` entries

---

## BLOCKER 1 — Inline Script CSP Conflict

### Problem

`netlify.toml` sets:
```
script-src 'self'
```

This CSP directive does **not** include `'unsafe-inline'`. On Netlify, every inline `<script>` block is silently blocked. Tabs would not work. Datetime would not update. No JavaScript error is visible to the user — the page simply stops responding to clicks.

### Solution

**Do not add `'unsafe-inline'`.** Instead, move all shared admin JavaScript to a single external file served from `'self'`:

**File created:** `js/admin-utils.js`

**Contents:**
- Datetime display IIFE — populates `#mc-datetime` on page load
- `s8Tab(grp, idx)` function — tab system used by all Sprint 008+ pages
- Mission Control notification tab handler — activates `.mc-notif-tab` click behavior (harmless no-op on pages without those elements)

**All 23 admin pages updated** to reference this file:
```html
<script src="../js/admin-utils.js" defer></script>
```

The `defer` attribute ensures the script runs after DOM parsing, matching the behavior of inline scripts at the bottom of `<body>`.

### Pages Updated

| Page | Prior State | Action |
|------|-------------|--------|
| audience.html | Standard inline script (datetime + s8Tab) | Replaced with admin-utils.js |
| calendar.html | Standard inline script | Replaced |
| crm.html | Standard inline script | Replaced |
| knowledge.html | Standard inline script | Replaced |
| marketing.html | Standard inline script | Replaced |
| proposals.html | Standard inline script | Replaced |
| revenue.html | Standard inline script | Replaced |
| index.html | Non-standard inline script (datetime + mc-notif-tab) | Replaced |
| queue.html | Non-standard inline script (datetime only, no s8Tab) | Replaced |
| agents.html | No prior script | admin-utils.js added |
| analytics.html | No prior script | admin-utils.js added |
| automation.html | No prior script | admin-utils.js added |
| client-portal.html | No prior script | admin-utils.js added |
| content.html | No prior script | admin-utils.js added |
| game.html | No prior script | admin-utils.js added |
| lore.html | No prior script | admin-utils.js added |
| music-center.html | No prior script | admin-utils.js added |
| products.html | No prior script | admin-utils.js added |
| projects.html | No prior script | admin-utils.js added |
| publishing.html | No prior script | admin-utils.js added |
| reports.html | No prior script | admin-utils.js added |
| settings.html | No prior script | admin-utils.js added |
| social.html | No prior script | admin-utils.js added |

---

## BLOCKER 2 — Missing frame-src Entries

### Problem

`netlify.toml` CSP `frame-src` was missing two domains added in Sprint 009:
- `https://player.vimeo.com` — Vimeo embed player
- `https://player-widget.mixcloud.com` — Mixcloud embed widget

Both embeds would be silently blocked on Netlify. The music-center.html page would show blank iframes instead of media players.

### Solution

Updated `netlify.toml` `frame-src` to include both domains.

**Before:**
```
frame-src https://bandcamp.com https://open.spotify.com https://www.youtube.com https://w.soundcloud.com
```

**After:**
```
frame-src https://bandcamp.com https://open.spotify.com https://www.youtube.com https://w.soundcloud.com https://player.vimeo.com https://player-widget.mixcloud.com
```

All previously allowed domains preserved.

---

## FINAL AUDIT RESULTS

### Inline Script Audit — All 23 Admin Pages

| Page | Inline Script Remains | admin-utils.js Present |
|------|-----------------------|------------------------|
| agents.html | ✗ None | ✓ |
| analytics.html | ✗ None | ✓ |
| audience.html | ✗ None | ✓ |
| automation.html | ✗ None | ✓ |
| calendar.html | ✗ None | ✓ |
| client-portal.html | ✗ None | ✓ |
| content.html | ✗ None | ✓ |
| crm.html | ✗ None | ✓ |
| game.html | ✗ None | ✓ |
| index.html | ✗ None | ✓ |
| knowledge.html | ✗ None | ✓ |
| lore.html | ✗ None | ✓ |
| marketing.html | ✗ None | ✓ |
| music-center.html | ✗ None | ✓ |
| products.html | ✗ None | ✓ |
| projects.html | ✗ None | ✓ |
| proposals.html | ✗ None | ✓ |
| publishing.html | ✗ None | ✓ |
| queue.html | ✗ None | ✓ |
| reports.html | ✗ None | ✓ |
| revenue.html | ✗ None | ✓ |
| settings.html | ✗ None | ✓ |
| social.html | ✗ None | ✓ |

**Result: 0 inline scripts remain across all 23 admin pages.**

### CSP Verification

| CSP Directive | Status |
|---------------|--------|
| `script-src 'self'` | ✓ Unchanged — no `unsafe-inline` added |
| `frame-src` | ✓ Vimeo + Mixcloud added, all prior domains preserved |
| All other directives | ✓ Unchanged |

---

## FILES MODIFIED THIS SPRINT

| File | Change |
|------|--------|
| `js/admin-utils.js` | NEW — shared admin JS (datetime, s8Tab, notif tabs) |
| All 23 `admin/*.html` | Inline scripts removed; admin-utils.js loaded with `defer` |
| `netlify.toml` | frame-src: added player.vimeo.com, player-widget.mixcloud.com |
| `documentation/reports/SPR_009B_DEPLOYMENT_BLOCKER_FIX_RELEASE_PACKET.md` | This file |
| `documentation/PROJECT_STATUS.md` | Sprint 009B entry |
| `documentation/PROJECT_EXECUTION_LOG.md` | TASK-016 appended |
| `documentation/reports/REPORT_INDEX.md` | RPT-012 added |
| `documentation/architecture/ADR.md` | ADR-017 added |

---

## TESTING PERFORMED

- **Inline script detection:** PowerShell scan confirmed 0 pages retain inline `<script>` blocks
- **admin-utils.js reference:** All 23 pages confirmed to reference the external file
- **netlify.toml frame-src:** Verified line reads with both new domains present
- **Local file behavior:** CSS paths (relative) + external JS (defer) work in file:// context
- **Functional verification (manual):** Pages still render layout, tabs still have correct HTML structure, datetime elements still present — JS execution on Netlify requires deployment to fully verify, but the structural fix is complete

---

## REMAINING DEPLOYMENT RISKS

| Risk | Severity | Status |
|------|----------|--------|
| `style-src 'unsafe-inline'` still present | Low | Accepted — needed for inline CSS used in older public pages |
| `admin-utils.js` serves as single point of failure for all tab UI | Low | Acceptable — file is simple, no dependencies, no build step |
| `defer` script runs after DOMContentLoaded | None | This is the correct behavior — matches prior inline-at-bottom-of-body |
| Netlify Forms destination not configured | Medium | Pre-existing — not in scope for 009B |

---

## RECOMMENDED NEXT SPRINT (010)

**Sprint 010 — Revenue Activation**
- Configure Netlify Forms destination (email address for form submissions)
- Verify Stripe approval email status
- Set up first email list automation (Netlify Forms → email platform)
- Revenue Priority Rule: What is most likely to move toward the next $100?

---

*Sprint 009B Complete — 2026-06-26*
