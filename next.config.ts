import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // output: "export", // Removed to allow API routes (like /api/send) to function
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
