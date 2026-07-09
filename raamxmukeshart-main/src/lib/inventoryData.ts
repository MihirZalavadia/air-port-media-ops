// Single source of truth for the inventory categories shown on the site.
// Mirrors /04_media_kit/source/inventory_split_v1.md — update both together.
// Public pages show "Starting ₹X Lac" teasers only; exact rate cards live in
// the plan PDFs and are shared after a lead comes in.

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

export const inventoryCategories: InventoryCategory[] = [
    {
        slug: "digital-screen-network",
        code: "DIG-NET",
        filter: "Digital Screens",
        title: "Digital Screen Network",
        tagline:
            "39 LED screens across the full passenger journey — arrival belts, security hold area, check-in, and exit.",
        summary:
            "Three LED packages covering the full passenger journey — arrival belts, security hold area, check-in, and exit. 10-second creative in a 2-minute loop.",
        cardText:
            "39 LED screens across arrival, security hold, check-in, and exit — one loop, full journey coverage.",
        leadLine:
            "Best for brands that want motion creative, flexible scheduling, and multiple creatives within one booked slot.",
        units: "39 LED Screens",
        priceLine: "Starting ₹2 Lac/mo",
        plans: [
            {
                name: "Package 1",
                detail: "18 × 8'×3' horizontal LED · Arrival belts + SHA gates",
                price: "Starting ₹4 Lac/mo",
            },
            {
                name: "Package 2",
                detail:
                    "7 large-format horizontal LED · Check-in, X-ray, mezzanine, exit",
                price: "Starting ₹2 Lac/mo",
            },
            {
                name: "Package 3",
                detail:
                    "14 vertical LED (75\" & 65\") · Check-in, cafés, lounges, belts",
                price: "Starting ₹3 Lac/mo",
            },
            {
                name: "All-Digital Bundle",
                detail: "All 39 screens · Full passenger journey",
                price: "Starting ₹9 Lac/mo",
            },
        ],
        unitGroups: [
            {
                heading: "Package 1 — 18-unit horizontal loop",
                note: "8'×3' horizontal LED · 10-sec slot · 2-min cycle",
                rows: [
                    { code: "AD 12 · AD 14", spec: "8'×3' LED", location: "SHA Ground Floor · Gates 1–2" },
                    { code: "AD 19 · AD 20 · AD 21", spec: "8'×3' LED", location: "SHA First Floor · Gates 4–6" },
                    { code: "AD 22", spec: "8'×3' LED", location: "SHA First Floor · between Gates 5–6" },
                    { code: "AD 33 · AD 34 · AD 38", spec: "8'×3' LED", location: "Arrival · Luggage Belt 1" },
                    { code: "AD 35 · AD 36 · AD 37", spec: "8'×3' LED", location: "Arrival · Luggage Belt 2" },
                ],
            },
            {
                heading: "Package 2 — 7-unit large format",
                note: "8'×4' horizontal LED (one 8'×3') · first-touch and last-touch zones",
                rows: [
                    { code: "AD 8", spec: "8'×4' LED", location: "Security check-in · near X-ray" },
                    { code: "AD 9", spec: "8'×4' LED", location: "Security check-in · near Indigo counter" },
                    { code: "AD 29 · AD 30", spec: "8'×4' LED", location: "Mezzanine Arrival" },
                    { code: "AD 31 · AD 32", spec: "8'×4' LED", location: "Arrival Ground Floor · post-escalator" },
                    { code: "AD 41", spec: "8'×3' LED", location: "Arrival Ground Floor · near exit gate" },
                ],
            },
            {
                heading: "Package 3 — 14-unit vertical display",
                note: "75\" and 65\" portrait screens in high-dwell pause zones",
                rows: [
                    { code: "AD 10", spec: "75\" vertical · both-side", location: "Departure check-in · SHA entry" },
                    { code: "AD 16", spec: "75\" vertical · both-side", location: "SHA Ground Floor · escalator" },
                    { code: "AD 23", spec: "75\" vertical · both-side", location: "SHA First Floor · Jet Set Café" },
                    { code: "AD 24", spec: "75\" vertical · both-side", location: "SHA First Floor · Synergy Lounge" },
                    { code: "AD 43", spec: "65\" vertical", location: "SHA Ground Floor · Gates 1–2" },
                    { code: "AD 44 · AD 45 · AD 46", spec: "65\" vertical", location: "SHA First Floor · gate sitting areas" },
                    { code: "AD 47 · AD 48", spec: "65\" vertical", location: "Arrival Ground Floor · luggage belt" },
                ],
            },
        ],
        whyPoints: [
            "10-second creative repeating every 2 minutes inside each package loop",
            "Multiple creatives possible within one booked slot, subject to scheduling and approval",
            "Live or scheduled creative updates can be discussed for eligible screens",
            "Every screen creative is approval-routed through the operator — no rogue inventory",
        ],
        pdfHref: "/downloads/mukesh_airport_media_digital_screen_network_v1.pdf",
        pdfReady: false,
    },
    {
        slug: "landmark-outdoor-boards",
        code: "OUT-LMK",
        filter: "Outdoor Boards",
        title: "Landmark Outdoor Boards",
        tagline:
            "Large-format frontlit boards on the city side and airport approach — visible before anyone enters the terminal.",
        summary:
            "Large-format frontlit boards on the city side and airport approach — seen by every passenger, dropper, and taxi entering the airport.",
        cardText:
            "Landmark frontlit boards on the city side and approach road — seen before anyone enters the terminal.",
        leadLine:
            "Best for real estate, jewellery, hospitals, and auto — categories that buy landmark visibility.",
        units: "5 Frontlit Boards",
        priceLine: "Starting ₹6 Lac/mo",
        plans: [
            {
                name: "AD-2 Unipole",
                detail: "30'×10' frontlit unipole · City side, main approach",
                price: "Starting ₹6 Lac/mo",
            },
            {
                name: "AD-3 to AD-6",
                detail: "Frontlit boards · Airport approach & exterior",
                price: "On request",
            },
        ],
        unitGroups: [
            {
                heading: "Frontlit board inventory",
                note: "Static frontlit · 24/7 visibility · printing & mounting billed separately",
                rows: [
                    { code: "AD 2", spec: "30'×10' frontlit unipole", location: "City side · main airport approach" },
                    { code: "AD 3", spec: "Frontlit board", location: "Airport approach & exterior · specs in plan PDF" },
                    { code: "AD 4", spec: "Frontlit board", location: "Airport approach & exterior · specs in plan PDF" },
                    { code: "AD 5", spec: "Frontlit board", location: "Airport approach & exterior · specs in plan PDF" },
                    { code: "AD 6", spec: "Frontlit board", location: "Airport approach & exterior · specs in plan PDF" },
                ],
            },
        ],
        whyPoints: [
            "Seen by every passenger, dropper, and taxi on the airport approach — not just flyers",
            "Landmark scale: the AD-2 unipole is the largest single canvas in the inventory",
            "Static permanence — your creative holds the site 24/7 with no loop sharing",
            "Creative replacement coordinated end-to-end, including printing and mounting",
        ],
        pdfHref: "/downloads/mukesh_airport_media_landmark_outdoor_boards_v1.pdf",
        pdfReady: false,
    },
    {
        slug: "in-terminal-backlit-boards",
        code: "BLT-TRM",
        filter: "Backlit Boards",
        title: "In-Terminal Backlit Boards",
        tagline:
            "Always-on static backlits at the highest-dwell chokepoints inside the terminal.",
        summary:
            "Always-on static backlits at the highest-dwell chokepoints — security clearance, the laptop work station, and the security hold area.",
        cardText:
            "Always-on backlit boards at security clearance and work zones — no rotation, no sharing the canvas.",
        leadLine:
            "Best for BFSI, healthcare, and education — trust categories that want 24/7 presence with no loop sharing.",
        units: "3 Backlit Placements",
        priceLine: "Starting ₹1.5 Lac/mo",
        plans: [
            {
                name: "AD-15 SHA Backlit",
                detail: "8'×3' fabric backlit · SHA Ground Floor",
                price: "Starting ₹1.5 Lac/mo",
            },
            {
                name: "Security Clearance",
                detail: "Static backlit · Security hold entry",
                price: "On request",
            },
            {
                name: "Laptop Workstation",
                detail: "Static backlit · Work station zone",
                price: "On request",
            },
        ],
        unitGroups: [
            {
                heading: "Backlit placement inventory",
                note: "Fabric backlit · always illuminated · no rotation, no sharing",
                rows: [
                    { code: "AD 15", spec: "8'×3' fabric backlit", location: "SHA Ground Floor" },
                    { code: "Security Clearance", spec: "Static backlit", location: "Security hold entry — every departing passenger passes it" },
                    { code: "Laptop Workstation", spec: "Static backlit", location: "Work station zone — long-dwell business travellers" },
                ],
            },
        ],
        whyPoints: [
            "Positioned at chokepoints every departing passenger must pass — not optional walkways",
            "Always visible: no 2-minute rotation, no sharing the canvas with other brands",
            "35–50 minutes of average dwell time inside security works in your favour",
            "Backlit fabric keeps the creative premium and legible day and night",
        ],
        pdfHref: "/downloads/mukesh_airport_media_interminal_backlit_boards_v1.pdf",
        pdfReady: false,
    },
    {
        slug: "hybrid-journey-plans",
        code: "HYB-PLN",
        filter: "Hybrid Plans",
        title: "Hybrid Journey Plans",
        tagline:
            "Digital motion plus static permanence in one buy — the whole airport working as one canvas.",
        summary:
            "Digital motion plus static permanence in one buy — curated combinations that bookend the passenger journey from approach road to arrival exit.",
        cardText:
            "Curated digital + static combinations that bookend the passenger journey in a single buy.",
        leadLine:
            "Best for launches and market-entry campaigns that need the whole airport working as one canvas.",
        units: "3 Curated Plans",
        priceLine: "Plan pricing on request",
        plans: [
            {
                name: "Launch Plan",
                detail: "Package 2 bookend screens + AD-15 backlit",
                price: "On request",
            },
            {
                name: "Dominance Plan",
                detail: "All 39 digital screens + AD-2 unipole",
                price: "On request",
            },
            {
                name: "Arrival Plan",
                detail: "Package 1 arrival loop + security clearance backlit",
                price: "On request",
            },
        ],
        unitGroups: [
            {
                heading: "How the plans are built",
                note: "Each plan combines digital loops with static permanence — compositions can be tailored to the campaign",
                rows: [
                    { code: "Launch Plan", spec: "7 LED + 1 backlit", location: "Bookends the journey: check-in, X-ray, mezzanine, exit + SHA backlit" },
                    { code: "Dominance Plan", spec: "39 LED + unipole", location: "Full digital network + the landmark city-side unipole" },
                    { code: "Arrival Plan", spec: "18 LED + 1 backlit", location: "Arrival belts + SHA gates + security clearance backlit" },
                ],
            },
        ],
        whyPoints: [
            "One buy covers approach road, check-in, security, gates, belts, and exit",
            "Motion for storytelling, static for permanence — the formats reinforce each other",
            "Roughly 12–15 surface impressions per passenger on a full-journey plan",
            "Compositions and commercials are tailored per campaign — talk to us with your brief",
        ],
        pdfHref: "/downloads/mukesh_airport_media_hybrid_journey_plans_v1.pdf",
        pdfReady: false,
    },
];

export function getInventoryCategory(slug: string) {
    return inventoryCategories.find((category) => category.slug === slug);
}

// Buyer-safe airport facts (operator-confirmed 2026-05-25 — verify before final release)
export const airportFacts = [
    { value: "1.25–1.30 L", label: "Passenger visits / month" },
    { value: "4,200+", label: "Passenger visits / day" },
    { value: "28", label: "Flight movements / day" },
    { value: "35–50 min", label: "Avg. dwell inside security" },
];
