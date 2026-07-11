// import "./Home.css";

// export default function CommercialRange() {
//     return (
//         <section className="commercial-fixed-card" id="commercial">

//             <div className="commercial-fixed-inner">
//                 <div className="commercial-fixed-content">
//                     <span className="commercial-fixed-tag">Commercial Range</span>

//                     <h2>
//                         Wide airport media inventory, starting from
//                         <em> ₹2L+ per month.</em>
//                     </h2>

//                     <p>
//                         Pricing stays consultative. Serious buyers share their campaign window,
//                         then receive the right plan, availability, and owner-side follow-up.
//                     </p>

//                     {/* <a href="#contact">Discuss campaign</a> */}
//                 </div>

//                 <div className="commercial-fixed-meta">
//                     <div>
//                         <strong>₹2L+</strong>
//                         <span>Starting monthly range</span>
//                     </div>

//                     <div>
//                         <strong>Custom</strong>
//                         <span>Plan based on media mix</span>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }









// after seo


// import "./Home.css";

// export default function CommercialRange() {
//     return (
//         <section
//             className="commercial-fixed-card"
//             id="commercial"
//             aria-labelledby="commercial-title"
//         >
//             <div className="commercial-fixed-inner">
//                 <div className="commercial-fixed-content">
//                     <span className="commercial-fixed-tag">Commercial Range</span>

//                     <h2 id="commercial-title">
//                         Airport media <br/> plans starting from <br/>
//                         <em> ₹2L+ per month.</em>
//                     </h2>

//                     <p>
//                         Share your campaign window and preferred media mix. We help
//                         shortlist the right airport placements, availability, and plan
//                         based on your brand goals.
//                     </p>

//                     {/* <a href="#contact">Discuss campaign</a> */}
//                 </div>

//                 <div
//                     className="commercial-fixed-meta"
//                     aria-label="Airport advertising commercial highlights"
//                 >
//                     <div>
//                         <strong>₹2L+</strong>
//                         <span>Starting monthly range</span>
//                     </div>

//                     <div>
//                         <strong>Custom</strong>
//                         <span>Plan based on media mix</span>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }





import "./Home.css";

// budget ladder a media buyer can place themselves on — starting teasers
// only, no direct plan links: full inventory unlocks through the form
const commercialTiers = [
    {
        price: "From ₹1.5L/mo",
        name: "In-Terminal Backlit",
        line: "Always-on board at security — no loop, no sharing",
    },
    {
        price: "From ₹2L/mo",
        name: "Digital Screen Packages",
        line: "7 to 39 LED screens playing your creative every 2 minutes",
    },
    {
        price: "From ₹6L/mo",
        name: "City-Side Landmark",
        line: "30'×10' unipole every visitor drives past — flyer or not",
    },
    {
        price: "Custom",
        name: "Full-Airport Hybrid",
        line: "Digital + static bookending the whole passenger journey",
    },
];

export default function CommercialRange() {
    return (
        <section
            className="commercial-fixed-card"
            id="commercial"
            aria-labelledby="commercial-title"
        >
            <div className="commercial-fixed-inner">
                <div className="commercial-fixed-content">
                    <span className="commercial-fixed-tag" data-motion="clip">
                        Commercial Range
                    </span>

                    <h2
                        id="commercial-title"
                        data-motion="up"
                        data-motion-delay="0.08"
                    >
                        Brand Beyond <br />
                        <em> Boundaries.</em>
                    </h2>

                    <p
                        className="commercial-punchline"
                        data-motion="right"
                        data-motion-delay="0.14"
                    >
                        We Create Visibility. We Build Influence.
                    </p>

                    <p data-motion="up" data-motion-delay="0.18">
                        A Mukesh Art company — from a single always-on
                        backlit board to owning every screen in the terminal, every
                        budget has a place at Rajkot Airport. Share your campaign
                        window and we shortlist placements and availability.
                    </p>

                    {/* <a href="#contact">Discuss campaign</a> */}
                </div>

                <div
                    className="commercial-tier-ladder"
                    aria-label="Airport advertising starting budgets"
                    data-motion-group
                >
                    {commercialTiers.map((tier) => (
                        <div
                            className="commercial-tier"
                            key={tier.name}
                            data-motion-item
                        >
                            <strong>{tier.price}</strong>

                            <span className="commercial-tier-copy">
                                <b>{tier.name}</b>
                                <i>{tier.line}</i>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}