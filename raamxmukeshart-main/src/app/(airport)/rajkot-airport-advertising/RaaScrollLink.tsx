"use client";

import type { ReactNode } from "react";

type LenisWindow = Window & {
    __lenis?: { scrollTo: (t: Element, o?: { offset?: number }) => void };
};

/**
 * In-page smooth-scroll link. Lenis (SmoothScroller) doesn't intercept native
 * hash anchors — they race its internal target and lose (you land at the top),
 * so we scroll through Lenis directly, same pattern as the site Header. Falls
 * back to native scrollIntoView when Lenis isn't mounted.
 */
export default function RaaScrollLink({
    targetId,
    className,
    children,
    ariaLabel,
}: {
    targetId: string;
    className?: string;
    children: ReactNode;
    ariaLabel?: string;
}) {
    function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
        const target = document.getElementById(targetId);
        if (!target) return; // nothing to scroll to, let the href behave

        event.preventDefault();

        const lenis = (window as LenisWindow).__lenis;
        if (lenis) {
            lenis.scrollTo(target, { offset: -84 });
        } else {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        history.replaceState(null, "", `#${targetId}`);
    }

    return (
        <a href={`#${targetId}`} className={className} onClick={handleClick} aria-label={ariaLabel}>
            {children}
        </a>
    );
}
