/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Retired service pages — the site now covers bird net, invisible grill and
  // bird spikes only. Keep old links and search results landing somewhere useful.
  async redirects() {
    return [
      { source: "/services/commercial", destination: "/services/bird-netting", permanent: true },
      { source: "/services/safety-net", destination: "/services/invisible-grill", permanent: true },
    ];
  },
};

export default nextConfig;
