// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollAnimations() {
//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((el) => {
//                 gsap.fromTo(
//                     el,
//                     {
//                         y: 70,
//                         opacity: 0,
//                         filter: "blur(10px)",
//                     },
//                     {
//                         y: 0,
//                         opacity: 1,
//                         filter: "blur(0px)",
//                         duration: 1.1,
//                         ease: "power4.out",
//                         scrollTrigger: {
//                             trigger: el,
//                             start: "top 82%",
//                             once: true,
//                         },
//                     }
//                 );
//             });

//             gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((section) => {
//                 const items = section.querySelectorAll("[data-stagger-item]");

//                 gsap.fromTo(
//                     items,
//                     {
//                         y: 50,
//                         opacity: 0,
//                     },
//                     {
//                         y: 0,
//                         opacity: 1,
//                         duration: 0.9,
//                         stagger: 0.12,
//                         ease: "power3.out",
//                         scrollTrigger: {
//                             trigger: section,
//                             start: "top 78%",
//                             once: true,
//                         },
//                     }
//                 );
//             });
//         });

//         return () => ctx.revert();
//     }, []);

//     return null;
// }






// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function ScrollAnimations() {
//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//         if (reduceMotion) {
//             gsap.set("[data-motion], [data-motion-item]", {
//                 opacity: 1,
//                 y: 0,
//                 x: 0,
//                 scale: 1,
//                 clearProps: "all",
//             });

//             return;
//         }

//         const ctx = gsap.context(() => {
//             const revealItems = gsap.utils.toArray<HTMLElement>("[data-motion]");

//             revealItems.forEach((item) => {
//                 const type = item.dataset.motion || "up";
//                 const delay = Number(item.dataset.motionDelay || 0);

//                 let fromVars: gsap.TweenVars = {
//                     y: 36,
//                     x: 0,
//                     scale: 1,
//                 };

//                 if (type === "left") {
//                     fromVars = {
//                         x: -44,
//                         y: 0,
//                         scale: 1,
//                     };
//                 }

//                 if (type === "right") {
//                     fromVars = {
//                         x: 44,
//                         y: 0,
//                         scale: 1,
//                     };
//                 }

//                 if (type === "zoom") {
//                     fromVars = {
//                         x: 0,
//                         y: 24,
//                         scale: 0.94,
//                     };
//                 }

//                 gsap.fromTo(
//                     item,
//                     {
//                         opacity: 0,
//                         ...fromVars,
//                     },
//                     {
//                         opacity: 1,
//                         x: 0,
//                         y: 0,
//                         scale: 1,
//                         duration: 0.95,
//                         delay,
//                         ease: "power3.out",
//                         scrollTrigger: {
//                             trigger: item,
//                             start: "top 88%",
//                             once: true,
//                         },
//                     }
//                 );
//             });

//             const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-motion-group]");

//             staggerGroups.forEach((group) => {
//                 const children = group.querySelectorAll<HTMLElement>("[data-motion-item]");

//                 if (!children.length) return;

//                 gsap.fromTo(
//                     children,
//                     {
//                         opacity: 0,
//                         y: 38,
//                         scale: 0.96,
//                     },
//                     {
//                         opacity: 1,
//                         y: 0,
//                         scale: 1,
//                         duration: 0.9,
//                         stagger: 0.12,
//                         ease: "power3.out",
//                         scrollTrigger: {
//                             trigger: group,
//                             start: "top 84%",
//                             once: true,
//                         },
//                     }
//                 );
//             });

//             ScrollTrigger.refresh();
//         });

//         return () => ctx.revert();
//     }, []);

//     return null;
// }








"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimations() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion) {
            gsap.set("[data-motion], [data-motion-item]", {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotateX: 0,
                filter: "none",
                clipPath: "inset(0% 0% 0% 0%)",
            });
            return;
        }

        // Same narrative/easing on every screen; phones get shorter travel
        // and lighter blur so the reveals feel identical instead of woozy
        // (large translate + heavy blur are the two Android jank drivers).
        const mm = gsap.matchMedia();

        mm.add(
            {
                isMobile: "(max-width: 768px)",
                isDesktop: "(min-width: 769px)",
            },
            (mmCtx) => {
                const { isMobile } = mmCtx.conditions as { isMobile: boolean };

                const dist = {
                    up: isMobile ? 26 : 42,
                    side: isMobile ? 28 : 46,
                    zoomY: isMobile ? 16 : 24,
                    cardY: isMobile ? 34 : 56,
                    groupY: isMobile ? 30 : 50,
                    blur: isMobile ? "blur(4px)" : "blur(8px)",
                    blurHeavy: isMobile ? "blur(5px)" : "blur(10px)",
                    blurClip: isMobile ? "blur(3px)" : "blur(6px)",
                    stagger: isMobile ? 0.09 : 0.12,
                };

                gsap.utils.toArray<HTMLElement>("[data-motion]").forEach((el) => {
                    const type = el.dataset.motion || "up";
                    const delay = Number(el.dataset.motionDelay || 0);

                    let fromVars: gsap.TweenVars = {
                        opacity: 0,
                        y: dist.up,
                        x: 0,
                        scale: 1,
                        filter: dist.blur,
                    };

                    if (type === "left") {
                        fromVars = { opacity: 0, x: -dist.side, y: 0, filter: dist.blur };
                    }

                    if (type === "right") {
                        fromVars = { opacity: 0, x: dist.side, y: 0, filter: dist.blur };
                    }

                    if (type === "zoom") {
                        fromVars = {
                            opacity: 0,
                            y: dist.zoomY,
                            scale: 0.94,
                            filter: dist.blurHeavy,
                        };
                    }

                    if (type === "clip") {
                        fromVars = {
                            opacity: 0,
                            y: dist.zoomY,
                            clipPath: "inset(0% 0% 100% 0%)",
                            filter: dist.blurClip,
                        };
                    }

                    if (type === "card") {
                        fromVars = {
                            opacity: 0,
                            y: dist.cardY,
                            scale: 0.96,
                            rotateX: 8,
                            filter: dist.blurHeavy,
                        };
                    }

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
                            // only the "clip" variant animates clip-path — setting
                            // it on every element left a permanent inset(0) that
                            // shaved serif descenders on tight line-heights
                            ...(type === "clip"
                                ? { clipPath: "inset(0% 0% 0% 0%)" }
                                : {}),
                            duration: 1,
                            delay,
                            ease: "power3.out",
                            // restore stylesheet values once done so no inline
                            // clip/filter/transform lingers on finished text
                            clearProps: "clipPath,filter,transform,opacity,visibility",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 86%",
                                once: true,
                            },
                        }
                    );
                });

                gsap.utils.toArray<HTMLElement>("[data-motion-group]").forEach((group) => {
                    const items = group.querySelectorAll<HTMLElement>("[data-motion-item]");

                    gsap.fromTo(
                        items,
                        {
                            opacity: 0,
                            y: dist.groupY,
                            scale: 0.96,
                            rotateX: 7,
                            filter: dist.blurHeavy,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            rotateX: 0,
                            filter: "blur(0px)",
                            duration: 0.95,
                            stagger: dist.stagger,
                            ease: "power3.out",
                            clearProps: "filter,transform,opacity,visibility",
                            scrollTrigger: {
                                trigger: group,
                                start: "top 82%",
                                once: true,
                            },
                        }
                    );
                });

                ScrollTrigger.refresh();
            }
        );

        // late media (films, webp galleries) can shift layout after setup —
        // recompute trigger positions once everything has loaded
        const onLoad = () => ScrollTrigger.refresh();
        if (document.readyState === "complete") {
            ScrollTrigger.refresh();
        } else {
            window.addEventListener("load", onLoad, { once: true });
        }

        return () => {
            window.removeEventListener("load", onLoad);
            mm.revert();
        };
    }, []);

    return null;
}