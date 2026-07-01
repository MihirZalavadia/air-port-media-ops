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
                        Airport media <br /> plans starting from <br />
                        <em> ₹2L+ per month.</em>
                    </h2>

                    <p data-motion="up" data-motion-delay="0.16">
                        Share your campaign window and preferred media mix. We help
                        shortlist the right airport placements, availability, and plan
                        based on your brand goals.
                    </p>

                    {/* <a href="#contact">Discuss campaign</a> */}
                </div>

                <div
                    className="commercial-fixed-meta"
                    aria-label="Airport advertising commercial highlights"
                    data-motion-group
                >
                    <div data-motion-item>
                        <strong>₹2L+</strong>
                        <span>Starting monthly range</span>
                    </div>

                    <div data-motion-item>
                        <strong>Custom</strong>
                        <span>Plan based on media mix</span>
                    </div>
                </div>
            </div>
        </section>
    );
}