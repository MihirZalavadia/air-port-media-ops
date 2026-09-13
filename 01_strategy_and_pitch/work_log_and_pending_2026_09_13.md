# Session Handoff — 2026-09-13

## Restart prompt (paste this into the new session)
> Read CLAUDE.md and `01_strategy_and_pitch/work_log_and_pending_2026_09_13.md`. We're mid-way through rehabbing mukeshart.in's SEO (the domain had an escort/SEO-spam past — cleanup shipped, no Google penalty, 4 pages indexed). Pick up from the "Open — my side" and "Open — your clicks" lists below. Ask me what I want to tackle this session.

## Where things stand
- **Domain spam history handled.** mukeshart.in was an aftermarket domain (WordPress wedding site → escort/SEO spam farm 2024-25 → us). No manual action / no security issues. All spam URLs now **410 Gone** (root `.html` + `/YYYY/…` date paths), branded 404 restored. Full plan: `03_website/domain_spam_history_remediation_2026_09_07.md`.
- **Indexing:** 4 real pages indexed, 4 stuck (`/airport/`, `/contact/`, `/publicity/`, `/inventory/landmark-outdoor-boards/`) — pure authority-lag, NOT a bug. Spam bucket shrinking (33→26). Cure = citations + time. STOP clicking GSC "Validate Fix" (useless, causes the alarming screens).
- **Lead form:** endpoint works but Hostinger `mail()` silently drops email — rewired to authenticated SMTP (PHPMailer), **needs `MAIL_PASSWORD` secret to activate**. Until then leads are ONLY in `domains/mukeshart.in/leads/leads.jsonl` (hPanel File Manager — check it for missed real leads).
- **Recent ships (all live):** portrait hero films for Android (day = interim upscaled cut), team-card face-crop fix, QA batch (inventory canonicals, dead socials removed keep WhatsApp, www 301, security headers), SMTP lead fix, spam 410s.

## Open — my side (Claude, when you send inputs)
- Verify the 3 citation listing URLs point to `/airport/` (once you create them).
- Build a **disavow file** if you export GSC → Links → External links and it's spammy.
- Add real Instagram/Facebook/LinkedIn to footer + SeoSchema `sameAs` once profiles exist.
- Restore Ridham's LinkedIn once he shares the URL.

## Open — your clicks (priority order)
1. **Add 5 GitHub repo secrets** → redeploy → I test lead email end-to-end. Biggest gap.
   `MAIL_PASSWORD` (info@ mailbox pw), `ADMIN_PASSWORD_HASH`, `GH_CONTENT_TOKEN`, `SHEETS_WEBHOOK_URL`, `SHEETS_TOKEN`. Sheet guide: `05_crm_and_outreach/leads_google_sheet_setup.md`.
2. **Citations** — Justdial, IndiaMART, Sulekha. Copy: `03_website/citation_listings_ready_to_paste_2026_08_30.md`. (exact GBP name/addr/phone; link to /airport/)
3. **GSC Removals** — the 9 adult URLs (full list in the remediation doc).
4. **GBP completeness** — services, description, photos (`04_media_kit/assets/gbp_storefront_2026_08/`), reviews.
5. **Check `leads.jsonl`** in hPanel for any real leads missed while email was broken.
6. Real **daytime vertical clip** of the terminal (replaces interim day portrait hero).

## Later decision
Keep vs. move to a clean on-brand domain (e.g. mukeshairportmedia.in). No penalty + 4 pages indexed = rehab is viable; give it citations + 4-6 weeks. If still frozen, move — but never blanket-301 the spam domain onto a new one (transfers the bad rep). Framework in the remediation doc, Part D.
