// Draft website data only. No fake testimonials, client logos, GST details,
// legal claims, or final contact details are included until owner approval.

export type ThemeId = "day" | "night";
export type BrandId = "classic" | "saurashtra";
export type PaletteId = `${BrandId}-${ThemeId}`;

export type Palette = {
  id: PaletteId;
  brandId: BrandId;
  themeId: ThemeId;
  name: string;
  note: string;
  swatches: {
    deep: string;
    accent: string;
    surface: string;
    ink: string;
  };
};

export const PALETTES: Palette[] = [
  {
    id: "classic-day",
    brandId: "classic",
    themeId: "day",
    name: "Day Takeoff",
    note: "Bright airport daylight. Warm ivory, brass, forest green. Strong default for brand managers.",
    swatches: { deep: "#1F3B2D", accent: "#B8863B", surface: "#FBF8EF", ink: "#14110D" },
  },
  {
    id: "classic-night",
    brandId: "classic",
    themeId: "night",
    name: "Night Runway",
    note: "Dark runway, amber lights, charcoal. High-value campaign energy.",
    swatches: { deep: "#2F5742", accent: "#E0AA52", surface: "#1A1814", ink: "#F4ECD8" },
  },
  {
    id: "saurashtra-day",
    brandId: "saurashtra",
    themeId: "day",
    name: "Saurashtra Sunrise",
    note: "Warm ivory, oxblood, brass, dark brown. Local business-house trust at daylight.",
    swatches: { deep: "#3A241F", accent: "#B8863B", surface: "#FFF9F0", ink: "#241A16" },
  },
  {
    id: "saurashtra-night",
    brandId: "saurashtra",
    themeId: "night",
    name: "Saurashtra Midnight",
    note: "Deep brown ink, brighter oxblood, warm amber. Night-airport identity.",
    swatches: { deep: "#1A0E0A", accent: "#E0AA52", surface: "#251714", ink: "#F4E9D6" },
  },
];

export const BRAND_NAMES = [
  {
    name: "Rajkot Airport Marketing",
    note: "Sharp, modern, and sales-friendly. Recommended for the public pitch site.",
  },
  {
    name: "Rajkot Airport Media",
    note: "Clear, direct, credible. Strong if owners want the safest public name.",
  },
  {
    name: "RAM Airport Media",
    note: "Good monogram potential if owners want a branded operating system later.",
  },
];

export const LOGO_CONCEPTS = [
  {
    id: "rajkot",
    name: "Rajkot Airport Marketing",
    label: "RA",
    motif: "Runway line cutting through a compact RA mark",
    note: "Best balance of modern, memorable, and easy to place on website headers.",
  },
  {
    id: "ram",
    name: "Rajkot Airport Media",
    label: "RAM",
    motif: "Monogram with a takeoff stroke",
    note: "More formal and premium for agencies, media kits, and B2B proposals.",
  },
] as const;

export const TAGLINES = [
  "Own the airport moment.",
  "Rajkot's runway for brand recall.",
  "Where Saurashtra's premium audience meets your brand.",
  "A premium route to Saurashtra's travellers.",
  "Be seen where decisions travel.",
];

export type InventoryCategory =
  | "Digital Packages"
  | "Static Boards"
  | "Passenger Journey"
  | "Custom Plans";

export type InventoryItem = {
  code: string;
  title: string;
  category: InventoryCategory;
  format: string;
  unitCount: string;
  location: string;
  summary: string;
  leadLine: string;
  zones: string[];
  unitRefs: string[];
  /** Primary photo (used in day mode, and as fallback in night mode) */
  image: string;
  /** Optional dedicated night-mode photo */
  imageNight?: string;
  visualKind: "digital" | "static" | "backlit" | "journey" | "custom";
  source: string;
};

// All paths resolve to /public/img/*.png at runtime
const IMG = (name: string) => `/img/${name}.png`;

export const INVENTORY: InventoryItem[] = [
  {
    code: "PKG-01",
    title: "Arrival + SHA Digital Loop",
    category: "Digital Packages",
    format: "8 ft x 3 ft horizontal LED loop",
    unitCount: "18 units",
    location: "Arrival belts and Security Hold Area gates",
    summary:
      "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
    leadLine:
      "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
    zones: [
      "SHA Ground Floor near Gates 1 and 2",
      "SHA First Floor near Gates 4, 5, and 6",
      "Arrival Belt 1 and Belt 2",
    ],
    unitRefs: ["AD_12", "AD_14", "AD_19", "AD_20", "AD_21", "AD_22", "AD_33-38"],
    image: IMG("pkg-01"),
    visualKind: "digital",
    source: "Package - 1 (18 unit).pdf",
  },
  {
    code: "PKG-02",
    title: "Large-Format Digital Loop",
    category: "Digital Packages",
    format: "6 units at 8 ft x 4 ft plus 1 unit at 8 ft x 3 ft",
    unitCount: "7 units",
    location: "Departure, mezzanine arrival, and arrival ground floor",
    summary:
      "Bigger digital canvases placed around first-touch and last-touch passenger movement.",
    leadLine:
      "Best for premium brands that want fewer surfaces but stronger creative impact per screen.",
    zones: [
      "Departure security check-in near X-ray",
      "Near Indigo check-in",
      "Mezzanine arrival and arrival ground floor",
      "Near airport exit gate",
    ],
    unitRefs: ["AD_8", "AD_9", "AD_29", "AD_30", "AD_31", "AD_32", "AD_41"],
    image: IMG("pkg-02"),
    visualKind: "digital",
    source: "Package-2 (7 UNIT).pdf",
  },
  {
    code: "PKG-03",
    title: "Vertical Display Network",
    category: "Digital Packages",
    format: "8 units at 75 inch plus 6 units at 65 inch vertical displays",
    unitCount: "14 units",
    location: "Check-in, SHA, cafes, lounges, gates, and arrival",
    summary:
      "Portrait display network for product-led campaigns and eye-level airport visibility.",
    leadLine:
      "Good for fashion, jewellery, real estate, retail, hospitality, healthcare, and education.",
    zones: [
      "Departure check-in near SHA entry",
      "SHA Ground near escalator",
      "Jet Set Cafe and Synergy Health Lounge",
      "Gate seating and arrival luggage belt",
    ],
    unitRefs: ["AD_10", "AD_16", "AD_23", "AD_24", "AD_43-48"],
    image: IMG("pkg-03"),
    visualKind: "digital",
    source: "Package-3 14 UNIT.pdf",
  },
  {
    code: "DIGITAL-FULL",
    title: "Full-Airport Digital Bundle",
    category: "Passenger Journey",
    format: "All digital formats across Package 1, 2, and 3",
    unitCount: "39 digital surfaces",
    location: "Full airport journey",
    summary:
      "A complete digital campaign path from check-in to gate areas and arrival movement.",
    leadLine:
      "Built for brands that want complete airport ownership instead of one-zone visibility.",
    zones: [
      "Departure entry and check-in",
      "Security Hold Area",
      "Cafe, lounge, and gate zones",
      "Arrival belt and exit movement",
    ],
    unitRefs: ["PKG-01", "PKG-02", "PKG-03"],
    image: IMG("digital-full"),
    visualKind: "journey",
    source: "deck_a_digital_signage_v1.md",
  },
  {
    code: "AD-2",
    title: "City-Side Front-Lit Board",
    category: "Static Boards",
    format: "30 ft x 10 ft front-lit board",
    unitCount: "1 board",
    location: "Terminal city-side approach",
    summary:
      "Large format presence before the terminal experience, suited for sustained outdoor recall.",
    leadLine:
      "Use for premium regional campaigns where the approach road needs a strong brand signal.",
    zones: ["Airport approach road", "Terminal city-side visibility"],
    unitRefs: ["AD-2"],
    image: IMG("ad-2"),
    visualKind: "static",
    source: "AD-2 AIRPORT FRONT LIT BOARD.pdf",
  },
  {
    code: "AD-3",
    title: "Departure Entry Front-Lit Board",
    category: "Static Boards",
    format: "30 ft x 10 ft front-lit board",
    unitCount: "1 board",
    location: "Terminal city-side departure entry",
    summary:
      "Departure-side static inventory for brands that want road-facing airport visibility.",
    leadLine:
      "Useful for premium awareness campaigns, launch bursts, and local market dominance.",
    zones: ["Departure-side approach", "City-side terminal movement"],
    unitRefs: ["AD-3"],
    image: IMG("ad-3"),
    imageNight: IMG("ad-3-night"),
    visualKind: "static",
    source: "AD - 3 AIRPORT FRONT LIT BOARD.pdf",
  },
  {
    code: "AD-4",
    title: "Departure Route Front-Lit Board",
    category: "Static Boards",
    format: "30 ft x 10 ft front-lit board",
    unitCount: "1 board",
    location: "Terminal city-side departure route",
    summary:
      "Static outdoor visibility for frequent terminal traffic and campaign recall.",
    leadLine:
      "Good for brands that want a physical airport presence beyond digital screens.",
    zones: ["Departure route", "Airport road-facing media"],
    unitRefs: ["AD-4"],
    image: IMG("ad-4"),
    visualKind: "static",
    source: "AD - 4 AIRPORT FRONTLIT BOARD.pdf",
  },
  {
    code: "AD-5",
    title: "Arrival Exit Front-Lit Board",
    category: "Static Boards",
    format: "30 ft x 10 ft front-lit board",
    unitCount: "1 board",
    location: "Terminal city-side arrival exit",
    summary:
      "Arrival-side static media for incoming passenger and pickup/drop traffic.",
    leadLine:
      "Strong for hospitality, real estate, retail, auto, and destination-led campaigns.",
    zones: ["Arrival exit", "Pickup/drop movement"],
    unitRefs: ["AD-5"],
    image: IMG("ad-5"),
    visualKind: "static",
    source: "AD - 5 AIRPORT FRONTLIT BOARD.pdf",
  },
  {
    code: "AD-6",
    title: "Arrival Route Front-Lit Board",
    category: "Static Boards",
    format: "30 ft x 10 ft front-lit board",
    unitCount: "1 board",
    location: "Terminal city-side arrival route",
    summary:
      "High-visibility outdoor board for brands targeting arriving passengers and local pickup traffic.",
    leadLine:
      "Use as a companion board with AD-5 for a stronger arrival-side story.",
    zones: ["Arrival route", "Airport exit movement"],
    unitRefs: ["AD-6"],
    image: IMG("ad-6"),
    visualKind: "static",
    source: "AD-6 AIRPORT  FRONT LIT BOARD.pdf",
  },
  {
    code: "BACKLIT-SC",
    title: "Security Clearance Backlit Media",
    category: "Passenger Journey",
    format: "Static backlit airport unit",
    unitCount: "Selected unit",
    location: "Security clearance zone",
    summary:
      "Backlit indoor visibility for high-dwell movement where passengers are attentive and close to the media.",
    leadLine:
      "Works well as a premium reminder layer with digital screens or static boards.",
    zones: ["Security clearance", "Passenger processing flow"],
    unitRefs: ["Security clearance backlit"],
    image: IMG("backlit-sc"),
    visualKind: "backlit",
    source: "STATIC BACKLIT SECURITY CLEARANCE.pdf",
  },
  {
    code: "BACKLIT-WS",
    title: "Laptop Workstation Backlit Media",
    category: "Passenger Journey",
    format: "Static backlit workstation unit",
    unitCount: "Selected unit",
    location: "Laptop workstation area",
    summary:
      "A close-view indoor placement suited to business travellers and high-intent dwell time.",
    leadLine:
      "Use for finance, SaaS, education, premium retail, and business-service categories.",
    zones: ["Laptop workstation", "Indoor dwell zone"],
    unitRefs: ["Laptop workstation backlit"],
    image: IMG("backlit-ws"),
    visualKind: "backlit",
    source: "static backlit Laptop Work Station.pdf",
  },
  {
    code: "PLAN",
    title: "Custom Airport Campaign Plan",
    category: "Custom Plans",
    format: "Digital, static, and backlit recommendation",
    unitCount: "Built per campaign",
    location: "Matched to audience, timing, and objective",
    summary:
      "A consultative package when the buyer knows the campaign goal but needs help choosing inventory.",
    leadLine:
      "The right starting point for serious brands that need fit, availability, and rollout clarity.",
    zones: ["Media mix planning", "Campaign window matching", "Owner-side coordination"],
    unitRefs: ["Custom"],
    image: IMG("plan"),
    visualKind: "custom",
    source: "Planning layer",
  },
];

export const AIRPORT_STATS = [
  { value: "1.25-1.30L", label: "Passenger visits/month" },
  { value: "4,200-4,400", label: "Passenger visits/day" },
  { value: "28", label: "Daily flight movements" },
  { value: "2L+", label: "Starting inventory range" },
];

export const POCS = [
  {
    name: "Mukesh Patel",
    role: "Founder / Owner",
    focus: "Commercial direction, long-term relationships, and owner-level approvals.",
  },
  {
    name: "Mayur Patel",
    role: "Managing Partner",
    focus: "Client coordination, campaign follow-through, and business operations.",
  },
  {
    name: "Ridham Bhuva",
    role: "Airport ASCO & Partner",
    focus: "Airport protocol, site visits, approvals, and operations coordination.",
  },
];

export const FUTURE_MODULES = [
  "Selected-user CRM for serious leads",
  "Inventory maintenance for each plan",
  "Owner dashboard for follow-ups and booked value",
  "Outreach tracker for the right company categories",
  "Proposal and media-kit library",
  "Campaign value attribution for CRM-originated deals",
];
