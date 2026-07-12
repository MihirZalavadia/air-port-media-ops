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

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>("[data-motion]").forEach((el) => {
                const type = el.dataset.motion || "up";
                const delay = Number(el.dataset.motionDelay || 0);

                let fromVars: gsap.TweenVars = {
                    opacity: 0,
                    y: 42,
                    x: 0,
                    scale: 1,
                    filter: "blur(8px)",
                };

                if (type === "left") {
                    fromVars = { opacity: 0, x: -46, y: 0, filter: "blur(8px)" };
                }

                if (type === "right") {
                    fromVars = { opacity: 0, x: 46, y: 0, filter: "blur(8px)" };
                }

                if (type === "zoom") {
                    fromVars = { opacity: 0, y: 24, scale: 0.94, filter: "blur(10px)" };
                }

                if (type === "clip") {
                    fromVars = {
                        opacity: 0,
                        y: 24,
                        clipPath: "inset(0% 0% 100% 0%)",
                        filter: "blur(6px)",
                    };
                }

                if (type === "card") {
                    fromVars = {
                        opacity: 0,
                        y: 56,
                        scale: 0.96,
                        rotateX: 8,
                        filter: "blur(10px)",
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
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1,
                        delay,
                        ease: "power3.out",
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
                        y: 50,
                        scale: 0.96,
                        rotateX: 7,
                        filter: "blur(10px)",
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        filter: "blur(0px)",
                        duration: 0.95,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: group,
                            start: "top 82%",
                            once: true,
                        },
                    }
                );
            });

            ScrollTrigger.refresh();
        });

        return () => ctx.revert();
    }, []);

    return null;
}