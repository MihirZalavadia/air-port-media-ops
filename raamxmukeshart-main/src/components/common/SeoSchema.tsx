// src/components/common/SeoSchema.tsx

import { siteConfig } from "@/src/lib/seo";

export default function SeoSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AdvertisingAgency",
                "@id": `${siteConfig.url}/#business`,
                name: "Rajkot Airport x Mukesh Arts",
                alternateName: [
                    "Rajkot Airport Media",
                    "Mukesh Arts",
                    "Mukesh Arts Rajkot Airport Media",
                    "Rajkot Airport Advertising Media",
                ],
                url: siteConfig.url,
                logo: `${siteConfig.url}/images/logo.png`,
                image: `${siteConfig.url}${siteConfig.ogImage}`,
                description: siteConfig.description,
                telephone: siteConfig.phone,
                email: siteConfig.email,
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Rajkot",
                    addressRegion: "Gujarat",
                    addressCountry: "IN",
                },
                areaServed: [
                    {
                        "@type": "City",
                        name: "Rajkot",
                    },
                    {
                        "@type": "State",
                        name: "Gujarat",
                    },
                    {
                        "@type": "Country",
                        name: "India",
                    },
                ],
                knowsAbout: [
                    "Airport Advertising",
                    "Rajkot Airport Advertising",
                    "Outdoor Advertising",
                    "OOH Advertising",
                    "DOOH Advertising",
                    "Digital Screen Advertising",
                    "Terminal Branding",
                    "Static Media Boards",
                    "Airport Hoarding Advertising",
                    "Billboard Advertising",
                    "Airport Media Planning",
                ],
                serviceType: [
                    "Airport Advertising",
                    "Digital Screen Advertising",
                    "Static Board Advertising",
                    "Terminal Branding",
                    "Outdoor Airport Hoarding",
                    "Airport Media Planning",
                    "OOH Advertising",
                    "DOOH Advertising",
                ],
            },
            {
                "@type": "WebSite",
                "@id": `${siteConfig.url}/#website`,
                url: siteConfig.url,
                name: siteConfig.name,
                alternateName: siteConfig.shortName,
                description: siteConfig.description,
                publisher: {
                    "@id": `${siteConfig.url}/#business`,
                },
                inLanguage: "en-IN",
            },
            {
                "@type": "WebPage",
                "@id": `${siteConfig.url}/#webpage`,
                url: siteConfig.url,
                name: siteConfig.title,
                description: siteConfig.description,
                isPartOf: {
                    "@id": `${siteConfig.url}/#website`,
                },
                about: {
                    "@id": `${siteConfig.url}/#business`,
                },
                inLanguage: "en-IN",
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}