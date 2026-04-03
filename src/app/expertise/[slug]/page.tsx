import { getAllServiceSlugs } from "@/lib/services";
import ServicePageClient from "./ServicePageClient";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServicePageClient slug={slug} />;
}
