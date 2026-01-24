import localFont from "next/font/local";

// Host Grotesk - Headings & Product Names
export const hostGrotesk = localFont({
    src: [
        {
            path: "../host grotesk/HostGrotesk-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../host grotesk/HostGrotesk-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../host grotesk/HostGrotesk-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../host grotesk/HostGrotesk-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../host grotesk/HostGrotesk-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../host grotesk/HostGrotesk-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-host-grotesk",
    display: "swap",
});

// Figtree - Body / UI Copy
export const figtree = localFont({
    src: [
        {
            path: "../Figtree/Figtree-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../Figtree/Figtree-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../Figtree/Figtree-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../Figtree/Figtree-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../Figtree/Figtree-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../Figtree/Figtree-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-figtree",
    display: "swap",
});

// JetBrains Mono - Metrics / Numbers (from Google Fonts)
import { JetBrains_Mono } from "next/font/google";

export const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});
