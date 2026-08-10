// src/components/common/SeoSchema.tsx

import { pageSeo, siteConfig } from "@/src/lib/seo";

export default function SeoSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AdvertisingAgency",
                "@id": `${siteConfig.url}/#business`,
                name: "Mukesh Art",
                alternateName: [
                    "Mukesh Airport Media",
                    "Mukesh Publicity",
                    "Rajkot Airport Media",
                    "Mukesh Art Rajkot Airport Media",
                    "Mukeshart",
                    "Mukeshart Airport Media",
                    "Mukeshart Rajkot Airport",
                    "Mukeshart Hirasar Airport Media",
                ],
                url: siteConfig.url,
                logo: `${siteConfig.url}/images/home/logo_mark.png`,
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
                        "@type": "City",
                        name: "Morbi",
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
                    "Airport Branding",
                    "Airport Marketing",
                    "Rajkot Airport Marketing",
                    "Airport Marketing & Visitor Management",
                    "Rajkot Airport Advertising",
                    "Rajkot Airport Branding",
                    "Hirasar Airport Advertising",
                    "Hirasar Airport Media",
                    "Rajkot International Airport Advertising",
                    "Premium Airport Branding",
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
                    "Airport Branding",
                    "Airport Marketing",
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
                // this schema renders on /airport/ — the WebPage entity must
                // describe that page, not the group landing, so Google maps
                // airport-marketing queries to /airport/
                "@type": "WebPage",
                "@id": `${siteConfig.url}/airport/#webpage`,
                url: `${siteConfig.url}/airport/`,
                name: pageSeo.home.title,
                description: pageSeo.home.description,
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