import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { serviceBySlug } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = serviceBySlug("bird-netting");

export const metadata: Metadata = service
  ? pageMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/bird-netting",
      image: "bird-netting",
    })
  : {};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
