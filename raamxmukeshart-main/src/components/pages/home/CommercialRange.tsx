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





import Link from "next/link";
import "./Home.css";

// budget ladder a media buyer can place themselves on — each rung is a real
// category with its actual starting teaser, linking to the full inventory
const commercialTiers = [
    {
        price: "₹1.5L/mo",
        name: "In-Terminal Backlit",
        line: "Always-on board at security — no loop, no sharing",
        href: "/inventory/in-terminal-backlit-boards/",
    },
    {
        price: "₹2L/mo",
        name: "Digital Screen Packages",
        line: "7 to 39 LED screens playing your creative every 2 minutes",
        href: "/inventory/digital-screen-network/",
    },
    {
        price: "₹6L/mo",
        name: "City-Side Landmark",
        line: "30'×10' unipole every visitor drives past — flyer or not",
        href: "/inventory/landmark-outdoor-boards/",
    },
    {
        price: "Custom",
        name: "Full-Airport Hybrid",
        line: "Digital + static bookending the whole passenger journey",
        href: "/inventory/hybrid-journey-plans/",
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
                        Every budget has <br />
                        <em> a place at the airport.</em>
                    </h2>

                    <p data-motion="up" data-motion-delay="0.16">
                        From a single always-on backlit board to owning every screen
                        in the terminal — pick the rung that fits, and we shortlist
                        placements and availability for your campaign window.
                    </p>

                    {/* <a href="#contact">Discuss campaign</a> */}
                </div>

                <div
                    className="commercial-tier-ladder"
                    aria-label="Airport advertising starting budgets"
                    data-motion-group
                >
                    {commercialTiers.map((tier) => (
                        <Link
                            className="commercial-tier"
                            href={tier.href}
                            key={tier.name}
                            data-motion-item
                        >
                            <strong>{tier.price}</strong>

                            <span className="commercial-tier-copy">
                                <b>{tier.name}</b>
                                <i>{tier.line}</i>
                            </span>

                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M5 12h12M12 6l7 6-7 6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}