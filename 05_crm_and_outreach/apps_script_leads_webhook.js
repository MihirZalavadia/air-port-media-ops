// Mukesh Art — website leads → Google Sheet webhook.
// Paste into Extensions → Apps Script of the "Website Leads" sheet,
// set TOKEN, then Deploy → New deployment → Web app (execute as Me,
// access: Anyone). Full walkthrough: leads_google_sheet_setup.md

// Must match the SHEETS_TOKEN GitHub secret exactly.
const TOKEN = "CHANGE_ME_TOKEN";

const HEADERS = [
  "Timestamp",
  "Name",
  "Phone",
  "Company",
  "Role",
  "Interest",
  "Message",
  "Source",
  "IP",
];

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: "bad json" });
  }

  if (!TOKEN || data.token !== TOKEN) {
    return reply({ ok: false, error: "auth" });
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  // first-ever row: write the header and freeze it
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }

  sheet.appendRow([
    data.at || new Date().toISOString(),
    data.name || "",
    "'" + (data.phone || ""), // leading ' keeps Sheets from mangling numbers
    data.company || "",
    data.role || "",
    data.interest || "",
    data.message || "",
    data.source || "",
    data.ip || "",
  ]);

  return reply({ ok: true });
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
