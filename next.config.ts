import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000", // localhost
        "localhost:3001",
        "musical-guide-r5xv54x5r7g3v5x-3000.app.github.dev", // Codespaces
        "musical-guide-r5xv54x5r7g3v5x-3001.app.github.dev",
      ],
    },
  },
};

export default nextConfig;
