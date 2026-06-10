import { NextRequest, NextResponse } from "next/server";

type LeadEventType =
  | "inventory_viewed"
  | "inventory_download_requested"
  | "contact_request";

const SHEET_BY_EVENT: Record<LeadEventType, string> = {
  inventory_viewed: "Just Viewed Inventory",
  inventory_download_requested: "Downloaded Inventory",
  contact_request: "Contact Requests",
};

function isLeadEventType(value: unknown): value is LeadEventType {
  return (
    value === "inventory_viewed" ||
    value === "inventory_download_requested" ||
    value === "contact_request"
  );
}

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!isLeadEventType(payload.eventType)) {
    return NextResponse.json(
      { ok: false, error: "Invalid lead event type" },
      { status: 400 },
    );
  }

  const body = {
    ...payload,
    sheetName: SHEET_BY_EVENT[payload.eventType],
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: true, persisted: false, reason: "LEADS_WEBHOOK_URL is not configured" },
      { status: 202 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, persisted: false, error: `Webhook returned ${response.status}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, persisted: true });
  } catch {
    return NextResponse.json(
      { ok: false, persisted: false, error: "Webhook request failed" },
      { status: 502 },
    );
  }
}
