/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
  // Turbopack icin bos config (webpack uyarısını kapatır)
  turbopack: {},
};

module.exports = nextConfig;
