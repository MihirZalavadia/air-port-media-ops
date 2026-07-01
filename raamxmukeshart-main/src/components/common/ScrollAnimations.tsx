"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Sitewide scroll + reveal system (GSAP + ScrollTrigger only — no extra plugins).
 *
 * Opt-in via data attributes:
 *   data-motion="up|left|right|zoom|clip|card|mask|fade"  — single element reveal
 *   data-motion-delay="0.12"                              — per-element delay (s)
 *   data-motion-group  +  data-motion-item                — staggered card group
 *   data-parallax="14"                                    — premium parallax (% travel, scrubbed)
 *   data-draw                                             — SVG <path> route/line draw on scroll
 *
 * Respects prefers-reduced-motion (everything snaps to its final state).
 */
export default function ScrollAnimations() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduce) {
            gsap.set("[data-motion], [data-motion-item]", {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotateX: 0,
                filter: "none",
                clipPath: "inset(0% 0% 0% 0%)",
                clearProps: "transform,filter,clipPath",
            });
            gsap.set("[data-parallax]", { clearProps: "transform" });
            gsap.set("[data-draw]", { clearProps: "strokeDasharray,strokeDashoffset" });
            return;
        }

        const ctx = gsap.context(() => {
            /* ---- single-element reveals ---- */
            gsap.utils.toArray<HTMLElement>("[data-motion]").forEach((el) => {
                const type = el.dataset.motion || "up";
                const delay = Number(el.dataset.motionDelay || 0);

                let fromVars: gsap.TweenVars = { opacity: 0, y: 42, filter: "blur(8px)" };

                if (type === "left") fromVars = { opacity: 0, x: -46, filter: "blur(8px)" };
                if (type === "right") fromVars = { opacity: 0, x: 46, filter: "blur(8px)" };
                if (type === "zoom") fromVars = { opacity: 0, y: 24, scale: 0.94, filter: "blur(10px)" };
                if (type === "fade") fromVars = { opacity: 0, y: 14 };
                if (type === "clip")
                    fromVars = { opacity: 0, y: 24, clipPath: "inset(0% 0% 100% 0%)", filter: "blur(6px)" };
                if (type === "card")
                    fromVars = { opacity: 0, y: 56, scale: 0.96, rotateX: 8, filter: "blur(10px)" };
                // title mask reveal — clean bottom-up wipe, no blur
                if (type === "mask")
                    fromVars = { opacity: 1, y: 0, clipPath: "inset(0% 0% 100% 0%)" };

                gsap.fromTo(
                    el,
                    fromVars,
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        filter: "blur(0px)",
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: type === "mask" ? 1.15 : 1,
                        delay,
                        ease: type === "mask" ? "power4.out" : "power3.out",
                        scrollTrigger: { trigger: el, start: "top 86%", once: true },
                    }
                );
            });

            /* ---- staggered groups (card stagger) ---- */
            gsap.utils.toArray<HTMLElement>("[data-motion-group]").forEach((group) => {
                const items = group.querySelectorAll<HTMLElement>("[data-motion-item]");
                if (!items.length) return;

                gsap.fromTo(
                    items,
                    { opacity: 0, y: 50, scale: 0.96, rotateX: 7, filter: "blur(10px)" },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        filter: "blur(0px)",
                        duration: 0.95,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: { trigger: group, start: "top 82%", once: true },
                    }
                );
            });

            /* ---- premium parallax (scrubbed) ---- */
            gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
                const amount = Number(el.dataset.parallax || 12);
                gsap.fromTo(
                    el,
                    { yPercent: -amount },
                    {
                        yPercent: amount,
                        ease: "none",
                        scrollTrigger: {
                            trigger: (el.parentElement as HTMLElement) || el,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            });

            /* ---- SVG route / line draw ---- */
            gsap.utils.toArray<SVGGeometryElement>("[data-draw]").forEach((path) => {
                const len =
                    typeof path.getTotalLength === "function" ? path.getTotalLength() : 0;
                if (!len) return;
                gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: { trigger: path, start: "top 85%", once: true },
                });
            });

            ScrollTrigger.refresh();
        });

        return () => ctx.revert();
    }, []);

    return null;
}
