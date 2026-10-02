/** @type {import('next').NextConfig} */

// Files in public/ keep stable names, so cache for 30 days rather than forever.
const MEDIA_CACHE = "public, max-age=2592000, stale-while-revalidate=86400";

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Optimised variants are reused for 30 days instead of the 60-second default.
    minimumCacheTTL: 2592000,
  },
  // Security headers live here rather than in netlify.toml: on Netlify's
  // Next.js runtime (OpenNext) pages are served by the Next server, which
  // applies next.config headers to every response, static or rendered.
  // /_next/static/* is content-hashed and already sent as immutable by Next.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // The site uses none of these browser features.
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: MEDIA_CACHE }] },
      { source: "/videos/:path*", headers: [{ key: "Cache-Control", value: MEDIA_CACHE }] },
    ];
  },
  // Retired service pages. Safety nets now live as a section of the bird
  // netting page. Keep old links and search results landing somewhere useful.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/services/commercial", destination: "/services/bird-netting", permanent: true },
      { source: "/services/safety-net", destination: "/services/bird-netting#safety-net", permanent: true },
    ];
  },
};

export default nextConfig;
