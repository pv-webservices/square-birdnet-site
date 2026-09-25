import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug("cricket-net");

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: { canonical: "/services/cricket-net" },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    images: service ? [{ url: service.heroImage }] : undefined,
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
