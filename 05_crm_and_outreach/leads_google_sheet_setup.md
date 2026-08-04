# Website Leads → Shared Google Sheet (setup, 2026-08-04)

Every lead from the site (contact form AND inventory unlock modal)
already hits `lead.php`, which logs to the server and emails
info@mukeshart.in. This adds a third destination: a **live row in a
shared Google Sheet** that Ridham/Mukesh sir can watch from their phone.

```
form submit → lead.php → 1) leads.jsonl (server log)
                         2) email info@mukeshart.in
                         3) POST → Apps Script webhook → Google Sheet row
```

The webhook URL + token live outside the webroot (`lead_config.php`),
provisioned by the deploy workflow from GitHub secrets — same pattern as
the admin console. If the Sheet is ever slow or broken, leads still land
in the log and email; the Sheet step can never break the form.

---

## One-time setup (~15 min, needs art.mayurpatel@gmail.com login)

### 1. Create the Sheet

1. Open **sheets.google.com** (logged in as art.mayurpatel@gmail.com) →
   Blank spreadsheet → name it **"Mukesh Art — Website Leads"**.
2. Share → add Ridham (and whoever else) as **Viewer** (or Editor if
   they'll add follow-up notes columns).

### 2. Add the Apps Script

1. In the Sheet: **Extensions → Apps Script**.
2. Delete the placeholder code, paste the whole script from
   `apps_script_leads_webhook.js` (next to this file).
3. In the script, replace `CHANGE_ME_TOKEN` with a random string
   (e.g. from passwordsgenerator.net — 20+ chars, letters+digits only).
   Note it down; you need the same string in step 4.
4. **Deploy → New deployment** → gear icon → type **Web app**:
   - Description: `leads webhook`
   - Execute as: **Me**
   - Who has access: **Anyone**  ← required so the website server can
     POST; the token is what keeps strangers out.
5. Click Deploy → **Authorize** with the same Google account (it will
   warn "unverified app" — Advanced → Go to project → Allow; it's your
   own script).
6. Copy the **Web app URL** (`https://script.google.com/macros/s/…/exec`).

### 3. Add the GitHub secrets

github.com/MihirZalavadia/air-port-media-ops → Settings → Secrets and
variables → Actions → **New repository secret**, twice:

| Name | Value |
|---|---|
| `SHEETS_WEBHOOK_URL` | the Web app URL from step 2.6 |
| `SHEETS_TOKEN` | the random string from step 2.3 |

### 4. Redeploy + test

1. Repo → Actions → **Deploy Website To Hostinger** → Run workflow.
2. After the green tick: submit a test lead on mukeshart.in/contact/.
3. Within ~10 seconds a new row should appear in the Sheet. Done.

---

## What each row contains

| Column | From |
|---|---|
| Timestamp | server time of submission |
| Name / Phone / Company / Role | form fields |
| Interest | selected media type, or inventory page code |
| Message | free text |
| Source | `contact-form` or `inventory-unlock` |
| IP | submitter's IP (spam triage) |

## Maintenance notes

- **Editing the script later:** after any code change you must
  **Deploy → Manage deployments → edit (pencil) → New version** — saving
  alone does NOT update the live URL.
- **Rotating the token:** change it in the script, update the
  `SHEETS_TOKEN` GitHub secret, re-run the deploy.
- The Sheet is append-only from the site; sorting/filtering/notes by
  humans never conflict with new rows.
