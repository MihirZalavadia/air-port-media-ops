"use client";

import { useEffect, useRef, useState } from "react";

// Defers heavy media (below-fold films, hover-gallery backgrounds) until
// the section approaches the viewport: attach the returned ref and swap
// media in once `near` flips true. Flips once, slightly ahead of arrival
// (rootMargin), so playback is ready by the time the user lands on it.
export function useNearViewport<T extends HTMLElement>(margin = "600px") {
    const ref = useRef<T | null>(null);
    const [near, setNear] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || !("IntersectionObserver" in window)) {
            setNear(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setNear(true);
                    observer.disconnect();
                }
            },
            { rootMargin: margin }
        );
        observer.observe(el);

        return () => observer.disconnect();
    }, [margin]);

    return { ref, near };
}
