// Fire-and-forget lead submission to the PHP endpoint. Never blocks or
// breaks the calling flow: on localhost (no PHP) or any failure it fails
// silently — the form's existing behavior (WhatsApp redirect / unlock)
// continues regardless.

export type LeadPayload = {
    name: string;
    phone: string;
    company?: string;
    designation?: string;
    interest?: string;
    message?: string;
    /** which form/page produced the lead */
    source: string;
    /** honeypot — always empty for humans */
    website?: string;
};

export function submitLead(payload: LeadPayload): void {
    try {
        // keepalive lets the request complete even if we navigate right after
        void fetch("/api/lead.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            keepalive: true,
        }).catch(() => {});
    } catch {
        // ignore — lead capture must never break the UX
    }
}
