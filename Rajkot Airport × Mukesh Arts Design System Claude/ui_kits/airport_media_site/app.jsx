/* App root — owns palette (brand) + theme state, flips <html> data attrs. */
function App() {
  const [theme, setTheme] = React.useState("day");
  const [brand, setBrand] = React.useState("maroonBlue");

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.brand = brand;
  }, [theme, brand]);

  const { Nav, Hero, Connectivity, ClientTrust, WhyUs, Inventory, Team, Contact, Footer } = window;

  return (
    <React.Fragment>
      <Nav theme={theme} brand={brand}
           toggleTheme={() => setTheme((t) => (t === "night" ? "day" : "night"))}
           toggleBrand={() => setBrand((b) => (b === "maroonBlue" ? "redSky" : "maroonBlue"))} />
      <main>
        <Hero theme={theme} />
        <Connectivity />
        <WhyUs />
        <Inventory theme={theme} />
        <ClientTrust />
        <Team />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
