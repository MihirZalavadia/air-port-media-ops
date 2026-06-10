/* Inventory — lead-gated. Gate form first; once unlocked, a SegmentedControl
   filters a grid of InventoryCards (portfolio/media-owner styling). */
function Inventory({ theme }) {
  const { Eyebrow, Button, Field, SegmentedControl, InventoryCard } = window.DS;
  const [unlocked, setUnlocked] = React.useState(false);
  const [cat, setCat] = React.useState("All");
  const all = window.SITE.INVENTORY;
  const featured = all.slice(0, 4);
  const visible = cat === "All" ? all : all.filter((i) => i.category === cat);
  const imgFor = (item) => window.SITE.IMG(theme === "night" && item.imageNight ? item.imageNight : item.image);

  return (
    <section className="section" id="inventory">
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow>Inventory · Portfolio</Eyebrow>
            <h2 className="h-section">Inventory presented like <em>a body of work</em>.</h2>
          </div>
          <p className="section-head-right">
            We show range, credibility, and starting level publicly. Full board, references,
            and commercials unlock once a buyer shares their campaign window.
          </p>
        </div>

        {!unlocked ? (
          <div className="gate-preview">
            <div className="gate-collage">
              {featured.map((item, i) => (
                <article key={item.code} className={i === 0 ? "collage-feature" : ""}>
                  <div className="gate-layer" style={{ backgroundImage: `url(${imgFor(item)})` }} />
                  <div className="gate-collage-meta">
                    <span>{item.category}</span>
                    <h4>{item.title}</h4>
                  </div>
                </article>
              ))}
            </div>
            <form className="gate-form" onSubmit={(e) => { e.preventDefault(); setUnlocked(true); }}>
              <Eyebrow style={{ gridColumn: "1/-1" }}>Buyer info first</Eyebrow>
              <h3>Unlock the full inventory board</h3>
              <p>Serious buyers share their campaign window before seeing full inventory depth — the lead routes straight to owner-side follow-up.</p>
              <Field label="Name" placeholder="Marketing lead name" />
              <Field label="Company" placeholder="Brand / agency" />
              <Field label="Phone / WhatsApp" placeholder="+91" />
              <Field label="Campaign window" placeholder="Festive · Q3 · launch burst" />
              <Field label="Inventory interest" wide placeholder="Digital package, front-lit board, full airport plan" />
              <Button type="submit" variant="primary" style={{ gridColumn: "1/-1" }}>Unlock Demo Inventory</Button>
            </form>
          </div>
        ) : (
          <React.Fragment>
            <div style={{ marginBottom: 36 }}>
              <SegmentedControl options={["All", ...window.SITE.CATEGORIES]} value={cat} onChange={setCat} />
            </div>
            <div className="portfolio">
              {visible.map((item) => (
                <div key={item.code} className={`work-cell ${item.feature && cat === "All" ? "span-all" : ""}`}>
                  <InventoryCard {...item} image={imgFor(item)} feature={item.feature && cat === "All"} />
                </div>
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    </section>
  );
}

window.Inventory = Inventory;
