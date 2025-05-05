import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/.',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
