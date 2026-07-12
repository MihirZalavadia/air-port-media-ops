/* ============================================================
   Rajkot Airport Media × Mukesh Arts — prototype logic
   Vanilla mirror of the production React + GSAP behaviour.
   ============================================================ */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SVGNS = "http://www.w3.org/2000/svg";
  const XLINK = "http://www.w3.org/1999/xlink";
  const el = (id) => document.getElementById(id);
  const make = (n, attrs) => {
    const e = document.createElementNS(SVGNS, n);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  };

  /* ---------------------------------------------------------
     1. LOADER
  --------------------------------------------------------- */
  const loader = el("loader");
  function runLoader() {
    loader.classList.remove("done", "gone");
    // restart CSS animations
    void loader.offsetWidth;
    if (reduce) {
      setTimeout(() => loader.classList.add("done"), 200);
      setTimeout(() => loader.classList.add("gone"), 500);
      return;
    }
    // core fly-by ~1.15s + brand hold, then curtain reveal
    setTimeout(() => loader.classList.add("done"), 2050);
    setTimeout(() => loader.classList.add("gone"), 2950);
  }
  runLoader();
  el("replayLoader").addEventListener("click", runLoader);

  /* ---------------------------------------------------------
     2. CONNECTIVITY ROUTE BOARD
  --------------------------------------------------------- */
  const HUB = { city: "Rajkot", code: "RAJ", x: 265, y: 352 };
  const CITIES = [
    { city: "Delhi",     code: "DEL", mins: "110 min", x: 392, y: 188, ldx: 0,  ldy: -20 },
    { city: "Ahmedabad", code: "AMD", mins: "45 min",  x: 300, y: 350, ldx: 54, ldy: 6 },
    { city: "Mumbai",    code: "BOM", mins: "75 min",  x: 305, y: 432, ldx: -6, ldy: 30 },
    { city: "Goa",       code: "GOI", mins: "95 min",  x: 322, y: 500, ldx: 2,  ldy: 28 },
    { city: "Hyderabad", code: "HYD", mins: "115 min", x: 440, y: 478, ldx: 4,  ldy: -20 },
    { city: "Bengaluru", code: "BLR", mins: "130 min", x: 392, y: 552, ldx: 0,  ldy: 30 },
  ];
  function routePath(c) {
    const midX = (HUB.x + c.x) / 2, midY = (HUB.y + c.y) / 2;
    const dist = Math.hypot(c.x - HUB.x, c.y - HUB.y);
    const cY = midY - Math.max(38, dist * 0.16);
    return `M ${HUB.x} ${HUB.y} Q ${midX} ${cY} ${c.x} ${c.y}`;
  }
  const PLANE = "M-13 1 L-2 -2 L11 -8 L15 -5 L5 0 L15 5 L11 8 L-2 2 L-13 5 Z";

  const svg = el("routeSvg");
  const board = el("routeBoard");
  const list = el("routeList");

  function buildMap() {
    // india fill + outline (same path, drawn as stroke)
    const fill = make("path", { class: "india-fill", d: window.INDIA_PATH });
    const outline = make("path", { class: "india-outline", d: window.INDIA_PATH, pathLength: "1" });
    svg.appendChild(fill);
    svg.appendChild(outline);

    // routes (groups: base + flow + plane)
    CITIES.forEach((c, i) => {
      const d = routePath(c);
      const g = make("g", { class: "route-group", "data-i": i });
      const base = make("path", { class: "route-base", id: "route-" + i, d, pathLength: "1" });
      base.style.setProperty("--rdelay", (1.7 + i * 0.12) + "s");
      const flow = make("path", { class: "route-flow", d });
      flow.style.setProperty("--rdelay", (1.7 + i * 0.12) + "s");

      const plane = make("g", { class: "route-plane" });
      plane.style.setProperty("--rdelay", (1.7 + i * 0.12) + "s");
      plane.appendChild(make("path", { class: "body", d: PLANE }));
      const motion = make("animateMotion", {
        dur: (3 + i * 0.25) + "s", repeatCount: "indefinite", rotate: "auto", begin: "0s",
        keyPoints: "0;1", keyTimes: "0;1", calcMode: "spline", keySplines: "0.45 0 0.25 1",
      });
      const mp = make("mpath", {});
      mp.setAttributeNS(XLINK, "xlink:href", "#route-" + i);
      mp.setAttribute("href", "#route-" + i);
      motion.appendChild(mp);
      plane.appendChild(motion);

      g.appendChild(base); g.appendChild(flow); g.appendChild(plane);
      svg.appendChild(g);
    });

    // hub
    svg.appendChild(make("circle", { class: "hub-glow", cx: HUB.x, cy: HUB.y, r: 60 }));
    svg.appendChild(make("circle", { class: "hub-pulse", cx: HUB.x, cy: HUB.y, r: 8 }));
    svg.appendChild(make("circle", { class: "hub-dot", cx: HUB.x, cy: HUB.y, r: 8 }));
    const hl = make("text", { class: "hub-label", x: HUB.x - 16, y: HUB.y - 16, "text-anchor": "end" });
    hl.textContent = "RAJKOT"; svg.appendChild(hl);
    const hc = make("text", { class: "hub-code", x: HUB.x - 16, y: HUB.y - 3, "text-anchor": "end" });
    hc.textContent = "RAJ HUB"; svg.appendChild(hc);

    // city nodes
    CITIES.forEach((c, i) => {
      const g = make("g", { class: "city-node", "data-i": i, tabindex: "0", role: "button",
        "aria-label": c.city + " route" });
      g.style.setProperty("--cdelay", (1.0 + i * 0.13) + "s");
      g.appendChild(make("circle", { class: "city-ring", cx: c.x, cy: c.y, r: 12 }));
      g.appendChild(make("circle", { class: "city-dot", cx: c.x, cy: c.y, r: 4.6 }));
      const nm = make("text", { class: "city-name", x: c.x + c.ldx, y: c.y + c.ldy, "text-anchor": "middle" });
      nm.textContent = c.city; g.appendChild(nm);
      const cd = make("text", { class: "city-code", x: c.x + c.ldx, y: c.y + c.ldy + 15, "text-anchor": "middle" });
      cd.textContent = c.code + " · " + c.mins; g.appendChild(cd);
      svg.appendChild(g);
    });

    // route list (synced)
    CITIES.forEach((c, i) => {
      const row = document.createElement("div");
      row.className = "route-item";
      row.dataset.i = i;
      row.setAttribute("tabindex", "0");
      row.innerHTML =
        '<span class="ri-name"><i class="ri-dot"></i>' + c.city + "</span>" +
        "<b>" + c.code + " · " + c.mins + "</b>";
      list.appendChild(row);
    });
  }

  // hover / tap sync (steps 7-8)
  let pinned = null;
  function setActive(i) {
    board.classList.add("has-active");
    svg.querySelectorAll(".route-group").forEach((g) => g.classList.toggle("active", +g.dataset.i === i));
    svg.querySelectorAll(".city-node").forEach((g) => g.classList.toggle("active", +g.dataset.i === i));
    list.querySelectorAll(".route-item").forEach((r) => r.classList.toggle("active", +r.dataset.i === i));
  }
  function clearActive() {
    board.classList.remove("has-active");
    svg.querySelectorAll(".active").forEach((n) => n.classList.remove("active"));
    list.querySelectorAll(".active").forEach((n) => n.classList.remove("active"));
  }
  function bindActive(node, i) {
    node.addEventListener("mouseenter", () => { if (pinned === null) setActive(i); });
    node.addEventListener("mouseleave", () => { if (pinned === null) clearActive(); });
    node.addEventListener("focus", () => setActive(i));
    node.addEventListener("click", () => {
      if (pinned === i) { pinned = null; clearActive(); }
      else { pinned = i; setActive(i); }
    });
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); node.click(); }
    });
  }

  function playSequence() {
    if (board.classList.contains("played")) return;
    board.classList.add("played");
  }

  if (window.INDIA_PATH) {
    buildMap();
    svg.querySelectorAll(".city-node").forEach((n) => bindActive(n, +n.dataset.i));
    list.querySelectorAll(".route-item").forEach((n) => bindActive(n, +n.dataset.i));
  }
  el("replayMap").addEventListener("click", () => {
    board.classList.remove("played");
    void board.offsetWidth;
    playSequence();
  });

  /* ---------------------------------------------------------
     3. REVEAL OBSERVER ([data-r]) + map trigger
  --------------------------------------------------------- */
  if (reduce) {
    document.querySelectorAll("[data-r]").forEach((n) => n.classList.add("in"));
    playSequence();
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-r]").forEach((n) => io.observe(n));

    const mapIo = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { playSequence(); mapIo.unobserve(en.target); } });
    }, { threshold: 0.3 });
    mapIo.observe(el("connectivity"));
  }

  /* ---------------------------------------------------------
     4. INVENTORY + LEAD-GATED DRAWER
  --------------------------------------------------------- */
  const A = (n) => "../assets/" + n;
  /* Generic, confirmed airport-media formats only — no invented surfaces, no prices. */
  const INVENTORY = [
    { code: "RAM-01", cat: "Digital", title: "Digital Display Network",
      summary: "A network of digital screens across high-dwell terminal zones — flexible, high-frequency airport visibility you can rotate by campaign window.",
      img: A("air7.png"), gallery: [A("air8.png"), A("air5.png"), A("air6.png")], surfaces: "Digital LED · Terminal" },
    { code: "RAM-02", cat: "Static", title: "Static Backlit Boards",
      summary: "Illuminated backlit boards along primary passenger routes — a clean, always-on canvas that stays sharp from early departures to late arrivals.",
      img: A("air5.png"), gallery: [A("air1.png"), A("air2.png"), A("air8.png")], surfaces: "Backlit · Terminal" },
    { code: "RAM-03", cat: "Static", title: "Airport Front Lit Boards",
      summary: "Large front-lit boards on main concourse walls — a confident, editorial format for flagship brand presence in the airport.",
      img: A("air6.png"), gallery: [A("air7.png"), A("air2.png"), A("air1.png")], surfaces: "Front Lit · Concourse" },
    { code: "RAM-04", cat: "Static", title: "Security Clearance Backlit",
      summary: "Backlit placements around the security-clearance flow, where passengers naturally wait and read — calm, repeat, unmissable exposure.",
      img: A("air2.png"), gallery: [A("air6.png"), A("air8.png"), A("air5.png")], surfaces: "Backlit · Security" },
    { code: "RAM-05", cat: "Static", title: "Laptop Workstation Static Backlit",
      summary: "Backlit panels at the laptop and charging workstations — close-range attention from a settled, high-intent business audience.",
      img: A("air1.png"), gallery: [A("air5.png"), A("air7.png"), A("air6.png")], surfaces: "Backlit · Workstation" },
    { code: "RAM-06", cat: "Packages", title: "Grouped Media Plans",
      summary: "Ready-made Package 1, 2 and 3 combinations across digital and static formats — a simple way to book wide airport coverage as one plan.",
      img: A("air8.png"), gallery: [A("air2.png"), A("air1.png"), A("air5.png")], surfaces: "Bundled · Digital + Static" },
  ];
  const FILTERS = ["All", "Digital", "Static", "Packages"];
  const FILTER_LABEL = { All: "All Media", Digital: "Digital", Static: "Static Boards", Packages: "Packages" };
  let activeFilter = "All";

  const grid = el("invGrid");
  const chips = el("invChips");
  const countEl = el("invCount");

  function visible() {
    return activeFilter === "All" ? INVENTORY : INVENTORY.filter((x) => x.cat === activeFilter);
  }
  function renderChips() {
    chips.innerHTML = "";
    FILTERS.forEach((f) => {
      const b = document.createElement("button");
      b.textContent = FILTER_LABEL[f];
      b.className = activeFilter === f ? "active" : "";
      b.addEventListener("click", () => { activeFilter = f; renderChips(); renderGrid(); });
      chips.appendChild(b);
    });
  }
  function renderGrid() {
    const items = visible();
    countEl.textContent = items.length;
    grid.innerHTML = "";
    items.forEach((it, i) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "inv-card" + (i === 0 ? " large" : "");
      card.setAttribute("aria-label", it.title + " — request full media plan");
      const fan = it.gallery.slice(0, 3).map((g, k) =>
        `<i style="--i:${k};background-image:url('${g}')"></i>`).reverse().join("");
      card.innerHTML =
        '<div class="inv-photo">' +
          `<img src="${it.img}" alt="${it.title} at Rajkot Airport" loading="lazy">` +
          `<span class="inv-badge">${it.code} · ${FILTER_LABEL[it.cat] || it.cat}</span>` +
          `<div class="inv-fan" aria-hidden="true">${fan}</div>` +
          `<span class="inv-stills">${it.gallery.length} site stills</span>` +
        "</div>" +
        '<div class="inv-body">' +
          `<small>${it.surfaces}</small>` +
          `<h3>${it.title}</h3>` +
          `<p>${it.summary}</p>` +
          '<span class="inv-open"><span>Request full media plan</span>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h12M12 6l7 6-7 6"/></svg>' +
          "</span>" +
        "</div>";
      card.addEventListener("click", () => openDrawer(it));
      grid.appendChild(card);
    });
  }

  /* drawer */
  const scrim = el("scrim");
  const drawer = el("drawer");
  function openDrawer(it) {
    el("dMedia").src = it.img;
    el("dMedia").alt = it.title;
    el("dCode").textContent = it.code + " · " + (FILTER_LABEL[it.cat] || it.cat);
    el("dTitle").textContent = it.title;
    el("dSummary").textContent = it.summary;
    el("dMeta").innerHTML =
      `<span>${it.surfaces}</span><span>Rajkot Int'l Airport</span><span>Premium airport visibility</span>`;
    drawer.classList.remove("unlocked");
    resetForm();
    scrim.classList.add("open");
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => el("in-name").focus(), 420);
  }
  function closeDrawer() {
    scrim.classList.remove("open");
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  }
  el("drawerClose").addEventListener("click", closeDrawer);
  scrim.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

  /* lead form validation */
  const form = el("leadForm");
  const nameField = el("f-name"), phoneField = el("f-phone");
  const nameIn = el("in-name"), phoneIn = el("in-phone");

  phoneIn.addEventListener("input", () => {
    phoneIn.value = phoneIn.value.replace(/\D/g, "").slice(0, 10);
    if (phoneField.classList.contains("invalid")) validatePhone();
  });
  nameIn.addEventListener("input", () => {
    if (nameField.classList.contains("invalid")) validateName();
  });
  function setErr(field, msg) {
    field.classList.toggle("invalid", !!msg);
    field.querySelector(".lead-err").textContent = msg || "";
  }
  function validateName() {
    const ok = nameIn.value.trim().length >= 2;
    setErr(nameField, ok ? "" : "Please enter your name.");
    return ok;
  }
  function validatePhone() {
    const ok = /^\d{10}$/.test(phoneIn.value.trim());
    setErr(phoneField, ok ? "" : "Enter a valid 10-digit number.");
    return ok;
  }
  function resetForm() {
    form.reset();
    el("in-cc").value = "+91";
    setErr(nameField, ""); setErr(phoneField, "");
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const okName = validateName();
    const okPhone = validatePhone();
    if (!okName || !okPhone) {
      (!okName ? nameIn : phoneIn).focus();
      return;
    }
    const lead = {
      name: nameIn.value.trim(),
      phone: el("in-cc").value + phoneIn.value.trim(),
      company: el("in-company").value.trim(),
      designation: el("in-role").value.trim(),
      campaignWindow: el("in-window").value.trim(),
      placement: el("dTitle").textContent,
    };
    // TODO: send `lead` to CRM / Google Sheet / Excel lead capture. No backend connected yet.
    console.log("LEAD CAPTURED (todo: persist):", lead);
    el("unlockList").innerHTML = [
      "Exact surface map, dimensions and locations for this placement",
      "Live availability and recommended campaign windows",
      "Audience and footfall context for premium airport visibility",
      "Production specs, creative guidelines and turnaround",
      "A tailored media plan prepared by our owner-operated team",
    ].map((t) => "<li>" + t + "</li>").join("");
    drawer.classList.add("unlocked");
  });

  renderChips();
  renderGrid();

  /* ---------------------------------------------------------
     5. DAY / NIGHT THEME TOGGLE (prototype-only preview control)
        Mirrors the site's <html data-theme="day|night"> switch so the
        night-mode compatibility of the inventory + drawer is verifiable.
  --------------------------------------------------------- */
  const root = document.documentElement;
  root.dataset.brand = "redSky";
  root.dataset.theme = "day";
  const themeBtn = el("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = root.dataset.theme === "night" ? "day" : "night";
      root.dataset.theme = next;
      themeBtn.textContent = next === "night" ? "Day" : "Night";
    });
  }
})();
