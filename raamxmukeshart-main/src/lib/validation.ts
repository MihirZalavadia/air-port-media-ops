// Shared form validation — used by the contact form and the inventory
// unlock modal so both enforce identical rules.

/**
 * Normalizes an Indian mobile number to its bare 10 digits.
 * Accepts "+91 98253 40818", "098253...", "9825340818", etc.
 * Returns null when the input is not a valid Indian mobile
 * (10 digits, starting 6–9).
 */
export function normalizeIndianMobile(raw: string): string | null {
    let digits = raw.replace(/\D/g, "");

    if (digits.length === 12 && digits.startsWith("91")) {
        digits = digits.slice(2);
    }

    if (digits.length === 11 && digits.startsWith("0")) {
        digits = digits.slice(1);
    }

    return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}
