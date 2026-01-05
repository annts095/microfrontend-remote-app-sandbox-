import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["@annts095/microfrontend-sandbox-ui"],
  // SPAとしてビルド（qiankunで読み込むため）
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
