"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.15,
            smoothWheel: true,
            wheelMultiplier: 0.9,
        });

        // let nav components scroll through Lenis (Header section links) —
        // native scrollIntoView fights Lenis's internal target and loses
        (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const frame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frame);
            lenis.destroy();
            delete (window as unknown as { __lenis?: Lenis }).__lenis;
        };
    }, []);

    return null;
}