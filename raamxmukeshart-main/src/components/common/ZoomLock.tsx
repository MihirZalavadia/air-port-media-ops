"use client";

import { useEffect } from "react";

/**
 * Best-effort browser-zoom lock.
 * - Blocks Ctrl/Cmd + wheel (trackpad + mouse zoom)
 * - Blocks Ctrl/Cmd + [ + - = 0 _ ] keyboard zoom
 * - Blocks Safari pinch gesture events
 * Mobile pinch-zoom is handled by the viewport export in layout.tsx.
 * Note: zoom triggered from the browser's own menu can't be intercepted by JS.
 */
export default function ZoomLock() {
    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if (e.ctrlKey || e.metaKey) e.preventDefault();
        };

        const onKey = (e: KeyboardEvent) => {
            if (
                (e.ctrlKey || e.metaKey) &&
                ["+", "-", "=", "0", "_"].includes(e.key)
            ) {
                e.preventDefault();
            }
        };

        const onGesture = (e: Event) => e.preventDefault();

        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("keydown", onKey);
        document.addEventListener("gesturestart", onGesture);
        document.addEventListener("gesturechange", onGesture);
        document.addEventListener("gestureend", onGesture);

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("keydown", onKey);
            document.removeEventListener("gesturestart", onGesture);
            document.removeEventListener("gesturechange", onGesture);
            document.removeEventListener("gestureend", onGesture);
        };
    }, []);

    return null;
}
