// FAQ — targets the exact questions buyers type/speak into Google, with
// FAQPage structured data so answers are eligible for rich results.

import "./Home.css";

const FAQS = [
    {
        q: "How do I advertise at Rajkot International Airport?",
        a: "Contact Mukesh Art (Mukesh Airport Media) — the airport advertising media partner at Rajkot International Airport (Hirasar), working with the Airports Authority of India. Share your brand and timeline through the enquiry form or WhatsApp, and the team maps the right screens, boards, or packages.",
    },
    {
        q: "How much does Rajkot Airport advertising cost?",
        a: "Public teaser rates: digital LED screen packages start around ₹2 Lac/month, in-terminal backlit boards from ₹1.5 Lac/month, and landmark outdoor boards from ₹6 Lac/month (all + GST). The exact rate card and availability are shared on request.",
    },
    {
        q: "What advertising options are available at Rajkot Airport?",
        a: "39 LED digital screens across arrivals, check-in, security hold and exit; always-on backlit boards at high-dwell chokepoints; five large-format frontlit boards on the city side and approach road; and hybrid journey plans that combine digital and static in one buy.",
    },
    {
        q: "How many passengers will see my brand at Rajkot Airport?",
        a: "Roughly 1.25–1.30 lakh passenger visits a month (4,200+ a day) with 28 daily flight movements, and 35–50 minutes of average dwell time inside security — plus every dropper and taxi on the approach road for the outdoor boards.",
    },
];

export default function Faq() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <section className="faq-section" id="faq" aria-labelledby="faq-title">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className="container">
                <span className="premium-eyebrow" data-motion="clip">
                    Common Questions
                </span>

                <h2 className="premium-heading" id="faq-title" data-motion="up">
                    Asked before <em>every campaign.</em>
                </h2>

                <div className="faq-list" data-motion-group>
                    {FAQS.map((f) => (
                        <details className="faq-item" key={f.q} data-motion-item>
                            <summary>{f.q}</summary>
                            <p>{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
