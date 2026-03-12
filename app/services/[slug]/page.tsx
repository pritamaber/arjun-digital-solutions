import ServiceLayout from "@/components/ServiceLayout";
import { services } from "@/data/services";

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    return <div className="p-20 text-center">Service not found</div>;
  }

  return <ServiceLayout slug={slug} />;
}
