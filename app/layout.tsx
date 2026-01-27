import type { Metadata } from "next";
import "./globals.css";
import { hostGrotesk, figtree, jetbrainsMono } from "./fonts";

export const metadata: Metadata = {
    title: "Tuck - The most realistic virtual fitting room ever built",
    description: "Virtual try-ons that move the metrics that matter. Reduce returns, increase conversions, and build customer confidence.",
    keywords: ["virtual fitting room", "virtual try-on", "fashion tech", "e-commerce", "VTON"],
};

import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${hostGrotesk.variable} ${figtree.variable} ${jetbrainsMono.variable} antialiased`}
            >
                <SmoothScrolling />
                {children}
            </body>
        </html>
    );
}
