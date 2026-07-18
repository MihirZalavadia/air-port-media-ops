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
import { inventoryCategories } from "@/src/lib/inventoryData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteConfig.url}/airport/`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.95,
        },
        {
            url: `${siteConfig.url}/publicity/`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.85,
        },
        {
            url: `${siteConfig.url}/contact/`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
        ...inventoryCategories.map((category) => ({
            url: `${siteConfig.url}/inventory/${category.slug}/`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        })),
    ];
}