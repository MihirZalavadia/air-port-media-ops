/* Team POCs, contact form, and footer (updated office address). */
function getInitials(name) {
  return name.split(" ").slice(0, 2).map((p) => p[0]).join("");
}

function Team() {
  const { Eyebrow, Card } = window.DS;
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow>Owner-side POCs</Eyebrow>
            <h2 className="h-section">Clear contacts, without a homepage <em>built around faces</em>.</h2>
          </div>
          <p className="section-head-right">
            The public brand stays focused on the airport media offer. Serious leads route
            through the form and are matched to the right owner-side person.
          </p>
        </div>
        <div className="team-grid">
          {window.SITE.POCS.map((p) => (
            <Card key={p.name}>
              <div className="poc-initials">{getInitials(p.name)}</div>
              <span className="poc-role">{p.role}</span>
              <h3>{p.name}</h3>
              <p>{p.focus}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { Eyebrow, Button, Field } = window.DS;
  return (
    <section className="section" id="contact" style={{ background: "var(--bg-deep)" }}>
      <div className="container">
        <div className="contact-grid">
          <div>
            <Eyebrow>Request media kit</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16 }}>Tell us the campaign window. We'll suggest <em>the right inventory path</em>.</h2>
            <p className="lede">Share a brief and an owner-side response follows within one working day with the right media kit and availability.</p>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <Field label="Full name" placeholder="Full name" />
            <Field label="Brand / company" placeholder="Brand / company" />
            <Field label="Phone / WhatsApp" placeholder="+91" />
            <Field label="Email" placeholder="name@brand.com" />
            <Field label="Campaign window" placeholder="Festive · Q3 · launch" />
            <Field label="Inventory interest" placeholder="Digital, static, full plan" />
            <Field label="Message" multiline wide rows={4} placeholder="Campaign brief, preferred dates, or notes" />
            <Button type="submit" variant="primary" style={{ gridColumn: "1/-1", justifySelf: "start" }}>Request Media Kit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-inner">
          <div>
            <div className="foot-brand">
              <span className="brand-mark">
                <img className="mark-dark" src="../../assets/logo/mukesh-arts-mark.svg" alt="" />
                <img className="mark-light" src="../../assets/logo/mukesh-arts-mark-light.svg" alt="" />
              </span>
              <h3>Rajkot International Airport × Mukesh Arts</h3>
            </div>
            <p>Premium airport media across Rajkot International Airport, operated by Mukesh Arts. Digital, static, and backlit inventory with consultative campaign planning.</p>
          </div>
          <div className="foot-col">
            <h6>Sections</h6>
            <ul>
              <li><a href="#why-us">Why Airport</a></li>
              <li><a href="#connectivity">Connectivity</a></li>
              <li><a href="#inventory">Inventory</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h6>Reach</h6>
            <ul>
              <li><b>Mukesh Art Main Office</b></li>
              <li>Plot No. 71, Survey No. 145,<br />Jambudiya, Morbi, Gujarat — 363642</li>
              <li style={{ marginTop: 8 }}>Operational media: Rajkot International Airport</li>
              <li>Owner-side response within 1 working day</li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <span>Airport media · Rajkot International Airport × Mukesh Arts</span>
          <span>Concept site · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

window.Team = Team;
window.Contact = Contact;
window.Footer = Footer;
