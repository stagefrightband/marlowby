import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
