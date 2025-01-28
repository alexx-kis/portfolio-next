import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/portfolio-next',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
