"use client";

import { useEffect } from "react";

/**
 * Best-effort browser-zoom clamp: zooming is allowed within ±30% of the
 * zoom level at first load, blocked beyond that.
 * - Ctrl/Cmd + wheel (trackpad + mouse zoom)
 * - Ctrl/Cmd + [ + - = _ ] keyboard zoom ("0" reset always allowed)
 * - Safari pinch gesture events
 * Mobile pinch-zoom range is set by the viewport export in layout.tsx.
 * Note: zoom triggered from the browser's own menu can't be intercepted by JS.
 */
export default function ZoomLock() {
    useEffect(() => {
        // browser zoom scales devicePixelRatio, so current/baseline = zoom ratio
        const baseDpr = window.devicePixelRatio || 1;
        const MAX = 1.3;
        const MIN = 0.7;

        const ratio = () => (window.devicePixelRatio || 1) / baseDpr;
        const atMax = () => ratio() >= MAX - 0.001;
        const atMin = () => ratio() <= MIN + 0.001;

        const onWheel = (e: WheelEvent) => {
            if (!(e.ctrlKey || e.metaKey)) return;
            const zoomingIn = e.deltaY < 0;
            if ((zoomingIn && atMax()) || (!zoomingIn && atMin())) {
                e.preventDefault();
            }
        };

        const onKey = (e: KeyboardEvent) => {
            if (!(e.ctrlKey || e.metaKey)) return;
            if (["+", "="].includes(e.key) && atMax()) e.preventDefault();
            if (["-", "_"].includes(e.key) && atMin()) e.preventDefault();
        };

        const onGesture = (e: Event) => {
            const scale = (e as unknown as { scale?: number }).scale ?? 1;
            if ((scale > 1 && atMax()) || (scale < 1 && atMin())) {
                e.preventDefault();
            }
        };

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
