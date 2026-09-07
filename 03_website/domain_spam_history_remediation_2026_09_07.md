# Domain Spam-History Remediation — mukeshart.in
**Date:** 2026-09-07 · **Owner action items marked 👤 · Already done marked ✅**

## What happened (the facts, confirmed)
`mukeshart.in` was an aftermarket domain — it had owners before us. Wayback Machine confirms its timeline:
1. **2022–2023:** WordPress wedding-photography site.
2. **2024–2025:** escort / SEO-spam farm — mass auto-generated pages, adult-keyword pages (`Colombo-escourt.html`, `Escorts-in-flushing-queens.html`, `Escourts-hervey-bay.html`), numbered junk (`69019394.html`, etc.).
3. **2026:** our clean Next.js airport-media site.

Google still remembers the spam pages from phase 2. **Nothing spam is live** — every spam URL 404'd (now 410), our build/sitemap/hosting are clean. But the domain carries a spam *reputation* in Google's memory, and that is almost certainly a major reason indexing has been so stubborn — on top of the young-site / no-backlinks issue.

---

## PART A — Technical cleanup (✅ done, deployed & verified)
- ✅ **410 Gone** on every root-level `.html` request (except `index.html`/`404.html`). This deindexes ALL spam pages — known and unknown — with the strongest "permanently gone" signal. Real pages are extensionless directories (`/airport/`, `/inventory/<slug>/`), so none are affected. Verified live: spam URLs → 410, real pages → 200.
- ✅ **Branded 404 restored.** The server had been serving the *old spam-farm's Drupal error page*; it now serves our own 404. (commit f157b68)

---

## PART B — Google Search Console actions (👤 you, in order)

### Step 1 — Check for a MANUAL ACTION (do this first; it decides everything)
GSC → left nav → **Security & Manual Actions → Manual actions**, and **→ Security issues**.
- **If it says "No issues detected" on both** → good. The domain has no active Google penalty; this is algorithmic trust-lag we can rehab. Continue to Step 2.
- **If there IS a manual action** (e.g. "Pure spam", "Hacked", "User-generated spam") → the domain is actively penalized. Rehab is possible but slow and uncertain (requires a reconsideration request after full cleanup). **This tilts the decision strongly toward moving to a clean domain now** — see Part D.
- **Report back to Mihir/Claude what these two screens say.** This single check changes the whole strategy.

### Step 2 — Remove the adult-keyword URLs (fast hide)
GSC → **Indexing → Removals → New Request → "Temporarily remove URL"**. Submit these one by one:
```
https://mukeshart.in/Colombo-escourt.html
https://mukeshart.in/Escorts-in-flushing-queens.html
https://mukeshart.in/Escourts-hervey-bay.html
```
This hides them from search within hours (temporary ~6 months) while the 410s remove them permanently. The **numbered junk pages (`69019394.html` etc.) do NOT need manual removal** — the 410 rule handles them automatically.

### Step 3 — Export Google's full list of known URLs, remove any other adult ones
GSC → **Indexing → Pages** → open each "not indexed" reason → **Export** (top right). Scan the exported list for any other adult/gambling/pharma keyword URLs and add those to the Removals tool (Step 2). Ignore numbered/junk `.html` — 410 covers them.

### Step 4 — Backlink check (toxic-link cleanup)
GSC → **Links → External links → Top linking sites → Export**. If the list is full of porn/casino/pharma/foreign spam domains (spam farms attract these), we build a **disavow file** and submit it via Google's Disavow tool. 👤 Export the list and send it to Claude — I'll build the disavow file for you.

### Step 5 — Resubmit sitemap, then STOP clicking "Validate Fix"
- GSC → **Sitemaps** → resubmit `https://mukeshart.in/sitemap.xml` (last read was stale).
- **Do NOT run "Validate Fix" / "Start validation" anymore.** It re-checks the whole domain including the spam ghosts, always shows "failed", and never causes indexing. It's the source of the alarming screens — not a real signal.

---

## PART C — Overwrite the reputation (ongoing)
The cure for a bad-history domain that has NO manual action is clean signals + time:
- 👤 Citations: Justdial, IndiaMART, Sulekha (paste-ready copy in `citation_listings_ready_to_paste_2026_08_30.md`).
- 👤 GBP completeness + real customer reviews.
- ✅/ongoing clean content, correct canonicals, HTTPS.
- Expect 4–8 weeks after the cleanup + citations for Google to start re-trusting **if** there's no manual action.

---

## PART D — The domain decision (read before building more citations)

You mentioned possibly moving to a new domain later. **The timing of that decision matters more than it seems**, so decide it deliberately rather than drifting:

**Why sooner is cheaper than later:** every citation, GBP link, and backlink you build now points at `mukeshart.in`. The more you build, the more painful a later move becomes (all of it must be redone or redirected).

**⚠️ Critical warning if you DO move:** do **not** blanket-301 the old domain to the new one. A 301 can *transfer the spam reputation* to the clean domain. On a move, you start the new domain fresh and only redirect your handful of legitimate pages — never the spam URLs.

**Recommended decision path:**
1. Do **Step 1** (manual action check) first.
2. **If there's a manual action** → strongly lean toward a new clean domain **now**, before more citations exist. Good options keep the brand: `mukeshartmedia.in`, `mukeshairportmedia.in`, `mukeshart.co.in`. Verify any candidate's history first (Wayback + a Google `site:` search) before buying — we won't get caught twice.
3. **If there's NO manual action** → give this domain the Part B+C cleanup and **4–6 weeks**. If real pages start getting indexed, keep it (you keep the exact-brand domain, which is valuable). If it's still frozen after clean signals + citations + 6 weeks, treat that as evidence the history is sticky and move then.

**On the money:** the 2-year registration you paid is a small sunk cost (~₹1–1.5k/yr) — don't let it drive the decision. If you move, keep `mukeshart.in` as a cheap defensive registration; just don't build on it. The real cost is SEO time, and that argues for deciding early.

---

## Quick status
| Item | State |
|---|---|
| Live spam | None — all 410 ✅ |
| Hosting / build / sitemap | Clean ✅ |
| Branded 404 | Restored ✅ |
| Manual-action check | 👤 pending (Step 1 — do first) |
| Adult-URL removals | 👤 pending (Step 2) |
| Backlink/disavow | 👤 export → Claude builds file |
| Citations | 👤 in progress |
| Domain keep-vs-move | decide after Step 1 |
