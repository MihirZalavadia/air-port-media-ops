/* Top navigation — brand mark, primary nav, palette + day/night toggles, CTA */
function Logo() {
  return (
    <a href="#top" className="brand" aria-label="Rajkot International Airport × Mukesh Arts">
      <span className="brand-mark">
        <img className="mark-dark" src="../../assets/logo/mukesh-arts-mark.svg" alt="" />
        <img className="mark-light" src="../../assets/logo/mukesh-arts-mark-light.svg" alt="" />
      </span>
      <span className="brand-text">
        <b>Rajkot International Airport</b>
        <small>× Mukesh Arts · Airport Media</small>
      </span>
    </a>
  );
}

function PaletteToggle({ brand, onToggle }) {
  const isRedSky = brand === "redSky";
  return (
    <button type="button" className={`pill-toggle ${isRedSky ? "is-red-sky" : ""}`} onClick={onToggle}
      aria-label="Switch palette" title="Switch palette">
      <span className="pill-dot" aria-hidden="true" />
      <span className="pill-label"><small>Palette</small><b>{isRedSky ? "Red / Sky" : "Maroon / Blue"}</b></span>
    </button>
  );
}

function ThemeToggle({ theme, onToggle }) {
  const isNight = theme === "night";
  return (
    <button type="button" className="pill-toggle" onClick={onToggle}
      aria-pressed={isNight} aria-label="Switch day / night" title="Switch day / night">
      <span className={`scene ${isNight ? "night" : ""}`} aria-hidden="true">
        <span className="scene-orb" />
        <span className="scene-line" />
      </span>
      <span className="pill-label"><small>{isNight ? "Night" : "Day"}</small><b>{isNight ? "Runway" : "Takeoff"}</b></span>
    </button>
  );
}

function Nav({ theme, brand, toggleTheme, toggleBrand }) {
  const { Button } = window.DS;
  const links = [
    ["#why", "Why Airport"], ["#connectivity", "Connectivity"], ["#inventory", "Inventory"],
    ["#clients", "Clients"], ["#why-us", "Growth Layer"], ["#contact", "Contact"],
  ];
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="nav-end">
          <PaletteToggle brand={brand} onToggle={toggleBrand} />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Button variant="primary" href="#contact">Request Media Kit</Button>
        </div>
      </div>
    </header>
  );
}

window.Nav = Nav;
