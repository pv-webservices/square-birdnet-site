import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const BASE = "https://www.squarebirdnet.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = ([
    { url: `${BASE}/`, priority: 1, changeFrequency: "monthly" },
    { url: `${BASE}/about`, priority: 0.8, changeFrequency: "yearly" },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/projects`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/videos`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE}/faq`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/contact`, priority: 0.9, changeFrequency: "yearly" },
    { url: `${BASE}/privacy-policy`, priority: 0.2, changeFrequency: "yearly" },
    { url: `${BASE}/terms`, priority: 0.2, changeFrequency: "yearly" },
  ] as const).map((entry) => ({ ...entry, lastModified }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE}/services/${service.slug}`,
    lastModified,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...serviceRoutes];
}
