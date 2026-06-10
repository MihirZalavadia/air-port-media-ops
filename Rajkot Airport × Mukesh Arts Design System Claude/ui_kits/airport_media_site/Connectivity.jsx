/* Connectivity — custom route map graphic with Rajkot as the hub.
   Pure SVG (scales responsively via viewBox), dark blue with red routes. */
function Connectivity() {
  const { Eyebrow } = window.DS;
  const hub = { x: 232, y: 286, label: "Rajkot Int'l", code: "RAJ" };
  const cities = [
    { x: 772, y: 96,  city: "Delhi",     code: "DEL" },
    { x: 880, y: 220, city: "Mumbai",    code: "BOM" },
    { x: 900, y: 350, city: "Pune",      code: "PNQ" },
    { x: 824, y: 470, city: "Hyderabad", code: "HYD" },
    { x: 688, y: 520, city: "Bengaluru", code: "BLR" },
  ];
  const path = (c) => {
    const mx = (hub.x + c.x) / 2;
    const my = Math.min(hub.y, c.y) - 70;
    return `M ${hub.x} ${hub.y} Q ${mx} ${my} ${c.x} ${c.y}`;
  };

  return (
    <section className="section connectivity" id="connectivity">
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow tone="blue">Connectivity</Eyebrow>
            <h2 className="h-section">Connected to India's key <em>metro markets</em>.</h2>
          </div>
          <p className="section-head-right">
            Rajkot International Airport connects Gujarat's business corridor with India's
            major metro markets — making airport media valuable for both regional and
            national brands.
          </p>
        </div>

        <div className="route-frame">
          <svg viewBox="0 0 1000 580" className="route-svg" role="img"
               aria-label="Route map from Rajkot International Airport to Delhi, Mumbai, Pune, Hyderabad and Bengaluru">
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* faint lat/long grid */}
            <g className="route-grid">
              {[120, 240, 360, 480].map((y) => <line key={"h"+y} x1="40" y1={y} x2="960" y2={y} />)}
              {[160, 320, 480, 640, 800].map((x) => <line key={"v"+x} x1={x} y1="40" x2={x} y2="540" />)}
            </g>

            {/* routes */}
            {cities.map((c, i) => (
              <path key={c.code} d={path(c)} className="route-line"
                    style={{ animationDelay: `${i * 0.4}s` }} />
            ))}

            {/* hub glow + node */}
            <circle cx={hub.x} cy={hub.y} r="64" fill="url(#hubGlow)" />
            <circle cx={hub.x} cy={hub.y} r="9" className="route-hub" />
            <circle cx={hub.x} cy={hub.y} r="9" className="route-hub-pulse" />
            <text x={hub.x} y={hub.y + 34} className="route-hub-label" textAnchor="middle">{hub.label.toUpperCase()}</text>
            <text x={hub.x} y={hub.y + 54} className="route-hub-code" textAnchor="middle">{hub.code} · HUB</text>

            {/* city nodes */}
            {cities.map((c) => {
              const left = c.x > hub.x + 300 ? false : c.x < 760;
              return (
                <g key={c.code} className="route-node">
                  <circle cx={c.x} cy={c.y} r="5.5" className="route-dot" />
                  <text x={c.x} y={c.y - 16} textAnchor="middle" className="route-city">{c.city}</text>
                  <text x={c.x} y={c.y + 26} textAnchor="middle" className="route-code">{c.code}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

window.Connectivity = Connectivity;
