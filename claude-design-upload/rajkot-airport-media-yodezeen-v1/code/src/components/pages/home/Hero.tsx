const AIRPORT_STATS = [
    { value: "10-15", label: "Prime Ad Sites" },
    { value: "70-80", label: "Media Surfaces" },
    { value: "24/7", label: "Airport Visibility" },
    { value: "100%", label: "Premium Brand Recall" },
];
const airportVideo = "/videos/hero_media.mp4";
export default function Hero() {
    return (
        <section id="top" className="hero">

            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={airportVideo} type="video/mp4" />
            </video>

            <div className="hero-overlay" />
            <div className="hero-glow hero-glow-left" />
            <div className="hero-glow hero-glow-right" />

            <div className="container hero-content">
                <div className="hero-badge">
                    <span></span>
                    Rajkot Airport Advertising Media
                </div>

                <h1 className="hero-h1">
                    Premium Airport Media for <em>High-Impact Brands.</em>
                </h1>

                <p className="hero-sub">
                    Showcase your brand across Rajkot Airport’s premium advertising
                    network with high-visibility airport media, digital screens, static
                    boards, and passenger journey touchpoints designed for maximum recall.
                </p>

                <div className="hero-trust">
                    {[
                        "OOH Media",
                        "Airport Branding",
                        "Digital Screens",
                        "Static Boards",
                    ].map((item, index) => (
                        <span key={item} style={{ "--i": index } as React.CSSProperties}>
                            <b>0{index + 1}</b>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="container hero-stats-wrap">
                <div className="hero-stats">
                    {AIRPORT_STATS.map((stat) => (
                        <article key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}