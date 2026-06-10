/* Client trust — rotating circular display of approved public clients
   (horizontal scroll on mobile), campaign category chips, support copy.
   Plus the operator-credibility "Why Us" / Growth Layer section. */

function ClientTrust() {
  const { Eyebrow } = window.DS;
  const clients = window.SITE.FEATURED_CLIENTS;
  const types = window.SITE.CAMPAIGN_TYPES;
  const n = clients.length;
  const radius = 210;

  return (
    <section className="section clients" id="clients">
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow>Clients · Brand trust</Eyebrow>
            <h2 className="h-section">Brands that have <em>travelled with us</em>.</h2>
          </div>
          <p className="section-head-right">
            Mukesh Arts has worked across mobile retail, ceramics, jewellery, technology,
            automotive, casting, and regional corporate campaigns.
          </p>
        </div>

        {/* Desktop: rotating orbit */}
        <div className="client-orbit" aria-hidden="false">
          <div className="orbit-ring">
            {clients.map((c, i) => {
              const angle = (360 / n) * i;
              return (
                <span key={c} className="orbit-node"
                      style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` }}>
                  <span className="orbit-chip">{c}</span>
                </span>
              );
            })}
          </div>
          <div className="orbit-core">
            <span className="orbit-core-k">Trusted across</span>
            <strong>8 sectors</strong>
            <span className="orbit-core-s">Selected public clients</span>
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="client-scroll">
          {clients.map((c) => <span key={c} className="scroll-chip">{c}</span>)}
        </div>

        <div className="campaign-types">
          <span className="ct-label">Campaign categories</span>
          <div className="ct-chips">
            {types.map((t) => <span key={t} className="ct-chip">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const { Eyebrow, Card } = window.DS;
  return (
    <section className="section" id="why-us" style={{ background: "var(--bg-deep)" }}>
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow tone="blue">Why us · Growth layer</Eyebrow>
            <h2 className="h-section">Built for advertiser trust, airport execution, <em>and faster campaign decisions</em>.</h2>
          </div>
          <p className="section-head-right">
            Mukesh Arts brings local OOH execution strength, airport protocol coordination,
            client handling, and creative understanding under one operating partner.
          </p>
        </div>
        <div className="why-grid">
          {window.SITE.WHY_US.map((c) => (
            <Card key={c.n}>
              <span className="why-card-num">{c.n}</span>
              <h3>{c.t}</h3>
              <p>{c.p}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ClientTrust = ClientTrust;
window.WhyUs = WhyUs;
