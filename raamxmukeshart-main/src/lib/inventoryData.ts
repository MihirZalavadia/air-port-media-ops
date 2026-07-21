// Single source of truth for the inventory categories shown on the site.
// The DATA lives in /content/inventory.json so the admin panel
// (mukeshart.in/api/admin/) can edit it — every save commits the JSON and
// auto-deploys. Types + accessors stay here.
// Mirrors /04_media_kit/source/inventory_split_v1.md — update both together.
// Public pages show "Starting ₹X Lac" teasers only; exact rate cards live in
// the plan PDFs and are shared after a lead comes in.

import inventoryContent from "@/content/inventory.json";

export type InventoryPlan = {
    name: string;
    detail: string;
    price: string;
};

export type InventoryUnitGroup = {
    heading: string;
    note?: string;
    rows: {
        code: string;
        spec: string;
        location: string;
    }[];
};

export type InventoryCategory = {
    slug: string;
    code: string;
    filter: string;
    title: string;
    tagline: string;
    summary: string;
    cardText: string;
    leadLine: string;
    units: string;
    priceLine: string;
    plans: InventoryPlan[];
    unitGroups: InventoryUnitGroup[];
    whyPoints: string[];
    pdfHref: string;
    pdfReady: boolean;
};

export const inventoryCategories =
    inventoryContent.categories as InventoryCategory[];

export function getInventoryCategory(slug: string) {
    return inventoryCategories.find((category) => category.slug === slug);
}

// Buyer-safe airport facts (operator-confirmed 2026-05-25 — verify before final release)
export const airportFacts = inventoryContent.airportFacts as {
    value: string;
    label: string;
}[];
