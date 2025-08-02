import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during build for MVP deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during build for MVP deployment
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
