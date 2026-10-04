// src/components/common/BreadcrumbSchema.tsx
import { siteConfig } from "@/src/lib/seo";

type Crumb = { name: string; path: string };

/**
 * Emits BreadcrumbList JSON-LD so sub-pages are eligible for breadcrumb rich
 * results and Google understands the site hierarchy. Schema only (no visible
 * UI) — the paths are absolute off siteConfig.url.
 */
export default function BreadcrumbSchema({ items }: { items: Crumb[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: `${siteConfig.url}${crumb.path}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
