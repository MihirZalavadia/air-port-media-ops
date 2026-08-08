# Work Log & Pending Items — as of 2026-08-04

> **SUPERSEDED** by `work_log_and_pending_2026_08_05.md` — read that
> one instead. Kept for history.

Canonical project-state note. Next session: read this + CLAUDE.md and
continue from §Pending. (Older context: README.md has the full site
flows; 03_website/seo_target_keywords_2026_07.md has the SEO recipe.)

---

## ✅ Shipped (2026-07-27 → 2026-08-04)

### Google / SEO
- **Search Console**: verified (owner art.mayurpatel@gmail.com), sitemap
  submitted, indexing re-requested after every meaningful change (last:
  2026-07-28 for /, /airport/, /publicity/).
- **Client's 27 target-search phrases** implemented in seo.ts keywords,
  schema (alternateName incl. one-word "Mukeshart", knowsAbout,
  serviceType) — plus OOH Rajkot–Morbi set for Mukesh Publicity
  (/publicity/ title now "Rajkot & Morbi").
- **Google Business Profile created** (service-area: Rajkot, Morbi,
  Jamnagar; ₹20k Ads credit correctly skipped). Description drafted
  (in chat + google_setup_guide_2026_07.md step 8).
- Reality check done: site barely indexed yet (new domain) — branded +
  local terms will land first; national terms are a long game. GSC
  Performance tab is the truth source (~check weekly).

### Website
- **All 4 inventory pages open on real owner footage** (Aug Hirasar
  shoot): digital = ad standee, backlit = Gate 01 interior, outdoor =
  dusk unipole (ITACA), hybrid = approach-road→terminal "journey".
- **Mobile polish round** (from Ridham's Android screenshots):
  connectivity map viewBox-cropped on phones (v3, measured ink bbox —
  no clipping, minimal whitespace); inventory grid 2×2 with compact
  cards; team hover-bubble suppressed on touch (blurb inline instead);
  gallery slider grants full dwell when scrolled into view (dusk film
  actually shows as slide 1 now).
- **Varmora logo**: official white-on-magenta lockup extracted from the
  SEBI DRHP cover (Aug 2025 IPO filing), JPEG-restored to 716×256. No
  public high-res magenta-on-white variant exists — verified
  exhaustively. (Trick for the future: listed-company DRHP covers are
  top-tier official logo sources.)
- Pre-flight audit passed: forms/validation solid both sides, URL
  exposure clean, apple-touch-icon added, robots.txt disallows /api/.
- **Deploy pipeline hardened**: rsync retries 4× (Hostinger SSH flakes);
  verify deploys via the public GitHub API runs endpoint (curl of
  mukeshart.in HTML hits a bot-wall; static assets pass).

### Leads → Google Sheet (code side DONE)
- lead.php now forwards every lead (contact form + inventory unlock) to
  a Google Apps Script webhook → Sheet row. Config lives outside the
  webroot, provisioned from GitHub secrets SHEETS_WEBHOOK_URL +
  SHEETS_TOKEN. Absent secrets = step skipped cleanly.
- Paste-ready script + click-by-click guide:
  `05_crm_and_outreach/apps_script_leads_webhook.js` +
  `leads_google_sheet_setup.md`.

### Repo
- Handover cleanup done: root = 4 md files + numbered folders; stray
  design/photo/scratch sorted; README rewritten as handover doc (pages,
  lead/admin/deploy flows); GitHub Pages workflow deleted.
- User confirmed 2026-07-28: keep ALL files in repo (archives included) —
  it's the client's work product.

---

## ⏳ PENDING — next session picks up here

### Mihir's clicks (blockers, ~30 min total)
1. **🔴 Repo → PRIVATE** — github.com Settings → Danger Zone. Public
   repo currently exposes client list, pricing, personal details.
   Decided 2026-07-27, still not flipped. Do this first.
2. **🔴 GitHub Pages → OFF** — Settings → Pages → delete site (the old
   published copy is still up even though the workflow is gone).
3. **Google Sheet setup** (~15 min, art.mayurpatel login) — follow
   `05_crm_and_outreach/leads_google_sheet_setup.md`: create Sheet →
   paste Apps Script → deploy webhook → add 2 GitHub secrets → re-run
   deploy → test lead. Code side is already live.
4. **Lead email end-to-end test** (checklist §B in
   03_website/manual_setup_checklist_2026_07.md) if never done: test
   lead → check info@mukeshart.in inbox + spam + admin Leads tab.
5. **Admin password** still in plaintext in manual_setup_checklist
   (file is gitignored now) — move to password manager, delete from doc.

### Ridham / Mukesh sir
6. **🔴 GBP video verification** — profile invisible until done. 5-min
   phone video at office (signage + letterhead/GST). Then: fill
   services/photos/description per guide → send review link to 5–10
   friendly partners (reviews = the local-ranking lever).
7. Partner logo files still wanted: Jai Ganesh MG + Shreenathji Škoda
   dealer lockups; Varmora vector file (would upgrade the DRHP restore).

### Claude next session (no blockers)
8. **GSC Performance check** (~1 week after 2026-08-04): which client
   phrases get impressions; screenshot-worthy proof for Mukesh sir.
9. **Citations**: JustDial / IndiaMART / Sulekha listings (Sulekha
   already ranks p1 for "rajkot airport advertising" — free listing =
   page-1 by proxy). Draft listing text, Mihir submits.
10. Add Ridham as GSC user (Settings → Users — needs his email).
11. Optional CI hardening: switch Hostinger deploy from password SSH to
    SSH key (kills the flaky-rsync class entirely). Mihir offered ~10
    min of clicks when ready.
12. Media production guide flows (Kling/Veo prompts A–H) still
    available for hero-grade AI b-roll if the client wants more film.

### Waiting on client data (CLAUDE.md §8 — unchanged)
- Exact pricing structure · full inventory map · partner contract
  terms · AAI contract specifics · company legal name + GST · tool
  budget · retainer payment terms.
