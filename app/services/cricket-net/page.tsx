import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { serviceBySlug } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = serviceBySlug("cricket-net");

export const metadata: Metadata = service
  ? pageMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/cricket-net",
      image: "cricket-net",
    })
  : {};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
