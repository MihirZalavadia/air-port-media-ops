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

    return {
        title: category.title,
        description: category.tagline,
    };
}

export default async function InventoryCategoryPage({ params }: PageProps) {
    const { slug } = await params;
    const category = getInventoryCategory(slug);

    if (!category) notFound();

    return <InventoryDetail slug={slug} />;
}
