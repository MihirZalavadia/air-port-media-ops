// // src/app/robots.ts

// import type { MetadataRoute } from "next";
// import { siteConfig } from "@/src/lib/seo";

// export default function robots(): MetadataRoute.Robots {
//     return {
//         rules: {
//             userAgent: "*",
//             allow: "/",
//         },
//         sitemap: `${siteConfig.url}/sitemap.xml`,
//         host: siteConfig.url,
//     };
// }





import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    };
}