export type ThemeId = "day" | "night";

export const AIRPORT_NAME = "Rajkot International Airport";
export const BRAND_DISPLAY_NAME = "Rajkot Airport Media x Mukesh Art";
export const CLIENT_PROOF_LINE = "Worked with 50+ national and international brands";
export const MAIN_OFFICE_ADDRESS =
  "Mukesh Art Main Office, PLOT NO. 71, SURVEY NO. 145, JAMBUDIYA, Morbi, Gujarat - 363642";

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
  /** Related photos used in the inventory hover gallery */
  gallery: string[];
  visualKind: "digital" | "static" | "backlit" | "journey" | "custom";
  source: string;
};

export type AirportConnection = {
  city: string;
  code: string;
  lon: number;
  lat: number;
  mins: string;
  labelDx?: number;
  labelDy?: number;
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// All paths resolve to /public/img/*.png at runtime.
const IMG = (name: string) => `${BASE_PATH}/img/${name}.png`;

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
    gallery: [IMG("pkg-01"), IMG("pkg-02"), IMG("pkg-03")],
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
    gallery: [IMG("pkg-02"), IMG("digital-full"), IMG("pkg-01")],
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
    gallery: [IMG("pkg-03"), IMG("backlit-sc"), IMG("backlit-ws")],
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
    gallery: [IMG("digital-full"), IMG("pkg-01"), IMG("pkg-02"), IMG("pkg-03")],
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
    gallery: [IMG("ad-2"), IMG("ad-3"), IMG("ad-5")],
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
    gallery: [IMG("ad-3"), IMG("ad-3-night"), IMG("ad-4")],
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
    gallery: [IMG("ad-4"), IMG("ad-3"), IMG("ad-6")],
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
    gallery: [IMG("ad-5"), IMG("ad-6"), IMG("ad-2")],
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
    gallery: [IMG("ad-6"), IMG("ad-5"), IMG("ad-4")],
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
    gallery: [IMG("backlit-sc"), IMG("pkg-03"), IMG("digital-full")],
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
    gallery: [IMG("backlit-ws"), IMG("backlit-sc"), IMG("pkg-02")],
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
    gallery: [IMG("plan"), IMG("digital-full"), IMG("ad-2")],
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

export const AIRPORT_HUB = {
  city: "Rajkot Intl",
  code: "RAJ",
  lon: 70.78,
  lat: 22.31,
} as const;

export const AIRPORT_CONNECTIONS: readonly AirportConnection[] = [
  { city: "Delhi", code: "DEL", lon: 77.10, lat: 28.57, mins: "1h 55m", labelDx: 34, labelDy: -34 },
  { city: "Mumbai", code: "BOM", lon: 72.87, lat: 19.09, mins: "1h 10m", labelDx: -88, labelDy: 58 },
  { city: "Navi Mumbai", code: "NMI", lon: 73.03, lat: 19.03, mins: "1h 10m", labelDx: -92, labelDy: 14 },
  { city: "Pune", code: "PNQ", lon: 73.86, lat: 18.52, mins: "1h 25m", labelDx: 58, labelDy: -10 },
  { city: "Hyderabad", code: "HYD", lon: 78.47, lat: 17.45, mins: "1h 45m", labelDx: 86, labelDy: 0 },
  { city: "Bengaluru", code: "BLR", lon: 77.67, lat: 13.20, mins: "2h 05m", labelDx: 82, labelDy: 38 },
] as const;

export const FEATURED_CLIENTS = [
  "Apple",
  "Google",
  "Vivo",
  "Oppo",
  "Jade Blue",
  "Simpolo",
  "Poojara Mobiles",
  "Radhika Jewellers",
] as const;

export const CAMPAIGN_TYPES = [
  "Events",
  "Campaigns",
  "Private Campaigns",
  "Corporate Campaigns",
  "Temporary Agency Campaigns",
] as const;

export const WHY_US = [
  {
    n: "01",
    t: "Owner-operated media",
    p: "The same team that sells the plan also understands sites, operations, approvals, and campaign delivery.",
  },
  {
    n: "02",
    t: "ASCO-led airport access",
    p: "Airport visits, checks, access windows, and protocol coordination are handled by the ASCO side with a ready ground team.",
  },
  {
    n: "03",
    t: "Relationship-first execution",
    p: "Brands get hospitality, clear follow-through, and a deeper business relationship beyond a one-time media transaction.",
  },
] as const;

export const POCS = [
  {
    name: "Mukesh Patel",
    role: "Founder / Owner",
    focus: "Commercial direction, trusted relationships, and owner-level campaign confidence.",
  },
  {
    name: "Mayur Patel",
    role: "Managing Partner",
    focus: "Business operations, client coordination, and campaign follow-through from first call to closure.",
  },
  {
    name: "Ridham Bhuva",
    role: "Airport ASCO & Partner/Manager",
    focus: "Airport protocol, visitor handling, access coordination, hospitality, and ground-team readiness.",
  },
];

export const FUTURE_MODULES = [
  "Qualified lead CRM for serious brands",
  "Live inventory and visit coordination",
  "Owner dashboard for relationship follow-ups",
  "Right-category outreach planning",
  "Proposal and media-kit library",
  "Booked-value tracking for CRM-led deals",
];
