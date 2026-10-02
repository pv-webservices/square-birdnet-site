import type { MetadataRoute } from "next";
import { brand } from "@/data/site";
import { SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: brand.name,
    description: brand.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#07365f",
    icons: [{ src: "/icon.png", sizes: "180x180", type: "image/png" }],
  };
}
