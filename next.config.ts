import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // Enabled for static export (note: API routes might not work)
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
