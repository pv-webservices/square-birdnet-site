import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Everything public is crawlable. Pages kept out of search (privacy, terms,
 * 404) use a `noindex` meta tag instead of a Disallow rule — Google has to be
 * able to crawl a page to see its noindex.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
