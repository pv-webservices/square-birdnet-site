/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Retired service pages. Safety nets now live as a section of the bird
  // netting page. Keep old links and search results landing somewhere useful.
  async redirects() {
    return [
      { source: "/services/commercial", destination: "/services/bird-netting", permanent: true },
      { source: "/services/safety-net", destination: "/services/bird-netting#safety-net", permanent: true },
    ];
  },
};

export default nextConfig;
