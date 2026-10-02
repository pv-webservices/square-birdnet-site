import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { brand } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bird Netting & Invisible Grill in Gujarat | SQUARE",
  absoluteTitle: true,
  description: brand.description,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
