"use client";

import Airliner from "./Airliner";

interface Props {
    theme: "day" | "night";
    onToggle: () => void;
}

export default function FlightToggle({
    theme,
    onToggle,
}: Props) {
    const isNight = theme === "night";

    return (
        <button
            type="button"
            onClick={onToggle}
            className="toggle"
            aria-pressed={isNight}
        >
            <span className="toggle-scene">
                <span className="toggle-sun" />
                <span className="toggle-moon" />
                <span className="toggle-cloud toggle-cloud-a" />
                <span className="toggle-cloud toggle-cloud-b" />
                <span className="toggle-star toggle-star-1" />
                <span className="toggle-star toggle-star-2" />
                <span className="toggle-star toggle-star-3" />
                <span className="toggle-runway" />

                <span className="toggle-plane">
                    <Airliner />
                </span>

                <span className="toggle-trail" />
            </span>

            <span className="toggle-label">
                <small>{isNight ? "Night" : "Day"}</small>
                <b>{isNight ? "Runway" : "Takeoff"}</b>
            </span>
        </button>
    );
}