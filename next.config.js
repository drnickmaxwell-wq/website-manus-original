/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [];
  },
};
module.exports = nextConfig;
