// // src/app/sitemap.ts

// import type { MetadataRoute } from "next";
// import { siteConfig } from "@/src/lib/seo";

// export default function sitemap(): MetadataRoute.Sitemap {
//     const routes = [
//         {
//             path: "",
//             priority: 1,
//         },
//         {
//             path: "#about",
//             priority: 0.85,
//         },
//         {
//             path: "#inventory",
//             priority: 0.95,
//         },
//         {
//             path: "#gallery",
//             priority: 0.75,
//         },
//         {
//             path: "#contact",
//             priority: 0.9,
//         },
//     ];

//     return routes.map((route) => ({
//         url: `${siteConfig.url}/${route.path}`,
//         lastModified: new Date(),
//         changeFrequency: "weekly",
//         priority: route.priority,
//     }));
// }




import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}