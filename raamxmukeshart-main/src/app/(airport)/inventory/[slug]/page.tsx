import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InventoryDetail from "@/src/components/pages/inventory/InventoryDetail";
import {
    getInventoryCategory,
    inventoryCategories,
} from "@/src/lib/inventoryData";

export const dynamicParams = false;

export function generateStaticParams() {
    return inventoryCategories.map((category) => ({ slug: category.slug }));
}

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = getInventoryCategory(slug);

    if (!category) return {};

    // each category page must self-canonicalise — without `alternates`
    // these inherit the root layout's homepage canonical and tell
    // Google all four pages are duplicates of / (found in QA 2026-08-28)
    return {
        title: `${category.title} at Rajkot Airport`,
        description: `Rajkot Airport advertising: ${category.tagline}`,
        alternates: { canonical: `/inventory/${slug}/` },
    };
}

export default async function InventoryCategoryPage({ params }: PageProps) {
    const { slug } = await params;
    const category = getInventoryCategory(slug);

    if (!category) notFound();

    return <InventoryDetail slug={slug} />;
}
