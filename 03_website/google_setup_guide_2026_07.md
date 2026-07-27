# Google Search Console + Business Profile — click-by-click (2026-07-23)

Current stack: domain **mukeshart.in** on **Hostinger** (DNS + hosting),
site auto-deploys from GitHub. Supersedes the GSC/GBP parts of
`domain_gbp_setup_guide.md` (which assumed mukeshart.com + Netlify).

---

## Guide 1 — Google Search Console (~15 min, do first)

**What it does:** tells Google to index the site fast, and shows you which
searches bring visitors.

1. Open **search.google.com/search-console** → sign in with the Google
   account that should own this (use the business one, not personal —
   you can add Ridham as a user later).
2. Click **Add property**. Two boxes appear — use the LEFT one
   (**Domain**). Type: `mukeshart.in` → Continue.
3. Google shows a **TXT record** like
   `google-site-verification=AbC123…`. Click Copy.
4. New tab → **hpanel.hostinger.com** → **Domains → mukeshart.in →
   DNS / Nameservers** → **Add record**:
   - Type: `TXT`
   - Name: `@`
   - TXT value: paste the `google-site-verification=…` string
   - TTL: leave default → **Add record**.
5. Back in Search Console → **Verify**. If it fails, wait 10–15 min and
   press Verify again (DNS propagation) — don't re-add the record.
6. Once verified: left menu **Sitemaps** → enter `sitemap.xml` →
   **Submit**. Status should turn "Success" within a day.
7. Left menu **URL Inspection** → paste each of these, and for each click
   **Request indexing** (takes ~1 min each):
   - `https://mukeshart.in/`
   - `https://mukeshart.in/airport/`
   - `https://mukeshart.in/publicity/`
   - `https://mukeshart.in/contact/`
   (Do NOT request /partners/ — it is deliberately kept out of Google.)
8. **Settings → Users and permissions → Add user** → Ridham's email →
   Full. Done.

**Check back after 3–4 days:** Performance tab shows the actual search
phrases people used. That report = what to tell people to search.

---

## Guide 2 — Google Business Profile (~30 min + verification wait)

**What it does:** the Maps card with phone/photos/reviews that appears
when someone searches the business name. This is what makes
"search Mukesh Airport Media" work in conversation.

### Create

1. Open **business.google.com** → same Google account → **Add business**.
2. Business name: **Mukesh Art** — Google's rules require the real
   business name only (no keyword stuffing in the name; "airport
   advertising" goes in the category/description/services instead).
3. Business category: **Advertising agency** (type it, pick from the
   dropdown). Secondary categories can be added later: *Media company*.
4. "Do you want to add a location customers can visit?" → **No** (clients
   don't walk in) → it becomes a **service-area business**. Add service
   areas: **Rajkot, Morbi, Jamnagar, Gujarat** (add all it offers).
5. Contact: phone **+91 98253 40818** · website **https://mukeshart.in**.
6. Finish the wizard (skip ads offers).

### Verify

7. Google picks the method — in India this is usually **video
   verification**: it asks for a short live video showing the workplace,
   signage/hoarding with the business name, and proof of operation
   (letterhead, GST certificate, or a branded board). Have Mukesh sir or
   Ridham do this from the office/godown — takes 5 minutes on a phone.
   Fallback methods: phone call code or postcard. Review can take up to
   ~5 business days after submitting.

### Fill everything (after the "verified" email)

8. **Description** (750 chars): airport advertising media partner at
   Rajkot International Airport (Hirasar) — 39 LED screens, backlit
   boards, landmark outdoor unipoles, and trolley branding, working with
   the Airports Authority of India; outdoor hoardings and OOH marketing
   across Rajkot, Morbi and Saurashtra since 2010 under Mukesh Publicity.
9. **Services** (under the Advertising agency category, add each):
   Airport advertising · Airport branding · Digital screen advertising ·
   Backlit board advertising · Outdoor hoardings / unipoles · Airport
   trolley branding · Media planning.
   (Full client keyword list + where each one lives:
   `seo_target_keywords_2026_07.md`.)
10. **Hours:** Mon–Sat 10:00–19:00 (or whatever Mukesh sir keeps).
11. **Photos:** upload 8–12 from `/updated images/` (boards, screens,
    terminal shots) + the dusk unipole video (under 30s = allowed).
    Set the AD-2 unipole shot as cover.
12. **First post:** "Rajkot Airport advertising inventory now open for
    2026–27 — digital screens from ₹2 Lac/mo. mukeshart.in/airport/".

### Reviews — the ranking lever

13. GBP dashboard → **Ask for reviews** → copy the short `g.page/r/…`
    link.
14. WhatsApp it to 5–10 friendly partners (ITACA, Poojara, Radhika…):
    *"We'd value a one-line Google review of our airport media service —
    takes 30 seconds: [link]"*. Reviews mentioning "airport advertising
    Rajkot" naturally are gold. Reply to every review from the dashboard.

### Monthly habit (5 min)

One new photo or post each month + reply to reviews — Google rewards
active profiles.

---

## After both are done

Tell me — I'll verify the TXT record, check the sitemap status from
outside, and confirm the schema on the site matches the GBP listing
(name/phone/address consistency is a local-ranking factor).

**The three phrases to tell people** (works fully once GBP is live):
1. "**Mukesh Airport Media**" (brand)
2. "**Rajkot airport advertising**" (category)
3. "**mukeshart.in**" (direct)
