/* Hero — full-bleed airport media background, eyebrow, H1, subcopy, CTAs, stat strip */
function Hero({ theme }) {
  const { Button, Eyebrow, StatStrip } = window.DS;
  const Arrow = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
  );
  return (
    <section id="top" className="hero">
      <div className="hero-photo day" style={{ backgroundImage: `url(${window.SITE.IMG("hero-day")})` }} />
      <div className="hero-photo night" style={{ backgroundImage: `url(${window.SITE.IMG("hero-night")})` }} />
      <div className="container hero-content">
        <Eyebrow style={{ color: "var(--accent)" }}>Rajkot International Airport Media</Eyebrow>
        <h1 className="hero-h1">Airport media visibility,<br /><em>engineered by Mukesh Arts.</em></h1>
        <p className="hero-sub">
          Digital screens, static hoardings, backlit media, and campaign packages across
          Rajkot International Airport — inventory you can shortlist and a path to a
          CRM-tracked relationship.
        </p>
        <div className="hero-actions">
          <Button variant="primary" onPhoto href="#contact" icon={<Arrow/>}>Request Media Kit</Button>
          <Button variant="ghost" onPhoto href="#inventory">View Inventory</Button>
        </div>
      </div>
      <div className="container">
        <div style={{ paddingBottom: 22 }}>
          <StatStrip onPhoto stats={window.SITE.AIRPORT_STATS} />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
