import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors
                graphite: "#323135",
                "polar-mist": "#F5F7F9",

                // Secondary Colors
                "soft-ice-mint": "#CFEBE8",
                "digital-aqua": "#86D0CC",
                "silver-drift": "#C7CCD0",
                "deep-breeze-blue": "#6993CD",

                // Extended Palette (UI states / depth)
                "mint-20": "#EEF8F7",
                "mint-40": "#D5EDEB",
                "mint-120": "#5A968C",
                "blue-20": "#D9E7F6",
                "blue-40": "#ABC6E8",
                "blue-120": "#4060A0",
            },
            fontFamily: {
                // Host Grotesk - Headings & Product Names
                heading: ["var(--font-host-grotesk)", "sans-serif"],
                // Figtree - Body / UI Copy
                body: ["var(--font-figtree)", "sans-serif"],
                // JetBrains Mono - Metrics / Numbers
                mono: ["var(--font-jetbrains-mono)", "monospace"],
                // Inter
                inter: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
