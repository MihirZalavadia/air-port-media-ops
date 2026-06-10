/* Airport media site — demo data (plain JS, exposed on window.SITE).
   Mirrors lib/data.ts from the source repo, with the redesign updates:
   full "Rajkot International Airport" naming, connectivity routes,
   public client list, campaign types, and corrected POC roles. */
window.SITE = {
  IMG: (name) => `../../assets/img/${name}.png`,

  AIRPORT_STATS: [
    { value: "1.25–1.30L", label: "Passenger visits / month" },
    { value: "4,200–4,400", label: "Passenger visits / day" },
    { value: "28", label: "Daily flight movements" },
    { value: "₹2L+", label: "Starting inventory range" },
  ],

  // NEW — connectivity routes from the Rajkot hub
  AIRPORT_CONNECTIONS: [
    { city: "Delhi", code: "DEL" },
    { city: "Mumbai", code: "BOM" },
    { city: "Pune", code: "PNQ" },
    { city: "Hyderabad", code: "HYD" },
    { city: "Bengaluru", code: "BLR" },
  ],

  // NEW — approved public-facing clients only
  FEATURED_CLIENTS: [
    "Apple", "Google", "Vivo", "Oppo",
    "Jade Blue", "Simpolo", "Poojara Mobiles", "Radhika Jewellers",
  ],

  // NEW — campaign category chips
  CAMPAIGN_TYPES: [
    "Events", "Campaigns", "Private Campaigns",
    "Corporate Campaigns", "Temporary Agency Campaigns",
  ],

  WHY_US: [
    { n: "01", t: "Local OOH execution", p: "On-ground production, mounting, and rollout strength built over years of Saurashtra outdoor campaigns." },
    { n: "02", t: "Airport protocol", p: "ASCO coordination, site access, and approvals handled the way only an on-site operating partner can." },
    { n: "03", t: "Faster decisions", p: "Creative and media understanding in one team, so campaign windows close without agency ping-pong." },
  ],

  CATEGORIES: ["Digital Packages", "Static Boards", "Passenger Journey", "Custom Plans"],

  INVENTORY: [
    {
      code: "PKG-01", title: "Arrival + SHA Digital Loop", category: "Digital Packages",
      format: "8 ft x 3 ft horizontal LED loop", units: "18 units",
      location: "Arrival belts & Security Hold Area gates",
      summary: "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
      image: "pkg-01", feature: true,
    },
    {
      code: "PKG-03", title: "Vertical Display Network", category: "Digital Packages",
      format: "8× 75in + 6× 65in vertical displays", units: "14 units",
      location: "Check-in, SHA, cafes, lounges, gates",
      summary: "Portrait display network for product-led campaigns and eye-level airport visibility.",
      image: "pkg-03",
    },
    {
      code: "AD-3", title: "Departure Entry Front-Lit Board", category: "Static Boards",
      format: "30 ft x 10 ft front-lit board", units: "1 board",
      location: "Terminal city-side departure entry",
      summary: "Departure-side static inventory for brands that want road-facing airport visibility.",
      image: "ad-3", imageNight: "ad-3-night",
    },
    {
      code: "DIGITAL-FULL", title: "Full-Airport Digital Bundle", category: "Passenger Journey",
      format: "All digital formats across PKG 1–3", units: "39 surfaces",
      location: "Full airport journey",
      summary: "A complete digital campaign path from check-in to gate areas and arrival movement.",
      image: "digital-full",
    },
    {
      code: "BACKLIT-WS", title: "Laptop Workstation Backlit", category: "Passenger Journey",
      format: "Static backlit workstation unit", units: "Selected unit",
      location: "Laptop workstation area",
      summary: "A close-view indoor placement suited to business travellers and high-intent dwell time.",
      image: "backlit-ws",
    },
    {
      code: "PLAN", title: "Custom Airport Campaign Plan", category: "Custom Plans",
      format: "Digital, static & backlit recommendation", units: "Built per campaign",
      location: "Matched to audience, timing & objective",
      summary: "A consultative package when the buyer knows the goal but needs help choosing inventory.",
      image: "pkg-01",
    },
  ],

  POCS: [
    { name: "Mukesh Patel", role: "Founder / Owner", focus: "Commercial direction, long-term relationships, and owner-level approvals." },
    { name: "Mayur Patel", role: "Managing Partner", focus: "Client coordination, campaign follow-through, and business operations." },
    { name: "Ridham Bhuva", role: "Airport ASCO & Manager", focus: "Airport protocol, site visits, approvals, and operations coordination." },
  ],
};
