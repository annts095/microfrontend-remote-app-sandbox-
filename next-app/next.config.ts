import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@annts095/microfrontend-sandbox-ui"],
  output: "export",
  images: {
    unoptimized: true,
  },
  // CORSヘッダーを設定（qiankunで読み込むため）
  // 注意: output: "export"がある場合、開発サーバー（next dev）でのみ動作します
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:4000", // アプリシェルのオリジン
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
