import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";
import { lastModified } from "@/lib/lastModified";

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: "monthly" | "yearly";
  /** Source files whose last commit date becomes this URL's lastmod. */
  sources: string[];
  image?: string;
};

/** Contact details, service areas and shared copy appear on every page. */
const SHARED = ["data/site.ts"];

/**
 * Indexable pages only. Privacy and terms are `noindex`, so listing them here
 * would send Search Console conflicting signals.
 */
const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", priority: 1, changeFrequency: "monthly", sources: ["app/page.tsx", "components/home"], image: "/images/hero/hero-balcony.webp" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly", sources: ["app/services/page.tsx", "data/services.ts"], image: "/images/hero/towers-skyline.webp" },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly", sources: ["app/contact/page.tsx", "components/contact"] },
  { path: "/about", priority: 0.8, changeFrequency: "yearly", sources: ["app/about/page.tsx"], image: "/images/team/installation-01.webp" },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly", sources: ["app/projects/page.tsx", "data/projects.ts"], image: "/images/projects/project-02.webp" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly", sources: ["app/faq/page.tsx", "data/faqs.ts"] },
  { path: "/videos", priority: 0.6, changeFrequency: "monthly", sources: ["app/videos/page.tsx", "data/videos.ts"], image: "/images/videos/building-facade-netting.webp" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, image, sources, ...entry }) => ({
    ...entry,
    url: absoluteUrl(path),
    lastModified: lastModified([...sources, ...SHARED]),
    ...(image ? { images: [absoluteUrl(image)] } : {}),
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: lastModified([`app/services/${service.slug}`, "data/services.ts", "components/services", ...SHARED]),
    priority: 0.85,
    changeFrequency: "monthly",
    images: [absoluteUrl(service.heroImage)],
  }));

  return [...staticRoutes, ...serviceRoutes];
}
