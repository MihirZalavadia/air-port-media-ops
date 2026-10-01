import "./AmbientBackground.css";

/**
 * DRAFT — site-wide ambient sky background.
 * White sky (day) / midnight blue (night), with subtle twinkling stars and
 * plane doodles drifting across. Purely decorative, sits behind all content.
 *
 * ROLLBACK: remove <AmbientBackground /> and the "ambient-on" class from
 * src/app/layout.tsx. Every style override is scoped under html.ambient-on,
 * so removing the class fully restores the original per-section backgrounds.
 */
function Plane({ className }: { className: string }) {
    return (
        <span className={`ambient-plane ${className}`} aria-hidden="true">
            <svg viewBox="0 0 64 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 15 L26 13 L40 3 L45 3 L38 13 L54 12 L60 6 L63 7 L58 14 L63 21 L60 22 L54 16 L38 15 L45 25 L40 25 L26 15 L2 15 Z"
                    fill="currentColor"
                />
            </svg>
            <i className="ambient-trail" aria-hidden="true" />
        </span>
    );
}

export default function AmbientBackground() {
    return (
        <div className="ambient" aria-hidden="true">
            <div className="ambient-sky" />
            <div className="ambient-stars" />
            <div className="ambient-planes">
                <Plane className="ambient-plane-1" />
                <Plane className="ambient-plane-2" />
            </div>
        </div>
    );
}
